import React, { lazy, Suspense } from 'react';
import { Route } from 'wouter';

// Invisible loading fallback - no loading screens
const CityLoadingFallback = () => null;

// Helper function to create city imports
const createCityImport = (cityName: string, modulePath: string) => {
  return lazy(() => import(modulePath + '.tsx').then(module => ({ default: module[cityName] })));
};

// Direct imports for city components
const London = lazy(() => import('../pages/cities/London.tsx').then(module => ({ default: module.London })));
const Rome = createCityImport('Rome', '../pages/cities/Rome');

// City mapping for dynamic imports
const cityMap = {
  // Empty - ready for fresh city additions via admin panel

  'london': London,
  'rome': Rome,
  'edinburgh': createCityImport('Edinburgh', '../pages/cities/Edinburgh'),
};

interface DynamicCityRouteProps {
  path: string;
  cityKey: string;
}

export const DynamicCityRoute: React.FC<DynamicCityRouteProps> = ({ path, cityKey }) => {
  // Get the component directly from the city map
  const CityComponent = cityMap[cityKey as keyof typeof cityMap];
  
  if (!CityComponent) {
    return (
      <Route 
        path={path} 
        component={() => (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">City page not found</h1>
              <p className="text-gray-600">The page for {cityKey} could not be loaded.</p>
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