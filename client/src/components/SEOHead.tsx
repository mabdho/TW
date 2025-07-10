/**
 * SEO Head component for TravelWanders
 * Renders comprehensive SEO metadata including Open Graph, Twitter Cards, and structured data
 */

import { Helmet } from 'react-helmet-async';
import { SEOData } from '../utils/seo';

interface SEOHeadProps {
  seoData: SEOData;
  structuredData?: object;
  breadcrumbData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ seoData, structuredData, breadcrumbData }) => {
  const {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType = 'website',
    author,
    publishedTime,
    modifiedTime,
    section,
    tags = []
  } = seoData;

  return (
    <Helmet>
      {/* Basic SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || 'TravelWanders'} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="TravelWanders" />
      <meta property="og:locale" content="en_US" />
      
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:alt" content={title} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      
      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@TravelWanders" />
      <meta name="twitter:creator" content="@TravelWanders" />
      
      {ogImage && (
        <>
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:image:alt" content={title} />
        </>
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Breadcrumb Structured Data */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Language and Content */}
      <html lang="en" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      
      {/* Security */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Cache Control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
    </Helmet>
  );
};