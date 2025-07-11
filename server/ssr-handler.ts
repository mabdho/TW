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
    // Hero Section
    createElement('section', { className: 'relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-24' },
      createElement('div', { className: 'container mx-auto px-4 text-center' },
        createElement('h1', { className: 'text-5xl font-bold mb-6' }, 'Discover Your Next Adventure'),
        createElement('p', { className: 'text-xl mb-8 max-w-2xl mx-auto' }, 'Explore curated travel guides, hidden gems, and unforgettable experiences around the world'),
        createElement('div', { className: 'bg-white rounded-lg p-4 max-w-md mx-auto' },
          createElement('div', { className: 'flex items-center space-x-2' },
            createElement('input', { 
              type: 'text', 
              placeholder: 'Search destinations...', 
              className: 'flex-1 px-4 py-2 border border-gray-300 rounded-lg text-black'
            }),
            createElement('button', { className: 'bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700' }, 'Search')
          )
        )
      )
    ),
    // Featured Destinations Section
    createElement('section', { className: 'py-16 bg-gray-50' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'text-center mb-12' },
          createElement('h2', { className: 'text-4xl font-bold mb-4' }, 'Featured Destinations'),
          createElement('p', { className: 'text-xl text-gray-600' }, 'Discover our most popular travel destinations')
        ),
        createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
          createElement('div', { className: 'bg-white rounded-lg shadow-md overflow-hidden' },
            createElement('div', { className: 'h-48 bg-gradient-to-r from-orange-400 to-red-500' }),
            createElement('div', { className: 'p-6' },
              createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Porto, Portugal'),
              createElement('p', { className: 'text-gray-600 mb-4' }, 'Discover historic landmarks and port wine cellars'),
              createElement('a', { href: '/best-things-to-do-in-porto', className: 'text-blue-600 hover:text-blue-800' }, 'Explore Porto →')
            )
          ),
          createElement('div', { className: 'bg-white rounded-lg shadow-md overflow-hidden' },
            createElement('div', { className: 'h-48 bg-gradient-to-r from-green-400 to-blue-500' }),
            createElement('div', { className: 'p-6' },
              createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Bologna, Italy'),
              createElement('p', { className: 'text-gray-600 mb-4' }, 'Explore medieval towers and culinary delights'),
              createElement('a', { href: '/best-things-to-do-in-bologna', className: 'text-blue-600 hover:text-blue-800' }, 'Explore Bologna →')
            )
          ),
          createElement('div', { className: 'bg-white rounded-lg shadow-md overflow-hidden' },
            createElement('div', { className: 'h-48 bg-gradient-to-r from-purple-400 to-pink-500' }),
            createElement('div', { className: 'p-6' },
              createElement('h3', { className: 'text-xl font-bold mb-2' }, 'More Destinations'),
              createElement('p', { className: 'text-gray-600 mb-4' }, 'Discover amazing destinations worldwide'),
              createElement('a', { href: '/destinations', className: 'text-blue-600 hover:text-blue-800' }, 'View All →')
            )
          )
        )
      )
    ),
    // Travel Categories Section
    createElement('section', { className: 'py-16 bg-white' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'text-center mb-12' },
          createElement('h2', { className: 'text-4xl font-bold mb-4' }, 'Plan Your Perfect Trip'),
          createElement('p', { className: 'text-xl text-gray-600' }, 'From city breaks to cultural experiences')
        ),
        createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' },
          createElement('div', { className: 'text-center' },
            createElement('div', { className: 'w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4' },
              createElement('span', { className: 'text-2xl' }, '🏛️')
            ),
            createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Cultural Sites'),
            createElement('p', { className: 'text-gray-600' }, 'Historic landmarks and museums')
          ),
          createElement('div', { className: 'text-center' },
            createElement('div', { className: 'w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4' },
              createElement('span', { className: 'text-2xl' }, '🍽️')
            ),
            createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Food & Drink'),
            createElement('p', { className: 'text-gray-600' }, 'Local cuisine and dining experiences')
          ),
          createElement('div', { className: 'text-center' },
            createElement('div', { className: 'w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4' },
              createElement('span', { className: 'text-2xl' }, '🎨')
            ),
            createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Arts & Culture'),
            createElement('p', { className: 'text-gray-600' }, 'Galleries, theaters, and cultural events')
          ),
          createElement('div', { className: 'text-center' },
            createElement('div', { className: 'w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4' },
              createElement('span', { className: 'text-2xl' }, '🏞️')
            ),
            createElement('h3', { className: 'text-xl font-bold mb-2' }, 'Nature & Views'),
            createElement('p', { className: 'text-gray-600' }, 'Scenic spots and outdoor activities')
          )
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
    .bg-white { background-color: #ffffff; }
    .bg-gray-50 { background-color: #f9fafb; }
    .bg-blue-100 { background-color: #dbeafe; }
    .bg-green-100 { background-color: #dcfce7; }
    .bg-purple-100 { background-color: #f3e8ff; }
    .bg-orange-100 { background-color: #fed7aa; }
    .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
    .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
    .from-blue-900 { --tw-gradient-from: #1e3a8a; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(30, 58, 138, 0)); }
    .to-purple-900 { --tw-gradient-to: #581c87; }
    .from-orange-400 { --tw-gradient-from: #fb923c; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 146, 60, 0)); }
    .to-red-500 { --tw-gradient-to: #ef4444; }
    .from-green-400 { --tw-gradient-from: #4ade80; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(74, 222, 128, 0)); }
    .to-blue-500 { --tw-gradient-to: #3b82f6; }
    .from-purple-400 { --tw-gradient-from: #c084fc; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(192, 132, 252, 0)); }
    .to-pink-500 { --tw-gradient-to: #ec4899; }
    .text-white { color: #ffffff; }
    .text-black { color: #000000; }
    .text-gray-600 { color: #6b7280; }
    .text-blue-600 { color: #2563eb; }
    .bg-blue-600 { background-color: #2563eb; }
    .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
    .hover\\:text-blue-800:hover { color: #1e40af; }
    .container { max-width: 1200px; margin: 0 auto; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
    .p-4 { padding: 1rem; }
    .p-6 { padding: 1.5rem; }
    .text-5xl { font-size: 3rem; line-height: 1; }
    .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
    .text-2xl { font-size: 1.5rem; line-height: 2rem; }
    .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
    .font-bold { font-weight: 700; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .max-w-2xl { max-width: 42rem; }
    .max-w-md { max-width: 28rem; }
    .text-center { text-align: center; }
    .relative { position: relative; }
    .flex { display: flex; }
    .flex-1 { flex: 1 1 0%; }
    .items-center { align-items: center; }
    .space-x-2 > * + * { margin-left: 0.5rem; }
    .rounded-lg { border-radius: 0.5rem; }
    .rounded-full { border-radius: 9999px; }
    .border { border-width: 1px; }
    .border-gray-300 { border-color: #d1d5db; }
    .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .overflow-hidden { overflow: hidden; }
    .grid { display: grid; }
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .gap-8 { gap: 2rem; }
    .h-48 { height: 12rem; }
    .h-16 { height: 4rem; }
    .w-16 { width: 4rem; }
    ul { list-style: none; padding-left: 0; }
    .space-y-2 > * + * { margin-top: 0.5rem; }
    input { outline: none; }
    input:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); }
    button { cursor: pointer; transition: background-color 0.2s; }
    a { text-decoration: none; transition: color 0.2s; }
    @media (min-width: 768px) {
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media (min-width: 1024px) {
      .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
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