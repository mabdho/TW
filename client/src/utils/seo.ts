/**
 * Client-side SEO utilities for TravelWanders
 * Handles SEO data generation and optimization
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  slug: string;
  mainKeyword: string;
  keywordDensity: number;
  seoScore: number;
  lastModified: string;
  ogImage?: string;
  ogType?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface CityData {
  name: string;
  country: string;
  content: string;
  attractions?: Array<{
    name: string;
    description: string;
  }>;
}

export interface BlogData {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author?: string;
  publishedAt?: string;
}

/**
 * Convert text to URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Generate canonical URL for different content types
 */
export function createCanonical(type: 'city' | 'blog', slug: string, baseUrl: string = ''): string {
  const base = baseUrl || window.location.origin;
  
  switch (type) {
    case 'city':
      return `${base}/best-things-to-do-in-${slug}`;
    case 'blog':
      return `${base}/blog/${slug}`;
    default:
      return `${base}/${slug}`;
  }
}

/**
 * Generate optimized meta description targeting "Best things to do in [city]"
 */
export function generateMetaDescription(cityData: CityData): string {
  const { name, country, attractions = [] } = cityData;
  const mainKeyword = `Best things to do in ${name}`;
  
  // Extract top attractions for description
  const topAttractions = attractions.slice(0, 3).map(attr => attr.name).join(', ');
  
  const description = `${mainKeyword}: Discover ${topAttractions} and more amazing experiences in ${name}, ${country}. Complete travel guide with insider tips and must-visit attractions.`;
  
  // Ensure description is within 120-160 characters
  if (description.length > 160) {
    return `${mainKeyword}: Discover amazing experiences in ${name}, ${country}. Complete travel guide with insider tips and must-visit attractions.`;
  }
  
  return description;
}

/**
 * Generate relevant keywords with primary focus on "best things to do in [city]"
 */
export function generateKeywords(cityData: CityData): string {
  const { name, country, attractions = [] } = cityData;
  const mainKeyword = `best things to do in ${name}`;
  
  const keywords = [
    mainKeyword,
    `${name} travel guide`,
    `${name} attractions`,
    `visit ${name}`,
    `${name} tourism`,
    `${name} ${country}`,
    `${name} must see`,
    `${name} experiences`,
    ...attractions.slice(0, 5).map(attr => attr.name.toLowerCase())
  ];
  
  return keywords.join(', ');
}

/**
 * Count words in text
 */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Calculate keyword density percentage for main keyword
 */
export function calculateKeywordDensity(content: string, keyword: string): number {
  const normalizedContent = content.toLowerCase();
  const normalizedKeyword = keyword.toLowerCase();
  
  // Count occurrences of the keyword
  const keywordCount = (normalizedContent.match(new RegExp(normalizedKeyword, 'g')) || []).length;
  
  // Count total words
  const totalWords = countWords(content);
  
  if (totalWords === 0) return 0;
  
  return (keywordCount / totalWords) * 100;
}

/**
 * Generate SEO title with proper formatting
 */
export function generateSEOTitle(cityData: CityData): string {
  const { name, country } = cityData;
  const mainKeyword = `Best Things to Do in ${name}`;
  
  const title = `${mainKeyword} - ${country} Travel Guide | TravelWanders`;
  
  // Ensure title is within 10-60 characters for the main part
  if (title.length > 60) {
    return `${mainKeyword} - ${country} | TravelWanders`;
  }
  
  return title;
}

/**
 * Generate blog SEO title
 */
export function generateBlogSEOTitle(blogData: BlogData): string {
  const { title, category } = blogData;
  
  const seoTitle = `${title} - ${category} | TravelWanders`;
  
  if (seoTitle.length > 60) {
    return `${title} | TravelWanders`;
  }
  
  return seoTitle;
}

/**
 * Generate blog meta description
 */
export function generateBlogMetaDescription(blogData: BlogData): string {
  const { excerpt, category } = blogData;
  
  let description = excerpt;
  
  // Add category context if description is short
  if (description.length < 100) {
    description = `${excerpt} Discover more ${category.toLowerCase()} travel tips and guides on TravelWanders.`;
  }
  
  // Ensure description is within 120-160 characters
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  return description;
}

/**
 * Generate FAQPage structured data for FAQ sections
 */
export function generateFAQStructuredData(faqs: Array<{question: string; answer: string}>, pageUrl: string): object {
  if (!faqs || faqs.length === 0) return {};
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "url": pageUrl
  };
}

/**
 * Generate structured data for breadcrumbs
 */
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, url: string}>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generate structured data for city pages
 */
