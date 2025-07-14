import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SEOHead } from '@/components/SEOHead';
import { FeaturedCities } from '@/components/FeaturedCities';
import { TravelCategories } from '@/components/TravelCategories';
import { Footer } from '@/components/Footer';
import { EnhancedInternalLinks } from '@/components/EnhancedInternalLinks';
import { structuredDataSchemas } from '@/utils/structuredData';

export default function Home() {
  const seoData = {
    title: "TravelWanders - Discover Your Next Adventure",
    description: "Discover breathtaking destinations and plan your next adventure with TravelWanders. Explore curated travel guides, experiences, and hidden gems worldwide.",
    keywords: "travel, adventure, destinations, travel guide, vacation, explore, wanderlust, tourism, travel planning, city guides",
    canonicalUrl: "https://travelwanders.com/",
    slug: "",
    mainKeyword: "travel destinations",
    keywordDensity: 2.1,
    seoScore: 95,
    lastModified: new Date().toISOString(),
    ogImage: "https://travelwanders.com/hero-beach.jpg",
    ogType: "website",
    author: "TravelWanders",
    section: "homepage"
  };

  // Enhanced structured data with multiple schemas
  const structuredData = [
    structuredDataSchemas.generateOrganizationSchema(),
    structuredDataSchemas.generateWebsiteSchema(),
    structuredDataSchemas.generateLocalBusinessSchema()
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead seoData={seoData} structuredData={structuredData} />
      <Navigation />
      <Hero />
      
      {/* Critical components loaded immediately for FCP optimization */}
      <FeaturedCities />
      <TravelCategories />
      
      {/* Enhanced internal linking for SEO authority */}
      <EnhancedInternalLinks 
        currentPage={{
          type: 'homepage',
          data: {
            title: 'TravelWanders - Discover Your Next Adventure',
            content: 'Travel destinations and guides for discovering amazing places worldwide. Explore cities, countries, and travel experiences.'
          }
        }}
      />
      
      <Footer />
    </div>
  );
}
