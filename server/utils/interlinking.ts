/**
 * Enterprise-Level Interlinking System for TravelWanders
 * Automatically generates contextual links between cities, blogs, and core pages
 * Applies to all current and future content
 */

import fs from 'fs';
import path from 'path';

export interface LinkData {
  title: string;
  url: string;
  type: 'city' | 'blog' | 'destination' | 'core';
  keywords: string[];
  country?: string;
  continent?: string;
  category?: string;
  relevanceScore?: number;
}

export interface InterlinkingConfig {
  maxLinks: number;
  minRelevanceScore: number;
  prioritizeRecent: boolean;
  includeRelatedCountries: boolean;
  includeCrossContent: boolean;
}

export class EnterpriseInterlinking {
  private allLinks: LinkData[] = [];
  private config: InterlinkingConfig = {
    maxLinks: 3,
    minRelevanceScore: 0.4,
    prioritizeRecent: true,
    includeRelatedCountries: true,
    includeCrossContent: true
  };

  constructor(config?: Partial<InterlinkingConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
    this.loadAllContent();
  }

  /**
   * Load all available content from the website
   */
  private loadAllContent(): void {
    this.allLinks = [];
    
    // Load city pages
    this.loadCityPages();
    
    // Load blog posts
    this.loadBlogPosts();
    
    // Load core pages
    this.loadCorePages();
    
    console.log(`🔗 Loaded ${this.allLinks.length} pages for interlinking`);
  }

  /**
   * Load all city pages from the file system
   */
  private loadCityPages(): void {
    try {
      const citiesPath = path.join(process.cwd(), 'client/src/pages/cities');
      if (!fs.existsSync(citiesPath)) return;

      const cityFiles = fs.readdirSync(citiesPath).filter(file => file.endsWith('.tsx'));
      
      for (const file of cityFiles) {
        const cityName = file.replace('.tsx', '');
        const filePath = path.join(citiesPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract city data from TSX file
        const cityData = this.extractCityDataFromTSX(content, cityName);
        if (cityData) {
          this.allLinks.push({
            title: cityData.title,
            url: `/best-things-to-do-in-${cityName.toLowerCase()}`,
            type: 'city',
            keywords: this.generateCityKeywords(cityData),
            country: cityData.country,
            continent: cityData.continent
          });
        }
      }
    } catch (error) {
      console.warn('Error loading city pages:', error);
    }
  }

  /**
   * Load all blog posts from the file system
   */
  private loadBlogPosts(): void {
    try {
      const blogsPath = path.join(process.cwd(), 'client/src/blogs');
      if (!fs.existsSync(blogsPath)) return;

      const blogFiles = fs.readdirSync(blogsPath).filter(file => file.endsWith('.tsx'));
      
      for (const file of blogFiles) {
        if (file === 'index.ts') continue;
        
        const blogId = file.replace('.tsx', '');
        const filePath = path.join(blogsPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract blog data from TSX file
        const blogData = this.extractBlogDataFromTSX(content, blogId);
        if (blogData) {
          this.allLinks.push({
            title: blogData.title,
            url: `/blog/${blogId}`,
            type: 'blog',
            keywords: this.generateBlogKeywords(blogData),
            category: blogData.category
          });
        }
      }
    } catch (error) {
      console.warn('Error loading blog posts:', error);
    }
  }

  /**
   * Load core pages (destinations, blogs, home)
   */
  private loadCorePages(): void {
    const corePages = [
      {
        title: 'All Destinations - TravelWanders',
        url: '/destinations',
        type: 'destination' as const,
        keywords: ['destinations', 'travel', 'cities', 'countries', 'places to visit', 'travel guide']
      },
      {
        title: 'Travel Blog Stories & Destination Guides - TravelWanders',
        url: '/blogs',
        type: 'core' as const,
        keywords: ['travel blog', 'stories', 'guides', 'tips', 'experiences', 'articles']
      },
      {
        title: 'Best Travel Guides & Destinations - TravelWanders',
        url: '/',
        type: 'core' as const,
        keywords: ['travel', 'destinations', 'guides', 'planning', 'vacation', 'adventure']
      }
    ];

    this.allLinks.push(...corePages);
  }

  /**
   * Extract city data from TSX content
   */
  private extractCityDataFromTSX(content: string, cityName: string): any {
    try {
      // Extract title
      const titleMatch = content.match(/title=\{["`]([^"`]+)["`]\}/);
      const title = titleMatch ? titleMatch[1] : `Best Things to Do in ${cityName}`;
      
      // Extract country
      const countryMatch = content.match(/country=\{["`]([^"`]+)["`]\}/);
      const country = countryMatch ? countryMatch[1] : '';
      
      // Extract highlights
      const highlightsMatch = content.match(/highlights=\{(\[[^\]]+\])\}/);
      const highlights = highlightsMatch ? highlightsMatch[1] : '';
      
      // Extract attractions
      const attractionsMatch = content.match(/attractions=\{(\[[^\]]+\])\}/);
      const attractions = attractionsMatch ? attractionsMatch[1] : '';
      
      return {
        title,
        country,
        highlights,
        attractions,
        continent: this.getContinent(country)
      };
    } catch (error) {
      console.warn(`Error extracting city data for ${cityName}:`, error);
      return null;
    }
  }

