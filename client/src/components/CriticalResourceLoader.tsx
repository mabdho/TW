/**
 * Critical Resource Loader Component
 * Handles preloading of critical images and resources for optimal performance
 */

import React, { useEffect } from 'react';
import { usePerformanceOptimization } from '../hooks/usePerformanceOptimization';

interface CriticalResourceLoaderProps {
  criticalImages?: string[];
  heroImage?: string;
  children: React.ReactNode;
}

export const CriticalResourceLoader: React.FC<CriticalResourceLoaderProps> = ({
  criticalImages = [],
  heroImage,
  children
}) => {
  const { preloadCriticalImages } = usePerformanceOptimization();

  // Disable all preloading to eliminate duplicate requests
  // Focus on DNS prefetch and preconnect for performance instead
  // useEffect(() => {
  //   if (heroImage) {
  //     // Preloading disabled to prevent duplicate requests
  //     preloadCriticalImages([heroImage]);
  //   }
  // }, [heroImage, preloadCriticalImages]);

  // Enhanced resource hints - NO image preloading to prevent duplicates
  useEffect(() => {
    const addResourceHints = () => {
      const domains = [
        'https://images.unsplash.com',
        'https://plus.unsplash.com',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      domains.forEach(domain => {
        // Check if hints already exist
        const existingDNS = document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`);
        const existingPreconnect = document.querySelector(`link[rel="preconnect"][href="${domain}"]`);
        
        if (!existingDNS) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'dns-prefetch';
          prefetchLink.href = domain;
          document.head.appendChild(prefetchLink);
        }

        // Add preconnect for critical domains only
        if (!existingPreconnect && (domain.includes('unsplash') || domain.includes('fonts'))) {
          const preconnectLink = document.createElement('link');
          preconnectLink.rel = 'preconnect';
          preconnectLink.href = domain;
          if (domain.includes('unsplash')) {
            preconnectLink.crossOrigin = 'anonymous';
          }
          document.head.appendChild(preconnectLink);
        }
      });
    };

    addResourceHints();
  }, []);

  return <>{children}</>;
};

export default CriticalResourceLoader;