import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import React components directly for SSR
const loadComponent = async (componentPath: string, componentName: string) => {
  try {
    const module = await import(componentPath);
    return module[componentName];
  } catch (error) {
    console.error(`Failed to load component ${componentName}:`, error);
    return null;
  }
};

// Enhanced city data extraction for better SEO
const extractCityData = (cityName: string) => {
  // This would be enhanced with actual city file parsing
  const cityDataMap = {
    'porto': {
      title: '15 Best Things to Do in Porto, Portugal (2025 Guide)',
      description: 'Planning a trip to Portugal? Discover the best things to do in Porto with our comprehensive 2025 guide. From exploring historic landmarks to indulging in local cuisine, Porto offers diverse experiences.',
      attractions: ['Livraria Lello', 'Ribeira District', 'Dom Luís I Bridge', 'Clérigos Tower', 'Porto Cathedral'],
      highlights: ['Explore historic Ribeira district', 'Visit world-famous Livraria Lello bookstore', 'Port wine cellar tours', 'Admire azulejo tiles', 'Cross iconic Dom Luís I Bridge']
    },
    'bologna': {
      title: '15 Best Things to Do in Bologna, Italy (2025 Guide)', 
      description: 'Looking for the best things to do in Bologna? This guide highlights must-see landmarks, hidden corners, and culinary delights that make Bologna special.',
      attractions: ['Asinelli Tower', 'Piazza Maggiore', 'University of Bologna', 'Sanctuary of San Luca', 'Quadrilatero Market'],
      highlights: ['Climb Asinelli Tower for panoramic views', 'Explore Piazza Maggiore', 'Culinary journey through food markets', 'Discover hidden canals', 'Visit oldest university in the world']
    }
  };
  
  return cityDataMap[cityName.toLowerCase()] || null;
};

// SSR-specific components
const createHomeComponent = () => {
  return createElement('div', { className: 'min-h-screen bg-background' },
    createElement('div', { className: 'container mx-auto px-4 py-12' },
      createElement('h1', { className: 'text-4xl font-bold mb-6' }, 'TravelWanders - Discover Amazing Destinations'),
      createElement('p', { className: 'text-xl text-gray-600 mb-8' }, 'Explore our curated collection of the world\'s most incredible travel destinations, from bustling cities to hidden gems waiting to be discovered.'),
      createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
        createElement('div', { className: 'bg-white rounded-lg shadow-md p-6' },
          createElement('h2', { className: 'text-2xl font-bold mb-4' }, 'Featured Destinations'),
          createElement('p', { className: 'text-gray-600' }, 'Discover our top-rated travel destinations with comprehensive guides and insider tips.')
        )
      )
    )
  );
};

const createCityComponent = (cityName: string, cityData: any) => {
  const title = cityData?.title || `Best Things to Do in ${cityName}`;
  const description = cityData?.description || `Discover the best attractions and experiences in ${cityName}`;
  const attractions = cityData?.attractions || [];
  const highlights = cityData?.highlights || [];
  
  return createElement('div', { className: 'min-h-screen bg-background' },
    createElement('div', { className: 'container mx-auto px-4 py-12' },
      createElement('h1', { className: 'text-4xl font-bold mb-6' }, title),
      createElement('p', { className: 'text-xl text-gray-600 mb-8' }, description),
      createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-8' },
        createElement('div', { className: 'bg-white rounded-lg shadow-md p-6' },
          createElement('h2', { className: 'text-2xl font-bold mb-4' }, 'Top Attractions'),
          createElement('ul', { className: 'space-y-2' },
            ...attractions.map((attraction, index) => 
              createElement('li', { key: index, className: 'text-gray-600' }, `• ${attraction}`)
            )
          )
        ),
        createElement('div', { className: 'bg-white rounded-lg shadow-md p-6' },
          createElement('h2', { className: 'text-2xl font-bold mb-4' }, 'Highlights'),
          createElement('ul', { className: 'space-y-2' },
            ...highlights.map((highlight, index) => 
              createElement('li', { key: index, className: 'text-gray-600' }, `• ${highlight}`)
            )
          )
        )
      )
    )
  );
};

