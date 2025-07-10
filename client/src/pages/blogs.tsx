import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogsPage() {
  // Placeholder blog posts - these would come from your CMS or API
  const blogPosts = [
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
    },
    {
      id: 3,
      title: "Digital Nomad Destinations: The Best Cities for Remote Work",
      excerpt: "A comprehensive guide to cities with great wifi, affordable living, and vibrant communities.",
      category: "Digital Nomad",
      date: "2025-01-02",
      readTime: "12 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Solo Female Travel: Safety Tips and Empowering Destinations",
      excerpt: "Essential advice and destination recommendations for women traveling alone.",
      category: "Solo Travel",
      date: "2024-12-28",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Tourism: How to Travel Responsibly",
      excerpt: "Learn how to minimize your environmental impact while exploring the world.",
      category: "Sustainable Travel",
      date: "2024-12-25",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Food Adventures: Street Food Guide to Asian Markets",
      excerpt: "Navigate the vibrant street food scenes across Asia with confidence and appetite.",
      category: "Food & Culture",
      date: "2024-12-20",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = ["All", "Travel Tips", "Budget Travel", "Digital Nomad", "Solo Travel", "Sustainable Travel", "Food & Culture"];

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
            <Card key={post.id} className="mb-12 overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300">
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
                      {new Date(post.date).toLocaleDateString()}
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
                  <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </div>
            </Card>
          ))}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
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
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                      Read More
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}