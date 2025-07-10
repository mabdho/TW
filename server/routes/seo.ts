/**
 * SEO API routes for TravelWanders
 * Handles SEO validation, sitemap generation, and analytics
 */

import { Request, Response } from 'express';
import { db } from '../firebase-config';
import { validateSEO } from '../utils/seoValidation';
import { autoGenerateCitySEO, autoGenerateBlogSEO, updateSitemap, getSEOAnalytics } from '../functions/autoSEO';

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
    // Get sitemap from Firestore
    const sitemapDoc = await db.collection('system').doc('sitemap').get();
    
    if (!sitemapDoc.exists) {
      // Generate sitemap if it doesn't exist
      await updateSitemap();
      const newSitemapDoc = await db.collection('system').doc('sitemap').get();
      
      if (newSitemapDoc.exists) {
        const sitemapData = newSitemapDoc.data();
        res.set('Content-Type', 'application/xml');
        res.send(sitemapData.xml);
      } else {
        res.status(404).json({ error: 'Sitemap not found' });
      }
    } else {
      const sitemapData = sitemapDoc.data();
      res.set('Content-Type', 'application/xml');
      res.send(sitemapData.xml);
    }
  } catch (error) {
    console.error('Error getting sitemap:', error);
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
    const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Sitemaps
Sitemap: https://travelwanders.com/api/seo/sitemap.xml

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