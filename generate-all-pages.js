#!/usr/bin/env node

/**
 * Generate All Pages using Firebase HTML Rendering System
 * This script generates all pages (homepage, destinations, blogs, city pages, legal pages) 
 * along with sitemap.xml and robots.txt using the Firebase HTML rendering system.
 */

import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

// Import the HTML generation functions
async function generateAllPages() {
  console.log('🚀 Starting comprehensive Firebase HTML generation...');
  
  try {
    // Dynamic imports to work with ES modules
    const { 
      generateHomePageHTML,
      generateDestinationsPageHTML,
      generateBlogsPageHTML,
      generatePrivacyPolicyHTML,
      generateTermsOfServiceHTML,
      generateCookiePolicyHTML,
      generateCompleteHTML,
      extractCityDataFromTSX,
      readBlogDataFromFileSystem,
      generateIndividualBlogHTML
    } = await import('./server/html-generator.ts');
    
    const { getSitemap, getRobotsTxt } = await import('./server/routes/seo.ts');
    
    const results = [];
    const errors = [];
    
    // Ensure output directory exists
    const outputDir = path.join(process.cwd(), 'dist', 'public');
    await fs.mkdir(outputDir, { recursive: true });
    
    // 1. Generate Homepage
    try {
      console.log('  → Generating homepage...');
      const homePageHTML = generateHomePageHTML();
      const homeOutputPath = path.join(outputDir, 'home-seo.html');
      await fs.writeFile(homeOutputPath, homePageHTML, 'utf-8');
      
      const homeStat = await fs.stat(homeOutputPath);
      results.push({
        page: 'Homepage',
        path: homeOutputPath,
        size: `${(homeStat.size / 1024).toFixed(2)} KB`,
        success: true
      });
      console.log('  ✅ Homepage generated successfully');
    } catch (error) {
      errors.push({ page: 'Homepage', error: error.message });
      console.error('  ❌ Homepage generation failed:', error);
    }
    
    // 2. Generate Destinations Page
    try {
      console.log('  → Generating destinations page...');
      const destinationsHTML = generateDestinationsPageHTML();
      const destinationsOutputPath = path.join(outputDir, 'destinations-seo.html');
      await fs.writeFile(destinationsOutputPath, destinationsHTML, 'utf-8');
      
      const destinationsStat = await fs.stat(destinationsOutputPath);
      results.push({
        page: 'Destinations',
        path: destinationsOutputPath,
        size: `${(destinationsStat.size / 1024).toFixed(2)} KB`,
        success: true
      });
      console.log('  ✅ Destinations page generated successfully');
    } catch (error) {
      errors.push({ page: 'Destinations', error: error.message });
      console.error('  ❌ Destinations page generation failed:', error);
    }
    
    // 3. Generate Blogs Page
    try {
      console.log('  → Generating blogs page...');
      const blogsHTML = generateBlogsPageHTML();
      const blogsOutputPath = path.join(outputDir, 'blogs-seo.html');
      await fs.writeFile(blogsOutputPath, blogsHTML, 'utf-8');
      
      const blogsStat = await fs.stat(blogsOutputPath);
      results.push({
        page: 'Blogs',
        path: blogsOutputPath,
        size: `${(blogsStat.size / 1024).toFixed(2)} KB`,
        success: true
      });
      console.log('  ✅ Blogs page generated successfully');
    } catch (error) {
      errors.push({ page: 'Blogs', error: error.message });
      console.error('  ❌ Blogs page generation failed:', error);
    }
    
    // 4. Generate Legal Pages
    try {
      console.log('  → Generating legal pages...');
      const legalPages = [
        { name: 'Privacy Policy', generator: generatePrivacyPolicyHTML, filename: 'privacy-policy.html' },
        { name: 'Terms of Service', generator: generateTermsOfServiceHTML, filename: 'terms-of-service.html' },
        { name: 'Cookie Policy', generator: generateCookiePolicyHTML, filename: 'cookie-policy.html' }
      ];
      
      for (const legalPage of legalPages) {
        const htmlContent = legalPage.generator();
        const outputPath = path.join(outputDir, legalPage.filename);
        await fs.writeFile(outputPath, htmlContent, 'utf-8');
        
        const stat = await fs.stat(outputPath);
        results.push({
          page: legalPage.name,
          path: outputPath,
          size: `${(stat.size / 1024).toFixed(2)} KB`,
          success: true
        });
        console.log(`  ✅ ${legalPage.name} generated successfully`);
      }
    } catch (error) {
      errors.push({ page: 'Legal Pages', error: error.message });
      console.error('  ❌ Legal pages generation failed:', error);
    }
    
    // 5. Generate City Pages
    try {
      console.log('  → Generating city pages...');
      const citiesDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
      
      if (existsSync(citiesDir)) {
        const cityFiles = await fs.readdir(citiesDir);
        const tsxFiles = cityFiles.filter(file => file.endsWith('.tsx'));
        
        for (const tsxFile of tsxFiles) {
          const cityKey = tsxFile.replace('.tsx', '');
          const tsxFilePath = path.join(citiesDir, tsxFile);
          
          try {
            const cityData = await extractCityDataFromTSX(tsxFilePath);
            
            if (cityData) {
              const cityHTML = generateCompleteHTML(cityData);
              const cityOutputDir = path.join(outputDir, `best-things-to-do-in-${cityData.cityName.toLowerCase()}`);
              await fs.mkdir(cityOutputDir, { recursive: true });
              
              const cityOutputPath = path.join(cityOutputDir, 'index.html');
              await fs.writeFile(cityOutputPath, cityHTML, 'utf-8');
              
              const cityStat = await fs.stat(cityOutputPath);
              results.push({
                page: `${cityData.cityName} City Guide`,
                path: cityOutputPath,
                size: `${(cityStat.size / 1024).toFixed(2)} KB`,
                success: true
              });
              console.log(`  ✅ ${cityData.cityName} city page generated successfully`);
            }
          } catch (cityError) {
            errors.push({ 
              page: `${cityKey} City Page`, 
              error: cityError.message 
            });
            console.error(`  ❌ ${cityKey} city page generation failed:`, cityError);
          }
        }
      }
    } catch (error) {
      errors.push({ page: 'City Pages', error: error.message });
      console.error('  ❌ City pages generation failed:', error);
    }
    
    // 6. Generate Individual Blog Pages
    try {
      console.log('  → Generating individual blog pages...');
      const allBlogsData = readBlogDataFromFileSystem();
      
      for (const blogData of allBlogsData) {
        try {
          const blogHTML = generateIndividualBlogHTML(blogData);
          const blogOutputDir = path.join(outputDir, 'blog');
          await fs.mkdir(blogOutputDir, { recursive: true });
          
          const blogOutputPath = path.join(blogOutputDir, `${blogData.id}.html`);
          await fs.writeFile(blogOutputPath, blogHTML, 'utf-8');
          
          const blogStat = await fs.stat(blogOutputPath);
          results.push({
            page: `Blog: ${blogData.title}`,
            path: blogOutputPath,
            size: `${(blogStat.size / 1024).toFixed(2)} KB`,
            success: true
          });
          console.log(`  ✅ Blog "${blogData.title}" generated successfully`);
        } catch (blogError) {
          errors.push({ 
            page: `Blog: ${blogData.title}`, 
            error: blogError.message 
          });
          console.error(`  ❌ Blog "${blogData.title}" generation failed:`, blogError);
        }
      }
    } catch (error) {
      errors.push({ page: 'Individual Blog Pages', error: error.message });
      console.error('  ❌ Individual blog pages generation failed:', error);
    }
    
    // 7. Generate sitemap.xml
    try {
      console.log('  → Generating sitemap.xml...');
      const sitemapContent = await getSitemap();
      const sitemapOutputPath = path.join(outputDir, 'sitemap.xml');
      await fs.writeFile(sitemapOutputPath, sitemapContent, 'utf-8');
      
      const sitemapStat = await fs.stat(sitemapOutputPath);
      results.push({
        page: 'Sitemap',
        path: sitemapOutputPath,
        size: `${(sitemapStat.size / 1024).toFixed(2)} KB`,
        success: true
      });
      console.log('  ✅ Sitemap generated successfully');
    } catch (error) {
      errors.push({ page: 'Sitemap', error: error.message });
      console.error('  ❌ Sitemap generation failed:', error);
    }
    
    // 8. Generate robots.txt
    try {
      console.log('  → Generating robots.txt...');
      const robotsContent = getRobotsTxt();
      const robotsOutputPath = path.join(outputDir, 'robots.txt');
      await fs.writeFile(robotsOutputPath, robotsContent, 'utf-8');
      
      const robotsStat = await fs.stat(robotsOutputPath);
      results.push({
        page: 'Robots.txt',
        path: robotsOutputPath,
        size: `${(robotsStat.size / 1024).toFixed(2)} KB`,
        success: true
      });
      console.log('  ✅ Robots.txt generated successfully');
    } catch (error) {
      errors.push({ page: 'Robots.txt', error: error.message });
      console.error('  ❌ Robots.txt generation failed:', error);
    }
    
    // Summary
    console.log(`\n🎉 Firebase HTML generation completed!`);
    console.log(`✅ ${results.length} pages generated successfully`);
    console.log(`❌ ${errors.length} pages failed`);
    
    if (results.length > 0) {
      console.log('\n📄 Generated Pages:');
      results.forEach(result => {
        console.log(`  • ${result.page}: ${result.size}`);
      });
    }
    
    if (errors.length > 0) {
      console.log('\n❌ Failed Pages:');
      errors.forEach(error => {
        console.log(`  • ${error.page}: ${error.error}`);
      });
    }
    
    const totalSize = results.reduce((sum, result) => {
      const sizeNumber = parseFloat(result.size.replace(' KB', ''));
      return sum + sizeNumber;
    }, 0);
    
    console.log(`\n📊 Total size: ${totalSize.toFixed(2)} KB`);
    console.log(`📁 Output directory: ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Firebase HTML generation failed:', error);
    process.exit(1);
  }
}

// Run the script
generateAllPages().catch(console.error);