export function generateCityStructuredData(cityData: CityData, seoData: SEOData): object {
  const { name, country, attractions = [] } = cityData;
  
  return {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": seoData.title,
    "description": seoData.description,
    "about": {
      "@type": "City",
      "name": name,
      "containedInPlace": {
        "@type": "Country",
        "name": country
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": attractions.map((attraction, index) => ({
        "@type": "TouristAttraction",
        "position": index + 1,
        "name": attraction.name,
        "description": attraction.description
      }))
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": seoData.canonicalUrl,
      "name": seoData.title,
      "description": seoData.description,
      "url": seoData.canonicalUrl
    },
    "dateModified": seoData.lastModified,
    "url": seoData.canonicalUrl
  };
}



/**
 * Generate structured data for blog posts
 */
export function generateBlogStructuredData(blogData: BlogData, seoData: SEOData): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": seoData.title,
    "description": seoData.description,
    "datePublished": blogData.publishedAt || seoData.lastModified,
    "dateModified": seoData.lastModified,
    "author": {
      "@type": "Person",
      "name": blogData.author || "TravelWanders Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://travelwanders.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": seoData.canonicalUrl
    },
    "articleSection": blogData.category,
    "keywords": seoData.keywords,
    "url": seoData.canonicalUrl
  };
}

/**
 * Generate complete SEO data for city pages
 */
export function generateCitySEOData(cityData: CityData, baseUrl?: string): SEOData {
  const { name, country, content } = cityData;
  const mainKeyword = `best things to do in ${name}`;
  const slug = generateSlug(name);
  
  const seoData: SEOData = {
    title: generateSEOTitle(cityData),
    description: generateMetaDescription(cityData),
    keywords: generateKeywords(cityData),
    canonicalUrl: createCanonical('city', slug, baseUrl),
    slug,
    mainKeyword,
    keywordDensity: calculateKeywordDensity(content, mainKeyword),
    seoScore: 0, // Will be calculated by validation
    lastModified: new Date().toISOString(),
    ogType: 'website',
    section: 'Travel Guide',
    tags: [name, country, 'travel', 'tourism', 'attractions']
  };
  
  return seoData;
}

/**
 * Generate complete SEO data for blog posts
 */
export function generateBlogSEOData(blogData: BlogData, baseUrl?: string): SEOData {
  const { title, content, category, author, publishedAt } = blogData;
  const slug = generateSlug(title);
  
  const seoData: SEOData = {
    title: generateBlogSEOTitle(blogData),
    description: generateBlogMetaDescription(blogData),
    keywords: `${title}, ${category}, travel blog, travel tips, travel guide`,
    canonicalUrl: createCanonical('blog', slug, baseUrl),
    slug,
    mainKeyword: title,
    keywordDensity: calculateKeywordDensity(content, title),
    seoScore: 0, // Will be calculated by validation
    lastModified: new Date().toISOString(),
    ogType: 'article',
    author,
    publishedTime: publishedAt,
    modifiedTime: new Date().toISOString(),
    section: category,
    tags: [category, 'travel', 'blog']
  };
  
  return seoData;
}

/**
 * Generate SEO data for blog listing page
 */
export function generateBlogListSEOData(baseUrl?: string): SEOData {
  const seoData: SEOData = {
    title: 'Travel Blog - Stories, Tips & Destination Guides | TravelWanders',
    description: 'Discover expert travel tips, destination guides, and inspiring stories from around the world. Get insider advice for your next adventure with TravelWanders.',
    keywords: 'travel blog, travel tips, destination guides, travel stories, travel advice, travel inspiration, travel experiences',
    canonicalUrl: `${baseUrl || 'https://travelwanders.com'}/blogs`,
    slug: 'blogs',
    mainKeyword: 'travel blog',
    keywordDensity: 0,
    seoScore: 85,
    lastModified: new Date().toISOString(),
    ogType: 'website',
    section: 'Travel Blog',
    tags: ['travel', 'blog', 'tips', 'destinations', 'guides']
  };
  
  return seoData;
}

/**
 * Internal linking utilities for cross-page SEO optimization
 */

export interface InternalLink {
  url: string;
  title: string;
  type: 'city' | 'blog' | 'category';
  relevanceScore: number;
}

/**
 * Generate related city links based on country, continent, or attractions
 */
