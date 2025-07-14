/**
 * Rich Snippets and Structured Data Component for TravelWanders
 * Implements comprehensive schema.org markup for better search visibility
 */

import { useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewData {
  rating: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

interface AttractionData {
  name: string;
  description: string;
  address?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  openingHours?: string;
  website?: string;
  images?: string[];
}

interface CitySchemaProps {
  cityName: string;
  country: string;
  description: string;
  attractions: AttractionData[];
  faqs?: FAQItem[];
  reviews?: ReviewData;
  breadcrumbs?: Array<{ name: string; url: string }>;
  images?: string[];
}

interface BlogSchemaProps {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
  content: string;
  category: string;
  tags?: string[];
  readingTime?: string;
  images?: string[];
  faqs?: FAQItem[];
}

// Generate comprehensive city structured data
function generateCityStructuredData({
  cityName,
  country,
  description,
  attractions,
  faqs,
  reviews,
  breadcrumbs,
  images
}: CitySchemaProps) {
  const schemas = [];

  // Main place schema
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `Best Things to Do in ${cityName}`,
    "description": description,
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": country
    },
    "image": images || [],
    "url": `https://travelwanders.com/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}`,
    "sameAs": [
      `https://en.wikipedia.org/wiki/${cityName.replace(/\s+/g, '_')}`,
      `https://www.google.com/search?q=${encodeURIComponent(cityName + ' ' + country)}`
    ]
  };

  schemas.push(placeSchema);

  // Tourist attractions schema
  if (attractions.length > 0) {
    const attractionsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Top Attractions in ${cityName}`,
      "description": `Comprehensive list of best attractions and activities in ${cityName}, ${country}`,
      "numberOfItems": attractions.length,
      "itemListElement": attractions.map((attraction, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": attraction.name,
          "description": attraction.description,
          "address": attraction.address ? {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressCountry": country,
            "streetAddress": attraction.address
          } : undefined,
          "geo": attraction.coordinates ? {
            "@type": "GeoCoordinates",
            "latitude": attraction.coordinates.latitude,
            "longitude": attraction.coordinates.longitude
          } : undefined,
          "priceRange": attraction.priceRange,
          "openingHours": attraction.openingHours,
          "url": attraction.website,
          "image": attraction.images || [],
          "touristType": ["Families", "Couples", "Solo Travelers", "Groups"]
        }
      }))
    };

    schemas.push(attractionsSchema);
  }

  // FAQ schema
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    schemas.push(faqSchema);
  }

  // Breadcrumb schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumb.name,
        "item": breadcrumb.url
      }))
    };

    schemas.push(breadcrumbSchema);
  }

  // Aggregate rating schema
  if (reviews) {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": `${cityName} Travel Guide`,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": reviews.rating,
        "reviewCount": reviews.reviewCount,
        "bestRating": reviews.bestRating || 5,
        "worstRating": reviews.worstRating || 1
      }
    };

    schemas.push(reviewSchema);
  }

  // Local business schema for travel services
  const travelGuideSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "TravelWanders",
    "description": `Your comprehensive guide to ${cityName}`,
    "url": "https://travelwanders.com",
    "serviceArea": {
      "@type": "Place",
      "name": cityName,
      "addressCountry": country
    },
    "areaServed": cityName,
    "knowsAbout": attractions.map(a => a.name),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${cityName} Travel Experiences`,
      "itemListElement": attractions.map(attraction => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Trip",
          "name": attraction.name,
          "description": attraction.description,
          "touristType": ["Cultural", "Adventure", "Leisure"]
        }
      }))
    }
  };

  schemas.push(travelGuideSchema);

  return schemas;
}

// Generate blog post structured data
function generateBlogStructuredData({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  content,
  category,
  tags,
  readingTime,
  images,
  faqs
}: BlogSchemaProps) {
  const schemas = [];

  // Main blog post schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": images || [],
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://travelwanders.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://travelwanders.com/logo.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate,
    "articleSection": category,
    "keywords": tags?.join(', '),
    "wordCount": content.split(' ').length,
    "timeRequired": readingTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    },
    "genre": ["Travel", "Tourism", "Guide"],
    "audience": {
      "@type": "Audience",
      "audienceType": "Travelers"
    }
  };

  schemas.push(blogSchema);

  // FAQ schema for blog
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    schemas.push(faqSchema);
  }

  // How-to schema for travel guides
  if (category === 'Travel Guide' || category === 'How To') {
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": title,
      "description": description,
      "image": images || [],
      "totalTime": readingTime,
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Plan Your Trip",
          "text": "Research destinations and create your itinerary"
        },
        {
          "@type": "HowToStep",
          "name": "Book Accommodations",
          "text": "Find and reserve the perfect place to stay"
        },
        {
          "@type": "HowToStep",
          "name": "Explore Attractions",
          "text": "Visit the top-rated attractions and hidden gems"
        }
      ]
    };

    schemas.push(howToSchema);
  }

  return schemas;
}

// City Rich Snippets Component
export function CityRichSnippets(props: CitySchemaProps) {
  useEffect(() => {
    const schemas = generateCityStructuredData(props);
    
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.textContent?.includes(props.cityName)) {
        script.remove();
      }
    });

    // Add new structured data
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.id = `city-schema-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`city-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [props]);

  return null;
}

// Blog Rich Snippets Component
export function BlogRichSnippets(props: BlogSchemaProps) {
  useEffect(() => {
    const schemas = generateBlogStructuredData(props);
    
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.textContent?.includes(props.title)) {
        script.remove();
      }
    });

    // Add new structured data
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.id = `blog-schema-${index}`;
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`blog-schema-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [props]);

  return null;
}

// Utility function to generate review stars
export function generateReviewStars(rating: number, maxRating: number = 5) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": rating,
    "bestRating": maxRating,
    "worstRating": 1,
    "reviewCount": Math.floor(rating * 100) // Estimated based on rating
  };
}