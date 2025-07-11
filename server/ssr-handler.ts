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

// SSR-specific components that mirror the beautiful original homepage
const createHomeComponent = () => {
  return createElement('div', { className: 'min-h-screen bg-background' },
    // Hero Section - mimicking the beautiful original design
    createElement('section', { className: 'relative bg-white min-h-screen flex items-center justify-center overflow-hidden' },
      // Background pattern
      createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50' }),
      
      // Content
      createElement('div', { className: 'relative z-10 container mx-auto px-4 text-center' },
        createElement('div', { className: 'max-w-4xl mx-auto' },
          // Trust indicator
          createElement('div', { className: 'flex justify-center mb-8' },
            createElement('div', { className: 'bg-green-100 text-green-800 border border-green-200 px-4 py-2 rounded-full flex items-center' },
              createElement('span', { className: 'text-sm mr-2' }, '⭐'),
              createElement('span', { className: 'text-sm font-medium' }, 'Trusted by millions of travelers')
            )
          ),
          
          // Modern headline
          createElement('h1', { className: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight' },
            'Explore the world with ',
            createElement('span', { className: 'block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500' }, 'confidence')
          ),
          
          createElement('p', { className: 'text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto' },
            'Get trusted reviews, insider tips, and comprehensive guides for destinations worldwide.'
          ),
          
          // Search box
          createElement('div', { className: 'relative max-w-2xl mx-auto mb-12' },
            createElement('div', { className: 'bg-white rounded-2xl shadow-lg p-2 flex items-center' },
              createElement('input', { 
                type: 'text', 
                placeholder: 'Where do you want to go?', 
                className: 'flex-1 px-6 py-4 text-lg border-0 outline-none bg-transparent text-gray-800 placeholder-gray-500'
              }),
              createElement('button', { className: 'bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors' }, 'Search')
            )
          ),
          
          // Stats
          createElement('div', { className: 'flex justify-center items-center gap-8 text-sm text-gray-600' },
            createElement('div', { className: 'flex items-center gap-2' },
              createElement('span', { className: 'text-green-600' }, '🌍'),
              createElement('span', {}, '2+ destinations')
            ),
            createElement('div', { className: 'flex items-center gap-2' },
              createElement('span', { className: 'text-orange-500' }, '⭐'),
              createElement('span', {}, 'Trusted reviews')
            ),
            createElement('div', { className: 'flex items-center gap-2' },
              createElement('span', { className: 'text-blue-600' }, '📱'),
              createElement('span', {}, 'Mobile friendly')
            )
          )
        )
      )
    ),
    
    // Featured Cities Section - matching the beautiful original
    createElement('section', { className: 'py-16 bg-white' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'text-center mb-12' },
          createElement('h2', { className: 'text-3xl sm:text-4xl font-bold text-gray-900 mb-4' }, 'Popular destinations'),
          createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' }, 
            'Discover the world\'s most beloved travel destinations with comprehensive guides and insider tips.'
          )
        ),
        
        // Featured cities grid
        createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12' },
          // Bologna card
          createElement('a', { href: '/best-things-to-do-in-bologna', className: 'group' },
            createElement('div', { className: 'bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden' },
              createElement('div', { className: 'relative aspect-4/3 overflow-hidden' },
                createElement('img', { 
                  src: 'https://plus.unsplash.com/premium_photo-1677427230972-7cabe0d3e005?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp', 
                  alt: 'Best things to do in Bologna, Italy - Featured destination',
                  className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
                  loading: 'lazy',
                  width: '300',
                  height: '225'
                })
              ),
              createElement('div', { className: 'p-4' },
                createElement('div', { className: 'flex items-start justify-between' },
                  createElement('div', {},
                    createElement('h3', { className: 'font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors' }, 'Bologna'),
                    createElement('p', { className: 'text-sm text-gray-600 flex items-center gap-1 mt-1' },
                      createElement('span', { className: 'text-xs' }, '📍'),
                      'Italy'
                    )
                  ),
                  createElement('span', { className: 'text-gray-400 group-hover:translate-x-1 transition-transform' }, '→')
                )
              )
            )
          ),
          
          // Porto card
          createElement('a', { href: '/best-things-to-do-in-porto', className: 'group' },
            createElement('div', { className: 'bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden' },
              createElement('div', { className: 'relative aspect-4/3 overflow-hidden' },
                createElement('img', { 
                  src: 'https://images.unsplash.com/photo-1577958194277-7b3bc213b03c?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=webp', 
                  alt: 'Best things to do in Porto, Portugal - Featured destination',
                  className: 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
                  loading: 'lazy',
                  width: '300',
                  height: '225'
                })
              ),
              createElement('div', { className: 'p-4' },
                createElement('div', { className: 'flex items-start justify-between' },
                  createElement('div', {},
                    createElement('h3', { className: 'font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors' }, 'Porto'),
                    createElement('p', { className: 'text-sm text-gray-600 flex items-center gap-1 mt-1' },
                      createElement('span', { className: 'text-xs' }, '📍'),
                      'Portugal'
                    )
                  ),
                  createElement('span', { className: 'text-gray-400 group-hover:translate-x-1 transition-transform' }, '→')
                )
              )
            )
          )
        ),
        
        // Bottom CTA
        createElement('div', { className: 'text-center' },
          createElement('a', { 
            href: '/destinations', 
            className: 'inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors'
          },
            'View all destinations',
            createElement('span', { className: 'ml-2' }, '→')
          )
        )
      )
    ),
    
    // Travel Categories Section - matching the beautiful original
    createElement('section', { className: 'py-16 bg-gray-50' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'text-center mb-12' },
          createElement('h2', { className: 'text-3xl sm:text-4xl font-bold text-gray-900 mb-4' },
            'Latest Travel ',
            createElement('span', { className: 'text-green-600' }, 'Stories')
          ),
          createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' },
            'Get inspired by our latest travel insights, tips, and destination guides.'
          )
        ),
        
        // Blog preview or CTA
        createElement('div', { className: 'text-center py-12' },
          createElement('p', { className: 'text-gray-600 mb-4' }, 'No blog posts available yet.'),
          createElement('a', { 
            href: '/blogs', 
            className: 'inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors'
          },
            'Visit Blog Page',
            createElement('span', { className: 'ml-2' }, '→')
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
    .from-orange-50 { --tw-gradient-from: #fff7ed; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 247, 237, 0)); }
    .via-white { --tw-gradient-via: #ffffff; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to, rgba(255, 255, 255, 0)); }
    .to-green-50 { --tw-gradient-to: #f0fdf4; }
    .from-green-600 { --tw-gradient-from: #16a34a; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(22, 163, 74, 0)); }
    .to-orange-500 { --tw-gradient-to: #f97316; }
    .text-transparent { color: transparent; }
    .bg-clip-text { background-clip: text; }
    .text-white { color: #ffffff; }
    .text-black { color: #000000; }
    .text-gray-600 { color: #6b7280; }
    .text-gray-800 { color: #1f2937; }
    .text-gray-900 { color: #111827; }
    .text-gray-400 { color: #9ca3af; }
    .text-gray-500 { color: #6b7280; }
    .text-blue-600 { color: #2563eb; }
    .text-green-600 { color: #16a34a; }
    .text-green-800 { color: #166534; }
    .text-orange-500 { color: #f97316; }
    .bg-blue-600 { background-color: #2563eb; }
    .bg-green-600 { background-color: #16a34a; }
    .bg-green-200 { background-color: #bbf7d0; }
    .border-green-200 { border-color: #bbf7d0; }
    .hover\\:bg-blue-700:hover { background-color: #1d4ed8; }
    .hover\\:bg-green-700:hover { background-color: #15803d; }
    .hover\\:text-blue-800:hover { color: #1e40af; }
    .hover\\:text-green-600:hover { color: #16a34a; }
    .hover\\:scale-105:hover { transform: scale(1.05); }
    .hover\\:translate-x-1:hover { transform: translateX(0.25rem); }
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
    .rounded-xl { border-radius: 0.75rem; }
    .rounded-2xl { border-radius: 1rem; }
    .rounded-full { border-radius: 9999px; }
    .border { border-width: 1px; }
    .border-0 { border-width: 0; }
    .border-gray-200 { border-color: #e5e7eb; }
    .border-gray-300 { border-color: #d1d5db; }
    .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
    .overflow-hidden { overflow: hidden; }
    .aspect-4\\/3 { aspect-ratio: 4/3; }
    .relative { position: relative; }
    .absolute { position: absolute; }
    .inset-0 { inset: 0; }
    .z-10 { z-index: 10; }
    .object-cover { object-fit: cover; }
    .leading-tight { line-height: 1.25; }
    .outline-none { outline: none; }
    .placeholder-gray-500::placeholder { color: #6b7280; }
    .group:hover .group-hover\\:scale-105 { transform: scale(1.05); }
    .group:hover .group-hover\\:text-green-600 { color: #16a34a; }
    .group:hover .group-hover\\:translate-x-1 { transform: translateX(0.25rem); }
    .sm\\:text-4xl { font-size: 2.25rem; }
    .sm\\:text-5xl { font-size: 3rem; }
    .sm\\:text-xl { font-size: 1.25rem; }
    .md\\:text-6xl { font-size: 3.75rem; }
    .lg\\:text-7xl { font-size: 4.5rem; }
    .mr-2 { margin-right: 0.5rem; }
    .ml-2 { margin-left: 0.5rem; }
    .mt-1 { margin-top: 0.25rem; }
    .gap-1 { gap: 0.25rem; }
    .gap-2 { gap: 0.5rem; }
    .gap-6 { gap: 1.5rem; }
    .text-xs { font-size: 0.75rem; }
    .text-sm { font-size: 0.875rem; }
    .font-medium { font-weight: 500; }
    .font-semibold { font-weight: 600; }
    .inline-flex { display: inline-flex; }
    .justify-between { justify-content: space-between; }
    .items-start { align-items: flex-start; }
    .transition-all { transition: all 0.15s ease; }
    .transition-colors { transition: color 0.15s ease, background-color 0.15s ease; }
    .transition-transform { transition: transform 0.15s ease; }
    .duration-300 { transition-duration: 0.3s; }
    .cursor-pointer { cursor: pointer; }
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