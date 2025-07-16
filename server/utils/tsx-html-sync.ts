/**
 * Enhanced TSX HTML Synchronization System
 * Ensures automatic synchronization between TSX components and HTML files
 * Runs automatically during page generation without manual intervention
 */

import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface SyncData {
  title: string;
  description: string;
  h1: string;
  imageUrl?: string;
  keywords?: string[];
}

export class TSXHTMLSynchronizer {
  private readonly tsxDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
  private readonly htmlDir = path.join(process.cwd(), 'dist', 'public');

  /**
   * Main synchronization method - automatically called during page generation
   */
  async synchronize(cityName: string): Promise<boolean> {
    try {
      console.log(`🔄 Starting automatic TSX-HTML synchronization for ${cityName}...`);
      
      const tsxPath = this.getTsxPath(cityName);
      const htmlPath = this.getHtmlPath(cityName);
      
      if (!existsSync(tsxPath)) {
        console.warn(`⚠️  TSX file not found: ${tsxPath}`);
        return false;
      }

      if (!existsSync(htmlPath)) {
        console.warn(`⚠️  HTML file not found: ${htmlPath}`);
        return false;
      }

      // Extract data from both sources
      const htmlData = await this.extractHtmlData(htmlPath);
      const tsxData = await this.extractTsxData(tsxPath);

      // Compare and sync if needed
      const needsSync = this.compareData(htmlData, tsxData);
      
      if (needsSync) {
        console.log(`🔧 Synchronizing ${cityName} TSX with HTML source of truth...`);
        await this.updateTsxFromHtml(tsxPath, htmlData);
        console.log(`✅ TSX-HTML synchronization completed for ${cityName}`);
        return true;
      } else {
        console.log(`✅ ${cityName} TSX and HTML are already synchronized`);
        return true;
      }

    } catch (error) {
      console.error(`❌ TSX-HTML synchronization failed for ${cityName}:`, error);
      return false;
    }
  }

  /**
   * Batch synchronization for all cities
   */
  async synchronizeAll(): Promise<{ success: number; failed: number; total: number }> {
    console.log('🚀 Running batch TSX-HTML synchronization for all cities...');
    
    const results = { success: 0, failed: 0, total: 0 };
    
    try {
      const tsxFiles = await fs.readdir(this.tsxDir);
      const cityFiles = tsxFiles.filter(file => file.endsWith('.tsx'));
      
      results.total = cityFiles.length;
      
      for (const file of cityFiles) {
        const cityName = file.replace('.tsx', '');
        const success = await this.synchronize(cityName);
        
        if (success) {
          results.success++;
        } else {
          results.failed++;
        }
      }
      
      console.log(`📊 Batch synchronization completed: ${results.success}/${results.total} successful`);
      
    } catch (error) {
      console.error('❌ Batch synchronization failed:', error);
    }
    
    return results;
  }

  /**
   * Generate HTML path from city name
   */
  private getHtmlPath(cityName: string): string {
    const slugName = this.cityNameToSlug(cityName);
    return path.join(this.htmlDir, `best-things-to-do-in-${slugName}`, 'index.html');
  }

  /**
   * Generate TSX path from city name
   */
  private getTsxPath(cityName: string): string {
    return path.join(this.tsxDir, `${cityName}.tsx`);
  }

  /**
   * Convert city name to URL slug
   */
  private cityNameToSlug(cityName: string): string {
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
   * Extract data from HTML file (source of truth)
   */
  private async extractHtmlData(htmlPath: string): Promise<SyncData> {
    const content = await fs.readFile(htmlPath, 'utf-8');
    
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descriptionMatch = content.match(/<meta name="description" content="([^"]+)"/);
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const imageMatch = content.match(/<meta property="og:image" content="([^"]+)"/);
    const keywordsMatch = content.match(/<meta name="keywords" content="([^"]+)"/);

    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      description: descriptionMatch ? descriptionMatch[1].trim() : '',
      h1: h1Match ? h1Match[1].trim() : '',
      imageUrl: imageMatch ? imageMatch[1].trim() : undefined,
      keywords: keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim()) : undefined
    };
  }

  /**
   * Extract data from TSX file
   */
  private async extractTsxData(tsxPath: string): Promise<SyncData> {
    const content = await fs.readFile(tsxPath, 'utf-8');
    
    // Extract SEO data from TSX component
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    const imageMatch = content.match(/imageUrl:\s*["']([^"']+)["']/);

    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      description: descriptionMatch ? descriptionMatch[1].trim() : '',
      h1: h1Match ? h1Match[1].trim() : '',
      imageUrl: imageMatch ? imageMatch[1].trim() : undefined
    };
  }

  /**
   * Compare HTML and TSX data to determine if sync is needed
   */
  private compareData(htmlData: SyncData, tsxData: SyncData): boolean {
    return (
      htmlData.title !== tsxData.title ||
      htmlData.description !== tsxData.description ||
      htmlData.h1 !== tsxData.h1 ||
      (htmlData.imageUrl && htmlData.imageUrl !== tsxData.imageUrl)
    );
  }

  /**
   * Update TSX file to match HTML data (HTML is source of truth)
   */
  private async updateTsxFromHtml(tsxPath: string, htmlData: SyncData): Promise<void> {
    let content = await fs.readFile(tsxPath, 'utf-8');

    // Update title
    if (htmlData.title) {
      content = content.replace(
        /title:\s*["']([^"']+)["']/,
        `title: "${htmlData.title.replace(/"/g, '\\"')}"`
      );
    }

    // Update description
    if (htmlData.description) {
      content = content.replace(
        /description:\s*["']([^"']+)["']/,
        `description: "${htmlData.description.replace(/"/g, '\\"')}"`
      );
    }

    // Update h1
    if (htmlData.h1) {
      content = content.replace(
        /<h1[^>]*>([^<]+)<\/h1>/,
        `<h1>${htmlData.h1}</h1>`
      );
    }

    // Update image URL if present
    if (htmlData.imageUrl) {
      content = content.replace(
        /imageUrl:\s*["']([^"']+)["']/,
        `imageUrl: "${htmlData.imageUrl}"`
      );
    }

    await fs.writeFile(tsxPath, content, 'utf-8');
  }

  /**
   * Validate synchronization status
   */
  async validateSync(cityName: string): Promise<{ synchronized: boolean; issues: string[] }> {
    const issues: string[] = [];
    
    try {
      const tsxPath = this.getTsxPath(cityName);
      const htmlPath = this.getHtmlPath(cityName);
      
      if (!existsSync(tsxPath)) {
        issues.push(`TSX file missing: ${tsxPath}`);
      }
      
      if (!existsSync(htmlPath)) {
        issues.push(`HTML file missing: ${htmlPath}`);
      }
      
      if (issues.length > 0) {
        return { synchronized: false, issues };
      }
      
      const htmlData = await this.extractHtmlData(htmlPath);
      const tsxData = await this.extractTsxData(tsxPath);
      
      if (htmlData.title !== tsxData.title) {
        issues.push(`Title mismatch: HTML="${htmlData.title}" vs TSX="${tsxData.title}"`);
      }
      
      if (htmlData.description !== tsxData.description) {
        issues.push(`Description mismatch: HTML="${htmlData.description}" vs TSX="${tsxData.description}"`);
      }
      
      if (htmlData.h1 !== tsxData.h1) {
        issues.push(`H1 mismatch: HTML="${htmlData.h1}" vs TSX="${tsxData.h1}"`);
      }
      
      return { synchronized: issues.length === 0, issues };
      
    } catch (error) {
      issues.push(`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return { synchronized: false, issues };
    }
  }
}

/**
 * Convenience function for automatic synchronization during page generation
 */
export async function autoSyncTsxHtml(cityName: string): Promise<boolean> {
  const synchronizer = new TSXHTMLSynchronizer();
  return await synchronizer.synchronize(cityName);
}

/**
 * Convenience function for batch synchronization
 */
export async function batchSyncTsxHtml(): Promise<{ success: number; failed: number; total: number }> {
  const synchronizer = new TSXHTMLSynchronizer();
  return await synchronizer.synchronizeAll();
}