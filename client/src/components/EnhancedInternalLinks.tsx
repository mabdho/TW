/**
 * EnhancedInternalLinks Component - Advanced internal linking system
 * Implements intelligent content linking for SEO authority
 */

import React from 'react';
import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface InternalLinksProps {
  currentPage: {
    type: 'city' | 'blog' | 'homepage';
    data: {
      title: string;
      content: string;
      [key: string]: any;
    };
  };
  maxLinks?: number;
  className?: string;
}

// Mock data for demonstration - in production, this would come from your data layer
const mockCityData = [
  { name: 'London', country: 'United Kingdom', path: '/best-things-to-do-in-london', continent: 'Europe' },
  { name: 'Paris', country: 'France', path: '/best-things-to-do-in-paris', continent: 'Europe' },
  { name: 'Tokyo', country: 'Japan', path: '/best-things-to-do-in-tokyo', continent: 'Asia' },
  { name: 'New York', country: 'United States', path: '/best-things-to-do-in-new-york', continent: 'North America' },
  { name: 'Barcelona', country: 'Spain', path: '/best-things-to-do-in-barcelona', continent: 'Europe' }
];

const mockBlogData = [
  { id: 'travel-tips-2024', title: 'Essential Travel Tips for 2024', category: 'Travel Tips', path: '/blog/travel-tips-2024' },
  { id: 'budget-travel-guide', title: 'Budget Travel Guide', category: 'Budget Travel', path: '/blog/budget-travel-guide' },
  { id: 'solo-travel-safety', title: 'Solo Travel Safety Guide', category: 'Solo Travel', path: '/blog/solo-travel-safety' }
];

export const EnhancedInternalLinks: React.FC<InternalLinksProps> = ({
  currentPage,
  maxLinks = 6,
  className = ''
}) => {
  // Calculate relevance score for content
  const calculateRelevance = (item: any): number => {
    let score = 0;
    const currentContent = currentPage.data.content.toLowerCase();
    const currentTitle = currentPage.data.title.toLowerCase();
    
    // Keyword matching
    if (item.name) {
      if (currentContent.includes(item.name.toLowerCase()) || currentTitle.includes(item.name.toLowerCase())) {
        score += 30;
      }
    }
    
    if (item.title) {
      const titleWords = item.title.toLowerCase().split(' ');
      const matches = titleWords.filter(word => currentContent.includes(word) || currentTitle.includes(word));
      score += matches.length * 5;
    }
    
    // Geographic relevance for cities
    if (item.continent && currentContent.includes(item.continent.toLowerCase())) {
      score += 20;
    }
    
    if (item.country && currentContent.includes(item.country.toLowerCase())) {
      score += 25;
    }
    
    // Category relevance for blogs
    if (item.category && currentContent.includes(item.category.toLowerCase())) {
      score += 20;
    }
    
    return score;
  };

  // Get related cities
  const getRelatedCities = (): typeof mockCityData => {
    return mockCityData
      .map(city => ({ ...city, relevance: calculateRelevance(city) }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, Math.ceil(maxLinks / 2));
  };

  // Get related blogs
  const getRelatedBlogs = (): typeof mockBlogData => {
    return mockBlogData
      .map(blog => ({ ...blog, relevance: calculateRelevance(blog) }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, Math.floor(maxLinks / 2));
  };

  const relatedCities = getRelatedCities();
  const relatedBlogs = getRelatedBlogs();

  if (relatedCities.length === 0 && relatedBlogs.length === 0) {
    return null;
  }

  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Related Content
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover more destinations and travel insights that complement your current reading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Related Cities */}
          {relatedCities.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Related Destinations
              </h3>
              <div className="space-y-4">
                {relatedCities.map((city, index) => (
                  <a
                    key={city.path}
                    href={city.path}
                    className="block group"
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                {city.name}
                              </h4>
                              <p className="text-sm text-gray-600">{city.country}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {city.continent}
                            </Badge>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Related Blogs */}
          {relatedBlogs.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedBlogs.map((blog, index) => (
                  <a
                    key={blog.path}
                    href={blog.path}
                    className="block group"
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <Clock className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {blog.title}
                              </h4>
                              <p className="text-sm text-gray-600">{blog.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              Article
                            </Badge>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/destinations"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore All Destinations
            </a>
            <a
              href="/blogs"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Clock className="w-4 h-4 mr-2" />
              Read All Articles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedInternalLinks;