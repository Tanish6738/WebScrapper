from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import requests
import tempfile
import os
import csv
import json
import uuid

app = Flask(__name__)
CORS(app)

# In-memory storage for extracted data (per session/user in real app)
extracted_data = {}

# Utility: Scrape static content
def scrape_static(url, tags=None):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    if tags:
        data = {tag: [str(e) for e in soup.find_all(tag)] for tag in tags}
    else:
        data = {'content': soup.prettify()}
    return data

# Utility: Scrape dynamic content
def scrape_dynamic(url, tags=None):
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(url)
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    if tags:
        data = {tag: [str(e) for e in soup.find_all(tag)] for tag in tags}
    else:
        data = {'content': soup.prettify()}
    driver.quit()
    return data

# Endpoint: Scrape
@app.route('/scrape', methods=['POST'])
def scrape():
    req = request.get_json(force=True)
    url = req.get('url')
    tags = req.get('tags')  # list or None
    mode = req.get('mode', 'static')  # 'static' or 'dynamic'
    if not url:
        return jsonify({'error': 'URL is required'}), 400
    try:
        if mode == 'dynamic':
            data = scrape_dynamic(url, tags)
        else:
            data = scrape_static(url, tags)
        scrape_id = str(uuid.uuid4())
        extracted_data[scrape_id] = data
        return jsonify({'scrape_id': scrape_id, 'data': data})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Endpoint: Clean data
@app.route('/clean', methods=['POST'])
def clean():
    req = request.get_json(force=True)
    data = req.get('data')
    remove_keys = req.get('remove_keys', [])
    remove_indices = req.get('remove_indices', {})  # {tag: [indices]}
    selected_tags = req.get('selected_tags', [])  # Only keep these tags
    
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid data format'}), 400
    
    cleaned_data = data.copy()
    
    # Remove specified keys/tags completely
    for key in remove_keys:
        if key in cleaned_data:
            del cleaned_data[key]
    
    # Remove specific indices from tag arrays
    for tag, indices in remove_indices.items():
        if tag in cleaned_data and isinstance(cleaned_data[tag], list):
            # Sort indices in descending order to remove from end first
            for index in sorted(indices, reverse=True):
                if 0 <= index < len(cleaned_data[tag]):
                    cleaned_data[tag].pop(index)
    
    # Keep only selected tags if specified
    if selected_tags:
        filtered_data = {}
        for tag in selected_tags:
            if tag in cleaned_data:
                filtered_data[tag] = cleaned_data[tag]
        cleaned_data = filtered_data
    
    return jsonify({'data': cleaned_data})

# Endpoint: Get data structure for cleaning interface
@app.route('/data-structure', methods=['POST'])
def get_data_structure():
    req = request.get_json(force=True)
    data = req.get('data')
    
    if not isinstance(data, dict):
        return jsonify({'error': 'Invalid data format'}), 400
    
    structure = {}
    for tag, elements in data.items():
        if isinstance(elements, list):
            structure[tag] = {
                'count': len(elements),
                'type': 'array',
                'sample': elements[:3] if elements else []
            }
        else:
            structure[tag] = {
                'count': 1,
                'type': 'single',
                'sample': [str(elements)[:200] + '...' if len(str(elements)) > 200 else str(elements)]
            }
    
    return jsonify({'structure': structure})

def clean_html_content(html):
    """
    Clean and organize HTML content for better export to text, markdown, etc.
    - Remove scripts, styles, and comments
    - Extract visible text and structure
    """
    soup = BeautifulSoup(html, 'html.parser')
    # Remove script, style, and comments
    for tag in soup(['script', 'style']):
        tag.decompose()
    for comment in soup.find_all(string=lambda text: isinstance(text, type(soup.Comment))):
        comment.extract()
    # Get text with structure
    lines = []
    for element in soup.find_all(['h1','h2','h3','h4','h5','h6','p','li','a','span','div']):
        text = element.get_text(strip=True)
        if text:
            lines.append(text)
    return '\n'.join(lines)

# Utility: Convert data to various formats
def convert_data(data, fmt):
    # Clean HTML if 'content' key exists
    if 'content' in data:
        clean_text = clean_html_content(data['content'])
    else:
        clean_text = None
    
    if fmt == 'json':
        return json.dumps(data, indent=2), 'application/json'
    elif fmt == 'csv':
        # Flatten and write to CSV
        fd, path = tempfile.mkstemp(suffix='.csv')
        with os.fdopen(fd, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            if 'content' in data and clean_text:
                writer.writerow(['content'])
                for line in clean_text.split('\n'):
                    if line.strip():
                        writer.writerow([line.strip()])
            else:
                # Write header
                writer.writerow(['Tag', 'Index', 'Content'])
                
                for key, values in data.items():
                    if isinstance(values, list):
                        for index, value in enumerate(values):
                            # Clean HTML from value if it's a string
                            if isinstance(value, str):
                                clean_value = clean_html_content(value)
                            else:
                                clean_value = str(value)
                            writer.writerow([key, index, clean_value])
                    else:
                        if isinstance(values, str):
                            clean_value = clean_html_content(values)
                        else:
                            clean_value = str(values)
                        writer.writerow([key, 0, clean_value])
        return path, 'text/csv'
    elif fmt == 'md':
        if 'content' in data and clean_text:
            md_content = clean_text.replace('\n', '\n\n')
        else:
            md_content = '# Scraped Data\n\n'
            for key, values in data.items():
                md_content += f'## {key.upper()}\n\n'
                if isinstance(values, list):
                    for index, value in enumerate(values):
                        if isinstance(value, str):
                            clean_value = clean_html_content(value)
                        else:
                            clean_value = str(value)
                        md_content += f'### Item {index + 1}\n{clean_value}\n\n'
                else:
                    if isinstance(values, str):
                        clean_value = clean_html_content(values)
                    else:
                        clean_value = str(values)
                    md_content += f'{clean_value}\n\n'
        return md_content, 'text/markdown'
    elif fmt == 'txt':
        if 'content' in data and clean_text:
            txt_content = clean_text
        else:
            txt_content = 'Scraped Data\n' + '='*50 + '\n\n'
            for key, values in data.items():
                txt_content += f'{key.upper()}:\n' + '-'*20 + '\n'
                if isinstance(values, list):
                    for index, value in enumerate(values):
                        if isinstance(value, str):
                            clean_value = clean_html_content(value)
                        else:
                            clean_value = str(value)
                        txt_content += f'[{index + 1}] {clean_value}\n\n'
                else:
                    if isinstance(values, str):
                        clean_value = clean_html_content(values)
                    else:
                        clean_value = str(values)
                    txt_content += f'{clean_value}\n\n'
                txt_content += '\n'
        return txt_content, 'text/plain'
    else:
        raise ValueError('Unsupported format')

# Endpoint: Download data
@app.route('/download', methods=['POST'])
def download():
    req = request.get_json(force=True)
    data = req.get('data')
    fmt = req.get('format', 'json')
    filename = req.get('filename', f'data.{fmt}')
    if not data or not fmt:
        return jsonify({'error': 'Data and format are required'}), 400
    try:
        content, mimetype = convert_data(data, fmt)
        if fmt == 'csv':
            # content is a file path
            return send_file(content, as_attachment=True, download_name=filename, mimetype=mimetype)
        else:
            # content is a string
            fd, path = tempfile.mkstemp(suffix=f'.{fmt}')
            with os.fdopen(fd, 'w', encoding='utf-8') as f:
                f.write(content)
            return send_file(path, as_attachment=True, download_name=filename, mimetype=mimetype)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')
