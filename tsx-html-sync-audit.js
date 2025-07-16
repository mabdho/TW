/**
 * Comprehensive TSX-HTML Synchronization Audit
 * Checks alignment between React TSX components and static HTML files
 * Validates SEO data, content structure, and metadata consistency
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class TSXHTMLSyncAuditor {
  constructor() {
    this.results = {
      cities: [],
      blogs: [],
      staticPages: [],
      summary: {
        totalChecked: 0,
        synchronized: 0,
        needsSync: 0,
        missing: 0,
        issues: []
      }
    };
  }

  /**
   * Extract SEO data from TSX component file
   */
  extractTSXSEOData(tsxPath) {
    try {
      const content = fs.readFileSync(tsxPath, 'utf8');
      
      // Extract title (handles both prop syntax title={"..."} and colon syntax title: "...")
      const titleMatch = content.match(/title=\{?[`"']([^`"']+)[`"']\}?/) ||
                        content.match(/title:\s*[`"']([^`"']+)[`"']/);
      const title = titleMatch ? titleMatch[1] : '';
      
      // Extract description (handles both prop syntax and colon syntax)
      const descMatch = content.match(/description=\{?`([^`]+)`\}?/) ||
                       content.match(/description=\{?[`"']([^`"']+)[`"']\}?/) ||
                       content.match(/description:\s*[`"']([^`"']+)[`"']/);
      const description = descMatch ? descMatch[1] : '';
      
      // Extract H1 (usually same as title for city pages)
      const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/) || 
                     content.match(/h1:\s*[`"']([^`"']+)[`"']/) ||
                     content.match(/headline:\s*[`"']([^`"']+)[`"']/);
      const h1 = h1Match ? h1Match[1] : title; // Fallback to title if no explicit H1
      
      // Extract city name and country for city components
      const cityMatch = content.match(/cityName=\{?[`"']([^`"']+)[`"']\}?/) ||
                       content.match(/cityName:\s*[`"']([^`"']+)[`"']/);
      const countryMatch = content.match(/country=\{?[`"']([^`"']+)[`"']\}?/) ||
                          content.match(/country:\s*[`"']([^`"']+)[`"']/);
      
      return {
        title: title.trim(),
        description: description.trim(),
        h1: h1.trim(),
        cityName: cityMatch ? cityMatch[1].trim() : '',
        country: countryMatch ? countryMatch[1].trim() : ''
      };
    } catch (error) {
      console.warn(`Error extracting TSX data from ${tsxPath}:`, error.message);
      return null;
    }
  }

  /**
   * Extract SEO data from HTML file
   */
  extractHTMLSEOData(htmlPath) {
    try {
      const content = fs.readFileSync(htmlPath, 'utf8');
      
      // Extract title
      const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1].trim() : '';
      
      // Extract meta description
      const descMatch = content.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/);
      const description = descMatch ? descMatch[1].trim() : '';
      
      // Extract H1
      const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      const h1 = h1Match ? h1Match[1].trim() : '';
      
      // Extract structured data if present
      const jsonLdMatches = content.match(/<script[^>]*type=["\']application\/ld\+json["\'][^>]*>(.*?)<\/script>/gs);
      const structuredData = jsonLdMatches ? jsonLdMatches.length : 0;
      
      // Extract Open Graph data
      const ogTitleMatch = content.match(/<meta[^>]*property=["\']og:title["\'][^>]*content=["\']([^"']+)["\'][^>]*>/);
      const ogDescMatch = content.match(/<meta[^>]*property=["\']og:description["\'][^>]*content=["\']([^"']+)["\'][^>]*>/);
      
      // Extract interlinks
      const interlinkMatches = content.match(/<a[^>]*href=["\']\/best-things-to-do-in-[^"']+["\'][^>]*>/g);
      const interlinks = interlinkMatches ? interlinkMatches.length : 0;
      
      // Check for Related Destinations section
      const hasRelatedSection = content.includes('🔗 Related Destinations');
      
      return {
        title,
        description,
        h1,
        structuredData,
        ogTitle: ogTitleMatch ? ogTitleMatch[1].trim() : '',
        ogDescription: ogDescMatch ? ogDescMatch[1].trim() : '',
        fileSize: fs.statSync(htmlPath).size,
        interlinks,
        hasRelatedSection
      };
    } catch (error) {
      console.warn(`Error extracting HTML data from ${htmlPath}:`, error.message);
      return null;
    }
  }

  /**
   * Compare TSX and HTML SEO data
   */
  compareSEOData(tsxData, htmlData, fileName) {
    const issues = [];
    let score = 0;
    let totalChecks = 0;

    // Check title
    totalChecks++;
    if (tsxData.title && htmlData.title) {
      if (tsxData.title === htmlData.title) {
        score++;
      } else {
        issues.push({
          type: 'title_mismatch',
          tsx: tsxData.title,
          html: htmlData.title,
          severity: 'high'
        });
      }
    } else if (!tsxData.title && htmlData.title) {
      issues.push({
        type: 'title_missing_tsx',
        html: htmlData.title,
        severity: 'medium'
      });
    } else if (tsxData.title && !htmlData.title) {
      issues.push({
        type: 'title_missing_html',
        tsx: tsxData.title,
        severity: 'high'
      });
    }

    // Check description
    totalChecks++;
    if (tsxData.description && htmlData.description) {
      if (tsxData.description === htmlData.description) {
        score++;
      } else {
        issues.push({
          type: 'description_mismatch',
          tsx: tsxData.description,
          html: htmlData.description,
          severity: 'high'
        });
      }
    } else if (!tsxData.description && htmlData.description) {
      issues.push({
        type: 'description_missing_tsx',
        html: htmlData.description,
        severity: 'medium'
      });
    }

    // Check H1
    totalChecks++;
    if (tsxData.h1 && htmlData.h1) {
      if (tsxData.h1 === htmlData.h1) {
        score++;
      } else {
        issues.push({
          type: 'h1_mismatch',
          tsx: tsxData.h1,
          html: htmlData.h1,
          severity: 'medium'
        });
      }
    } else if (!tsxData.h1 && htmlData.h1) {
      issues.push({
        type: 'h1_missing_tsx',
        html: htmlData.h1,
        severity: 'low'
      });
    }

    // Check interlinks (HTML should have interlinks for city pages)
    totalChecks++;
    if (htmlData.interlinks && htmlData.interlinks >= 2) {
      score++;
    } else {
      issues.push({
        type: 'missing_interlinks',
        html: htmlData.interlinks || 0,
        severity: 'high',
        message: 'City pages should have at least 2 interlinks to other cities/content'
      });
    }

    // Check for Related Destinations section
    totalChecks++;
    if (htmlData.hasRelatedSection) {
      score++;
    } else {
      issues.push({
        type: 'missing_related_section',
        severity: 'high',
        message: 'Missing "🔗 Related Destinations" section'
      });
    }

    return {
      fileName,
      score: totalChecks > 0 ? (score / totalChecks) * 100 : 0,
      totalChecks,
      passedChecks: score,
      issues,
      isSync: issues.length === 0
    };
  }

  /**
   * Audit city TSX components vs HTML files
   */
  auditCityComponents() {
    console.log('\n🏙️  AUDITING CITY COMPONENTS');
    console.log('==============================');

    const cityDir = 'client/src/pages/cities';
    const htmlDir = 'dist/public';

    if (!fs.existsSync(cityDir)) {
      console.log('❌ City components directory not found');
      return;
    }

    const cityFiles = fs.readdirSync(cityDir).filter(file => file.endsWith('.tsx'));

    for (const cityFile of cityFiles) {
      const cityName = cityFile.replace('.tsx', '');
      const tsxPath = path.join(cityDir, cityFile);
      
      // Find corresponding HTML file in directory structure
      // Handle special city name mappings
      let cityDirName;
      if (cityName.toLowerCase() === 'newyork') {
        cityDirName = 'best-things-to-do-in-new-york';
      } else {
        cityDirName = `best-things-to-do-in-${cityName.toLowerCase()}`;
      }
      const cityHtmlDir = path.join(htmlDir, cityDirName);
      const htmlPath = path.join(cityHtmlDir, 'index.html');

      if (!fs.existsSync(htmlPath)) {
        console.log(`🔍 ${cityName}: ❌ No matching HTML file found at ${cityDirName}/index.html`);
        this.results.summary.missing++;
        continue;
      }
      const tsxData = this.extractTSXSEOData(tsxPath);
      const htmlData = this.extractHTMLSEOData(htmlPath);

      if (!tsxData || !htmlData) {
        console.log(`🔍 ${cityName}: ❌ Error extracting data`);
        continue;
      }

      const comparison = this.compareSEOData(tsxData, htmlData, cityName);
      this.results.cities.push(comparison);

      // Display results
      console.log(`🔍 ${cityName}:`);
      console.log(`   TSX: ${tsxPath}`);
      console.log(`   HTML: ${htmlPath} (${(htmlData.fileSize / 1024).toFixed(1)} KB)`);
      console.log(`   Score: ${comparison.score.toFixed(1)}% (${comparison.passedChecks}/${comparison.totalChecks})`);
      
      if (comparison.isSync) {
        console.log(`   Status: ✅ Synchronized`);
        this.results.summary.synchronized++;
      } else {
        console.log(`   Status: ⚠️  Needs synchronization`);
        console.log(`   Issues: ${comparison.issues.length}`);
        comparison.issues.forEach(issue => {
          console.log(`     - ${issue.type}: ${issue.severity} severity`);
        });
        this.results.summary.needsSync++;
      }

      this.results.summary.totalChecked++;
    }
  }

  /**
   * Audit static page components vs HTML files
   */
  auditStaticPages() {
    console.log('\n📄 AUDITING STATIC PAGE COMPONENTS');
    console.log('===================================');

    const staticPages = [
      { tsx: 'client/src/pages/Home.tsx', html: 'dist/public/home-seo.html' },
      { tsx: 'client/src/pages/Destinations.tsx', html: 'dist/public/destinations-seo.html' },
      { tsx: 'client/src/pages/Blogs.tsx', html: 'dist/public/blogs-seo.html' }
    ];

    for (const page of staticPages) {
      const pageName = path.basename(page.tsx, '.tsx');
      
      if (!fs.existsSync(page.tsx) || !fs.existsSync(page.html)) {
        console.log(`🔍 ${pageName}: ❌ Missing files`);
        this.results.summary.missing++;
        continue;
      }

      const tsxData = this.extractTSXSEOData(page.tsx);
      const htmlData = this.extractHTMLSEOData(page.html);

      if (!tsxData || !htmlData) {
        console.log(`🔍 ${pageName}: ❌ Error extracting data`);
        continue;
      }

      const comparison = this.compareSEOData(tsxData, htmlData, pageName);
      this.results.staticPages.push(comparison);

      console.log(`🔍 ${pageName}:`);
      console.log(`   Score: ${comparison.score.toFixed(1)}% (${comparison.passedChecks}/${comparison.totalChecks})`);
      
      if (comparison.isSync) {
        console.log(`   Status: ✅ Synchronized`);
        this.results.summary.synchronized++;
      } else {
        console.log(`   Status: ⚠️  Needs synchronization`);
        comparison.issues.forEach(issue => {
          console.log(`     - ${issue.type}: ${issue.severity}`);
        });
        this.results.summary.needsSync++;
      }

      this.results.summary.totalChecked++;
    }
  }

  /**
   * Generate comprehensive audit report
   */
  generateReport() {
    console.log('\n================================================================================');
    console.log('🎯 TSX-HTML SYNCHRONIZATION AUDIT SUMMARY');
    console.log('================================================================================');

    const { totalChecked, synchronized, needsSync, missing } = this.results.summary;
    const syncRate = totalChecked > 0 ? (synchronized / totalChecked) * 100 : 0;

    console.log(`📊 Overall Results:`);
    console.log(`   Total Components Checked: ${totalChecked}`);
    console.log(`   Synchronized: ${synchronized} (${syncRate.toFixed(1)}%)`);
    console.log(`   Need Synchronization: ${needsSync}`);
    console.log(`   Missing Files: ${missing}`);

    if (needsSync > 0) {
      console.log(`\n🚨 COMPONENTS NEEDING SYNCHRONIZATION (${needsSync}):`);
      
      const allResults = [...this.results.cities, ...this.results.staticPages];
      const needingSyncResults = allResults.filter(r => !r.isSync);
      
      needingSyncResults.forEach(result => {
        console.log(`\n   ⚠️  ${result.fileName} - ${result.score.toFixed(1)}% sync`);
        result.issues.forEach(issue => {
          switch(issue.type) {
            case 'title_mismatch':
              console.log(`      ❌ Title mismatch:`);
              console.log(`         TSX: "${issue.tsx}"`);
              console.log(`         HTML: "${issue.html}"`);
              break;
            case 'description_mismatch':
              console.log(`      ❌ Description mismatch:`);
              console.log(`         TSX: "${issue.tsx.substring(0, 60)}..."`);
              console.log(`         HTML: "${issue.html.substring(0, 60)}..."`);
              break;
            case 'h1_mismatch':
              console.log(`      ❌ H1 mismatch:`);
              console.log(`         TSX: "${issue.tsx}"`);
              console.log(`         HTML: "${issue.html}"`);
              break;
            default:
              console.log(`      ❌ ${issue.type}: ${issue.severity} severity`);
          }
        });
      });
    }

    if (synchronized > 0) {
      console.log(`\n✅ SYNCHRONIZED COMPONENTS (${synchronized}):`);
      const syncResults = [...this.results.cities, ...this.results.staticPages].filter(r => r.isSync);
      syncResults.forEach(result => {
        console.log(`   ✅ ${result.fileName} - Perfect sync`);
      });
    }

    console.log(`\n🎯 SYNC AUDIT COMPLETE`);
    console.log(`Overall Synchronization Rate: ${syncRate.toFixed(1)}%`);
    
    if (syncRate === 100) {
      console.log(`🎉 PERFECT SYNCHRONIZATION! All components match their HTML counterparts.`);
    } else if (syncRate >= 80) {
      console.log(`✨ GOOD SYNCHRONIZATION! Minor adjustments needed for perfect alignment.`);
    } else if (syncRate >= 60) {
      console.log(`⚠️  MODERATE SYNCHRONIZATION. Several components need attention.`);
    } else {
      console.log(`🚨 LOW SYNCHRONIZATION. Significant work needed to align TSX and HTML.`);
    }

    // Save results to file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const resultsFile = `tsx-html-sync-audit-${timestamp}.json`;
    fs.writeFileSync(resultsFile, JSON.stringify(this.results, null, 2));
    console.log(`\n💾 Detailed results saved to: ${resultsFile}`);
  }

  /**
   * Run comprehensive TSX-HTML sync audit
   */
  async runCompleteAudit() {
    console.log('🚀 Starting Comprehensive TSX-HTML Synchronization Audit...');
    console.log('Checking alignment between React components and static HTML files\n');

    this.auditCityComponents();
    this.auditStaticPages();
    this.generateReport();
  }
}

// Run the audit
async function main() {
  const auditor = new TSXHTMLSyncAuditor();
  await auditor.runCompleteAudit();
}

main().catch(console.error);