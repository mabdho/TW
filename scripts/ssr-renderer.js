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
    console.log(`🔍 Looking for city component: ${cityPath}`);
    
    if (fs.existsSync(cityPath)) {
      console.log(`✅ Found city component: ${cityName}`);
      
      // Import the actual component using dynamic import
      try {
        const cityFileUrl = `file://${cityPath}`;
        const cityModule = await import(cityFileUrl);
        const CityComponent = cityModule[cityName] || cityModule.default;
        
        if (CityComponent) {
          console.log(`🎯 Successfully imported real ${cityName} component`);
          return CityComponent;
        } else {
          console.warn(`⚠️  Component ${cityName} not found in exports, falling back to custom component`);
          // Fallback to parsing approach
          const cityContent = fs.readFileSync(cityPath, 'utf-8');
          return createRealCityComponent(cityName, cityKey, cityContent);
        }
      } catch (importError) {
        console.warn(`⚠️  Failed to import ${cityName} component:`, importError.message);
        console.log(`📄 Falling back to file parsing approach`);
        // Fallback to parsing approach
        const cityContent = fs.readFileSync(cityPath, 'utf-8');
        return createRealCityComponent(cityName, cityKey, cityContent);
      }
    } else {
      console.log(`❌ City component not found: ${cityPath}`);
      console.log(`📁 Available cities:`, fs.readdirSync(path.join(CLIENT_SRC, 'pages', 'cities')));
    }
    
    return null;
  } catch (error) {
    console.warn(`Failed to load city component for ${cityKey}:`, error.message);
    return null;
  }
}

/**
 * Create a real city component for SSR using actual data
 */
