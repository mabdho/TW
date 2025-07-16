/**
 * Advanced image optimization utilities for TravelWanders
 * Handles modern image formats, lazy loading, and SEO-optimized alt text
 */

interface OptimizedImage {
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface GalleryImage {
  url?: string;
  alt?: string;
  caption?: string;
}

/**
 * Generate optimized image URLs with modern format support
 */
export function optimizeImageUrl(
  originalUrl: string, 
  width: number = 1400, 
  format: 'webp' | 'avif' | 'jpg' = 'webp',
  quality: number = 80
): string {
  // Handle Unsplash URLs
  if (originalUrl.includes('unsplash.com')) {
    const baseUrl = originalUrl.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&w=${width}&fm=${format}&q=${quality}`;
  }
  
  // Return original URL if not from a supported service
  return originalUrl;
}

/**
 * Generate picture element HTML with modern format fallbacks
 */
export function generatePictureElement(
  imageUrl: string,
  alt: string,
  width: number = 1400,
  height?: number,
  loading: 'lazy' | 'eager' = 'lazy',
  className: string = ''
): string {
  const baseUrl = imageUrl.split('?')[0];
  
  return `
    <picture class="${className}">
      <source 
        srcset="${baseUrl}?auto=format&fit=crop&w=${width}&fm=avif&q=75"
        type="image/avif"
      />
      <source 
        srcset="${baseUrl}?auto=format&fit=crop&w=${width}&fm=webp&q=80"
        type="image/webp"
      />
      <img 
        src="${baseUrl}?auto=format&fit=crop&w=${width}&fm=jpg&q=80"
        alt="${alt}"
        loading="${loading}"
        width="${width}"
        ${height ? `height="${height}"` : ''}
        class="w-full h-full object-cover"
      />
    </picture>
  `;
}

/**
 * Generate SEO-optimized alt text for city attractions
 */
export function generateImageAltText(
  cityName: string,
  attractionName?: string,
  context: 'hero' | 'gallery' | 'attraction' = 'gallery'
): string {
  // Simple format: "things to do in [city]" for all images as requested
  return `things to do in ${cityName}`;
}

/**
 * Optimize gallery images with modern formats and SEO alt text
 */
export function optimizeGalleryImages(
  galleryImages: GalleryImage[],
  cityName: string
): OptimizedImage[] {
  return galleryImages
    .filter(image => image.url) // Only include images with URLs
    .map((image, index) => ({
      url: optimizeImageUrl(image.url!, 400, 'webp', 80),
      alt: image.alt || `things to do in ${cityName}`,
      caption: image.caption,
      width: 400,
      height: 400
    }));
}

/**
 * Generate responsive image srcSet for different screen sizes
 */
export function generateResponsiveSrcSet(baseUrl: string, format: 'webp' | 'avif' | 'jpg' = 'webp'): string {
  const sizes = [400, 800, 1200, 1600];
  return sizes
    .map(size => `${optimizeImageUrl(baseUrl, size, format)} ${size}w`)
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizesAttribute(context: 'hero' | 'gallery' | 'card' = 'gallery'): string {
  switch (context) {
    case 'hero':
      return '100vw';
    case 'card':
      return '(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw';
    case 'gallery':
    default:
      return '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw';
  }
}

/**
 * Create optimized image configuration for attractions
 */
export function createAttractionImageConfig(
  attractionName: string,
  cityName: string,
  imageUrl?: string
): OptimizedImage | null {
  if (!imageUrl) return null;
  
  return {
    url: optimizeImageUrl(imageUrl, 800, 'webp', 85),
    alt: generateImageAltText(cityName, attractionName, 'attraction'),
    width: 800,
    height: 600
  };
}

/**
 * Generate lazy loading intersection observer configuration
 */
export function generateLazyLoadConfig(): IntersectionObserverInit {
  return {
    root: null,
    rootMargin: '50px 0px', // Start loading 50px before image enters viewport
    threshold: 0.1
  };
}

/**
 * Check if image format is supported by browser
 */
export function supportsImageFormat(format: 'webp' | 'avif'): boolean {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  try {
    const dataUrl = canvas.toDataURL(`image/${format}`);
    return dataUrl.indexOf(`data:image/${format}`) === 0;
  } catch {
    return false;
  }
}

/**
 * Get optimal image format based on browser support
 */
export function getOptimalImageFormat(): 'avif' | 'webp' | 'jpg' {
  if (supportsImageFormat('avif')) return 'avif';
  if (supportsImageFormat('webp')) return 'webp';
  return 'jpg';
}

export type { OptimizedImage, GalleryImage };