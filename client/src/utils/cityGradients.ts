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
  // City gradients cleared - ready for fresh production content via admin panel
};

// Default gradients for new cities
export const defaultGradients: CityGradient[] = [
  {
    gradient: 'bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600',
    description: 'Ocean-inspired serenity',
    personality: 'Calm, Coastal, Refreshing'
  },
  {
    gradient: 'bg-gradient-to-br from-green-800 via-green-700 to-green-600', 
    description: 'Natural harmony and growth',
    personality: 'Fresh, Natural, Vibrant'
  },
  {
    gradient: 'bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600',
    description: 'Regal sophistication',
    personality: 'Elegant, Mysterious, Refined'
  },
  {
    gradient: 'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600',
    description: 'Modern metropolitan elegance',
    personality: 'Urban, Contemporary, Sophisticated'
  },
  {
    gradient: 'bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-600',
    description: 'Deep wisdom and tranquility',
    personality: 'Peaceful, Thoughtful, Serene'
  }
];

/**
 * Get gradient for a city, or return a default if not found
 */
export function getCityGradient(cityName: string): CityGradient {
  const cityGradient = cityGradients[cityName];
  if (cityGradient) {
    return cityGradient;
  }
  
  // Return a default gradient based on city name hash
  const hash = cityName.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const index = hash % defaultGradients.length;
  return defaultGradients[index];
}

/**
 * Add a new city gradient
 */
export function addCityGradient(cityName: string, gradient: CityGradient): void {
  cityGradients[cityName] = gradient;
}

/**
 * Get all available gradients
 */
export function getAllGradients(): Record<string, CityGradient> {
  return cityGradients;
}

/**
 * Get available default gradients for selection
 */
export function getDefaultGradients(): CityGradient[] {
  return defaultGradients;
}