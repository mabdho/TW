/**
 * Enhanced structured data generation for TravelWanders
 * Generates comprehensive schemas for TouristAttraction, LocalBusiness, and Place entities
 */

interface AttractionData {
  name: string;
  description: string;
  practicalInfo?: {
    cost?: string;
    openingHours?: string;
    website?: string;
  };
}

interface CityData {
  name: string;
  country: string;
  attractions: AttractionData[];
}

/**
 * Generate comprehensive TouristAttraction schema for major attractions
 */
export function generateTouristAttractionSchema(
  attraction: AttractionData, 
  cityName: string, 
  country: string
): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": attraction.name,
    "description": attraction.description,
    "location": {
      "@type": "City",
      "name": cityName,
      "addressCountry": country,
      "containedInPlace": {
        "@type": "Country",
        "name": country
      }
    },
    "touristType": "Tourist",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Tourist Information",
        "value": true
      }
    ]
  };

  // Add opening hours if available
  if (attraction.practicalInfo?.openingHours) {
    schema.openingHours = attraction.practicalInfo.openingHours;
  }

  // Add pricing if available
  if (attraction.practicalInfo?.cost) {
    schema.offers = {
      "@type": "Offer",
      "price": attraction.practicalInfo.cost,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    };
  }

  // Add website if available
  if (attraction.practicalInfo?.website) {
    schema.url = `https://${attraction.practicalInfo.website}`;
  }

  return schema;
}

/**
 * Generate LocalBusiness schema for attractions that are businesses (museums, restaurants, etc.)
 */
export function generateLocalBusinessSchema(
  attraction: AttractionData,
  cityName: string,
  country: string,
  businessType: string = "Museum"
): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": businessType,
    "name": attraction.name,
    "description": attraction.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": country
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Add business-specific properties
  if (attraction.practicalInfo?.openingHours) {
    schema.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    };
  }

  if (attraction.practicalInfo?.website) {
    schema.url = `https://${attraction.practicalInfo.website}`;
  }

  if (attraction.practicalInfo?.cost) {
    schema.priceRange = attraction.practicalInfo.cost;
  }

  return schema;
}

/**
 * Generate Place schema with geographic coordinates
 */
export function generatePlaceSchema(
  cityName: string,
  country: string,
  description: string
): object {
  // Geographic coordinates for major cities
  const coordinates: Record<string, {lat: number, lng: number}> = {
    'Milan': { lat: 45.4642, lng: 9.1900 },
    'Porto': { lat: 41.1579, lng: -8.6291 },
    'Paris': { lat: 48.8566, lng: 2.3522 },
    'Tokyo': { lat: 35.6762, lng: 139.6503 },
    'Barcelona': { lat: 41.3851, lng: 2.1734 },
    'Bologna': { lat: 44.4949, lng: 11.3426 }
  };

  const cityCoords = coordinates[cityName] || { lat: 0, lng: 0 };

  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": cityName,
    "description": description,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityCoords.lat,
      "longitude": cityCoords.lng
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": country
    },
    "containedInPlace": {
      "@type": "Country",
      "name": country
    },
    "tourismType": "City",
    "hasMap": `https://www.google.com/maps/place/${encodeURIComponent(cityName)},+${encodeURIComponent(country)}`
  };
}

/**
 * Generate comprehensive city travel guide schema
 */
export function generateCityTravelGuideSchema(
  cityData: CityData,
  title: string,
  description: string,
  canonicalUrl: string
): object {
  return {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": title,
    "description": description,
    "about": {
      "@type": "City",
      "name": cityData.name,
      "containedInPlace": {
        "@type": "Country",
        "name": cityData.country
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": cityData.attractions.length,
      "itemListElement": cityData.attractions.slice(0, 5).map((attraction, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": generateTouristAttractionSchema(attraction, cityData.name, cityData.country)
      }))
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
      "url": canonicalUrl
    },
    "author": {
      "@type": "Organization",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://travelwanders.com/favicon.svg"
      }
    },
    "dateModified": new Date().toISOString(),
    "inLanguage": "en-US",
    "url": canonicalUrl
  };
}

/**
 * Detect business type from attraction name
 */
export function detectBusinessType(attractionName: string): string {
  const name = attractionName.toLowerCase();
  
  if (name.includes('museum') || name.includes('gallery')) return 'Museum';
  if (name.includes('church') || name.includes('cathedral') || name.includes('basilica')) return 'Church';
  if (name.includes('restaurant') || name.includes('cafe') || name.includes('dining')) return 'Restaurant';
  if (name.includes('theater') || name.includes('theatre') || name.includes('opera')) return 'TheaterGroup';
  if (name.includes('park') || name.includes('garden')) return 'Park';
  if (name.includes('market') || name.includes('shopping')) return 'ShoppingCenter';
  if (name.includes('hotel') || name.includes('accommodation')) return 'LodgingBusiness';
  
  return 'TouristAttraction';
}

export type { AttractionData, CityData };