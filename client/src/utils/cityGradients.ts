/**
 * City-specific gradient system
 * Beautiful gradients that match each city's personality and characteristics
 */

export interface CityGradient {
  gradient: string;
  description: string;
  personality: string;
}

// Main gradient mapping for cities
export const cityGradients: Record<string, CityGradient> = {
  // Major World Cities
  'Tokyo': {
    gradient: 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600',
    description: 'Vibrant neon-inspired gradient reflecting Tokyo\'s electric energy',
    personality: 'Electric, Modern, Vibrant'
  },
  'New York': {
    gradient: 'bg-gradient-to-br from-gray-800 via-blue-600 to-yellow-500',
    description: 'Urban sophistication with golden hour warmth',
    personality: 'Bold, Sophisticated, Dynamic'
  },
  'London': {
    gradient: 'bg-gradient-to-br from-slate-700 via-blue-500 to-green-400',
    description: 'Classic British tones with royal elegance',
    personality: 'Historic, Refined, Timeless'
  },
  'Paris': {
    gradient: 'bg-gradient-to-br from-rose-400 via-pink-300 to-amber-300',
    description: 'Romantic pastels inspired by Parisian charm',
    personality: 'Romantic, Elegant, Artistic'
  },
  'Rome': {
    gradient: 'bg-gradient-to-br from-orange-400 via-red-400 to-amber-600',
    description: 'Warm terracotta and sunset hues of ancient Rome',
    personality: 'Historic, Warm, Majestic'
  },
  'Barcelona': {
    gradient: 'bg-gradient-to-br from-blue-500 via-cyan-400 to-yellow-400',
    description: 'Mediterranean blues meeting Spanish sunshine',
    personality: 'Colorful, Artistic, Coastal'
  },
  'Amsterdam': {
    gradient: 'bg-gradient-to-br from-orange-500 via-red-400 to-pink-400',
    description: 'Dutch heritage colors with canal reflections',
    personality: 'Charming, Historic, Vibrant'
  },
  'Berlin': {
    gradient: 'bg-gradient-to-br from-gray-600 via-red-500 to-yellow-400',
    description: 'Modern edge with German flag inspiration',
    personality: 'Modern, Edgy, Cultural'
  },
  'Dubai': {
    gradient: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500',
    description: 'Desert gold and luxury amber tones',
    personality: 'Luxurious, Modern, Golden'
  },
  'Singapore': {
    gradient: 'bg-gradient-to-br from-green-400 via-teal-400 to-blue-500',
    description: 'Garden city greens with tropical blues',
    personality: 'Modern, Green, Tropical'
  },
  
  // US Cities
  'Chicago': {
    gradient: 'bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400',
    description: 'Deep blues reflecting Lake Michigan',
    personality: 'Bold, Industrial, Lakefront'
  },
  'Boston': {
    gradient: 'bg-gradient-to-br from-red-600 via-blue-600 to-gray-500',
    description: 'Historic American colors with New England charm',
    personality: 'Historic, Academic, Coastal'
  },
  'San Francisco': {
    gradient: 'bg-gradient-to-br from-orange-400 via-red-400 to-pink-400',
    description: 'Golden Gate Bridge inspiration with California warmth',
    personality: 'Innovative, Colorful, Coastal'
  },
  'Los Angeles': {
    gradient: 'bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-400',
    description: 'Hollywood glamour with sunset strip vibes',
    personality: 'Glamorous, Sunny, Creative'
  },
  'Las Vegas': {
    gradient: 'bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400',
    description: 'Neon lights and desert night energy',
    personality: 'Electric, Bold, Nightlife'
  },
  'Miami': {
    gradient: 'bg-gradient-to-br from-pink-400 via-cyan-400 to-blue-500',
    description: 'Art Deco pastels with ocean blues',
    personality: 'Tropical, Vibrant, Coastal'
  },
  'Seattle': {
    gradient: 'bg-gradient-to-br from-teal-600 via-green-500 to-blue-400',
    description: 'Emerald city greens with Pacific Northwest blues',
    personality: 'Natural, Modern, Rainy'
  },
  
  // Asian Cities
  'Bangkok': {
    gradient: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500',
    description: 'Temple gold with spicy market colors',
    personality: 'Vibrant, Spiritual, Energetic'
  },
  'Seoul': {
    gradient: 'bg-gradient-to-br from-purple-500 via-pink-400 to-blue-400',
    description: 'K-pop inspired with modern technology vibes',
    personality: 'Modern, Trendy, Technological'
  },
  'Mumbai': {
    gradient: 'bg-gradient-to-br from-orange-500 via-red-400 to-pink-400',
    description: 'Bollywood colors with monsoon warmth',
    personality: 'Vibrant, Cultural, Energetic'
  },
  'Hong Kong': {
    gradient: 'bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400',
    description: 'Skyline lights with harbor reflections',
    personality: 'Modern, Bustling, Cosmopolitan'
  },
  
  // European Cities
  'Vienna': {
    gradient: 'bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-300',
    description: 'Imperial elegance with classical music inspiration',
    personality: 'Elegant, Classical, Refined'
  },
  'Prague': {
    gradient: 'bg-gradient-to-br from-amber-400 via-orange-400 to-red-400',
    description: 'Golden city architecture with bohemian warmth',
    personality: 'Historic, Golden, Romantic'
  },
  'Stockholm': {
    gradient: 'bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400',
    description: 'Nordic blues with archipelago reflections',
    personality: 'Clean, Modern, Nordic'
  },
  'Copenhagen': {
    gradient: 'bg-gradient-to-br from-blue-400 via-teal-400 to-green-400',
    description: 'Scandinavian minimalism with coastal freshness',
    personality: 'Modern, Clean, Cozy'
  },
  
  // Tropical/Island Cities
  'Male': {
    gradient: 'bg-gradient-to-br from-cyan-400 via-blue-400 to-teal-500',
    description: 'Maldivian lagoon blues with tropical paradise vibes',
    personality: 'Tropical, Pristine, Peaceful'
  },
  'Dhaandhoo': {
    gradient: 'bg-gradient-to-br from-turquoise-400 via-cyan-400 to-blue-500',
    description: 'Crystal clear waters with island tranquility',
    personality: 'Serene, Tropical, Pristine'
  },
  'Honolulu': {
    gradient: 'bg-gradient-to-br from-pink-400 via-orange-400 to-blue-500',
    description: 'Hawaiian sunset with Pacific Ocean blues',
    personality: 'Tropical, Relaxed, Colorful'
  },
  
  // Indian Cities
  'Trivandrum': {
    gradient: 'bg-gradient-to-br from-green-500 via-teal-400 to-blue-400',
    description: 'Kerala backwaters with tropical greenery',
    personality: 'Tropical, Green, Peaceful'
  },
  'Bangalore': {
    gradient: 'bg-gradient-to-br from-green-400 via-blue-400 to-purple-400',
    description: 'Garden city with tech innovation vibes',
    personality: 'Modern, Green, Innovative'
  },
  'Goa': {
    gradient: 'bg-gradient-to-br from-orange-400 via-pink-400 to-blue-500',
    description: 'Beach sunset with Portuguese colonial charm',
    personality: 'Coastal, Colorful, Relaxed'
  },
  
  // Middle Eastern Cities
  'Istanbul': {
    gradient: 'bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400',
    description: 'Ottoman grandeur with Bosphorus sunset',
    personality: 'Historic, Majestic, Cross-cultural'
  },
  'Cairo': {
    gradient: 'bg-gradient-to-br from-yellow-500 via-orange-400 to-red-400',
    description: 'Desert sands with pyramid golden hour',
    personality: 'Ancient, Majestic, Desert'
  },
  
  // African Cities
  'Cape Town': {
    gradient: 'bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400',
    description: 'Table Mountain sunset with Atlantic ocean views',
    personality: 'Scenic, Dramatic, Coastal'
  },
  'Marrakech': {
    gradient: 'bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400',
    description: 'Medina reds with Sahara golden tones',
    personality: 'Exotic, Warm, Historic'
  },
  
  // South American Cities
  'Rio de Janeiro': {
    gradient: 'bg-gradient-to-br from-green-400 via-yellow-400 to-blue-500',
    description: 'Brazilian flag colors with Copacabana vibes',
    personality: 'Vibrant, Coastal, Festive'
  },
  'Buenos Aires': {
    gradient: 'bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400',
    description: 'Tango passion with European elegance',
    personality: 'Passionate, Elegant, Cultural'
  },
  
  // Australian Cities
  'Sydney': {
    gradient: 'bg-gradient-to-br from-blue-500 via-cyan-400 to-yellow-400',
    description: 'Harbor blues with Opera House sophistication',
    personality: 'Coastal, Modern, Iconic'
  },
  'Melbourne': {
    gradient: 'bg-gradient-to-br from-purple-500 via-pink-400 to-orange-400',
    description: 'Cultural diversity with laneway art inspiration',
    personality: 'Cultural, Artistic, Diverse'
  }
};

