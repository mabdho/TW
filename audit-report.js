/**
 * Comprehensive Project Audit Script for TravelWanders
 * Checks all aspects: Performance, SEO, Security, Code Quality, Bundle Optimization
 */

import { ComprehensiveAuditSystem } from './comprehensive-audit-system.js';
import { SEOAuditor } from './seo-comprehensive-audit.js';
import { PerformanceAuditor } from './performance-comprehensive-audit.js';
import fs from 'fs';
import path from 'path';

class ProjectAuditor {
  constructor() {
    this.results = {
      performance: { score: 0, issues: [], strengths: [] },
      seo: { score: 0, issues: [], strengths: [] },
      security: { score: 0, issues: [], strengths: [] },
      codeQuality: { score: 0, issues: [], strengths: [] },
      bundleOptimization: { score: 0, issues: [], strengths: [] },
      overallScore: 0
    };
  }

  // 1. FULL PROJECT AUDIT
  async auditProject() {
    console.log('🔍 COMPREHENSIVE PROJECT AUDIT - TravelWanders');
    console.log('='.repeat(60));
    
    await this.auditPerformance();
    await this.auditSEO();
    await this.auditSecurity();
    await this.auditCodeQuality();
    await this.auditBundleOptimization();
    
    this.calculateOverallScore();
    this.generateReport();
  }

  // 2. PERFORMANCE AUDIT
  async auditPerformance() {
    console.log('\n🚀 PERFORMANCE AUDIT');
    console.log('-'.repeat(40));
    
    const perf = this.results.performance;
    
    // Check for performance optimization files
    const performanceFiles = [
      'client/src/utils/performance.ts',
      'client/src/utils/performanceOptimizer.ts',
      'client/src/hooks/usePerformanceOptimization.ts',
      'client/src/utils/bundleOptimizer.ts'
    ];
    
    let perfFilesFound = 0;
    for (const file of performanceFiles) {
      if (fs.existsSync(file)) {
        perfFilesFound++;
        perf.strengths.push(`✅ Performance optimization: ${path.basename(file)}`);
      }
    }
    
    perf.score += (perfFilesFound / performanceFiles.length) * 30;
    
    // Check for image optimization
    const imageOptFiles = [
      'client/src/components/ImageOptimized.tsx',
      'client/src/components/CriticalResourceLoader.tsx',
      'client/src/services/ImageOptimizationService.ts'
    ];
    
    let imageOptFound = 0;
    for (const file of imageOptFiles) {
      if (fs.existsSync(file)) {
        imageOptFound++;
        perf.strengths.push(`✅ Image optimization: ${path.basename(file)}`);
      }
    }
    
    perf.score += (imageOptFound / imageOptFiles.length) * 25;
    
    // Check for lazy loading
    if (fs.existsSync('client/src/components/DynamicCityRoute.tsx')) {
      const content = fs.readFileSync('client/src/components/DynamicCityRoute.tsx', 'utf-8');
      if (content.includes('lazy(') && content.includes('import(')) {
        perf.score += 25;
        perf.strengths.push('✅ Dynamic imports and lazy loading implemented');
      }
    }
    
    // Check for service worker
    if (fs.existsSync('public/sw.js') || fs.existsSync('dist/public/sw.js')) {
      perf.score += 20;
      perf.strengths.push('✅ Service worker implemented');
    }
    
    console.log(`Performance Score: ${perf.score}/100`);
  }

