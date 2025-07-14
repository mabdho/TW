import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SEOHead } from '@/components/SEOHead';
import { lazy, Suspense } from 'react';

// Lazy load below-the-fold components for better FCP
const LazyFeaturedCities = lazy(() => import('@/components/FeaturedCities'));
const LazyTravelCategories = lazy(() => import('@/components/TravelCategories'));
const LazyFooter = lazy(() => import('@/components/Footer'));

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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TravelWanders",
    "url": "https://travelwanders.com",
    "logo": "https://travelwanders.com/logo.png",
    "description": "Discover breathtaking destinations and plan your next adventure with curated travel guides and experiences.",
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
      
      {/* Lazy load below-the-fold content for optimal FCP */}
      <Suspense fallback={<div className="min-h-[400px] bg-gray-50 animate-pulse" />}>
        <LazyFeaturedCities />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[300px] bg-gray-50 animate-pulse" />}>
        <LazyTravelCategories />
      </Suspense>
      
      {/* Enhanced internal linking for SEO - temporarily removed due to error */}
      
      <Suspense fallback={<div className="min-h-[200px] bg-gray-50 animate-pulse" />}>
        <LazyFooter />
      </Suspense>
    </div>
  );
}
