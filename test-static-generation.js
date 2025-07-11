#!/usr/bin/env node

/**
 * Test script to demonstrate static generation capability
 * This creates a minimal example of what the full system does
 */

import fs from 'fs';
import path from 'path';

// Create a sample base HTML to demonstrate the static generation
const sampleHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TravelWanders</title>
  <meta name="description" content="Default description">
</head>
<body>
  <div id="root"></div>
  <script src="/assets/index.js"></script>
</body>
</html>`;

// Sample routes to demonstrate
const sampleRoutes = [
  { path: '/', name: 'home' },
  { path: '/best-things-to-do-in-tokyo', name: 'tokyo' },
  { path: '/best-things-to-do-in-paris', name: 'paris' },
  { path: '/blogs', name: 'blogs' }
];

function generateSEOHTML(route, baseHTML) {
  let html = baseHTML;
  
  // Extract city from path
  const cityMatch = route.path.match(/\/best-things-to-do-in-(.+)/);
  const cityName = cityMatch ? cityMatch[1].charAt(0).toUpperCase() + cityMatch[1].slice(1) : null;
  
  if (cityName) {
    // City page SEO
    const title = `Best Things to Do in ${cityName} - Ultimate Travel Guide | TravelWanders`;
    const description = `Discover the best things to do in ${cityName}. Explore top attractions, hidden gems, local experiences, and travel tips for your perfect ${cityName} adventure.`;
    const keywords = `best things to do in ${cityName}, ${cityName} attractions, ${cityName} travel guide`;
    
    html = html.replace('<title>TravelWanders</title>', `<title>${title}</title>`);
    html = html.replace('content="Default description"', `content="${description}"`);
    html = html.replace('</head>', `  <meta name="keywords" content="${keywords}">
  <link rel="canonical" href="https://travelwanders.com${route.path}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="https://travelwanders.com${route.path}">
  <meta property="og:type" content="article">
</head>`);
  } else {
    // Main page SEO
    const pageData = {
      '/': {
        title: 'TravelWanders - Best Travel Guides & City Destinations',
        description: 'Discover the world\'s best destinations with TravelWanders. Expert travel guides, city recommendations, and insider tips for your next adventure.',
        keywords: 'travel guides, city destinations, travel tips, best places to visit'
      },
      '/blogs': {
        title: 'Travel Blog - Expert Tips & Destination Guides | TravelWanders',
        description: 'Read expert travel articles, destination guides, and insider tips from TravelWanders. Get inspired for your next adventure.',
        keywords: 'travel blog, travel articles, destination guides, travel tips'
      }
    };
    
    const data = pageData[route.path] || pageData['/'];
    html = html.replace('<title>TravelWanders</title>', `<title>${data.title}</title>`);
    html = html.replace('content="Default description"', `content="${data.description}"`);
    html = html.replace('</head>', `  <meta name="keywords" content="${data.keywords}">
  <link rel="canonical" href="https://travelwanders.com${route.path}">
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.description}">
  <meta property="og:url" content="https://travelwanders.com${route.path}">
  <meta property="og:type" content="website">
</head>`);
  }
  
  return html;
}

// Create demo output directory
const demoDir = './demo-static-output';
if (fs.existsSync(demoDir)) {
  fs.rmSync(demoDir, { recursive: true });
}
fs.mkdirSync(demoDir, { recursive: true });

console.log('🏗️  Demonstrating Static Site Generation...');

// Generate static HTML for each route
sampleRoutes.forEach(route => {
  const staticHTML = generateSEOHTML(route, sampleHTML);
  
  let outputPath;
  if (route.path === '/') {
    outputPath = path.join(demoDir, 'index.html');
  } else {
    const routePath = route.path.substring(1);
    const routeDir = path.join(demoDir, routePath);
    fs.mkdirSync(routeDir, { recursive: true });
    outputPath = path.join(routeDir, 'index.html');
  }
  
  fs.writeFileSync(outputPath, staticHTML);
  console.log(`✅ Generated: ${outputPath}`);
});

// Generate sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sampleRoutes.map(route => `  <url>
    <loc>https://travelwanders.com${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(demoDir, 'sitemap.xml'), sitemap);
console.log('✅ Generated: sitemap.xml');

// Generate robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: https://travelwanders.com/sitemap.xml`;

fs.writeFileSync(path.join(demoDir, 'robots.txt'), robots);
console.log('✅ Generated: robots.txt');

console.log('\n📁 Demo static files created in:', demoDir);
console.log('📄 Files generated:');
console.log('   - index.html (Home page)');
console.log('   - best-things-to-do-in-tokyo/index.html');
console.log('   - best-things-to-do-in-paris/index.html');
console.log('   - blogs/index.html');
console.log('   - sitemap.xml');
console.log('   - robots.txt');
console.log('\n🔍 Each HTML file contains:');
console.log('   - Unique SEO title and description');
console.log('   - Canonical URLs');
console.log('   - Open Graph tags');
console.log('   - Proper meta keywords');

// Show example of generated HTML
console.log('\n📝 Example - Tokyo page HTML:');
const tokyoHTML = generateSEOHTML({ path: '/best-things-to-do-in-tokyo' }, sampleHTML);
console.log(tokyoHTML.split('<body>')[0] + '<body>\n  <!-- Page content here -->\n</body>\n</html>');