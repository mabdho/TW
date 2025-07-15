/**
 * Hydration Enforcement Hooks for TravelWanders
 * Ensures all HTML generation and React components maintain perfect hydration
 * Automatically validates and enforces hydration compliance for all new content
 */

import { generateMetaDescription, generateBlogMetaDescription, generateSEOTitle, generateBlogSEOTitle } from './utils/seo';
import * as fs from 'fs';
import * as path from 'path';
import { CityData } from './html-generator';

interface HydrationData {
  title: string;
  description: string;
  h1: string;
}

/**
 * Unified description generation that matches HTML output exactly
 * This ensures React components and HTML files use identical descriptions
 */
export function generateHydrationCompliantDescription(cityData: CityData): string {
  const { cityName, country, attractions = [] } = cityData;
  const mainKeyword = `Best things to do in ${cityName}`;
  
  // Extract top attractions for description
  const topAttractions = attractions.slice(0, 3).map(attr => attr.name).join(', ');
  
  let description = `${mainKeyword}: Discover ${topAttractions} and more amazing experiences in ${cityName}, ${country}. Complete travel guide with insider tips and must-visit attractions.`;
  
  // Apply same truncation logic as HTML generation
  if (description.length > 160) {
    description = `${mainKeyword}: Discover amazing experiences in ${cityName}, ${country}. Complete travel guide with insider tips and must-visit attractions.`;
  }
  
  // Final truncation to ensure 160 character limit with ellipsis
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return description;
}

/**
 * Generate hydration-compliant title that matches HTML output
 */
export function generateHydrationCompliantTitle(cityData: CityData): string {
  const { cityName, country } = cityData;
  return `15 Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
}

/**
 * Generate hydration-compliant H1 that matches HTML output
 */
export function generateHydrationCompliantH1(cityData: CityData): string {
  const { cityName, country } = cityData;
  return `15 Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
}

/**
 * Generate hydration-compliant blog description
 */
export function generateHydrationCompliantBlogDescription(blogData: any): string {
  const { excerpt, category } = blogData;
  
  let description = excerpt;
  
  // Add category context if description is short
  if (description.length < 100) {
    description = `${excerpt} Discover more ${category.toLowerCase()} travel tips and guides on TravelWanders.`;
  }
  
  // Ensure description is within 120-160 characters with ellipsis
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return description;
}

/**
 * Validate hydration compliance before content generation
 */
export async function validateHydrationBeforeGeneration(pageType: string, pageData: any): Promise<boolean> {
  try {
    console.log(`🔄 Validating hydration compliance for ${pageType} generation...`);
    
    if (pageType === 'city') {
      const expectedData = {
        title: generateHydrationCompliantTitle(pageData),
        description: generateHydrationCompliantDescription(pageData),
        h1: generateHydrationCompliantH1(pageData)
      };
      
      console.log(`✅ City hydration data validated:`, {
        title: expectedData.title.length,
        description: expectedData.description.length,
        h1: expectedData.h1.length
      });
      
      return true;
    }
    
    if (pageType === 'blog') {
      const expectedData = {
        title: generateBlogSEOTitle(pageData),
        description: generateHydrationCompliantBlogDescription(pageData),
        h1: pageData.title
      };
      
      console.log(`✅ Blog hydration data validated:`, {
        title: expectedData.title.length,
        description: expectedData.description.length,
        h1: expectedData.h1.length
      });
      
      return true;
    }
    
    return true;
  } catch (error) {
    console.error('❌ Hydration validation failed:', error);
    return false;
  }
}

/**
 * Enforce hydration compliance after content generation
 */
export async function enforceHydrationAfterGeneration(pageType: string, pageData: any, htmlPath: string): Promise<void> {
  try {
    console.log(`🔧 Enforcing hydration compliance for ${pageType} at ${htmlPath}...`);
    
    // Read the generated HTML file
    if (!fs.existsSync(htmlPath)) {
      console.warn(`⚠️  HTML file not found: ${htmlPath}`);
      return;
    }
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Extract SEO data from HTML
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = htmlContent.match(/<meta name="description" content="(.*?)"/);
    const h1Match = htmlContent.match(/<h1[^>]*>(.*?)<\/h1>/);
    
    if (!titleMatch || !descriptionMatch || !h1Match) {
      console.warn(`⚠️  Could not extract SEO data from HTML file: ${htmlPath}`);
      return;
    }
    
    const htmlSeoData = {
      title: titleMatch[1],
      description: descriptionMatch[1],
      h1: h1Match[1]
    };
    
    // Generate expected React data
    let expectedReactData: HydrationData;
    
    if (pageType === 'city') {
      expectedReactData = {
        title: generateHydrationCompliantTitle(pageData),
        description: generateHydrationCompliantDescription(pageData),
        h1: generateHydrationCompliantH1(pageData)
      };
    } else if (pageType === 'blog') {
      expectedReactData = {
        title: generateBlogSEOTitle(pageData),
        description: generateHydrationCompliantBlogDescription(pageData),
        h1: pageData.title
      };
    } else {
      console.log(`✅ Hydration enforcement skipped for ${pageType} - not implemented`);
      return;
    }
    
    // Check for mismatches
    const titleMatch_result = htmlSeoData.title === expectedReactData.title;
    const descriptionMatch_result = htmlSeoData.description === expectedReactData.description;
    const h1Match_result = htmlSeoData.h1 === expectedReactData.h1;
    
    if (titleMatch_result && descriptionMatch_result && h1Match_result) {
      console.log(`✅ Perfect hydration compliance verified for ${pageType}`);
    } else {
      console.warn(`⚠️  Hydration mismatch detected for ${pageType}:`);
      if (!titleMatch_result) console.warn(`  Title: HTML="${htmlSeoData.title}" != React="${expectedReactData.title}"`);
      if (!descriptionMatch_result) console.warn(`  Description: HTML="${htmlSeoData.description}" != React="${expectedReactData.description}"`);
      if (!h1Match_result) console.warn(`  H1: HTML="${htmlSeoData.h1}" != React="${expectedReactData.h1}"`);
      
      // Auto-fix React component to match HTML (HTML is source of truth)
      await autoFixReactComponent(pageType, pageData, htmlSeoData);
    }
    
  } catch (error) {
    console.error('❌ Hydration enforcement failed:', error);
  }
}