  /**
   * Extract blog data from TSX content
   */
  private extractBlogDataFromTSX(content: string, blogId: string): any {
    try {
      // Extract title
      const titleMatch = content.match(/title:\s*["`]([^"`]+)["`]/);
      const title = titleMatch ? titleMatch[1] : blogId;
      
      // Extract category
      const categoryMatch = content.match(/category:\s*["`]([^"`]+)["`]/);
      const category = categoryMatch ? categoryMatch[1] : 'travel';
      
      // Extract excerpt
      const excerptMatch = content.match(/excerpt:\s*["`]([^"`]+)["`]/);
      const excerpt = excerptMatch ? excerptMatch[1] : '';
      
      return {
        title,
        category,
        excerpt
      };
    } catch (error) {
      console.warn(`Error extracting blog data for ${blogId}:`, error);
      return null;
    }
  }

  /**
   * Generate keywords for city pages
   */
  private generateCityKeywords(cityData: any): string[] {
    const keywords = [
      cityData.title.toLowerCase(),
      `${cityData.title.split(',')[0].toLowerCase()} travel`,
      `${cityData.title.split(',')[0].toLowerCase()} attractions`,
      `things to do ${cityData.title.split(',')[0].toLowerCase()}`,
      `visit ${cityData.title.split(',')[0].toLowerCase()}`,
      cityData.country.toLowerCase(),
      'travel guide',
      'attractions',
      'destinations'
    ];
    
    // Add keywords from highlights and attractions
    if (cityData.highlights) {
      keywords.push(...this.extractKeywordsFromText(cityData.highlights));
    }
    if (cityData.attractions) {
      keywords.push(...this.extractKeywordsFromText(cityData.attractions));
    }
    
    return keywords;
  }

  /**
   * Generate keywords for blog posts
   */
  private generateBlogKeywords(blogData: any): string[] {
    const keywords = [
      blogData.title.toLowerCase(),
      blogData.category.toLowerCase(),
      'travel blog',
      'travel tips',
      'travel stories'
    ];
    
    if (blogData.excerpt) {
      keywords.push(...this.extractKeywordsFromText(blogData.excerpt));
    }
    
    return keywords;
  }

  /**
   * Extract keywords from text content
   */
  private extractKeywordsFromText(text: string): string[] {
    const commonWords = ['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'a', 'an'];
    
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.includes(word))
      .slice(0, 20);
    
    return words;
  }

