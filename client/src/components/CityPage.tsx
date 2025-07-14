
import React, { useState, Suspense } from 'react';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy Radix components to reduce initial bundle size
const Tabs = React.lazy(() => import('@/components/ui/tabs').then(m => ({ default: m.Tabs })));
const TabsContent = React.lazy(() => import('@/components/ui/tabs').then(m => ({ default: m.TabsContent })));
const TabsList = React.lazy(() => import('@/components/ui/tabs').then(m => ({ default: m.TabsList })));
const TabsTrigger = React.lazy(() => import('@/components/ui/tabs').then(m => ({ default: m.TabsTrigger })));

const Accordion = React.lazy(() => import('@/components/ui/accordion').then(m => ({ default: m.Accordion })));
const AccordionContent = React.lazy(() => import('@/components/ui/accordion').then(m => ({ default: m.AccordionContent })));
const AccordionItem = React.lazy(() => import('@/components/ui/accordion').then(m => ({ default: m.AccordionItem })));
const AccordionTrigger = React.lazy(() => import('@/components/ui/accordion').then(m => ({ default: m.AccordionTrigger })));

const Dialog = React.lazy(() => import('@/components/ui/dialog').then(m => ({ default: m.Dialog })));
const DialogContent = React.lazy(() => import('@/components/ui/dialog').then(m => ({ default: m.DialogContent })));
const DialogTrigger = React.lazy(() => import('@/components/ui/dialog').then(m => ({ default: m.DialogTrigger })));

// Loading fallbacks for better UX
const TabsSkeleton = () => (
  <div className="w-full">
    <div className="flex border-b mb-4">
      <Skeleton className="h-10 w-24 mr-4" />
      <Skeleton className="h-10 w-32 mr-4" />
      <Skeleton className="h-10 w-28" />
    </div>
    <Skeleton className="h-64 w-full" />
  </div>
);

const AccordionSkeleton = () => (
  <div className="w-full space-y-2">
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-full" />
  </div>
);
// Optimized lucide-react imports - essential icons only
import { MapPinIcon, ClockIcon, DollarSignIcon, GlobeIcon, StarIcon, CameraIcon, UsersIcon, InfoIcon } from '@/components/icons/LightweightIcons';

// Lightweight SVG alternatives for UI controls
const UIIcons = {
  Info: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  ),
  Users: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="m22 21-3-3m0 0a2 2 0 1 0-4-4 2 2 0 0 0 4 4z"/>
    </svg>
  ),
  ChevronLeft: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15,18 9,12 15,6"/>
    </svg>
  ),
  ChevronRight: ({ className = "" }: { className?: string }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9,18 15,12 9,6"/>
    </svg>
  )
};
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { CityPageTemplate } from './templates/CityPageTemplate';
import { InternalLinks } from './InternalLinks';
import { CityData, generateRelatedCityLinks, generateContextualLinks } from '../utils/seo';
import { getAllCitiesData, getAllBlogsData } from '../utils/dataService';
import { optimizeGalleryImages, generateImageAltText, optimizeImageUrl } from '../utils/imageOptimization';
import { getRelatedCityLinks, generateInternalLinkingContent } from '../utils/internalLinking';
import { DiscoveryCards } from './DiscoveryCards';
import { InteractiveAttractionExplorer } from './InteractiveAttractionExplorer';

interface Attraction {
  name: string;
  description: string;
  practicalInfo?: {
    howToGetThere?: string;
    openingHours?: string;
    cost?: string;
    website?: string;
  };
  discoveryTags?: {
    timeRequired?: string;
    experienceLevel?: string;
    interests?: string[];
    costLevel?: string;
    seasonalBest?: string;
    photoOpportunity?: string;
    insiderTip?: string;
    hiddenGem?: boolean;
    familyFriendly?: boolean;
    accessibilityNotes?: string;
  };
}

interface GalleryImage {
  url?: string;
  alt?: string;
  caption?: string;
}

