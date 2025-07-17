import React, { lazy, Suspense } from 'react';
import { Route } from 'wouter';

// Invisible loading fallback - no loading screens
const CityLoadingFallback = () => null;

// Simplified city map - no complex registry system to avoid hydration issues
const cityMap: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  // Static imports for better reliability
  // Cities will be added here as they're created
};

interface DynamicCityRouteProps {
  path: string;
  cityKey: string;
}

export const DynamicCityRoute: React.FC<DynamicCityRouteProps> = ({ path, cityKey }) => {
  // Get the component from the city map
  const CityComponent = cityMap[cityKey];
  
  if (!CityComponent) {
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
  // Static list of cities to avoid hydration issues
  const cities = Object.keys(cityMap);
  
  return (
    <>
      {cities.map((cityKey) => (
        <DynamicCityRoute
          key={cityKey}
          path={`/things-to-do-in-${cityKey}`}
          cityKey={cityKey}
        />
      ))}
    </>
  );
};