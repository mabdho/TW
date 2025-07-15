#!/usr/bin/env node
/**
 * Generate All Missing HTML Files for 100% Compliance
 * Uses existing server routes to generate HTML files
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class HTMLGenerator {
  constructor() {
    this.serverUrl = 'http://localhost:3000';
    this.results = [];
    this.errors = [];
  }

  async generateAllMissingFiles() {
    console.log('🚀 GENERATING ALL MISSING HTML FILES');
    console.log('====================================\n');

    try {
      // Step 1: Generate all city HTML files
      await this.generateCityHtmlFiles();

      // Step 2: Generate all static pages
      await this.generateStaticPages();

      // Step 3: Update server cloaking
      await this.updateServerCloaking();

      // Step 4: Run final audit
      await this.runFinalAudit();

      console.log('\n✅ ALL HTML FILES GENERATED');
      console.log('============================');
      console.log(`Generated ${this.results.length} files successfully`);
      this.results.forEach(result => console.log(`  • ${result}`));
      
      if (this.errors.length > 0) {
        console.log(`\n⚠️  ${this.errors.length} errors encountered:`);
        this.errors.forEach(error => console.log(`  • ${error}`));
      }

    } catch (error) {
      console.error('❌ Critical error:', error.message);
      process.exit(1);
    }
  }

  async generateCityHtmlFiles() {
    console.log('🌍 Generating city HTML files...');
    
    // Get all city files
    const citiesDir = path.join(process.cwd(), 'client/src/pages/cities');
    const files = fs.readdirSync(citiesDir);
    const cityFiles = files.filter(file => file.endsWith('.tsx')).map(file => file.replace('.tsx', ''));
    
    console.log(`Found ${cityFiles.length} cities to process`);
    
    // Generate HTML directly using the existing functions
    const { generateCompleteHTML, extractCityDataFromTSX } = await import('../server/html-generator.js');
    
    for (const cityKey of cityFiles) {
      try {
        const tsxFilePath = path.join(citiesDir, `${cityKey}.tsx`);
        const cityData = await extractCityDataFromTSX(tsxFilePath);
        
        if (cityData) {
          const html = generateCompleteHTML(cityData);
          
          // Create directory and save file
          const citySlug = cityData.cityName.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
          
          const outputDir = path.join(process.cwd(), 'dist/public', `best-things-to-do-in-${citySlug}`);
          fs.mkdirSync(outputDir, { recursive: true });
          
          const outputFile = path.join(outputDir, 'index.html');
          fs.writeFileSync(outputFile, html, 'utf-8');
          
          this.results.push(`${cityData.cityName} HTML generated (${(html.length / 1024).toFixed(2)} KB)`);
          console.log(`  ✅ ${cityData.cityName} - HTML file generated`);
        } else {
          this.errors.push(`Could not extract data from ${cityKey}`);
        }
      } catch (error) {
        this.errors.push(`Error processing ${cityKey}: ${error.message}`);
      }
    }
  }

  async generateStaticPages() {
    console.log('📄 Generating static pages...');
    
    const { 
      generateHomePageHTML,
      generateDestinationsPageHTML,
      generateBlogsPageHTML,
      generatePrivacyPolicyHTML,
      generateTermsOfServiceHTML,
      generateCookiePolicyHTML
    } = await import('../server/html-generator.js');
    
    const pages = [
      { name: 'Home', generator: generateHomePageHTML, filename: 'home-seo.html' },
      { name: 'Destinations', generator: generateDestinationsPageHTML, filename: 'destinations-seo.html' },
      { name: 'Blogs', generator: generateBlogsPageHTML, filename: 'blogs-seo.html' },
      { name: 'Privacy Policy', generator: generatePrivacyPolicyHTML, filename: 'privacy-policy.html' },
      { name: 'Terms of Service', generator: generateTermsOfServiceHTML, filename: 'terms-of-service.html' },
      { name: 'Cookie Policy', generator: generateCookiePolicyHTML, filename: 'cookie-policy.html' }
    ];
    
    const outputDir = path.join(process.cwd(), 'dist/public');
    fs.mkdirSync(outputDir, { recursive: true });
    
    for (const page of pages) {
      try {
        const html = page.generator();
        const filePath = path.join(outputDir, page.filename);
        fs.writeFileSync(filePath, html, 'utf-8');
        
        this.results.push(`${page.name} HTML generated (${(html.length / 1024).toFixed(2)} KB)`);
        console.log(`  ✅ ${page.name} - HTML file generated`);
      } catch (error) {
        this.errors.push(`Error generating ${page.name}: ${error.message}`);
      }
    }
  }

  async updateServerCloaking() {
    console.log('🎭 Updating server cloaking...');
    
    try {
      const serverPath = path.join(process.cwd(), 'server/index.ts');
      let serverContent = fs.readFileSync(serverPath, 'utf-8');
      
      // Enhanced bot detection
      const botDetectionCode = `
// Enhanced bot detection for 100% compliance
function isSearchEngineBot(userAgent) {
  if (!userAgent) return false;
  
  const botPatterns = [
    /googlebot/i, /bingbot/i, /slurp/i, /duckduckbot/i, /baiduspider/i, 
    /yandexbot/i, /facebookexternalhit/i, /twitterbot/i, /linkedinbot/i,
    /whatsapp/i, /telegrambot/i, /discordbot/i, /applebot/i, /crawler/i,
    /spider/i, /bot/i, /archiver/i, /scraper/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
}
`;

      // Enhanced cloaking routes
      const cloakingRoutes = `
// Enhanced cloaking routes for 100% compliance
const path = require('path');
const fs = require('fs');

// Legal pages cloaking
app.get(['/privacy-policy', '/terms-of-service', '/cookie-policy'], (req, res, next) => {
  const userAgent = req.get('User-Agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    const pageName = req.path.substring(1);
    const htmlPath = path.join(process.cwd(), 'dist/public', pageName + '.html');
    
    if (fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }
  }
  
  next();
});

// City pages cloaking
app.get('/best-things-to-do-in-:cityName', (req, res, next) => {
  const userAgent = req.get('User-Agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    const cityName = req.params.cityName;
    const htmlPath = path.join(process.cwd(), 'dist/public', 'best-things-to-do-in-' + cityName, 'index.html');
    
    if (fs.existsSync(htmlPath)) {
      return res.sendFile(htmlPath);
    }
  }
  
  next();
});

// Main pages cloaking
app.get(['/', '/destinations', '/blogs'], (req, res, next) => {
  const userAgent = req.get('User-Agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    let filename = '';
    switch(req.path) {
      case '/': filename = 'home-seo.html'; break;
      case '/destinations': filename = 'destinations-seo.html'; break;
      case '/blogs': filename = 'blogs-seo.html'; break;
    }
    
    if (filename) {
      const htmlPath = path.join(process.cwd(), 'dist/public', filename);
      if (fs.existsSync(htmlPath)) {
        return res.sendFile(htmlPath);
      }
    }
  }
  
  next();
});
`;

      // Insert enhancements if not present
      if (!serverContent.includes('Enhanced bot detection')) {
        const importIndex = serverContent.indexOf('import');
        if (importIndex > -1) {
          serverContent = serverContent.slice(0, importIndex) + botDetectionCode + '\n' + serverContent.slice(importIndex);
        }
      }

      if (!serverContent.includes('Enhanced cloaking routes')) {
        const viteIndex = serverContent.indexOf('app.use(vite.middlewares)');
        if (viteIndex > -1) {
          serverContent = serverContent.slice(0, viteIndex) + cloakingRoutes + '\n' + serverContent.slice(viteIndex);
        }
      }

      fs.writeFileSync(serverPath, serverContent, 'utf-8');
      this.results.push('Server cloaking enhanced');
      console.log('  ✅ Server cloaking routes updated');
      
    } catch (error) {
      this.errors.push(`Error updating server cloaking: ${error.message}`);
    }
  }

  async runFinalAudit() {
    console.log('🔍 Running final compliance audit...');
    
    try {
      const auditOutput = execSync('node comprehensive-audit-system.js', { 
        cwd: process.cwd(), 
        encoding: 'utf8' 
      });
      
      console.log('\n📊 FINAL AUDIT RESULTS:');
      console.log('========================');
      
      // Extract key information
      const scoreMatch = auditOutput.match(/🎯 OVERALL SCORE: ([\d.]+)%/);
      if (scoreMatch) {
        const score = parseFloat(scoreMatch[1]);
        if (score >= 100) {
          console.log('✅ PERFECT 100% COMPLIANCE ACHIEVED!');
        } else if (score >= 90) {
          console.log(`📈 EXCELLENT: ${score}% compliance (A+ grade)`);
        } else {
          console.log(`📊 Current score: ${score}%`);
        }
      }
      
      // Show breakdown
      const breakdown = auditOutput.match(/📋 DETAILED BREAKDOWN:([\s\S]*?)🚀 PRODUCTION READINESS/);
      if (breakdown) {
        console.log('\n📋 BREAKDOWN:');
        console.log(breakdown[1].trim());
      }
      
    } catch (error) {
      this.errors.push(`Error running final audit: ${error.message}`);
    }
  }
}

// Run the generator
const generator = new HTMLGenerator();
generator.generateAllMissingFiles().then(() => {
  console.log('\n🎉 HTML GENERATION COMPLETED');
  process.exit(0);
}).catch((error) => {
  console.error('❌ HTML GENERATION FAILED:', error);
  process.exit(1);
});