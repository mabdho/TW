#!/usr/bin/env node

/**
 * Enhanced Static Generator with Rich Content Extraction
 * Uses the same content extraction logic as the SSR system
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '..', 'dist', 'public');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

/**
 * Enhanced city data extraction (copied from SSR handler)
 */
async function extractCityData(cityName) {
  try {
    const cityFileName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    const cityFilePath = path.join(__dirname, '..', 'client', 'src', 'pages', 'cities', `${cityFileName}.tsx`);
    
    if (fs.existsSync(cityFilePath)) {
      const cityFileContent = fs.readFileSync(cityFilePath, 'utf-8');
      
      // Extract comprehensive city data
      const cityData = {};
      
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
      
      // Extract attractions with full details
      const attractionsMatch = cityFileContent.match(/attractions=\{(\[[\s\S]*?\])\}/);
      if (attractionsMatch) {
        try {
          const attractionsStr = attractionsMatch[1];
          // Parse attraction objects from the file content
          const attractionBlocks = attractionsStr.match(/\{[\s\S]*?\}/g);
          cityData.attractions = [];
          
          if (attractionBlocks) {
            for (const block of attractionBlocks) {
              const attraction = {};
              
              // Extract name
              const nameMatch = block.match(/name:\s*"([^"]+)"/);
              if (nameMatch) attraction.name = nameMatch[1];
              
              // Extract description
              const descMatch = block.match(/description:\s*`([^`]+)`/s);
              if (descMatch) attraction.description = descMatch[1];
              
              // Extract practical info
              const practicalMatch = block.match(/practicalInfo:\s*\{([^}]+)\}/s);
              if (practicalMatch) {
                const practicalStr = practicalMatch[1];
                attraction.practicalInfo = {};
                
                const howToMatch = practicalStr.match(/howToGetThere:\s*"([^"]+)"/);
                if (howToMatch) attraction.practicalInfo.howToGetThere = howToMatch[1];
                
                const hoursMatch = practicalStr.match(/openingHours:\s*"([^"]+)"/);
                if (hoursMatch) attraction.practicalInfo.openingHours = hoursMatch[1];
                
                const costMatch = practicalStr.match(/cost:\s*"([^"]+)"/);
                if (costMatch) attraction.practicalInfo.cost = costMatch[1];
                
                const websiteMatch = practicalStr.match(/website:\s*"([^"]+)"/);
                if (websiteMatch) attraction.practicalInfo.website = websiteMatch[1];
              }
              
              // Extract discovery tags
              const discoveryMatch = block.match(/discoveryTags:\s*\{([^}]+)\}/s);
              if (discoveryMatch) {
                const discoveryStr = discoveryMatch[1];
                attraction.discoveryTags = {};
                
                const insiderTipsMatch = discoveryStr.match(/insiderTips:\s*\[([^\]]+)\]/s);
                if (insiderTipsMatch) {
                  const tipsStr = insiderTipsMatch[1];
                  const tips = tipsStr.split(',').map(tip => tip.trim().replace(/['"]/g, ''));
                  attraction.discoveryTags.insiderTips = tips;
                }
                
                const photoOpMatch = discoveryStr.match(/photoOpportunity:\s*"([^"]+)"/);
                if (photoOpMatch) attraction.discoveryTags.photoOpportunity = photoOpMatch[1];
              }
              
              if (attraction.name) {
                cityData.attractions.push(attraction);
              }
            }
          }
        } catch (e) {
          console.warn('Failed to parse attractions:', e.message);
        }
      }
      
      return cityData;
    }
  } catch (error) {
    console.warn(`Error extracting city data for ${cityName}:`, error.message);
  }
  
  return null;
}

/**
 * Create rich city component with enhanced content
 */
function createEnhancedCityComponent(cityName, cityData) {
  const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  
  return function EnhancedCityComponent() {
    const elements = [];
    
    // Hero Section
    elements.push(
      createElement('div', { 
        key: 'hero',
        className: 'relative text-white h-64 sm:h-80 md:h-96 lg:h-[28rem] bg-gray-900'
      }, [
        createElement('div', { 
          key: 'hero-content',
          className: 'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'
        }, [
          createElement('div', { 
            key: 'hero-container',
            className: 'max-w-7xl mx-auto px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-16'
          }, [
            createElement('div', { 
              key: 'hero-text',
              className: 'max-w-4xl'
            }, [
              createElement('h1', { 
                key: 'title',
                className: 'text-2xl leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg'
              }, `Best Things to Do in ${formattedCityName}`),
              createElement('p', { 
                key: 'subtitle',
                className: 'text-base leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl lg:text-2xl mb-4 sm:mb-6 opacity-90 drop-shadow-md'
              }, `Discover amazing experiences and top attractions in ${formattedCityName}`)
            ])
          ])
        ])
      ])
    );
    
    // Description Section
    if (cityData.description) {
      elements.push(
        createElement('div', { 
          key: 'description',
          className: 'bg-white border-b border-gray-200'
        }, [
          createElement('div', { 
            key: 'desc-container',
            className: 'container mx-auto px-4 py-4 sm:py-6 lg:py-8'
          }, [
            createElement('p', { 
              key: 'desc-text',
              className: 'text-sm leading-relaxed sm:text-base sm:leading-relaxed lg:text-lg text-gray-600 max-w-4xl'
            }, cityData.description)
          ])
        ])
      );
    }
    
    // Highlights Section
    if (cityData.highlights && cityData.highlights.length > 0) {
      elements.push(
        createElement('div', { 
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
        ])
      );
    }
    
    // Enhanced Attractions Section with Rich Content
    if (cityData.attractions && cityData.attractions.length > 0) {
      elements.push(
        createElement('div', { 
          key: 'attractions',
          className: 'container mx-auto px-4 py-12'
        }, [
          createElement('h2', { 
            key: 'attractions-title',
            className: 'text-2xl sm:text-3xl font-bold mb-8 text-center'
          }, `Top Attractions in ${formattedCityName}`),
          createElement('div', { 
            key: 'attractions-grid',
            className: 'grid gap-8'
          }, cityData.attractions.slice(0, 9).map((attraction, index) => {
            const attractionElements = [];
            
            // Attraction Header
            attractionElements.push(
              createElement('div', { 
                key: `attraction-header-${index}`,
                className: 'bg-white rounded-lg shadow-lg p-6 border border-gray-200'
              }, [
                createElement('div', { 
                  key: `attraction-title-${index}`,
                  className: 'flex items-center space-x-3 mb-4'
                }, [
                  createElement('div', { 
                    key: `attraction-rank-${index}`,
                    className: 'w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg'
                  }, (index + 1).toString()),
                  createElement('h3', { 
                    key: `attraction-name-${index}`,
                    className: 'text-xl font-bold text-gray-900'
                  }, attraction.name)
                ]),
                
                // Enhanced Description
                attraction.description && createElement('div', { 
                  key: `attraction-description-${index}`,
                  className: 'mb-6'
                }, [
                  createElement('p', { 
                    key: `attraction-desc-text-${index}`,
                    className: 'text-gray-700 leading-relaxed'
                  }, attraction.description)
                ]),
                
                // Practical Information Section
                attraction.practicalInfo && createElement('div', { 
                  key: `attraction-practical-${index}`,
                  className: 'mb-6'
                }, [
                  createElement('h4', { 
                    key: `practical-title-${index}`,
                    className: 'text-lg font-semibold text-gray-900 mb-3 flex items-center'
                  }, [
                    createElement('span', { key: `practical-icon-${index}`, className: 'text-blue-600 mr-2' }, 'ℹ️'),
                    'Practical Information'
                  ]),
                  createElement('div', { 
                    key: `practical-content-${index}`,
                    className: 'bg-blue-50 p-4 rounded-lg space-y-2'
                  }, [
                    attraction.practicalInfo.howToGetThere && createElement('div', { 
                      key: `how-to-get-${index}`,
                      className: 'flex items-start space-x-2'
                    }, [
                      createElement('span', { key: `transport-icon-${index}`, className: 'text-blue-600 mt-1' }, '🚇'),
                      createElement('div', { key: `transport-text-${index}` }, [
                        createElement('strong', { key: `transport-label-${index}` }, 'How to Get There: '),
                        createElement('span', { key: `transport-info-${index}` }, attraction.practicalInfo.howToGetThere)
                      ])
                    ]),
                    
                    attraction.practicalInfo.openingHours && createElement('div', { 
                      key: `hours-${index}`,
                      className: 'flex items-start space-x-2'
                    }, [
                      createElement('span', { key: `hours-icon-${index}`, className: 'text-blue-600 mt-1' }, '🕐'),
                      createElement('div', { key: `hours-text-${index}` }, [
                        createElement('strong', { key: `hours-label-${index}` }, 'Opening Hours: '),
                        createElement('span', { key: `hours-info-${index}` }, attraction.practicalInfo.openingHours)
                      ])
                    ]),
                    
                    attraction.practicalInfo.cost && createElement('div', { 
                      key: `cost-${index}`,
                      className: 'flex items-start space-x-2'
                    }, [
                      createElement('span', { key: `cost-icon-${index}`, className: 'text-blue-600 mt-1' }, '💰'),
                      createElement('div', { key: `cost-text-${index}` }, [
                        createElement('strong', { key: `cost-label-${index}` }, 'Cost: '),
                        createElement('span', { key: `cost-info-${index}` }, attraction.practicalInfo.cost)
                      ])
                    ])
                  ])
                ]),
                
                // Insider Tips Section
                attraction.discoveryTags && attraction.discoveryTags.insiderTips && createElement('div', { 
                  key: `attraction-tips-${index}`,
                  className: 'mb-6'
                }, [
                  createElement('h4', { 
                    key: `tips-title-${index}`,
                    className: 'text-lg font-semibold text-gray-900 mb-3 flex items-center'
                  }, [
                    createElement('span', { key: `tips-icon-${index}`, className: 'text-orange-600 mr-2' }, '💡'),
                    'Insider Tips'
                  ]),
                  createElement('div', { 
                    key: `tips-content-${index}`,
                    className: 'bg-orange-50 p-4 rounded-lg'
                  }, [
                    createElement('ul', { 
                      key: `tips-list-${index}`,
                      className: 'space-y-2'
                    }, attraction.discoveryTags.insiderTips.map((tip, tipIndex) =>
                      createElement('li', { 
                        key: `tip-${index}-${tipIndex}`,
                        className: 'flex items-start space-x-2'
                      }, [
                        createElement('span', { key: `tip-bullet-${index}-${tipIndex}`, className: 'text-orange-600 mt-1' }, '•'),
                        createElement('span', { key: `tip-text-${index}-${tipIndex}`, className: 'text-gray-700' }, tip)
                      ])
                    ))
                  ])
                ]),
                
                // Photo Opportunity Section
                attraction.discoveryTags && attraction.discoveryTags.photoOpportunity && createElement('div', { 
                  key: `attraction-photo-${index}`,
                  className: 'mb-4'
                }, [
                  createElement('h4', { 
                    key: `photo-title-${index}`,
                    className: 'text-lg font-semibold text-gray-900 mb-3 flex items-center'
                  }, [
                    createElement('span', { key: `photo-icon-${index}`, className: 'text-purple-600 mr-2' }, '📸'),
                    'Photo Opportunity'
                  ]),
                  createElement('div', { 
                    key: `photo-content-${index}`,
                    className: 'bg-purple-50 p-4 rounded-lg'
                  }, [
                    createElement('p', { 
                      key: `photo-text-${index}`,
                      className: 'text-gray-700'
                    }, attraction.discoveryTags.photoOpportunity)
                  ])
                ])
              ])
            );
            
            return createElement('div', { 
              key: `attraction-${index}`,
              className: 'mb-8'
            }, attractionElements);
          }))
        ])
      );
    }
    
    return createElement('div', { className: 'city-page min-h-screen bg-gray-50' }, elements);
  };
}

/**
 * Generate static HTML for Milan with enhanced content
 */
async function generateEnhancedMilan() {
  console.log('🏗️  Generating enhanced static page for Milan...');
  
  // Check if base HTML exists
  if (!fs.existsSync(BASE_HTML_PATH)) {
    console.log('⚠️  Base HTML not found - skipping static generation');
    return false;
  }
  
  // Read base HTML template
  const baseHTML = fs.readFileSync(BASE_HTML_PATH, 'utf-8');
  
  // Extract rich city data
  const cityData = await extractCityData('Milan');
  
  if (cityData) {
    console.log(`✅ Enhanced static generation: Loaded rich content for Milan with ${cityData.attractions?.length || 0} attractions`);
    
    // Create enhanced city component
    const CityComponent = createEnhancedCityComponent('Milan', cityData);
    
    // Render to HTML
    const htmlContent = renderToString(createElement(CityComponent));
    
    console.log(`🎯 Generated rich HTML content with ${htmlContent.length} characters`);
    
    // Update HTML with enhanced content
    let html = baseHTML;
    
    // Update title and meta tags
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${cityData.title || 'Best Things to Do in Milan - Ultimate Travel Guide | TravelWanders'}</title>`
    );
    
    html = html.replace(
      /<meta name="description".*?>/,
      `<meta name="description" content="${cityData.description || 'Discover the best things to do in Milan. Explore top attractions, hidden gems, local experiences, and travel tips for your perfect Milan adventure.'}">`
    );
    
    // Replace content
    const renderedContent = `<div id="app">${htmlContent}</div>`;
    html = html.replace(
      /<div id="app">.*?<\/div>/s,
      renderedContent
    );
    
    // Create output directory
    const routeDir = path.join(DIST_DIR, 'best-things-to-do-in-milan');
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    // Write enhanced HTML file
    const outputPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outputPath, html);
    
    console.log(`✅ Generated enhanced static page: ${outputPath}`);
    return true;
  } else {
    console.log('⚠️  No city data found for Milan');
    return false;
  }
}

// Run the enhanced generation
generateEnhancedMilan().catch(console.error);