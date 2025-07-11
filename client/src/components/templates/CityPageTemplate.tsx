/**
 * City Page Template for TravelWanders
 * Extends BasePageTemplate with city-specific SEO optimization
 * Focuses on "Best things to do in [city]" keyword targeting
 */

import React from 'react';
import BasePageTemplate from './BasePageTemplate';
import { CityData, generateCitySEOData, generateCityStructuredData, generateBreadcrumbStructuredData, generateRelatedCityLinks, generateContextualLinks } from '../../utils/seo';
import { InternalLinks } from '../InternalLinks';
import { getAllCitiesData, getAllBlogsData } from '../../utils/dataService';
import { generatePlaceSchema } from '../../utils/geoData';

interface CityPageTemplateProps {
  cityData: CityData;
  children: React.ReactNode;
  className?: string;
  baseUrl?: string;
}

export const CityPageTemplate: React.FC<CityPageTemplateProps> = ({
  cityData,
  children,
  className = '',
  baseUrl
}) => {
  // Generate SEO data for city page
  const seoData = generateCitySEOData(cityData, baseUrl);
  
  // Generate structured data for city page
  const structuredData = generateCityStructuredData(cityData, seoData);
  
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

  return (
    <BasePageTemplate
      seoData={seoData}
      structuredData={structuredData}
      breadcrumbData={breadcrumbData}
      className={className}
    >
      {/* City-specific components */}
      <div className="city-page-container">
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
              <a href="/destinations" className="hover:text-green-600 dark:hover:text-green-400">
                Destinations
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <a 
                href={`/destinations/${cityData.country.toLowerCase()}`} 
                className="hover:text-green-600 dark:hover:text-green-400"
              >
                {cityData.country}
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                Best Things to Do in {cityData.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* City page hero section with SEO optimization */}
        <div 
          className="city-hero-section relative text-white h-96 sm:h-[32rem] md:h-[36rem] lg:h-[40rem] bg-gradient-to-r from-green-500 to-blue-500"
          style={cityData.imageUrl ? {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cityData.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {}}
        >
          {/* SEO Header Content - Left Bottom Corner */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
            <div className="max-w-7xl mx-auto px-6 pb-8 pt-16">
              <div className="max-w-3xl">
                {/* H1 with main keyword */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                  Best Things to Do in {cityData.name}
                </h1>
                
                {/* Subtitle with keyword variations */}
                <p className="text-lg sm:text-xl md:text-2xl mb-6 opacity-90 drop-shadow-md">
                  Discover amazing experiences and top attractions in {cityData.name}, {cityData.country}
                </p>
                
                {/* Quick facts for local SEO */}
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    📍 {cityData.name}, {cityData.country}
                  </span>
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    🎯 {cityData.attractions?.length || 0}+ Top Attractions
                  </span>
                  <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    ⭐ Complete Travel Guide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>

        {/* Enhanced Place schema with actual coordinates */}
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
      </div>
    </BasePageTemplate>
  );
};

export default CityPageTemplate;