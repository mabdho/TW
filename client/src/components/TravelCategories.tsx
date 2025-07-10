import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Latest blog posts data - same structure as in blogs.tsx
const latestBlogs = [
  {
    id: 1,
    title: "Hidden Gems of Southeast Asia: Beyond the Tourist Trail",
    excerpt: "Discover lesser-known destinations that offer authentic cultural experiences away from the crowds.",
    category: "Travel Tips",
    date: "2025-01-08",
    readTime: "5 min read",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "Budget Travel Guide: How to See Europe for Under $50 a Day",
    excerpt: "Practical tips and strategies for exploring European cities without breaking the bank.",
    category: "Budget Travel",
    date: "2025-01-05",
    readTime: "8 min read",
    image: "/api/placeholder/400/250",
    featured: false
  }
];

export const TravelCategories = () => {
  return (
    <section id="experiences" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Travel <span className="text-green-600">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get inspired by our latest travel insights, tips, and destination guides.
          </p>
        </div>

        {/* Latest Blogs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {latestBlogs.map((blog) => (
            <Card 
              key={blog.id}
              className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-20"></div>
                {blog.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Featured</Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                {/* Blog Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                    {blog.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blog.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
                
                {/* Blog Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                
                {/* Blog Excerpt */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                
                {/* Read More Link */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors text-sm">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-200" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Blogs Link */}
        <div className="text-center mt-8">
          <a 
            href="/blogs" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            View All Travel Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};