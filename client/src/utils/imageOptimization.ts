// Image optimization utilities for better performance
import React, { useEffect, useRef, useState, useMemo } from 'react';

export interface ImageOptimizationConfig {
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  sizes?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
}

// Optimized image component with lazy loading
export const OptimizedImage = ({
  src,
  alt,
  className,
  quality = 75,
  loading = 'lazy',
  placeholder = 'blur',
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  [key: string]: any;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URL
  const optimizedSrc = useMemo(() => {
    if (src.includes('unsplash.com')) {
      const url = new URL(src);
      url.searchParams.set('q', quality.toString());
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      return url.toString();
    }
    return src;
  }, [src, quality]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = optimizedSrc;
              observer.unobserve(img);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [loading, optimizedSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    setError(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(false);
  };

  return React.createElement(
    'div',
    { className: `relative overflow-hidden ${className}` },
    // Placeholder
    !isLoaded && !error && placeholder === 'blur' && 
      React.createElement('div', { className: 'absolute inset-0 bg-gray-200 animate-pulse' }),
    // Main image
    React.createElement('img', {
      ref: imgRef,
      src: loading === 'eager' ? optimizedSrc : undefined,
      alt: alt,
      className: `transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`,
      onLoad: handleLoad,
      onError: handleError,
      ...props
    }),
    // Error fallback
    error && React.createElement(
      'div',
      { className: 'absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500' },
      React.createElement('span', { className: 'text-sm' }, 'Image failed to load')
    )
  );
};

// Image preloading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch image preloading
export const preloadImages = async (srcs: string[]): Promise<void> => {
  const promises = srcs.map(preloadImage);
  await Promise.all(promises);
};

// Generate responsive image sizes
export const generateResponsiveSizes = (
  baseWidth: number,
  breakpoints: number[] = [480, 768, 1024, 1280, 1920]
): string => {
  const sizes = breakpoints.map(bp => `(max-width: ${bp}px) ${Math.min(baseWidth, bp)}px`);
  sizes.push(`${baseWidth}px`);
  return sizes.join(', ');
};

// Image format detection
export const getBestImageFormat = (): 'webp' | 'avif' | 'jpeg' => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
    return 'avif';
  }
  if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    return 'webp';
  }
  return 'jpeg';
};

// Hook for image optimization
export const useImageOptimization = (src: string, config?: ImageOptimizationConfig) => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const optimizeImage = async () => {
      try {
        // Apply optimizations based on config
        let optimized = src;
        
        if (src.includes('unsplash.com') && config?.quality) {
          const url = new URL(src);
          url.searchParams.set('q', config.quality.toString());
          url.searchParams.set('auto', 'format');
          optimized = url.toString();
        }
        
        setOptimizedSrc(optimized);
        setIsOptimized(true);
      } catch (error) {
        console.error('Image optimization failed:', error);
        setOptimizedSrc(src);
        setIsOptimized(false);
      }
    };

    optimizeImage();
  }, [src, config]);

  return { optimizedSrc, isOptimized };
};

// Performance monitoring for images
export const trackImagePerformance = (src: string, startTime: number) => {
  const loadTime = performance.now() - startTime;
  
  // Log performance metrics
  console.log(`Image loaded: ${src.split('/').pop()} in ${loadTime.toFixed(2)}ms`);
  
  // Send to analytics (if implemented)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'image_load', {
      event_category: 'performance',
      event_label: src,
      value: Math.round(loadTime)
    });
  }
};

