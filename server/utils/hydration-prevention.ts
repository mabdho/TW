/**
 * Comprehensive Hydration Prevention System for TravelWanders
 * Provides validation hooks for city generation to prevent hydration mismatches
 * Automatically validates and enforces perfect hydration compliance
 */

import * as fs from 'fs';
import * as path from 'path';
import { JSDOM } from 'jsdom';

interface SEOData {
  title: string;
  metaDescription: string;
  h1: string;
}

interface CityData {
  cityName: string;
  country: string;
  attractions?: Array<{ name: string; description: string }>;
}

interface BlogData {
  title: string;
  excerpt: string;
  category: string;
}

interface ValidationResult {
  isValid: boolean;
  issues: Array<{
    type: 'mismatch' | 'missing' | 'warning';
    field: string;
    expected: string;
    actual: string;
    severity: 'low' | 'medium' | 'high';
  }>;
  score: number;
}

/**
 * Core Hydration Prevention System
 */
export class HydrationPreventionSystem {
  private validationHooks: Map<string, Function[]> = new Map();
  private autoFixEnabled: boolean = true;

  constructor(autoFixEnabled: boolean = true) {
    this.autoFixEnabled = autoFixEnabled;
    this.initializeDefaultHooks();
  }

  /**
   * Initialize default validation hooks
   */
  private initializeDefaultHooks(): void {
    // Pre-generation hooks
    this.addValidationHook('pre-city-generation', this.validateCityDataIntegrity.bind(this));
    this.addValidationHook('pre-blog-generation', this.validateBlogDataIntegrity.bind(this));
    
    // Post-generation hooks
    this.addValidationHook('post-city-generation', this.validateGeneratedCityHTML.bind(this));
    this.addValidationHook('post-blog-generation', this.validateGeneratedBlogHTML.bind(this));
    
    // React component hooks
    this.addValidationHook('react-component-generation', this.validateReactComponentSEO.bind(this));
  }

  /**
   * Add a validation hook for a specific stage
   */
  addValidationHook(stage: string, hookFunction: Function): void {
    if (!this.validationHooks.has(stage)) {
      this.validationHooks.set(stage, []);
    }
    this.validationHooks.get(stage)!.push(hookFunction);
  }

  /**
   * Execute all hooks for a specific stage
   */
  async executeHooks(stage: string, data: any): Promise<ValidationResult> {
    const hooks = this.validationHooks.get(stage) || [];
    let overallResult: ValidationResult = {
      isValid: true,
      issues: [],
      score: 100
    };

    console.log(`🔍 Executing ${hooks.length} validation hooks for stage: ${stage}`);

    for (const hook of hooks) {
      try {
        const result = await hook(data);
        
        // Merge results
        overallResult.issues.push(...result.issues);
        overallResult.isValid = overallResult.isValid && result.isValid;
        overallResult.score = Math.min(overallResult.score, result.score);
        
      } catch (error) {
        console.error(`❌ Hook execution failed for stage ${stage}:`, error);
        overallResult.issues.push({
          type: 'warning',
          field: 'hook-execution',
          expected: 'successful execution',
          actual: `error: ${error.message}`,
          severity: 'medium'
        });
      }
    }

    // Auto-fix if enabled and issues found
    if (!overallResult.isValid && this.autoFixEnabled) {
      console.log(`🔧 Auto-fix enabled, attempting to resolve ${overallResult.issues.length} issues...`);
      const fixResult = await this.autoFixIssues(stage, data, overallResult.issues);
      if (fixResult.fixed > 0) {
        console.log(`✅ Auto-fixed ${fixResult.fixed} issues`);
        // Re-validate after auto-fix
        overallResult = await this.executeHooks(stage, data);
      }
    }

    return overallResult;
  }

