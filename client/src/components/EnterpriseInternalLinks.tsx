/**
 * Enterprise Internal Links Component
 * Renders contextual internal links using the enterprise interlinking system
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

export interface LinkData {
  title: string;
  url: string;
  type: 'city' | 'blog' | 'destination' | 'core';
  keywords: string[];
  country?: string;
  continent?: string;
  category?: string;
  relevanceScore?: number;
}

interface EnterpriseInternalLinksProps {
  currentPageUrl: string;
  pageType: 'city' | 'blog' | 'destination' | 'core';
  maxLinks?: number;
  showRelatedContent?: boolean;
  className?: string;
}

export const EnterpriseInternalLinks: React.FC<EnterpriseInternalLinksProps> = ({
  currentPageUrl,
  pageType,
  maxLinks = 6,
  showRelatedContent = true,
  className = ''
}) => {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInternalLinks = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/internal-links', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currentPageUrl,
            pageType,
            maxLinks
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setLinks(data.links || []);
      } catch (err) {
        console.error('Error fetching internal links:', err);
        setError('Failed to load related content');
      } finally {
        setLoading(false);
      }
    };

    if (currentPageUrl && pageType) {
      fetchInternalLinks();
    }
  }, [currentPageUrl, pageType, maxLinks]);

  const getTypeLabel = (type: string): string => {
    const labels = {
      'city': 'City Guide',
      'blog': 'Blog Post',
      'destination': 'Destinations',
      'core': 'Page'
    };
    return labels[type] || type;
  };

  const getTypeIcon = (type: string): string => {
    const icons = {
      'city': '🏙️',
      'blog': '📝',
      'destination': '🌍',
      'core': '📖'
    };
    return icons[type] || '📄';
  };

  if (loading) {
    return (
      <div className={`enterprise-internal-links ${className}`}>
        <div className="loading-skeleton">
          <div className="skeleton-title"></div>
          <div className="skeleton-links">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="skeleton-link"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !links.length) {
    return null;
  }

  return (
    <div className={`enterprise-internal-links ${className}`}>
      <div className="internal-links-container">
        <h3 className="internal-links-title">
          {showRelatedContent ? 'Related Content' : 'Explore More'}
        </h3>
        <ul className="internal-links-list">
          {links.map((link, index) => (
            <li key={link.url} className="internal-link-item">
              <Link href={link.url} className="internal-link">
                <div className="link-content">
                  <div className="link-header">
                    <span className="link-icon">{getTypeIcon(link.type)}</span>
                    <span className="link-title">{link.title}</span>
                  </div>
                  <div className="link-footer">
                    <span className="link-type">{getTypeLabel(link.type)}</span>
                    {link.country && (
                      <span className="link-country">{link.country}</span>
                    )}
                    {link.relevanceScore && (
                      <span className="link-relevance">
                        {Math.round(link.relevanceScore * 100)}% match
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// CSS styles (to be added to index.css)
export const enterpriseInternalLinksStyles = `
.enterprise-internal-links {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.internal-links-container {
  max-width: 100%;
}

.internal-links-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.internal-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
}

.internal-link-item {
  margin: 0;
}

.internal-link {
  display: block;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.internal-link:hover {
  background: #f1f5f9;
  border-color: #3b82f6;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.link-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.link-icon {
  font-size: 1.125rem;
  flex-shrink: 0;
}

.link-title {
  font-weight: 500;
  color: #1e293b;
  line-height: 1.4;
  flex-grow: 1;
}

.link-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #64748b;
  flex-wrap: wrap;
}

.link-type {
  background: #e2e8f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #475569;
}

.link-country {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.link-relevance {
  color: #059669;
  font-weight: 500;
  font-size: 0.75rem;
}

.loading-skeleton {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.skeleton-title {
  height: 1.5rem;
  background: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 1rem;
  width: 60%;
}

.skeleton-links {
  display: grid;
  gap: 0.75rem;
}

.skeleton-link {
  height: 4rem;
  background: #e2e8f0;
  border-radius: 8px;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .enterprise-internal-links {
    margin: 1rem 0;
    padding: 1rem;
  }
  
  .internal-links-title {
    font-size: 1.125rem;
  }
  
  .internal-link {
    padding: 0.875rem;
  }
  
  .link-footer {
    font-size: 0.8125rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .enterprise-internal-links {
    background: #1e293b;
    border-color: #374151;
  }
  
  .internal-links-title {
    color: #f1f5f9;
    border-color: #374151;
  }
  
  .internal-link {
    background: #374151;
    border-color: #4b5563;
  }
  
  .internal-link:hover {
    background: #4b5563;
    border-color: #60a5fa;
  }
  
  .link-title {
    color: #f1f5f9;
  }
  
  .link-footer {
    color: #9ca3af;
  }
  
  .link-type {
    background: #4b5563;
    color: #d1d5db;
  }
  
  .link-country {
    background: #1e3a8a;
    color: #93c5fd;
  }
  
  .skeleton-title,
  .skeleton-link {
    background: #374151;
  }
}
`;