import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllBlogs, getFeaturedBlogs } from '../blogs';
import { SEOHead } from '@/components/SEOHead';
import { generateBlogListSEOData, generateBreadcrumbStructuredData } from '@/utils/seo';

export default function BlogsPage() {
  // Get blogs from file system
  const blogPosts = getAllBlogs();
  const featuredBlogs = getFeaturedBlogs();

  const categories = ["All", "Travel Tips", "Budget Travel", "Digital Nomad", "Solo Travel", "Sustainable Travel", "Food & Culture"];

  // Generate SEO data for blog listing page
  const seoData = generateBlogListSEOData();
  
  // Generate breadcrumb structured data
  const breadcrumbData = generateBreadcrumbStructuredData([
    {
      name: 'Home',
      url: 'https://travelwanders.com'
    },
    {
      name: 'Travel Blog',
      url: 'https://travelwanders.com/blogs'
    }
  ]);

  // Generate structured data for blog collection
  const blogListStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "TravelWanders Blog",
    "description": "Expert travel tips, destination guides, and inspiring stories from around the world",
    "url": "https://travelwanders.com/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://travelwanders.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author || "TravelWanders Team"
      },
      "url": `https://travelwanders.com/blog/${post.id}`,
      "articleSection": post.category
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        seoData={seoData} 
        structuredData={blogListStructuredData}
        breadcrumbData={breadcrumbData}
      />
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
          
          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available. Check back soon for travel stories and tips!</p>
            </div>
          )}

          {/* Blog Content - Only show if we have blogs */}
          {blogPosts.length > 0 && (
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
          {featuredBlogs.map((post) => (
            <a href={`/blog/${post.id}`} key={post.id} className="block">
              <Card className="mb-12 overflow-hidden border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full bg-gray-100">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-20"></div>
                    )}
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
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-20"></div>
                    )}
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

      {/* Internal Links Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to plan your next adventure? Discover our comprehensive city guides with insider tips and must-visit attractions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Popular destination links */}
            <a href="/best-things-to-do-in-tokyo" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-pink-500 to-orange-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Tokyo, Japan</h3>
                <p className="text-sm text-gray-600">Ancient temples meet modern marvels</p>
              </div>
            </a>
            
            <a href="/best-things-to-do-in-paris" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Paris, France</h3>
                <p className="text-sm text-gray-600">The City of Light awaits</p>
              </div>
            </a>
            
            <a href="/best-things-to-do-in-new-york" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-gray-500 to-gray-700"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">New York, USA</h3>
                <p className="text-sm text-gray-600">The city that never sleeps</p>
              </div>
            </a>
            
            <a href="/best-things-to-do-in-barcelona" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-orange-500 to-red-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Barcelona, Spain</h3>
                <p className="text-sm text-gray-600">Gaudí's architectural wonderland</p>
              </div>
            </a>
            
            <a href="/best-things-to-do-in-london" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-green-500 to-teal-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">London, UK</h3>
                <p className="text-sm text-gray-600">Royal heritage meets modern innovation</p>
              </div>
            </a>
            
            <a href="/best-things-to-do-in-rome" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-yellow-500 to-orange-500"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Rome, Italy</h3>
                <p className="text-sm text-gray-600">The Eternal City of history</p>
              </div>
            </a>
            
            <a href="/best-things-to-do-in-sydney" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-teal-400"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Sydney, Australia</h3>
                <p className="text-sm text-gray-600">Harbour views and beach vibes</p>
              </div>
            </a>
            
            <a href="/destinations" className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-32 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <span className="text-2xl font-bold">170+</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-2">View All Destinations</h3>
                <p className="text-sm text-green-100">Explore our complete collection</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}