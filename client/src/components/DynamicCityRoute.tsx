import React, { lazy, Suspense } from 'react';
import { Route } from 'wouter';
import { CITY_REGISTRY, getActiveCity, getAllActiveCities, type CityConfig } from '../../../shared/cityRegistry';

// Invisible loading fallback - no loading screens
const CityLoadingFallback = () => null;

// Static city module mapping for Vite analysis - completely eliminates dynamic imports
const cityModuleMap: Record<string, () => Promise<{ [key: string]: React.ComponentType<any> }>> = {
  berlin: () => import('../pages/cities/Berlin.tsx'),
  // Future cities will be added here - static imports for Vite optimization
};

// Helper function to create city imports using registry
const createCityImport = (cityConfig: CityConfig) => {
  const importFn = cityModuleMap[cityConfig.slug];
  if (!importFn) {
    console.warn(`No module mapping found for city: ${cityConfig.slug}`);
    return null;
  }
  
  return lazy(() => 
    importFn().then((module) => ({ 
      default: module[cityConfig.name] 
    }))
  );
};

// Generate city map from registry - ensures consistency
const generateCityMap = (): Record<string, React.LazyExoticComponent<React.ComponentType<any>> | null> => {
  const cityMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>> | null> = {};
  
  getAllActiveCities().forEach(cityConfig => {
    cityMap[cityConfig.slug] = createCityImport(cityConfig);
  });
  
  return cityMap;
};

// Dynamic city map based on registry
const cityMap = generateCityMap();

interface DynamicCityRouteProps {
  path: string;
  cityKey: string;
}

export const DynamicCityRoute: React.FC<DynamicCityRouteProps> = ({ path, cityKey }) => {
  // Validate city exists in registry first
  const cityConfig = getActiveCity(cityKey);
  if (!cityConfig) {
    return (
      <Route 
        path={path} 
        component={() => (
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center max-w-md mx-auto px-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">City Guide Coming Soon</h1>
              <p className="text-gray-600 mb-6">
                We're working on creating amazing travel guides for this destination. 
                Check back soon or explore our other featured cities!
              </p>
              <a 
                href="/destinations" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Browse All Destinations
              </a>
            </div>
          </div>
        )} 
      />
    );
  }
  
  // Get the component from the city map
  const CityComponent = cityMap[cityKey];
  
  if (!CityComponent) {
    console.error(`City component not found for ${cityKey}. Check cityModuleMap.`);
    return (
      <Route 
        path={path} 
        component={() => (
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center max-w-md mx-auto px-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading Error</h1>
              <p className="text-gray-600 mb-6">
                There was an issue loading the city guide. Please try refreshing the page.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )} 
      />
    );
  }
  
  return (
    <Route 
      path={path} 
      component={() => (
        <Suspense fallback={<CityLoadingFallback />}>
          <CityComponent />
        </Suspense>
      )} 
    />
  );
};

// Generate all city routes dynamically with SEO-friendly URLs
export const CityRoutes: React.FC = () => {
  // Use registry to ensure we only create routes for active cities
  const activeCities = getAllActiveCities();
  
  return (
    <>
      {activeCities.map((cityConfig) => (
        <DynamicCityRoute
          key={cityConfig.slug}
          path={`/things-to-do-in-${cityConfig.slug}`}
          cityKey={cityConfig.slug}
        />
      ))}
    </>
  );
};