interface CityPageProps {
  title: string;
  description: string;
  highlights: string[];
  attractions: Attraction[];
  imageUrl?: string;
  galleryImages?: GalleryImage[];
  logistics?: {
    gettingAround?: string;
    whereToStay?: string;
    bestTimeToVisit?: string;
    suggestedItinerary?: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  discoveryData?: {
    cityPersonality?: string;
    budgetBreakdown?: {
      freeActivities?: string;
      budgetFriendly?: string;
      splurgeWorthy?: string;
    };
    localSecrets?: string[];
    diningHighlights?: {
      mustTryDishes?: string;
      bestCafes?: string;
      topRestaurants?: string;
      foodMarkets?: string;
      diningTips?: string;
    };
    seasonalHighlights?: {
      spring?: string;
      summer?: string;
      fall?: string;
      winter?: string;
    };
    quickFacts?: {
      totalAttractions?: string;
      freeActivities?: string;
      averageTimePerAttraction?: string;
      walkingFriendly?: boolean;
      publicTransportQuality?: string;
    };
  };
  // SEO enhancement props
  cityName?: string;
  country?: string;
}

export const CityPage: React.FC<CityPageProps> = ({
  title,
  description,
  highlights,
  attractions,
  imageUrl,
  galleryImages = [],
  logistics,
  faqs,
  discoveryData,
  cityName,
  country
}) => {
  // Extract city name and country from title if not provided - MOVED TO TOP
  const extractedCityName = cityName || title.match(/Best Things to Do in ([^,]+)/)?.[1] || title.split(' ')[0];
  const extractedCountry = country || title.match(/([^,]+)$/)?.[1]?.trim() || 'Unknown';

  // 🔧 HYDRATION FIX: Use consistent data structure for SEO
  const cityData = cityName && country ? {
    name: cityName,
    country: country,
    content: description,
    attractions: attractions?.map(attr => ({
      name: attr.name,
      description: attr.description
    })) || []
  } : null;
  
  // 🔧 SEO IMPROVEMENT: Optimize gallery images with SEO-friendly alt text
  const optimizedGalleryImages = cityData ? optimizeGalleryImages(galleryImages, cityData.name) : [];
  
  // 🔧 SEO IMPROVEMENT: Generate internal linking content
  const internalLinkingContent = generateInternalLinkingContent(extractedCityName);
  const top5Attractions = attractions.slice(0, 5);
  
  // Calculate number of tabs dynamically
  const tabCount = 3 + (logistics ? 1 : 0) + (faqs ? 1 : 0);
  const mobileGridCols = tabCount === 3 ? 'grid-cols-3' : 
                        tabCount === 4 ? 'grid-cols-4' : 
                        tabCount === 5 ? 'grid-cols-5' : 'grid-cols-6';

  // Update cityData with extracted values if needed
  const finalCityData = cityData || {
    name: extractedCityName,
    country: extractedCountry,
    content: description,
    attractions: attractions.map(att => ({
      name: att.name,
      description: att.description
    }))
  };

  return (
    <CityPageTemplate cityData={finalCityData} imageUrl={imageUrl}>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
      
      {/* Description Section - Mobile First */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6">
            <div className="flex-1">
              <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed lg:text-lg text-gray-600 max-w-4xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Discovery Section - Mobile First */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
          <DiscoveryCards 
            attractions={attractions}
            cityName={extractedCityName}
            highlights={highlights}
            discoveryData={discoveryData}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
        <Suspense fallback={<TabsSkeleton />}>
          <Tabs defaultValue="top5" className="w-full">
          <TabsList className={`grid w-full ${mobileGridCols} mb-4 sm:mb-6 lg:mb-8 bg-white border border-gray-200 shadow-sm rounded-lg overflow-x-auto`}>
            <TabsTrigger value="top5" className="text-xs sm:text-sm font-medium px-1 sm:px-4 whitespace-nowrap data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-green-200">
              <span className="hidden sm:inline">Top Attractions</span>
              <span className="sm:hidden">Top</span>
            </TabsTrigger>
            <TabsTrigger value="all" className="text-xs sm:text-sm font-medium px-1 sm:px-4 whitespace-nowrap data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-green-200">
              <span className="hidden sm:inline">All Attractions</span>
              <span className="sm:hidden">All</span>
            </TabsTrigger>
            <TabsTrigger value="explore" className="text-xs sm:text-sm font-medium px-1 sm:px-4 whitespace-nowrap data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:border-blue-200">
              <span className="hidden sm:inline">Interactive Explorer</span>
              <span className="sm:hidden">Explore</span>
            </TabsTrigger>

            {logistics && <TabsTrigger value="plan" className="text-xs sm:text-sm font-medium px-1 sm:px-4 whitespace-nowrap data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-green-200">
              <span className="hidden sm:inline">Plan Your Trip</span>
              <span className="sm:hidden">Plan</span>
            </TabsTrigger>}
            {faqs && <TabsTrigger value="faqs" className="text-xs sm:text-sm font-medium px-1 sm:px-4 whitespace-nowrap data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-green-200">
              <span className="hidden sm:inline">FAQs</span>
              <span className="sm:hidden">FAQ</span>
            </TabsTrigger>}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <UIIcons.Info className="w-5 h-5 text-green-600" />
                    <h2 className="text-xl font-semibold text-gray-900">About {title}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Attractions</div>
                        <div className="text-sm text-gray-600">{attractions.length} places to visit</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <StarIcon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Top Rated</div>
                        <div className="text-sm text-gray-600">4.8/5 traveler rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h3>
                  <div className="space-y-3">
                    {highlights.slice(0, 3).map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-sm font-medium">{index + 1}</span>
                        </div>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Planning Your Visit</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <div>• Best time to visit: Year-round</div>
                    <div>• Recommended duration: 2-3 days</div>
                    <div>• Most popular attractions: Top 5 section</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Top Attractions Tab - Mobile First */}
          <TabsContent value="top5" className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Top Attractions</h2>
                  <p className="text-sm text-gray-600">Must-visit places recommended by travelers</p>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-2 sm:space-y-3">
                {top5Attractions.map((attraction, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-3 py-2.5 sm:px-4 sm:py-3 hover:no-underline hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-2 sm:gap-4 w-full">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 truncate">{attraction.name}</h3>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-400 text-orange-400" />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">4.{9 - index}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 pb-3 sm:px-4 sm:pb-4">
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {attraction.description}
                        </p>
                        
                        {attraction.practicalInfo && (
                          <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-xs sm:text-sm">
                              <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                              Practical Information
                            </h4>
                            <div className="grid gap-2 sm:gap-3 text-xs sm:text-sm">
                              {attraction.practicalInfo.openingHours && (
                                <div className="flex items-start gap-2">
                                  <ClockIcon className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <strong className="text-gray-900">Hours:</strong>
                                    <span className="text-gray-700 ml-2">{attraction.practicalInfo.openingHours}</span>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.cost && (
                                <div className="flex items-start gap-2">
                                  <DollarSignIcon className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <strong className="text-gray-900">Cost:</strong>
                                    <span className="text-gray-700 ml-2">{attraction.practicalInfo.cost}</span>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.howToGetThere && (
                                <div className="flex items-start gap-2">
                                  <MapPinIcon className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <strong className="text-gray-900">How to Get There:</strong>
                                    <span className="text-gray-700 ml-2">{attraction.practicalInfo.howToGetThere}</span>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.website && (
                                <div className="flex items-start gap-2">
                                  <GlobeIcon className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <strong className="text-gray-900">Website:</strong>
                                    <a href={`https://${attraction.practicalInfo.website}`} 
                                       className="text-green-600 hover:text-green-700 font-medium ml-2" 
                                       target="_blank" 
                                       rel="noopener">
                                      {attraction.practicalInfo.website}
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>

          {/* All Attractions Tab - Mobile First */}
          <TabsContent value="all" className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">All Attractions</h2>
                    <p className="text-sm text-gray-600">Complete guide to {attractions.length} places</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-gray-600">
                  {attractions.length} places
                </Badge>
              </div>
              
              <div className="grid gap-4">
                {attractions.map((attraction, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">{attraction.name}</h3>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 fill-orange-400 text-orange-400" />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">4.{Math.floor(Math.random() * 5) + 3}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{attraction.description}</p>
                        
                        {attraction.practicalInfo && (
                          <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
                              {attraction.practicalInfo.openingHours && (
                                <div className="flex items-center gap-2">
                                  <ClockIcon className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-gray-900">Hours</div>
                                    <div className="text-gray-600">{attraction.practicalInfo.openingHours}</div>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.cost && (
                                <div className="flex items-center gap-2">
                                  <DollarSignIcon className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-gray-900">Price</div>
                                    <div className="text-gray-600">{attraction.practicalInfo.cost}</div>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.website && (
                                <div className="flex items-center gap-2">
                                  <GlobeIcon className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-gray-900">Website</div>
                                    <a href={`https://${attraction.practicalInfo.website}`} 
                                       className="text-green-600 hover:text-green-700 text-xs" 
                                       target="_blank" 
                                       rel="noopener">
                                      Visit Site
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                            {attraction.practicalInfo.howToGetThere && (
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <div className="flex items-start gap-2">
                                  <MapPinIcon className="h-4 w-4 text-gray-500 mt-0.5" />
                                  <div>
                                    <div className="font-medium text-gray-900 text-sm">How to Get There</div>
                                    <div className="text-gray-600 text-xs">{attraction.practicalInfo.howToGetThere}</div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Interactive Explorer Tab - Mobile First */}
          <TabsContent value="explore" className="space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
              <InteractiveAttractionExplorer 
                attractions={attractions}
                cityName={extractedCityName}
                highlights={highlights}
              />
            </div>
          </TabsContent>

          {/* Plan Your Trip Tab - Mobile First */}
          {logistics && (
            <TabsContent value="plan" className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Plan Your Trip</h2>
                    <p className="text-xs sm:text-sm text-gray-600">Essential travel information and tips</p>
                  </div>
                </div>
                
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  {logistics.gettingAround && (
                    <div className="bg-blue-50 rounded-lg border border-blue-200 p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Getting Around</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{logistics.gettingAround}</p>
                    </div>
                  )}
                  
                  {logistics.whereToStay && (
                    <div className="bg-green-50 rounded-lg border border-green-200 p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Where to Stay</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{logistics.whereToStay}</p>
                    </div>
                  )}
                  
                  {logistics.bestTimeToVisit && (
                    <div className="bg-orange-50 rounded-lg border border-orange-200 p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Best Time to Visit</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{logistics.bestTimeToVisit}</p>
                    </div>
                  )}
                  
                  {logistics.suggestedItinerary && (
                    <div className="bg-purple-50 rounded-lg border border-purple-200 p-3 sm:p-4 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Suggested Itinerary</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm whitespace-pre-line">{logistics.suggestedItinerary}</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          )}

          {/* FAQs Tab - Mobile First */}
          {faqs && (
            <TabsContent value="faqs" className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <InfoIcon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <p className="text-xs sm:text-sm text-gray-600">Common questions from travelers</p>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-sm transition-shadow">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 flex items-start gap-2">
                        <span className="w-4 h-4 sm:w-5 sm:h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-indigo-600 text-xs font-bold">Q</span>
                        </span>
                        {faq.question}
                      </h3>
                      <div className="ml-6 sm:ml-7">
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          )}
          </Tabs>
        </Suspense>
      </div>
      
      {/* Internal Links Section - SEO-optimized cross-linking */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More European Destinations</h2>
            <p className="text-gray-600 mb-6">{internalLinkingContent.linkingText}</p>
            
            <div className="grid gap-4 md:grid-cols-3">
              {internalLinkingContent.relatedCities.map((city, index) => (
                <a 
                  key={index}
                  href={city.url}
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow group"
                >
                  <h3 className="font-semibold text-green-600 group-hover:text-green-700 mb-2">
                    Best Things to Do in {city.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Discover amazing attractions and experiences in {city.name}, {city.country}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </CityPageTemplate>
  );
};
