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
  // City links cleared - ready for fresh production content via admin panel
];

/**
 * Generate related city links based on keywords and location with smart relevance scoring
 */
export function getRelatedCityLinks(currentCityName: string, maxLinks: number = 3): CityLink[] {
  const currentCity = CITY_LINKS.find(city => city.name.toLowerCase() === currentCityName.toLowerCase());
  
  if (!currentCity) {
    return CITY_LINKS.slice(0, maxLinks);
  }
  
  // Score cities based on shared keywords and same country
  const scoredCities = CITY_LINKS
    .filter(city => city.name.toLowerCase() !== currentCityName.toLowerCase())
    .map(city => {
      let score = 0;
      
      // Higher score for same country
      if (city.country === currentCity.country) {
        score += 3;
      }
      
      // Score for shared keywords
      const sharedKeywords = city.keywords.filter(keyword => 
        currentCity.keywords.some(currentKeyword => 
          currentKeyword.includes(keyword) || keyword.includes(currentKeyword)
        )
      );
      score += sharedKeywords.length;
      
      return { ...city, score };
    })
    .sort((a, b) => b.score - a.score);
    
  return scoredCities.slice(0, maxLinks);
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