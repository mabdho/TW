/**
 * Server-side SEO validation system
 * Copy of client-side validation for backend operations
 */

import { SEOData, CityData, BlogData, countWords, calculateKeywordDensity } from './seo';

export interface ValidationResult {
  isValid: boolean;
  score: number;
  maxScore: number;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  suggestions: string[];
}

export interface ValidationError {
  field: string;
  message: string;
  severity: 'error' | 'warning';
  points: number;
}

export interface ValidationWarning {
  field: string;
  message: string;
  impact: 'high' | 'medium' | 'low';
}

/**
 * Check if main keyword appears in first paragraph
 */
export function checkKeywordInFirstParagraph(content: string, keyword: string): boolean {
  const paragraphs = content.split('\n\n');
  if (paragraphs.length === 0) return false;
  
  const firstParagraph = paragraphs[0].toLowerCase();
  return firstParagraph.includes(keyword.toLowerCase());
}

/**
 * Check if main keyword appears in H1 tag
 */
export function checkKeywordInH1(content: string, keyword: string): boolean {
  const h1Regex = /<h1[^>]*>(.*?)<\/h1>/gi;
  const h1Match = h1Regex.exec(content);
  
  if (!h1Match) return false;
  
  const h1Text = h1Match[1].toLowerCase();
  return h1Text.includes(keyword.toLowerCase());
}

/**
 * Extract internal links from content
 */
export function extractInternalLinks(content: string): string[] {
  const internalLinkRegex = /href=["']([^"']*(?:\/[^"']*)?)/g;
  const links: string[] = [];
  let match;
  
  while ((match = internalLinkRegex.exec(content)) !== null) {
    const link = match[1];
    // Only include internal links (relative paths or same domain)
    if (link.startsWith('/') || link.startsWith('#') || !link.includes('://')) {
      links.push(link);
    }
  }
  
  return [...new Set(links)]; // Remove duplicates
}

/**
 * Validate SEO data comprehensively with scoring
 */
export function validateSEO(seoData: SEOData, contentData: CityData | BlogData, contentType: 'city' | 'blog'): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  const suggestions: string[] = [];
  let score = 0;
  const maxScore = 100;

  // Title validation (15 points)
  const titleValidation = validateTitle(seoData.title, seoData.mainKeyword, contentType);
  score += titleValidation.score;
  errors.push(...titleValidation.errors);
  warnings.push(...titleValidation.warnings);

  // Meta description validation (15 points)
  const descriptionValidation = validateMetaDescription(seoData.description, seoData.mainKeyword);
  score += descriptionValidation.score;
  errors.push(...descriptionValidation.errors);
  warnings.push(...descriptionValidation.warnings);

  // Content validation (30 points)
  const contentValidation = validateContent(contentData, seoData.mainKeyword, contentType);
  score += contentValidation.score;
  errors.push(...contentValidation.errors);
  warnings.push(...contentValidation.warnings);

  // Keyword density validation (10 points)
  const keywordValidation = validateKeywordDensity(seoData.keywordDensity, seoData.mainKeyword);
  score += keywordValidation.score;
  errors.push(...keywordValidation.errors);
  warnings.push(...keywordValidation.warnings);

  // URL structure validation (10 points)
  const urlValidation = validateURL(seoData.canonicalUrl, seoData.slug, contentType);
  score += urlValidation.score;
  errors.push(...urlValidation.errors);
  warnings.push(...urlValidation.warnings);

  // Technical SEO validation (10 points)
  const technicalValidation = validateTechnicalSEO(seoData);
  score += technicalValidation.score;
  errors.push(...technicalValidation.errors);
  warnings.push(...technicalValidation.warnings);

  // Keywords validation (10 points)
  const keywordsValidation = validateKeywords(seoData.keywords, seoData.mainKeyword);
  score += keywordsValidation.score;
  errors.push(...keywordsValidation.errors);
  warnings.push(...keywordsValidation.warnings);

  // Generate suggestions
  suggestions.push(...generateSuggestions(errors, warnings, contentType));

  return {
    isValid: errors.filter(e => e.severity === 'error').length === 0,
    score: Math.round(score),
    maxScore,
    errors,
    warnings,
    suggestions
  };
}

/**
 * Validate title with keyword optimization
 */
