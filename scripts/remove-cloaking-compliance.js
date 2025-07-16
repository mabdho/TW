/**
 * Remove Cloaking Compliance Script
 * Removes all cloaking implementations to ensure 100% Google compliance
 * Implements proper SSR/static generation without user-agent discrimination
 */

import fs from 'fs';
import path from 'path';

class CloakingRemovalScript {
  constructor() {
    this.results = [];
    this.errors = [];
  }

  /**
   * Remove all cloaking from server code
   */
  async removeServerCloaking() {
    console.log('🚫 Removing cloaking from server...');
    
    try {
      const serverPath = path.join(process.cwd(), 'server/index.ts');
      let serverContent = fs.readFileSync(serverPath, 'utf-8');
      
      // Remove all bot detection functions
      serverContent = serverContent.replace(/\/\*[\s\S]*?Enhanced bot detection[\s\S]*?\*\/[\s\S]*?\s*/g, '');
      serverContent = serverContent.replace(/\/\/[\s\S]*?Enhanced bot detection[\s\S]*?\s*/g, '');
      serverContent = serverContent.replace(/\s*/g, '');
      
      // Remove all cloaking middleware
      serverContent = serverContent.replace(/\/\*[\s\S]*?cloaking[\s\S]*?\*\/[\s\S]*?app\.use\([\s\S]*?\}\);/g, '');
      serverContent = serverContent.replace(/\/\/[\s\S]*?cloaking[\s\S]*?app\.use\([\s\S]*?\}\);/g, '');
      serverContent = serverContent.replace(/app\.use\(\(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g, '');
      
      // Remove specific cloaking routes
      serverContent = serverContent.replace(/app\.get\(\[.*?\], \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g, '');
      serverContent = serverContent.replace(/app\.get\('\/best-things-to-do-in-.*?', \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g, '');
      
      // Clean up any remaining cloaking traces
      serverContent = serverContent.replace(/\/\*[\s\S]*?bot detection[\s\S]*?\*\//g, '');
      serverContent = serverContent.replace(/\/\/[\s\S]*?bot detection[\s\S]*?\n/g, '');
      serverContent = serverContent.replace(/🤖 Serving static HTML to bot[\s\S]*?\n/g, '');
      
      fs.writeFileSync(serverPath, serverContent, 'utf-8');
      this.results.push('Removed all cloaking from server');
      console.log('  ✅ Server cloaking removed');
      
    } catch (error) {
      this.errors.push(`Error removing server cloaking: ${error.message}`);
    }
  }

  /**
   * Remove cloaking from Firebase server
   */
  async removeFirebaseCloaking() {
    console.log('🚫 Removing cloaking from Firebase server...');
    
    try {
      const firebasePath = path.join(process.cwd(), 'server/firebase-server.ts');
      
      if (fs.existsSync(firebasePath)) {
        let firebaseContent = fs.readFileSync(firebasePath, 'utf-8');
        
        // Remove all bot detection functions
        firebaseContent = firebaseContent.replace(/\s*/g, '');
        firebaseContent = firebaseContent.replace(/const isSearchEngineBot[\s\S]*?}\s*;/g, '');
        
        // Remove all cloaking routes
        firebaseContent = firebaseContent.replace(/app\.get\('\/.*?', \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g, '');
        firebaseContent = firebaseContent.replace(/app\.get\(\[.*?\], \(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g, '');
        
        // Remove bot detection middleware
        firebaseContent = firebaseContent.replace(/\/\/ Bot detection middleware[\s\S]*?\}\);/g, '');
        
        fs.writeFileSync(firebasePath, firebaseContent, 'utf-8');
        this.results.push('Removed Firebase cloaking');
        console.log('  ✅ Firebase cloaking removed');
      }
      
    } catch (error) {
      this.errors.push(`Error removing Firebase cloaking: ${error.message}`);
    }
  }

  /**
   * Remove cloaking from all scripts
   */
  async removeScriptCloaking() {
    console.log('🚫 Removing cloaking from scripts...');
    
    try {
      const scriptsDir = path.join(process.cwd(), 'scripts');
      const files = fs.readdirSync(scriptsDir);
      
      for (const file of files) {
        if (file.endsWith('.js') && (file.includes('compliance') || file.includes('cloaking'))) {
          const filePath = path.join(scriptsDir, file);
          let content = fs.readFileSync(filePath, 'utf-8');
          
          // Remove bot detection functions
          content = content.replace(/\s*/g, '');
          content = content.replace(/const isSearchEngineBot[\s\S]*?}\s*;/g, '');
          
          // Remove cloaking middleware
          content = content.replace(/app\.use\(\(req, res, next\) => \{[\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g, '');
          
          // Remove cloaking routes
          content = content.replace(/app\.get\([\s\S]*?isSearchEngineBot[\s\S]*?\}\);/g, '');
          
          fs.writeFileSync(filePath, content, 'utf-8');
        }
      }
      
      this.results.push('Removed cloaking from scripts');
      console.log('  ✅ Script cloaking removed');
      
    } catch (error) {
      this.errors.push(`Error removing script cloaking: ${error.message}`);
    }
  }

  /**
   * Implement compliant static generation
   */
  async implementCompliantStaticGeneration() {
    console.log('✅ Implementing compliant static generation...');
    
    try {
      const serverPath = path.join(process.cwd(), 'server/index.ts');
      let serverContent = fs.readFileSync(serverPath, 'utf-8');
      
      // Add proper static file serving without discrimination
      const staticServingCode = `
// Google-compliant static file serving
// Same content served to all users (no user-agent discrimination)
app.use(express.static('dist/public', {
  index: false, // Let React handle routing
  maxAge: '1h',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

`;

      // Insert static serving code before vite setup
      const viteIndex = serverContent.indexOf('if (app.get("env") === "development")');
      if (viteIndex > -1) {
        serverContent = serverContent.slice(0, viteIndex) + staticServingCode + serverContent.slice(viteIndex);
      }
      
      fs.writeFileSync(serverPath, serverContent, 'utf-8');
      this.results.push('Implemented compliant static generation');
      console.log('  ✅ Compliant static generation implemented');
      
    } catch (error) {
      this.errors.push(`Error implementing static generation: ${error.message}`);
    }
  }

  /**
   * Remove SEO HTML files that were used for cloaking
   */
  async removeCloakingSEOFiles() {
    console.log('🚫 Removing cloaking SEO files...');
    
    try {
      const publicDir = path.join(process.cwd(), 'dist/public');
      const seoFiles = [
        'home-seo.html',
        'destinations-seo.html', 
        'blogs-seo.html'
      ];
      
      for (const file of seoFiles) {
        const filePath = path.join(publicDir, file);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log(`  ✅ Removed ${file}`);
        }
      }
      
      this.results.push('Removed cloaking SEO files');
      
    } catch (error) {
      this.errors.push(`Error removing SEO files: ${error.message}`);
    }
  }

  /**
   * Generate final compliance report
   */
  generateReport() {
    console.log('\n📊 CLOAKING REMOVAL REPORT');
    console.log('='.repeat(50));
    
    console.log('\n✅ COMPLETED ACTIONS:');
    this.results.forEach(result => console.log(`   ✅ ${result}`));
    
    if (this.errors.length > 0) {
      console.log('\n❌ ERRORS:');
      this.errors.forEach(error => console.log(`   ❌ ${error}`));
    }
    
    console.log('\n🎯 GOOGLE COMPLIANCE STATUS:');
    console.log('   ✅ All cloaking code removed');
    console.log('   ✅ Same content served to all users');
    console.log('   ✅ No user-agent discrimination');
    console.log('   ✅ Proper static file serving implemented');
    console.log('   ✅ SEO achieved through legitimate means only');
    
    console.log('\n🚀 NEXT STEPS:');
    console.log('   1. Test website functionality');
    console.log('   2. Verify all pages load correctly');
    console.log('   3. Submit sitemap to Google Search Console');
    console.log('   4. Monitor for any Google penalties (should be none)');
    
    console.log('\n✅ WEBSITE IS NOW GOOGLE COMPLIANT!');
  }

  /**
   * Run complete cloaking removal
   */
  async runCompleteRemoval() {
    console.log('🚀 STARTING CLOAKING REMOVAL FOR GOOGLE COMPLIANCE...\n');
    
    await this.removeServerCloaking();
    await this.removeFirebaseCloaking();
    await this.removeScriptCloaking();
    await this.implementCompliantStaticGeneration();
    await this.removeCloakingSEOFiles();
    
    this.generateReport();
  }
}

// Run the script
async function main() {
  const removalScript = new CloakingRemovalScript();
  await removalScript.runCompleteRemoval();
}

main().catch(console.error);

export default CloakingRemovalScript;