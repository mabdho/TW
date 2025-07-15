/**
 * Contextual Links Component - REMOVED
 * Contextual links have been removed per user request to avoid SEO penalties
 * This component now returns null to maintain compatibility
 */

import React from 'react';

interface ContextualLinksProps {
  cityName: string;
  country: string;
  attractions?: string[];
  context?: 'inline' | 'sidebar' | 'footer';
  className?: string;
}

export const ContextualLinks: React.FC<ContextualLinksProps> = () => {
  // Contextual links removed per user request to avoid SEO penalties
  return null;
};

export default ContextualLinks;