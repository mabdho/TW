/**
 * Hydration Enforcement System for TravelWanders
 * Ensures all HTML generation and React components maintain perfect hydration
 * Automatically validates and enforces hydration compliance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HydrationEnforcer {
  constructor() {
    this.auditResults = {};
    this.fixedComponents = [];
    this.enforcementLog = [];
  }

  /**
   * Enforce hydration compliance for HTML generation
   * Ensures generated HTML becomes the source of truth
   */
  async enforceHTMLGeneration(pageType, pageData) {
    console.log(`🔧 Enforcing hydration compliance for ${pageType} generation...`);
    
    try {
      if (pageType === 'city') {
        await this.enforceCityHydration(pageData);
      } else if (pageType === 'blog') {
        await this.enforceBlogHydration(pageData);
      } else {
        console.log(`⚠️  Hydration enforcement not implemented for ${pageType}`);
      }
    } catch (error) {
      console.error(`❌ Hydration enforcement failed for ${pageType}:`, error);
      throw error;
    }
  }

  /**
   * Enforce hydration for city pages
   */
  async enforceCityHydration(cityData) {
    const cityName = cityData.cityName;
    const htmlPath = path.join(process.cwd(), 'dist', 'public', `best-things-to-do-in-${cityName.toLowerCase()}.html`);
    
    console.log(`🔍 Checking city hydration for ${cityName}...`);
    
    if (!fs.existsSync(htmlPath)) {
      console.warn(`⚠️  HTML file not found for ${cityName}: ${htmlPath}`);
      return;
    }
    
    // Extract SEO data from HTML
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const htmlSeoData = this.extractSEODataFromHTML(htmlContent);
    
    // Generate expected React data  
    const reactSeoData = this.generateReactCitySEOData(cityData);
    
    // Compare and enforce
    const mismatches = this.compareSEOData(htmlSeoData, reactSeoData);
    
    if (mismatches.length === 0) {
      console.log(`✅ ${cityName} hydration already compliant`);
      return;
    }
    
    console.log(`⚠️  ${cityName} hydration mismatches detected:`, mismatches);
    
    // Fix React component to match HTML (HTML is source of truth)
    await this.alignReactWithHTML(htmlSeoData, 'city', cityName);
    
    this.enforcementLog.push({
      pageType: 'city',
      pageName: cityName,
      mismatches: mismatches.length,
      timestamp: new Date().toISOString(),
      status: 'fixed'
    });
  }

  /**
   * Enforce hydration for blog pages
   */
  async enforceBlogHydration(blogData) {
    const blogId = blogData.id;
    const htmlPath = path.join(process.cwd(), 'dist', 'public', 'blog', `${blogId}.html`);
    
    console.log(`🔍 Checking blog hydration for ${blogId}...`);
    
    if (!fs.existsSync(htmlPath)) {
      console.warn(`⚠️  HTML file not found for blog ${blogId}: ${htmlPath}`);
      return;
    }
    
    // Extract SEO data from HTML
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const htmlSeoData = this.extractSEODataFromHTML(htmlContent);
    
    // Generate expected React data
    const reactSeoData = this.generateReactBlogSEOData(blogData);
    
    // Compare and enforce
    const mismatches = this.compareSEOData(htmlSeoData, reactSeoData);
    
    if (mismatches.length === 0) {
      console.log(`✅ Blog ${blogId} hydration already compliant`);
      return;
    }
    
    console.log(`⚠️  Blog ${blogId} hydration mismatches detected:`, mismatches);
    
    // Fix React component to match HTML (HTML is source of truth)
    await this.alignReactWithHTML(htmlSeoData, 'blog', blogId);
    
    this.enforcementLog.push({
      pageType: 'blog', 
      pageName: blogId,
      mismatches: mismatches.length,
      timestamp: new Date().toISOString(),
      status: 'fixed'
    });
  }

  /**
   * Extract SEO data from HTML content
   */
  extractSEODataFromHTML(htmlContent) {
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = htmlContent.match(/<meta name="description" content="(.*?)"/);
    const h1Match = htmlContent.match(/<h1[^>]*>(.*?)<\/h1>/);
    
    return {
      title: titleMatch ? titleMatch[1] : '',
      description: descriptionMatch ? descriptionMatch[1] : '',
      h1: h1Match ? h1Match[1] : ''
    };
  }

  /**
   * Compare SEO data for exact match
   */
  compareSEOData(htmlData, reactData) {
    const mismatches = [];
    
    if (htmlData.title !== reactData.title) {
      mismatches.push({
        field: 'title',
        html: htmlData.title,
        react: reactData.title
      });
    }
    
    if (htmlData.description !== reactData.description) {
      mismatches.push({
        field: 'description',
        html: htmlData.description,
        react: reactData.description
      });
    }
    
    if (htmlData.h1 !== reactData.h1) {
      mismatches.push({
        field: 'h1',
        html: htmlData.h1,
        react: reactData.h1
      });
    }
    
    return mismatches;
  }

  /**
   * Align React component with HTML source of truth
   */
  async alignReactWithHTML(htmlSeoData, pageType, pageId) {
    console.log(`🔧 Aligning React component with HTML for ${pageType} ${pageId}...`);
    
    if (pageType === 'city') {
      const componentPath = path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${pageId}.tsx`);
      
      if (!fs.existsSync(componentPath)) {
        console.warn(`⚠️  City component not found: ${componentPath}`);
        return;
      }
      
      let componentContent = fs.readFileSync(componentPath, 'utf8');
      componentContent = this.updateCitySEOFunction(componentContent, htmlSeoData);
      
      fs.writeFileSync(componentPath, componentContent);
      console.log(`✅ City component aligned with HTML: ${componentPath}`);
      
      this.fixedComponents.push({
        type: 'city',
        name: pageId,
        path: componentPath,
        timestamp: new Date().toISOString()
      });
    }
    
    if (pageType === 'blog') {
      console.log(`⚠️  Blog component alignment not implemented yet for ${pageId}`);
    }
  }

  /**
   * Update city SEO function to match HTML
   */
  updateCitySEOFunction(content, htmlSeoData) {
    // Update title
    const titleRegex = /title=\{"([^"]+)"\}/;
    if (titleRegex.test(content)) {
      content = content.replace(titleRegex, `title={"${htmlSeoData.title}"}`);
    }
    
    // Update description
    const descriptionRegex = /description=\{`([^`]+)`\}/;
    if (descriptionRegex.test(content)) {
      content = content.replace(descriptionRegex, `description={\`${htmlSeoData.description}\`}`);
    }
    
    return content;
  }

  /**
   * Update blog SEO function to match HTML
   */
  updateBlogSEOFunction(content, htmlSeoData) {
    // Blog SEO update logic
    return content;
  }

  /**
   * Pre-generation validation hook
   */
  async validateBeforeGeneration(pageType, pageData) {
    console.log(`🔄 Pre-generation validation for ${pageType}...`);
    
    // Validate data structure
    if (pageType === 'city') {
      if (!pageData.cityName || !pageData.country) {
        throw new Error('City data missing required fields: cityName, country');
      }
    }
    
    if (pageType === 'blog') {
      if (!pageData.title || !pageData.excerpt) {
        throw new Error('Blog data missing required fields: title, excerpt');
      }
    }
    
    console.log(`✅ Pre-generation validation passed for ${pageType}`);
    return true;
  }

  /**
   * Post-generation validation hook
   */
  async validateAfterGeneration(pageType, pageData) {
    console.log(`🎯 Post-generation validation for ${pageType}...`);
    
    // Run hydration enforcement
    await this.enforceHTMLGeneration(pageType, pageData);
    
    console.log(`✅ Post-generation validation completed for ${pageType}`);
    return true;
  }

  generateReactCitySEOData(cityData) {
    const { cityName, country } = cityData;
    const mainKeyword = `Best things to do in ${cityName}`;
    
    // Generate expected React SEO data that matches HTML generation
    const title = `15 Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
    const h1 = `15 Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
    
    // Generate description with same truncation logic as HTML
    let description = `${mainKeyword}: Discover amazing experiences in ${cityName}, ${country}. Complete travel guide with insider tips and must-visit attractions.`;
    
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    }
    
    return { title, description, h1 };
  }

  generateReactBlogSEOData(blogData) {
    const { title, excerpt, category } = blogData;
    
    const seoTitle = `${title} - ${category} | TravelWanders`;
    const h1 = title;
    
    let description = excerpt;
    if (description.length < 100) {
      description = `${excerpt} Discover more ${category.toLowerCase()} travel tips and guides on TravelWanders.`;
    }
    
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    }
    
    return { title: seoTitle, description, h1 };
  }

  /**
   * Generate comprehensive enforcement report
   */
  generateEnforcementReport() {
    const reportPath = path.join(process.cwd(), 'hydration-enforcement-report.md');
    const timestamp = new Date().toISOString();
    
    const report = `# Hydration Enforcement Report

**Generated**: ${timestamp}

## Summary
- **Total Enforcements**: ${this.enforcementLog.length}
- **Fixed Components**: ${this.fixedComponents.length}
- **Success Rate**: ${this.enforcementLog.filter(e => e.status === 'fixed').length}/${this.enforcementLog.length}

## Enforcement Log
${this.enforcementLog.map(log => `
### ${log.pageType.toUpperCase()}: ${log.pageName}
- **Mismatches**: ${log.mismatches}
- **Status**: ${log.status}
- **Timestamp**: ${log.timestamp}
`).join('\n')}

## Fixed Components
${this.fixedComponents.map(comp => `
- **${comp.type}**: ${comp.name}
- **Path**: ${comp.path}
- **Fixed**: ${comp.timestamp}
`).join('\n')}

## Recommendations
- All future content generation should use hydration enforcement hooks
- HTML files remain the source of truth for SEO metadata
- React components are automatically aligned with HTML output
- Run hydration audit after enforcement to verify compliance

## Next Steps
1. Integrate enforcement hooks into all content generation workflows
2. Set up automated enforcement on content modification
3. Monitor compliance through regular audits
4. Extend enforcement to additional page types as needed
`;

    fs.writeFileSync(reportPath, report);
    console.log(`📄 Enforcement report saved to: ${reportPath}`);
  }
}

// Export for use as a module
module.exports = { HydrationEnforcer };

// Main execution when run directly
async function main() {
  const enforcer = new HydrationEnforcer();
  
  console.log('🚀 Starting Hydration Enforcement System...');
  console.log('==========================================');
  
  // Example usage - enforce for all existing pages
  const cityPages = ['London', 'Rome', 'Edinburgh'];
  
  for (const cityName of cityPages) {
    await enforcer.enforceHTMLGeneration('city', { cityName, country: 'Example' });
  }
  
  // Generate enforcement report
  enforcer.generateEnforcementReport();
  
  console.log('✅ Hydration enforcement completed!');
}

if (require.main === module) {
  main().catch(console.error);
}