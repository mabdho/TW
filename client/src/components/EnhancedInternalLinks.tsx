/**
 * EnhancedInternalLinks Component - REMOVED
 * Enhanced internal links have been removed per user request to avoid SEO penalties
 * This component now returns null to maintain compatibility
 */

import React from 'react';

interface InternalLinksProps {
  currentPage: {
    type: 'city' | 'blog' | 'homepage';
    data: {
      title: string;
      content: string;
      [key: string]: any;
    };
  };
  maxLinks?: number;
  className?: string;
}

export const EnhancedInternalLinks: React.FC<InternalLinksProps> = () => {
  // Enhanced internal links removed per user request to avoid SEO penalties
  return null;
};

export default EnhancedInternalLinks;