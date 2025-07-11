#!/usr/bin/env node

/**
 * Generate static HTML for a single city page
 * Used when new cities are created through the admin panel
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '..', 'dist', 'public');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

/**
 * Generate static HTML for a specific city
 */
async function generateCityStaticPage(cityKey, cityName) {
  console.log(`🏗️  Generating static page for ${cityName}...`);
  
  // Check if base HTML exists
  if (!fs.existsSync(BASE_HTML_PATH)) {
    console.log('⚠️  Base HTML not found - skipping static generation');
    return false;
  }
  
  // Read base HTML template
  const baseHTML = fs.readFileSync(BASE_HTML_PATH, 'utf-8');
  
  // Generate route info
  const route = {
    path: `/best-things-to-do-in-${cityKey}`,
    name: `city-${cityKey}`
  };
  
  // Generate SEO-optimized HTML
  const routeHTML = generateHTMLForRoute(route, baseHTML, cityName, cityKey);
  
  // Create output directory
  const routeDir = path.join(DIST_DIR, `best-things-to-do-in-${cityKey}`);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Write static HTML file
  const outputPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(outputPath, routeHTML);
  
  console.log(`✅ Generated static page: ${outputPath}`);
  
  // Update sitemap if it exists
  await updateSitemap(route);
  
  return true;
}

/**
 * Generate SEO-optimized HTML for city route
 */
function generateHTMLForRoute(route, baseHTML, cityName, cityKey) {
  let html = baseHTML;
  
  // Generate SEO data
  const seoData = {
    title: `Best Things to Do in ${cityName} - Ultimate Travel Guide | TravelWanders`,
    description: `Discover the best things to do in ${cityName}. Explore top attractions, hidden gems, local experiences, and travel tips for your perfect ${cityName} adventure.`,
    keywords: `best things to do in ${cityName}, ${cityName} attractions, ${cityName} travel guide, visit ${cityName}, ${cityName} tourism, ${cityName} activities`,
    ogType: 'article',
    ogImage: `https://travelwanders.com/images/cities/${cityKey}-hero.jpg`
  };
  
  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${seoData.title}</title>`
  );
  
  // Replace description
  html = html.replace(
    /<meta name="description".*?>/,
    `<meta name="description" content="${seoData.description}">`
  );
  
  // Add/update keywords
  if (html.includes('<meta name="keywords"')) {
    html = html.replace(
      /<meta name="keywords".*?>/,
      `<meta name="keywords" content="${seoData.keywords}">`
    );
  } else {
    html = html.replace(
      '</head>',
      `  <meta name="keywords" content="${seoData.keywords}">\n</head>`
    );
  }
  
  // Add canonical URL
  html = html.replace(
    '</head>',
    `  <link rel="canonical" href="https://travelwanders.com${route.path}">\n</head>`
  );
  
  // Add Open Graph tags
  const ogTags = [
    `<meta property="og:title" content="${seoData.title}">`,
    `<meta property="og:description" content="${seoData.description}">`,
    `<meta property="og:url" content="https://travelwanders.com${route.path}">`,
    `<meta property="og:type" content="${seoData.ogType}">`,
    `<meta property="og:site_name" content="TravelWanders">`,
    `<meta property="og:image" content="${seoData.ogImage}">`
  ].join('\n  ');
  
  html = html.replace('</head>', `  ${ogTags}\n</head>`);
  
  // Add Twitter Card tags
  const twitterTags = [
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${seoData.title}">`,
    `<meta name="twitter:description" content="${seoData.description}">`,
    `<meta name="twitter:image" content="${seoData.ogImage}">`
  ].join('\n  ');
  
  html = html.replace('</head>', `  ${twitterTags}\n</head>`);
  
  // Add structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": `${cityName} Travel Guide`,
    "description": seoData.description,
    "url": `https://travelwanders.com${route.path}`,
    "about": {
      "@type": "City",
      "name": cityName
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    },
    "mainEntity": {
      "@type": "City",
      "name": cityName,
      "description": `Travel guide for ${cityName}`
    }
  };
  
  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(structuredData, null, 0)}</script>\n</head>`
  );
  
  return html;
}

/**
 * Update sitemap with new city
 */
async function updateSitemap(route) {
  const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('⚠️  Sitemap not found - skipping sitemap update');
    return;
  }
  
  try {
    let sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    
    // Check if route already exists in sitemap
    if (sitemap.includes(`<loc>https://travelwanders.com${route.path}</loc>`)) {
      console.log('📄 City already exists in sitemap');
      return;
    }
    
    // Add new entry before closing urlset tag
    const newEntry = `  <url>
    <loc>https://travelwanders.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>`;
    
    sitemap = sitemap.replace('</urlset>', `${newEntry}\n</urlset>`);
    
    fs.writeFileSync(sitemapPath, sitemap);
    console.log('✅ Updated sitemap.xml');
  } catch (error) {
    console.error('❌ Failed to update sitemap:', error.message);
  }
}

/**
 * Main function - can be called from server or command line
 */
export async function generateSingleCityStatic(cityKey, cityName) {
  return await generateCityStaticPage(cityKey, cityName);
}

// Command line usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const cityKey = process.argv[2];
  const cityName = process.argv[3];
  
  if (!cityKey || !cityName) {
    console.error('Usage: node generate-single-city-static.js <city-key> <city-name>');
    console.error('Example: node generate-single-city-static.js tokyo Tokyo');
    process.exit(1);
  }
  
  generateSingleCityStatic(cityKey, cityName).catch(error => {
    console.error('❌ Failed to generate static page:', error);
    process.exit(1);
  });
}