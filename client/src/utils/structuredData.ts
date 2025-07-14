/**
 * Structured Data Utilities for TravelWanders
 * Implements comprehensive rich snippets for search visibility
 */

// Organization schema for homepage
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TravelWanders",
  "url": "https://travelwanders.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://travelwanders.com/logo.png",
    "width": 200,
    "height": 60
  },
  "description": "Discover breathtaking destinations and plan your next adventure with curated travel guides and experiences.",
  "sameAs": [
    "https://facebook.com/travelwanders",
    "https://twitter.com/travelwanders",
    "https://instagram.com/travelwanders",
    "https://linkedin.com/company/travelwanders"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "support@travelwanders.com"
  }
});

// Website schema
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TravelWanders",
  "url": "https://travelwanders.com",
  "description": "Your ultimate travel companion for discovering amazing destinations worldwide",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://travelwanders.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TravelWanders"
  }
});

// City/Place schema
export const generateCitySchema = (cityData: {
  name: string;
  country: string;
  description: string;
  attractions?: Array<{
    name: string;
    description: string;
  }>;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "name": `Best Things to Do in ${cityData.name}`,
  "description": cityData.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": cityData.name,
    "addressCountry": cityData.country
  },
  "geo": cityData.coordinates ? {
    "@type": "GeoCoordinates",
    "latitude": cityData.coordinates.latitude,
    "longitude": cityData.coordinates.longitude
  } : undefined,
  "url": `https://travelwanders.com/best-things-to-do-in-${cityData.name.toLowerCase().replace(/\s+/g, '-')}`,
  "image": `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop`,
  "touristType": ["Families", "Couples", "Solo Travelers", "Adventure Seekers"],
  "amenityFeature": cityData.attractions?.map(attraction => ({
    "@type": "LocationFeatureSpecification",
    "name": attraction.name,
    "description": attraction.description
  }))
});

// Tourist Attraction schema
export const generateTouristAttractionSchema = (attraction: {
  name: string;
  description: string;
  city: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  rating?: number;
  reviewCount?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": attraction.name,
  "description": attraction.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": attraction.city,
    "addressCountry": attraction.country
  },
  "geo": attraction.coordinates ? {
    "@type": "GeoCoordinates",
    "latitude": attraction.coordinates.latitude,
    "longitude": attraction.coordinates.longitude
  } : undefined,
  "aggregateRating": attraction.rating ? {
    "@type": "AggregateRating",
    "ratingValue": attraction.rating,
    "reviewCount": attraction.reviewCount || 100,
    "bestRating": 5,
    "worstRating": 1
  } : undefined,
  "touristType": ["Families", "Couples", "Solo Travelers"],
  "isAccessibleForFree": true
});

// Blog Article schema
export const generateBlogSchema = (blogData: {
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  id: string;
  imageUrl?: string;
  readTime?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": blogData.title,
  "description": blogData.description,
  "articleBody": blogData.content,
  "author": {
    "@type": "Person",
    "name": blogData.author,
    "url": "https://travelwanders.com/author/" + blogData.author.toLowerCase().replace(/\s+/g, '-')
  },
  "publisher": {
    "@type": "Organization",
    "name": "TravelWanders",
    "logo": {
      "@type": "ImageObject",
      "url": "https://travelwanders.com/logo.png"
    }
  },
  "datePublished": blogData.publishedAt,
  "dateModified": blogData.publishedAt,
  "image": blogData.imageUrl || "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop",
  "url": `https://travelwanders.com/blog/${blogData.id}`,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://travelwanders.com/blog/${blogData.id}`
  },
  "about": {
    "@type": "Thing",
    "name": blogData.category
  },
  "keywords": [blogData.category, "travel", "travel tips", "destinations", "travel guide"],
  "wordCount": blogData.content.split(' ').length,
  "timeRequired": blogData.readTime || "PT5M"
});

// City Travel Guide schema
export const generateCityTravelGuideSchema = (cityData: {
  name: string;
  country: string;
  title: string;
  description: string;
  attractions?: Array<{
    name: string;
    description: string;
  }>;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "TravelGuide",
  "name": cityData.title,
  "description": cityData.description,
  "about": {
    "@type": "Place",
    "name": cityData.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.name,
      "addressCountry": cityData.country
    },
    "geo": cityData.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": cityData.coordinates.latitude,
      "longitude": cityData.coordinates.longitude
    } : undefined
  },
  "url": `https://travelwanders.com/best-things-to-do-in-${cityData.name.toLowerCase().replace(/\s+/g, '-')}`,
  "publisher": {
    "@type": "Organization",
    "name": "TravelWanders"
  },
  "datePublished": new Date().toISOString(),
  "dateModified": new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://travelwanders.com/best-things-to-do-in-${cityData.name.toLowerCase().replace(/\s+/g, '-')}`
  },
  "author": {
    "@type": "Organization",
    "name": "TravelWanders"
  },
  "keywords": [`best things to do in ${cityData.name}`, `things to do in ${cityData.name}`, `${cityData.name} travel guide`, `${cityData.name} attractions`, "travel", "destinations"],
  "touristType": ["Families", "Couples", "Solo Travelers", "Adventure Seekers"],
  "mentions": cityData.attractions?.map(attraction => ({
    "@type": "TouristAttraction",
    "name": attraction.name,
    "description": attraction.description
  }))
});

