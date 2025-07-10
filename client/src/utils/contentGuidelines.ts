/**
 * Content guidelines and validation for TravelWanders
 * Enforces content standards for different page types
 */

export interface ContentGuidelines {
  wordCount: {
    min: number;
    recommended: number;
    max?: number;
  };
  headings: {
    h1Required: boolean;
    h2Min: number;
    h3Min: number;
  };
  images: {
    min: number;
    recommended: number;
    altTextRequired: boolean;
  };
  links: {
    internalMin: number;
    externalMax: number;
  };
  keywordDensity: {
    min: number;
    max: number;
    target: number;
  };
  requiredSections: string[];
  recommendedSections: string[];
}

export interface ContentValidationResult {
  isValid: boolean;
  score: number;
  maxScore: number;
  violations: ContentViolation[];
  recommendations: string[];
  statistics: ContentStatistics;
}

export interface ContentViolation {
  type: 'required' | 'recommended' | 'warning';
  section: string;
  message: string;
  impact: 'high' | 'medium' | 'low';
  points: number;
}

export interface ContentStatistics {
  wordCount: number;
  headingCount: {
    h1: number;
    h2: number;
    h3: number;
    h4: number;
  };
  imageCount: number;
  linkCount: {
    internal: number;
    external: number;
  };
  keywordDensity: number;
  readingTime: number;
  sectionsFound: string[];
  sectionsRequired: string[];
}

/**
 * Content guidelines for different page types
 */
export const CONTENT_GUIDELINES: Record<string, ContentGuidelines> = {
  city: {
    wordCount: {
      min: 2000,
      recommended: 3000,
      max: 5000
    },
    headings: {
      h1Required: true,
      h2Min: 4,
      h3Min: 6
    },
    images: {
      min: 1,
      recommended: 6,
      altTextRequired: true
    },
    links: {
      internalMin: 5,
      externalMax: 3
    },
    keywordDensity: {
      min: 1.0,
      max: 2.0,
      target: 1.5
    },
    requiredSections: [
      'overview',
      'top attractions',
      'things to do',
      'plan your trip',
      'getting around'
    ],
    recommendedSections: [
      'where to stay',
      'best time to visit',
      'local food',
      'faq',
      'gallery'
    ]
  },
  blog: {
    wordCount: {
      min: 800,
      recommended: 1500,
      max: 3000
    },
    headings: {
      h1Required: true,
      h2Min: 3,
      h3Min: 2
    },
    images: {
      min: 1,
      recommended: 3,
      altTextRequired: true
    },
    links: {
      internalMin: 3,
      externalMax: 5
    },
    keywordDensity: {
      min: 0.5,
      max: 2.0,
      target: 1.0
    },
    requiredSections: [
      'introduction',
      'main content',
      'conclusion'
    ],
    recommendedSections: [
      'key takeaways',
      'tips',
      'resources',
      'related posts'
    ]
  },
  homepage: {
    wordCount: {
      min: 500,
      recommended: 1000,
      max: 1500
    },
    headings: {
      h1Required: true,
      h2Min: 2,
      h3Min: 3
    },
    images: {
      min: 1,
      recommended: 4,
      altTextRequired: true
    },
    links: {
      internalMin: 10,
      externalMax: 2
    },
    keywordDensity: {
      min: 0.5,
      max: 1.5,
      target: 1.0
    },
    requiredSections: [
      'hero',
      'featured destinations',
      'about'
    ],
    recommendedSections: [
      'testimonials',
      'newsletter',
      'social proof'
    ]
  }
};

/**
 * Validate content against guidelines
 */
