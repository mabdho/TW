/**
 * Sitemap indexing automation for TravelWanders
 * Automatically submits sitemaps to search engines
 */

import { Request, Response } from 'express';

export interface SearchEngineEndpoint {
  name: string;
  url: string;
  enabled: boolean;
}

const SEARCH_ENGINE_ENDPOINTS: SearchEngineEndpoint[] = [
  {
    name: 'Google',
    url: 'https://www.google.com/ping?sitemap=',
    enabled: false // Deprecated in 2023 - use Google Search Console instead
  },
  {
    name: 'Bing',
    url: 'https://www.bing.com/ping?sitemap=',
    enabled: false // Discontinued in 2022 - use Bing Webmaster Tools instead
  },
  {
    name: 'Yandex',
    url: 'https://webmaster.yandex.com/ping?sitemap=',
    enabled: true // Still supported
  },
  {
    name: 'Baidu',
    url: 'https://ping.baidu.com/ping/RPC2',
    enabled: false // Requires special handling
  }
];

/**
 * Submit sitemap to search engines
 * 
 * Note: Google and Bing have deprecated their ping endpoints:
 * - Google: Use Google Search Console for manual sitemap submission
 * - Bing: Use Bing Webmaster Tools for manual sitemap submission
 * - Yandex: Still supports automated ping submissions
 */
export async function submitSitemapToSearchEngines(sitemapUrl: string): Promise<{
  success: boolean;
  results: Array<{
    searchEngine: string;
    success: boolean;
    error?: string;
  }>;
}> {
  const results = [];
  
  for (const endpoint of SEARCH_ENGINE_ENDPOINTS) {
    if (!endpoint.enabled) continue;
    
    try {
      const pingUrl = `${endpoint.url}${encodeURIComponent(sitemapUrl)}`;
      const response = await fetch(pingUrl, {
        method: 'GET',
        headers: {
          'User-Agent': 'TravelWanders SEO Bot 1.0'
        }
      });
      
      if (response.ok) {
        results.push({
          searchEngine: endpoint.name,
          success: true
        });
        console.log(`✅ Successfully submitted sitemap to ${endpoint.name}`);
      } else {
        results.push({
          searchEngine: endpoint.name,
          success: false,
          error: `HTTP ${response.status}: ${response.statusText}`
        });
        console.log(`❌ Failed to submit sitemap to ${endpoint.name}: ${response.status}`);
      }
    } catch (error) {
      results.push({
        searchEngine: endpoint.name,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      console.log(`❌ Error submitting sitemap to ${endpoint.name}:`, error);
    }
  }
  
  const allSuccessful = results.every(result => result.success);
  
  return {
    success: allSuccessful,
    results
  };
}

/**
 * Schedule automatic sitemap submission
 */
export function scheduleAutomaticSitemapSubmission(intervalHours: number = 24): NodeJS.Timer {
  console.log(`📅 Scheduling automatic sitemap submission every ${intervalHours} hours`);
  
  return setInterval(async () => {
    try {
      const sitemapUrl = 'https://travelwanders.com/sitemap.xml';
      console.log('🔄 Running scheduled sitemap submission...');
      
      const result = await submitSitemapToSearchEngines(sitemapUrl);
      
      if (result.success) {
        console.log('✅ Scheduled sitemap submission completed successfully');
      } else {
        console.log('⚠️ Scheduled sitemap submission completed with some failures');
      }
    } catch (error) {
      console.error('❌ Error during scheduled sitemap submission:', error);
    }
  }, intervalHours * 60 * 60 * 1000); // Convert hours to milliseconds
}

/**
 * Manual sitemap submission endpoint
 */
export async function manualSitemapSubmission(req: Request, res: Response): Promise<void> {
  try {
    const { sitemapUrl } = req.body;
    
    if (!sitemapUrl) {
      res.status(400).json({
        success: false,
        error: 'Sitemap URL is required'
      });
      return;
    }
    
    console.log(`📤 Manual sitemap submission requested for: ${sitemapUrl}`);
    
    const result = await submitSitemapToSearchEngines(sitemapUrl);
    
    res.json({
      success: result.success,
      message: result.success 
        ? 'Sitemap submitted successfully to all search engines'
        : 'Sitemap submission completed with some failures',
      results: result.results
    });
    
  } catch (error) {
    console.error('Error during manual sitemap submission:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error during sitemap submission'
    });
  }
}

/**
 * Get sitemap indexing status
 */
export async function getSitemapIndexingStatus(req: Request, res: Response): Promise<void> {
  try {
    const enabledEngines = SEARCH_ENGINE_ENDPOINTS.filter(e => e.enabled);
    
    res.json({
      success: true,
      searchEngines: enabledEngines.map(engine => ({
        name: engine.name,
        enabled: engine.enabled,
        endpoint: engine.url
      })),
      lastSubmission: new Date().toISOString(), // In production, store actual last submission time
      automaticSubmission: true,
      intervalHours: 24
    });
    
  } catch (error) {
    console.error('Error getting sitemap indexing status:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}

/**
 * Initialize sitemap indexing on server start
 */
export function initializeSitemapIndexing(): void {
  console.log('🚀 Initializing sitemap indexing automation...');
  console.log('📝 Note: Google and Bing ping endpoints deprecated - use their webmaster tools for manual submission');
  
  // Schedule automatic submissions
  scheduleAutomaticSitemapSubmission(24); // Every 24 hours
  
  // Submit immediately on startup
  setTimeout(async () => {
    try {
      const sitemapUrl = 'https://travelwanders.com/sitemap.xml';
      console.log('🎯 Initial sitemap submission on startup (Yandex only)...');
      
      const result = await submitSitemapToSearchEngines(sitemapUrl);
      
      if (result.success) {
        console.log('✅ Initial sitemap submission completed successfully');
      } else {
        console.log('⚠️ Initial sitemap submission completed - only active engines processed');
      }
    } catch (error) {
      console.error('❌ Error during initial sitemap submission:', error);
    }
  }, 5000); // Wait 5 seconds after startup
}