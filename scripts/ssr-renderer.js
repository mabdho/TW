#!/usr/bin/env node

/**
 * Server-Side Rendering (SSR) Engine for TravelWanders
 * Pre-renders React components to HTML strings for static generation
 */

import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import paths
const CLIENT_SRC = path.join(__dirname, '..', 'client', 'src');

/**
 * Mock React Query Provider for SSR
 */
function MockQueryProvider({ children }) {
  return children;
}

/**
 * Mock SEO components that don't need server rendering
 */
function MockSEOProvider({ children }) {
  return children;
}

/**
 * Load city component dynamically
 */
async function loadCityComponent(cityKey) {
  try {
    const cityName = cityKey
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    const cityPath = path.join(CLIENT_SRC, 'pages', 'cities', `${cityName}.tsx`);
    
    if (fs.existsSync(cityPath)) {
      // For SSR, we'll create a simplified version of the city component
      return createMockCityComponent(cityName, cityKey);
    }
    
    return null;
  } catch (error) {
    console.warn(`Failed to load city component for ${cityKey}:`, error.message);
    return null;
  }
}

/**
 * Create a simplified city component for SSR
 */
function createMockCityComponent(cityName, cityKey) {
  const formattedCityName = cityKey
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return function CityComponent() {
    return createElement('div', { className: 'city-page' }, [
      // Hero Section
      createElement('div', { 
        key: 'hero',
        className: 'hero-section bg-gradient-to-r from-blue-600 to-orange-500 text-white py-20' 
      }, [
        createElement('div', { 
          key: 'container', 
          className: 'container mx-auto px-4 text-center' 
        }, [
          createElement('h1', { 
            key: 'title',
            className: 'text-4xl md:text-6xl font-bold mb-6' 
          }, `Best Things to Do in ${formattedCityName}`),
          createElement('p', { 
            key: 'subtitle',
            className: 'text-xl md:text-2xl mb-8' 
          }, `Discover amazing attractions, experiences, and hidden gems in ${formattedCityName}`)
        ])
      ]),
      
      // Content Section
      createElement('div', { 
        key: 'content',
        className: 'container mx-auto px-4 py-12' 
      }, [
        createElement('div', { 
          key: 'overview',
          className: 'prose max-w-none mb-12' 
        }, [
          createElement('h2', { 
            key: 'overview-title',
            className: 'text-3xl font-bold mb-6' 
          }, `Overview of ${formattedCityName}`),
          createElement('p', { 
            key: 'overview-text',
            className: 'text-lg leading-relaxed' 
          }, `${formattedCityName} offers an incredible array of attractions, activities, and experiences for every type of traveler. From historic landmarks to modern attractions, cultural sites to natural wonders, this destination has something special for everyone.`)
        ]),
        
        createElement('div', { 
          key: 'attractions',
          className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
        }, [
          createElement('div', { 
            key: 'attraction-1',
            className: 'bg-white rounded-lg shadow-md p-6 border' 
          }, [
            createElement('h3', { 
              key: 'attr-title-1',
              className: 'text-xl font-semibold mb-3' 
            }, 'Top Attractions'),
            createElement('p', { 
              key: 'attr-desc-1',
              className: 'text-gray-600' 
            }, `Explore the must-see landmarks and iconic attractions that make ${formattedCityName} unique.`)
          ]),
          
          createElement('div', { 
            key: 'attraction-2',
            className: 'bg-white rounded-lg shadow-md p-6 border' 
          }, [
            createElement('h3', { 
              key: 'attr-title-2',
              className: 'text-xl font-semibold mb-3' 
            }, 'Local Experiences'),
            createElement('p', { 
              key: 'attr-desc-2',
              className: 'text-gray-600' 
            }, 'Immerse yourself in local culture with authentic experiences and hidden gems.')
          ]),
          
          createElement('div', { 
            key: 'attraction-3',
            className: 'bg-white rounded-lg shadow-md p-6 border' 
          }, [
            createElement('h3', { 
              key: 'attr-title-3',
              className: 'text-xl font-semibold mb-3' 
            }, 'Travel Tips'),
            createElement('p', { 
              key: 'attr-desc-3',
              className: 'text-gray-600' 
            }, `Essential information and insider tips for planning your perfect trip to ${formattedCityName}.`)
          ])
        ])
      ])
    ]);
  };
}

