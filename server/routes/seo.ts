/**
 * SEO API routes for TravelWanders
 * Handles SEO validation, sitemap generation, and analytics
 */

import { Request, Response } from 'express';
import { validateSEO } from '../utils/seoValidation';
import { autoGenerateCitySEO, autoGenerateBlogSEO, updateSitemap, getSEOAnalytics } from '../functions/autoSEO';
import { manualSitemapSubmission, getSitemapIndexingStatus } from '../utils/sitemapIndexing';

/**
 * POST /api/seo/validate
 * Validate SEO data for content
 */
export async function validateSEOData(req: Request, res: Response) {
  try {
    const { seoData, contentData, contentType } = req.body;
    
    if (!seoData || !contentData || !contentType) {
      return res.status(400).json({
        error: 'Missing required fields: seoData, contentData, contentType'
      });
    }
    
    // Validate SEO data
    const validation = validateSEO(seoData, contentData, contentType);
    
    res.json(validation);
  } catch (error) {
    console.error('Error validating SEO data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * GET /api/seo/sitemap.xml
 * Generate and return XML sitemap
 */
export async function getSitemap(req: Request, res: Response) {
  try {
    // Generate sitemap on-demand instead of relying on Firestore
    const fs = await import('fs/promises');
    const path = await import('path');
    
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
    const baseUrl = req.headers.host?.includes('localhost') ? 'http://localhost:5000' : 'https://travelwanders.com';
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
    
    sitemapXml += `
</urlset>`;
    
    res.set('Content-Type', 'application/xml');
    res.send(sitemapXml);
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * POST /api/seo/generate/city
 * Generate SEO data for a city
 */
export async function generateCitySEO(req: Request, res: Response) {
  try {
    const { cityId } = req.params;
    const cityData = req.body;
    
    if (!cityId || !cityData) {
      return res.status(400).json({
        error: 'City ID and data required'
      });
    }
    
    // Generate SEO data
    const seoData = await autoGenerateCitySEO(cityId, cityData);
    
    res.json({
      success: true,
      seoData
    });
  } catch (error) {
    console.error('Error generating city SEO:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * POST /api/seo/generate/blog
 * Generate SEO data for a blog post
 */
export async function generateBlogSEO(req: Request, res: Response) {
  try {
    const { blogId } = req.params;
    const blogData = req.body;
    
    if (!blogId || !blogData) {
      return res.status(400).json({
        error: 'Blog ID and data required'
      });
    }
    
    // Generate SEO data
    const seoData = await autoGenerateBlogSEO(blogId, blogData);
    
    res.json({
      success: true,
      seoData
    });
  } catch (error) {
    console.error('Error generating blog SEO:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * POST /api/seo/update/sitemap
 * Update sitemap manually
 */
export async function updateSitemapManually(req: Request, res: Response) {
  try {
    await updateSitemap();
    
    res.json({
      success: true,
      message: 'Sitemap updated successfully'
    });
  } catch (error) {
    console.error('Error updating sitemap:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * GET /api/seo/analytics
 * Get SEO analytics data
 */
export async function getSEOAnalyticsData(req: Request, res: Response) {
  try {
    const analytics = await getSEOAnalytics();
    
    res.json(analytics);
  } catch (error) {
    console.error('Error getting SEO analytics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * POST /api/seo/batch/cities
 * Batch update SEO for all cities
 */
export async function batchUpdateCitiesSEO(req: Request, res: Response) {
  try {
    // This is a long-running operation, so we'll start it and return immediately
    res.json({
      success: true,
      message: 'Batch SEO update started for cities'
    });
    
    // Start batch update in background
    const { batchUpdateCitySEO } = await import('../functions/autoSEO');
    batchUpdateCitySEO().catch(error => {
      console.error('Error in batch city SEO update:', error);
    });
    
  } catch (error) {
    console.error('Error starting batch city SEO update:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * POST /api/seo/batch/blogs
 * Batch update SEO for all blogs
 */
export async function batchUpdateBlogsSEO(req: Request, res: Response) {
  try {
    // This is a long-running operation, so we'll start it and return immediately
    res.json({
      success: true,
      message: 'Batch SEO update started for blogs'
    });
    
    // Start batch update in background
    const { batchUpdateBlogSEO } = await import('../functions/autoSEO');
    batchUpdateBlogSEO().catch(error => {
      console.error('Error in batch blog SEO update:', error);
    });
    
  } catch (error) {
    console.error('Error starting batch blog SEO update:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * GET /api/seo/robots.txt
 * Generate robots.txt file
 */
export async function getRobotsTxt(req: Request, res: Response) {
  try {
    const baseUrl = req.headers.host?.includes('localhost') ? 'http://localhost:5000' : 'https://travelwanders.com';
    const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin
Disallow: /api/

# Allow important pages
Allow: /
Allow: /destinations
Allow: /blog
Allow: /best-things-to-do-in-*

# Cache directives
Cache-Control: public, max-age=86400
`;
    
    res.set('Content-Type', 'text/plain');
    res.send(robotsTxt);
  } catch (error) {
    console.error('Error generating robots.txt:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * POST /api/seo/submit/sitemap
 * Submit sitemap to search engines manually
 */
export async function submitSitemapManually(req: Request, res: Response) {
  await manualSitemapSubmission(req, res);
}

/**
 * GET /api/seo/indexing/status
 * Get sitemap indexing status
 */
export async function getSitemapIndexingStatusRoute(req: Request, res: Response) {
  await getSitemapIndexingStatus(req, res);
}