// Business type detection utility
export const detectBusinessType = (businessName: string): string => {
  const name = businessName.toLowerCase();
  
  if (name.includes('museum') || name.includes('gallery') || name.includes('exhibition')) {
    return 'Museum';
  }
  if (name.includes('restaurant') || name.includes('dining') || name.includes('cafe') || name.includes('bistro')) {
    return 'Restaurant';
  }
  if (name.includes('hotel') || name.includes('accommodation') || name.includes('lodge')) {
    return 'LodgingBusiness';
  }
  if (name.includes('park') || name.includes('garden') || name.includes('square')) {
    return 'Park';
  }
  if (name.includes('church') || name.includes('cathedral') || name.includes('temple') || name.includes('mosque')) {
    return 'Church';
  }
  if (name.includes('market') || name.includes('shopping') || name.includes('store')) {
    return 'ShoppingCenter';
  }
  if (name.includes('theater') || name.includes('theatre') || name.includes('cinema') || name.includes('performance')) {
    return 'TheaterGroup';
  }
  if (name.includes('bridge') || name.includes('tower') || name.includes('building') || name.includes('palace')) {
    return 'LandmarksOrHistoricalBuildings';
  }
  
  return 'TouristAttraction';
};

// Local Business schema
export const generateLocalBusinessSchema = (business: {
  name: string;
  description: string;
  city: string;
  country: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  openingHours?: string;
  website?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", detectBusinessType(business.name)],
  "name": business.name,
  "description": business.description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": business.city,
    "addressCountry": business.country
  },
  "geo": business.coordinates ? {
    "@type": "GeoCoordinates",
    "latitude": business.coordinates.latitude,
    "longitude": business.coordinates.longitude
  } : undefined,
  "aggregateRating": business.rating ? {
    "@type": "AggregateRating",
    "ratingValue": business.rating,
    "reviewCount": business.reviewCount || 100,
    "bestRating": 5,
    "worstRating": 1
  } : undefined,
  "priceRange": business.priceRange || "$$",
  "openingHours": business.openingHours || "Mo-Su 09:00-17:00",
  "url": business.website || `https://travelwanders.com/best-things-to-do-in-${business.city.toLowerCase().replace(/\s+/g, '-')}`,
  "image": `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=600&fit=crop`,
  "touristType": ["Families", "Couples", "Solo Travelers"]
});

// FAQ schema
export const generateFAQSchema = (faqs: Array<{
  question: string;
  answer: string;
}>) => ({
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
});

// Breadcrumb schema
export const generateBreadcrumbSchema = (breadcrumbs: Array<{
  name: string;
  url: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});

// Travel Agency schema
export const generateTravelAgencySchema = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "TravelWanders",
  "image": "https://travelwanders.com/logo.png",
  "url": "https://travelwanders.com",
  "telephone": "+1-555-0123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Travel Street",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://facebook.com/travelwanders",
    "https://twitter.com/travelwanders",
    "https://instagram.com/travelwanders"
  ]
});

// Review schema
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "TravelAgency",
    "name": "TravelWanders"
  },
  "author": {
    "@type": "Person",
    "name": reviews[0]?.author || "Travel Enthusiast"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviews[0]?.rating || 5,
    "bestRating": 5,
    "worstRating": 1
  },
  "reviewBody": reviews[0]?.reviewBody || "Excellent travel guides and recommendations!",
  "datePublished": reviews[0]?.datePublished || new Date().toISOString()
});

// Aggregate Rating schema
export const generateAggregateRatingSchema = (ratingData: {
  averageRating: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "ratingValue": ratingData.averageRating,
  "reviewCount": ratingData.reviewCount,
  "bestRating": ratingData.bestRating || 5,
  "worstRating": ratingData.worstRating || 1
});

// How-to schema for travel guides
export const generateHowToSchema = (guideData: {
  name: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
  }>;
  totalTime?: string;
  estimatedCost?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": guideData.name,
  "description": guideData.description,
  "totalTime": guideData.totalTime || "PT3H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": guideData.estimatedCost || "100"
  },
  "step": guideData.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "url": step.url
  }))
});

// Export all schemas
export const structuredDataSchemas = {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateCitySchema,
  generateTouristAttractionSchema,
  generateBlogSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateReviewSchema,
  generateAggregateRatingSchema,
  generateHowToSchema
};