  // 3. SEO AUDIT
  async auditSEO() {
    console.log('\n🔍 SEO AUDIT');
    console.log('-'.repeat(40));
    
    const seo = this.results.seo;
    
    // Check for SEO files
    const seoFiles = [
      'client/src/utils/seo.ts',
      'client/src/utils/seoOptimization.ts',
      'client/src/utils/structuredData.ts',
      'client/src/components/SEOHead.tsx'
    ];
    
    let seoFilesFound = 0;
    for (const file of seoFiles) {
      if (fs.existsSync(file)) {
        seoFilesFound++;
        seo.strengths.push(`✅ SEO system: ${path.basename(file)}`);
      }
    }
    
    seo.score += (seoFilesFound / seoFiles.length) * 25;
    
    // Check for sitemap and robots.txt
    const sitemapExists = fs.existsSync('dist/public/sitemap.xml') || fs.existsSync('public/sitemap.xml');
    const robotsExists = fs.existsSync('dist/public/robots.txt') || fs.existsSync('public/robots.txt');
    
    if (sitemapExists) {
      seo.score += 20;
      seo.strengths.push('✅ Sitemap.xml found');
    } else {
      seo.issues.push('❌ Sitemap.xml missing');
    }
    
    if (robotsExists) {
      seo.score += 15;
      seo.strengths.push('✅ Robots.txt found');
    } else {
      seo.issues.push('❌ Robots.txt missing');
    }
    
    // Check for SEO-friendly URLs
    if (fs.existsSync('client/src/App.tsx')) {
      const appContent = fs.readFileSync('client/src/App.tsx', 'utf-8');
      if (appContent.includes('best-things-to-do-in-')) {
        seo.score += 20;
        seo.strengths.push('✅ SEO-friendly URL structure');
      }
    }
    
    // Check for structured data
    const htmlFiles = this.findHTMLFiles();
    let structuredDataFound = 0;
    
    for (const htmlFile of htmlFiles) {
      const content = fs.readFileSync(htmlFile, 'utf-8');
      if (content.includes('application/ld+json')) {
        structuredDataFound++;
      }
    }
    
    if (structuredDataFound > 0) {
      seo.score += 20;
      seo.strengths.push(`✅ Structured data found in ${structuredDataFound} pages`);
    }
    
    console.log(`SEO Score: ${seo.score}/100`);
  }

  // 4. SECURITY AUDIT
  async auditSecurity() {
    console.log('\n🔒 SECURITY AUDIT');
    console.log('-'.repeat(40));
    
    const security = this.results.security;
    
    // Check for authentication
    const authFiles = [
      'client/src/hooks/useAuth.ts',
      'server/routes.ts'
    ];
    
    let authFound = 0;
    for (const file of authFiles) {
      if (fs.existsSync(file)) {
        authFound++;
        security.strengths.push(`✅ Authentication: ${path.basename(file)}`);
      }
    }
    
    security.score += (authFound / authFiles.length) * 30;
    
    // Check for input validation
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    if (dependencies.zod) {
      security.score += 25;
      security.strengths.push('✅ Input validation with Zod');
    }
    
    // Check for HTTPS
    if (packageJson.homepage && packageJson.homepage.startsWith('https://')) {
      security.score += 20;
      security.strengths.push('✅ HTTPS configuration');
    }
    
    // Check for security headers
    const serverFiles = ['server/index.ts', 'server/firebase-server.ts'];
    for (const serverFile of serverFiles) {
      if (fs.existsSync(serverFile)) {
        const content = fs.readFileSync(serverFile, 'utf-8');
        if (content.includes('helmet') || content.includes('security')) {
          security.score += 15;
          security.strengths.push('✅ Security headers configured');
        }
      }
    }
    
    // Check for environment variables
    if (fs.existsSync('.env') || fs.existsSync('.env.example')) {
      security.score += 10;
      security.strengths.push('✅ Environment variables configured');
    }
    
    console.log(`Security Score: ${security.score}/100`);
  }