export function generateRelatedCityLinks(currentCity: CityData, allCities: CityData[]): InternalLink[] {
  const links: InternalLink[] = [];
  
  // Find cities in the same country
  const sameCountryCities = allCities.filter(city => 
    city.country === currentCity.country && city.name !== currentCity.name
  );
  
  // Add same-country cities with high relevance
  sameCountryCities.forEach(city => {
    links.push({
      url: `/best-things-to-do-in-${generateSlug(city.name)}`,
      title: `Best Things to Do in ${city.name}`,
      type: 'city',
      relevanceScore: 0.9
    });
  });
  
  // Find cities with similar attractions (based on keywords)
  const currentAttractions = currentCity.attractions?.map(a => a.name.toLowerCase()) || [];
  const similarCities = allCities.filter(city => {
    if (city.name === currentCity.name) return false;
    const otherAttractions = city.attractions?.map(a => a.name.toLowerCase()) || [];
    const commonAttractions = currentAttractions.filter(a => 
      otherAttractions.some(other => other.includes(a.split(' ')[0]) || a.includes(other.split(' ')[0]))
    );
    return commonAttractions.length > 0;
  });
  
  // Add similar cities with medium relevance
  similarCities.slice(0, 3).forEach(city => {
    links.push({
      url: `/best-things-to-do-in-${generateSlug(city.name)}`,
      title: `Best Things to Do in ${city.name}`,
      type: 'city',
      relevanceScore: 0.7
    });
  });
  
  // Sort by relevance and return top 6
  return links.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 6);
}

/**
 * Generate related blog links based on category and keywords
 */
export function generateRelatedBlogLinks(currentBlog: BlogData, allBlogs: BlogData[]): InternalLink[] {
  const links: InternalLink[] = [];
  
  // Find blogs in the same category
  const sameCategoryBlogs = allBlogs.filter(blog => 
    blog.category === currentBlog.category && blog.title !== currentBlog.title
  );
  
  // Add same-category blogs with high relevance
  sameCategoryBlogs.slice(0, 3).forEach(blog => {
    links.push({
      url: `/blog/${generateSlug(blog.title)}`,
      title: blog.title,
      type: 'blog',
      relevanceScore: 0.9
    });
  });
  
  // Find blogs with similar keywords
  const currentKeywords = currentBlog.title.toLowerCase().split(' ');
  const similarBlogs = allBlogs.filter(blog => {
    if (blog.title === currentBlog.title) return false;
    const otherKeywords = blog.title.toLowerCase().split(' ');
    const commonKeywords = currentKeywords.filter(word => 
      otherKeywords.includes(word) && word.length > 3
    );
    return commonKeywords.length > 0;
  });
  
  // Add similar blogs with medium relevance
  similarBlogs.slice(0, 3).forEach(blog => {
    links.push({
      url: `/blog/${generateSlug(blog.title)}`,
      title: blog.title,
      type: 'blog',
      relevanceScore: 0.7
    });
  });
  
  // Sort by relevance and return top 5
  return links.sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, 5);
}

/**
 * Generate contextual links for city pages (related blogs, nearby cities)
 */
export function generateContextualLinks(cityData: CityData, allBlogs: BlogData[]): InternalLink[] {
  const links: InternalLink[] = [];
  
  // Find relevant blog posts about this city/country
  const relevantBlogs = allBlogs.filter(blog => {
    const content = (blog.title + ' ' + blog.content + ' ' + blog.excerpt).toLowerCase();
    return content.includes(cityData.name.toLowerCase()) || 
           content.includes(cityData.country.toLowerCase());
  });
  
  relevantBlogs.slice(0, 3).forEach(blog => {
    links.push({
      url: `/blog/${generateSlug(blog.title)}`,
      title: blog.title,
      type: 'blog',
      relevanceScore: 0.8
    });
  });
  
  // Add general travel category links
  links.push({
    url: '/blogs',
    title: 'All Travel Stories & Tips',
    type: 'category',
    relevanceScore: 0.6
  });
  
  return links.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Generate contextual links for blog pages (related cities, similar blogs)
 */
export function generateBlogContextualLinks(blogData: BlogData, allCities: CityData[]): InternalLink[] {
  const links: InternalLink[] = [];
  
  // Find cities mentioned in the blog content
  const content = (blogData.title + ' ' + blogData.content + ' ' + blogData.excerpt).toLowerCase();
  const mentionedCities = allCities.filter(city => 
    content.includes(city.name.toLowerCase()) || 
    content.includes(city.country.toLowerCase())
  );
  
  mentionedCities.slice(0, 4).forEach(city => {
    links.push({
      url: `/best-things-to-do-in-${generateSlug(city.name)}`,
      title: `Best Things to Do in ${city.name}`,
      type: 'city',
      relevanceScore: 0.9
    });
  });
  
  // Add destinations page link
  links.push({
    url: '/destinations',
    title: 'Explore All Destinations',
    type: 'category',
    relevanceScore: 0.7
  });
  
  return links.sort((a, b) => b.relevanceScore - a.relevanceScore);
}

/**
 * Extract internal links from content (for SEO validation)
 */
export function extractInternalLinks(content: string): string[] {
  const linkRegex = /href="([^"]*(?:best-things-to-do-in-[^"]*|\/blog\/[^"]*|\/destinations|\/blogs))"/g;
  const links: string[] = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  
  return links;
}