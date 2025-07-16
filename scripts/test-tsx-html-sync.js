#!/usr/bin/env node
/**
 * Test script to demonstrate TSX-HTML synchronization
 * This bypasses the enhanced compliance enforcer and directly tests the sync functionality
 */

import fs from 'fs';
import path from 'path';

class TSXHTMLSyncTester {
  constructor() {
    this.tsxDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
    this.htmlDir = path.join(process.cwd(), 'dist', 'public');
  }

  /**
   * Test TSX-HTML synchronization for all cities
   */
  async testSynchronization() {
    console.log('🚀 TESTING TSX-HTML SYNCHRONIZATION - TravelWanders');
    console.log('=====================================================\n');

    const results = { success: 0, failed: 0, total: 0 };

    try {
      const tsxFiles = fs.readdirSync(this.tsxDir).filter(file => file.endsWith('.tsx'));
      results.total = tsxFiles.length;

      console.log(`📊 Found ${tsxFiles.length} TSX city files to test\n`);

      for (const file of tsxFiles) {
        const cityName = file.replace('.tsx', '');
        console.log(`🔍 Testing ${cityName}...`);

        const tsxPath = path.join(this.tsxDir, file);
        const htmlPath = this.getHtmlPath(cityName);

        const tsxExists = fs.existsSync(tsxPath);
        const htmlExists = fs.existsSync(htmlPath);

        console.log(`  TSX file: ${tsxExists ? '✅ Found' : '❌ Missing'}`);
        console.log(`  HTML file: ${htmlExists ? '✅ Found' : '❌ Missing'}`);

        if (tsxExists && htmlExists) {
          const syncNeeded = await this.checkSyncNeeded(cityName, tsxPath, htmlPath);
          console.log(`  Sync needed: ${syncNeeded ? '⚠️ Yes' : '✅ No'}`);
          
          if (syncNeeded) {
            console.log(`  Status: ⚠️ Needs synchronization`);
            results.failed++;
          } else {
            console.log(`  Status: ✅ Synchronized`);
            results.success++;
          }
        } else {
          console.log(`  Status: ❌ Missing files`);
          results.failed++;
        }
        console.log('');
      }

      console.log('📊 SYNCHRONIZATION TEST RESULTS');
      console.log('================================');
      console.log(`Total cities: ${results.total}`);
      console.log(`Synchronized: ${results.success}`);
      console.log(`Need sync: ${results.failed}`);
      console.log(`Success rate: ${((results.success / results.total) * 100).toFixed(1)}%`);

      if (results.success === results.total) {
        console.log('\n🎉 ALL CITIES ARE PERFECTLY SYNCHRONIZED!');
      } else {
        console.log(`\n⚠️  ${results.failed} cities need synchronization`);
      }

    } catch (error) {
      console.error('❌ Test failed:', error);
    }
  }

  /**
   * Get HTML path for a city
   */
  getHtmlPath(cityName) {
    const slugName = this.cityNameToSlug(cityName);
    
    // Try both directory structure and direct file approaches
    const directoryPath = path.join(this.htmlDir, `best-things-to-do-in-${slugName}`, 'index.html');
    const filePath = path.join(this.htmlDir, `best-things-to-do-in-${slugName}.html`);
    
    // Return the path that exists
    if (fs.existsSync(directoryPath)) {
      return directoryPath;
    } else if (fs.existsSync(filePath)) {
      return filePath;
    }
    
    // Default to directory path if neither exists
    return directoryPath;
  }

  /**
   * Convert city name to URL slug
   */
  cityNameToSlug(cityName) {
    // Handle special cases first
    const specialCases = {
      'SãoPaulo': 'sao-paulo',
      'SanFrancisco': 'san-francisco',
      'SanDiego': 'san-diego',
      'Melbourne': 'melbourne',
      'Perth': 'perth',
      'Edinburgh': 'edinburgh',
      'London': 'london',
      'Rome': 'rome',
      'Berlin': 'berlin',
      'Tokyo': 'tokyo',
      'Seoul': 'seoul',
      'kyoto': 'kyoto',
      'Bali': 'bali'
    };
    
    if (specialCases[cityName]) {
      return specialCases[cityName];
    }
    
    return cityName
      .toLowerCase()
      .replace(/[áàâã]/g, 'a')
      .replace(/[éèê]/g, 'e')
      .replace(/[íì]/g, 'i')
      .replace(/[óò]/g, 'o')
      .replace(/[úù]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[ñ]/g, 'n')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  /**
   * Check if synchronization is needed
   */
  async checkSyncNeeded(cityName, tsxPath, htmlPath) {
    try {
      const tsxContent = fs.readFileSync(tsxPath, 'utf-8');
      const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

      // Extract titles for comparison
      const tsxTitleMatch = tsxContent.match(/title:\s*["']([^"']+)["']/);
      const htmlTitleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);

      const tsxTitle = tsxTitleMatch ? tsxTitleMatch[1].trim() : '';
      const htmlTitle = htmlTitleMatch ? htmlTitleMatch[1].trim() : '';

      // Check if titles match
      const titlesMatch = tsxTitle === htmlTitle;

      if (!titlesMatch) {
        console.log(`    TSX Title: "${tsxTitle}"`);
        console.log(`    HTML Title: "${htmlTitle}"`);
      }

      return !titlesMatch;
    } catch (error) {
      console.error(`    Error checking sync for ${cityName}:`, error.message);
      return true; // Assume sync needed if we can't check
    }
  }
}

// Run the test
const tester = new TSXHTMLSyncTester();
tester.testSynchronization();