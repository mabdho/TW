#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

class TSXHtmlSyncDiagnostic {
  constructor() {
    this.results = {
      summary: {
        totalTsxFiles: 0,
        totalHtmlFiles: 0,
        syncIssues: [],
        recommendations: [],
        severity: 'unknown'
      },
      tsxAnalysis: {},
      htmlAnalysis: {},
      syncMappings: {},
      fixRecommendations: [],
      timestamp: new Date().toISOString()
    };
  }

  async runDiagnostic() {
    console.log('🔄 Starting TSX-HTML Synchronization Diagnostic...');
    
    await this.analyzeTSXComponents();
    await this.analyzeHTMLFiles();
    await this.checkSynchronization();
    await this.generateRecommendations();
    
    this.generateReport();
    return this.results;
  }

  async analyzeTSXComponents() {
    console.log('📝 Analyzing TSX components...');
    
    const tsxFiles = this.getTSXFiles();
    this.results.summary.totalTsxFiles = tsxFiles.length;
    
    for (const filePath of tsxFiles) {
      const fileName = path.basename(filePath, '.tsx');
      const content = fs.readFileSync(filePath, 'utf8');
      
      const analysis = {
        filePath,
        fileName,
        hasHydrationSetup: false,
        hasRootElement: false,
        hasSEOHead: false,
        hasStaticGeneration: false,
        exportedComponents: [],
        hydrationMarkers: [],
        seoElements: {}
      };
      
      // Check for hydration setup
      if (content.includes('ReactDOM.hydrate') || content.includes('hydrateRoot')) {
        analysis.hasHydrationSetup = true;
        analysis.hydrationMarkers.push('React hydration detected');
      }
      
      // Check for root element references
      if (content.includes('getElementById(\'root\')') || content.includes('id="root"')) {
        analysis.hasRootElement = true;
        analysis.hydrationMarkers.push('Root element reference found');
      }
      
      // Check for SEO head component
      if (content.includes('SEOHead') || content.includes('<Head>') || content.includes('Helmet')) {
        analysis.hasSEOHead = true;
        analysis.seoElements.seoComponent = 'SEO component detected';
      }
      
      // Extract component exports
      const exportMatches = content.match(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/g);
      if (exportMatches) {
        analysis.exportedComponents = exportMatches.map(match => 
          match.replace(/export\s+(?:default\s+)?(?:function|const)\s+/, '')
        );
      }
      
      // Check for static generation markers
      if (content.includes('getStaticProps') || content.includes('generateStaticParams')) {
        analysis.hasStaticGeneration = true;
      }
      
      // Extract SEO-related elements
      const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/);
      if (titleMatch) {
        analysis.seoElements.title = titleMatch[1];
      }
      
      const metaDescMatch = content.match(/<meta\s+name="description"\s+content="([^"]+)"/);
      if (metaDescMatch) {
        analysis.seoElements.description = metaDescMatch[1];
      }
      
