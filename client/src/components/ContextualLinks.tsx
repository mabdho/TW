/**
 * Contextual Links Component for Enhanced SEO Internal Linking
 * Provides contextual internal links within article content for better SEO
 */

import React from 'react';
import { generateContextualInternalLinks } from '../utils/seoOptimization';

interface ContextualLinksProps {
  cityName: string;
  country: string;
  attractions?: string[];
  context?: 'inline' | 'sidebar' | 'footer';
  className?: string;
}

export const ContextualLinks: React.FC<ContextualLinksProps> = ({
  cityName,
  country,
  attractions = [],
  context = 'inline',
  className = ''
}) => {
  const links = generateContextualInternalLinks(cityName, country, attractions);
  
  if (context === 'inline') {
    return (
      <div className={`contextual-links-inline my-4 ${className}`}>
        <div className="flex flex-wrap gap-2 text-sm">
          {links.slice(0, 3).map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors"
              rel="noopener"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  if (context === 'sidebar') {
    return (
      <div className={`contextual-links-sidebar bg-gray-50 dark:bg-gray-800 p-4 rounded-lg ${className}`}>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Related Travel Information
        </h3>
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors"
                rel="noopener"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  return (
    <div className={`contextual-links-footer border-t pt-4 mt-6 ${className}`}>
      <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
        Continue Planning Your Trip
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors block"
            rel="noopener"
          >
            → {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContextualLinks;