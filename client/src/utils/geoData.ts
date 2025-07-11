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
  // Major Cities with Coordinates
  'tokyo': { latitude: 35.6762, longitude: 139.6503, country: 'Japan', timezone: 'Asia/Tokyo', region: 'Asia' },
  'paris': { latitude: 48.8566, longitude: 2.3522, country: 'France', timezone: 'Europe/Paris', region: 'Europe' },
  'london': { latitude: 51.5074, longitude: -0.1278, country: 'United Kingdom', timezone: 'Europe/London', region: 'Europe' },
  'newyork': { latitude: 40.7128, longitude: -74.0060, country: 'United States', timezone: 'America/New_York', region: 'North America' },
  'dubai': { latitude: 25.2048, longitude: 55.2708, country: 'United Arab Emirates', timezone: 'Asia/Dubai', region: 'Asia' },
  'singapore': { latitude: 1.3521, longitude: 103.8198, country: 'Singapore', timezone: 'Asia/Singapore', region: 'Asia' },
  'sydney': { latitude: -33.8688, longitude: 151.2093, country: 'Australia', timezone: 'Australia/Sydney', region: 'Australia' },
  'melbourne': { latitude: -37.8136, longitude: 144.9631, country: 'Australia', timezone: 'Australia/Melbourne', region: 'Australia' },
  'amsterdam': { latitude: 52.3676, longitude: 4.9041, country: 'Netherlands', timezone: 'Europe/Amsterdam', region: 'Europe' },
  'berlin': { latitude: 52.5200, longitude: 13.4050, country: 'Germany', timezone: 'Europe/Berlin', region: 'Europe' },
  'rome': { latitude: 41.9028, longitude: 12.4964, country: 'Italy', timezone: 'Europe/Rome', region: 'Europe' },
  'barcelona': { latitude: 41.3851, longitude: 2.1734, country: 'Spain', timezone: 'Europe/Madrid', region: 'Europe' },
  'istanbul': { latitude: 41.0082, longitude: 28.9784, country: 'Turkey', timezone: 'Europe/Istanbul', region: 'Europe' },
  'moscow': { latitude: 55.7558, longitude: 37.6173, country: 'Russia', timezone: 'Europe/Moscow', region: 'Europe' },
  'beijing': { latitude: 39.9042, longitude: 116.4074, country: 'China', timezone: 'Asia/Shanghai', region: 'Asia' },
  'shanghai': { latitude: 31.2304, longitude: 121.4737, country: 'China', timezone: 'Asia/Shanghai', region: 'Asia' },
  'hongkong': { latitude: 22.3193, longitude: 114.1694, country: 'Hong Kong', timezone: 'Asia/Hong_Kong', region: 'Asia' },
  'bangkok': { latitude: 13.7563, longitude: 100.5018, country: 'Thailand', timezone: 'Asia/Bangkok', region: 'Asia' },
  'kualalumpur': { latitude: 3.1390, longitude: 101.6869, country: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', region: 'Asia' },
  'mumbai': { latitude: 19.0760, longitude: 72.8777, country: 'India', timezone: 'Asia/Kolkata', region: 'Asia' },
  'delhi': { latitude: 28.7041, longitude: 77.1025, country: 'India', timezone: 'Asia/Kolkata', region: 'Asia' },
  'seoul': { latitude: 37.5665, longitude: 126.9780, country: 'South Korea', timezone: 'Asia/Seoul', region: 'Asia' },
  'osaka': { latitude: 34.6937, longitude: 135.5023, country: 'Japan', timezone: 'Asia/Tokyo', region: 'Asia' },
  'cairo': { latitude: 30.0444, longitude: 31.2357, country: 'Egypt', timezone: 'Africa/Cairo', region: 'Africa' },
  'capetown': { latitude: -33.9249, longitude: 18.4241, country: 'South Africa', timezone: 'Africa/Johannesburg', region: 'Africa' },
  'johannesburg': { latitude: -26.2041, longitude: 28.0473, country: 'South Africa', timezone: 'Africa/Johannesburg', region: 'Africa' },
  'nairobi': { latitude: -1.2921, longitude: 36.8219, country: 'Kenya', timezone: 'Africa/Nairobi', region: 'Africa' },
  'losangeles': { latitude: 34.0522, longitude: -118.2437, country: 'United States', timezone: 'America/Los_Angeles', region: 'North America' },
  'chicago': { latitude: 41.8781, longitude: -87.6298, country: 'United States', timezone: 'America/Chicago', region: 'North America' },
  'toronto': { latitude: 43.6532, longitude: -79.3832, country: 'Canada', timezone: 'America/Toronto', region: 'North America' },
  'vancouver': { latitude: 49.2827, longitude: -123.1207, country: 'Canada', timezone: 'America/Vancouver', region: 'North America' },
  'montreal': { latitude: 45.5017, longitude: -73.5673, country: 'Canada', timezone: 'America/Montreal', region: 'North America' },
  'mexicocity': { latitude: 19.4326, longitude: -99.1332, country: 'Mexico', timezone: 'America/Mexico_City', region: 'North America' },
  'saopaulo': { latitude: -23.5505, longitude: -46.6333, country: 'Brazil', timezone: 'America/Sao_Paulo', region: 'South America' },
  'riodejaneiro': { latitude: -22.9068, longitude: -43.1729, country: 'Brazil', timezone: 'America/Sao_Paulo', region: 'South America' },
  'buenosaires': { latitude: -34.6118, longitude: -58.3960, country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', region: 'South America' },
  'lima': { latitude: -12.0464, longitude: -77.0428, country: 'Peru', timezone: 'America/Lima', region: 'South America' },
  'bogota': { latitude: 4.7110, longitude: -74.0721, country: 'Colombia', timezone: 'America/Bogota', region: 'South America' },
  'santiago': { latitude: -33.4489, longitude: -70.6693, country: 'Chile', timezone: 'America/Santiago', region: 'South America' },
  'vienna': { latitude: 48.2082, longitude: 16.3738, country: 'Austria', timezone: 'Europe/Vienna', region: 'Europe' },
  'zurich': { latitude: 47.3769, longitude: 8.5417, country: 'Switzerland', timezone: 'Europe/Zurich', region: 'Europe' },
  'stockholm': { latitude: 59.3293, longitude: 18.0686, country: 'Sweden', timezone: 'Europe/Stockholm', region: 'Europe' },
  'copenhagen': { latitude: 55.6761, longitude: 12.5683, country: 'Denmark', timezone: 'Europe/Copenhagen', region: 'Europe' },
  'oslo': { latitude: 59.9139, longitude: 10.7522, country: 'Norway', timezone: 'Europe/Oslo', region: 'Europe' },
  'helsinki': { latitude: 60.1699, longitude: 24.9384, country: 'Finland', timezone: 'Europe/Helsinki', region: 'Europe' },
  'reykjavik': { latitude: 64.1466, longitude: -21.9426, country: 'Iceland', timezone: 'Atlantic/Reykjavik', region: 'Europe' },
  'dublin': { latitude: 53.3498, longitude: -6.2603, country: 'Ireland', timezone: 'Europe/Dublin', region: 'Europe' },
  'edinburgh': { latitude: 55.9533, longitude: -3.1883, country: 'United Kingdom', timezone: 'Europe/London', region: 'Europe' },
  'lisbon': { latitude: 38.7223, longitude: -9.1393, country: 'Portugal', timezone: 'Europe/Lisbon', region: 'Europe' },
  'athens': { latitude: 37.9838, longitude: 23.7275, country: 'Greece', timezone: 'Europe/Athens', region: 'Europe' },
  'prague': { latitude: 50.0755, longitude: 14.4378, country: 'Czech Republic', timezone: 'Europe/Prague', region: 'Europe' },
  'budapest': { latitude: 47.4979, longitude: 19.0402, country: 'Hungary', timezone: 'Europe/Budapest', region: 'Europe' },
  'warsaw': { latitude: 52.2297, longitude: 21.0122, country: 'Poland', timezone: 'Europe/Warsaw', region: 'Europe' },
  'krakow': { latitude: 50.0647, longitude: 19.9450, country: 'Poland', timezone: 'Europe/Warsaw', region: 'Europe' },
  'bucharest': { latitude: 44.4268, longitude: 26.1025, country: 'Romania', timezone: 'Europe/Bucharest', region: 'Europe' },
  'sofia': { latitude: 42.6977, longitude: 23.3219, country: 'Bulgaria', timezone: 'Europe/Sofia', region: 'Europe' },
  'belgrade': { latitude: 44.7866, longitude: 20.4489, country: 'Serbia', timezone: 'Europe/Belgrade', region: 'Europe' },
  'zagreb': { latitude: 45.8150, longitude: 15.9819, country: 'Croatia', timezone: 'Europe/Zagreb', region: 'Europe' },
  'ljubljana': { latitude: 46.0569, longitude: 14.5058, country: 'Slovenia', timezone: 'Europe/Ljubljana', region: 'Europe' },
  'bratislava': { latitude: 48.1486, longitude: 17.1077, country: 'Slovakia', timezone: 'Europe/Bratislava', region: 'Europe' },
  'vilnius': { latitude: 54.6872, longitude: 25.2797, country: 'Lithuania', timezone: 'Europe/Vilnius', region: 'Europe' },
  'riga': { latitude: 56.9496, longitude: 24.1052, country: 'Latvia', timezone: 'Europe/Riga', region: 'Europe' },
  'tallinn': { latitude: 59.4370, longitude: 24.7536, country: 'Estonia', timezone: 'Europe/Tallinn', region: 'Europe' }
};

/**
 * Get coordinates for a city by name
 */
export function getCityCoordinates(cityName: string): CityCoordinates | null {
  const normalizedName = cityName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z]/g, '');
  return cityCoordinates[normalizedName] || null;
}

/**
 * Generate enhanced Place schema with coordinates
 */
export function generatePlaceSchema(cityName: string, country: string, description: string): object {
  const coordinates = getCityCoordinates(cityName);
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": cityName,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": country,
      "addressLocality": cityName
    },
    "description": description,
    "touristType": "Travelers seeking best things to do",
    "url": `https://travelwanders.com/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}`
  };
  
  if (coordinates) {
    return {
      ...baseSchema,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": coordinates.latitude,
        "longitude": coordinates.longitude
      },
      "containedInPlace": {
        "@type": "Country",
        "name": coordinates.country
      },
      "timeZone": coordinates.timezone || undefined
    };
  }
  
  return baseSchema;
}