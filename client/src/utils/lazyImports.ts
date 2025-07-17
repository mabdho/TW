// Optimized lazy imports for better bundle splitting
import { lazy } from 'react';

// Admin pages - load only when needed
export const LazyAdminPage = lazy(() => import('../pages/admin'));
export const LazyLoginPage = lazy(() => import('../pages/login'));

// Heavy components - load only when needed
export const LazyBlogDetailPage = lazy(() => import('../pages/blog-detail'));
export const LazyDestinationsPage = lazy(() => import('../pages/destinations'));

// City pages - dynamic loading
export const LazyCityPages = {
  Berlin: lazy(() => import('../pages/cities/Berlin').then(m => ({ default: m.Berlin })))
};

// UI components that are heavy
export const LazyChartComponents = {
  // Only load chart components when actually needed
  LineChart: lazy(() => import('recharts').then(m => ({ default: m.LineChart }))),
  BarChart: lazy(() => import('recharts').then(m => ({ default: m.BarChart }))),
  PieChart: lazy(() => import('recharts').then(m => ({ default: m.PieChart })))
};

// Form components - load when forms are needed
export const LazyFormComponents = {
  Form: lazy(() => import('../components/ui/form').then(m => ({ default: m.Form }))),
  FormField: lazy(() => import('../components/ui/form').then(m => ({ default: m.FormField }))),
  FormItem: lazy(() => import('../components/ui/form').then(m => ({ default: m.FormItem })))
};

// Performance optimization: Preload critical components
export const preloadCriticalComponents = () => {
  // Preload components that are likely to be used soon
  import('../pages/destinations');
  import('../pages/blogs');
};

// Bundle size optimization utilities
export const getComponentSize = (componentName: string) => {
  // Helper to track component loading for performance monitoring
  const start = performance.now();
  return {
    startTime: start,
    measure: () => performance.now() - start
  };
};