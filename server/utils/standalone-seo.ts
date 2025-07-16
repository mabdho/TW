/**
 * Standalone SEO utilities for generating sitemap and robots.txt
 * without requiring Express request/response objects
 */

import fs from 'fs/promises';
import path from 'path';

export async function generateSitemap(): Promise<string> {
  try {
    // Get all city files from filesystem
    const citiesDir = path.join(process.cwd(), 'client/src/pages/cities');
    const cityFiles = await fs.readdir(citiesDir);
    const cities = cityFiles
      .filter(file => file.endsWith('.tsx'))
      .map(file => {
        const cityName = file.replace('.tsx', '');
        // Convert PascalCase to kebab-case properly
        const cityPath = `/best-things-to-do-in-${cityName.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')}`;
        return {
          name: cityName,
          path: cityPath
        };
      });
    
    // Get all blog files from filesystem
    const blogsDir = path.join(process.cwd(), 'client/src/blogs');
    let blogs = [];
    try {
      const blogFiles = await fs.readdir(blogsDir);
      blogs = blogFiles
        .filter(file => file.endsWith('.tsx') && file !== 'index.ts')
        .map(file => {
          const blogId = file.replace('.tsx', '');
          return {
            id: blogId,
            path: `/blog/${blogId}`
          };
        });
    } catch (error) {
      console.log('No blogs directory or empty blogs');
    }
    
    // Generate sitemap XML
    const baseUrl = 'https://travelwanders.com';
    const currentDate = new Date().toISOString().split('T')[0];
    
    let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/destinations</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/blogs</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    
    // Add city pages
    cities.forEach(city => {
      sitemapXml += `
  <url>
    <loc>${baseUrl}${city.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
    
    // Add blog pages
    blogs.forEach(blog => {
      sitemapXml += `
  <url>
    <loc>${baseUrl}${blog.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
    
    // Add legal pages
    const legalPages = [
      { path: '/privacy-policy', priority: '0.3' },
      { path: '/terms-of-service', priority: '0.3' },
      { path: '/cookie-policy', priority: '0.3' }
    ];
    
    legalPages.forEach(page => {
      sitemapXml += `
  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });
    
    sitemapXml += `
</urlset>`;
    
    return sitemapXml;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    throw error;
  }
}

export function generateRobotsTxt(): string {
  const baseUrl = 'https://travelwanders.com';
  
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay to be respectful to servers
Crawl-delay: 1

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Disallow certain paths that shouldn't be indexed
Disallow: /admin
Disallow: /api/
Disallow: /.well-known/
Disallow: /temp/
Disallow: /cache/
Disallow: /logs/

# Allow access to important files
Allow: /robots.txt
Allow: /sitemap.xml
Allow: /favicon.ico
Allow: /favicon.svg
`;
}