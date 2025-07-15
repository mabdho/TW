/**
 * Internal Links Component - REMOVED
 * Internal links have been removed per user request to avoid SEO penalties
 * This component now returns null to maintain compatibility
 */

import React from 'react';

interface InternalLinksProps {
  links: any[];
  title?: string;
  description?: string;
  className?: string;
}

export const InternalLinks: React.FC<InternalLinksProps> = () => {
  // Internal links removed per user request to avoid SEO penalties
  return null;
};