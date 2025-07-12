/**
 * Image optimization utilities for TravelWanders
 * Provides lazy loading, alt text generation, and responsive image handling
 */

export interface OptimizedImageProps {
  src: string;
  alt: string;
  cityName?: string;
  attractionName?: string;
  loading?: 'lazy' | 'eager';
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Generate SEO-optimized alt text for city and attraction images
 */
export function generateImageAltText(
  cityName: string, 
  attractionName?: string, 
  context: 'hero' | 'gallery' | 'attraction' = 'hero'
): string {
  if (attractionName) {
    switch (context) {
      case 'hero':
        return `${attractionName} in ${cityName} - must-see attraction and top things to do`;
      case 'gallery':
        return `${attractionName}, ${cityName} - beautiful view of this iconic attraction`;
      case 'attraction':
        return `${attractionName} in ${cityName} - visitor photo showcasing this popular destination`;
      default:
        return `${attractionName} in ${cityName} - travel photography`;
    }
  }
  
  switch (context) {
    case 'hero':
      return `Best things to do in ${cityName} - travel guide and city overview`;
    case 'gallery':
      return `${cityName} travel photography - beautiful cityscape and attractions`;
    default:
      return `${cityName} travel destination - tourist attractions and experiences`;
  }
}

/**
 * Optimize Unsplash image URLs with performance parameters
 */
export function optimizeImageUrl(
  originalUrl: string, 
  options: {
    width?: number;
    height?: number;
    format?: 'webp' | 'avif' | 'jpg';
    quality?: number;
  } = {}
): string {
  const { width = 1400, height, format = 'webp', quality = 80 } = options;
  
  if (!originalUrl.includes('unsplash.com')) {
    return originalUrl;
  }
  
  // Extract base URL and add optimization parameters
  const baseUrl = originalUrl.split('?')[0];
  const params = new URLSearchParams();
  
  params.set('auto', 'format');
  params.set('fit', 'crop');
  params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  params.set('fm', format);
  params.set('q', quality.toString());
  
  return `${baseUrl}?${params.toString()}`;
}

/**
 * Create responsive picture element with modern format fallbacks
 */
export function createPictureElement(props: OptimizedImageProps) {
  const { src, alt, loading = 'lazy', className = '', width, height } = props;
  
  // Generate optimized URLs for different formats
  const webpUrl = optimizeImageUrl(src, { width, height, format: 'webp' });
  const avifUrl = optimizeImageUrl(src, { width, height, format: 'avif' });
  const jpegUrl = optimizeImageUrl(src, { width, height, format: 'jpg' });
  
  // Return image element for now (JSX would need React import)
  return {
    webpUrl,
    avifUrl, 
    jpegUrl,
    alt,
    loading,
    width,
    height,
    className
  };
}

/**
 * Generate optimized image props with lazy loading and SEO alt text
 */
export function optimizeImageProps(props: OptimizedImageProps) {
  const { 
    src, 
    alt, 
    cityName, 
    attractionName, 
    loading = 'lazy', 
    className = '',
    width = 1400,
    height 
  } = props;
  
  const optimizedAlt = alt || generateImageAltText(
    cityName || 'destination', 
    attractionName, 
    'gallery'
  );
  
  const optimizedSrc = optimizeImageUrl(src, { width, height });
  
  return {
    src: optimizedSrc,
    alt: optimizedAlt,
    loading,
    width,
    height,
    className: `w-full h-full object-cover ${className}`
  };
}

/**
 * Generate gallery images with optimized alt text
 */
export function optimizeGalleryImages(
  images: Array<{ url?: string; alt?: string; caption?: string }>,
  cityName: string
): Array<{ url: string; alt: string; caption?: string }> {
  return images
    .filter(img => img.url)
    .map((img, index) => ({
      url: optimizeImageUrl(img.url!, { width: 800, height: 600 }),
      alt: img.alt || generateImageAltText(cityName, undefined, 'gallery'),
      caption: img.caption
    }));
}

export type { OptimizedImageProps };
export { generateImageAltText, optimizeImageUrl, createPictureElement, optimizeImageProps, optimizeGalleryImages };