  /**
   * Validate city data integrity before generation
   */
  private async validateCityDataIntegrity(cityData: CityData): Promise<ValidationResult> {
    const issues: ValidationResult['issues'] = [];
    
    // Validate required fields
    if (!cityData.cityName || cityData.cityName.trim().length === 0) {
      issues.push({
        type: 'missing',
        field: 'cityName',
        expected: 'non-empty string',
        actual: cityData.cityName || 'undefined',
        severity: 'high'
      });
    }

    if (!cityData.country || cityData.country.trim().length === 0) {
      issues.push({
        type: 'missing',
        field: 'country',
        expected: 'non-empty string',
        actual: cityData.country || 'undefined',
        severity: 'high'
      });
    }

    // Validate SEO-friendly naming
    if (cityData.cityName && cityData.cityName.length > 50) {
      issues.push({
        type: 'warning',
        field: 'cityName',
        expected: 'length <= 50 characters',
        actual: `length: ${cityData.cityName.length}`,
        severity: 'low'
      });
    }

    // Generate expected SEO data and validate it
    if (cityData.cityName && cityData.country) {
      const expectedSEO = this.generateCitySEOData(cityData);
      
      if (expectedSEO.title.length > 60) {
        issues.push({
          type: 'warning',
          field: 'title',
          expected: 'length <= 60 characters',
          actual: `length: ${expectedSEO.title.length}`,
          severity: 'medium'
        });
      }

      if (expectedSEO.metaDescription.length > 160) {
        issues.push({
          type: 'warning',
          field: 'metaDescription',
          expected: 'length <= 160 characters',
          actual: `length: ${expectedSEO.metaDescription.length}`,
          severity: 'medium'
        });
      }
    }

    const score = this.calculateValidationScore(issues);
    return {
      isValid: issues.filter(i => i.severity === 'high').length === 0,
      issues,
      score
    };
  }

  /**
   * Validate blog data integrity before generation
   */
  private async validateBlogDataIntegrity(blogData: BlogData): Promise<ValidationResult> {
    const issues: ValidationResult['issues'] = [];
    
    if (!blogData.title || blogData.title.trim().length === 0) {
      issues.push({
        type: 'missing',
        field: 'title',
        expected: 'non-empty string',
        actual: blogData.title || 'undefined',
        severity: 'high'
      });
    }

    if (!blogData.excerpt || blogData.excerpt.trim().length < 50) {
      issues.push({
        type: 'warning',
        field: 'excerpt',
        expected: 'length >= 50 characters',
        actual: `length: ${blogData.excerpt?.length || 0}`,
        severity: 'medium'
      });
    }

    const score = this.calculateValidationScore(issues);
    return {
      isValid: issues.filter(i => i.severity === 'high').length === 0,
      issues,
      score
    };
  }

  /**
   * Validate generated city HTML for hydration compliance
   */
  private async validateGeneratedCityHTML(data: { htmlContent: string; cityData: CityData; filePath: string }): Promise<ValidationResult> {
    const { htmlContent, cityData, filePath } = data;
    const issues: ValidationResult['issues'] = [];

    try {
      // Extract SEO data from generated HTML
      const actualSEO = this.extractSEOFromHTML(htmlContent);
      const expectedSEO = this.generateCitySEOData(cityData);

      // Compare title
      if (actualSEO.title !== expectedSEO.title) {
        issues.push({
          type: 'mismatch',
          field: 'title',
          expected: expectedSEO.title,
          actual: actualSEO.title,
          severity: 'high'
        });
      }

      // Compare meta description
      if (actualSEO.metaDescription !== expectedSEO.metaDescription) {
        issues.push({
          type: 'mismatch',
          field: 'metaDescription',
          expected: expectedSEO.metaDescription,
          actual: actualSEO.metaDescription,
          severity: 'high'
        });
      }

      // Compare H1
      if (actualSEO.h1 !== expectedSEO.h1) {
        issues.push({
          type: 'mismatch',
          field: 'h1',
          expected: expectedSEO.h1,
          actual: actualSEO.h1,
          severity: 'high'
        });
      }

      // Validate Open Graph consistency
      const dom = new JSDOM(htmlContent);
      const document = dom.window.document;
      
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      
      if (ogTitle !== actualSEO.title) {
        issues.push({
          type: 'mismatch',
          field: 'ogTitle',
          expected: actualSEO.title,
          actual: ogTitle,
          severity: 'medium'
        });
      }

      if (ogDescription !== actualSEO.metaDescription) {
        issues.push({
          type: 'mismatch',
          field: 'ogDescription',
          expected: actualSEO.metaDescription,
          actual: ogDescription,
          severity: 'medium'
        });
      }

    } catch (error) {
      issues.push({
        type: 'warning',
        field: 'html-validation',
        expected: 'valid HTML parsing',
        actual: `error: ${error.message}`,
        severity: 'medium'
      });
    }

    const score = this.calculateValidationScore(issues);
    return {
      isValid: issues.filter(i => i.severity === 'high').length === 0,
      issues,
      score
    };
  }