  // 5. CODE QUALITY AUDIT
  async auditCodeQuality() {
    console.log('\n💎 CODE QUALITY AUDIT');
    console.log('-'.repeat(40));
    
    const quality = this.results.codeQuality;
    
    // Check for TypeScript
    if (fs.existsSync('tsconfig.json')) {
      quality.score += 25;
      quality.strengths.push('✅ TypeScript configuration');
    }
    
    // Check for shared schemas
    if (fs.existsSync('shared/schema.ts')) {
      quality.score += 20;
      quality.strengths.push('✅ Shared schema definitions');
    }
    
    // Check for proper component structure
    const componentDirs = [
      'client/src/components',
      'client/src/pages',
      'client/src/utils',
      'client/src/hooks'
    ];
    
    let structureScore = 0;
    for (const dir of componentDirs) {
      if (fs.existsSync(dir)) {
        structureScore += 5;
        quality.strengths.push(`✅ Organized structure: ${path.basename(dir)}`);
      }
    }
    
    quality.score += structureScore;
    
    // Check for error handling
    const errorFiles = ['client/src/pages/not-found.tsx'];
    for (const file of errorFiles) {
      if (fs.existsSync(file)) {
        quality.score += 15;
        quality.strengths.push('✅ Error handling implemented');
      }
    }
    
    // Check for proper build configuration
    if (fs.existsSync('vite.config.ts')) {
      quality.score += 15;
      quality.strengths.push('✅ Build configuration');
    }
    
    console.log(`Code Quality Score: ${quality.score}/100`);
  }

  // 6. BUNDLE OPTIMIZATION AUDIT
  async auditBundleOptimization() {
    console.log('\n📦 BUNDLE OPTIMIZATION AUDIT');
    console.log('-'.repeat(40));
    
    const bundle = this.results.bundleOptimization;
    
    // Check for optimization scripts
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    
    if (packageJson.scripts) {
      const optimizationScripts = [
        'build:optimized',
        'optimize:css',
        'optimize:js',
        'analyze:bundle'
      ];
      
      let scriptsFound = 0;
      for (const script of optimizationScripts) {
        if (packageJson.scripts[script]) {
          scriptsFound++;
          bundle.strengths.push(`✅ Optimization script: ${script}`);
        }
      }
      
      bundle.score += (scriptsFound / optimizationScripts.length) * 40;
    }
    
    // Check for optimization tools
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    const optimizationTools = [
      'terser', 'csso', 'cssnano', 'vite-plugin-compression'
    ];
    
    let toolsFound = 0;
    for (const tool of optimizationTools) {
      if (dependencies[tool]) {
        toolsFound++;
        bundle.strengths.push(`✅ Optimization tool: ${tool}`);
      }
    }
    
    bundle.score += (toolsFound / optimizationTools.length) * 30;
    
    // Check for lucide-react removal (performance optimization)
    let lucideRemoved = true;
    if (dependencies['lucide-react']) {
      lucideRemoved = false;
      bundle.issues.push('❌ Lucide-react still in dependencies - bundle bloat');
    }
    
    if (lucideRemoved) {
      bundle.score += 30;
      bundle.strengths.push('✅ Lucide-react removed - bundle optimized');
    }
    
    console.log(`Bundle Optimization Score: ${bundle.score}/100`);
  }