export async function handleSSRRequest(req: Request, res: Response) {
  const url = req.originalUrl;
  let htmlContent = '';
  let pageTitle = 'TravelWanders';
  let pageDescription = 'Discover amazing travel destinations with TravelWanders';
  
  try {
    // Route-specific SSR rendering
    if (url === '/') {
      // Home page SSR
      pageTitle = 'TravelWanders - Discover Amazing Destinations & Travel Guides';
      pageDescription = 'Discover the best travel destinations, attractions, and experiences with TravelWanders. Your ultimate guide to exploring the world.';
      const homeComponent = createHomeComponent();
      htmlContent = renderToString(homeComponent);
    } else if (url.startsWith('/best-things-to-do-in-')) {
      // City page SSR
      const cityKey = url.replace('/best-things-to-do-in-', '');
      const cityName = cityKey.charAt(0).toUpperCase() + cityKey.slice(1);
      
      // Get enhanced city data for better SEO
      const cityDataEnhanced = extractCityData(cityName);
      
      if (cityDataEnhanced) {
        pageTitle = cityDataEnhanced.title;
        pageDescription = cityDataEnhanced.description;
      } else {
        pageTitle = `15 Best Things to Do in ${cityName} (2025 Guide) - TravelWanders`;
        pageDescription = `Discover the best attractions, activities, and experiences in ${cityName}. Your comprehensive travel guide with insider tips and must-visit destinations.`;
      }
      
      const cityComponent = createCityComponent(cityName, cityDataEnhanced);
      htmlContent = renderToString(cityComponent);
    } else if (url === '/blogs') {
      // Blogs page SSR
      pageTitle = 'Travel Blogs & Guides - TravelWanders';
      pageDescription = 'Discover travel inspiration through our collection of travel blogs, guides, and stories.';
      htmlContent = renderToString(
        createElement('div', { className: 'min-h-screen bg-background' },
          createElement('div', { className: 'container mx-auto px-4 py-12' },
            createElement('h1', { className: 'text-4xl font-bold mb-6' }, 'Travel Blogs & Guides'),
            createElement('p', { className: 'text-xl text-gray-600 mb-8' }, 'Discover travel inspiration through our collection of travel blogs, guides, and stories.')
          )
        )
      );
    } else if (url === '/destinations') {
      // Destinations page SSR
      pageTitle = 'Travel Destinations Directory - TravelWanders';
      pageDescription = 'Explore our comprehensive directory of travel destinations worldwide.';
      htmlContent = renderToString(
        createElement('div', { className: 'min-h-screen bg-background' },
          createElement('div', { className: 'container mx-auto px-4 py-12' },
            createElement('h1', { className: 'text-4xl font-bold mb-6' }, 'Travel Destinations Directory'),
            createElement('p', { className: 'text-xl text-gray-600 mb-8' }, 'Explore our comprehensive directory of travel destinations worldwide.')
          )
        )
      );
    }

    // Generate complete HTML document
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <meta name="description" content="${pageDescription}">
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com${url}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageTitle}">
  <meta name="twitter:description" content="${pageDescription}">
  <link rel="canonical" href="https://travelwanders.com${url}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; }
    .min-h-screen { min-height: 100vh; }
    .bg-background { background-color: #ffffff; }
    .container { max-width: 1200px; margin: 0 auto; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
    .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
    .text-2xl { font-size: 1.5rem; line-height: 2rem; }
    .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
    .font-bold { font-weight: 700; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-4 { margin-bottom: 1rem; }
    .text-gray-600 { color: #6b7280; }
    .bg-white { background-color: #ffffff; }
    .rounded-lg { border-radius: 0.5rem; }
    .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .p-6 { padding: 1.5rem; }
    .grid { display: grid; }
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .gap-8 { gap: 2rem; }
    ul { list-style: none; padding-left: 0; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    @media (min-width: 768px) {
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (min-width: 1024px) {
      .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    }
  </style>
</head>
<body>
  <div id="root">${htmlContent}</div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(fullHTML);
    
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
}