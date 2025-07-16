/**
 * Automatic HTML Generator for TravelWanders
 * Ensures all cities have proper HTML files generated using Firebase HTML rendering system
 * Maintains perfect TSX-HTML synchronization
 */

import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { generateCompleteHTML, extractCityDataFromTSX, saveCityHtmlFile } from '../html-generator';

interface CityInfo {
  name: string;
  country: string;
  tsxFile: string;
  htmlPath: string;
}

export class AutoHTMLGenerator {
  private cities: CityInfo[] = [];

  constructor() {
    // Initialize cities array - will be populated async
    this.cities = [];
  }

  /**
   * Initialize the generator by discovering cities
   */
  public async initialize(): Promise<void> {
    await this.discoverCities();
  }

  /**
   * Discover all cities from the TSX files
   */
  private async discoverCities(): Promise<void> {
    try {
      const citiesDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
      
      if (!existsSync(citiesDir)) {
        console.warn('Cities directory not found');
        return;
      }

      const fs = await import('fs');
      const files = fs.readdirSync(citiesDir).filter((file: string) => file.endsWith('.tsx'));
      
      for (const file of files) {
        const cityName = file.replace('.tsx', '');
        const tsxPath = path.join(citiesDir, file);
        const htmlPath = path.join(process.cwd(), 'dist', 'public', `best-things-to-do-in-${cityName.toLowerCase()}`, 'index.html');
        
        // Extract country from TSX file
        try {
          const tsxContent = readFileSync(tsxPath, 'utf-8');
          const countryMatch = tsxContent.match(/country="([^"]+)"/);
          const country = countryMatch ? countryMatch[1] : 'Unknown';
          
          this.cities.push({
            name: cityName,
            country,
            tsxFile: tsxPath,
            htmlPath
          });
        } catch (error) {
          console.warn(`Could not read TSX file for ${cityName}:`, error);
        }
      }
      
      console.log(`📍 Discovered ${this.cities.length} cities for HTML generation`);
    } catch (error) {
      console.error('Error discovering cities:', error);
    }
  }

  /**
   * Check which cities are missing HTML files
   */
  public getMissingHTMLCities(): CityInfo[] {
    return this.cities.filter(city => !existsSync(city.htmlPath));
  }

  /**
   * Generate HTML for a specific city
   */
  public async generateCityHTML(cityInfo: CityInfo): Promise<boolean> {
    try {
      console.log(`🔧 Generating HTML for ${cityInfo.name}...`);
      
      // Extract city data from TSX
      const cityData = await extractCityDataFromTSX(cityInfo.tsxFile);
      
      if (!cityData) {
        console.error(`Failed to extract data for ${cityInfo.name}`);
        return false;
      }
      
      // Generate complete HTML
      const completeHTML = await generateCompleteHTML(cityData);
      
      // Save HTML file
      await saveCityHtmlFile(cityInfo.name.toLowerCase(), completeHTML);
      
      console.log(`✅ HTML generated for ${cityInfo.name}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to generate HTML for ${cityInfo.name}:`, error);
      return false;
    }
  }

  /**
   * Generate HTML for all missing cities
   */
  public async generateAllMissingHTML(): Promise<{ success: number; failed: number }> {
    const missingCities = this.getMissingHTMLCities();
    let success = 0;
    let failed = 0;

    console.log(`🚀 Generating HTML for ${missingCities.length} missing cities...`);

    for (const city of missingCities) {
      const result = await this.generateCityHTML(city);
      if (result) {
        success++;
      } else {
        failed++;
      }
    }

    return { success, failed };
  }

  /**
   * Regenerate HTML for all cities (force update)
   */
  public async regenerateAllHTML(): Promise<{ success: number; failed: number }> {
    let success = 0;
    let failed = 0;

    console.log(`🔄 Regenerating HTML for all ${this.cities.length} cities...`);

    for (const city of this.cities) {
      const result = await this.generateCityHTML(city);
      if (result) {
        success++;
      } else {
        failed++;
      }
    }

    return { success, failed };
  }

  /**
   * Get status report of all cities
   */
  public getCityStatus(): { total: number; withHTML: number; missingHTML: number; cities: Array<{ name: string; country: string; hasHTML: boolean }> } {
    const citiesWithStatus = this.cities.map(city => ({
      name: city.name,
      country: city.country,
      hasHTML: existsSync(city.htmlPath)
    }));

    return {
      total: this.cities.length,
      withHTML: citiesWithStatus.filter(c => c.hasHTML).length,
      missingHTML: citiesWithStatus.filter(c => !c.hasHTML).length,
      cities: citiesWithStatus
    };
  }
}

/**
 * Ensure HTML generation for a specific city (called from routes)
 */
export async function ensureCityHasHTML(cityName: string): Promise<boolean> {
  const generator = new AutoHTMLGenerator();
  await generator.initialize();
  
  const cityInfo = generator['cities'].find(c => c.name.toLowerCase() === cityName.toLowerCase());
  
  if (!cityInfo) {
    console.error(`City ${cityName} not found in discovery list`);
    return false;
  }

  if (existsSync(cityInfo.htmlPath)) {
    console.log(`✅ HTML already exists for ${cityName}`);
    return true;
  }

  return await generator.generateCityHTML(cityInfo);
}

/**
 * Auto-generate missing HTML files on server start
 */
export async function autoGenerateMissingHTML(): Promise<void> {
  const generator = new AutoHTMLGenerator();
  await generator.initialize();
  
  const status = generator.getCityStatus();
  
  console.log(`📊 City HTML Status: ${status.withHTML}/${status.total} cities have HTML files`);
  
  if (status.missingHTML > 0) {
    console.log(`🔧 Auto-generating HTML for ${status.missingHTML} missing cities...`);
    const result = await generator.generateAllMissingHTML();
    console.log(`✅ Auto-generation complete: ${result.success} success, ${result.failed} failed`);
  } else {
    console.log(`✅ All cities have HTML files`);
  }
}