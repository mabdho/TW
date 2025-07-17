import { useParams } from 'wouter';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon } from '@/components/icons/SimpleIcons';
import { getBlogById } from '../blogs';
import { BlogPageTemplate } from '@/components/templates/BlogPageTemplate';
import { BlogData } from '@/utils/seo';
import { EnterpriseInternalLinks } from '@/components/EnterpriseInternalLinks';

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
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                Back to Blog
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Convert Blog to BlogData format for SEO
  const blogData: BlogData = {
    title: blog.title,
    content: blog.content,
    excerpt: blog.excerpt,
    category: blog.category,
    author: blog.author,
    publishedAt: blog.date
  };

  return (
    <BlogPageTemplate blogData={blogData}>
      {/* Back to Blog Link */}
      <div className="mb-8">
        <a 
          href="/blogs"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Blog
        </a>
      </div>

      {/* Featured Badge */}
      {blog.featured && (
        <div className="mb-6">
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
            Featured Post
          </Badge>
        </div>
      )}

      {/* Featured Image */}
      {blog.imageUrl && (
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <img 
            src={blog.imageUrl} 
            alt={blog.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Blog Content */}
      <div 
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Enterprise Internal Links Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <EnterpriseInternalLinks 
          currentPageUrl={`/blog/${blog.id}`}
          pageType="blog"
          maxLinks={6}
          showRelatedContent={true}
          className="bg-gray-50 border border-gray-200 rounded-lg"
        />
      </div>

      {/* Back Navigation */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <a 
            href="/blogs"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
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
    </BlogPageTemplate>
  );
}