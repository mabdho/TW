import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface LinkData {
  title: string;
  url: string;
  type: 'city' | 'blog' | 'destination' | 'core';
  keywords: string[];
  country?: string;
  continent?: string;
  category?: string;
  relevanceScore?: number;
}

interface SmartInternalLinksProps {
  currentPageUrl: string;
  pageType: 'city' | 'blog' | 'destination' | 'core';
  className?: string;
}

export const SmartInternalLinks: React.FC<SmartInternalLinksProps> = ({
  currentPageUrl,
  pageType,
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
            maxLinks: 3 // Always request exactly 3 links
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
  }, [currentPageUrl, pageType]);

  const getTypeIcon = (type: string): string => {
    const icons = {
      'city': '🌆',
      'blog': '📖',
      'destination': '🌍',
      'core': '📄'
    };
    return icons[type] || '📄';
  };

  const getTypeLabel = (type: string): string => {
    const labels = {
      'city': 'City Guide',
      'blog': 'Travel Story',
      'destination': 'Destination',
      'core': 'Guide'
    };
    return labels[type] || type;
  };

  if (loading) {
    return (
      <div className={`smart-internal-links ${className}`}>
        <div className="smart-links-container">
          <h3 className="smart-links-title">You may also like</h3>
          <div className="smart-links-grid">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="smart-link-skeleton"></div>
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
    <div className={`smart-internal-links ${className}`}>
      <div className="smart-links-container">
        <h3 className="smart-links-title">You may also like</h3>
        <div className="smart-links-grid">
          {links.map((link, index) => (
            <Link key={link.url} href={link.url} className="smart-link-card">
              <div className="smart-link-header">
                <span className="smart-link-type">{getTypeLabel(link.type)}</span>
              </div>
              <h4 className="smart-link-title">{link.title}</h4>
              {link.country && (
                <p className="smart-link-location">{link.country}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};