import { useParams } from 'wouter';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { getBlogById } from '../blogs';

export default function BlogDetailPage() {
  const { id } = useParams();
  
  // Get single blog post from file system
  const blog = getBlogById(id || '');

  if (!blog) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
              <a 
                href="/blogs"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Blog Header */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Back to Blog Link */}
            <a 
              href="/blogs"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>

            {/* Blog Meta */}
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                {blog.category}
              </Badge>
              {blog.featured && (
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                  Featured
                </Badge>
              )}
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                {blog.readTime}
              </div>
            </div>

            {/* Blog Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Blog Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            {/* Featured Image */}
            {blog.imageUrl && (
              <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </div>
            </div>

            {/* Share & Back Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <a 
                  href="/blogs"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Posts
                </a>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Published in</span>
                  <Badge variant="outline" className="border-green-300 text-green-700 bg-green-50">
                    {blog.category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}