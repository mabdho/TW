/**
 * Image Standards for TravelWanders
 * Enforces consistent image optimization across all city pages and components
 */

export const IMAGE_STANDARDS = {
  // Standard dimensions for different image types
  HERO_WIDTH: 500,
  CARD_WIDTH: 500,
  THUMBNAIL_WIDTH: 300,
  GALLERY_WIDTH: 500,
  
  // Quality settings for different formats
  QUALITY: {
    AVIF: 70,
    WEBP: 75,
    JPEG: 75
  },
  
  // Standard Unsplash parameters
  UNSPLASH_PARAMS: {
    auto: 'format',
    fit: 'crop',
    q: 75,
    ixlib: 'rb-4.1.0'
  }
} as const;

/**
 * Generate optimized Unsplash URL with standard parameters
 */
export function createOptimizedUnsplashUrl(
  baseUrl: string, 
  width: number = IMAGE_STANDARDS.HERO_WIDTH,
  quality: number = IMAGE_STANDARDS.QUALITY.JPEG
): string {
  try {
    const url = new URL(baseUrl);
    
    // Apply standard optimization parameters
    url.searchParams.set('w', width.toString());
    url.searchParams.set('auto', IMAGE_STANDARDS.UNSPLASH_PARAMS.auto);
    url.searchParams.set('fit', IMAGE_STANDARDS.UNSPLASH_PARAMS.fit);
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('ixlib', IMAGE_STANDARDS.UNSPLASH_PARAMS.ixlib);
    
    return url.toString();
  } catch (error) {
    console.warn('Failed to optimize image URL:', baseUrl, error);
    return baseUrl;
  }
}

/**
 * Validate that an image URL follows optimization standards
 */
export function validateImageUrl(url: string): {
  isOptimized: boolean;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];
  
  try {
    const urlObj = new URL(url);
    
    // Check if it's an Unsplash URL
    if (urlObj.hostname.includes('unsplash.com')) {
      const width = urlObj.searchParams.get('w');
      const quality = urlObj.searchParams.get('q');
      const format = urlObj.searchParams.get('auto');
      
      // Check width
      if (!width) {
        issues.push('Missing width parameter');
        suggestions.push(`Add w=${IMAGE_STANDARDS.HERO_WIDTH} parameter`);
      } else if (parseInt(width) > IMAGE_STANDARDS.HERO_WIDTH) {
        issues.push(`Width too large: ${width}px`);
        suggestions.push(`Reduce width to ${IMAGE_STANDARDS.HERO_WIDTH}px or less`);
      }
      
      // Check quality
      if (!quality) {
        issues.push('Missing quality parameter');
        suggestions.push(`Add q=${IMAGE_STANDARDS.QUALITY.JPEG} parameter`);
      } else if (parseInt(quality) > IMAGE_STANDARDS.QUALITY.JPEG) {
        issues.push(`Quality too high: ${quality}%`);
        suggestions.push(`Reduce quality to ${IMAGE_STANDARDS.QUALITY.JPEG}% or less`);
      }
      
      // Check format optimization
      if (format !== 'format') {
        issues.push('Missing auto=format parameter');
        suggestions.push('Add auto=format for automatic format optimization');
      }
    }
    
    return {
      isOptimized: issues.length === 0,
      issues,
      suggestions
    };
  } catch (error) {
    return {
      isOptimized: false,
      issues: ['Invalid URL format'],
      suggestions: ['Provide a valid URL']
    };
  }
}

/**
 * Standard city page image configuration
 */
export const CITY_PAGE_IMAGE_CONFIG = {
  hero: {
    width: IMAGE_STANDARDS.HERO_WIDTH,
    height: 300,
    quality: IMAGE_STANDARDS.QUALITY.JPEG,
    priority: true,
    context: 'hero' as const
  },
  gallery: {
    width: IMAGE_STANDARDS.GALLERY_WIDTH,
    height: 225,
    quality: IMAGE_STANDARDS.QUALITY.JPEG,
    priority: false,
    context: 'gallery' as const
  }
} as const;

export default IMAGE_STANDARDS;