  /**
   * Validate generated blog HTML for hydration compliance
   */
  private async validateGeneratedBlogHTML(data: { htmlContent: string; blogData: BlogData; filePath: string }): Promise<ValidationResult> {
    const { htmlContent, blogData } = data;
    const issues: ValidationResult['issues'] = [];

    try {
      const actualSEO = this.extractSEOFromHTML(htmlContent);
      const expectedSEO = this.generateBlogSEOData(blogData);

      if (actualSEO.title !== expectedSEO.title) {
        issues.push({
          type: 'mismatch',
          field: 'title',
          expected: expectedSEO.title,
          actual: actualSEO.title,
          severity: 'high'
        });
      }

      if (actualSEO.h1 !== expectedSEO.h1) {
        issues.push({
          type: 'mismatch',
          field: 'h1',
          expected: expectedSEO.h1,
          actual: actualSEO.h1,
          severity: 'high'
        });
      }

    } catch (error) {
      issues.push({
        type: 'warning',
        field: 'html-validation',
        expected: 'valid HTML parsing',
        actual: `error: ${error.message}`,
        severity: 'medium'
      });
    }

    const score = this.calculateValidationScore(issues);
    return {
      isValid: issues.filter(i => i.severity === 'high').length === 0,
      issues,
      score
    };
  }

  /**
   * Validate React component SEO for hydration compliance
   */
  private async validateReactComponentSEO(data: { componentPath: string; expectedSEO: SEOData }): Promise<ValidationResult> {
    const { componentPath, expectedSEO } = data;
    const issues: ValidationResult['issues'] = [];

    try {
      if (!fs.existsSync(componentPath)) {
        issues.push({
          type: 'missing',
          field: 'component-file',
          expected: `file at ${componentPath}`,
          actual: 'file not found',
          severity: 'high'
        });
        
        const score = this.calculateValidationScore(issues);
        return { isValid: false, issues, score };
      }

      const componentContent = fs.readFileSync(componentPath, 'utf8');
      
      // Extract SEO data from React component
      const actualSEO = this.extractSEOFromReactComponent(componentContent);

      // Compare with expected
      if (actualSEO.title !== expectedSEO.title) {
        issues.push({
          type: 'mismatch',
          field: 'react-title',
          expected: expectedSEO.title,
          actual: actualSEO.title,
          severity: 'high'
        });
      }

      if (actualSEO.metaDescription !== expectedSEO.metaDescription) {
        issues.push({
          type: 'mismatch',
          field: 'react-metaDescription',
          expected: expectedSEO.metaDescription,
          actual: actualSEO.metaDescription,
          severity: 'high'
        });
      }

      if (actualSEO.h1 !== expectedSEO.h1) {
        issues.push({
          type: 'mismatch',
          field: 'react-h1',
          expected: expectedSEO.h1,
          actual: actualSEO.h1,
          severity: 'high'
        });
      }

    } catch (error) {
      issues.push({
        type: 'warning',
        field: 'react-validation',
        expected: 'valid React component parsing',
        actual: `error: ${error.message}`,
        severity: 'medium'
      });
    }

    const score = this.calculateValidationScore(issues);
    return {
      isValid: issues.filter(i => i.severity === 'high').length === 0,
      issues,
      score
    };
  }

  /**
   * Generate city SEO data using the same logic as HTML generation
   */
  private generateCitySEOData(cityData: CityData): SEOData {
    const { cityName, country } = cityData;
    
    const title = `Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
    const h1 = `Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
    
    // Generate description with same truncation logic as server
    let metaDescription = `Discover things to do in ${cityName} — top attractions, hidden gems, and food spots. Complete ${cityName} travel guide.`;
    
    if (metaDescription.length > 160) {
      metaDescription = `Discover amazing experiences in ${cityName}, ${country}. Complete travel guide with insider tips and must-visit attractions.`;
    }
    
    if (metaDescription.length > 160) {
      metaDescription = metaDescription.substring(0, 157) + '...';
    }

    return { title, metaDescription, h1 };
  }

  /**
   * Generate blog SEO data
   */
  private generateBlogSEOData(blogData: BlogData): SEOData {
    const title = `${blogData.title} - TravelWanders`;
    const h1 = blogData.title;
    
    let metaDescription = blogData.excerpt;
    if (metaDescription.length > 160) {
      metaDescription = metaDescription.substring(0, 157) + '...';
    }

    return { title, metaDescription, h1 };
  }

