/**
 * SEO Head component for TravelWanders
 * Renders comprehensive SEO metadata including Open Graph, Twitter Cards, and structured data
 */

import { useEffect } from 'react';
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

  // Use native DOM manipulation for SEO metadata
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
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
      let structuredScript = document.getElementById('structured-data');
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
      let breadcrumbScript = document.getElementById('breadcrumb-data');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'breadcrumb-data';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, author, publishedTime, modifiedTime, section, tags, structuredData, breadcrumbData]);

  return null;
};

export default SEOHead;