import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SEOHead } from '@/components/SEOHead';
import { FeaturedCities } from '@/components/FeaturedCities';
import { TravelCategories } from '@/components/TravelCategories';
import { Footer } from '@/components/Footer';
import { EnhancedInternalLinks } from '@/components/EnhancedInternalLinks';
import * as structuredDataSchemas from '@/utils/structuredData';

export default function Home() {
  const seoData = {
    title: "Best Travel Guides & Destinations - TravelWanders",
    description: "Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.",
    keywords: "travel, adventure, destinations, travel guide, vacation, explore, wanderlust, tourism, travel planning, city guides",
    canonicalUrl: "https://travelwanders.com/",
    slug: "",
    mainKeyword: "travel destinations",
    keywordDensity: 2.1,
    seoScore: 95,
    lastModified: new Date().toISOString(),
    ogImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=630",
    ogType: "website",
    author: "TravelWanders",
    section: "homepage"
  };

  // Enhanced structured data matching HTML exactly
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TravelWanders",
    "url": "https://travelwanders.com",
    "description": "Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://travelwanders.com/destinations?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://facebook.com/travelwanders",
      "https://twitter.com/travelwanders",
      "https://instagram.com/travelwanders"
    ]
  };

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