/**
 * Create home page component for SSR
 */
function createHomeComponent() {
  return function HomeComponent() {
    return createElement('div', { className: 'home-page' }, [
      // Hero Section
      createElement('div', { 
        key: 'hero',
        className: 'hero-section bg-gradient-to-r from-blue-600 to-orange-500 text-white min-h-screen flex items-center' 
      }, [
        createElement('div', { 
          key: 'container', 
          className: 'container mx-auto px-4 text-center' 
        }, [
          createElement('h1', { 
            key: 'title',
            className: 'text-4xl md:text-6xl font-bold mb-6' 
          }, 'Discover Your Next Adventure'),
          createElement('p', { 
            key: 'subtitle',
            className: 'text-xl md:text-2xl mb-8' 
          }, 'Explore 170+ destinations with expert travel guides and insider tips'),
          createElement('div', { 
            key: 'cta',
            className: 'space-x-4' 
          }, [
            createElement('a', { 
              key: 'explore-btn',
              href: '/destinations',
              className: 'btn-primary inline-block' 
            }, 'Explore Destinations')
          ])
        ])
      ]),
      
      // Featured Cities Section
      createElement('div', { 
        key: 'featured',
        className: 'py-20 bg-gray-50' 
      }, [
        createElement('div', { 
          key: 'container', 
          className: 'container mx-auto px-4' 
        }, [
          createElement('h2', { 
            key: 'featured-title',
            className: 'text-3xl font-bold text-center mb-12' 
          }, 'Featured Destinations'),
          createElement('div', { 
            key: 'cities-grid',
            className: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8' 
          }, [
            'Tokyo', 'Paris', 'New York', 'Dubai'
          ].map(city => 
            createElement('div', { 
              key: city,
              className: 'bg-white rounded-lg shadow-md overflow-hidden' 
            }, [
              createElement('div', { 
                key: 'image',
                className: 'h-48 bg-gray-200' 
              }),
              createElement('div', { 
                key: 'content',
                className: 'p-6' 
              }, [
                createElement('h3', { 
                  key: 'city-name',
                  className: 'text-xl font-semibold mb-2' 
                }, city),
                createElement('p', { 
                  key: 'city-desc',
                  className: 'text-gray-600' 
                }, `Discover the best things to do in ${city}`)
              ])
            ])
          ))
        ])
      ])
    ]);
  };
}

/**
 * Create blogs page component for SSR
 */
function createBlogsComponent() {
  return function BlogsComponent() {
    return createElement('div', { className: 'blogs-page' }, [
      createElement('div', { 
        key: 'header',
        className: 'bg-gray-50 py-12' 
      }, [
        createElement('div', { 
          key: 'container', 
          className: 'container mx-auto px-4 text-center' 
        }, [
          createElement('h1', { 
            key: 'title',
            className: 'text-4xl font-bold mb-4' 
          }, 'Travel Blog'),
          createElement('p', { 
            key: 'subtitle',
            className: 'text-xl text-gray-600' 
          }, 'Expert travel guides, tips, and destination insights')
        ])
      ]),
      
      createElement('div', { 
        key: 'content',
        className: 'container mx-auto px-4 py-12' 
      }, [
        createElement('div', { 
          key: 'blog-grid',
          className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
        }, [
          'Travel Tips', 'Destination Guides', 'Cultural Experiences'
        ].map(topic => 
          createElement('div', { 
            key: topic,
            className: 'bg-white rounded-lg shadow-md p-6' 
          }, [
            createElement('h3', { 
              key: 'topic-title',
              className: 'text-xl font-semibold mb-3' 
            }, topic),
            createElement('p', { 
              key: 'topic-desc',
              className: 'text-gray-600' 
            }, `Discover expert insights about ${topic.toLowerCase()}`)
          ])
        ))
      ])
    ]);
  };
}

