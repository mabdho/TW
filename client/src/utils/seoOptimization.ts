/**
 * Advanced SEO optimization utilities for TravelWanders
 * Implements comprehensive meta tag generation, schema markup, and performance optimizations
 */

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  attribute?: string;
}

interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  imageUrl?: string;
  cityName: string;
  country: string;
  attractions?: string[];
}

/**
 * Generate optimized meta description with keyword variations
 */
export function generateOptimizedMetaDescription(config: SEOConfig): string {
  const { cityName, country, attractions = [] } = config;
  
  // Primary keyword variations
  const primaryKeyword = `best things to do in ${cityName}`;
  const secondaryKeyword = `things to do in ${cityName}`;
  
  // Build description with natural keyword inclusion
  let description = `Discover the ${primaryKeyword} with our comprehensive travel guide. `;
  
  // Add attraction highlights if available
  if (attractions.length > 0) {
    const topAttractions = attractions.slice(0, 3).join(', ');
    description += `Explore ${topAttractions} and more amazing ${secondaryKeyword}. `;
  }
  
  // Add location context
  description += `Complete ${cityName}, ${country} travel planning guide.`;
  
  // Ensure description is within optimal length (150-160 characters)
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return description;
}

/**
 * Generate comprehensive meta tags for city pages
 */
export function generateCityMetaTags(config: SEOConfig): MetaTag[] {
  const { title, cityName, country, canonicalUrl, imageUrl } = config;
  const description = generateOptimizedMetaDescription(config);
  
  const metaTags: MetaTag[] = [
    // Primary meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: config.keywords.join(', ') },
    { name: 'author', content: 'TravelWanders' },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    
    // Canonical URL
    { attribute: 'rel="canonical"', content: canonicalUrl },
    
    // Open Graph meta tags for social sharing
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:site_name', content: 'TravelWanders' },
    { property: 'og:locale', content: 'en_US' },
    
    // Twitter Card meta tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:site', content: '@TravelWanders' },
    
    // Geographic meta tags for local SEO
    { name: 'geo.region', content: country },
    { name: 'geo.placename', content: cityName },
    { name: 'ICBM', content: getCoordinates(cityName) },
    
    // Article meta tags
    { property: 'article:publisher', content: 'https://www.facebook.com/TravelWanders' },
    { property: 'article:author', content: 'TravelWanders Team' },
    { property: 'article:section', content: 'Travel Guide' },
    { property: 'article:tag', content: config.keywords.slice(0, 5).join(', ') }
  ];
  
  // Add image meta tags if image is available
  if (imageUrl) {
    metaTags.push(
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: `Things to do in ${cityName} - travel guide hero image` },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: `${cityName} travel guide and attractions` }
    );
  }
  
  return metaTags;
}

/**
 * Generate enhanced alt text for attraction images
 * Varied to prevent keyword cannibalization while maintaining SEO focus
 */
export function generateEnhancedAltText(
  attractionName: string,
  cityName: string,
  country: string,
  context: 'hero' | 'gallery' | 'card' = 'gallery'
): string {
  switch (context) {
    case 'hero':
      return `things to do in ${cityName}`;
    case 'gallery':
      return `${attractionName} - attractions in ${cityName}`;
    case 'card':
      return `${attractionName} - places to visit in ${cityName}`;
    default:
      return `${attractionName} - best spots in ${cityName}`;
  }
}

/**
 * Generate city-specific enhanced alt text for hero images
 */
export function generateCityHeroAltText(cityName: string, country: string): string {
  return `things to do in ${cityName}`;
}

/**
 * Generate contextual internal links for content
 */
export function generateContextualInternalLinks(
  cityName: string,
  country: string,
  attractions: string[] = []
): Array<{text: string; url: string; context: string}> {
  const links = [];
  
  // Add destination-specific links
  links.push({
    text: `More destinations in ${country}`,
    url: `/destinations?country=${country.toLowerCase()}`,
    context: 'country-destinations'
  });
  
  // Add travel planning links
  links.push({
    text: `${cityName} travel tips and planning guide`,
    url: `/travel-tips/${cityName.toLowerCase()}`,
    context: 'travel-planning'
  });
  
  // Add attraction-specific links
  if (attractions.length > 0) {
    const mainAttraction = attractions[0];
    links.push({
      text: `Complete guide to ${mainAttraction}`,
      url: `/attractions/${mainAttraction.toLowerCase().replace(/\s+/g, '-')}`,
      context: 'attraction-guide'
    });
  }
  
  // Add seasonal travel links
  links.push({
    text: `Best time to visit ${cityName}`,
    url: `/when-to-visit/${cityName.toLowerCase()}`,
    context: 'seasonal-travel'
  });
  
  // Add accommodation links
  links.push({
    text: `Where to stay in ${cityName}`,
    url: `/accommodation/${cityName.toLowerCase()}`,
    context: 'accommodation'
  });
  
  return links;
}

/**
 * Get coordinates for major cities (for geo meta tags)
 */
function getCoordinates(cityName: string): string {
  // No coordinates - add cities via admin panel
  const coordinates: Record<string, string> = {};
  
  return coordinates[cityName] || '0.0000,0.0000';
}

/**
 * Generate JSON-LD structured data for enhanced search results
 */
export function generateEnhancedStructuredData(config: SEOConfig): object {
  const { title, cityName, country, canonicalUrl, attractions = [] } = config;
  
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Main webpage schema
      {
        "@type": "WebPage",
        "@id": canonicalUrl,
        "url": canonicalUrl,
        "name": title,
        "description": generateOptimizedMetaDescription(config),
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://travelwanders.com/#website",
          "url": "https://travelwanders.com/",
          "name": "TravelWanders"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://travelwanders.com/"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "Destinations",
              "item": "https://travelwanders.com/destinations"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": title,
              "item": canonicalUrl
            }
          ]
        }
      },
      // Travel guide schema
      {
        "@type": "TravelGuide",
        "@id": `${canonicalUrl}#travelguide`,
        "name": title,
        "description": generateOptimizedMetaDescription(config),
        "about": {
          "@type": "City",
          "name": cityName,
          "containedInPlace": {
            "@type": "Country",
            "name": country
          }
        },
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": attractions.length,
          "itemListElement": attractions.slice(0, 10).map((attraction, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "TouristAttraction",
              "name": attraction,
              "location": {
                "@type": "City",
                "name": cityName,
                "addressCountry": country
              }
            }
          }))
        },
        "author": {
          "@type": "Organization",
          "name": "TravelWanders",
          "url": "https://travelwanders.com"
        }
      }
    ]
  };
}

/**
 * Generate performance optimization hints
 */
export function generatePerformanceHints(): string[] {
  return [
    // DNS prefetch for external domains
    '<link rel="dns-prefetch" href="//images.unsplash.com">',
    '<link rel="dns-prefetch" href="//fonts.googleapis.com">',
    '<link rel="dns-prefetch" href="//www.google-analytics.com">',
    
    // Preconnect for critical resources
    '<link rel="preconnect" href="https://images.unsplash.com" crossorigin>',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    
    // Resource hints for better loading
    '<meta name="format-detection" content="telephone=no">',
    '<meta name="theme-color" content="#059669">',
    '<meta name="color-scheme" content="light dark">'
  ];
}

export type { MetaTag, SEOConfig };