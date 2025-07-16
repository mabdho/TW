import React from 'react';

/**
 * Simple markdown renderer for attraction descriptions
 * Handles headers, paragraphs, and basic formatting
 */
export const renderMarkdown = (content: string): React.ReactNode => {
  if (!content) return null;
  
  // Split content by lines for processing
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines
    if (!line) continue;
    
    // Handle headers
    if (line.startsWith('### ')) {
      elements.push(
        <h4 key={key++} className="font-semibold text-gray-900 mt-4 mb-2 text-sm sm:text-base">
          {line.slice(4)}
        </h4>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h3 key={key++} className="font-semibold text-gray-900 mt-6 mb-3 text-base sm:text-lg">
          {line.slice(3)}
        </h3>
      );
    } else if (line.startsWith('# ')) {
      elements.push(
        <h2 key={key++} className="font-bold text-gray-900 mt-6 mb-4 text-lg sm:text-xl">
          {line.slice(2)}
        </h2>
      );
    } else {
      // Handle regular paragraphs
      elements.push(
        <p key={key++} className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
          {line}
        </p>
      );
    }
  }
  
  return <div className="space-y-2">{elements}</div>;
};

/**
 * Simple inline markdown processor for simpler content
 * Only handles basic text without block elements
 */
export const renderInlineMarkdown = (content: string): string => {
  if (!content) return '';
  
  return content
    .replace(/### /g, '')
    .replace(/## /g, '')
    .replace(/# /g, '');
};