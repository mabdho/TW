/**
 * Internal linking utilities for SEO optimization
 * Generates keyword-rich links between related cities and content
 */

interface CityLink {
  name: string;
  url: string;
  country: string;
  keywords: string[];
}

export const CITY_LINKS: CityLink[] = [
  {
    name: 'Milan',
    url: '/best-things-to-do-in-milan',
    country: 'Italy',
    keywords: ['fashion', 'design', 'cathedral', 'opera', 'italy', 'duomo', 'scala']
  },
  {
    name: 'Porto',
    url: '/best-things-to-do-in-porto',
    country: 'Portugal',
    keywords: ['port wine', 'douro', 'portugal', 'azulejo', 'tiles', 'river']
  }
];

/**
 * Generate related city links based on keywords and location
 */
export function getRelatedCityLinks(currentCityName: string, maxLinks: number = 3): CityLink[] {
  return CITY_LINKS
    .filter(city => city.name.toLowerCase() !== currentCityName.toLowerCase())
    .slice(0, maxLinks);
}

/**
 * Generate internal linking section with SEO-optimized anchor text
 */
export function generateInternalLinkingContent(currentCityName: string): {
  relatedCities: CityLink[];
  linkingText: string;
} {
  const relatedCities = getRelatedCityLinks(currentCityName, 3);
  
  const linkingText = `Explore more European destinations and discover the best things to do in other amazing cities. 
    Planning your European adventure? Don't miss our comprehensive travel guides for other incredible destinations.`;
  
  return {
    relatedCities,
    linkingText
  };
}

export type { CityLink };