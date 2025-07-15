/**
 * Comprehensive City Name Mapping System
 * Ensures perfect compliance between TSX file names and HTML file names
 * Prevents future compliance issues by standardizing city name conversions
 */

export interface CityNameMapping {
  tsxName: string;    // File name in TSX format (e.g., "SanFrancisco")
  htmlName: string;   // File name in HTML format (e.g., "san-francisco")
  displayName: string; // Display name for UI (e.g., "San Francisco")
}

/**
 * Master mapping of all city name formats
 * Add new cities here to ensure perfect compliance
 */
export const CITY_NAME_MAPPINGS: Record<string, CityNameMapping> = {
  'san-francisco': {
    tsxName: 'SanFrancisco',
    htmlName: 'san-francisco',
    displayName: 'San Francisco'
  },
  'são-paulo': {
    tsxName: 'SãoPaulo',
    htmlName: 'são-paulo',
    displayName: 'São Paulo'
  },
  'new-york': {
    tsxName: 'NewYork',
    htmlName: 'new-york',
    displayName: 'New York'
  },
  'los-angeles': {
    tsxName: 'LosAngeles',
    htmlName: 'los-angeles',
    displayName: 'Los Angeles'
  },
  'las-vegas': {
    tsxName: 'LasVegas',
    htmlName: 'las-vegas',
    displayName: 'Las Vegas'
  },
  'san-diego': {
    tsxName: 'SanDiego',
    htmlName: 'san-diego',
    displayName: 'San Diego'
  }
};

/**
 * Convert city name to TSX file format
 */
export function cityNameToTsxFormat(cityName: string): string {
  // Remove spaces and special characters, capitalize first letter of each word
  const mapping = CITY_NAME_MAPPINGS[cityName.toLowerCase()];
  if (mapping) {
    return mapping.tsxName;
  }
  
  // Default conversion for cities not in mapping
  return cityName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

/**
 * Convert city name to HTML file format
 */
export function cityNameToHtmlFormat(cityName: string): string {
  const mapping = CITY_NAME_MAPPINGS[cityName.toLowerCase()];
  if (mapping) {
    return mapping.htmlName;
  }
  
  // Default conversion for cities not in mapping
  return cityName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
}

/**
 * Convert TSX format to HTML format
 */
export function tsxToHtmlFormat(tsxName: string): string {
  // Find mapping by TSX name
  const mapping = Object.values(CITY_NAME_MAPPINGS).find(m => m.tsxName === tsxName);
  if (mapping) {
    return mapping.htmlName;
  }
  
  // Default conversion
  return tsxName
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

/**
 * Convert HTML format to TSX format
 */
export function htmlToTsxFormat(htmlName: string): string {
  const mapping = CITY_NAME_MAPPINGS[htmlName];
  if (mapping) {
    return mapping.tsxName;
  }
  
  // Default conversion
  return htmlName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Get all possible variations of a city name
 */
export function getCityNameVariations(cityName: string): {
  tsx: string;
  html: string;
  display: string;
  lowercase: string;
} {
  const mapping = CITY_NAME_MAPPINGS[cityName.toLowerCase()];
  
  if (mapping) {
    return {
      tsx: mapping.tsxName,
      html: mapping.htmlName,
      display: mapping.displayName,
      lowercase: mapping.tsxName.toLowerCase()
    };
  }
  
  return {
    tsx: cityNameToTsxFormat(cityName),
    html: cityNameToHtmlFormat(cityName),
    display: cityName,
    lowercase: cityName.toLowerCase()
  };
}

/**
 * Add a new city to the mapping system
 */
export function addCityMapping(cityName: string, country: string): CityNameMapping {
  const htmlName = cityNameToHtmlFormat(cityName);
  const tsxName = cityNameToTsxFormat(cityName);
  
  const mapping: CityNameMapping = {
    tsxName,
    htmlName,
    displayName: cityName
  };
  
  CITY_NAME_MAPPINGS[htmlName] = mapping;
  
  return mapping;
}

/**
 * Validate city name consistency
 */
export function validateCityNameConsistency(tsxName: string, htmlName: string): boolean {
  const expectedHtmlName = tsxToHtmlFormat(tsxName);
  const expectedTsxName = htmlToTsxFormat(htmlName);
  
  return expectedHtmlName === htmlName && expectedTsxName === tsxName;
}