  /**
   * Get continent for a country
   */
  private getContinent(country: string): string {
    const continentMap: { [key: string]: string } = {
      'United Kingdom': 'Europe',
      'United States': 'North America',
      'France': 'Europe',
      'Italy': 'Europe',
      'Spain': 'Europe',
      'Germany': 'Europe',
      'Japan': 'Asia',
      'China': 'Asia',
      'India': 'Asia',
      'Thailand': 'Asia',
      'South Korea': 'Asia',
      'Australia': 'Oceania',
      'Brazil': 'South America',
      'Argentina': 'South America',
      'Canada': 'North America',
      'Mexico': 'North America',
      'Egypt': 'Africa',
      'South Africa': 'Africa',
      'Morocco': 'Africa',
      'Turkey': 'Europe',
      'Greece': 'Europe',
      'Netherlands': 'Europe',
      'Switzerland': 'Europe',
      'Austria': 'Europe',
      'Portugal': 'Europe',
      'Belgium': 'Europe',
      'Czech Republic': 'Europe',
      'Poland': 'Europe',
      'Hungary': 'Europe',
      'Croatia': 'Europe',
      'Norway': 'Europe',
      'Sweden': 'Europe',
      'Denmark': 'Europe',
      'Finland': 'Europe',
      'Iceland': 'Europe',
      'Ireland': 'Europe',
      'Scotland': 'Europe',
      'Wales': 'Europe',
      'Russia': 'Europe',
      'Vietnam': 'Asia',
      'Cambodia': 'Asia',
      'Laos': 'Asia',
      'Myanmar': 'Asia',
      'Philippines': 'Asia',
      'Indonesia': 'Asia',
      'Malaysia': 'Asia',
      'Singapore': 'Asia',
      'Hong Kong': 'Asia',
      'Taiwan': 'Asia',
      'Sri Lanka': 'Asia',
      'Nepal': 'Asia',
      'Bhutan': 'Asia',
      'Maldives': 'Asia',
      'UAE': 'Asia',
      'Jordan': 'Asia',
      'Israel': 'Asia',
      'Lebanon': 'Asia',
      'Iran': 'Asia',
      'Kazakhstan': 'Asia',
      'Uzbekistan': 'Asia',
      'Kyrgyzstan': 'Asia',
      'Tajikistan': 'Asia',
      'Turkmenistan': 'Asia',
      'Mongolia': 'Asia',
      'North Korea': 'Asia',
      'Pakistan': 'Asia',
      'Afghanistan': 'Asia',
      'Bangladesh': 'Asia',
      'New Zealand': 'Oceania',
      'Fiji': 'Oceania',
      'Papua New Guinea': 'Oceania',
      'Chile': 'South America',
      'Peru': 'South America',
      'Colombia': 'South America',
      'Venezuela': 'South America',
      'Ecuador': 'South America',
      'Bolivia': 'South America',
      'Paraguay': 'South America',
      'Uruguay': 'South America',
      'Guyana': 'South America',
      'Suriname': 'South America',
      'French Guiana': 'South America',
      'Cuba': 'North America',
      'Jamaica': 'North America',
      'Haiti': 'North America',
      'Dominican Republic': 'North America',
      'Puerto Rico': 'North America',
      'Bahamas': 'North America',
      'Barbados': 'North America',
      'Trinidad and Tobago': 'North America',
      'Belize': 'North America',
      'Costa Rica': 'North America',
      'Panama': 'North America',
      'Guatemala': 'North America',
      'Honduras': 'North America',
      'El Salvador': 'North America',
      'Nicaragua': 'North America',
      'Kenya': 'Africa',
      'Tanzania': 'Africa',
      'Uganda': 'Africa',
      'Rwanda': 'Africa',
      'Ethiopia': 'Africa',
      'Ghana': 'Africa',
      'Nigeria': 'Africa',
      'Senegal': 'Africa',
      'Mali': 'Africa',
      'Burkina Faso': 'Africa',
      'Ivory Coast': 'Africa',
      'Liberia': 'Africa',
      'Sierra Leone': 'Africa',
      'Guinea': 'Africa',
      'Gambia': 'Africa',
      'Mauritania': 'Africa',
      'Algeria': 'Africa',
      'Tunisia': 'Africa',
      'Libya': 'Africa',
      'Sudan': 'Africa',
      'Chad': 'Africa',
      'Central African Republic': 'Africa',
      'Cameroon': 'Africa',
      'Equatorial Guinea': 'Africa',
      'Gabon': 'Africa',
      'Republic of the Congo': 'Africa',
      'Democratic Republic of the Congo': 'Africa',
      'Angola': 'Africa',
      'Zambia': 'Africa',
      'Zimbabwe': 'Africa',
      'Botswana': 'Africa',
      'Namibia': 'Africa',
      'Lesotho': 'Africa',
      'Swaziland': 'Africa',
      'Mozambique': 'Africa',
      'Malawi': 'Africa',
      'Madagascar': 'Africa',
      'Mauritius': 'Africa',
      'Seychelles': 'Africa',
      'Comoros': 'Africa',
      'Djibouti': 'Africa',
      'Eritrea': 'Africa',
      'Somalia': 'Africa'
    };

    return continentMap[country] || 'Unknown';
  }

