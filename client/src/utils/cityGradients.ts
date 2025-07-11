/**
 * City-specific gradient system
 * Beautiful gradients that match each city's personality and characteristics
 */

export interface CityGradient {
  gradient: string;
  description: string;
  personality: string;
}

// Main gradient mapping for cities - Sophisticated and Professional
export const cityGradients: Record<string, CityGradient> = {
  // Major World Cities - Elegant and Refined
  'Tokyo': {
    gradient: 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600',
    description: 'Sophisticated urban elegance with modern minimalism',
    personality: 'Modern, Refined, Sophisticated'
  },
  'New York': {
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
    description: 'Classic metropolitan sophistication',
    personality: 'Bold, Urban, Timeless'
  },
  'London': {
    gradient: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700',
    description: 'Refined British elegance with royal heritage',
    personality: 'Historic, Elegant, Refined'
  },
  'Paris': {
    gradient: 'bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600',
    description: 'Timeless Parisian sophistication',
    personality: 'Romantic, Refined, Artistic'
  },
  'Rome': {
    gradient: 'bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700',
    description: 'Ancient grandeur with warm elegance',
    personality: 'Historic, Majestic, Warm'
  },
  'Barcelona': {
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    description: 'Mediterranean depth with architectural beauty',
    personality: 'Artistic, Coastal, Sophisticated'
  },
  'Amsterdam': {
    gradient: 'bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700',
    description: 'Dutch heritage with canal-side charm',
    personality: 'Historic, Charming, Cultured'
  },
  'Berlin': {
    gradient: 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700',
    description: 'Modern sophistication with cultural depth',
    personality: 'Modern, Cultural, Dynamic'
  },
  'Dubai': {
    gradient: 'bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700',
    description: 'Luxury and desert sophistication',
    personality: 'Luxurious, Modern, Elegant'
  },
  'Singapore': {
    gradient: 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700',
    description: 'Garden city sophistication with tropical elegance',
    personality: 'Modern, Green, Refined'
  },
  
  // US Cities - Professional and Refined
  'Chicago': {
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    description: 'Deep sophistication reflecting architectural grandeur',
    personality: 'Bold, Architectural, Refined'
  },
  'Boston': {
    gradient: 'bg-gradient-to-br from-red-900 via-red-800 to-red-700',
    description: 'Historic American elegance with academic distinction',
    personality: 'Historic, Academic, Distinguished'
  },
  'San Francisco': {
    gradient: 'bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700',
    description: 'Golden sophistication with innovative spirit',
    personality: 'Innovative, Sophisticated, Coastal'
  },
  'Los Angeles': {
    gradient: 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700',
    description: 'Hollywood elegance with creative sophistication',
    personality: 'Creative, Glamorous, Sophisticated'
  },
  'Las Vegas': {
    gradient: 'bg-gradient-to-br from-violet-900 via-violet-800 to-violet-700',
    description: 'Nightlife sophistication with desert elegance',
    personality: 'Bold, Elegant, Entertainment'
  },
  'Miami': {
    gradient: 'bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700',
    description: 'Art Deco sophistication with coastal elegance',
    personality: 'Tropical, Sophisticated, Coastal'
  },
  'Seattle': {
    gradient: 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700',
    description: 'Pacific Northwest sophistication with natural beauty',
    personality: 'Natural, Modern, Sophisticated'
  },
  
  // Asian Cities - Sophisticated and Refined
  'Bangkok': {
    gradient: 'bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700',
    description: 'Temple sophistication with cultural elegance',
    personality: 'Cultural, Spiritual, Sophisticated'
  },
  'Seoul': {
    gradient: 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700',
    description: 'Modern Korean sophistication with technological elegance',
    personality: 'Modern, Sophisticated, Technological'
  },
  'Mumbai': {
    gradient: 'bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700',
    description: 'Bollywood sophistication with cultural depth',
    personality: 'Cultural, Dynamic, Sophisticated'
  },
  'Hong Kong': {
    gradient: 'bg-gradient-to-br from-red-900 via-red-800 to-red-700',
    description: 'Skyline sophistication with harbor elegance',
    personality: 'Modern, Sophisticated, Cosmopolitan'
  },
  
  // European Cities - Timeless Elegance
  'Vienna': {
    gradient: 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700',
    description: 'Imperial sophistication with classical elegance',
    personality: 'Elegant, Classical, Refined'
  },
  'Prague': {
    gradient: 'bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700',
    description: 'Golden city sophistication with bohemian elegance',
    personality: 'Historic, Sophisticated, Romantic'
  },
  'Stockholm': {
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    description: 'Nordic sophistication with archipelago elegance',
    personality: 'Clean, Modern, Sophisticated'
  },
  'Copenhagen': {
    gradient: 'bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700',
    description: 'Scandinavian sophistication with coastal elegance',
    personality: 'Modern, Sophisticated, Cozy'
  },
  
  // Tropical/Island Cities - Refined Paradise
  'Male': {
    gradient: 'bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700',
    description: 'Maldivian sophistication with tropical elegance',
    personality: 'Tropical, Refined, Peaceful'
  },
  'Dhaandhoo': {
    gradient: 'bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700',
    description: 'Island sophistication with crystal elegance',
    personality: 'Serene, Tropical, Refined'
  },
  'Honolulu': {
    gradient: 'bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700',
    description: 'Hawaiian sophistication with Pacific elegance',
    personality: 'Tropical, Sophisticated, Relaxed'
  },
  
  // Indian Cities - Cultural Sophistication
  'Trivandrum': {
    gradient: 'bg-gradient-to-br from-green-900 via-green-800 to-green-700',
    description: 'Kerala sophistication with tropical elegance',
    personality: 'Tropical, Sophisticated, Peaceful'
  },
  'Bangalore': {
    gradient: 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700',
    description: 'Garden city sophistication with innovation elegance',
    personality: 'Modern, Sophisticated, Innovative'
  },
  'Goa': {
    gradient: 'bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700',
    description: 'Beach sophistication with Portuguese elegance',
    personality: 'Coastal, Sophisticated, Relaxed'
  },
  
  // Middle Eastern Cities - Ancient Elegance
  'Istanbul': {
    gradient: 'bg-gradient-to-br from-red-900 via-red-800 to-red-700',
    description: 'Ottoman sophistication with Bosphorus elegance',
    personality: 'Historic, Sophisticated, Cross-cultural'
  },
  'Cairo': {
    gradient: 'bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700',
    description: 'Desert sophistication with pyramid elegance',
    personality: 'Ancient, Sophisticated, Desert'
  },
  
  // African Cities - Natural Sophistication
  'Cape Town': {
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    description: 'Table Mountain sophistication with Atlantic elegance',
    personality: 'Scenic, Sophisticated, Coastal'
  },
  'Marrakech': {
    gradient: 'bg-gradient-to-br from-red-900 via-red-800 to-red-700',
    description: 'Medina sophistication with Sahara elegance',
    personality: 'Exotic, Sophisticated, Historic'
  },
  
  // South American Cities - Cultural Sophistication
  'Rio de Janeiro': {
    gradient: 'bg-gradient-to-br from-green-900 via-green-800 to-green-700',
    description: 'Brazilian sophistication with Copacabana elegance',
    personality: 'Vibrant, Sophisticated, Coastal'
  },
  'Buenos Aires': {
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    description: 'Tango sophistication with European elegance',
    personality: 'Passionate, Sophisticated, Cultural'
  },
  
  // Australian Cities - Modern Sophistication
  'Sydney': {
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    description: 'Harbor sophistication with Opera House elegance',
    personality: 'Coastal, Modern, Sophisticated'
  },
  'Melbourne': {
    gradient: 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700',
    description: 'Cultural sophistication with laneway elegance',
    personality: 'Cultural, Sophisticated, Artistic'
  }
};

