/**
 * Performance optimization hooks for TravelWanders
 * Provides runtime performance monitoring and optimization utilities
 */

import { useEffect, useRef, useState } from 'react';

// Hook for measuring component render performance
export function useRenderPerformance(componentName: string) {
  const renderStart = useRef<number>(0);

  useEffect(() => {
    renderStart.current = performance.now();
  }, []);

  useEffect(() => {
    const renderTime = performance.now() - renderStart.current;
    if (renderTime > 16) { // Only log if longer than one frame
      console.log(`${componentName} render: ${Math.round(renderTime)}ms`);
    }
  });
}

// Hook for intersection observer with performance optimization
export function useIntersectionObserver(
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px',
        ...options
      }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [callback, options]);

  return elementRef;
}

// Hook for lazy loading images with performance optimization
export function useLazyImage(src: string, threshold = 0.1) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [src, threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return { imgRef, imageSrc, isLoaded, handleLoad };
}

// Hook for prefetching resources
export function usePrefetch(resources: string[], condition = true) {
  useEffect(() => {
    if (!condition) return;

    const prefetchLinks: HTMLLinkElement[] = [];

    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      
      if (resource.endsWith('.js') || resource.endsWith('.tsx')) {
        link.as = 'script';
      } else if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
        link.as = 'image';
      }
      
      link.href = resource;
      document.head.appendChild(link);
      prefetchLinks.push(link);
    });

    return () => {
      prefetchLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [resources, condition]);
}

// Hook for measuring Core Web Vitals
export function useWebVitals() {
  const [vitals, setVitals] = useState<{
    fcp?: number;
    lcp?: number;
    cls?: number;
    fid?: number;
  }>({});

  useEffect(() => {
    // First Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setVitals(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setVitals(prev => ({ ...prev, lcp: lastEntry.startTime }));
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      setVitals(prev => ({ ...prev, cls: clsValue }));
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fid = (entry as any).processingStart - entry.startTime;
        setVitals(prev => ({ ...prev, fid }));
      }
    }).observe({ entryTypes: ['first-input'] });

  }, []);

  return vitals;
}

// Hook for optimizing re-renders with debouncing
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Hook for memory usage monitoring
export function useMemoryMonitoring() {
  const [memoryUsage, setMemoryUsage] = useState<any>(null);

  useEffect(() => {
    if ('memory' in performance) {
      const updateMemory = () => {
        setMemoryUsage((performance as any).memory);
      };

      updateMemory();
      const interval = setInterval(updateMemory, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return memoryUsage;
}

// Hook for optimizing scroll performance
export function useScrollOptimization() {
  useEffect(() => {
    // Optimize scroll behavior
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll-related optimizations
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}