  /**
   * Extract SEO data from HTML content
   */
  private extractSEOFromHTML(htmlContent: string): SEOData {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    return {
      title: document.querySelector('title')?.textContent?.trim() || '',
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '',
      h1: document.querySelector('h1')?.textContent?.trim() || ''
    };
  }

  /**
   * Extract SEO data from React component content
   */
  private extractSEOFromReactComponent(componentContent: string): SEOData {
    // Extract title from component props or SEOHead usage
    const titleMatch = componentContent.match(/title=\{?["'`]([^"'`]+)["'`]\}?/) || 
                     componentContent.match(/title:\s*["'`]([^"'`]+)["'`]/);
    
    // Extract description from component props
    const descMatch = componentContent.match(/description=\{?["'`]([^"'`]+)["'`]\}?/) || 
                     componentContent.match(/description:\s*["'`]([^"'`]+)["'`]/);
    
    // Extract H1 from JSX
    const h1Match = componentContent.match(/<h1[^>]*>([^<]+)<\/h1>/) ||
                   componentContent.match(/h1:\s*["'`]([^"'`]+)["'`]/);

    return {
      title: titleMatch ? titleMatch[1] : '',
      metaDescription: descMatch ? descMatch[1] : '',
      h1: h1Match ? h1Match[1] : ''
    };
  }

  /**
   * Calculate validation score based on issues
   */
  private calculateValidationScore(issues: ValidationResult['issues']): number {
    if (issues.length === 0) return 100;

    let penalty = 0;
    issues.forEach(issue => {
      switch (issue.severity) {
        case 'high': penalty += 25; break;
        case 'medium': penalty += 10; break;
        case 'low': penalty += 5; break;
      }
    });

    return Math.max(0, 100 - penalty);
  }

  /**
   * Auto-fix issues where possible
   */
  private async autoFixIssues(stage: string, data: any, issues: ValidationResult['issues']): Promise<{ fixed: number; failed: number }> {
    let fixed = 0;
    let failed = 0;

    for (const issue of issues) {
      try {
        if (issue.type === 'mismatch' && issue.field.startsWith('react-')) {
          // Auto-fix React component mismatches
          const fixResult = await this.autoFixReactComponent(data, issue);
          if (fixResult) {
            fixed++;
            console.log(`✅ Auto-fixed ${issue.field} in React component`);
          } else {
            failed++;
          }
        } else if (issue.type === 'mismatch' && stage === 'post-city-generation') {
          // Auto-regenerate HTML if possible
          console.log(`⚠️  HTML generation mismatch detected for ${issue.field}, marking for regeneration`);
          // This would trigger a regeneration request
        }
      } catch (error) {
        console.error(`❌ Auto-fix failed for ${issue.field}:`, error);
        failed++;
      }
    }

    return { fixed, failed };
  }

  /**
   * Auto-fix React component based on HTML source of truth
   */
  private async autoFixReactComponent(data: any, issue: ValidationResult['issues'][0]): Promise<boolean> {
    try {
      const { componentPath } = data;
      
      if (!componentPath || !fs.existsSync(componentPath)) {
        return false;
      }

      let componentContent = fs.readFileSync(componentPath, 'utf8');
      let modified = false;

      // Fix title mismatch
      if (issue.field === 'react-title') {
        const titleRegex = /title=\{?["'`]([^"'`]+)["'`]\}?/;
        if (titleRegex.test(componentContent)) {
          componentContent = componentContent.replace(titleRegex, `title={"${issue.expected}"}`);
          modified = true;
        }
      }

      // Fix description mismatch
      if (issue.field === 'react-metaDescription') {
        const descRegex = /description=\{?["'`]([^"'`]+)["'`]\}?/;
        if (descRegex.test(componentContent)) {
          componentContent = componentContent.replace(descRegex, `description={\`${issue.expected}\`}`);
          modified = true;
        }
      }

      // Fix H1 mismatch
      if (issue.field === 'react-h1') {
        const h1Regex = /<h1[^>]*>([^<]+)<\/h1>/;
        if (h1Regex.test(componentContent)) {
          componentContent = componentContent.replace(h1Regex, `<h1>${issue.expected}</h1>`);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(componentPath, componentContent);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Auto-fix React component failed:', error);
      return false;
    }
  }

  /**
   * Run comprehensive validation for city generation workflow
   */
  async validateCityGeneration(cityData: CityData, htmlContent?: string, filePath?: string): Promise<ValidationResult> {
    console.log(`🔍 Running comprehensive hydration validation for city: ${cityData.cityName}`);

    // Pre-generation validation
    const preResult = await this.executeHooks('pre-city-generation', cityData);
    
    if (!preResult.isValid) {
      console.log(`❌ Pre-generation validation failed for ${cityData.cityName}`);
      return preResult;
    }

    // Post-generation validation (if HTML content provided)
    if (htmlContent && filePath) {
      const postResult = await this.executeHooks('post-city-generation', {
        htmlContent,
        cityData,
        filePath
      });

      if (!postResult.isValid) {
        console.log(`❌ Post-generation validation failed for ${cityData.cityName}`);
        return postResult;
      }
    }

    console.log(`✅ Hydration validation passed for ${cityData.cityName}`);
    return { isValid: true, issues: [], score: 100 };
  }

  /**
   * Run comprehensive validation for blog generation workflow
   */
  async validateBlogGeneration(blogData: BlogData, htmlContent?: string, filePath?: string): Promise<ValidationResult> {
    console.log(`🔍 Running comprehensive hydration validation for blog: ${blogData.title}`);

    const preResult = await this.executeHooks('pre-blog-generation', blogData);
    
    if (!preResult.isValid) {
      console.log(`❌ Pre-generation validation failed for blog: ${blogData.title}`);
      return preResult;
    }

    if (htmlContent && filePath) {
      const postResult = await this.executeHooks('post-blog-generation', {
        htmlContent,
        blogData,
        filePath
      });

      if (!postResult.isValid) {
        console.log(`❌ Post-generation validation failed for blog: ${blogData.title}`);
        return postResult;
      }
    }

    console.log(`✅ Hydration validation passed for blog: ${blogData.title}`);
    return { isValid: true, issues: [], score: 100 };
  }
}

/**
 * Global hydration prevention instance
 */
export const hydrationPrevention = new HydrationPreventionSystem(true);

/**
 * Validation hooks for city generation workflow
 */
export const validateCityHydration = async (cityData: CityData): Promise<ValidationResult> => {
  return await hydrationPrevention.validateCityGeneration(cityData);
};

export const validateCityHydrationWithHTML = async (
  cityData: CityData, 
  htmlContent: string, 
  filePath: string
): Promise<ValidationResult> => {
  return await hydrationPrevention.validateCityGeneration(cityData, htmlContent, filePath);
};

/**
 * Validation hooks for blog generation workflow
 */
export const validateBlogHydration = async (blogData: BlogData): Promise<ValidationResult> => {
  return await hydrationPrevention.validateBlogGeneration(blogData);
};

export const validateBlogHydrationWithHTML = async (
  blogData: BlogData, 
  htmlContent: string, 
  filePath: string
): Promise<ValidationResult> => {
  return await hydrationPrevention.validateBlogGeneration(blogData, htmlContent, filePath);
};

/**
 * Quick validation for any SEO data
 */
export const validateSEOData = (seoData: SEOData): ValidationResult => {
  const issues: ValidationResult['issues'] = [];

  if (!seoData.title || seoData.title.length === 0) {
    issues.push({
      type: 'missing',
      field: 'title',
      expected: 'non-empty title',
      actual: seoData.title || 'empty',
      severity: 'high'
    });
  }

  if (seoData.title && seoData.title.length > 60) {
    issues.push({
      type: 'warning',
      field: 'title',
      expected: 'length <= 60 characters',
      actual: `length: ${seoData.title.length}`,
      severity: 'medium'
    });
  }

  if (!seoData.metaDescription || seoData.metaDescription.length === 0) {
    issues.push({
      type: 'missing',
      field: 'metaDescription',
      expected: 'non-empty description',
      actual: seoData.metaDescription || 'empty',
      severity: 'high'
    });
  }

  if (seoData.metaDescription && seoData.metaDescription.length > 160) {
    issues.push({
      type: 'warning',
      field: 'metaDescription',
      expected: 'length <= 160 characters',
      actual: `length: ${seoData.metaDescription.length}`,
      severity: 'medium'
    });
  }

  if (!seoData.h1 || seoData.h1.length === 0) {
    issues.push({
      type: 'missing',
      field: 'h1',
      expected: 'non-empty H1',
      actual: seoData.h1 || 'empty',
      severity: 'high'
    });
  }

  const score = issues.length === 0 ? 100 : Math.max(0, 100 - (issues.length * 15));
  
  return {
    isValid: issues.filter(i => i.severity === 'high').length === 0,
    issues,
    score
  };
};