# WebScrapper 🕷️

A modern, full-stack web scraping application with a React frontend and Flask backend. Extract, clean, and export data from websites with ease.

## 🚀 Features

- **Dynamic Web Scraping**: Extract data from both static and dynamic websites
- **Intelligent Data Cleaning**: Clean and format scraped data automatically
- **Multiple Export Formats**: Export data as CSV, JSON, or Markdown
- **Text Editor**: Built-in editor for manual data editing and cleaning
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **Real-time Processing**: Live feedback and progress indicators

## 🏗️ Architecture

### Frontend (React + Vite)
- **React 18** with modern hooks and functional components
- **Vite** for fast development and building
- **Axios** for HTTP requests
- **CSS3** with mobile-first responsive design

### Backend (Flask)
- **Flask** RESTful API
- **Selenium** for dynamic content scraping
- **BeautifulSoup4** for HTML parsing
- **CORS** enabled for cross-origin requests

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Python** (v3.8 or higher)
- **pip** (Python package manager)
- **Chrome Browser** (for Selenium WebDriver)

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd WebScrapper
```

### 2. Backend Setup
```powershell
# Navigate to Backend directory
cd Backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Install Python dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup
```powershell
# Navigate to Frontend directory
cd ..\Frontend

# Install Node.js dependencies
npm install
```

### 4. ChromeDriver Setup
- Download ChromeDriver from [Chrome for Testing](https://googlechromelabs.github.io/chrome-for-testing/)
- Add ChromeDriver to your system PATH, or place it in the Backend directory

## 🚀 Running the Application

### Start Backend Server
```powershell
# From the Backend directory
cd Backend

# Activate virtual environment (if not already active)
.\venv\Scripts\Activate.ps1

# Start Flask server
python App.py
```
The backend will run on `http://localhost:5000`

### Start Frontend Development Server
```powershell
# From the Frontend directory (in a new terminal)
cd Frontend

# Start Vite development server
npm run dev
```
The frontend will run on `http://localhost:5173`

## 📖 Usage

1. **Enter URL**: Input the website URL you want to scrape
2. **Start Scraping**: Click the "Scrape" button to extract data
3. **View Results**: See the scraped data in a structured format
4. **Clean Data**: Use the built-in data cleaner for formatting
5. **Edit Text**: Use the text editor for manual adjustments
6. **Export Data**: Download results in CSV, JSON, or Markdown format

## 🔧 API Endpoints

### POST `/scrape`
Scrape data from a given URL
```json
{
  "url": "https://example.com",
  "method": "static" // or "dynamic"
}
```

### GET `/download/<scrape_id>/<format>`
Download scraped data in specified format
- **Formats**: `csv`, `json`, `markdown`

## 📱 Mobile Support

The application is fully responsive and optimized for mobile devices:
- Touch-friendly button targets (44px minimum)
- Responsive layouts for all screen sizes
- Mobile-optimized interactions and gestures

## 🎨 Project Structure

```
WebScrapper/
├── README.md
├── Backend/
│   ├── App.py                 # Flask application
│   ├── requirements.txt       # Python dependencies
│   └── __pycache__/
├── Frontend/
│   ├── index.html
│   ├── package.json           # Node.js dependencies
│   ├── vite.config.js         # Vite configuration
│   ├── eslint.config.js       # ESLint configuration
│   ├── public/
│   └── src/
│       ├── App.jsx            # Main React component
│       ├── App.css            # Global styles
│       ├── index.css          # Base styles
│       ├── main.jsx           # React entry point
│       ├── components/
│       │   ├── DataCleaner.jsx
│       │   └── TextEditor.jsx
│       ├── Config/
│       │   └── axios.js       # Axios configuration
│       └── assets/
```

## 🛡️ Error Handling

The application includes comprehensive error handling:
- **Network errors**: Graceful handling of connection issues
- **Invalid URLs**: Validation and user feedback
- **Scraping failures**: Detailed error messages
- **Mobile compatibility**: Touch-optimized error states

## 🔍 Dependencies

### Backend Dependencies
- **Flask==2.3.3** - Web framework
- **Flask-CORS==4.0.0** - Cross-origin resource sharing
- **beautifulsoup4==4.12.2** - HTML parsing
- **selenium==4.15.2** - Browser automation
- **requests==2.31.0** - HTTP requests

### Frontend Dependencies
- **React** - UI framework
- **Vite** - Build tool
- **Axios** - HTTP client

## 🚨 Troubleshooting

### Common Issues

1. **ChromeDriver not found**
   - Ensure ChromeDriver is installed and in PATH
   - Check Chrome browser version compatibility

2. **CORS errors**
   - Verify Flask-CORS is installed
   - Check backend server is running on correct port

3. **Module not found errors**
   - Ensure virtual environment is activated
   - Run `pip install -r requirements.txt` again

4. **Frontend not connecting to backend**
   - Check backend is running on `http://localhost:5000`
   - Verify axios configuration in `src/Config/axios.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React** team for the excellent frontend framework
- **Flask** team for the lightweight backend framework
- **Selenium** and **BeautifulSoup** for web scraping capabilities
- **Vite** for the fast development experience

---

**Happy Scraping!** 🎉