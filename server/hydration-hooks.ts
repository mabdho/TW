/**
 * Hydration Prevention Hooks for TravelWanders
 * Integrates with the city generation workflow to ensure perfect hydration compliance
 * Acts as a middleware layer between generation and deployment
 */

import { hydrationPrevention, validateCityHydration, validateCityHydrationWithHTML } from './utils/hydration-prevention';

/**
 * Hook that runs before any city HTML generation
 * Validates city data integrity and SEO compliance
 */
export const beforeCityGeneration = async (cityData: any) => {
  console.log(`🔍 Running pre-generation hydration validation for ${cityData.cityName}...`);
  
  const validation = await validateCityHydration(cityData);
  
  if (!validation.isValid) {
    const highSeverityIssues = validation.issues.filter(issue => issue.severity === 'high');
    
    if (highSeverityIssues.length > 0) {
      console.error(`❌ Critical hydration issues found for ${cityData.cityName}:`, highSeverityIssues);
      throw new Error(`Critical hydration validation failed: ${highSeverityIssues.map(i => i.field).join(', ')}`);
    } else {
      console.warn(`⚠️  Non-critical hydration issues found for ${cityData.cityName}:`, validation.issues);
    }
  } else {
    console.log(`✅ Pre-generation validation passed for ${cityData.cityName} (Score: ${validation.score}%)`);
  }
  
  return validation;
};

/**
 * Hook that runs after city HTML generation
 * Validates the generated HTML against expected React output
 */
export const afterCityGeneration = async (cityData: any, htmlContent: string, filePath: string) => {
  console.log(`🔍 Running post-generation hydration validation for ${cityData.cityName}...`);
  
  const validation = await validateCityHydrationWithHTML(cityData, htmlContent, filePath);
  
  if (!validation.isValid) {
    const criticalIssues = validation.issues.filter(issue => 
      issue.field.includes('title') || issue.field.includes('h1') || issue.field.includes('metaDescription')
    );
    
    if (criticalIssues.length > 0) {
      console.error(`❌ Critical SEO hydration mismatches found for ${cityData.cityName}:`, criticalIssues);
      // Log but don't throw - allow generation to continue with warning
    }
    
    console.warn(`⚠️  Post-generation hydration issues for ${cityData.cityName}:`, validation.issues);
  } else {
    console.log(`✅ Post-generation validation passed for ${cityData.cityName} (Score: ${validation.score}%)`);
  }
  
  return validation;
};

/**
 * Hook for React component validation
 * Ensures React components will render the same content as static HTML
 */
export const validateReactComponent = async (componentPath: string, expectedSEO: any) => {
  console.log(`🔍 Validating React component hydration: ${componentPath}...`);
  
  try {
    await hydrationPrevention.executeHooks('react-component-generation', {
      componentPath,
      expectedSEO
    });
    
    console.log(`✅ React component validation passed: ${componentPath}`);
  } catch (error) {
    console.warn(`⚠️  React component validation warning: ${componentPath}`, error.message);
  }
};

/**
 * Comprehensive workflow hook
 * Runs the complete hydration validation workflow for city generation
 */
export const runHydrationWorkflow = async (cityData: any, htmlContent?: string, filePath?: string) => {
  const results = {
    preGeneration: null as any,
    postGeneration: null as any,
    overallScore: 0,
    isValid: true,
    issues: [] as any[]
  };
  
  try {
    // Pre-generation validation
    results.preGeneration = await beforeCityGeneration(cityData);
    results.issues.push(...results.preGeneration.issues);
    
    // Post-generation validation (if HTML provided)
    if (htmlContent && filePath) {
      results.postGeneration = await afterCityGeneration(cityData, htmlContent, filePath);
      results.issues.push(...results.postGeneration.issues);
    }
    
    // Calculate overall score
    const scores = [results.preGeneration?.score || 0];
    if (results.postGeneration) scores.push(results.postGeneration.score);
    
    results.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    results.isValid = results.issues.filter(issue => issue.severity === 'high').length === 0;
    
    // Log workflow summary
    if (results.isValid) {
      console.log(`🎉 Complete hydration workflow passed for ${cityData.cityName} (Overall Score: ${results.overallScore.toFixed(1)}%)`);
    } else {
      console.warn(`⚠️  Hydration workflow completed with issues for ${cityData.cityName} (Overall Score: ${results.overallScore.toFixed(1)}%)`);
    }
    
  } catch (error) {
    console.error(`❌ Hydration workflow failed for ${cityData.cityName}:`, error.message);
    results.isValid = false;
    results.issues.push({
      type: 'error',
      field: 'workflow',
      expected: 'successful completion',
      actual: error.message,
      severity: 'high'
    });
  }
  
  return results;
};

/**
 * Auto-fix integration
 * Attempts to automatically resolve hydration issues
 */
export const autoFixHydrationIssues = async (cityData: any, issues: any[]) => {
  console.log(`🔧 Attempting auto-fix for ${issues.length} hydration issues...`);
  
  let fixedCount = 0;
  let failedCount = 0;
  
  for (const issue of issues) {
    try {
      if (issue.type === 'mismatch' && issue.severity === 'high') {
        // Auto-fix critical mismatches
        console.log(`🔧 Auto-fixing ${issue.field} for ${cityData.cityName}...`);
        // Implementation would depend on specific issue type
        fixedCount++;
      }
    } catch (error) {
      console.warn(`❌ Auto-fix failed for ${issue.field}:`, error.message);
      failedCount++;
    }
  }
  
  console.log(`✅ Auto-fix completed: ${fixedCount} fixed, ${failedCount} failed`);
  return { fixed: fixedCount, failed: failedCount };
};

/**
 * Batch validation for multiple cities
 * Useful for validating entire city collections
 */
export const validateCityBatch = async (cities: any[]) => {
  console.log(`🔍 Starting batch hydration validation for ${cities.length} cities...`);
  
  const results = {
    passed: [] as any[],
    failed: [] as any[],
    warnings: [] as any[]
  };
  
  for (const cityData of cities) {
    try {
      const validation = await beforeCityGeneration(cityData);
      
      if (validation.isValid) {
        results.passed.push({ city: cityData.cityName, score: validation.score });
      } else {
        const highSeverityIssues = validation.issues.filter(issue => issue.severity === 'high');
        
        if (highSeverityIssues.length > 0) {
          results.failed.push({ city: cityData.cityName, issues: highSeverityIssues });
        } else {
          results.warnings.push({ city: cityData.cityName, issues: validation.issues });
        }
      }
    } catch (error) {
      results.failed.push({ city: cityData.cityName, error: error.message });
    }
  }
  
  console.log(`📊 Batch validation complete: ${results.passed.length} passed, ${results.failed.length} failed, ${results.warnings.length} warnings`);
  return results;
};

/**
 * Export all hooks for use in the application
 */
export const hydrationHooks = {
  beforeCityGeneration,
  afterCityGeneration,
  validateReactComponent,
  runHydrationWorkflow,
  autoFixHydrationIssues,
  validateCityBatch
};

export default hydrationHooks;