  /**
   * Calculate smart relevance score between two pages for optimal crawling
   */
  private calculateRelevanceScore(sourcePage: LinkData, targetPage: LinkData): number {
    let score = 0;
    
    // Priority 1: Same country gets highest score (creates strong geographic clusters)
    if (sourcePage.country && targetPage.country && sourcePage.country === targetPage.country) {
      score += 0.6;
    }
    
    // Priority 2: Cross-content linking (city ↔ blog) creates web-like structure
    if (this.config.includeCrossContent) {
      if ((sourcePage.type === 'city' && targetPage.type === 'blog') ||
          (sourcePage.type === 'blog' && targetPage.type === 'city')) {
        score += 0.5;
        
        // Extra boost for location-based cross-content connections
        if (this.hasLocationKeywordMatch(sourcePage, targetPage)) {
          score += 0.2;
        }
      }
    }
    
    // Priority 3: Enhanced keyword matching with location emphasis
    const sourceKeywords = sourcePage.keywords || [];
    const targetKeywords = targetPage.keywords || [];
    
    let keywordMatches = 0;
    let locationMatches = 0;
    
    for (const keyword of sourceKeywords) {
      const hasMatch = targetKeywords.some(targetKeyword => 
        targetKeyword.includes(keyword) || keyword.includes(targetKeyword)
      );
      
      if (hasMatch) {
        keywordMatches++;
        
        // Boost for location-related keywords
        if (this.isLocationKeyword(keyword)) {
          locationMatches++;
        }
      }
    }
    
    const keywordScore = Math.min(keywordMatches / Math.max(sourceKeywords.length, 1), 1) * 0.4;
    const locationScore = Math.min(locationMatches / Math.max(sourceKeywords.length, 1), 1) * 0.3;
    score += keywordScore + locationScore;
    
    // Priority 4: Same continent bonus
    if (sourcePage.continent && targetPage.continent && sourcePage.continent === targetPage.continent) {
      score += 0.2;
    }
    
    // Priority 5: Same category bonus for blogs
    if (sourcePage.category && targetPage.category && sourcePage.category === targetPage.category) {
      score += 0.3;
    }
    
    // Priority 6: Same type bonus (but lower priority to encourage cross-linking)
    if (sourcePage.type === targetPage.type) {
      score += 0.1;
    }
    
    return Math.min(score, 1);
  }
  
  /**
   * Check if two pages have location-based keyword matches
   */
  private hasLocationKeywordMatch(sourcePage: LinkData, targetPage: LinkData): boolean {
    const sourceKeywords = sourcePage.keywords || [];
    const targetKeywords = targetPage.keywords || [];
    
    for (const keyword of sourceKeywords) {
      if (this.isLocationKeyword(keyword)) {
        const hasMatch = targetKeywords.some(targetKeyword => 
          targetKeyword.includes(keyword) || keyword.includes(targetKeyword)
        );
        if (hasMatch) return true;
      }
    }
    
    return false;
  }
  
  /**
   * Check if a keyword is location-related
   */
  private isLocationKeyword(keyword: string): boolean {
    const locationKeywords = [
      'travel', 'destination', 'visit', 'guide', 'attractions', 'city', 'country',
      'europe', 'asia', 'america', 'africa', 'australia', 'tourism', 'things to do',
      'best', 'explore', 'discover', 'culture', 'history', 'food', 'restaurant',
      'hotel', 'accommodation', 'transport', 'flight', 'train', 'museum', 'park',
      'beach', 'mountain', 'historic', 'architecture', 'shopping', 'nightlife'
    ];
    
    return locationKeywords.some(loc => keyword.toLowerCase().includes(loc));
  }

  /**
   * Generate internal links for a specific page
   */
  public generateInternalLinks(currentPageUrl: string, pageType: 'city' | 'blog' | 'destination' | 'core'): LinkData[] {
    // Find current page data
    const currentPage = this.allLinks.find(link => link.url === currentPageUrl);
    if (!currentPage) {
      return [];
    }
    
    // Get all potential target pages (excluding current page)
    const potentialTargets = this.allLinks.filter(link => 
      link.url !== currentPageUrl && 
      link.title !== currentPage.title
    );
    
    // Calculate relevance scores
    const scoredTargets = potentialTargets.map(target => ({
      ...target,
      relevanceScore: this.calculateRelevanceScore(currentPage, target)
    }));
    
    // Filter by minimum relevance score
    const relevantTargets = scoredTargets.filter(target => 
      target.relevanceScore! >= this.config.minRelevanceScore
    );
    
    // Sort by relevance score (descending)
    relevantTargets.sort((a, b) => b.relevanceScore! - a.relevanceScore!);
    
    // Apply additional filtering based on page type
    const filteredTargets = this.applyTypeSpecificFiltering(relevantTargets, pageType, currentPage);
    
    // Return top results
    return filteredTargets.slice(0, this.config.maxLinks);
  }

