/**
 * Bundle Optimization Utilities
 * Implements dynamic imports and lazy loading for heavy components
 */

import { lazy } from 'react';

// Lazy load admin components (only loaded when admin panel is accessed)
export const LazyAdminPanel = lazy(() => import('../pages/admin'));
export const LazyBlogDetail = lazy(() => import('../pages/blog-detail'));

// Lazy load heavy UI components
export const LazyRichTextEditor = lazy(() => import('../components/ui/rich-text-editor.tsx'));
export const LazyCommand = lazy(() => import('../components/ui/command.tsx'));
export const LazyCalendar = lazy(() => import('../components/ui/calendar.tsx'));
export const LazyNavigationMenu = lazy(() => import('../components/ui/navigation-menu.tsx'));

// Lazy load chart components (only for admin analytics)
export const LazyChart = lazy(() => import('../components/ui/chart.tsx'));

// Dynamic import wrapper for conditional loading
export const loadComponentOnDemand = async <T>(
  importFn: () => Promise<{ default: T }>,
  condition: boolean = true
): Promise<T | null> => {
  if (!condition) return null;
  
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.warn('Failed to load component:', error);
    return null;
  }
};

// Bundle size monitoring
export const reportBundleSize = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    
    console.log('📊 Bundle Performance:', {
      loadTime: `${loadTime}ms`,
      transferSize: navigation.transferSize ? `${(navigation.transferSize / 1024).toFixed(2)} KB` : 'unknown'
    });
  }
};

// Chunk loading strategy
export const preloadCriticalChunks = () => {
  // Preload city chunks for common destinations
  const criticalCities = ['london', 'rome'];
  
  criticalCities.forEach(city => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = `/src/pages/cities/${city}.tsx`;
    document.head.appendChild(link);
  });
};

// Performance optimization for images
export const optimizeImages = () => {
  // Add intersection observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

export default {
  LazyAdminPanel,
  LazyBlogDetail,
  LazyRichTextEditor,
  LazyCommand,
  LazyCalendar,
  LazyNavigationMenu,
  LazyChart,
  loadComponentOnDemand,
  reportBundleSize,
  preloadCriticalChunks,
  optimizeImages
};