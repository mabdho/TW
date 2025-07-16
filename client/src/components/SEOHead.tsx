/**
 * SEO Head component for TravelWanders
 * Renders comprehensive SEO metadata including Open Graph, Twitter Cards, and structured data
 */

import { useEffect } from 'react';
import { SEOData } from '../utils/seo';

interface SEOHeadProps {
  seoData: SEOData;
  structuredData?: object;
  articleSchema?: object;
  breadcrumbData?: object;
  faqData?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ seoData, structuredData, articleSchema, breadcrumbData, faqData }) => {
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

  // Use native DOM manipulation for SEO metadata
  useEffect(() => {
    // 🔧 HYDRATION FIX: Only update if content differs from what's already in DOM
    if (document.title !== title) {
      document.title = title;
    }
    
    // Update or create meta tags (check if already exists to prevent duplication)
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      // Only update if content is different
      if (meta.getAttribute('content') !== content) {
        meta.setAttribute('content', content);
      }
    };
    
    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };
    
    // Basic SEO Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author || 'TravelWanders');
    updateLinkTag('canonical', canonicalUrl);
    
    // Open Graph Meta Tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('og:site_name', 'TravelWanders', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage, 'property');
      updateMetaTag('og:image:alt', title, 'property');
      updateMetaTag('og:image:width', '1200', 'property');
      updateMetaTag('og:image:height', '630', 'property');
    }
    
    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:site', '@TravelWanders');
    updateMetaTag('twitter:creator', '@TravelWanders');
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage);
      updateMetaTag('twitter:image:alt', title);
    }
    
    // Additional SEO Meta Tags
    updateMetaTag('theme-color', '#059669');
    updateMetaTag('msapplication-TileColor', '#059669');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Structured Data
    if (structuredData) {
      let structuredScript = document.getElementById('structured-data') as HTMLScriptElement;
      if (!structuredScript) {
        structuredScript = document.createElement('script');
        structuredScript.id = 'structured-data';
        structuredScript.type = 'application/ld+json';
        document.head.appendChild(structuredScript);
      }
      structuredScript.textContent = JSON.stringify(structuredData);
    }
    
    // Breadcrumb Structured Data
    if (breadcrumbData) {
      let breadcrumbScript = document.getElementById('breadcrumb-data') as HTMLScriptElement;
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'breadcrumb-data';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    }
    
    // FAQ Structured Data
    if (faqData) {
      let faqScript = document.getElementById('faq-data') as HTMLScriptElement;
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'faq-data';
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqData);
    }
    
    // Article Schema (matches HTML source of truth)
    if (articleSchema) {
      let articleScript = document.getElementById('article-schema') as HTMLScriptElement;
      if (!articleScript) {
        articleScript = document.createElement('script');
        articleScript.id = 'article-schema';
        articleScript.type = 'application/ld+json';
        document.head.appendChild(articleScript);
      }
      articleScript.textContent = JSON.stringify(articleSchema);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, author, publishedTime, modifiedTime, section, tags, structuredData, breadcrumbData, faqData, articleSchema]);

  return null;
};

export default SEOHead;