import React, { lazy, Suspense } from 'react';
import { Route } from 'wouter';

// Invisible loading fallback - no loading screens
const CityLoadingFallback = () => null;

// Helper function to transform named exports to default exports
const createCityImport = (cityName: string, importPath: string) => 
  () => import(/* @vite-ignore */ importPath).then(module => ({ default: module[cityName] }));

// City mapping for dynamic imports
const cityMap = {
  // Empty - ready for fresh city additions

  'porto': createCityImport('Porto', '../pages/cities/Porto'),

  'milan': createCityImport('Milan', '../pages/cities/Milan'),

  'zurich': createCityImport('Zurich', '../pages/cities/Zurich'),

  'austin': createCityImport('Austin', '../pages/cities/Austin'),

  'miami': createCityImport('Miami', '../pages/cities/Miami'),

  'venice': createCityImport('Venice', '../pages/cities/Venice'),

  'berlin': createCityImport('Berlin', '../pages/cities/Berlin'),

  'new-york': createCityImport('NewYork', '../pages/cities/NewYork'),

  'sydney': createCityImport('Sydney', '../pages/cities/Sydney'),

  'los-angeles': createCityImport('LosAngeles', '../pages/cities/LosAngeles'),

  'boston': createCityImport('Boston', '../pages/cities/Boston'),

  'male': createCityImport('Male', '../pages/cities/Male'),
};

interface DynamicCityRouteProps {
  path: string;
  cityKey: string;
}

export const DynamicCityRoute: React.FC<DynamicCityRouteProps> = ({ path, cityKey }) => {
  // Create lazy component with proper error handling
  const LazyComponent = lazy(async () => {
    try {
      const module = await cityMap[cityKey as keyof typeof cityMap]();
      return module;
    } catch (error) {
      console.error(`Failed to load city component for ${cityKey}:`, error);
      // Return a fallback component
      return {
        default: () => (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">City page not found</h1>
              <p className="text-gray-600">The page for {cityKey} could not be loaded.</p>
            </div>
          </div>
        )
      };
    }
  });
  
  return (
    <Route 
      path={path} 
      component={() => (
        <Suspense fallback={<CityLoadingFallback />}>
          <LazyComponent />
        </Suspense>
      )} 
    />
  );
};

// Generate all city routes dynamically with SEO-friendly URLs
export const CityRoutes: React.FC = () => {
  return (
    <>
      {Object.keys(cityMap).map((cityKey) => (
        <DynamicCityRoute
          key={cityKey}
          path={`/best-things-to-do-in-${cityKey}`}
          cityKey={cityKey}
        />
      ))}
    </>
  );
};