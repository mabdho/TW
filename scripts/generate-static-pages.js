#!/usr/bin/env node

/**
 * Static Site Generation Script for TravelWanders
 * Pre-renders all pages to static HTML files at build time
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderComponentToHTML } from './ssr-renderer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DIST_DIR = path.join(__dirname, '..', 'dist', 'public');
const CLIENT_DIR = path.join(__dirname, '..', 'client');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

// Only cities that actually have component files - prevents SEO-harmful orphaned content
const CITY_KEYS = [
  "tokyo", "paris"
];

// Base routes to generate
const BASE_ROUTES = [
  { path: '/', name: 'home' },
  { path: '/blogs', name: 'blogs' },
  { path: '/destinations', name: 'destinations' },
  { path: '/admin', name: 'admin' }
];

/**
 * Generate SEO-optimized HTML for a specific route
 */
async function generateHTMLForRoute(route, baseHTML) {
  let html = baseHTML;
  
  // Extract city name from route path
  const cityMatch = route.path.match(/\/best-things-to-do-in-(.+)/);
  const cityKey = cityMatch ? cityMatch[1] : null;
  const cityName = cityKey ? formatCityName(cityKey) : null;
  
  // Generate route-specific SEO metadata
  const seoData = generateSEOData(route, cityName, cityKey);
  
  // Replace placeholders in HTML
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${seoData.title}</title>`
  );
  
  html = html.replace(
    /<meta name="description".*?>/,
    `<meta name="description" content="${seoData.description}">`
  );
  
  // Add/update meta keywords
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
  
  // 🔧 FIX DUPLICATION: Remove existing duplicate tags before adding new ones
  html = html.replace(/<link rel="canonical".*?>\n/g, '');
  html = html.replace(/<meta property="og:.*?>\n/g, '');
  html = html.replace(/<meta name="twitter:.*?>\n/g, '');
  html = html.replace(/<script type="application\/ld\+json">.*?<\/script>\n/gs, '');
  
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
  const structuredData = generateStructuredData(route, cityName, cityKey, seoData);
  html = html.replace(
    '</head>',
    `  <script type="application/ld+json">${JSON.stringify(structuredData, null, 0)}</script>\n</head>`
  );
  
  // 🚀 SSR: Pre-render React content
  try {
    console.log(`🔄 Rendering React content for ${route.path}...`);
    const renderedContent = await renderComponentToHTML(route);
    
    // Replace empty root div with pre-rendered content
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedContent}</div>`
    );
    
    console.log(`✅ SSR complete for ${route.path}`);
  } catch (ssrError) {
    console.warn(`⚠️  SSR failed for ${route.path}:`, ssrError.message);
    // Keep original empty root div - client-side rendering will take over
  }
  
  return html;
}

/**
 * Generate SEO data for a route
 */
function generateSEOData(route, cityName, cityKey) {
  if (cityName && cityKey) {
    // City page SEO
    return {
      title: `Best Things to Do in ${cityName} - Ultimate Travel Guide | TravelWanders`,
      description: `Discover the best things to do in ${cityName}. Explore top attractions, hidden gems, local experiences, and travel tips for your perfect ${cityName} adventure.`,
      keywords: `best things to do in ${cityName}, ${cityName} attractions, ${cityName} travel guide, visit ${cityName}, ${cityName} tourism, ${cityName} activities`,
      ogType: 'article',
      ogImage: `https://travelwanders.com/images/cities/${cityKey}-hero.jpg`
    };
  }
  
  // Base page SEO
  switch (route.name) {
    case 'home':
      return {
        title: 'TravelWanders - Best Travel Guides & City Destinations',
        description: 'Discover the world\'s best destinations with TravelWanders. Expert travel guides, city recommendations, and insider tips for your next adventure.',
        keywords: 'travel guides, city destinations, travel tips, best places to visit, travel blog, tourism',
        ogType: 'website',
        ogImage: 'https://travelwanders.com/images/og-home.jpg'
      };
    case 'blogs':
      return {
        title: 'Travel Blog - Expert Tips & Destination Guides | TravelWanders',
        description: 'Read expert travel articles, destination guides, and insider tips from TravelWanders. Get inspired for your next adventure.',
        keywords: 'travel blog, travel articles, destination guides, travel tips, travel inspiration',
        ogType: 'website',
        ogImage: 'https://travelwanders.com/images/og-blogs.jpg'
      };
    case 'destinations':
      return {
        title: 'Best Travel Destinations - City Guides & Attractions | TravelWanders',
        description: 'Explore 170+ city destinations worldwide. Find the best attractions, activities, and travel guides for your next trip.',
        keywords: 'travel destinations, city guides, world cities, travel attractions, destination finder',
        ogType: 'website',
        ogImage: 'https://travelwanders.com/images/og-destinations.jpg'
      };
    case 'admin':
      return {
        title: 'Admin Panel | TravelWanders',
        description: 'TravelWanders admin panel for content management.',
        keywords: 'admin, content management',
        ogType: 'website',
        ogImage: 'https://travelwanders.com/images/og-default.jpg'
      };
    default:
      return {
        title: 'TravelWanders - Discover Amazing Destinations',
        description: 'Discover amazing travel destinations and expert guides with TravelWanders.',
        keywords: 'travel, destinations, guides',
        ogType: 'website',
        ogImage: 'https://travelwanders.com/images/og-default.jpg'
      };
  }
}

