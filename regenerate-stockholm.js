/**
 * Simple script to regenerate Stockholm HTML page
 */

import { generateCompleteHTML, extractCityDataFromTSX } from './server/html-generator.ts';
import { mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

async function regenerateCity(cityName) {
  try {
    console.log(`🔄 Regenerating ${cityName} HTML...`);
    
    // Extract city data from TSX file
    const tsxPath = `./client/src/pages/cities/${cityName}.tsx`;
    const cityData = await extractCityDataFromTSX(tsxPath);
    
    if (!cityData) {
      console.error(`❌ Failed to extract city data from TSX file for ${cityName}`);
      return;
    }
    
    console.log(`✅ City data extracted successfully for ${cityName}`);
    
    // Generate complete HTML
    const completeHTML = await generateCompleteHTML(cityData);
    
    // Save to file
    const outputDir = `./dist/public/best-things-to-do-in-${cityName.toLowerCase()}`;
    const outputPath = path.join(outputDir, 'index.html');
    
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
    }
    
    await writeFile(outputPath, completeHTML, 'utf-8');
    
    console.log(`✅ ${cityName} HTML regenerated successfully`);
    console.log(`📄 Output: ${outputPath}`);
    
  } catch (error) {
    console.error(`❌ Error regenerating ${cityName}:`, error);
  }
}

// Get city name from command line arguments or default to Stockholm
const cityName = process.argv[2] || 'Stockholm';
regenerateCity(cityName);