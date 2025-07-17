#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

class EnhancedLinkAuditor {
  constructor() {
    this.results = {
      totalLinks: 0,
      internalLinks: 0,
      externalLinks: 0,
      brokenInternalLinks: [],
      workingInternalLinks: [],
      orphanPages: [],
      linkMap: {},
      navigationStructure: {},
      timestamp: new Date().toISOString()
    };
  }

  async auditAllLinks() {
    console.log('🔗 Starting Enhanced Link Audit...');
    
    const htmlFiles = this.getAllHTMLFiles();
    const allInternalLinks = new Set();
    const pageToLinksMap = new Map();
    const linkSources = new Map(); // Track where each link comes from
    
    console.log(`📄 Found ${htmlFiles.length} HTML files to audit`);
    
    // First pass: collect all links and their sources
    for (const filePath of htmlFiles) {
      const relativePath = this.getRelativePath(filePath);
      console.log(`   Scanning: ${relativePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      
      const links = document.querySelectorAll('a[href]');
      const pageLinks = [];
      
      for (const link of links) {
        const href = link.getAttribute('href');
        const linkText = link.textContent.trim();
        
        if (href) {
          this.results.totalLinks++;
          
          const linkInfo = {
            href,
            text: linkText,
            sourcePage: relativePath
          };
          
          if (this.isInternalLink(href)) {
            this.results.internalLinks++;
            allInternalLinks.add(href);
            pageLinks.push(linkInfo);
            
            // Track sources for this link
            if (!linkSources.has(href)) {
              linkSources.set(href, []);
            }
            linkSources.get(href).push({
              page: relativePath,
              text: linkText
            });
          } else {
            this.results.externalLinks++;
          }
        }
      }
      
      pageToLinksMap.set(relativePath, pageLinks);
    }
    
    console.log(`\n📊 Link Statistics:`);
    console.log(`   Total links found: ${this.results.totalLinks}`);
    console.log(`   Internal links: ${this.results.internalLinks}`);
    console.log(`   External links: ${this.results.externalLinks}`);
    console.log(`   Unique internal links: ${allInternalLinks.size}`);
    
    // Second pass: check which internal links are broken
    console.log(`\n🔍 Checking internal link validity...`);
    
    for (const link of allInternalLinks) {
      const isWorking = this.checkLinkExists(link);
      const sources = linkSources.get(link) || [];
      
      const linkInfo = {
        url: link,
        sources: sources,
        sourceCount: sources.length
      };
      
      if (isWorking) {
        this.results.workingInternalLinks.push(linkInfo);
        console.log(`   ✅ ${link} (${sources.length} references)`);
      } else {
        this.results.brokenInternalLinks.push(linkInfo);
        console.log(`   ❌ ${link} (${sources.length} references) - BROKEN`);
      }
    }
    
    // Find orphan pages (pages with no incoming links)
    this.findOrphanPages(htmlFiles, allInternalLinks);
    
    // Generate navigation structure analysis
    this.analyzeNavigationStructure(pageToLinksMap);
    
    this.generateReport();
    return this.results;
  }

  isInternalLink(href) {
    return href.startsWith('/') && !href.startsWith('//') && !href.includes('http');
  }

  checkLinkExists(href) {
    // Normalize the href to check for file existence
    let targetPath = href;
    
    // Handle special route mappings
    const routeMappings = {
      '/': '/home-seo.html',
      '/home': '/home-seo.html',
      '/destinations': '/destinations-seo.html',
      '/blogs': '/blogs-seo.html',
      '/privacy': '/privacy-policy.html',
      '/terms': '/terms-of-service.html',
      '/cookies': '/cookie-policy.html'
    };
    
    if (routeMappings[targetPath]) {
      targetPath = routeMappings[targetPath];
    }
    
    // Check various possible file locations
    const possiblePaths = [
      `dist/public${targetPath}`,
      `dist/public${targetPath}.html`,
      `dist/public${targetPath}/index.html`,
      `dist/public${targetPath.replace('/best-', '/things-')}/index.html`,
      `dist/public${targetPath.replace('/best-things-to-do-in-', '/things-to-do-in-')}/index.html`
    ];
    
    for (const possiblePath of possiblePaths) {
      if (fs.existsSync(possiblePath)) {
        return true;
      }
    }
    
    return false;
  }

  findOrphanPages(htmlFiles, allInternalLinks) {
    console.log(`\n🔍 Finding orphan pages...`);
    
    for (const filePath of htmlFiles) {
      const relativePath = this.getRelativePath(filePath);
      
      // Convert file path to potential URL patterns
      const possibleUrls = this.getUrlsForFile(relativePath);
      
      let hasIncomingLink = false;
      for (const url of possibleUrls) {
        if (allInternalLinks.has(url)) {
          hasIncomingLink = true;
          break;
        }
      }
      
      if (!hasIncomingLink && !this.isSpecialPage(relativePath)) {
        this.results.orphanPages.push({
          file: relativePath,
          possibleUrls: possibleUrls
        });
        console.log(`   🔸 Orphan: ${relativePath} (no incoming links)`);
      }
    }
    
    console.log(`   Found ${this.results.orphanPages.length} orphan pages`);
  }

  getUrlsForFile(filePath) {
    const urls = [];
    
    // Remove dist/public prefix and convert to URL patterns
    let urlPath = filePath.replace(/^dist\/public\//, '/');
    
    // Handle index.html files
    if (urlPath.endsWith('/index.html')) {
      urls.push(urlPath.replace('/index.html', ''));
      urls.push(urlPath.replace('/index.html', '/'));
    }
    
    // Handle .html files
    if (urlPath.endsWith('.html')) {
      urls.push(urlPath.replace('.html', ''));
      urls.push(urlPath);
    }
    
    // Handle special name patterns
    if (urlPath.includes('things-to-do-in-')) {
      const cityUrl = urlPath.replace('things-to-do-in-', 'best-things-to-do-in-');
      urls.push(cityUrl);
      urls.push(cityUrl.replace('.html', ''));
    }
    
    return urls;
  }

  isSpecialPage(filePath) {
    const specialPages = [
      'robots.txt',
      'sitemap.xml',
      'manifest.json',
      'favicon.ico',
      'favicon.svg',
      'apple-touch-icon.svg'
    ];
    
    return specialPages.some(special => filePath.includes(special));
  }

  analyzeNavigationStructure(pageToLinksMap) {
    console.log(`\n🗺️  Analyzing navigation structure...`);
    
    this.results.navigationStructure = {
      totalPages: pageToLinksMap.size,
      averageLinksPerPage: 0,
      mostLinkedPages: [],
      pagesWithNoOutgoingLinks: [],
      navigationHubs: []
    };
    
    const linkCounts = [];
    const incomingLinkCounts = new Map();
    
    // Count outgoing links per page
    for (const [page, links] of pageToLinksMap) {
      const outgoingCount = links.length;
      linkCounts.push(outgoingCount);
      
      if (outgoingCount === 0) {
        this.results.navigationStructure.pagesWithNoOutgoingLinks.push(page);
      }
      
      // Count incoming links
      for (const link of links) {
        const target = link.href;
        incomingLinkCounts.set(target, (incomingLinkCounts.get(target) || 0) + 1);
      }
    }
    
    // Calculate average
    this.results.navigationStructure.averageLinksPerPage = 
      linkCounts.length > 0 ? Math.round(linkCounts.reduce((a, b) => a + b, 0) / linkCounts.length) : 0;
    
    // Find most linked pages
    const sortedByIncoming = Array.from(incomingLinkCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
    
    this.results.navigationStructure.mostLinkedPages = sortedByIncoming.map(([url, count]) => ({
      url,
      incomingLinks: count
    }));
    
    // Find navigation hubs (pages with many outgoing links)
    const navigationHubs = Array.from(pageToLinksMap.entries())
      .filter(([page, links]) => links.length >= 5)
      .map(([page, links]) => ({
        page,
        outgoingLinks: links.length
      }))
      .sort((a, b) => b.outgoingLinks - a.outgoingLinks);
    
    this.results.navigationStructure.navigationHubs = navigationHubs;
    
    console.log(`   Average links per page: ${this.results.navigationStructure.averageLinksPerPage}`);
    console.log(`   Pages with no outgoing links: ${this.results.navigationStructure.pagesWithNoOutgoingLinks.length}`);
    console.log(`   Navigation hubs found: ${navigationHubs.length}`);
  }

  getAllHTMLFiles() {
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

  getRelativePath(filePath) {
    return path.relative('.', filePath);
  }

  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('🔗 ENHANCED LINK AUDIT REPORT');
    console.log('='.repeat(80));
    
    const workingRate = this.results.internalLinks > 0 ? 
      Math.round((this.results.workingInternalLinks.length / (this.results.workingInternalLinks.length + this.results.brokenInternalLinks.length)) * 100) : 100;
    
    console.log(`\n📊 Overall Link Health: ${workingRate}%`);
    
    if (workingRate >= 95) {
      console.log('🎉 EXCELLENT: Your link structure is outstanding!');
    } else if (workingRate >= 85) {
      console.log('✅ GOOD: Most links are working well.');
    } else if (workingRate >= 70) {
      console.log('⚠️  FAIR: Some link issues need attention.');
    } else {
      console.log('❌ POOR: Significant link problems detected.');
    }
    
    console.log(`\n📋 LINK SUMMARY:`);
    console.log(`├─ Total links: ${this.results.totalLinks}`);
    console.log(`├─ Internal links: ${this.results.internalLinks}`);
    console.log(`├─ External links: ${this.results.externalLinks}`);
    console.log(`├─ Working internal links: ${this.results.workingInternalLinks.length}`);
    console.log(`├─ Broken internal links: ${this.results.brokenInternalLinks.length}`);
    console.log(`└─ Orphan pages: ${this.results.orphanPages.length}`);
    
    if (this.results.brokenInternalLinks.length > 0) {
      console.log(`\n🚨 BROKEN LINKS (${this.results.brokenInternalLinks.length}):`);
      for (const broken of this.results.brokenInternalLinks) {
        console.log(`   ❌ ${broken.url}`);
        console.log(`      Referenced ${broken.sourceCount} time(s) from:`);
        for (const source of broken.sources.slice(0, 3)) {
          console.log(`         • ${source.page} ("${source.text}")`);
        }
        if (broken.sources.length > 3) {
          console.log(`         • ... and ${broken.sources.length - 3} more`);
        }
      }
    }
    
    if (this.results.orphanPages.length > 0) {
      console.log(`\n🔸 ORPHAN PAGES (${this.results.orphanPages.length}):`);
      for (const orphan of this.results.orphanPages.slice(0, 10)) {
        console.log(`   • ${orphan.file}`);
      }
      if (this.results.orphanPages.length > 10) {
        console.log(`   • ... and ${this.results.orphanPages.length - 10} more`);
      }
    }
    
    console.log(`\n🗺️  NAVIGATION STRUCTURE:`);
    console.log(`├─ Average links per page: ${this.results.navigationStructure.averageLinksPerPage}`);
    console.log(`├─ Pages with no outgoing links: ${this.results.navigationStructure.pagesWithNoOutgoingLinks.length}`);
    console.log(`└─ Navigation hubs: ${this.results.navigationStructure.navigationHubs.length}`);
    
    if (this.results.navigationStructure.mostLinkedPages.length > 0) {
      console.log(`\n⭐ MOST POPULAR PAGES:`);
      for (const popular of this.results.navigationStructure.mostLinkedPages.slice(0, 5)) {
        console.log(`   • ${popular.url} (${popular.incomingLinks} incoming links)`);
      }
    }
    
    console.log('\n' + '='.repeat(80));
    
    // Save detailed results
    fs.writeFileSync('enhanced-link-audit-results.json', JSON.stringify(this.results, null, 2));
    console.log('📄 Detailed results saved to: enhanced-link-audit-results.json');
    
    return this.results;
  }
}

// Run the audit if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    const auditor = new EnhancedLinkAuditor();
    await auditor.auditAllLinks();
  })().catch(console.error);
}

export { EnhancedLinkAuditor };