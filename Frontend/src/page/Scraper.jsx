import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "../Config/axios"
import DataCleaner from '../components/DataCleaner'
import TextEditor from '../components/TextEditor'

const ALL_HTML_TAGS = [
  'a', 'article', 'aside', 'b', 'blockquote', 'body', 'button', 'div', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'i', 'iframe', 'img', 'input', 'label',
  'li', 'main', 'nav', 'ol', 'p', 'section', 'span', 'strong', 'table', 'tbody', 'td',
  'th', 'thead', 'tr', 'ul'
];

function extractVisibleText(html) {
  if (!html) return '';
  let cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--([\s\S]*?)-->/g, '')
    .replace(/\s{2,}/g, ' ');
  cleaned = cleaned.replace(/<(h[1-6]|p|div|li|br|section|header|footer|article|main|tr|th|td)[^>]*>/gi, '\n');
  cleaned = cleaned.replace(/<[^>]+>/g, '');
  cleaned = cleaned.replace(/\n{2,}/g, '\n').replace(/^\s+|\s+$/g, '');
  return cleaned;
}

const Scraper = () => {
  const [url, setUrl] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredTags, setFilteredTags] = useState(ALL_HTML_TAGS)
  const [results, setResults] = useState({ data: {} })
  const [originalData, setOriginalData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedFormat, setSelectedFormat] = useState('json')
  const [filterContent, setFilterContent] = useState(false)
  const [filename, setFilename] = useState('scraped-data')
  const [showDataCleaner, setShowDataCleaner] = useState(false)
  const [showTextEditor, setShowTextEditor] = useState(false)

  useEffect(() => {
    const filtered = ALL_HTML_TAGS.filter(tag =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTags(filtered);
  }, [searchQuery]);
  const handleScrape = async (isAllContent = false) => {
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }
    
    if (!isAllContent && selectedTags.length === 0) {
      setError('Please select at least one tag to scrape');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('/scrape', {
        url,
        tags: isAllContent ? null : selectedTags,
        mode: 'auto',
      });
      const scrapedData = response.data.data;
      setOriginalData(scrapedData);
      setResults({ data: scrapedData, format: selectedFormat });
    } catch (err) {
      console.error('Scraping error:', err);
      setError(err.response?.data?.message || 'Failed to scrape website. Please check the URL and try again.');
      setResults({ data: {} });
      setOriginalData({});
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagChange = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  const handleDataUpdate = (cleanedData) => {
    setResults({ data: cleanedData, format: selectedFormat });
  };
  const handleTextSave = async (textContent, textFilename) => {
    try {
      // Create a blob with the edited text content
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${textFilename}.txt`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Close the text editor
      setShowTextEditor(false);
    } catch (err) {
      setError('Failed to save text file!');
    }
  };
  const handleDownload = async () => {
    if (!results.data || Object.keys(results.data).length === 0) {
      setError('No data to download. Please scrape a website first.');
      return;
    }

    if (selectedFormat === 'txt') {
      setShowTextEditor(true);
      return;
    }
    
    try {
      setIsLoading(true);
      const res = await axios.post('/download', {
        data: results.data,
        format: selectedFormat,
        filename: filename + '.' + selectedFormat
      }, { responseType: 'blob' });
      
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename + '.' + selectedFormat);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
      setError('Download failed! Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  const renderContent = () => {
    if (!results.data || Object.keys(results.data).length === 0) return null;
    
    return (
      <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center">
            Scraped Data ({Object.keys(results.data).length} tags)
          </h3>          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <button 
              onClick={() => setShowDataCleaner(true)} 
              disabled={isLoading}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-md hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Clean & Select Data
            </button>
            <button 
              onClick={handleDownload} 
              disabled={isLoading || !results.data || Object.keys(results.data).length === 0}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gradient-to-r from-[#3D2998] to-[#4e35b5] text-white rounded-md hover:from-[#4e35b5] hover:to-[#5a3cc7] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 text-sm sm:text-base flex items-center justify-center space-x-2"
            >
              {isLoading && <div className="spinner"></div>}
              <span>Export as {selectedFormat.toUpperCase()}</span>
            </button>
          </div>
        </div>
        
        {selectedFormat === 'json' && (
          <div className="space-y-3 sm:space-y-4">
            {Object.entries(results.data).map(([tag, elements]) => (
              <div key={tag} className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-gray-700 card-hover">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="truncate">{`${tag} (${Array.isArray(elements) ? elements.length : 1} items)`}</span>
                </h3>
                <div className="space-y-2 max-h-48 sm:max-h-60 overflow-y-auto custom-scrollbar">
                  {Array.isArray(elements) ? elements.map((element, index) => (
                    <div key={index} className="p-2 sm:p-3 bg-gray-800 rounded border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                      <span className="text-gray-300 text-xs sm:text-sm break-words" style={{ whiteSpace: 'pre-line' }}>
                        {typeof element === 'string'
                          ? extractVisibleText(element)
                          : (element && typeof element === 'object' && element.content)
                            ? extractVisibleText(element.content)
                            : JSON.stringify(element, null, 2)
                        }
                      </span>
                    </div>
                  )) : (
                    <div className="p-2 sm:p-3 bg-gray-800 rounded border border-gray-700 hover:border-gray-600 transition-colors duration-200">
                      <span className="text-gray-300 text-xs sm:text-sm break-words" style={{ whiteSpace: 'pre-line' }}>
                        {typeof elements === 'string'
                          ? extractVisibleText(elements)
                          : JSON.stringify(elements, null, 2)
                        }
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {selectedFormat !== 'json' && selectedFormat !== 'txt' && (
          <div className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-gray-700">
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Data will be exported in {selectedFormat.toUpperCase()} format when you click Export.
            </p>
          </div>
        )}
        
        {selectedFormat === 'txt' && (
          <div className="bg-gray-900 p-3 sm:p-4 rounded-lg border border-gray-700">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Text Preview</h3>
            <div className="max-h-64 sm:max-h-96 overflow-y-auto bg-gray-800 p-3 sm:p-4 rounded border border-gray-600 custom-scrollbar">
              <pre className="text-gray-300 text-xs sm:text-sm whitespace-pre-wrap font-mono leading-relaxed break-words">
                {Object.entries(results.data).map(([tag, elements]) => {
                  let content = `=== ${tag.toUpperCase()} ===\n\n`;
                  if (Array.isArray(elements)) {
                    elements.forEach((element, index) => {
                      let elementContent = '';
                      if (typeof element === 'string') {
                        elementContent = extractVisibleText(element);
                      } else if (element && typeof element === 'object' && element.content) {
                        elementContent = extractVisibleText(element.content);
                      } else {
                        elementContent = JSON.stringify(element, null, 2);
                      }
                      if (elementContent.trim()) {
                        content += `${index + 1}. ${elementContent}\n\n`;
                      }
                    });
                  } else {
                    let elementContent = '';
                    if (typeof elements === 'string') {
                      elementContent = extractVisibleText(elements);
                    } else {
                      elementContent = JSON.stringify(elements, null, 2);
                    }
                    if (elementContent.trim()) {
                      content += `${elementContent}\n\n`;
                    }
                  }
                  return content + '\n';
                }).join('')}
              </pre>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mt-3">
              Click "Export as TXT" to open the text editor where you can modify this content before saving.
            </p>
          </div>
        )}
      </div>
    );
  };
  return (    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-black to-purple-950 flex flex-col items-center justify-center py-4 sm:py-8 px-2 sm:px-4">
      <header className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 px-2 sm:px-4 gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/vite.svg" alt="Logo" className="h-8 sm:h-10 w-8 sm:w-10 drop-shadow-lg animate-pulse-gentle" />
            <span className="text-2xl sm:text-3xl font-bold gradient-text select-none">WebScrapper</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link to="/features" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Pricing
          </Link>
          <Link to="/" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Home
          </Link>
        </nav>
        <span className="text-xs sm:text-sm text-gray-400 font-mono tracking-widest">by Tanishq Chouhan</span>
      </header>
      
      <main className="w-full max-w-7xl bg-glass main-container rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-10 animate-fade-in border border-indigo-900/40">        <div className="space-y-6 sm:space-y-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2">
              <label className="block text-gray-200 mb-2 font-semibold text-base sm:text-lg" htmlFor="url">
                Website URL
              </label>
              <input
                type="url"
                id="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full p-3 sm:p-4 rounded-xl bg-gray-900/80 text-white focus:outline-none border border-gray-700 placeholder-gray-400 text-sm sm:text-base shadow-inner focus:ring-2 focus:ring-indigo-400 transition-all duration-200 hover:border-gray-600 focus:scale-[1.02]"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-200 mb-2 font-semibold text-base sm:text-lg">
                Export Format
              </label>
              <select
                value={selectedFormat}
                onChange={e => setSelectedFormat(e.target.value)}
                className="w-full p-3 sm:p-4 rounded-xl bg-gray-900/80 text-white focus:outline-none border border-gray-700 text-sm sm:text-base shadow-inner focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:border-gray-600 focus:scale-[1.02]"
              >
                <option value="json">JSON</option>
                <option value="csv">CSV</option>
                <option value="md">Markdown</option>
                <option value="txt">Text</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <label className="block text-gray-200 mb-2 font-semibold text-base sm:text-lg">
              Select Tags to Scrape
            </label>
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search tags..."
                  className="w-full p-3 sm:p-4 pl-10 sm:pl-12 rounded-xl bg-gray-900/80 text-white focus:outline-none border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-200 hover:border-gray-600 focus:scale-[1.02]"
                />
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Filename (without extension)"
                value={filename}
                onChange={e => setFilename(e.target.value)}
                className="flex-1 lg:max-w-xs p-3 sm:p-4 rounded-xl bg-gray-900/80 text-white focus:outline-none border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 transition-all duration-200 hover:border-gray-600 focus:scale-[1.02]"
              />
            </div>
            <div className="bg-gray-900/60 p-3 sm:p-4 rounded-xl border border-gray-700">
              <div className="flex flex-wrap gap-2 sm:gap-3 max-h-32 sm:max-h-40 overflow-y-auto custom-scrollbar">
                {filteredTags.map(tag => (
                  <label
                    key={tag}
                    className={`tag-checkbox transition-all duration-200 hover:scale-105 ${selectedTags.includes(tag) ? 'selected' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      onChange={() => handleTagChange(tag)}
                      className="hidden"
                    />
                    <span className="text-xs sm:text-sm">{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
            <button
              type="button"
              onClick={() => handleScrape(false)}
              disabled={isLoading || !url || selectedTags.length === 0}
              className="flex-1 btn-primary p-3 sm:p-4 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              {isLoading && <div className="spinner"></div>}
              <span>{isLoading ? 'Scraping...' : 'Scrape Selected Tags'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleScrape(true)}
              disabled={isLoading || !url}
              className="flex-1 btn-secondary p-3 sm:p-4 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              {isLoading && <div className="spinner"></div>}
              <span>{isLoading ? 'Scraping...' : 'Scrape All Content'}</span>
            </button>
          </div>
        </div>
        {error && (
          <div className="mt-4 sm:mt-6 bg-red-900/70 border border-red-700 p-3 sm:p-4 rounded-xl animate-fade-in">
            <p className="text-red-200 font-medium text-sm sm:text-base">{error}</p>
          </div>
        )}
        
        <section className="mt-6 sm:mt-10">
          {renderContent()}
        </section>
      </main>
      
      <footer className="w-full max-w-7xl mx-auto mt-6 sm:mt-10 text-center text-gray-400 text-xs pb-2">
        &copy; {new Date().getFullYear()} WebScrapper. All rights reserved.
      </footer>
      
      {showDataCleaner && (
        <DataCleaner
          data={originalData}
          onDataUpdate={handleDataUpdate}
          onClose={() => setShowDataCleaner(false)}
        />
      )}
      
      {showTextEditor && (
        <TextEditor
          data={results.data}
          onSave={handleTextSave}
          onClose={() => setShowTextEditor(false)}
        />
      )}
    </div>
  );
}

export default Scraper
