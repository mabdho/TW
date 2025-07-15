/**
 * City Page Template for TravelWanders
 * Extends BasePageTemplate with city-specific SEO optimization
 * Focuses on "Best things to do in [city]" keyword targeting
 */

import React from 'react';
import BasePageTemplate from './BasePageTemplate';
import { CityData, generateCitySEOData, generateCityStructuredData, generateBreadcrumbStructuredData, generateFAQStructuredData, generateRelatedCityLinks, generateContextualLinks } from '../../utils/seo';
import { InternalLinks } from '../InternalLinks';
import { getAllCitiesData, getAllBlogsData } from '../../utils/dataService';
import { generatePlaceSchema } from '../../utils/geoData';
import { generateCityTravelGuideSchema, generateTouristAttractionSchema, detectBusinessType, generateLocalBusinessSchema, generateArticleSchema } from '../../utils/structuredData';
import { generateCityMetaTags, generateOptimizedMetaDescription, generateEnhancedStructuredData, generateCityHeroAltText } from '../../utils/seoOptimization';
import { getCityGradientClass } from '../../utils/cityGradients';

interface CityPageTemplateProps {
  cityData: CityData;
  children: React.ReactNode;
  className?: string;
  baseUrl?: string;
  imageUrl?: string;
  faqs?: Array<{question: string; answer: string}>;
  title?: string; // Add title prop to override default
}

