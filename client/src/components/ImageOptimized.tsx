/**
 * ImageOptimized Component - Enterprise-level image optimization
 * Implements comprehensive image optimization with CDN integration and performance monitoring
 */

import React, { useEffect, useRef, useState } from 'react';
import ImageOptimizationService from '../services/ImageOptimizationService';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty' | 'shimmer';
  context?: 'hero' | 'gallery' | 'card' | 'thumbnail';
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
  enableAnalytics?: boolean;
}

export const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  objectFit = 'cover',
  placeholder = 'empty',
  context = 'gallery',
  quality,
  onLoad,
  onError,
  enableAnalytics = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const imageService = ImageOptimizationService.getInstance();

  // Initialize intersection observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  // No individual preloading - rely on browser-native optimization
  // This completely eliminates duplicate requests caused by preloading

  // Generate optimized URLs with enterprise service
  const avifUrl = imageService.generateOptimizedUrl(src, width || 500, 'avif', quality);
  const webpUrl = imageService.generateOptimizedUrl(src, width || 500, 'webp', quality);
  const jpegUrl = imageService.generateOptimizedUrl(src, width || 500, 'jpeg', quality);

  // Generate responsive srcSets
  const avifSrcSet = imageService.generateResponsiveSrcSet(src, 'avif', width || 500);
  const webpSrcSet = imageService.generateResponsiveSrcSet(src, 'webp', width || 500);
  const jpegSrcSet = imageService.generateResponsiveSrcSet(src, 'jpeg', width || 500);

  // Generate appropriate sizes attribute
  const responsiveSizes = sizes || imageService.generateSizesAttribute(context);

  // Generate placeholder styles
  const getPlaceholderStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      width: width ? `${width}px` : '100%',
      height: height ? `${height}px` : 'auto',
      objectFit: objectFit,
      transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
      opacity: isLoaded ? 1 : 0.7,
      filter: isLoaded ? 'none' : 'blur(4px)'
    };

    if (placeholder === 'shimmer') {
      return {
        ...baseStyle,
        background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: !isLoaded ? 'shimmer 1.5s infinite' : 'none'
      };
    } else if (placeholder === 'blur') {
      return {
        ...baseStyle,
        backgroundColor: '#f3f4f6',
        backgroundImage: 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6), linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6)',
        backgroundSize: '8px 8px',
        backgroundPosition: '0 0, 4px 4px'
      };
    }

    return {
      ...baseStyle,
      backgroundColor: '#f3f4f6'
    };
  };

  // Handle load events
  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
    onError?.();
  };

  // Common image attributes
  const commonAttributes = {
    ref: imgRef,
    alt,
    width,
    height,
    className: `${className} ${objectFit === 'cover' ? 'object-cover' : `object-${objectFit}`}`,
    loading: priority ? 'eager' : 'lazy' as const,
    decoding: 'async' as const,
    style: getPlaceholderStyle(),
    onLoad: handleLoad,
    onError: handleError,
    sizes: responsiveSizes
  };

  // Error fallback
  if (hasError) {
    return (
      <div 
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-500 text-sm`}
        style={{ width: width || '100%', height: height || 'auto' }}
      >
        Failed to load image
      </div>
    );
  }

  // Don't render image until it's in view (unless priority)
  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={`${className} bg-gray-100`}
        style={{ width: width || '100%', height: height || 'auto' }}
      />
    );
  }

  return (
    <>
      {/* Add shimmer keyframes */}
      {placeholder === 'shimmer' && (
        <style>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
      )}
      
      <picture className="block">
        {/* AVIF format - best compression */}
        <source
          srcSet={avifSrcSet}
          type="image/avif"
          sizes={responsiveSizes}
        />
        
        {/* WebP format - good compression and compatibility */}
        <source
          srcSet={webpSrcSet}
          type="image/webp"
          sizes={responsiveSizes}
        />
        
        {/* JPEG fallback - universal compatibility */}
        <img
          {...commonAttributes}
          src={jpegUrl}
          srcSet={jpegSrcSet}
          // Performance attributes
          {...(priority && { fetchpriority: 'high' })}
          // SEO attributes
          itemProp="image"
          // Accessibility attributes
          role="img"
          // Performance hints
          data-optimized="true"
          data-context={context}
          data-analytics={enableAnalytics ? 'true' : 'false'}
        />
      </picture>
    </>
  );
};

export default ImageOptimized;