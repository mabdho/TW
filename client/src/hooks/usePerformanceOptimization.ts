/**
 * Performance optimization hook for TravelWanders
 * Provides centralized performance monitoring and optimization features
 */

import { useEffect, useRef, useState } from 'react';
import ImageOptimizationService from '../services/ImageOptimizationService';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  bundleSize: number;
  imageOptimizationScore: number;
}

interface UsePerformanceOptimizationReturn {
  metrics: PerformanceMetrics;
  isOptimized: boolean;
  preloadCriticalImages: (urls: string[]) => Promise<void>;
  trackImagePerformance: (url: string, context: string) => void;
  clearImageCache: () => void;
  getImageAnalytics: () => any[];
}

export const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    bundleSize: 0,
    imageOptimizationScore: 0
  });
  
  const imageService = useRef(ImageOptimizationService.getInstance());
  const [isOptimized, setIsOptimized] = useState(false);

  // Initialize performance monitoring
  useEffect(() => {
    const measurePerformance = () => {
      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      const fcp = fcpEntry?.startTime || 0;

      // Largest Contentful Paint
      let lcp = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        lcp = lastEntry?.startTime || 0;
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      let fid = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-input') {
            fid = entry.processingStart - entry.startTime;
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let cls = 0;
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navigationEntry?.responseStart - navigationEntry?.requestStart || 0;

      // Bundle size estimation
      const resourceEntries = performance.getEntriesByType('resource');
      const bundleSize = resourceEntries
        .filter(entry => entry.name.includes('.js') || entry.name.includes('.css'))
        .reduce((total, entry) => total + (entry.transferSize || 0), 0);

      // Image optimization score
      const imageOptimizationScore = calculateImageOptimizationScore();

      setMetrics({
        fcp,
        lcp,
        fid,
        cls,
        ttfb,
        bundleSize: Math.round(bundleSize / 1024), // Convert to KB
        imageOptimizationScore
      });

      // Determine if performance is optimized
      const optimized = fcp < 2500 && lcp < 4000 && fid < 100 && cls < 0.1;
      setIsOptimized(optimized);

      // Log performance metrics
      console.log('📊 Performance Metrics:', {
        FCP: `${fcp.toFixed(0)}ms`,
        LCP: `${lcp.toFixed(0)}ms`,
        FID: `${fid.toFixed(0)}ms`,
        CLS: cls.toFixed(3),
        TTFB: `${ttfb.toFixed(0)}ms`,
        'Bundle Size': `${Math.round(bundleSize / 1024)}KB`,
        'Image Score': `${imageOptimizationScore}/100`,
        'Optimized': optimized ? '✅' : '❌'
      });
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Calculate image optimization score
  const calculateImageOptimizationScore = (): number => {
    let score = 0;
    
    // Check for lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (lazyImages.length > 0) score += 30;
    
    // Check for modern formats
    const pictureElements = document.querySelectorAll('picture');
    if (pictureElements.length > 0) score += 40;
    
    // Check for size attributes
    const imagesWithDimensions = document.querySelectorAll('img[width][height]');
    if (imagesWithDimensions.length > 0) score += 30;
    
    return Math.min(score, 100);
  };

  // Simplified preload - minimal strategy to reduce duplicates
  const preloadCriticalImages = async (urls: string[]): Promise<void> => {
    try {
      // Preload only the first 2 images and only in WebP format
      // This reduces the number of requests while still optimizing above-the-fold content
      const limitedUrls = urls.slice(0, 2);
      const webpUrls: string[] = [];
      
      limitedUrls.forEach(url => {
        const webpUrl = imageService.current.generateOptimizedUrl(url, 1200, 'webp');
        webpUrls.push(webpUrl);
      });
      
      await imageService.current.preloadImages(webpUrls, true);
      console.log(`✅ Critical images preloaded (WebP, limited to 2):`, limitedUrls.length);
    } catch (error) {
      console.error('❌ Failed to preload critical images:', error);
    }
  };



  // Track image performance
  const trackImagePerformance = (url: string, context: string): void => {
    console.log(`📸 Image loaded: ${context} - ${url}`);
  };

  // Clear image cache
  const clearImageCache = (): void => {
    imageService.current.clearCache();
    console.log('🗑️ Image cache cleared');
  };

  // Get image analytics
  const getImageAnalytics = () => {
    return imageService.current.getAnalytics();
  };

  return {
    metrics,
    isOptimized,
    preloadCriticalImages,
    trackImagePerformance,
    clearImageCache,
    getImageAnalytics
  };
};