/**
 * Create destinations page component for SSR
 */
function createDestinationsComponent() {
  return function DestinationsComponent() {
    return createElement('div', { className: 'destinations-page' }, [
      createElement('div', { 
        key: 'header',
        className: 'bg-gray-50 py-12' 
      }, [
        createElement('div', { 
          key: 'container', 
          className: 'container mx-auto px-4 text-center' 
        }, [
          createElement('h1', { 
            key: 'title',
            className: 'text-4xl font-bold mb-4' 
          }, 'Travel Destinations'),
          createElement('p', { 
            key: 'subtitle',
            className: 'text-xl text-gray-600' 
          }, 'Explore 170+ amazing destinations around the world')
        ])
      ]),
      
      createElement('div', { 
        key: 'content',
        className: 'container mx-auto px-4 py-12' 
      }, [
        createElement('div', { 
          key: 'search',
          className: 'mb-8 text-center' 
        }, [
          createElement('p', { 
            key: 'search-text',
            className: 'text-lg text-gray-600' 
          }, 'Use the search and filters to find your perfect destination')
        ])
      ])
    ]);
  };
}

/**
 * Create admin page component for SSR
 */
function createAdminComponent() {
  return function AdminComponent() {
    return createElement('div', { className: 'admin-page' }, [
      createElement('div', { 
        key: 'header',
        className: 'bg-gray-50 py-12' 
      }, [
        createElement('div', { 
          key: 'container', 
          className: 'container mx-auto px-4 text-center' 
        }, [
          createElement('h1', { 
            key: 'title',
            className: 'text-4xl font-bold mb-4' 
          }, 'Admin Panel'),
          createElement('p', { 
            key: 'subtitle',
            className: 'text-xl text-gray-600' 
          }, 'Content management system for TravelWanders')
        ])
      ])
    ]);
  };
}

/**
 * Render React component to HTML string
 */
export async function renderComponentToHTML(route) {
  try {
    let Component;
    
    // Determine which component to render based on route
    if (route.path === '/') {
      Component = createHomeComponent();
    } else if (route.path === '/blogs') {
      Component = createBlogsComponent();
    } else if (route.path === '/destinations') {
      Component = createDestinationsComponent();
    } else if (route.path === '/admin') {
      Component = createAdminComponent();
    } else if (route.path.startsWith('/best-things-to-do-in-')) {
      const cityKey = route.path.replace('/best-things-to-do-in-', '');
      Component = await loadCityComponent(cityKey);
    }
    
    if (!Component) {
      console.warn(`No component found for route: ${route.path}`);
      return '<div class="container mx-auto px-4 py-12 text-center"><h1 class="text-2xl">Page Not Found</h1></div>';
    }
    
    // Create app wrapper with providers
    const App = createElement('div', { id: 'app' }, [
      createElement(MockQueryProvider, { key: 'query-provider' }, [
        createElement(MockSEOProvider, { key: 'seo-provider' }, [
          createElement(MemoryRouter, { 
            key: 'router', 
            initialEntries: [route.path] 
          }, [
            createElement(Component, { key: 'component' })
          ])
        ])
      ])
    ]);
    
    // Render to HTML string
    const html = renderToString(App);
    return html;
    
  } catch (error) {
    console.error(`SSR Error for route ${route.path}:`, error);
    // Return a minimal error page
    return `<div class="container mx-auto px-4 py-12 text-center">
      <h1 class="text-2xl mb-4">Page Loading...</h1>
      <p class="text-gray-600">Content will appear when JavaScript loads.</p>
    </div>`;
  }
}

/**
 * Test SSR rendering (for debugging)
 */
if (import.meta.url === `file://${process.argv[1]}`) {
  const testRoute = { path: '/', name: 'home' };
  renderComponentToHTML(testRoute).then(html => {
    console.log('SSR Test Output:');
    console.log(html.substring(0, 500) + '...');
  }).catch(error => {
    console.error('SSR Test Error:', error);
  });
}