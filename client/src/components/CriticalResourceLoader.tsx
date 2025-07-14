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

  useEffect(() => {
    const imagesToPreload = [
      ...(heroImage ? [heroImage] : []),
      ...criticalImages
    ];

    if (imagesToPreload.length > 0) {
      preloadCriticalImages(imagesToPreload);
    }
  }, [criticalImages, heroImage, preloadCriticalImages]);

  // Add DNS prefetch and preconnect hints
  useEffect(() => {
    const addResourceHints = () => {
      const domains = [
        'https://images.unsplash.com',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
      ];

      domains.forEach(domain => {
        // Add DNS prefetch
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'dns-prefetch';
        prefetchLink.href = domain;
        document.head.appendChild(prefetchLink);

        // Add preconnect for critical domains
        if (domain.includes('unsplash') || domain.includes('fonts')) {
          const preconnectLink = document.createElement('link');
          preconnectLink.rel = 'preconnect';
          preconnectLink.href = domain;
          preconnectLink.crossOrigin = 'anonymous';
          document.head.appendChild(preconnectLink);
        }
      });
    };

    addResourceHints();
  }, []);

  return <>{children}</>;
};

export default CriticalResourceLoader;