export function validateContentGuidelines(
  content: string,
  contentType: keyof typeof CONTENT_GUIDELINES,
  mainKeyword: string
): ContentValidationResult {
  const guidelines = CONTENT_GUIDELINES[contentType];
  if (!guidelines) {
    throw new Error(`Unknown content type: ${contentType}`);
  }

  const violations: ContentViolation[] = [];
  const recommendations: string[] = [];
  let score = 0;
  const maxScore = 100;

  // Analyze content statistics
  const statistics = analyzeContentStatistics(content, mainKeyword);

  // Validate word count (20 points)
  const wordCountValidation = validateWordCount(statistics.wordCount, guidelines.wordCount);
  score += wordCountValidation.score;
  violations.push(...wordCountValidation.violations);

  // Validate headings (15 points)
  const headingsValidation = validateHeadings(statistics.headingCount, guidelines.headings);
  score += headingsValidation.score;
  violations.push(...headingsValidation.violations);

  // Validate images (15 points)
  const imagesValidation = validateImages(statistics.imageCount, guidelines.images, content);
  score += imagesValidation.score;
  violations.push(...imagesValidation.violations);

  // Validate links (10 points)
  const linksValidation = validateLinks(statistics.linkCount, guidelines.links);
  score += linksValidation.score;
  violations.push(...linksValidation.violations);

  // Validate keyword density (15 points)
  const keywordValidation = validateKeywordDensityGuidelines(statistics.keywordDensity, guidelines.keywordDensity);
  score += keywordValidation.score;
  violations.push(...keywordValidation.violations);

  // Validate required sections (25 points)
  const sectionsValidation = validateSections(statistics.sectionsFound, guidelines.requiredSections, guidelines.recommendedSections);
  score += sectionsValidation.score;
  violations.push(...sectionsValidation.violations);

  // Generate recommendations
  recommendations.push(...generateContentRecommendations(violations, guidelines, contentType));

  return {
    isValid: violations.filter(v => v.type === 'required').length === 0,
    score: Math.round(score),
    maxScore,
    violations,
    recommendations,
    statistics
  };
}

/**
 * Analyze content statistics
 */
function analyzeContentStatistics(content: string, mainKeyword: string): ContentStatistics {
  const wordCount = countWords(content);
  const headingCount = countHeadings(content);
  const imageCount = countImages(content);
  const linkCount = countLinks(content);
  const keywordDensity = calculateKeywordDensity(content, mainKeyword);
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute
  const sectionsFound = extractSections(content);
  
  return {
    wordCount,
    headingCount,
    imageCount,
    linkCount: {
      internal: linkCount.internal,
      external: linkCount.external
    },
    keywordDensity,
    readingTime,
    sectionsFound,
    sectionsRequired: []
  };
}

/**
 * Count words in content
 */
function countWords(content: string): number {
  return content.trim().split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Count headings in content
 */
function countHeadings(content: string): {h1: number, h2: number, h3: number, h4: number} {
  const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
  const h2Count = (content.match(/<h2[^>]*>/gi) || []).length;
  const h3Count = (content.match(/<h3[^>]*>/gi) || []).length;
  const h4Count = (content.match(/<h4[^>]*>/gi) || []).length;
  
  return { h1: h1Count, h2: h2Count, h3: h3Count, h4: h4Count };
}

/**
 * Count images in content
 */
function countImages(content: string): number {
  return (content.match(/<img[^>]*>/gi) || []).length;
}

/**
 * Count internal and external links
 */
function countLinks(content: string): {internal: number, external: number} {
  const linkRegex = /<a[^>]*href=["']([^"']*)/gi;
  let internal = 0;
  let external = 0;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('/') || href.startsWith('#') || href.includes('travelwanders.com')) {
      internal++;
    } else if (href.startsWith('http')) {
      external++;
    }
  }
  
  return { internal, external };
}

/**
 * Calculate keyword density
 */
function calculateKeywordDensity(content: string, keyword: string): number {
  const normalizedContent = content.toLowerCase();
  const normalizedKeyword = keyword.toLowerCase();
  
  const keywordCount = (normalizedContent.match(new RegExp(normalizedKeyword, 'g')) || []).length;
  const totalWords = countWords(content);
  
  if (totalWords === 0) return 0;
  
  return (keywordCount / totalWords) * 100;
}

/**
 * Extract sections from content
 */
function extractSections(content: string): string[] {
  const sections: string[] = [];
  const headingRegex = /<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const sectionTitle = match[1].toLowerCase().trim();
    sections.push(sectionTitle);
  }
  
  return sections;
}

/**
 * Validate word count
 */
