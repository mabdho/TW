/**
 * Blog Page Template for TravelWanders
 * Extends BasePageTemplate with blog-specific SEO optimization
 * Optimized for article schema and blog post structure
 */

import React from 'react';
import BasePageTemplate from './BasePageTemplate';
import { BlogData, generateBlogSEOData, generateBlogStructuredData, generateBreadcrumbStructuredData, generateRelatedBlogLinks, generateBlogContextualLinks } from '../../utils/seo';
import { InternalLinks } from '../InternalLinks';
import { getAllCitiesData, getAllBlogsData } from '../../utils/dataService';

interface BlogPageTemplateProps {
  blogData: BlogData;
  children: React.ReactNode;
  className?: string;
  baseUrl?: string;
}

export const BlogPageTemplate: React.FC<BlogPageTemplateProps> = ({
  blogData,
  children,
  className = '',
  baseUrl
}) => {
  // Generate SEO data for blog page
  const seoData = generateBlogSEOData(blogData, baseUrl);
  
  // Generate structured data for blog page
  const structuredData = generateBlogStructuredData(blogData, seoData);
  
  // Generate breadcrumb data
  const breadcrumbData = generateBreadcrumbStructuredData([
    {
      name: 'Home',
      url: baseUrl || 'https://travelwanders.com'
    },
    {
      name: 'Blog',
      url: `${baseUrl || 'https://travelwanders.com'}/blog`
    },
    {
      name: blogData.category,
      url: `${baseUrl || 'https://travelwanders.com'}/blog/category/${blogData.category.toLowerCase()}`
    },
    {
      name: blogData.title,
      url: seoData.canonicalUrl
    }
  ]);

  return (
    <BasePageTemplate
      seoData={seoData}
      structuredData={structuredData}
      breadcrumbData={breadcrumbData}
      className={className}
    >
      {/* Blog-specific components */}
      <div className="blog-page-container">
        {/* SEO-optimized breadcrumb navigation */}
        <nav className="breadcrumb-nav py-4 px-6 bg-gray-50 dark:bg-gray-800" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="/" className="hover:text-green-600 dark:hover:text-green-400">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <a href="/blog" className="hover:text-green-600 dark:hover:text-green-400">
                Blog
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <a 
                href={`/blog/category/${blogData.category.toLowerCase()}`} 
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                {blogData.category}
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {blogData.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Blog article header with SEO optimization */}
        <article className="blog-article max-w-4xl mx-auto px-6 py-8">
          {/* Article header */}
          <header className="article-header mb-8">
            {/* Category badge */}
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                {blogData.category}
              </span>
            </div>
            
            {/* H1 article title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {blogData.title}
            </h1>
            
            {/* Article meta information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              {blogData.author && (
                <div className="flex items-center gap-2">
                  <span className="font-medium">By {blogData.author}</span>
                </div>
              )}
              
              {blogData.publishedAt && (
                <div className="flex items-center gap-2">
                  <span>Published on</span>
                  <time dateTime={blogData.publishedAt}>
                    {new Date(blogData.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <span>Reading time: {Math.ceil(blogData.content.split(' ').length / 200)} min</span>
              </div>
            </div>
            
            {/* Article excerpt */}
            {blogData.excerpt && (
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                {blogData.excerpt}
              </p>
            )}
          </header>

          {/* Main content area */}
          <main className="article-content prose prose-lg max-w-none dark:prose-invert">
            {children}
          </main>

          {/* Article footer with social sharing and related content */}
          <footer className="article-footer mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            {/* Social sharing buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 w-full mb-4">
                Share this article:
              </h3>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogData.title)}&url=${encodeURIComponent(seoData.canonicalUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(seoData.canonicalUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Share on Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(seoData.canonicalUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Share on LinkedIn
              </a>
            </div>

            {/* Author information */}
            {blogData.author && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  About the Author
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {blogData.author} is a travel writer and explorer with TravelWanders, 
                  passionate about discovering and sharing the world's best destinations and experiences.
                </p>
              </div>
            )}
          </footer>
        </article>

        {/* Internal Links Section */}
        <section className="bg-gray-50 dark:bg-gray-900">
          <InternalLinks
            links={[
              ...generateRelatedBlogLinks(blogData, getAllBlogsData()),
              ...generateBlogContextualLinks(blogData, getAllCitiesData())
            ]}
            title="Related Articles & Destinations"
            description={`Discover more ${blogData.category.toLowerCase()} content and explore destinations mentioned in this article`}
          />
        </section>

        {/* FAQ Schema for blog posts */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": {
                "@type": "Question",
                "name": `What are the best travel tips for ${blogData.category.toLowerCase()}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": blogData.excerpt || `Comprehensive guide covering ${blogData.category.toLowerCase()} travel tips and insights.`
                }
              }
            })
          }}
        />
      </div>
    </BasePageTemplate>
  );
};

export default BlogPageTemplate;