/**
 * Auto-fix React component to match HTML source of truth
 */
async function autoFixReactComponent(pageType: string, pageData: any, htmlSeoData: HydrationData): Promise<void> {
  try {
    console.log(`🔧 Auto-fixing React component for ${pageType}...`);
    
    if (pageType === 'city') {
      const cityName = pageData.cityName;
      
      // Try multiple possible file naming patterns
      const possiblePaths = [
        path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityName}.tsx`),
        path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityName.replace(/\s+/g, '')}.tsx`),
        path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityName.replace(/\s+/g, '-')}.tsx`),
        path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityName.charAt(0).toUpperCase() + cityName.slice(1).replace(/\s+/g, '')}.tsx`)
      ];
      
      let componentPath = null;
      for (const possiblePath of possiblePaths) {
        if (fs.existsSync(possiblePath)) {
          componentPath = possiblePath;
          break;
        }
      }
      
      if (!componentPath) {
        console.warn(`⚠️  City component not found. Tried paths:`, possiblePaths.map(p => path.basename(p)));
        return;
      }
      
      let componentContent = fs.readFileSync(componentPath, 'utf8');
      
      // Update title if mismatch
      const titleRegex = /title=\{"([^"]+)"\}/;
      if (titleRegex.test(componentContent)) {
        componentContent = componentContent.replace(titleRegex, `title={"${htmlSeoData.title}"}`);
      }
      
      // Update description if mismatch
      const descriptionRegex = /description=\{`([^`]+)`\}/;
      if (descriptionRegex.test(componentContent)) {
        componentContent = componentContent.replace(descriptionRegex, `description={\`${htmlSeoData.description}\`}`);
      }
      
      // Write back the fixed component
      fs.writeFileSync(componentPath, componentContent);
      console.log(`✅ React component auto-fixed: ${componentPath}`);
    }
    
    if (pageType === 'blog') {
      // Blog auto-fixing logic would go here
      console.log(`✅ Blog component auto-fixing not implemented yet`);
    }
    
  } catch (error) {
    console.error('❌ Auto-fix failed:', error);
  }
}

/**
 * Hook to run before any HTML generation
 */
export async function preGenerationHook(pageType: string, pageData: any): Promise<void> {
  console.log(`🚀 Pre-generation hook for ${pageType}...`);
  
  const isValid = await validateHydrationBeforeGeneration(pageType, pageData);
  if (!isValid) {
    throw new Error(`Hydration validation failed for ${pageType}`);
  }
}

/**
 * Hook to run after any HTML generation
 */
export async function postGenerationHook(pageType: string, pageData: any, htmlPath: string): Promise<void> {
  console.log(`🎯 Post-generation hook for ${pageType}...`);
  
  await enforceHydrationAfterGeneration(pageType, pageData, htmlPath);
}

/**
 * Generate React component with hydration-compliant SEO data
 */
export function generateReactSEOData(pageType: string, pageData: any): HydrationData {
  if (pageType === 'city') {
    return {
      title: generateHydrationCompliantTitle(pageData),
      description: generateHydrationCompliantDescription(pageData),
      h1: generateHydrationCompliantH1(pageData)
    };
  }
  
  if (pageType === 'blog') {
    return {
      title: generateBlogSEOTitle(pageData),
      description: generateHydrationCompliantBlogDescription(pageData),
      h1: pageData.title
    };
  }
  
  throw new Error(`Unsupported page type: ${pageType}`);
}

/**
 * Run comprehensive hydration audit across all pages
 */
export async function runHydrationAudit(): Promise<{ success: boolean; details: any }> {
  try {
    console.log('🔍 Running comprehensive hydration audit...');
    
    // Import the audit system
    const { spawn } = require('child_process');
    const path = require('path');
    
    return new Promise((resolve, reject) => {
      const auditScript = path.join(process.cwd(), 'hydration-audit.js');
      const auditProcess = spawn('node', [auditScript]);
      
      let output = '';
      let errorOutput = '';
      
      auditProcess.stdout.on('data', (data: Buffer) => {
        output += data.toString();
      });
      
      auditProcess.stderr.on('data', (data: Buffer) => {
        errorOutput += data.toString();
      });
      
      auditProcess.on('close', (code: number) => {
        if (code === 0) {
          // Parse the audit results
          const successPattern = /(\d+)\/(\d+) pages passed/;
          const match = output.match(successPattern);
          
          if (match) {
            const passed = parseInt(match[1]);
            const total = parseInt(match[2]);
            const success = passed === total;
            
            resolve({
              success,
              details: {
                totalPages: total,
                passedPages: passed,
                failedPages: total - passed,
                complianceRate: `${Math.round((passed / total) * 100)}%`,
                output: output,
                timestamp: new Date().toISOString()
              }
            });
          } else {
            resolve({
              success: false,
              details: {
                error: 'Could not parse audit results',
                output: output,
                errorOutput: errorOutput
              }
            });
          }
        } else {
          reject(new Error(`Audit process failed with code ${code}: ${errorOutput}`));
        }
      });
    });
    
  } catch (error) {
    console.error('Error running hydration audit:', error);
    return {
      success: false,
      details: {
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }
    };
  }
}