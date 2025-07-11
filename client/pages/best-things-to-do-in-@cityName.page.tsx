import React, { Suspense } from 'react';
import { CityPage } from '@/components/CityPage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PageProps } from './types';

export { Page };
export { onBeforeRender };

// Dynamic import function to load city components
const loadCityComponent = async (cityName: string) => {
  const cityComponents = {
    'porto': () => import('@/pages/cities/Porto'),
    'bologna': () => import('@/pages/cities/Bologna'),
    // Add more cities as they're created
  };
  
  const loader = cityComponents[cityName.toLowerCase()];
  if (!loader) {
    throw new Error(`City component not found for: ${cityName}`);
  }
  
  const module = await loader();
  return module[cityName.charAt(0).toUpperCase() + cityName.slice(1)];
};

function Page({ cityName, cityData }: PageProps & { cityName: string; cityData: any }) {
  const [CityComponent, setCityComponent] = React.useState<React.ComponentType | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  
  React.useEffect(() => {
    if (cityData && cityData.Component) {
      setCityComponent(() => cityData.Component);
    } else {
      loadCityComponent(cityName)
        .then(component => setCityComponent(() => component))
        .catch(err => setError(err.message));
    }
  }, [cityName, cityData]);

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl mb-4">City Not Found</h1>
          <p className="text-gray-600">The city "{cityName}" could not be found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!CityComponent) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl mb-4">Loading...</h1>
          <p className="text-gray-600">Loading city information...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Suspense fallback={<div>Loading city...</div>}>
        <CityComponent />
      </Suspense>
      <Footer />
    </div>
  );
}

// This function runs only on the server-side, before the page is rendered
async function onBeforeRender(pageContext: any) {
  const { routeParams } = pageContext;
  const cityName = routeParams.cityName;
  
  // Server-side city data loading
  let cityData = null;
  let documentProps = {
    title: `Best Things to Do in ${cityName.charAt(0).toUpperCase() + cityName.slice(1)} - TravelWanders`,
    description: `Discover the best attractions, activities, and experiences in ${cityName.charAt(0).toUpperCase() + cityName.slice(1)}. Your comprehensive travel guide with insider tips and must-visit destinations.`
  };

  try {
    // Try to load the city component server-side
    const CityComponent = await loadCityComponent(cityName);
    cityData = { Component: CityComponent };
    
    // Extract more specific SEO data if available
    // This would be enhanced with actual city data
    documentProps.title = `15 Best Things to Do in ${cityName.charAt(0).toUpperCase() + cityName.slice(1)} (2025 Guide) - TravelWanders`;
    documentProps.description = `Planning a trip to ${cityName.charAt(0).toUpperCase() + cityName.slice(1)}? Discover the best attractions, local cuisine, and hidden gems with our comprehensive 2025 guide.`;
  } catch (error) {
    console.log(`City component not found for ${cityName}, will load client-side`);
  }

  return {
    pageContext: {
      pageProps: {
        cityName,
        cityData
      },
      documentProps
    }
  };
}