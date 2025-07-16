/**
 * Geographic coordinates for major cities
 * Used for enhanced local SEO and structured data
 */

export interface CityCoordinates {
  latitude: number;
  longitude: number;
  country: string;
  timezone?: string;
  region?: string;
}

export const cityCoordinates: Record<string, CityCoordinates> = {
  // City coordinates cleared - ready for fresh production content via admin panel
};

/**
 * Get coordinates for a city by name (case-insensitive)
 */
export function getCityCoordinates(cityName: string): CityCoordinates | null {
  const normalizedName = cityName.toLowerCase().replace(/\s+/g, '');
  return cityCoordinates[normalizedName] || null;
}

/**
 * Check if city has coordinate data available
 */
export function hasCityCoordinates(cityName: string): boolean {
  return getCityCoordinates(cityName) !== null;
}

/**
 * Get timezone for a city
 */
export function getCityTimezone(cityName: string): string | null {
  const coords = getCityCoordinates(cityName);
  return coords?.timezone || null;
}

/**
 * Get region for a city
 */
export function getCityRegion(cityName: string): string | null {
  const coords = getCityCoordinates(cityName);
  return coords?.region || null;
}

/**
 * Format coordinates for schema.org structured data
 */
export function formatCoordinatesForSchema(cityName: string): string | null {
  const coords = getCityCoordinates(cityName);
  if (!coords) return null;
  
  return `${coords.latitude},${coords.longitude}`;
}