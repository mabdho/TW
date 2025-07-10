/**
 * City Page Template for TravelWanders
 * Extends BasePageTemplate with city-specific SEO optimization
 * Focuses on "Best things to do in [city]" keyword targeting
 */

import React from 'react';
import BasePageTemplate from './BasePageTemplate';
import { CityData, generateCitySEOData, generateCityStructuredData, generateBreadcrumbStructuredData } from '../../utils/seo';

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


        {/* City page hero section with SEO optimization */}
        <div 
          className="city-hero-section relative text-white py-16 px-6 bg-gradient-to-r from-green-500 to-blue-500"
          style={cityData.imageUrl ? {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cityData.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          } : {}}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            {/* H1 with main keyword */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Best Things to Do in {cityData.name}
            </h1>
            
            {/* Subtitle with keyword variations */}
            <p className="text-xl md:text-2xl mb-6 opacity-90">
              Discover amazing experiences and top attractions in {cityData.name}, {cityData.country}
            </p>
            
            {/* Quick facts for local SEO */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                📍 {cityData.name}, {cityData.country}
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                🎯 {cityData.attractions?.length || 0}+ Top Attractions
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                ⭐ Complete Travel Guide
              </span>
            </div>
          </div>
        </div>

        {/* Main content area */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          {children}
        </main>

        {/* Footer schema for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": cityData.name,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": cityData.country
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "0", // Would be replaced with actual coordinates
                "longitude": "0"
              },
              "touristType": "Travelers seeking best things to do",
              "description": `Complete travel guide for ${cityData.name}, ${cityData.country}. Discover the best attractions, activities, and experiences.`
            })
          }}
        />
      </div>
    </BasePageTemplate>
  );
};

export default CityPageTemplate;