/**
 * Base Page Template for TravelWanders
 * Wrapper component that includes SEO Head and provides consistent layout
 */

import React from 'react';
import SEOHead from '../SEOHead';
import { SEOData } from '../../utils/seo';

interface BasePageTemplateProps {
  seoData: SEOData;
  structuredData?: object;
  articleSchema?: object;
  breadcrumbData?: object;
  faqData?: object;
  children: React.ReactNode;
  className?: string;
}

export const BasePageTemplate: React.FC<BasePageTemplateProps> = ({
  seoData,
  structuredData,
  articleSchema,
  breadcrumbData,
  faqData,
  children,
  className = ''
}) => {
  // Update document title for client-side navigation
  React.useEffect(() => {
    document.title = seoData.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seoData.description);
    }
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seoData.canonicalUrl);
    }
  }, [seoData.title, seoData.description, seoData.canonicalUrl]);

  return (
    <>
      <SEOHead
        seoData={seoData}
        structuredData={structuredData}
        articleSchema={articleSchema}
        breadcrumbData={breadcrumbData}
        faqData={faqData}
      />
      
      <div className={`min-h-screen bg-white dark:bg-gray-900 ${className}`}>
        {children}
      </div>
    </>
  );
};

export default BasePageTemplate;