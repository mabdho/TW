import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import type { Blog } from '@shared/schema';

export default function BlogsPage() {
  // Fetch blogs from database
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['/api/blogs'],
    queryFn: async () => {
      console.log('Fetching blogs from API...');
      const response = await apiRequest('GET', '/api/blogs');
      const data = await response.json();
      console.log('API Response:', data);
      console.log('blogPosts length:', data?.length || 0);
      return data as Blog[];
    },
    staleTime: 30000, // Cache for 30 seconds
    cacheTime: 300000, // Keep in cache for 5 minutes
  });

  const categories = ["All", "Travel Tips", "Budget Travel", "Digital Nomad", "Solo Travel", "Sustainable Travel", "Food & Culture"];

  // Debug logging
  console.log('Blog Page State:', { 
    isLoading, 
    error: error?.message,
    blogPostsLength: blogPosts?.length,
    blogPosts: blogPosts?.slice(0, 2) // Log first 2 for debugging
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Travel <span className="text-green-600">Stories</span> & Insights
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover expert travel tips, destination guides, and inspiring stories from around the world to fuel your wanderlust.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-green-600" />
              <span className="ml-2 text-gray-600">Loading blogs...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-gray-600">Failed to load blog posts. Please try again later.</p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available. Check back soon for travel stories and tips!</p>
            </div>
          )}



          {/* Blog Content - Only show if we have blogs */}
          {!isLoading && !error && blogPosts.length > 0 && (
            <>
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="cursor-pointer hover:bg-green-50 hover:border-green-300 px-4 py-2 text-sm"
                  >
                    {category}
                  </Badge>
                ))}
              </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <a href={`/blog/${post.id}`} key={post.id} className="block">
              <Card className="mb-12 overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.createdAt || post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </a>
          ))}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <a href={`/blog/${post.id}`} key={post.id} className="block">
                <Card className="overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative h-48 bg-gray-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-20"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50 text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-green-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(post.createdAt || post.date).toLocaleDateString()}
                      </div>
                      <span className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                        Read More
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Load More Articles
            </button>
          </div>
          </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}