function validateTitle(title: string, mainKeyword: string, contentType: 'city' | 'blog'): {score: number, errors: ValidationError[], warnings: ValidationWarning[]} {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let score = 0;

  // Title length check
  if (title.length < 10) {
    errors.push({
      field: 'title',
      message: 'Title is too short (minimum 10 characters)',
      severity: 'error',
      points: 0
    });
  } else if (title.length > 60) {
    errors.push({
      field: 'title',
      message: 'Title is too long (maximum 60 characters)',
      severity: 'error',
      points: 0
    });
  } else {
    score += 5;
  }

  // Main keyword in title check
  if (contentType === 'city' && !title.toLowerCase().includes(mainKeyword.toLowerCase())) {
    errors.push({
      field: 'title',
      message: `Title must include main keyword: "${mainKeyword}"`,
      severity: 'error',
      points: 0
    });
  } else if (contentType === 'city') {
    score += 10;
  } else {
    score += 8;
  }

  // Title structure check for city pages
  if (contentType === 'city') {
    const expectedStart = 'Best Things to Do in';
    if (!title.startsWith(expectedStart)) {
      warnings.push({
        field: 'title',
        message: `City page titles should start with "${expectedStart}"`,
        impact: 'medium'
      });
    }
  }

  return { score, errors, warnings };
}

/**
 * Validate meta description
 */
function validateMetaDescription(description: string, mainKeyword: string): {score: number, errors: ValidationError[], warnings: ValidationWarning[]} {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let score = 0;

  // Description length check
  if (description.length < 120) {
    warnings.push({
      field: 'description',
      message: 'Meta description is too short (minimum 120 characters recommended)',
      impact: 'medium'
    });
    score += 5;
  } else if (description.length > 160) {
    errors.push({
      field: 'description',
      message: 'Meta description is too long (maximum 160 characters)',
      severity: 'error',
      points: 0
    });
  } else {
    score += 10;
  }

  // Main keyword in description check
  if (!description.toLowerCase().includes(mainKeyword.toLowerCase())) {
    errors.push({
      field: 'description',
      message: `Meta description must include main keyword: "${mainKeyword}"`,
      severity: 'error',
      points: 0
    });
  } else {
    score += 5;
  }

  return { score, errors, warnings };
}

/**
 * Validate content comprehensively
 */
function validateContent(contentData: CityData | BlogData, mainKeyword: string, contentType: 'city' | 'blog'): {score: number, errors: ValidationError[], warnings: ValidationWarning[]} {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let score = 0;

  const content = contentData.content;
  const wordCount = countWords(content);

  // Word count validation
  const minWords = contentType === 'city' ? 2000 : 800;
  if (wordCount < minWords) {
    errors.push({
      field: 'content',
      message: `Content is too short (minimum ${minWords} words, current: ${wordCount})`,
      severity: 'error',
      points: 0
    });
  } else {
    score += 10;
  }

  // Keyword placement checks
  if (checkKeywordInFirstParagraph(content, mainKeyword)) {
    score += 5;
  } else {
    errors.push({
      field: 'content',
      message: `Main keyword "${mainKeyword}" should appear in the first paragraph`,
      severity: 'error',
      points: 0
    });
  }

  if (checkKeywordInH1(content, mainKeyword)) {
    score += 5;
  } else {
    warnings.push({
      field: 'content',
      message: `Main keyword "${mainKeyword}" should appear in H1 tag`,
      impact: 'high'
    });
  }

  // Internal links validation
  const internalLinks = extractInternalLinks(content);
  if (internalLinks.length < 3) {
    warnings.push({
      field: 'content',
      message: `Content should have at least 3 internal links (current: ${internalLinks.length})`,
      impact: 'medium'
    });
    score += 2;
  } else {
    score += 5;
  }

  // Images validation
  const imageCount = (content.match(/<img[^>]*>/g) || []).length;
  if (imageCount < 1) {
    warnings.push({
      field: 'content',
      message: 'Content should include at least one image',
      impact: 'medium'
    });
    score += 2;
  } else {
    score += 5;
  }

  return { score, errors, warnings };
}

/**
 * Validate keyword density
 */
function validateKeywordDensity(density: number, mainKeyword: string): {score: number, errors: ValidationError[], warnings: ValidationWarning[]} {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let score = 0;

  // Target keyword density: 1-2%
  if (density < 1) {
    warnings.push({
      field: 'keywordDensity',
      message: `Keyword density is too low (${density.toFixed(2)}%, target: 1-2%)`,
      impact: 'medium'
    });
    score += 5;
  } else if (density > 2) {
    warnings.push({
      field: 'keywordDensity',
      message: `Keyword density is too high (${density.toFixed(2)}%, target: 1-2%)`,
      impact: 'high'
    });
    score += 3;
  } else {
    score += 10;
  }

  return { score, errors, warnings };
}

/**
 * Validate URL structure
 */
