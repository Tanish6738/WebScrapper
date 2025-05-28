import React, { useState, useEffect } from 'react';

const TextEditor = ({ data, onSave, onClose }) => {  const [editableText, setEditableText] = useState('');
  const [filename, setFilename] = useState('edited-content');
  const [isSaving, setIsSaving] = useState(false);

  // Function to clean HTML and extract text
  const cleanHTML = (html) => {
    if (!html) return '';
    
    // Remove script and style tags with their content
    let cleaned = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<!--([\s\S]*?)-->/g, '')
      .replace(/\s{2,}/g, ' ');
    
    // Add line breaks for block elements
    cleaned = cleaned.replace(/<(h[1-6]|p|div|li|br|section|header|footer|article|main|tr|th|td)[^>]*>/gi, '\n');
    
    // Remove all remaining HTML tags
    cleaned = cleaned.replace(/<[^>]+>/g, '');
    
    // Clean up excessive line breaks and whitespace
    cleaned = cleaned
      .replace(/\n{2,}/g, '\n')
      .replace(/^\s+|\s+$/g, '')
      .trim();
    
    return cleaned;
  };

  // Convert scraped data to editable text
  const convertDataToText = (scrapedData) => {
    if (!scrapedData || Object.keys(scrapedData).length === 0) {
      return '';
    }

    let textContent = '';
    
    Object.entries(scrapedData).forEach(([tag, elements]) => {
      textContent += `=== ${tag.toUpperCase()} ===\n\n`;
      
      if (Array.isArray(elements)) {
        elements.forEach((element, index) => {
          let content = '';
          if (typeof element === 'string') {
            content = cleanHTML(element);
          } else if (element && typeof element === 'object' && element.content) {
            content = cleanHTML(element.content);
          } else {
            content = JSON.stringify(element, null, 2);
          }
          
          if (content.trim()) {
            textContent += `${index + 1}. ${content}\n\n`;
          }
        });
      } else {
        let content = '';
        if (typeof elements === 'string') {
          content = cleanHTML(elements);
        } else {
          content = JSON.stringify(elements, null, 2);
        }
        
        if (content.trim()) {
          textContent += `${content}\n\n`;
        }
      }
      
      textContent += '\n';
    });

    return textContent.trim();
  };

  useEffect(() => {
    const textData = convertDataToText(data);
    setEditableText(textData);
  }, [data]);
  const handleSave = async () => {
    if (!editableText.trim()) {
      alert('Please enter some content before saving.');
      return;
    }
    
    if (!filename.trim()) {
      alert('Please enter a filename.');
      return;
    }
    
    try {
      setIsSaving(true);
      await onSave(editableText, filename);
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save file. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all changes? This action cannot be undone.')) {
      const originalText = convertDataToText(data);
      setEditableText(originalText);
    }
  };

  const handleTextChange = (e) => {
    setEditableText(e.target.value);
  };

  const wordCount = editableText.split(/\s+/).filter(word => word.length > 0).length;
  const charCount = editableText.length;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-xl w-full max-w-7xl h-[95vh] sm:h-[90vh] flex flex-col border border-gray-700 shadow-2xl animate-slide-up transform scale-100 hover:scale-[1.001] transition-all duration-300 ease-out">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-6 border-b border-gray-700 space-y-3 sm:space-y-0">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-white truncate">Text Editor</h2>
            <p className="text-gray-400 mt-1 text-sm sm:text-base">Edit your scraped content before saving</p>
          </div>          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold w-10 h-10 min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-700 transition-all duration-200 hover:scale-110 hover:rotate-90 self-end sm:self-auto touch-manipulation focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            ×
          </button>
        </div>        {/* Editor Content */}
        <div className="flex-1 flex flex-col p-3 sm:p-6 space-y-3 sm:space-y-4 overflow-hidden">
          {/* Filename and Stats */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 min-w-0">
                <label className="block text-gray-300 text-sm font-medium mb-1 transition-colors duration-200 hover:text-white">
                  Filename
                </label>                <input
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  className="w-full px-3 py-2 min-h-[44px] bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-500 focus:scale-[1.02] text-base"
                  placeholder="Enter filename"
                  style={{ fontSize: '16px' }}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full transition-colors duration-200 hover:bg-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span>Words: {wordCount}</span>
              </div>
              <div className="flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full transition-colors duration-200 hover:bg-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Characters: {charCount}</span>
              </div>
            </div>
          </div>          {/* Text Editor */}
          <div className="flex-1 flex flex-col min-h-0">            <textarea
              value={editableText}
              onChange={handleTextChange}
              className="flex-1 w-full p-3 sm:p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-xs sm:text-sm leading-relaxed transition-all duration-200 hover:border-gray-500 hover:shadow-lg focus:shadow-xl focus:scale-[1.001] touch-manipulation"
              placeholder="Your scraped content will appear here for editing..."
              spellCheck="false"
              style={{ fontSize: '16px' }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-700">            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving || !editableText.trim() || !filename.trim()}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 min-h-[44px] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 font-medium flex items-center justify-center space-x-2 touch-manipulation ${
                isSaving || !editableText.trim() || !filename.trim()
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 hover:shadow-lg active:scale-95'
              }`}
            >
              {isSaving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Save & Download</span>
                </>
              )}
            </button>            <button
              type="button"
              onClick={handleReset}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-3 min-h-[44px] bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 font-medium transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2 touch-manipulation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Reset</span>
            </button>            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 sm:px-6 py-3 min-h-[44px] bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-500 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 font-medium transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center space-x-2 touch-manipulation"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;