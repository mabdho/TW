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
    keywords: ['fashion', 'design', 'cathedral', 'opera', 'italy', 'duomo', 'scala', 'gothic', 'architecture']
  },
  {
    name: 'Porto',
    url: '/best-things-to-do-in-porto', 
    country: 'Portugal',
    keywords: ['port wine', 'douro', 'portugal', 'azulejo', 'tiles', 'river', 'unesco', 'historic']
  },
  {
    name: 'Paris',
    url: '/best-things-to-do-in-paris',
    country: 'France', 
    keywords: ['eiffel tower', 'louvre', 'france', 'art', 'museums', 'romance', 'culture', 'fashion']
  },
  {
    name: 'Barcelona',
    url: '/best-things-to-do-in-barcelona',
    country: 'Spain',
    keywords: ['gaudi', 'sagrada familia', 'spain', 'architecture', 'beach', 'catalonia', 'art', 'tapas']
  },
  {
    name: 'Bologna',
    url: '/best-things-to-do-in-bologna',
    country: 'Italy',
    keywords: ['food', 'university', 'italy', 'towers', 'cuisine', 'medieval', 'pasta', 'emilia-romagna']
  },
  {
    name: 'Tokyo',
    url: '/best-things-to-do-in-tokyo',
    country: 'Japan',
    keywords: ['temples', 'modern', 'japan', 'culture', 'sushi', 'technology', 'shibuya', 'tradition']
  }
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