function validateURL(canonicalUrl: string, slug: string, contentType: 'city' | 'blog'): {score: number, errors: ValidationError[], warnings: ValidationWarning[]} {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let score = 0;

  // URL structure validation for city pages
  if (contentType === 'city') {
    if (!canonicalUrl.includes('/best-things-to-do-in-')) {
      errors.push({
        field: 'url',
        message: 'City page URLs should follow format: /best-things-to-do-in-[city-slug]',
        severity: 'error',
        points: 0
      });
    } else {
      score += 10;
    }
  } else {
    // Blog URL validation
    if (!canonicalUrl.includes('/blog/')) {
      errors.push({
        field: 'url',
        message: 'Blog URLs should follow format: /blog/[slug]',
        severity: 'error',
        points: 0
      });
    } else {
      score += 10;
    }
  }

  return { score, errors, warnings };
}

/**
 * Validate technical SEO elements
 */
function validateTechnicalSEO(seoData: SEOData): {score: number, errors: ValidationError[], warnings: ValidationWarning[]} {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let score = 0;

  // Canonical URL check
  if (!seoData.canonicalUrl) {
    errors.push({
      field: 'canonical',
      message: 'Canonical URL is required',
      severity: 'error',
      points: 0
    });
  } else {
    score += 3;
  }

  // Last modified check
  if (!seoData.lastModified) {
    warnings.push({
      field: 'lastModified',
      message: 'Last modified date is recommended',
      impact: 'low'
    });
    score += 2;
  } else {
    score += 3;
  }

  // Keywords check
  if (!seoData.keywords || seoData.keywords.length < 10) {
    warnings.push({
      field: 'keywords',
      message: 'Keywords should be more comprehensive',
      impact: 'low'
    });
    score += 2;
  } else {
    score += 4;
  }

  return { score, errors, warnings };
}

/**
 * Validate keywords
 */
function validateKeywords(keywords: string, mainKeyword: string): {score: number, errors: ValidationError[], warnings: ValidationWarning[]} {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  let score = 0;

  if (!keywords.toLowerCase().includes(mainKeyword.toLowerCase())) {
    errors.push({
      field: 'keywords',
      message: `Keywords must include main keyword: "${mainKeyword}"`,
      severity: 'error',
      points: 0
    });
  } else {
    score += 5;
  }

  const keywordArray = keywords.split(',').map(k => k.trim());
  if (keywordArray.length < 5) {
    warnings.push({
      field: 'keywords',
      message: 'Should have at least 5 keywords for better optimization',
      impact: 'low'
    });
    score += 3;
  } else {
    score += 5;
  }

  return { score, errors, warnings };
}

/**
 * Generate actionable suggestions based on validation results
 */
function generateSuggestions(errors: ValidationError[], warnings: ValidationWarning[], contentType: 'city' | 'blog'): string[] {
  const suggestions: string[] = [];

  // Title suggestions
  if (errors.some(e => e.field === 'title')) {
    if (contentType === 'city') {
      suggestions.push('Use the format: "Best Things to Do in [City] - [Country] Travel Guide | TravelWanders"');
    } else {
      suggestions.push('Keep blog titles between 10-60 characters and include main topic');
    }
  }

  // Content suggestions
  if (errors.some(e => e.field === 'content')) {
    if (contentType === 'city') {
      suggestions.push('City pages should have at least 2000 words covering attractions, activities, and travel tips');
      suggestions.push('Include main keyword "best things to do in [city]" in the first paragraph');
    } else {
      suggestions.push('Blog posts should have at least 800 words of valuable content');
    }
  }

  // Keyword density suggestions
  if (warnings.some(w => w.field === 'keywordDensity')) {
    suggestions.push('Aim for 1-2% keyword density - use the main keyword naturally throughout the content');
  }

  // Internal linking suggestions
  if (warnings.some(w => w.field === 'content' && w.message.includes('internal links'))) {
    suggestions.push('Add more internal links to related city pages, blog posts, and category pages');
  }

  // Image suggestions
  if (warnings.some(w => w.field === 'content' && w.message.includes('image'))) {
    suggestions.push('Add relevant images with proper alt text to improve engagement and SEO');
  }

  return suggestions;
}

/**
 * Get SEO grade based on score
 */
export function getSEOGrade(score: number): {grade: string, color: string, description: string} {
  if (score >= 90) {
    return { grade: 'A+', color: 'green', description: 'Excellent SEO optimization' };
  } else if (score >= 80) {
    return { grade: 'A', color: 'green', description: 'Very good SEO optimization' };
  } else if (score >= 70) {
    return { grade: 'B', color: 'yellow', description: 'Good SEO optimization' };
  } else if (score >= 60) {
    return { grade: 'C', color: 'orange', description: 'Needs improvement' };
  } else {
    return { grade: 'F', color: 'red', description: 'Poor SEO optimization' };
  }
}