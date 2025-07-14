/**
 * Bundle Size Optimization Utilities
 * Advanced code splitting and performance optimization
 */

// Dynamic imports for large components
export const loadComponentAsync = async <T>(
  importFn: () => Promise<{ default: T }>
): Promise<T> => {
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.error('Failed to load component:', error);
    throw error;
  }
};

// Lazy loading with preloading support
export const createLazyComponent = <T>(
  importFn: () => Promise<{ default: T }>,
  preload = false
) => {
  if (preload && typeof window !== 'undefined') {
    // Preload in idle time
    requestIdleCallback(() => {
      importFn().catch(() => {
        // Silent fail for preloading
      });
    });
  }
  
  return React.lazy(importFn);
};

// Bundle size monitoring
export const measureBundleSize = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const resources = performance.getEntriesByType('resource');
    
    const jsResources = resources.filter(resource => 
      resource.name.includes('.js') && !resource.name.includes('hot-update')
    );
    
    console.log('📦 Bundle Analysis:', {
      totalJS: jsResources.length,
      totalSize: `${(jsResources.reduce((acc, r) => acc + (r.transferSize || 0), 0) / 1024).toFixed(2)} KB`,
      loadTime: `${navigation.loadEventEnd - navigation.fetchStart}ms`
    });
  }
};

// Code splitting utilities
export const splitByRoute = {
  // Pages
  admin: () => import('../pages/admin'),
  blogs: () => import('../pages/blogs'),
  destinations: () => import('../pages/destinations'),
  
  // Heavy components
  cityPage: () => import('../components/CityPage'),
  discoveryCards: () => import('../components/DiscoveryCards'),
  interactiveExplorer: () => import('../components/InteractiveAttractionExplorer')
};

// Critical path optimization
export const optimizeCriticalPath = () => {
  // Preload critical resources
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = '/src/components/Navigation.tsx';
    document.head.appendChild(link);
  }
};

export default {
  loadComponentAsync,
  createLazyComponent,
  measureBundleSize,
  splitByRoute,
  optimizeCriticalPath
};