  /**
   * Apply type-specific filtering for different page types
   */
  private applyTypeSpecificFiltering(targets: LinkData[], pageType: string, currentPage: LinkData): LinkData[] {
    let filtered = [...targets];
    
    switch (pageType) {
      case 'city':
        // For city pages, prioritize: same country cities, related blogs, core pages
        filtered = [
          ...filtered.filter(t => t.type === 'city' && t.country === currentPage.country),
          ...filtered.filter(t => t.type === 'blog'),
          ...filtered.filter(t => t.type === 'destination'),
          ...filtered.filter(t => t.type === 'city' && t.country !== currentPage.country),
          ...filtered.filter(t => t.type === 'core')
        ];
        break;
        
      case 'blog':
        // For blog pages, prioritize: same category blogs, related cities, core pages
        filtered = [
          ...filtered.filter(t => t.type === 'blog' && t.category === currentPage.category),
          ...filtered.filter(t => t.type === 'city'),
          ...filtered.filter(t => t.type === 'destination'),
          ...filtered.filter(t => t.type === 'blog' && t.category !== currentPage.category),
          ...filtered.filter(t => t.type === 'core')
        ];
        break;
        
      case 'destination':
        // For destination page, prioritize: cities, then blogs
        filtered = [
          ...filtered.filter(t => t.type === 'city'),
          ...filtered.filter(t => t.type === 'blog'),
          ...filtered.filter(t => t.type === 'core')
        ];
        break;
        
      case 'core':
        // For core pages, prioritize: popular cities, recent blogs
        filtered = [
          ...filtered.filter(t => t.type === 'city'),
          ...filtered.filter(t => t.type === 'blog'),
          ...filtered.filter(t => t.type === 'destination')
        ];
        break;
    }
    
    // Remove duplicates while preserving order
    const seen = new Set();
    return filtered.filter(item => {
      if (seen.has(item.url)) {
        return false;
      }
      seen.add(item.url);
      return true;
    });
  }

  /**
   * Generate HTML for internal links section
   */
  public generateInternalLinksHTML(currentPageUrl: string, pageType: 'city' | 'blog' | 'destination' | 'core'): string {
    const links = this.generateInternalLinks(currentPageUrl, pageType);
    
    if (links.length === 0) {
      return '';
    }
    
    const linkItems = links.map(link => `
      <a href="${link.url}" class="smart-link-card">
        <div class="smart-link-header">
          <span class="smart-link-type">${this.getTypeLabel(link.type)}</span>
        </div>
        <h4 class="smart-link-title">${link.title}</h4>
        ${link.country ? `<p class="smart-link-location">${link.country}</p>` : ''}
      </a>
    `).join('');
    
    return `
      <div class="smart-internal-links">
        <div class="smart-links-container">
          <h3 class="smart-links-title">You may also like</h3>
          <div class="smart-links-grid">
            ${linkItems}
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Generate React component for internal links
   */
  public generateInternalLinksReact(currentPageUrl: string, pageType: 'city' | 'blog' | 'destination' | 'core'): string {
    const links = this.generateInternalLinks(currentPageUrl, pageType);
    
    if (links.length === 0) {
      return 'null';
    }
    
    const linkItems = links.map(link => `
      <li key="${link.url}">
        <Link href="${link.url}" className="internal-link">
          <span className="link-title">${link.title}</span>
          <span className="link-type">${this.getTypeLabel(link.type)}</span>
        </Link>
      </li>
    `).join('');
    
    return `
      <div className="internal-links-section">
        <h3>Related Content</h3>
        <ul className="internal-links-list">
          ${linkItems}
        </ul>
      </div>
    `;
  }

  /**
   * Get human-readable label for link type
   */
  private getTypeLabel(type: string): string {
    const labels = {
      'city': 'City Guide',
      'blog': 'Blog Post',
      'destination': 'Destinations',
      'core': 'Page'
    };
    return labels[type] || type;
  }

  /**
   * Refresh content data (call when new content is added)
   */
  public refresh(): void {
    this.loadAllContent();
  }

  /**
   * Get all available pages for debugging
   */
  public getAllPages(): LinkData[] {
    return this.allLinks;
  }

  /**
   * Get statistics about interlinking
   */
  public getStatistics(): any {
    const stats = {
      totalPages: this.allLinks.length,
      cities: this.allLinks.filter(l => l.type === 'city').length,
      blogs: this.allLinks.filter(l => l.type === 'blog').length,
      corePages: this.allLinks.filter(l => l.type === 'core').length,
      countries: [...new Set(this.allLinks.map(l => l.country).filter(Boolean))].length,
      continents: [...new Set(this.allLinks.map(l => l.continent).filter(Boolean))].length
    };
    
    return stats;
  }
}

// Export singleton instance
export const interlinkingSystem = new EnterpriseInterlinking();