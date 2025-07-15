/**
 * Hydration Validation Hooks for TravelWanders
 * Ensures all new content maintains perfect hydration compliance
 */

import { execSync } from 'child_process';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Validate hydration compliance for new city pages
 */
export async function validateCityHydration(cityName: string): Promise<boolean> {
  console.log(`🔍 Validating hydration compliance for city: ${cityName}`);
  
  try {
    const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
    const htmlPath = `dist/public/best-things-to-do-in-${citySlug}-seo.html`;
    
    // Check if HTML file exists
    try {
      await fs.access(htmlPath);
    } catch {
      console.log(`⚠️  HTML file not found for ${cityName}: ${htmlPath}`);
      return false;
    }
    
    // Run hydration audit to validate the city
    try {
      execSync('node hydration-audit.js', { stdio: 'pipe' });
      console.log(`✅ Hydration validation passed for ${cityName}`);
      return true;
    } catch (error) {
      console.log(`❌ Hydration validation failed for ${cityName}`);
      return false;
    }
    
  } catch (error) {
    console.error(`❌ Error validating city hydration for ${cityName}:`, error.message);
    return false;
  }
}

/**
 * Validate hydration compliance for new blog posts
 */
export async function validateBlogHydration(blogData: { id: string; title: string; slug?: string }): Promise<boolean> {
  console.log(`🔍 Validating hydration compliance for blog: ${blogData.title}`);
  
  try {
    const blogSlug = blogData.slug || blogData.id;
    const htmlPath = `dist/public/blog/${blogSlug}.html`;
    
    // Check if HTML file exists
    try {
      await fs.access(htmlPath);
    } catch {
      console.log(`⚠️  Blog HTML file not found: ${htmlPath}`);
      return false;
    }
    
    // Run hydration audit to validate the blog
    try {
      execSync('node hydration-audit.js', { stdio: 'pipe' });
      console.log(`✅ Blog hydration validation passed for ${blogData.title}`);
      return true;
    } catch (error) {
      console.log(`❌ Blog hydration validation failed for ${blogData.title}`);
      return false;
    }
    
  } catch (error) {
    console.error(`❌ Error validating blog hydration for ${blogData.title}:`, error.message);
    return false;
  }
}

/**
 * Validate hydration compliance for page modifications
 */
export async function validatePageModification(pageType: string, pageData?: any): Promise<boolean> {
  console.log(`🔍 Validating hydration compliance after ${pageType} modification`);
  
  try {
    // Run full hydration audit after any page modification
    execSync('node hydration-audit.js', { stdio: 'pipe' });
    console.log(`✅ Page modification hydration validation passed for ${pageType}`);
    return true;
  } catch (error) {
    console.log(`❌ Page modification hydration validation failed for ${pageType}`);
    return false;
  }
}

/**
 * Pre-generation validation to ensure data consistency
 */
export async function validatePreGeneration(pageType: string, pageData: any): Promise<boolean> {
  console.log(`🔍 Pre-generation validation for ${pageType}...`);
  
  // Define required fields for different page types
  const validationRules = {
    city: ['name', 'country', 'content'],
    blog: ['title', 'content', 'excerpt', 'category'],
    home: [],
    'blogs-listing': []
  };
  
  const requiredFields = validationRules[pageType] || [];
  const missingFields = requiredFields.filter(field => !pageData[field]);
  
  if (missingFields.length > 0) {
    console.error(`❌ Pre-generation validation failed for ${pageType}. Missing fields: ${missingFields.join(', ')}`);
    return false;
  }
  
  // Validate SEO-critical fields
  if (pageType === 'city') {
    if (!pageData.name || pageData.name.trim().length === 0) {
      console.error(`❌ City name is required for hydration compliance`);
      return false;
    }
    if (!pageData.country || pageData.country.trim().length === 0) {
      console.error(`❌ Country is required for hydration compliance`);
      return false;
    }
  }
  
  if (pageType === 'blog') {
    if (!pageData.title || pageData.title.trim().length === 0) {
      console.error(`❌ Blog title is required for hydration compliance`);
      return false;
    }
    if (!pageData.excerpt || pageData.excerpt.trim().length === 0) {
      console.error(`❌ Blog excerpt is required for hydration compliance`);
      return false;
    }
  }
  
  console.log(`✅ Pre-generation validation passed for ${pageType}`);
  return true;
}

/**
 * Post-generation validation to ensure hydration compliance
 */
export async function validatePostGeneration(pageType: string, pageData: any): Promise<boolean> {
  console.log(`🔍 Post-generation validation for ${pageType}...`);
  
  try {
    // Run hydration audit to ensure the new content doesn't break anything
    execSync('node hydration-audit.js', { stdio: 'pipe' });
    console.log(`✅ Post-generation validation passed for ${pageType}`);
    return true;
  } catch (error) {
    console.error(`❌ Post-generation validation failed for ${pageType}:`, error.message);
    return false;
  }
}

/**
 * Hydration compliance enforcement for all content operations
 */
export class HydrationEnforcement {
  static async enforceForCity(cityData: any): Promise<void> {
    console.log(`🔒 Enforcing hydration compliance for city: ${cityData.name}`);
    
    // Pre-generation validation
    const preValid = await validatePreGeneration('city', cityData);
    if (!preValid) {
      throw new Error(`Pre-generation validation failed for city: ${cityData.name}`);
    }
    
    // Note: HTML generation happens in between
    // Post-generation validation happens automatically via saveHtmlFile
  }
  
  static async enforceForBlog(blogData: any): Promise<void> {
    console.log(`🔒 Enforcing hydration compliance for blog: ${blogData.title}`);
    
    // Pre-generation validation
    const preValid = await validatePreGeneration('blog', blogData);
    if (!preValid) {
      throw new Error(`Pre-generation validation failed for blog: ${blogData.title}`);
    }
    
    // Note: HTML generation happens in between
    // Post-generation validation happens automatically via saveHtmlFile
  }
  
  static async enforceForPageUpdate(pageType: string, pageData?: any): Promise<void> {
    console.log(`🔒 Enforcing hydration compliance for ${pageType} update`);
    
    // Validate that the update doesn't break hydration
    const valid = await validatePageModification(pageType, pageData);
    if (!valid) {
      throw new Error(`Page modification broke hydration compliance for ${pageType}`);
    }
  }
}

/**
 * Utility to run full hydration audit and return results
 */
export async function runHydrationAudit(): Promise<{ success: boolean; details: string }> {
  try {
    const result = execSync('node hydration-audit.js', { encoding: 'utf8' });
    const success = result.includes('Enterprise-level hydration compliance: 100.0%');
    
    return {
      success,
      details: result
    };
  } catch (error) {
    return {
      success: false,
      details: error.message
    };
  }
}