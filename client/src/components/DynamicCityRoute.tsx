import React from 'react';
import { Route } from 'wouter';

// Simplified city map - no complex registry system to avoid hydration issues
const cityMap: Record<string, React.ComponentType> = {
  // Static imports for better reliability
  // Cities will be added here as they're created
};

interface DynamicCityRouteProps {
  path: string;
  cityKey: string;
}

// Simple fallback component to avoid hydration issues
function ComingSoonPage() {
  return React.createElement('div', {
    className: 'min-h-screen flex items-center justify-center bg-white'
  }, React.createElement('div', {
    className: 'text-center max-w-md mx-auto px-4'
  }, [
    React.createElement('h1', {
      key: 'title',
      className: 'text-3xl font-bold text-gray-900 mb-4'
    }, 'City Guide Coming Soon'),
    React.createElement('p', {
      key: 'desc',
      className: 'text-gray-600 mb-6'
    }, 'We\'re working on creating amazing travel guides for this destination. Check back soon or explore our other featured cities!'),
    React.createElement('a', {
      key: 'link',
      href: '/destinations',
      className: 'inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors'
    }, 'Browse All Destinations')
  ]));
}

export const DynamicCityRoute: React.FC<DynamicCityRouteProps> = ({ path, cityKey }) => {
  const CityComponent = cityMap[cityKey] || ComingSoonPage;
  
  return React.createElement(Route, { path, component: CityComponent });
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