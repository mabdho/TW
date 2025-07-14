/**
 * Performance-optimized image component for TravelWanders
 * Implements modern image loading techniques for better Core Web Vitals
 */

import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URLs for different formats
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('unsplash.com')) {
      return baseSrc; // Only optimize Unsplash images
    }

    const baseUrl = baseSrc.split('?')[0];
    const params = 'auto=format&fit=crop&q=80';
    
    return [
      `${baseUrl}?${params}&w=400&fm=avif 400w`,
      `${baseUrl}?${params}&w=800&fm=avif 800w`,
      `${baseUrl}?${params}&w=1200&fm=avif 1200w`,
      `${baseUrl}?${params}&w=1600&fm=avif 1600w`,
      `${baseUrl}?${params}&w=400&fm=webp 400w`,
      `${baseUrl}?${params}&w=800&fm=webp 800w`,
      `${baseUrl}?${params}&w=1200&fm=webp 1200w`,
      `${baseUrl}?${params}&w=1600&fm=webp 1600w`
    ].join(', ');
  };

  const getOptimizedSrc = (baseSrc: string, targetWidth = 800) => {
    if (!baseSrc.includes('unsplash.com')) {
      return baseSrc;
    }

    const baseUrl = baseSrc.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&w=${targetWidth}&q=80&fm=webp`;
  };

  useEffect(() => {
    if (!imgRef.current || !priority) return;

    // Preload critical images
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = getOptimizedSrc(src);
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    );
  }

  // For Unsplash images, use modern picture element with format fallbacks
  if (src.includes('unsplash.com')) {
    const baseUrl = src.split('?')[0];
    const params = 'auto=format&fit=crop&q=80';

    return (
      <picture className={className}>
        {/* AVIF format (best compression) */}
        <source
          srcSet={[
            `${baseUrl}?${params}&w=400&fm=avif 400w`,
            `${baseUrl}?${params}&w=800&fm=avif 800w`,
            `${baseUrl}?${params}&w=1200&fm=avif 1200w`,
            `${baseUrl}?${params}&w=1600&fm=avif 1600w`
          ].join(', ')}
          sizes={sizes}
          type="image/avif"
        />
        
        {/* WebP format (good compression) */}
        <source
          srcSet={[
            `${baseUrl}?${params}&w=400&fm=webp 400w`,
            `${baseUrl}?${params}&w=800&fm=webp 800w`,
            `${baseUrl}?${params}&w=1200&fm=webp 1200w`,
            `${baseUrl}?${params}&w=1600&fm=webp 1600w`
          ].join(', ')}
          sizes={sizes}
          type="image/webp"
        />
        
        {/* JPEG fallback */}
        <img
          ref={imgRef}
          src={getOptimizedSrc(src)}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : undefined 
          }}
        />
      </picture>
    );
  }

  // For non-Unsplash images, use standard img element
  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined 
      }}
    />
  );
}

// Utility hook for intersection observer (lazy loading)
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef, options]);

  return isIntersecting;
}

// Preload images utility
export function preloadImages(urls: string[], priority: boolean = false) {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = priority ? 'preload' : 'prefetch';
    link.as = 'image';
    link.href = url.includes('unsplash.com') 
      ? `${url.split('?')[0]}?auto=format&fit=crop&w=800&q=80&fm=webp`
      : url;
    document.head.appendChild(link);
  });
}