// Fallback gradients for different regions - Sophisticated and Professional
export const regionalGradients: Record<string, CityGradient> = {
  'Europe': {
    gradient: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700',
    description: 'Classic European sophistication and refinement',
    personality: 'Historic, Refined, Cultural'
  },
  'Asia': {
    gradient: 'bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700',
    description: 'Asian cultural depth and sophistication',
    personality: 'Cultural, Refined, Dynamic'
  },
  'North America': {
    gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
    description: 'Modern North American sophistication',
    personality: 'Bold, Modern, Sophisticated'
  },
  'South America': {
    gradient: 'bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700',
    description: 'South American warmth with sophisticated elegance',
    personality: 'Warm, Sophisticated, Cultural'
  },
  'Africa': {
    gradient: 'bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700',
    description: 'African heritage with sophisticated earth tones',
    personality: 'Warm, Sophisticated, Majestic'
  },
  'Australia': {
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
    description: 'Australian sophistication with coastal elegance',
    personality: 'Natural, Sophisticated, Coastal'
  },
  'Middle East': {
    gradient: 'bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700',
    description: 'Middle Eastern luxury and sophisticated heritage',
    personality: 'Luxurious, Historic, Sophisticated'
  }
};

// Default gradient for unknown cities - Professional and Elegant
export const defaultGradient: CityGradient = {
  gradient: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700',
  description: 'Universal sophisticated travel gradient',
  personality: 'Sophisticated, Refined, Welcoming'
};