/**
 * Generate structured data for a route
 */
function generateStructuredData(route, cityName, cityKey, seoData) {
  if (cityName && cityKey) {
    // City page structured data
    return {
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
  }
  
  // Website structured data
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TravelWanders",
    "url": "https://travelwanders.com",
    "description": "Expert travel guides and destination recommendations",
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    }
  };
}

/**
 * Format city key to proper city name
 */
function formatCityName(cityKey) {
  return cityKey
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Ensure directory exists
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Generate static files for all routes
 */
async function generateStaticFiles() {
  console.log('🏗️  Starting static site generation...');
  
  // Check if base HTML exists
  if (!fs.existsSync(BASE_HTML_PATH)) {
    console.error('❌ Base HTML file not found. Run `npm run build` first.');
    process.exit(1);
  }
  
  // Read base HTML template
  const baseHTML = fs.readFileSync(BASE_HTML_PATH, 'utf-8');
  console.log('✅ Base HTML template loaded');
  
  // Generate all routes
  const allRoutes = [
    ...BASE_ROUTES,
    ...CITY_KEYS.map(cityKey => ({
      path: `/best-things-to-do-in-${cityKey}`,
      name: `city-${cityKey}`
    }))
  ];
  
  console.log(`📄 Generating ${allRoutes.length} static pages...`);
  
  let generatedCount = 0;
  
  for (const route of allRoutes) {
    try {
      // Generate HTML for this route
      const routeHTML = await generateHTMLForRoute(route, baseHTML);
      
      // Determine output path
      let outputPath;
      if (route.path === '/') {
        outputPath = path.join(DIST_DIR, 'index.html');
      } else {
        const routePath = route.path.substring(1); // Remove leading slash
        const routeDir = path.join(DIST_DIR, routePath);
        ensureDirectoryExists(routeDir);
        outputPath = path.join(routeDir, 'index.html');
      }
      
      // Write static HTML file
      fs.writeFileSync(outputPath, routeHTML);
      generatedCount++;
      
      if (generatedCount % 20 === 0) {
        console.log(`📄 Generated ${generatedCount}/${allRoutes.length} pages...`);
      }
    } catch (error) {
      console.error(`❌ Error generating ${route.path}:`, error.message);
    }
  }
  
  console.log(`✅ Successfully generated ${generatedCount} static pages`);
  console.log(`📁 Static files output to: ${DIST_DIR}`);
  
  // Generate sitemap
  generateSitemap(allRoutes);
  
  // Generate robots.txt
  generateRobotsTxt();
  
  console.log('🎉 Static site generation complete!');
}

/**
 * Generate sitemap.xml
 */
function generateSitemap(routes) {
  const sitemapEntries = routes.map(route => {
    const lastmod = new Date().toISOString().split('T')[0];
    const priority = route.path === '/' ? '1.0' : 
                    route.path.startsWith('/best-things-to-do-in-') ? '0.8' : '0.7';
    
    return `  <url>
    <loc>https://travelwanders.com${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
  
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
  console.log('✅ Generated sitemap.xml');
}

/**
 * Generate robots.txt
 */
function generateRobotsTxt() {
  const robots = `User-agent: *
Allow: /

Sitemap: https://travelwanders.com/sitemap.xml`;
  
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robots);
  console.log('✅ Generated robots.txt');
}

// Run the static generation
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticFiles().catch(error => {
    console.error('❌ Static generation failed:', error);
    process.exit(1);
  });
}