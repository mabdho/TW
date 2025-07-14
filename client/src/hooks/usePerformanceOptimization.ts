/**
 * Performance Optimization Hook
 * Monitors and optimizes bundle performance in real-time
 */

import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
  bundleSize: number;
}

export const usePerformanceOptimization = () => {
  const measurePerformance = useCallback((): PerformanceMetrics | null => {
    if (!window.performance) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = 0; // Would need PerformanceObserver for accurate LCP
    
    return {
      fcp: Math.round(fcp),
      lcp: Math.round(lcp),
      cls: 0, // Would need PerformanceObserver
      fid: 0, // Would need PerformanceObserver
      bundleSize: navigation.transferSize || 0
    };
  }, []);

  const optimizeBundleLoading = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/src/components/Navigation.tsx',
      '/src/components/Hero.tsx',
      '/src/components/Footer.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Prefetch likely-to-be-used resources
    const prefetchResources = [
      '/src/pages/destinations.tsx',
      '/src/pages/blogs.tsx'
    ];

    prefetchResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, []);

  const enableCriticalResourceHints = useCallback(() => {
    // Add DNS prefetch for external resources
    const domains = ['fonts.googleapis.com', 'images.unsplash.com'];
    
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const preconnectDomains = ['fonts.gstatic.com'];
    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `//${domain}`;
      link.crossOrigin = '';
      document.head.appendChild(link);
    });
  }, []);

  const reportMetrics = useCallback(() => {
    const metrics = measurePerformance();
    if (metrics) {
      console.log('📊 Performance Metrics:', {
        'First Contentful Paint': `${metrics.fcp}ms`,
        'Bundle Size': `${(metrics.bundleSize / 1024).toFixed(2)} KB`,
        'Status': metrics.fcp < 1500 ? '✅ Excellent' : metrics.fcp < 2500 ? '⚠️ Good' : '🚨 Needs Optimization'
      });

      // Auto-optimize if performance is poor
      if (metrics.fcp > 2500) {
        console.warn('🚨 Slow FCP detected, applying optimizations...');
        optimizeBundleLoading();
      }
    }
  }, [measurePerformance, optimizeBundleLoading]);

  useEffect(() => {
    // Initialize performance optimizations
    enableCriticalResourceHints();
    
    // Report metrics after page load
    const timer = setTimeout(reportMetrics, 1000);
    
    return () => clearTimeout(timer);
  }, [enableCriticalResourceHints, reportMetrics]);

  return {
    measurePerformance,
    optimizeBundleLoading,
    enableCriticalResourceHints,
    reportMetrics
  };
};

export default usePerformanceOptimization;