/**
 * Get gradient for a specific city
 * @param cityName - Name of the city
 * @param country - Country name (optional, for fallback)
 * @returns CityGradient object
 */
export function getCityGradient(cityName: string, country?: string): CityGradient {
  // First, try exact city match
  const exactMatch = cityGradients[cityName];
  if (exactMatch) {
    return exactMatch;
  }
  
  // Try variations of the city name
  const variations = [
    cityName.toLowerCase(),
    cityName.replace(/\s+/g, ''),
    cityName.split(' ')[0], // First word only
    cityName.split(',')[0].trim() // Remove country part if present
  ];
  
  for (const variation of variations) {
    const match = Object.keys(cityGradients).find(key => 
      key.toLowerCase() === variation.toLowerCase()
    );
    if (match) {
      return cityGradients[match];
    }
  }
  
  // Try regional fallback based on country
  if (country) {
    const countryLower = country.toLowerCase();
    
    // European countries
    if (['uk', 'england', 'france', 'germany', 'italy', 'spain', 'netherlands', 'belgium', 'switzerland', 'austria', 'czech republic', 'sweden', 'norway', 'denmark', 'finland', 'poland', 'greece', 'portugal'].includes(countryLower)) {
      return regionalGradients['Europe'];
    }
    
    // Asian countries
    if (['japan', 'china', 'south korea', 'thailand', 'vietnam', 'singapore', 'malaysia', 'indonesia', 'philippines', 'india', 'nepal', 'sri lanka', 'bangladesh'].includes(countryLower)) {
      return regionalGradients['Asia'];
    }
    
    // North American countries
    if (['usa', 'united states', 'canada', 'mexico'].includes(countryLower)) {
      return regionalGradients['North America'];
    }
    
    // South American countries
    if (['brazil', 'argentina', 'chile', 'peru', 'colombia', 'venezuela', 'uruguay', 'bolivia', 'ecuador', 'paraguay'].includes(countryLower)) {
      return regionalGradients['South America'];
    }
    
    // African countries
    if (['south africa', 'morocco', 'egypt', 'tunisia', 'kenya', 'tanzania', 'ethiopia', 'ghana', 'nigeria', 'zimbabwe'].includes(countryLower)) {
      return regionalGradients['Africa'];
    }
    
    // Australian/Oceania countries
    if (['australia', 'new zealand', 'fiji', 'papua new guinea'].includes(countryLower)) {
      return regionalGradients['Australia'];
    }
    
    // Middle Eastern countries
    if (['uae', 'united arab emirates', 'saudi arabia', 'qatar', 'kuwait', 'bahrain', 'oman', 'israel', 'jordan', 'lebanon', 'turkey'].includes(countryLower)) {
      return regionalGradients['Middle East'];
    }
  }
  
  // Return default gradient if no match found
  return defaultGradient;
}

/**
 * Get gradient class string for a city
 * @param cityName - Name of the city
 * @param country - Country name (optional)
 * @returns Tailwind CSS gradient class string
 */
export function getCityGradientClass(cityName: string, country?: string): string {
  return getCityGradient(cityName, country).gradient;
}