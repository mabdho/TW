/**
 * Image SEO optimization utilities for TravelWanders
 * Generates SEO-friendly alt text for gallery images
 */

import { CityData } from './seo';

export interface OptimizedGalleryImage {
  url?: string;
  alt: string;
  caption: string;
  seoAlt?: string; // SEO-optimized alt text
}

/**
 * Generate SEO-optimized alt text for gallery images
 */
export function generateOptimizedAltText(
  cityName: string,
  country: string,
  imageIndex: number,
  attractions: Array<{ name: string; description: string }> = []
): string {
  // Use actual attraction names when available
  const attractionNames = attractions.slice(0, 6).map(attr => attr.name);
  
  if (attractionNames[imageIndex]) {
    return `${attractionNames[imageIndex]} in ${cityName}, ${country} - Top attraction and best thing to do`;
  }
  
  // Fallback to optimized descriptive alt text
  const descriptors = [
    'scenic view',
    'historic landmark',
    'popular attraction',
    'cultural site',
    'architectural marvel',
    'tourist destination'
  ];
  
  const descriptor = descriptors[imageIndex] || 'beautiful location';
  return `${descriptor} in ${cityName}, ${country} - Best things to do and travel guide`;
}

/**
 * Generate SEO-optimized gallery images for city pages
 */
export function optimizeGalleryImages(
  cityData: CityData,
  originalImages: Array<{ url?: string; alt?: string; caption?: string }> = []
): OptimizedGalleryImage[] {
  return originalImages.map((image, index) => ({
    url: image.url || '',
    alt: image.alt || `${cityData.name} landmark ${index + 1}`,
    caption: image.caption || `${cityData.name} landmark ${index + 1} - placeholder`,
    seoAlt: generateOptimizedAltText(
      cityData.name,
      cityData.country,
      index,
      cityData.attractions
    )
  }));
}

/**
 * Generate image structured data for SEO
 */
export function generateImageStructuredData(
  cityData: CityData,
  images: OptimizedGalleryImage[]
): object {
  const validImages = images.filter(img => img.url && img.url.trim() !== '');
  
  if (validImages.length === 0) {
    return {};
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": `${cityData.name} Travel Photo Gallery`,
    "description": `Best photos and images of top attractions in ${cityData.name}, ${cityData.country}`,
    "associatedMedia": validImages.map(img => ({
      "@type": "ImageObject",
      "url": img.url,
      "name": img.seoAlt,
      "description": img.caption,
      "contentLocation": {
        "@type": "Place",
        "name": `${cityData.name}, ${cityData.country}`
      }
    }))
  };
}