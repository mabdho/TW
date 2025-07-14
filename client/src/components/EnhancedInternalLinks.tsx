/**
 * Enhanced Internal Linking System for TravelWanders
 * Creates topical authority clusters and connects related content
 */

import { useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Star, ArrowRight } from 'lucide-react';

interface CityData {
  name: string;
  country: string;
  continent: string;
  route: string;
  category?: string;
  keywords?: string[];
}

interface BlogData {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  keywords?: string[];
}

interface InternalLinksProps {
  currentPage: {
    type: 'city' | 'blog';
    data: CityData | BlogData;
  };
  maxLinks?: number;
}

// Enhanced relevance scoring algorithm
function calculateRelevance(current: any, candidate: any, type: 'city' | 'blog'): number {
  let score = 0;

  if (type === 'city') {
    // Geographic proximity
    if (current.country === candidate.country) score += 40;
    if (current.continent === candidate.continent) score += 20;
    
    // Category similarity
    if (current.category === candidate.category) score += 30;
    
    // Keyword overlap
    const currentKeywords = current.keywords || [];
    const candidateKeywords = candidate.keywords || [];
    const overlap = currentKeywords.filter(k => candidateKeywords.includes(k)).length;
    score += overlap * 10;
    
    // Name similarity (for city districts or similar names)
    const nameSimilarity = calculateStringSimilarity(current.name, candidate.name);
    score += nameSimilarity * 15;
    
  } else if (type === 'blog') {
    // Category match
    if (current.category === candidate.category) score += 50;
    
    // Content relevance through keywords
    const currentKeywords = current.keywords || [];
    const candidateKeywords = candidate.keywords || [];
    const overlap = currentKeywords.filter(k => candidateKeywords.includes(k)).length;
    score += overlap * 15;
    
    // Title similarity
    const titleSimilarity = calculateStringSimilarity(current.title, candidate.title);
    score += titleSimilarity * 20;
  }

  return Math.min(score, 100); // Cap at 100
}

function calculateStringSimilarity(str1: string, str2: string): number {
  if (!str1 || !str2) return 0;
  const words1 = str1.toLowerCase().split(' ');
  const words2 = str2.toLowerCase().split(' ');
  const commonWords = words1.filter(word => words2.includes(word));
  return (commonWords.length / Math.max(words1.length, words2.length)) * 100;
}

// Mock data - In production, this would come from your data service
const mockCities: CityData[] = [
  {
    name: 'Venice',
    country: 'Italy',
    continent: 'Europe',
    route: '/best-things-to-do-in-venice',
    category: 'romantic',
    keywords: ['canals', 'gondola', 'historic', 'romantic', 'architecture']
  },
  {
    name: 'Milan',
    country: 'Italy', 
    continent: 'Europe',
    route: '/best-things-to-do-in-milan',
    category: 'fashion',
    keywords: ['fashion', 'shopping', 'design', 'modern', 'culture']
  },
  {
    name: 'Berlin',
    country: 'Germany',
    continent: 'Europe', 
    route: '/best-things-to-do-in-berlin',
    category: 'history',
    keywords: ['history', 'museums', 'nightlife', 'culture', 'art']
  }
];

const mockBlogs: BlogData[] = [
  {
    id: 'underrated-destinations-for-solo-travelers',
    title: 'Underrated Destinations for Solo Travelers',
    category: 'Solo Travel',
    excerpt: 'Discover hidden gems perfect for independent exploration',
    keywords: ['solo travel', 'adventure', 'safety', 'budget', 'backpacking']
  }
];

export function EnhancedInternalLinks({ currentPage, maxLinks = 6 }: InternalLinksProps) {
  const relatedContent = useMemo(() => {
    const { type, data } = currentPage;
    
    if (type === 'city') {
      const cityData = data as CityData;
      
      // Find related cities
      const relatedCities = mockCities
        .filter(city => city.name !== cityData.name)
        .map(city => ({
          ...city,
          relevance: calculateRelevance(cityData, city, 'city'),
          type: 'city' as const
        }))
        .filter(city => city.relevance > 20)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, Math.floor(maxLinks * 0.7)); // 70% cities
      
      // Find related blogs
      const relatedBlogs = mockBlogs
        .map(blog => ({
          ...blog,
          relevance: calculateRelevance(cityData, blog, 'blog'),
          type: 'blog' as const
        }))
        .filter(blog => blog.relevance > 15)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, Math.floor(maxLinks * 0.3)); // 30% blogs
      
      return [...relatedCities, ...relatedBlogs];
      
    } else {
      const blogData = data as BlogData;
      
      // Find related blogs
      const relatedBlogs = mockBlogs
        .filter(blog => blog.id !== blogData.id)
        .map(blog => ({
          ...blog,
          relevance: calculateRelevance(blogData, blog, 'blog'),
          type: 'blog' as const
        }))
        .filter(blog => blog.relevance > 20)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, Math.floor(maxLinks * 0.6)); // 60% blogs
      
      // Find cities mentioned in blog content
      const mentionedCities = mockCities
        .map(city => ({
          ...city,
          relevance: calculateRelevance(blogData, city, 'city'),
          type: 'city' as const
        }))
        .filter(city => city.relevance > 10)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, Math.floor(maxLinks * 0.4)); // 40% cities
      
      return [...relatedBlogs, ...mentionedCities];
    }
  }, [currentPage, maxLinks]);

  if (relatedContent.length === 0) {
    return null;
  }

  const cities = relatedContent.filter(item => item.type === 'city');
  const blogs = relatedContent.filter(item => item.type === 'blog');

  return (
    <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <ArrowRight className="w-6 h-6 mr-2 text-green-600" />
        Explore Related Content
      </h3>
      
      {cities.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            Related Destinations
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <a
                key={city.route}
                href={city.route}
                className="group p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {city.name}
                    </h5>
                    <p className="text-sm text-gray-600">{city.country}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round(city.relevance)}% match
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-1">
                  {city.keywords?.slice(0, 3).map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      
      {blogs.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-600" />
            Related Articles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogs.map((blog) => (
              <a
                key={blog.id}
                href={`/blog/${blog.id}`}
                className="group p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-green-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">{blog.category}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs ml-2">
                    {Math.round(blog.relevance)}% match
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 line-clamp-2">{blog.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      )}
      
      {/* SEO Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          Discover more travel inspiration and detailed guides across our comprehensive destination network
        </p>
      </div>
    </div>
  );
}

// Utility function to extract related links for SEO
export function extractInternalLinks(currentPage: any): string[] {
  // This would extract all internal links for SEO analysis
  // Implementation depends on your specific needs
  return [];
}