/**
 * Data service for internal linking
 * Provides city and blog data for generating related content links
 */

import { CityData, BlogData } from './seo';
import { getAllBlogs } from '../blogs';

/**
 * Get sample city data for internal linking
 * In a real application, this would fetch from an API or database
 */
export function getAllCitiesData(): CityData[] {
  return [
    // City data cleared - ready for fresh production content via admin panel
  ];
}

/**
 * Get all blog data for internal linking
 */
export function getAllBlogsData(): BlogData[] {
  try {
    return getAllBlogs();
  } catch (error) {
    console.warn('Could not load blog data:', error);
    return [];
  }
}

/**
 * Calculate similarity score between two pieces of content
 */
export function calculateContentSimilarity(content1: string, content2: string): number {
  const words1 = content1.toLowerCase().split(/\s+/);
  const words2 = content2.toLowerCase().split(/\s+/);
  
  const intersection = words1.filter(word => words2.includes(word));
  const union = [...new Set([...words1, ...words2])];
  
  return intersection.length / union.length;
}

/**
 * Get related cities based on content similarity
 */
export function getRelatedCities(targetCity: CityData, allCities: CityData[], limit: number = 3): CityData[] {
  return allCities
    .filter(city => city.name !== targetCity.name)
    .map(city => ({
      ...city,
      similarity: calculateContentSimilarity(targetCity.content, city.content)
    }))
    .sort((a, b) => (b.similarity || 0) - (a.similarity || 0))
    .slice(0, limit);
}

/**
 * Get related blogs based on content similarity
 */
export function getRelatedBlogs(targetContent: string, allBlogs: BlogData[], limit: number = 3): BlogData[] {
  return allBlogs
    .map(blog => ({
      ...blog,
      similarity: calculateContentSimilarity(targetContent, blog.excerpt + ' ' + blog.content)
    }))
    .sort((a, b) => (b.similarity || 0) - (a.similarity || 0))
    .slice(0, limit);
}