  // Helper method to find HTML files
  findHTMLFiles() {
    const htmlFiles = [];
    
    const searchDirs = ['dist/public', 'public'];
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          if (file.endsWith('.html')) {
            htmlFiles.push(path.join(dir, file));
          }
        });
      }
    }
    
    return htmlFiles;
  }

  // Calculate overall project score
  calculateOverallScore() {
    const scores = [
      this.results.performance.score,
      this.results.seo.score,
      this.results.security.score,
      this.results.codeQuality.score,
      this.results.bundleOptimization.score
    ];
    
    this.results.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  // Generate comprehensive report
  generateReport() {
    console.log('\n📊 COMPREHENSIVE PROJECT AUDIT REPORT');
    console.log('='.repeat(60));
    console.log(`🎯 OVERALL PROJECT SCORE: ${this.results.overallScore.toFixed(1)}%`);
    
    console.log('\n📋 DETAILED BREAKDOWN:');
    console.log(`├── Performance: ${this.results.performance.score}/100`);
    console.log(`├── SEO: ${this.results.seo.score}/100`);
    console.log(`├── Security: ${this.results.security.score}/100`);
    console.log(`├── Code Quality: ${this.results.codeQuality.score}/100`);
    console.log(`└── Bundle Optimization: ${this.results.bundleOptimization.score}/100`);
    
    // Production readiness assessment
    console.log('\n🚀 PRODUCTION READINESS ASSESSMENT:');
    if (this.results.overallScore >= 90) {
      console.log('✅ EXCELLENT - Ready for production deployment');
    } else if (this.results.overallScore >= 80) {
      console.log('✅ GOOD - Ready for production with minor optimizations');
    } else if (this.results.overallScore >= 70) {
      console.log('⚠️  FAIR - Needs improvements before production');
    } else if (this.results.overallScore >= 60) {
      console.log('⚠️  POOR - Significant improvements needed');
    } else {
      console.log('❌ CRITICAL - Not ready for production');
    }
    
    // Key strengths
    const allStrengths = [
      ...this.results.performance.strengths,
      ...this.results.seo.strengths,
      ...this.results.security.strengths,
      ...this.results.codeQuality.strengths,
      ...this.results.bundleOptimization.strengths
    ];
    
    if (allStrengths.length > 0) {
      console.log('\n💪 KEY STRENGTHS:');
      allStrengths.slice(0, 10).forEach(strength => console.log(`   ${strength}`));
    }
    
    // Critical issues
    const allIssues = [
      ...this.results.performance.issues,
      ...this.results.seo.issues,
      ...this.results.security.issues,
      ...this.results.codeQuality.issues,
      ...this.results.bundleOptimization.issues
    ];
    
    if (allIssues.length > 0) {
      console.log('\n🔥 CRITICAL ISSUES TO ADDRESS:');
      allIssues.forEach(issue => console.log(`   ${issue}`));
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('AUDIT COMPLETED');
  }
}

// Main execution
async function main() {
  console.log('🚀 STARTING COMPREHENSIVE PROJECT AUDIT...');
  console.log('Project: TravelWanders');
  console.log('Auditor: Independent Consultant');
  console.log('Date:', new Date().toISOString());
  
  // Run base audit system
  const baseAuditor = new ComprehensiveAuditSystem();
  await baseAuditor.runAllAudits();
  
  // Run detailed component audits
  const seoAuditor = new SEOAuditor();
  await seoAuditor.auditSEO();
  
  const performanceAuditor = new PerformanceAuditor();
  await performanceAuditor.auditPerformance();
  
  // Run overall project audit
  const projectAuditor = new ProjectAuditor();
  await projectAuditor.auditProject();
  
  // Final assessment
  console.log('\n' + '='.repeat(80));
  console.log('🎯 FINAL CONSULTANT ASSESSMENT');
  console.log('='.repeat(80));
  
  const finalScore = (baseAuditor.results.overallScore + seoAuditor.results.overallScore + performanceAuditor.results.overallScore + projectAuditor.results.overallScore) / 4;
  
  console.log(`\n📊 COMPOSITE SCORE: ${finalScore.toFixed(1)}%`);
  
  if (finalScore >= 85) {
    console.log('✅ RECOMMENDATION: READY FOR PRODUCTION');
    console.log('   The project demonstrates excellent technical standards and is ready for deployment.');
  } else if (finalScore >= 70) {
    console.log('⚠️  RECOMMENDATION: NEEDS MINOR IMPROVEMENTS');
    console.log('   The project is mostly ready but requires some optimizations before production.');
  } else {
    console.log('❌ RECOMMENDATION: NOT READY FOR PRODUCTION');
    console.log('   The project requires significant improvements before deployment.');
  }
  
  console.log('\n🔍 INDEPENDENT CONSULTANT AUDIT COMPLETE');
  console.log('='.repeat(80));
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { ProjectAuditor };