export const CityPageTemplate: React.FC<CityPageTemplateProps> = ({
  cityData,
  children,
  className = '',
  baseUrl,
  imageUrl,
  faqs,
  title
}) => {
  // Generate SEO data for city page
  const seoData = generateCitySEOData(cityData, baseUrl);
  
  // Override title if provided (to match HTML exactly)
  if (title) {
    seoData.title = title;
  }
  
  // Generate structured data for city page (Article schema to match HTML source)
  const structuredData = generateCityStructuredData(cityData, seoData);
  
  // Generate Article schema to match HTML source of truth
  const articleSchema = generateArticleSchema({
    name: cityData.name,
    country: cityData.country,
    description: seoData.description,
    imageUrl: imageUrl || cityData.imageUrl || '',
    canonicalUrl: seoData.canonicalUrl,
    author: cityData.author,
    publishedDate: cityData.publishedDate,
    lastUpdated: cityData.lastUpdated,
    attractions: cityData.attractions
  });
  
  // Generate breadcrumb data
  const breadcrumbData = generateBreadcrumbStructuredData([
    {
      name: 'Home',
      url: baseUrl || 'https://travelwanders.com'
    },
    {
      name: 'Destinations',
      url: `${baseUrl || 'https://travelwanders.com'}/destinations`
    },
    {
      name: cityData.country,
      url: `${baseUrl || 'https://travelwanders.com'}/destinations/${cityData.country.toLowerCase()}`
    },
    {
      name: `Best Things to Do in ${cityData.name}`,
      url: seoData.canonicalUrl
    }
  ]);
  
  // Generate FAQ structured data if FAQs exist
  const faqData = faqs && faqs.length > 0 ? generateFAQStructuredData(faqs, seoData.canonicalUrl) : undefined;

  return (
    <BasePageTemplate
      seoData={seoData}
      structuredData={structuredData}
      articleSchema={articleSchema}
      breadcrumbData={breadcrumbData}
      faqData={faqData}
      className={className}
    >
      {/* City-specific components */}
      <div className="city-page-container">
        {/* SEO-optimized breadcrumb navigation - Mobile First */}
        <nav className="breadcrumb-nav py-3 px-4 sm:py-4 sm:px-6 bg-gray-50 dark:bg-gray-800" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-1 sm:mx-2">/</span>
              <a href="/destinations" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                Destinations
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-1 sm:mx-2">/</span>
              <a 
                href={`/destinations/${cityData.country.toLowerCase()}`} 
                className="hover:text-green-600 dark:hover:text-green-400 transition-colors truncate max-w-20 sm:max-w-none"
                title={cityData.country}
              >
                {cityData.country}
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-1 sm:mx-2">/</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium truncate">
                <span className="hidden sm:inline">Best Things to Do in {cityData.name}</span>
                <span className="sm:hidden">{cityData.name}</span>
              </span>
            </li>
          </ol>
        </nav>

        {/* City page hero section with optimized image or gradient */}
        <div className={`city-hero-section relative text-white h-64 sm:h-80 md:h-96 lg:h-[28rem] ${!imageUrl ? getCityGradientClass(cityData.name, cityData.country) : 'bg-gray-900'}`}>
          {imageUrl && (
            <picture className="absolute inset-0 w-full h-full">
              <source 
                srcSet={`${imageUrl.split('?')[0]}?auto=format&fit=crop&w=1920&fm=avif&q=75`}
                type="image/avif" 
              />
              <source 
                srcSet={`${imageUrl.split('?')[0]}?auto=format&fit=crop&w=1920&fm=webp&q=80`}
                type="image/webp" 
              />
              <img 
                src={`${imageUrl.split('?')[0]}?auto=format&fit=crop&w=1920&fm=jpg&q=80`}
                alt={generateCityHeroAltText(cityData.name, cityData.country)}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                width="1920"
                height="1080"
              />
            </picture>
          )}
          {/* SEO Header Content - Mobile First Design */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <div className="max-w-7xl mx-auto px-4 pb-6 pt-12 sm:px-6 sm:pb-8 sm:pt-16">
              <div className="max-w-4xl">
                {/* H1 with main keyword - Mobile First Typography */}
                <h1 className="text-2xl leading-tight sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight xl:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg">
                  {title || `Best Things to Do in ${cityData.name}`}
                </h1>
                
                {/* Subtitle with keyword variations - Mobile Optimized */}
                <p className="text-base leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl lg:text-2xl mb-4 sm:mb-6 opacity-90 drop-shadow-md">
                  Discover amazing experiences and top attractions in {cityData.name}, {cityData.country}
                </p>
                
                {/* Quick facts for local SEO - Mobile First Layout */}
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                    📍 {cityData.name}, {cityData.country}
                  </span>
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                    🎯 {cityData.attractions?.length || 0}+ Attractions
                  </span>
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                    ⭐ Travel Guide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area - Mobile First */}
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
          {children}
        </main>

        {/* Enhanced structured data schemas for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateCityTravelGuideSchema(
              cityData,
              seoData.title,
              seoData.description,
              seoData.canonicalUrl
            ))
          }}
        />
        
        {/* Article schema for blog-style travel guide content */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": seoData.title,
              "description": seoData.description,
              "author": {
                "@type": "Person",
                "name": "TravelWanders Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "TravelWanders",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://travelwanders.com/favicon.svg"
                }
              },
              "datePublished": new Date().toISOString(),
              "dateModified": new Date().toISOString(),
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": seoData.canonicalUrl
              },
              "image": {
                "@type": "ImageObject",
                "url": imageUrl || `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop`,
                "width": 1200,
                "height": 630
              },
              "articleSection": "Travel Guide",
              "keywords": [`best things to do in ${cityData.name}`, `${cityData.name} travel guide`, `${cityData.name} attractions`, `visit ${cityData.name}`, `${cityData.name} ${cityData.country}`],
              "url": seoData.canonicalUrl,
              "wordCount": cityData.attractions?.length ? cityData.attractions.length * 150 : 1500,
              "about": {
                "@type": "Place",
                "name": cityData.name,
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": cityData.country
                }
              }
            })
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePlaceSchema(
              cityData.name,
              cityData.country,
              `Complete travel guide for ${cityData.name}, ${cityData.country}. Discover the best attractions, activities, and experiences.`
            ))
          }}
        />
        
        {/* Individual TouristAttraction schemas for major attractions */}
        {cityData.attractions?.slice(0, 5).map((attraction, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateTouristAttractionSchema(attraction, cityData.name, cityData.country))
            }}
          />
        ))}
        
        {/* FAQ structured data if available */}
        {faqs && faqs.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateFAQStructuredData(faqs, seoData.canonicalUrl))
            }}
          />
        )}
      </div>
    </BasePageTemplate>
  );
};

export default CityPageTemplate;