import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getLatestBlogsForHomePage } from '../blogs';

const TravelCategories = () => {
  // Get latest 2 blogs from file system - always featured on home page
  const latestBlogs = getLatestBlogsForHomePage(2);

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

        {/* Empty State */}
        {latestBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No blog posts available yet.</p>
            <a 
              href="/blogs" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Visit Blog Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}

        {/* Latest Blogs Grid - Only show if we have blogs */}
        {latestBlogs.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {latestBlogs.map((blog) => (
                <a href={`/blog/${blog.id}`} key={blog.id}>
                  <Card className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Blog Image */}
                    <div className="relative h-48 bg-gray-100">
                      {blog.imageUrl ? (
                        <picture className="absolute inset-0 w-full h-full">
                          <source 
                            srcSet={blog.imageUrl.replace(/fm=webp/g, 'fm=avif')} 
                            type="image/avif" 
                          />
                          <source 
                            srcSet={blog.imageUrl.includes('fm=webp') ? blog.imageUrl : `${blog.imageUrl}&fm=webp`} 
                            type="image/webp" 
                          />
                          <img 
                            src={blog.imageUrl} 
                            alt={`${blog.title} - Travel blog article about ${blog.category.toLowerCase()}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                            width="400"
                            height="192"
                          />
                        </picture>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-20"></div>
                      )}
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
                          <Clock className="h-4 w-4 mr-1" />
                          {blog.readTime}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          📅 {new Date(blog.date).toLocaleDateString()}
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
                        <span className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors text-sm">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-200" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
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
          </>
        )}
      </div>
    </section>
  );
};

export default TravelCategories;
export { TravelCategories };