function validateWordCount(wordCount: number, guidelines: ContentGuidelines['wordCount']): {score: number, violations: ContentViolation[]} {
  const violations: ContentViolation[] = [];
  let score = 0;
  
  if (wordCount < guidelines.min) {
    violations.push({
      type: 'required',
      section: 'word count',
      message: `Content is too short (${wordCount} words, minimum: ${guidelines.min})`,
      impact: 'high',
      points: 0
    });
  } else if (wordCount < guidelines.recommended) {
    violations.push({
      type: 'recommended',
      section: 'word count',
      message: `Content could be longer (${wordCount} words, recommended: ${guidelines.recommended})`,
      impact: 'medium',
      points: 10
    });
    score += 10;
  } else if (guidelines.max && wordCount > guidelines.max) {
    violations.push({
      type: 'warning',
      section: 'word count',
      message: `Content might be too long (${wordCount} words, maximum: ${guidelines.max})`,
      impact: 'low',
      points: 15
    });
    score += 15;
  } else {
    score += 20;
  }
  
  return { score, violations };
}

/**
 * Validate headings structure
 */
function validateHeadings(headingCount: ContentStatistics['headingCount'], guidelines: ContentGuidelines['headings']): {score: number, violations: ContentViolation[]} {
  const violations: ContentViolation[] = [];
  let score = 0;
  
  // H1 validation
  if (guidelines.h1Required && headingCount.h1 === 0) {
    violations.push({
      type: 'required',
      section: 'headings',
      message: 'Content must have exactly one H1 heading',
      impact: 'high',
      points: 0
    });
  } else if (headingCount.h1 > 1) {
    violations.push({
      type: 'warning',
      section: 'headings',
      message: 'Content should have only one H1 heading',
      impact: 'medium',
      points: 3
    });
    score += 3;
  } else {
    score += 5;
  }
  
  // H2 validation
  if (headingCount.h2 < guidelines.h2Min) {
    violations.push({
      type: 'recommended',
      section: 'headings',
      message: `Content should have at least ${guidelines.h2Min} H2 headings (current: ${headingCount.h2})`,
      impact: 'medium',
      points: 5
    });
    score += 5;
  } else {
    score += 7;
  }
  
  // H3 validation
  if (headingCount.h3 < guidelines.h3Min) {
    violations.push({
      type: 'recommended',
      section: 'headings',
      message: `Content should have at least ${guidelines.h3Min} H3 headings (current: ${headingCount.h3})`,
      impact: 'low',
      points: 3
    });
    score += 3;
  } else {
    score += 3;
  }
  
  return { score, violations };
}

/**
 * Validate images
 */
function validateImages(imageCount: number, guidelines: ContentGuidelines['images'], content: string): {score: number, violations: ContentViolation[]} {
  const violations: ContentViolation[] = [];
  let score = 0;
  
  if (imageCount < guidelines.min) {
    violations.push({
      type: 'required',
      section: 'images',
      message: `Content must have at least ${guidelines.min} image(s) (current: ${imageCount})`,
      impact: 'high',
      points: 0
    });
  } else if (imageCount < guidelines.recommended) {
    violations.push({
      type: 'recommended',
      section: 'images',
      message: `Content should have at least ${guidelines.recommended} images (current: ${imageCount})`,
      impact: 'medium',
      points: 10
    });
    score += 10;
  } else {
    score += 15;
  }
  
  // Check alt text
  if (guidelines.altTextRequired && imageCount > 0) {
    const imagesWithoutAlt = (content.match(/<img[^>]*(?!alt=)/gi) || []).length;
    if (imagesWithoutAlt > 0) {
      violations.push({
        type: 'required',
        section: 'images',
        message: `${imagesWithoutAlt} image(s) missing alt text`,
        impact: 'high',
        points: 0
      });
    }
  }
  
  return { score, violations };
}

/**
 * Validate links
 */
function validateLinks(linkCount: ContentStatistics['linkCount'], guidelines: ContentGuidelines['links']): {score: number, violations: ContentViolation[]} {
  const violations: ContentViolation[] = [];
  let score = 0;
  
  if (linkCount.internal < guidelines.internalMin) {
    violations.push({
      type: 'recommended',
      section: 'links',
      message: `Content should have at least ${guidelines.internalMin} internal links (current: ${linkCount.internal})`,
      impact: 'medium',
      points: 5
    });
    score += 5;
  } else {
    score += 10;
  }
  
  if (linkCount.external > guidelines.externalMax) {
    violations.push({
      type: 'warning',
      section: 'links',
      message: `Too many external links (${linkCount.external}, maximum recommended: ${guidelines.externalMax})`,
      impact: 'low',
      points: 8
    });
    score += 8;
  }
  
  return { score, violations };
}

