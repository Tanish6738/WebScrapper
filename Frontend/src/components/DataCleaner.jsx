import React, { useState, useEffect } from 'react';

const DataCleaner = ({ data, onDataUpdate, onClose }) => {
  const [workingData, setWorkingData] = useState(JSON.parse(JSON.stringify(data))); // Deep copy
  const [selectedTags, setSelectedTags] = useState(Object.keys(data));
  const [selectedItems, setSelectedItems] = useState({}); // For selecting specific items to extract
  const [expandedTags, setExpandedTags] = useState({});
  const [cleaningMode, setCleaningMode] = useState('remove'); // 'remove' or 'select'

  // Initialize selected items for each tag
  useEffect(() => {
    const initialSelected = {};
    Object.keys(data).forEach(tag => {
      if (Array.isArray(data[tag])) {
        initialSelected[tag] = data[tag].map((_, index) => index);
      } else {
        initialSelected[tag] = [0];
      }
    });
    setSelectedItems(initialSelected);
  }, [data]);

  const extractVisibleText = (html) => {
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
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleItemRemove = (tag, index) => {
    setWorkingData(prev => {
      const newData = { ...prev };
      if (Array.isArray(newData[tag])) {
        newData[tag] = newData[tag].filter((_, i) => i !== index);
      } else {
        delete newData[tag];
      }
      return newData;
    });

    // Update selected items indices after removal
    setSelectedItems(prev => {
      const newSelected = { ...prev };
      if (newSelected[tag]) {
        newSelected[tag] = newSelected[tag]
          .filter(i => i !== index)
          .map(i => i > index ? i - 1 : i);
      }
      return newSelected;
    });
  };

  const handleItemSelect = (tag, index) => {
    setSelectedItems(prev => {
      const currentSelected = prev[tag] || [];
      const newSelected = currentSelected.includes(index)
        ? currentSelected.filter(i => i !== index)
        : [...currentSelected, index];
      
      return {
        ...prev,
        [tag]: newSelected
      };
    });
  };

  const handleSelectAllItems = (tag) => {
    setSelectedItems(prev => {
      const tagData = workingData[tag];
      const allIndices = Array.isArray(tagData) 
        ? tagData.map((_, index) => index)
        : [0];
      
      return {
        ...prev,
        [tag]: allIndices
      };
    });
  };

  const handleDeselectAllItems = (tag) => {
    setSelectedItems(prev => ({
      ...prev,
      [tag]: []
    }));
  };
  const toggleTagExpansion = (tag) => {
    setExpandedTags(prev => ({
      ...prev,
      [tag]: !prev[tag]
    }));
  };

  const applyChanges = () => {
    const finalData = {};
    
    selectedTags.forEach(tag => {
      if (workingData[tag]) {
        if (cleaningMode === 'select') {
          // Only include selected items
          if (Array.isArray(workingData[tag])) {
            const selectedIndices = selectedItems[tag] || [];
            finalData[tag] = selectedIndices.map(index => workingData[tag][index]).filter(Boolean);
          } else {
            const isSelected = (selectedItems[tag] || []).includes(0);
            if (isSelected) {
              finalData[tag] = workingData[tag];
            }
          }
        } else {
          // Include all remaining items (after removals)
          finalData[tag] = workingData[tag];
        }
      }
    });

    onDataUpdate(finalData);
    onClose();
  };
  const getTotalItems = (tag) => {
    if (!Array.isArray(workingData[tag])) return 1;
    return workingData[tag].length;
  };

  const getRemovedCount = (tag) => {
    const originalCount = Array.isArray(data[tag]) ? data[tag].length : 1;
    const currentCount = Array.isArray(workingData[tag]) ? workingData[tag].length : (workingData[tag] ? 1 : 0);
    return originalCount - currentCount;
  };

  const getSelectedItemsCount = (tag) => {
    return (selectedItems[tag] || []).length;
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-xl p-3 sm:p-6 max-w-7xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col animate-slide-up transform hover:scale-[1.001] transition-all duration-300 ease-out shadow-2xl border border-gray-700">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-3 sm:space-y-0">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl font-bold text-white truncate">Clean & Select Data</h2>
            <p className="text-gray-400 text-sm mt-1">Customize your scraped content</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl transition-all duration-200 hover:scale-110 hover:rotate-90 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-700 self-end sm:self-auto"
          >
            ✕
          </button>
        </div>

        {/* Mode Selector */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-gray-300 font-medium text-sm sm:text-base">Cleaning Mode:</span>
            <div className="flex bg-gray-800 rounded-lg p-1 w-full sm:w-auto">
              <button
                onClick={() => setCleaningMode('remove')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  cleaningMode === 'remove'
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                Remove Items
              </button>
              <button
                onClick={() => setCleaningMode('select')}
                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  cleaningMode === 'select'
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                Select Items
              </button>
            </div>
          </div>
        </div>        <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 custom-scrollbar">
          {Object.entries(data).map(([tag, elements]) => {
            const isSelected = selectedTags.includes(tag);
            const isExpanded = expandedTags[tag];
            const totalItems = getTotalItems(tag);
            const removedCount = getRemovedCount(tag);
            const visibleCount = totalItems - removedCount;

            return (
              <div 
                key={tag} 
                className={`border rounded-lg p-3 sm:p-4 transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg ${
                  isSelected 
                    ? 'border-blue-500 bg-gray-800 shadow-blue-500/20 shadow-lg' 
                    : 'border-gray-600 bg-gray-850 hover:border-gray-500'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-2">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleTagToggle(tag)}
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 transition-all duration-200 hover:scale-110"
                    />
                    <span className="text-base sm:text-lg font-semibold text-white truncate">{tag}</span>
                    <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm">
                      <span className="bg-gray-700 px-2 py-1 rounded-full text-gray-300">
                        {visibleCount}/{totalItems}
                      </span>
                      {removedCount > 0 && (
                        <span className="bg-red-600/20 text-red-400 px-2 py-1 rounded-full animate-pulse">
                          -{removedCount}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {Array.isArray(elements) && cleaningMode === 'select' && (
                      <div className="flex space-x-1">
                        <button
                          onClick={() => handleSelectAllItems(tag)}
                          className="text-xs px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded transition-all duration-200 hover:scale-105"
                        >
                          All
                        </button>
                        <button
                          onClick={() => handleDeselectAllItems(tag)}
                          className="text-xs px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-all duration-200 hover:scale-105"
                        >
                          None
                        </button>
                      </div>
                    )}
                    <button
                      onClick={() => toggleTagExpansion(tag)}
                      className={`text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    >
                      ▶
                    </button>
                  </div>
                </div>                {isExpanded && (
                  <div className="space-y-2 max-h-48 sm:max-h-60 overflow-y-auto custom-scrollbar animate-fade-in">
                    {Array.isArray(elements) ? (
                      elements.map((element, index) => {
                        const displayText = typeof element === 'string'
                          ? extractVisibleText(element)
                          : JSON.stringify(element, null, 2);
                        const isItemSelected = (selectedItems[tag] || []).includes(index);

                        return (
                          <div
                            key={index}
                            className={`p-3 rounded border transition-all duration-200 hover:shadow-md transform hover:scale-[1.01] ${
                              cleaningMode === 'select'
                                ? isItemSelected
                                  ? 'bg-blue-900/30 border-blue-600/50 shadow-blue-500/20'
                                  : 'bg-gray-700 border-gray-600 hover:border-gray-500'
                                : 'bg-gray-700 border-gray-600 hover:border-gray-500'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                              <span className="text-gray-300 text-xs sm:text-sm flex-1 break-words" style={{ whiteSpace: 'pre-line' }}>
                                {displayText.length > 150 ? displayText.substring(0, 150) + '...' : displayText}
                              </span>
                              <div className="flex space-x-1 sm:space-x-2 flex-shrink-0">
                                {cleaningMode === 'select' && (
                                  <button
                                    onClick={() => handleItemSelect(tag, index)}
                                    className={`px-2 py-1 text-xs rounded transition-all duration-200 hover:scale-105 ${
                                      isItemSelected
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-gray-600 hover:bg-gray-500 text-white'
                                    }`}
                                  >
                                    {isItemSelected ? '✓' : '+'}
                                  </button>
                                )}
                                {cleaningMode === 'remove' && (
                                  <button
                                    onClick={() => handleItemRemove(tag, index)}
                                    className="px-2 py-1 text-xs rounded bg-red-600 hover:bg-red-700 text-white transition-all duration-200 hover:scale-105"
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="p-3 bg-gray-700 rounded border border-gray-600 hover:border-gray-500 transition-all duration-200">
                        <span className="text-gray-300 text-xs sm:text-sm break-words">
                          {typeof elements === 'string' 
                            ? extractVisibleText(elements)
                            : JSON.stringify(elements, null, 2)
                          }
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-700 gap-3 sm:gap-0">
          <div className="text-xs sm:text-sm text-gray-400 space-y-1 sm:space-y-0">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <span className="bg-gray-800 px-2 py-1 rounded-full">
                Selected: {selectedTags.length} tags
              </span>
              <span className="bg-gray-800 px-2 py-1 rounded-full">
                Items: {selectedTags.reduce((acc, tag) => {
                  const total = getTotalItems(tag);
                  const removed = getRemovedCount(tag);
                  return acc + (total - removed);
                }, 0)}
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-md hover:from-gray-500 hover:to-gray-600 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={applyChanges}
              className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCleaner;
