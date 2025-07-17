// Centralized city registry - single source of truth for all city data
// This prevents orphaned references and ensures consistency across the application

export interface CityConfig {
  name: string;           // Display name (e.g., "Berlin")
  country: string;        // Country name (e.g., "Germany")
  slug: string;          // URL slug (e.g., "berlin")
  active: boolean;       // Whether the city is active/available
  componentPath: string; // Path to the TSX component
  hasHtmlFile: boolean;  // Whether HTML file exists in dist/
}

// Registry of all available cities
export const CITY_REGISTRY: Record<string, CityConfig> = {
  berlin: {
    name: 'Berlin',
    country: 'Germany',
    slug: 'berlin',
    active: true,
    componentPath: '../pages/cities/Berlin',
    hasHtmlFile: true,
  },
  // Future cities will be added here by the admin system
};

// Helper functions for city management
export const getActiveCity = (slug: string): CityConfig | null => {
  const city = CITY_REGISTRY[slug];
  return city && city.active ? city : null;
};

export const getAllActiveCities = (): CityConfig[] => {
  return Object.values(CITY_REGISTRY).filter(city => city.active);
};

export const getCityBySlug = (slug: string): CityConfig | null => {
  return CITY_REGISTRY[slug] || null;
};

export const addCityToRegistry = (slug: string, config: CityConfig): void => {
  CITY_REGISTRY[slug] = config;
};

export const removeCityFromRegistry = (slug: string): void => {
  delete CITY_REGISTRY[slug];
};

// URL utilities for consistent URL generation
export const normalizeUrlSlug = (city: string): string => city.toLowerCase();
export const generateCityUrl = (slug: string): string => `/things-to-do-in-${normalizeUrlSlug(slug)}`;
export const generateCityTitle = (name: string, country: string): string => `Things to Do in ${name}, ${country} (2025 Guide)`;

// Validation utilities
export const validateCityExists = (slug: string): boolean => {
  return slug in CITY_REGISTRY && CITY_REGISTRY[slug].active;
};

export const getCityDisplayName = (slug: string): string => {
  const city = CITY_REGISTRY[slug];
  return city ? `${city.name}, ${city.country}` : slug;
};