/**
 * Validate keyword density against guidelines
 */
function validateKeywordDensityGuidelines(keywordDensity: number, guidelines: ContentGuidelines['keywordDensity']): {score: number, violations: ContentViolation[]} {
  const violations: ContentViolation[] = [];
  let score = 0;
  
  if (keywordDensity < guidelines.min) {
    violations.push({
      type: 'recommended',
      section: 'keyword density',
      message: `Keyword density too low (${keywordDensity.toFixed(2)}%, minimum: ${guidelines.min}%)`,
      impact: 'medium',
      points: 8
    });
    score += 8;
  } else if (keywordDensity > guidelines.max) {
    violations.push({
      type: 'warning',
      section: 'keyword density',
      message: `Keyword density too high (${keywordDensity.toFixed(2)}%, maximum: ${guidelines.max}%)`,
      impact: 'high',
      points: 5
    });
    score += 5;
  } else {
    score += 15;
  }
  
  return { score, violations };
}

/**
 * Validate required and recommended sections
 */
function validateSections(sectionsFound: string[], requiredSections: string[], recommendedSections: string[]): {score: number, violations: ContentViolation[]} {
  const violations: ContentViolation[] = [];
  let score = 0;
  
  // Check required sections
  const missingSections = requiredSections.filter(section => 
    !sectionsFound.some(found => found.includes(section.toLowerCase()))
  );
  
  if (missingSections.length > 0) {
    violations.push({
      type: 'required',
      section: 'structure',
      message: `Missing required sections: ${missingSections.join(', ')}`,
      impact: 'high',
      points: 0
    });
  } else {
    score += 20;
  }
  
  // Check recommended sections
  const missingRecommended = recommendedSections.filter(section => 
    !sectionsFound.some(found => found.includes(section.toLowerCase()))
  );
  
  if (missingRecommended.length > 0) {
    violations.push({
      type: 'recommended',
      section: 'structure',
      message: `Consider adding recommended sections: ${missingRecommended.join(', ')}`,
      impact: 'medium',
      points: 5
    });
    score += 5;
  } else {
    score += 5;
  }
  
  return { score, violations };
}

/**
 * Generate content recommendations
 */
function generateContentRecommendations(violations: ContentViolation[], guidelines: ContentGuidelines, contentType: string): string[] {
  const recommendations: string[] = [];
  
  violations.forEach(violation => {
    switch (violation.section) {
      case 'word count':
        if (violation.message.includes('too short')) {
          recommendations.push(`Add more detailed information to reach at least ${guidelines.wordCount.min} words`);
        }
        break;
      case 'headings':
        if (violation.message.includes('H1')) {
          recommendations.push('Add a clear, keyword-rich H1 heading at the beginning');
        }
        if (violation.message.includes('H2')) {
          recommendations.push('Break content into more sections with H2 headings');
        }
        break;
      case 'images':
        recommendations.push('Add more relevant images with descriptive alt text');
        break;
      case 'links':
        if (violation.message.includes('internal')) {
          recommendations.push('Add more internal links to related content');
        }
        break;
      case 'keyword density':
        if (violation.message.includes('too low')) {
          recommendations.push('Use the main keyword more naturally throughout the content');
        } else if (violation.message.includes('too high')) {
          recommendations.push('Reduce keyword usage to avoid over-optimization');
        }
        break;
      case 'structure':
        if (violation.type === 'required') {
          recommendations.push('Add the required sections to improve content structure');
        }
        break;
    }
  });
  
  return [...new Set(recommendations)];
}

/**
 * Get content grade based on score
 */
export function getContentGrade(score: number): {grade: string, color: string, description: string} {
  if (score >= 90) {
    return { grade: 'A+', color: 'green', description: 'Excellent content quality' };
  } else if (score >= 80) {
    return { grade: 'A', color: 'green', description: 'Very good content quality' };
  } else if (score >= 70) {
    return { grade: 'B', color: 'yellow', description: 'Good content quality' };
  } else if (score >= 60) {
    return { grade: 'C', color: 'orange', description: 'Needs improvement' };
  } else {
    return { grade: 'F', color: 'red', description: 'Poor content quality' };
  }
}