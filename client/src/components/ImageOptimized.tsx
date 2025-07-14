/**
 * ImageOptimized Component - Advanced image optimization with AVIF/WebP support
 * Implements comprehensive image optimization for sub-2.5s FCP performance
 */

import React from 'react';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  placeholder?: 'blur' | 'empty';
  onLoad?: () => void;
  onError?: () => void;
}

export const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '100vw',
  objectFit = 'cover',
  placeholder = 'empty',
  onLoad,
  onError
}) => {
  // Optimize Unsplash URLs for performance
  const optimizeImageUrl = (url: string, format: string = 'webp', quality: number = 80): string => {
    if (!url.includes('unsplash.com')) return url;
    
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('fm', format);
      urlObj.searchParams.set('q', quality.toString());
      
      // Set appropriate width for performance
      if (width) {
        urlObj.searchParams.set('w', (width * 2).toString()); // 2x for retina
      }
      
      return urlObj.toString();
    } catch {
      return url;
    }
  };

  // Generate optimized URLs for different formats
  const avifUrl = optimizeImageUrl(src, 'avif', 75);
  const webpUrl = optimizeImageUrl(src, 'webp', 80);
  const jpegUrl = optimizeImageUrl(src, 'jpg', 85);

  // Generate srcSet for responsive images
  const generateSrcSet = (baseUrl: string, format: string): string => {
    if (!baseUrl.includes('unsplash.com')) return baseUrl;
    
    const widths = [640, 768, 1024, 1280, 1536, 1920];
    return widths
      .map(w => `${optimizeImageUrl(baseUrl, format, format === 'avif' ? 70 : 80)} ${w}w`)
      .join(', ');
  };

  // Placeholder style for preventing layout shift
  const placeholderStyle: React.CSSProperties = {
    backgroundColor: '#f3f4f6',
    backgroundImage: placeholder === 'blur' ? 
      'linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6), linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%, #f3f4f6)' : 
      undefined,
    backgroundSize: placeholder === 'blur' ? '8px 8px' : undefined,
    backgroundPosition: placeholder === 'blur' ? '0 0, 4px 4px' : undefined,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : 'auto',
    objectFit: objectFit,
    transition: 'opacity 0.2s ease-in-out'
  };

  // Common image attributes
  const commonAttributes = {
    alt,
    width,
    height,
    className: `${className} ${objectFit === 'cover' ? 'object-cover' : `object-${objectFit}`}`,
    loading: priority ? 'eager' : 'lazy' as const,
    decoding: 'async' as const,
    style: placeholderStyle,
    onLoad,
    onError,
    sizes
  };

  return (
    <picture className="block">
      {/* AVIF format - best compression */}
      <source
        srcSet={generateSrcSet(avifUrl, 'avif')}
        type="image/avif"
        sizes={sizes}
      />
      
      {/* WebP format - good compression and compatibility */}
      <source
        srcSet={generateSrcSet(webpUrl, 'webp')}
        type="image/webp"
        sizes={sizes}
      />
      
      {/* JPEG fallback - universal compatibility */}
      <img
        {...commonAttributes}
        src={jpegUrl}
        // Performance attributes
        fetchPriority={priority ? 'high' : 'auto'}
        // SEO attributes
        itemProp="image"
        // Accessibility attributes
        role="img"
        // Performance hints
        data-optimized="true"
      />
    </picture>
  );
};

export default ImageOptimized;