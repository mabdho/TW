/**
 * Regenerate city HTML files to match updated TSX keyword structure
 * This script will regenerate HTML files for all cities to ensure they match the updated TSX files
 */

import fs from 'fs/promises';
import path from 'path';

async function regenerateCityHTML() {
  try {
    console.log('🔄 Starting city HTML regeneration...');
    
    // Import the HTML generator functions
    const { generateCompleteHTML, extractCityDataFromTSX } = await import('./server/html-generator.ts');
    
    // Get all TSX files from the cities directory
    const citiesDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
    const files = await fs.readdir(citiesDir);
    const tsxFiles = files.filter(file => file.endsWith('.tsx'));
    
    console.log(`📁 Found ${tsxFiles.length} city TSX files to process`);
    
    const results = [];
    
    for (const file of tsxFiles) {
      try {
        const cityName = file.replace('.tsx', '');
        console.log(`🏙️  Processing ${cityName}...`);
        
        const tsxFilePath = path.join(citiesDir, file);
        const cityData = await extractCityDataFromTSX(tsxFilePath);
        
        if (cityData) {
          // Generate complete HTML
          const completeHTML = await generateCompleteHTML(cityData);
          
          // Create output directory
          const outputDir = path.join(process.cwd(), 'dist', 'public', `things-to-do-in-${cityName.toLowerCase()}`);
          await fs.mkdir(outputDir, { recursive: true });
          
          // Write HTML file
          const outputFile = path.join(outputDir, 'index.html');
          await fs.writeFile(outputFile, completeHTML, 'utf-8');
          
          console.log(`✅ Generated HTML for ${cityName} (${(completeHTML.length / 1024).toFixed(2)} KB)`);
          
          results.push({
            cityName,
            success: true,
            fileSize: `${(completeHTML.length / 1024).toFixed(2)} KB`,
            outputPath: outputFile
          });
        } else {
          console.log(`❌ Failed to extract city data for ${cityName}`);
          results.push({
            cityName,
            success: false,
            error: 'Failed to extract city data'
          });
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error);
        results.push({
          cityName: file.replace('.tsx', ''),
          success: false,
          error: error.message
        });
      }
    }
    
    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`\n📊 Summary:`);
    console.log(`✅ Successfully regenerated: ${successful} cities`);
    console.log(`❌ Failed: ${failed} cities`);
    
    if (failed > 0) {
      console.log(`\n❌ Failed cities:`);
      results.filter(r => !r.success).forEach(r => {
        console.log(`  - ${r.cityName}: ${r.error}`);
      });
    }
    
    console.log('\n🎉 City HTML regeneration completed!');
    
  } catch (error) {
    console.error('❌ Error during city HTML regeneration:', error);
  }
}

// Run the regeneration
regenerateCityHTML();