// Fallback gradients for different regions when specific city isn't found
export const regionalGradients: Record<string, CityGradient> = {
  'Europe': {
    gradient: 'bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400',
    description: 'Classic European sophistication',
    personality: 'Historic, Refined, Cultural'
  },
  'Asia': {
    gradient: 'bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400',
    description: 'Vibrant Asian energy and warmth',
    personality: 'Vibrant, Cultural, Dynamic'
  },
  'North America': {
    gradient: 'bg-gradient-to-br from-blue-600 via-purple-500 to-red-500',
    description: 'Modern American dynamism',
    personality: 'Bold, Modern, Diverse'
  },
  'South America': {
    gradient: 'bg-gradient-to-br from-green-500 via-yellow-400 to-orange-400',
    description: 'Tropical South American vibrancy',
    personality: 'Vibrant, Warm, Festive'
  },
  'Africa': {
    gradient: 'bg-gradient-to-br from-orange-500 via-red-400 to-yellow-400',
    description: 'African sunset and earth tones',
    personality: 'Warm, Earthy, Majestic'
  },
  'Australia': {
    gradient: 'bg-gradient-to-br from-blue-500 via-teal-400 to-orange-400',
    description: 'Outback and ocean combination',
    personality: 'Natural, Coastal, Relaxed'
  },
  'Middle East': {
    gradient: 'bg-gradient-to-br from-yellow-500 via-orange-400 to-red-500',
    description: 'Desert gold and luxury tones',
    personality: 'Luxurious, Historic, Desert'
  }
};

// Default gradient for unknown cities
export const defaultGradient: CityGradient = {
  gradient: 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
  description: 'Universal travel gradient with sophisticated colors',
  personality: 'Sophisticated, Welcoming, Diverse'
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