function createRealCityComponent(cityName, cityKey, cityContent) {
  const formattedCityName = cityKey
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Extract real data from city file
  let cityData = {};
  try {
    // Extract title
    const titleMatch = cityContent.match(/title=\{"([^"]+)"\}/);
    if (titleMatch) cityData.title = titleMatch[1];
    
    // Extract description
    const descMatch = cityContent.match(/description=\{`([^`]+)`\}/);
    if (descMatch) cityData.description = descMatch[1];
    
    // Extract image URL
    const imageMatch = cityContent.match(/imageUrl=\{"([^"]+)"\}/);
    if (imageMatch) cityData.imageUrl = imageMatch[1];
    
    // Extract highlights
    const highlightsMatch = cityContent.match(/highlights=\[(.*?)\]/s);
    if (highlightsMatch) {
      const highlightsStr = highlightsMatch[1];
      cityData.highlights = highlightsStr.match(/"([^"]+)"/g)?.map(h => h.replace(/"/g, '')) || [];
    }
    
    // Extract attraction names
    const attractionMatches = cityContent.match(/name:\s*"([^"]+)"/g);
    if (attractionMatches) {
      cityData.attractions = attractionMatches.map(match => {
        const nameMatch = match.match(/name:\s*"([^"]+)"/);
        return nameMatch ? nameMatch[1] : '';
      }).filter(name => name);
    }
    
    console.log(`📊 Extracted city data for ${cityName}:`, {
      title: cityData.title?.substring(0, 50) + '...',
      description: cityData.description?.substring(0, 100) + '...',
      imageUrl: cityData.imageUrl ? 'Present' : 'Missing',
      highlights: cityData.highlights?.length || 0,
      attractions: cityData.attractions?.length || 0
    });
  } catch (error) {
    console.warn('Failed to parse city data:', error.message);
  }

  return function CityComponent() {
    return createElement('div', { className: 'city-page min-h-screen bg-gray-50' }, [
      // Hero Section with Real Image
      createElement('div', { 
        key: 'hero',
        className: 'relative text-white h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-gray-900'
      }, [
        // Hero Image
        cityData.imageUrl && createElement('picture', {
          key: 'hero-picture',
          className: 'absolute inset-0 w-full h-full'
        }, [
          createElement('source', {
            key: 'avif-source',
            srcSet: cityData.imageUrl.replace(/fm=webp/g, 'fm=avif'),
            type: 'image/avif'
          }),
          createElement('source', {
            key: 'webp-source', 
            srcSet: cityData.imageUrl.includes('fm=webp') ? cityData.imageUrl : `${cityData.imageUrl}&fm=webp`,
            type: 'image/webp'
          }),
          createElement('img', {
            key: 'hero-img',
            src: cityData.imageUrl,
            alt: `Best things to do in ${formattedCityName} - Hero image showing top attractions`,
            className: 'absolute inset-0 w-full h-full object-cover',
            loading: 'eager',
            width: '1400',
            height: '800'
          })
        ]),
        
        // Hero Content Overlay
        createElement('div', { 
          key: 'hero-overlay',
          className: 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'
        }, [
          createElement('div', { 
            key: 'hero-container', 
            className: 'max-w-7xl mx-auto px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-16' 
          }, [
            createElement('div', {
              key: 'hero-content',
              className: 'max-w-4xl'
            }, [
              createElement('h1', { 
                key: 'h1-title',
                className: 'text-2xl leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg' 
              }, [
                createElement('span', { key: 'title-part1', className: 'block sm:inline' }, 'Best Things to Do'),
                ' ',
                createElement('span', { key: 'title-part2', className: 'block sm:inline' }, `in ${formattedCityName}`)
              ]),
              createElement('p', { 
                key: 'subtitle',
                className: 'text-base leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl lg:text-2xl mb-4 sm:mb-6 opacity-90 drop-shadow-md' 
              }, `Discover amazing experiences and top attractions in ${formattedCityName}`)
            ])
          ])
        ])
      ]),

      // Description Section
      createElement('div', { 
        key: 'description',
        className: 'bg-white border-b border-gray-200'
      }, [
        createElement('div', { 
          key: 'desc-container',
          className: 'container mx-auto px-4 py-4 sm:py-6 lg:py-8' 
        }, [
          createElement('p', { 
            key: 'description-text',
            className: 'text-sm leading-relaxed sm:text-base sm:leading-relaxed lg:text-lg text-gray-600 max-w-4xl' 
          }, cityData.description || `Discover the best things to do in ${formattedCityName}. This comprehensive travel guide covers top attractions, hidden gems, and local experiences.`)
        ])
      ]),

      // Highlights Section  
      cityData.highlights && cityData.highlights.length > 0 && createElement('div', { 
        key: 'highlights',
        className: 'bg-gray-50 py-8'
      }, [
        createElement('div', { 
          key: 'highlights-container',
          className: 'container mx-auto px-4'
        }, [
          createElement('h2', { 
            key: 'highlights-title',
            className: 'text-2xl sm:text-3xl font-bold mb-6 text-center' 
          }, 'Highlights'),
          createElement('div', { 
            key: 'highlights-grid',
            className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-4'
          }, cityData.highlights.slice(0, 6).map((highlight, index) =>
            createElement('div', { 
              key: `highlight-${index}`,
              className: 'bg-white rounded-lg p-4 shadow-sm border border-gray-200'
            }, [
              createElement('div', { 
                key: `highlight-content-${index}`,
                className: 'flex items-center space-x-3'
              }, [
                createElement('div', { 
                  key: `highlight-icon-${index}`,
                  className: 'w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm'
                }, (index + 1).toString()),
                createElement('span', { 
                  key: `highlight-text-${index}`,
                  className: 'text-gray-800 font-medium'
                }, highlight)
              ])
            ])
          ))
        ])
      ]),

      // Attractions Section
      cityData.attractions && cityData.attractions.length > 0 && createElement('div', { 
        key: 'attractions',
        className: 'container mx-auto px-4 py-12'
      }, [
        createElement('h2', { 
          key: 'attractions-title',
          className: 'text-2xl sm:text-3xl font-bold mb-8 text-center' 
        }, `Top Attractions in ${formattedCityName}`),
        createElement('div', { 
          key: 'attractions-grid',
          className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        }, cityData.attractions.slice(0, 9).map((attraction, index) =>
          createElement('div', { 
            key: `attraction-${index}`,
            className: 'bg-white rounded-lg shadow-md p-6 border border-gray-200'
          }, [
            createElement('div', { 
              key: `attraction-header-${index}`,
              className: 'flex items-center space-x-3 mb-3'
            }, [
              createElement('div', { 
                key: `attraction-rank-${index}`,
                className: 'w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm'
              }, (index + 1).toString()),
              createElement('h3', { 
                key: `attraction-name-${index}`,
                className: 'text-lg font-semibold text-gray-900' 
              }, attraction)
            ]),
            createElement('p', { 
              key: `attraction-desc-${index}`,
              className: 'text-gray-600 text-sm' 
            }, `Experience ${attraction}, one of the top attractions in ${formattedCityName}.`)
          ])
        ))
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
      console.log(`🏙️  Loading city component for: ${cityKey}`);
      Component = await loadCityComponent(cityKey);
      if (Component) {
        console.log(`✅ Successfully loaded city component for: ${cityKey}`);
      } else {
        console.log(`❌ Failed to load city component for: ${cityKey}`);
      }
    }
    
    if (!Component) {
      console.warn(`No component found for route: ${route.path}, falling back to home page`);
      // Fallback to home page instead of error page to prevent broken static pages
      Component = createHomeComponent();
    } else {
      console.log(`✅ Component successfully resolved for route: ${route.path}`);
      // Debug: Test render a small sample to see what component we actually have
      if (route.path.startsWith('/best-things-to-do-in-')) {
        try {
          const testRender = renderToString(createElement(Component));
          const isHomeComponent = testRender.includes('class="home-page"');
          const isCityComponent = testRender.includes('class="city-page"');
          console.log(`🧪 Component test render: home=${isHomeComponent}, city=${isCityComponent}`);
          console.log(`🧪 First 200 chars of component: ${testRender.substring(0, 200)}...`);
        } catch (err) {
          console.log(`🧪 Component test render failed:`, err.message);
        }
      }
    }
    
    // Create app wrapper with providers
    let App;
    
    // For city pages, render directly without router to avoid routing issues
    if (route.path.startsWith('/best-things-to-do-in-')) {
      // Test: Render city pages with minimal wrapping to avoid provider interference
      App = createElement('div', { id: 'app' }, [
        createElement(Component, { key: 'component' })
      ]);
      console.log(`🎯 Rendering city page with minimal wrapping for: ${route.path}`);
    } else {
      // For other pages, use router as normal
      App = createElement('div', { id: 'app' }, [
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
    }
    
    // Render to HTML string
    const html = renderToString(App);
    
    // Debug: Check what's being rendered for city pages
    if (route.path.startsWith('/best-things-to-do-in-')) {
      const hasHomeContent = html.includes('class="home-page"');
      const hasCityContent = html.includes('class="city-page"');
      const hasDiscoverText = html.includes('Discover Your Next Adventure');
      const hasCityTitle = html.includes('Best Things to Do in');
      console.log(`🔍 Debug render result for ${route.path}:`);
      console.log(`   - Contains home-page class: ${hasHomeContent}`);
      console.log(`   - Contains city-page class: ${hasCityContent}`);
      console.log(`   - Contains home hero text: ${hasDiscoverText}`);
      console.log(`   - Contains city title text: ${hasCityTitle}`);
      console.log(`   - HTML length: ${html.length} characters`);
    }
    
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