      this.results.tsxAnalysis[fileName] = analysis;
      console.log(`   ✅ Analyzed: ${fileName} (${analysis.exportedComponents.length} components)`);
    }
  }

  async analyzeHTMLFiles() {
    console.log('📄 Analyzing HTML files...');
    
    const htmlFiles = this.getHTMLFiles();
    this.results.summary.totalHtmlFiles = htmlFiles.length;
    
    for (const filePath of htmlFiles) {
      const fileName = path.basename(filePath, '.html');
      const content = fs.readFileSync(filePath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      
      const analysis = {
        filePath,
        fileName,
        hasRootElement: false,
        hasReactScript: false,
        hasHydrationMarkers: false,
        seoElements: {},
        reactElements: [],
        suspectedReactComponents: []
      };
      
      // Check for root element
      const rootElement = document.getElementById('root') || document.querySelector('[data-reactroot]');
      if (rootElement) {
        analysis.hasRootElement = true;
        analysis.reactElements.push('Root element found');
      }
      
      // Check for React script tags
      const scripts = document.querySelectorAll('script[src]');
      for (const script of scripts) {
        const src = script.getAttribute('src');
        if (src && (src.includes('react') || src.includes('main') || src.includes('app'))) {
          analysis.hasReactScript = true;
          analysis.reactElements.push(`React script: ${src}`);
        }
      }
      
      // Check for hydration markers
      if (content.includes('data-reactroot') || content.includes('__REACT_DEVTOOLS_GLOBAL_HOOK__')) {
        analysis.hasHydrationMarkers = true;
      }
      
      // Extract SEO elements
      analysis.seoElements = {
        title: document.querySelector('title')?.textContent?.trim() || '',
        description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        h1: document.querySelector('h1')?.textContent?.trim() || '',
        canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
        ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
        structuredData: document.querySelectorAll('script[type="application/ld+json"]').length
      };
      
      // Look for suspected React components (class names that look like components)
      const elementsWithClasses = document.querySelectorAll('[class]');
      for (const element of elementsWithClasses) {
        const classes = element.className.split(' ');
        for (const className of classes) {
          if (/^[A-Z]/.test(className) || className.includes('Component') || className.includes('Module')) {
            analysis.suspectedReactComponents.push(className);
          }
        }
      }
      
      this.results.htmlAnalysis[fileName] = analysis;
      console.log(`   ✅ Analyzed: ${fileName} (${analysis.seoElements.structuredData} schemas)`);
    }
  }

  async checkSynchronization() {
    console.log('🔍 Checking TSX-HTML synchronization...');
    
    const keyMappings = {
      'home': ['home-seo', 'index'],
      'destinations': ['destinations-seo', 'destinations'],
      'blogs': ['blogs-seo', 'blogs'],
      'blog-detail': ['blog'],
      'cities': ['things-to-do-in-berlin']
    };
    
    for (const [tsxKey, htmlKeys] of Object.entries(keyMappings)) {
      const tsxData = this.results.tsxAnalysis[tsxKey];
      
      for (const htmlKey of htmlKeys) {
        const htmlData = this.results.htmlAnalysis[htmlKey];
        
        if (tsxData && htmlData) {
          const syncCheck = {
            tsxFile: tsxData.fileName,
            htmlFile: htmlData.fileName,
            issues: [],
            severity: 'info',
            recommendations: []
          };
          
          // Check for root element synchronization
          if (!htmlData.hasRootElement) {
            syncCheck.issues.push('HTML missing React root element');
            syncCheck.severity = 'critical';
            syncCheck.recommendations.push('Add <div id="root"> container to HTML');
          }
          
          // Check for React script presence
          if (!htmlData.hasReactScript) {
            syncCheck.issues.push('HTML missing React scripts');
            syncCheck.severity = 'critical';
            syncCheck.recommendations.push('Include React bundle scripts in HTML');
          }
          
          // Check for hydration markers
          if (!htmlData.hasHydrationMarkers && tsxData.hasHydrationSetup) {
            syncCheck.issues.push('TSX has hydration setup but HTML lacks markers');
            syncCheck.severity = 'high';
            syncCheck.recommendations.push('Ensure HTML is generated from React SSR');
          }
          
          // Check SEO element consistency
          if (tsxData.seoElements.title && htmlData.seoElements.title) {
            if (tsxData.seoElements.title !== htmlData.seoElements.title) {
              syncCheck.issues.push('Title mismatch between TSX and HTML');
              syncCheck.severity = 'medium';
            }
          }
          
          if (syncCheck.issues.length > 0) {
            this.results.summary.syncIssues.push(syncCheck);
          }
          
          this.results.syncMappings[`${tsxKey}-${htmlKey}`] = syncCheck;
        }
      }
    }
  }

  async generateRecommendations() {
    console.log('💡 Generating fix recommendations...');
    
    const recommendations = [];
    
    // Analyze critical synchronization issues
    const criticalIssues = this.results.summary.syncIssues.filter(issue => issue.severity === 'critical');
    const highIssues = this.results.summary.syncIssues.filter(issue => issue.severity === 'high');
    
    if (criticalIssues.length > 0) {
      this.results.summary.severity = 'critical';
      
      recommendations.push({
        priority: 'CRITICAL',
        title: 'Implement React Hydration Pipeline',
        description: 'HTML files are missing React root elements and hydration markers',
        actions: [
          'Add <div id="root"></div> containers to all HTML files',
          'Include React bundle scripts in HTML files',
          'Implement proper SSR hydration process',
          'Test hydration in development environment'
        ],
        files: criticalIssues.map(issue => issue.htmlFile)
      });
    }
    
    if (highIssues.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        title: 'Fix Hydration Marker Mismatch',
        description: 'TSX components expect hydration but HTML lacks proper markers',
        actions: [
          'Ensure HTML is generated from React SSR process',
          'Add data-reactroot attributes where appropriate',
          'Verify React scripts are loaded before hydration',
          'Check for hydration warnings in browser console'
        ],
        files: highIssues.map(issue => issue.htmlFile)
      });
    }
    
    // Check for missing hydration setup in TSX
    const tsxNeedingHydration = Object.values(this.results.tsxAnalysis)
      .filter(tsx => !tsx.hasHydrationSetup && tsx.exportedComponents.length > 0);
    
    if (tsxNeedingHydration.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        title: 'Add Hydration Setup to TSX Components',
        description: 'Some TSX components lack proper hydration configuration',
        actions: [
          'Import ReactDOM.hydrateRoot or ReactDOM.hydrate',
          'Add hydration logic to component entry points',
          'Ensure components can mount to existing DOM structure',
          'Add error boundaries for hydration failures'
        ],
        files: tsxNeedingHydration.map(tsx => tsx.fileName)
      });
    }
    
    // SEO synchronization recommendations
    const seoMismatches = this.results.summary.syncIssues.filter(issue => 
      issue.issues.some(i => i.includes('mismatch'))
    );
    
    if (seoMismatches.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        title: 'Fix SEO Element Synchronization',
        description: 'SEO elements differ between TSX components and HTML files',
        actions: [
          'Ensure SEO components use consistent data sources',
          'Implement centralized SEO configuration',
          'Verify HTML generation uses same SEO data as React',
          'Add validation for SEO element consistency'
        ],
        files: seoMismatches.map(issue => `${issue.tsxFile} → ${issue.htmlFile}`)
      });
    }
    
    this.results.fixRecommendations = recommendations;
    this.results.summary.recommendations = recommendations.map(r => r.title);
  }

  getTSXFiles() {
    const tsxFiles = [];
    const searchDirs = ['client/src/pages', 'client/src/components'];
    
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getFilesRecursively(dir, '.tsx');
        tsxFiles.push(...files);
      }
    }
    
    return tsxFiles;
  }

  getHTMLFiles() {
    const htmlFiles = [];
    const searchDirs = ['dist/public'];
    
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getFilesRecursively(dir, '.html');
        htmlFiles.push(...files);
      }
    }
    
    return htmlFiles;
  }

  getFilesRecursively(dir, extension) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath, extension));
      } else if (item.endsWith(extension)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('🔄 TSX-HTML SYNCHRONIZATION DIAGNOSTIC REPORT');
    console.log('='.repeat(80));
    
    console.log(`\n📊 Analysis Summary:`);
    console.log(`├─ TSX files analyzed: ${this.results.summary.totalTsxFiles}`);
    console.log(`├─ HTML files analyzed: ${this.results.summary.totalHtmlFiles}`);
    console.log(`├─ Synchronization issues: ${this.results.summary.syncIssues.length}`);
    console.log(`└─ Severity level: ${this.results.summary.severity.toUpperCase()}`);
    
    if (this.results.summary.severity === 'critical') {
      console.log('\n🚨 CRITICAL SYNCHRONIZATION ISSUES DETECTED');
      console.log('The current setup prevents React hydration from working properly.');
    } else if (this.results.summary.syncIssues.length > 0) {
      console.log('\n⚠️  SYNCHRONIZATION ISSUES DETECTED');
      console.log('Some components may not hydrate correctly.');
    } else {
      console.log('\n✅ SYNCHRONIZATION STATUS: GOOD');
      console.log('TSX and HTML files are properly synchronized.');
    }
    
    if (this.results.summary.syncIssues.length > 0) {
      console.log('\n📋 SYNCHRONIZATION ISSUES:');
      for (const issue of this.results.summary.syncIssues) {
        console.log(`\n   ${issue.severity.toUpperCase()}: ${issue.tsxFile} → ${issue.htmlFile}`);
        for (const problemDescription of issue.issues) {
          console.log(`      • ${problemDescription}`);
        }
      }
    }
    
    if (this.results.fixRecommendations.length > 0) {
      console.log('\n💡 FIX RECOMMENDATIONS:');
      for (const rec of this.results.fixRecommendations) {
        console.log(`\n   ${rec.priority}: ${rec.title}`);
        console.log(`   ${rec.description}`);
        console.log(`   Actions required:`);
        for (const action of rec.actions) {
          console.log(`      • ${action}`);
        }
        if (rec.files.length > 0) {
          console.log(`   Affected files: ${rec.files.join(', ')}`);
        }
      }
    }
    
    // Quick fix suggestions
    console.log('\n🔧 QUICK FIXES FOR CRITICAL ISSUES:');
    console.log('1. Add to each HTML file: <div id="root"><!-- React content --></div>');
    console.log('2. Include React scripts: <script src="/path/to/react-bundle.js"></script>');
    console.log('3. Implement hydration: ReactDOM.hydrateRoot(document.getElementById("root"), <App />)');
    console.log('4. Test hydration: Check browser console for hydration warnings');
    
    console.log('\n' + '='.repeat(80));
    
    // Save detailed results
    fs.writeFileSync('tsx-html-sync-diagnostic-results.json', JSON.stringify(this.results, null, 2));
    console.log('📄 Detailed results saved to: tsx-html-sync-diagnostic-results.json');
    
    return this.results;
  }
}

// Run the diagnostic if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    const diagnostic = new TSXHtmlSyncDiagnostic();
    await diagnostic.runDiagnostic();
  })().catch(console.error);
}

export { TSXHtmlSyncDiagnostic };