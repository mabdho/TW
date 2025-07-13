import { Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// User agent detection for search engines
function isSearchEngine(userAgent: string): boolean {
  const searchEnginePatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /rogerbot/i,
    /linkedinbot/i,
    /embedly/i,
    /quora link preview/i,
    /showyoubot/i,
    /outbrain/i,
    /pinterest/i,
    /developers\.google\.com\/\+\/web\/snippet/i,
    /whatsapp/i,
    /telegram/i,
    /slack/i,
    /discord/i
  ];
  
  return searchEnginePatterns.some(pattern => pattern.test(userAgent));
}

// Extract city data from TSX files
const extractCityData = async (cityName: string) => {
  try {
    const cityFileName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    const cityFilePath = path.join(__dirname, '..', 'client', 'src', 'pages', 'cities', `${cityFileName}.tsx`);
    
    if (fs.existsSync(cityFilePath)) {
      const cityFileContent = fs.readFileSync(cityFilePath, 'utf-8');
      
      const cityData: any = {};
      
      // Extract title
      const titleMatch = cityFileContent.match(/title=\{"([^"]+)"\}/);
      if (titleMatch) cityData.title = titleMatch[1];
      
      // Extract description
      const descMatch = cityFileContent.match(/description=\{`([^`]+)`\}/s);
      if (descMatch) cityData.description = descMatch[1];
      
      // Extract highlights array
      const highlightsMatch = cityFileContent.match(/highlights=\{(\[[\s\S]*?\])\}/);
      if (highlightsMatch) {
        try {
          const highlightsStr = highlightsMatch[1];
          const highlightsArray = eval(highlightsStr);
          cityData.highlights = highlightsArray;
        } catch (e) {
          console.warn('Failed to parse highlights:', e.message);
        }
      }
      
      return cityData;
    }
  } catch (error) {
    console.warn(`Failed to extract city data for ${cityName}:`, error.message);
  }
  
  return null;
};

// Extract blog data from files
const extractBlogData = async () => {
  try {
    const blogsFilePath = path.join(__dirname, '..', 'client', 'src', 'blogs.ts');
    
    if (fs.existsSync(blogsFilePath)) {
      const blogsContent = fs.readFileSync(blogsFilePath, 'utf-8');
      
      // Extract blog entries using regex
      const blogMatches = blogsContent.match(/\{[^}]*id:\s*\d+[^}]*\}/g);
      const blogs = [];
      
      if (blogMatches) {
        for (const match of blogMatches.slice(0, 3)) { // Get first 3 blogs
          const idMatch = match.match(/id:\s*(\d+)/);
          const titleMatch = match.match(/title:\s*"([^"]+)"/);
          const excerptMatch = match.match(/excerpt:\s*"([^"]+)"/);
          const categoryMatch = match.match(/category:\s*"([^"]+)"/);
          
          if (idMatch && titleMatch) {
            blogs.push({
              id: idMatch[1],
              title: titleMatch[1],
              excerpt: excerptMatch ? excerptMatch[1] : 'Discover amazing travel insights',
              category: categoryMatch ? categoryMatch[1] : 'Travel'
            });
          }
        }
      }
      
      return blogs;
    }
  } catch (error) {
    console.warn('Failed to extract blog data:', error.message);
  }
  
  return [];
};

// Get all existing cities from the filesystem
const getAllCities = () => {
  try {
    const citiesDir = path.join(__dirname, '..', 'client', 'src', 'pages', 'cities');
    
    if (fs.existsSync(citiesDir)) {
      const cityFiles = fs.readdirSync(citiesDir)
        .filter(file => file.endsWith('.tsx'))
        .map(file => {
          const cityName = file.replace('.tsx', '');
          return {
            name: cityName,
            url: `/best-things-to-do-in-${cityName.toLowerCase()}`,
            slug: cityName.toLowerCase()
          };
        });
      
      return cityFiles.slice(0, 6); // Return first 6 cities
    }
  } catch (error) {
    console.warn('Failed to get cities:', error.message);
  }
  
  return [];
};

// Create comprehensive SSR components for each page type
const createHomePageSSR = async () => {
  const cities = getAllCities();
  const blogs = await extractBlogData();
  
  return createElement('div', { className: 'min-h-screen bg-background' },
    // Navigation
    createElement('nav', { className: 'bg-white border-b sticky top-0 z-50' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'flex items-center justify-between h-16' },
          createElement('div', { className: 'flex items-center space-x-3' },
            createElement('div', { className: 'h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center' },
              createElement('span', { className: 'text-white text-lg font-bold' }, 'T')
            ),
            createElement('span', { className: 'text-xl font-bold text-gray-900' }, 'TravelWanders')
          ),
          createElement('div', { className: 'hidden md:flex items-center space-x-8' },
            createElement('a', { href: '/', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Home'),
            createElement('a', { href: '/destinations', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Destinations'),
            createElement('a', { href: '/blogs', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Blogs'),
            createElement('a', { href: '/destinations', className: 'bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700' }, 'Get Started')
          )
        )
      )
    ),
    
    // Hero Section
    createElement('section', { className: 'relative bg-white min-h-screen flex items-center justify-center overflow-hidden' },
      createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50' }),
      createElement('div', { className: 'relative z-10 container mx-auto px-4 text-center' },
        createElement('div', { className: 'max-w-4xl mx-auto' },
          createElement('div', { className: 'flex justify-center mb-8' },
            createElement('div', { className: 'bg-green-100 text-green-800 border border-green-200 px-4 py-2 rounded-full flex items-center' },
              createElement('span', { className: 'text-sm mr-2' }, '⭐'),
              createElement('span', { className: 'text-sm font-medium' }, 'Trusted by millions of travelers')
            )
          ),
          createElement('h1', { className: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight' },
            'Explore the world with ',
            createElement('span', { className: 'block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500' }, 'confidence')
          ),
          createElement('p', { className: 'text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto' },
            'Get trusted reviews, insider tips, and comprehensive guides for destinations worldwide.'
          ),
          createElement('div', { className: 'relative max-w-2xl mx-auto mb-12' },
            createElement('div', { className: 'bg-white rounded-2xl shadow-lg p-2 flex items-center' },
              createElement('input', { 
                type: 'text', 
                placeholder: 'Where do you want to go?', 
                className: 'flex-1 px-6 py-4 text-lg border-0 outline-none bg-transparent text-gray-800 placeholder-gray-500'
              }),
              createElement('button', { className: 'bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors' }, 'Search')
            )
          )
        )
      )
    ),
    
    // Featured Cities Section
    createElement('section', { className: 'py-16 bg-white' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'text-center mb-12' },
          createElement('h2', { className: 'text-3xl sm:text-4xl font-bold text-gray-900 mb-4' }, 'Popular destinations'),
          createElement('p', { className: 'text-lg text-gray-600 max-w-2xl mx-auto' }, 
            'Discover the world\'s most beloved travel destinations with comprehensive guides and insider tips.'
          )
        ),
        createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12' },
          ...cities.map(city => 
            createElement('a', { key: city.name, href: city.url, className: 'group' },
              createElement('div', { className: 'bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden' },
                createElement('div', { className: 'relative aspect-4/3 overflow-hidden' },
                  createElement('div', { className: 'w-full h-full bg-gradient-to-br from-green-500 to-blue-500' })
                ),
                createElement('div', { className: 'p-4' },
                  createElement('div', { className: 'flex items-start justify-between' },
                    createElement('div', {},
                      createElement('h3', { className: 'font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors' }, city.name),
                      createElement('p', { className: 'text-sm text-gray-600 flex items-center gap-1 mt-1' },
                        createElement('span', { className: 'text-xs' }, '📍'),
                        'Amazing destination'
                      )
                    ),
                    createElement('span', { className: 'text-gray-400 group-hover:translate-x-1 transition-transform' }, '→')
                  )
                )
              )
            )
          )
        ),
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
    
    // Blog Section
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
        blogs.length > 0 ? 
          createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12' },
            ...blogs.map(blog => 
              createElement('a', { key: blog.id, href: `/blog/${blog.id}`, className: 'group' },
                createElement('div', { className: 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300' },
                  createElement('div', { className: 'h-48 bg-gradient-to-br from-blue-500 to-purple-500' }),
                  createElement('div', { className: 'p-6' },
                    createElement('div', { className: 'text-sm text-green-600 font-medium mb-2' }, blog.category),
                    createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors' }, blog.title),
                    createElement('p', { className: 'text-gray-600 line-clamp-3' }, blog.excerpt)
                  )
                )
              )
            )
          ) :
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
    ),
    
    // Footer
    createElement('footer', { className: 'bg-gray-900 text-white py-16' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'text-center' },
          createElement('div', { className: 'flex items-center justify-center space-x-3 mb-4' },
            createElement('div', { className: 'h-10 w-10 bg-green-600 rounded-lg flex items-center justify-center' },
              createElement('span', { className: 'text-white text-xl font-bold' }, 'T')
            ),
            createElement('span', { className: 'text-2xl font-bold' }, 'TravelWanders')
          ),
          createElement('p', { className: 'text-gray-400 mb-8 max-w-2xl mx-auto' },
            'Your trusted companion for discovering amazing destinations and creating unforgettable travel experiences.'
          ),
          createElement('div', { className: 'border-t border-gray-800 pt-8' },
            createElement('p', { className: 'text-gray-400 text-sm' },
              '© 2025 TravelWanders. All rights reserved.'
            )
          )
        )
      )
    )
  );
};

const createDestinationsPageSSR = async () => {
  const cities = getAllCities();
  
  return createElement('div', { className: 'min-h-screen bg-background' },
    // Navigation (same as home)
    createElement('nav', { className: 'bg-white border-b sticky top-0 z-50' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'flex items-center justify-between h-16' },
          createElement('div', { className: 'flex items-center space-x-3' },
            createElement('div', { className: 'h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center' },
              createElement('span', { className: 'text-white text-lg font-bold' }, 'T')
            ),
            createElement('span', { className: 'text-xl font-bold text-gray-900' }, 'TravelWanders')
          ),
          createElement('div', { className: 'hidden md:flex items-center space-x-8' },
            createElement('a', { href: '/', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Home'),
            createElement('a', { href: '/destinations', className: 'text-green-600 font-medium' }, 'Destinations'),
            createElement('a', { href: '/blogs', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Blogs')
          )
        )
      )
    ),
    
    // Header
    createElement('section', { className: 'py-16 bg-gradient-to-br from-green-50 to-blue-50' },
      createElement('div', { className: 'container mx-auto px-4 text-center' },
        createElement('h1', { className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6' }, 'All Destinations'),
        createElement('p', { className: 'text-xl text-gray-600 max-w-3xl mx-auto' },
          `Explore ${cities.length}+ amazing destinations with comprehensive travel guides and insider tips.`
        )
      )
    ),
    
    // Cities Grid
    createElement('section', { className: 'py-16' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' },
          ...cities.map(city => 
            createElement('a', { key: city.name, href: city.url, className: 'group' },
              createElement('div', { className: 'bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden' },
                createElement('div', { className: 'relative aspect-4/3 overflow-hidden' },
                  createElement('div', { className: 'w-full h-full bg-gradient-to-br from-green-500 to-blue-500' })
                ),
                createElement('div', { className: 'p-6' },
                  createElement('h3', { className: 'font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2' }, city.name),
                  createElement('p', { className: 'text-gray-600 text-sm mb-4' }, 'Discover amazing attractions and experiences'),
                  createElement('div', { className: 'flex items-center text-green-600 group-hover:text-green-700 font-medium text-sm' },
                    createElement('span', {}, 'Explore Destination'),
                    createElement('span', { className: 'ml-2 group-hover:translate-x-1 transition-transform' }, '→')
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

const createBlogsPageSSR = async () => {
  const blogs = await extractBlogData();
  
  return createElement('div', { className: 'min-h-screen bg-background' },
    // Navigation
    createElement('nav', { className: 'bg-white border-b sticky top-0 z-50' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'flex items-center justify-between h-16' },
          createElement('div', { className: 'flex items-center space-x-3' },
            createElement('div', { className: 'h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center' },
              createElement('span', { className: 'text-white text-lg font-bold' }, 'T')
            ),
            createElement('span', { className: 'text-xl font-bold text-gray-900' }, 'TravelWanders')
          ),
          createElement('div', { className: 'hidden md:flex items-center space-x-8' },
            createElement('a', { href: '/', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Home'),
            createElement('a', { href: '/destinations', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Destinations'),
            createElement('a', { href: '/blogs', className: 'text-green-600 font-medium' }, 'Blogs')
          )
        )
      )
    ),
    
    // Header
    createElement('section', { className: 'py-16 bg-gradient-to-br from-blue-50 to-purple-50' },
      createElement('div', { className: 'container mx-auto px-4 text-center' },
        createElement('h1', { className: 'text-4xl md:text-5xl font-bold text-gray-900 mb-6' }, 'Travel Blog'),
        createElement('p', { className: 'text-xl text-gray-600 max-w-3xl mx-auto' },
          'Get inspired with our travel stories, tips, and destination guides from expert travelers.'
        )
      )
    ),
    
    // Blogs Grid
    createElement('section', { className: 'py-16' },
      createElement('div', { className: 'container mx-auto px-4' },
        blogs.length > 0 ? 
          createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' },
            ...blogs.map(blog => 
              createElement('a', { key: blog.id, href: `/blog/${blog.id}`, className: 'group' },
                createElement('div', { className: 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300' },
                  createElement('div', { className: 'h-64 bg-gradient-to-br from-blue-500 to-purple-500' }),
                  createElement('div', { className: 'p-6' },
                    createElement('div', { className: 'text-sm text-green-600 font-medium mb-2' }, blog.category),
                    createElement('h3', { className: 'text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors' }, blog.title),
                    createElement('p', { className: 'text-gray-600 mb-4' }, blog.excerpt),
                    createElement('div', { className: 'flex items-center text-green-600 group-hover:text-green-700 font-medium text-sm' },
                      createElement('span', {}, 'Read Article'),
                      createElement('span', { className: 'ml-2 group-hover:translate-x-1 transition-transform' }, '→')
                    )
                  )
                )
              )
            )
          ) :
          createElement('div', { className: 'text-center py-16' },
            createElement('h3', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'No blog posts yet'),
            createElement('p', { className: 'text-gray-600 mb-8' }, 'Check back soon for amazing travel stories and guides.'),
            createElement('a', { 
              href: '/destinations', 
              className: 'inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors'
            },
              'Explore Destinations',
              createElement('span', { className: 'ml-2' }, '→')
            )
          )
      )
    )
  );
};

const createCityPageSSR = async (cityName: string) => {
  const cityData = await extractCityData(cityName);
  if (!cityData) return null;
  
  const title = cityData.title || `Best Things to Do in ${cityName}`;
  const description = cityData.description || `Discover the best attractions and experiences in ${cityName}`;
  const highlights = cityData.highlights || [];
  
  return createElement('div', { className: 'min-h-screen bg-background' },
    // Navigation
    createElement('nav', { className: 'bg-white border-b sticky top-0 z-50' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'flex items-center justify-between h-16' },
          createElement('div', { className: 'flex items-center space-x-3' },
            createElement('div', { className: 'h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center' },
              createElement('span', { className: 'text-white text-lg font-bold' }, 'T')
            ),
            createElement('span', { className: 'text-xl font-bold text-gray-900' }, 'TravelWanders')
          ),
          createElement('div', { className: 'hidden md:flex items-center space-x-8' },
            createElement('a', { href: '/', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Home'),
            createElement('a', { href: '/destinations', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Destinations'),
            createElement('a', { href: '/blogs', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Blogs')
          )
        )
      )
    ),
    
    // Hero Section
    createElement('div', { className: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('h1', { className: 'text-4xl md:text-5xl font-bold mb-4' }, title),
        createElement('p', { className: 'text-xl text-blue-100 max-w-3xl' }, description.substring(0, 200) + '...')
      )
    ),
    
    // Highlights Section
    createElement('div', { className: 'py-12 bg-white' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('h2', { className: 'text-3xl font-bold mb-8 text-center' }, 'Top Highlights'),
        createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
          ...highlights.map((highlight, index) => 
            createElement('div', { key: index, className: 'bg-gray-50 rounded-lg p-6 border border-gray-200' },
              createElement('div', { className: 'flex items-start' },
                createElement('span', { className: 'text-blue-600 mr-3 mt-1' }, '✓'),
                createElement('p', { className: 'text-gray-700 font-medium' }, highlight)
              )
            )
          )
        )
      )
    )
  );
};

const createLegalPageSSR = (pageType: 'privacy' | 'terms' | 'cookies') => {
  const pageData = {
    privacy: {
      title: 'Privacy Policy',
      content: 'Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information when you use TravelWanders.'
    },
    terms: {
      title: 'Terms of Service',
      content: 'These terms and conditions outline the rules and regulations for the use of TravelWanders website and services.'
    },
    cookies: {
      title: 'Cookie Policy',
      content: 'This cookie policy explains how TravelWanders uses cookies and similar technologies to recognize you when you visit our website.'
    }
  };
  
  const page = pageData[pageType];
  
  return createElement('div', { className: 'min-h-screen bg-background' },
    // Navigation
    createElement('nav', { className: 'bg-white border-b sticky top-0 z-50' },
      createElement('div', { className: 'container mx-auto px-4' },
        createElement('div', { className: 'flex items-center justify-between h-16' },
          createElement('div', { className: 'flex items-center space-x-3' },
            createElement('div', { className: 'h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center' },
              createElement('span', { className: 'text-white text-lg font-bold' }, 'T')
            ),
            createElement('span', { className: 'text-xl font-bold text-gray-900' }, 'TravelWanders')
          ),
          createElement('div', { className: 'hidden md:flex items-center space-x-8' },
            createElement('a', { href: '/', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Home'),
            createElement('a', { href: '/destinations', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Destinations'),
            createElement('a', { href: '/blogs', className: 'text-gray-700 hover:text-green-600 font-medium' }, 'Blogs')
          )
        )
      )
    ),
    
    // Content
    createElement('div', { className: 'py-16' },
      createElement('div', { className: 'container mx-auto px-4 max-w-4xl' },
        createElement('h1', { className: 'text-4xl font-bold text-gray-900 mb-8' }, page.title),
        createElement('div', { className: 'prose prose-lg max-w-none' },
          createElement('p', { className: 'text-gray-600 text-lg leading-relaxed' }, page.content),
          createElement('p', { className: 'text-gray-600 mt-6' }, 'Last updated: January 2025'),
          createElement('div', { className: 'mt-12 p-6 bg-gray-50 rounded-lg' },
            createElement('h3', { className: 'text-xl font-semibold text-gray-900 mb-4' }, 'Contact Us'),
            createElement('p', { className: 'text-gray-600' }, 
              'If you have any questions about this policy, please contact us at: ',
              createElement('a', { href: 'mailto:support@travelwanders.com', className: 'text-green-600 hover:text-green-700' }, 'support@travelwanders.com')
            )
          )
        )
      )
    )
  );
};

// Main SSR handler
export async function handleComprehensiveSSR(req: Request, res: Response) {
  const userAgent = req.get('User-Agent') || '';
  
  // Only apply SSR for search engines and specific routes
  if (!isSearchEngine(userAgent)) {
    return null; // Let the normal routing handle it
  }
  
  try {
    const path = req.path;
    let component = null;
    let pageTitle = 'TravelWanders - Discover Amazing Destinations';
    let pageDescription = 'Explore the world\'s most incredible destinations with our comprehensive travel guides, insider tips, and expert recommendations.';
    
    // Route-specific SSR handling
    if (path === '/') {
      component = await createHomePageSSR();
      pageTitle = 'TravelWanders - Discover Amazing Destinations Worldwide';
      pageDescription = 'Explore the world with confidence. Get trusted reviews, insider tips, and comprehensive guides for destinations worldwide. Start your adventure today!';
    } else if (path === '/destinations') {
      component = await createDestinationsPageSSR();
      pageTitle = 'All Destinations - TravelWanders';
      pageDescription = 'Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.';
    } else if (path === '/blogs') {
      component = await createBlogsPageSSR();
      pageTitle = 'Travel Blog - TravelWanders';
      pageDescription = 'Get inspired with our travel stories, tips, and destination guides from expert travelers around the world.';
    } else if (path.startsWith('/best-things-to-do-in-')) {
      const cityName = path.replace('/best-things-to-do-in-', '');
      component = await createCityPageSSR(cityName);
      if (component) {
        const cityData = await extractCityData(cityName);
        if (cityData) {
          pageTitle = cityData.title || `Best Things to Do in ${cityName.charAt(0).toUpperCase() + cityName.slice(1)}`;
          pageDescription = (cityData.description || `Discover the best attractions and experiences in ${cityName}`).substring(0, 160);
        }
      }
    } else if (path === '/privacy-policy') {
      component = createLegalPageSSR('privacy');
      pageTitle = 'Privacy Policy - TravelWanders';
      pageDescription = 'Learn how TravelWanders protects your privacy and handles your personal information when you use our travel platform.';
    } else if (path === '/terms-of-service') {
      component = createLegalPageSSR('terms');
      pageTitle = 'Terms of Service - TravelWanders';
      pageDescription = 'Read the terms and conditions for using TravelWanders website and travel services.';
    } else if (path === '/cookie-policy') {
      component = createLegalPageSSR('cookies');
      pageTitle = 'Cookie Policy - TravelWanders';
      pageDescription = 'Learn about how TravelWanders uses cookies to improve your browsing experience and provide personalized content.';
    }
    
    if (!component) {
      return null; // Let normal routing handle unknown paths
    }
    
    const htmlString = renderToString(component);
    
    const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageTitle}</title>
  <meta name="description" content="${pageDescription}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://travelwanders.com${path}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${pageTitle}">
  <meta property="og:description" content="${pageDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com${path}">
  <meta property="og:site_name" content="TravelWanders">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${pageTitle}">
  <meta name="twitter:description" content="${pageDescription}">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TravelWanders",
    "url": "https://travelwanders.com",
    "description": "Discover amazing destinations with comprehensive travel guides and insider tips",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://travelwanders.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  </script>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
    .grid { display: grid; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .justify-center { justify-content: center; }
    .text-center { text-align: center; }
    .space-x-3 > * + * { margin-left: 0.75rem; }
    .space-x-8 > * + * { margin-left: 2rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-12 { margin-bottom: 3rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .text-4xl { font-size: 2.25rem; }
    .text-5xl { font-size: 3rem; }
    .font-bold { font-weight: 700; }
    .text-gray-900 { color: #111827; }
    .text-gray-600 { color: #4b5563; }
    .text-white { color: white; }
    .bg-white { background-color: white; }
    .bg-green-600 { background-color: #059669; }
    .bg-gray-50 { background-color: #f9fafb; }
    .bg-gray-900 { background-color: #111827; }
    .border-b { border-bottom: 1px solid #e5e7eb; }
    .rounded-lg { border-radius: 0.5rem; }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .transition-all { transition: all 0.3s ease; }
    .hover\\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    .hover\\:text-green-600:hover { color: #059669; }
    .sticky { position: sticky; }
    .top-0 { top: 0; }
    .z-50 { z-index: 50; }
    .h-16 { height: 4rem; }
    .h-8 { height: 2rem; }
    .w-8 { width: 2rem; }
    .min-h-screen { min-height: 100vh; }
    .aspect-4\\/3 { aspect-ratio: 4/3; }
    .overflow-hidden { overflow: hidden; }
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .gap-6 { gap: 1.5rem; }
    .gap-8 { gap: 2rem; }
    .p-6 { padding: 1.5rem; }
    .relative { position: relative; }
    .absolute { position: absolute; }
    .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
    .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
    .from-orange-50 { --tw-gradient-from: #fff7ed; }
    .via-white { --tw-gradient-via: white; }
    .to-green-50 { --tw-gradient-to: #f0fdf4; }
    .from-green-500 { --tw-gradient-from: #22c55e; }
    .to-blue-500 { --tw-gradient-to: #3b82f6; }
    .from-blue-500 { --tw-gradient-from: #3b82f6; }
    .to-purple-500 { --tw-gradient-to: #8b5cf6; }
    .from-blue-600 { --tw-gradient-from: #2563eb; }
    .to-purple-600 { --tw-gradient-to: #9333ea; }
    
    @media (min-width: 640px) {
      .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .sm\\:text-5xl { font-size: 3rem; }
    }
    
    @media (min-width: 768px) {
      .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .md\\:text-5xl { font-size: 3rem; }
      .md\\:flex { display: flex; }
    }
    
    @media (min-width: 1024px) {
      .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .lg\\:text-7xl { font-size: 4.5rem; }
    }
    
    a { color: inherit; text-decoration: none; }
    .group:hover .group-hover\\:text-green-600 { color: #059669; }
    .group:hover .group-hover\\:translate-x-1 { transform: translateX(0.25rem); }
  </style>
</head>
<body>
  <div id="root">${htmlString}</div>
  <script>
    // Basic progressive enhancement
    console.log('TravelWanders SSR page loaded for search engines');
  </script>
</body>
</html>`;
    
    res.status(200).send(fullHTML);
    return true;
    
  } catch (error) {
    console.error('SSR Error:', error);
    return null;
  }
}