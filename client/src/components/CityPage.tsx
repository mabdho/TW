
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Clock, DollarSign, Globe, Star, Users, Info, Camera, Image, X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface Attraction {
  name: string;
  description: string;
  practicalInfo?: {
    howToGetThere?: string;
    openingHours?: string;
    cost?: string;
    website?: string;
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
}

export const CityPage: React.FC<CityPageProps> = ({
  title,
  description,
  highlights,
  attractions,
  imageUrl,
  galleryImages = [],
  logistics,
  faqs
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const top5Attractions = attractions.slice(0, 5);
  
  // Calculate number of tabs dynamically
  const tabCount = 2 + (logistics ? 1 : 0) + (faqs ? 1 : 0);
  const mobileGridCols = tabCount === 2 ? 'grid-cols-2' : 
                        tabCount === 3 ? 'grid-cols-3' : 
                        tabCount === 4 ? 'grid-cols-4' : 'grid-cols-5';

  // Generate unique gradient colors based on city name
  const getGradientClass = (cityName: string) => {
    const hash = cityName.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const gradients = [
      'from-blue-400 via-purple-500 to-pink-500',
      'from-green-400 via-blue-500 to-purple-600',
      'from-yellow-400 via-orange-500 to-red-500',
      'from-pink-400 via-red-500 to-orange-500',
      'from-indigo-400 via-purple-500 to-pink-500',
      'from-cyan-400 via-blue-500 to-indigo-600',
      'from-emerald-400 via-teal-500 to-cyan-600',
      'from-amber-400 via-orange-500 to-red-600',
      'from-rose-400 via-pink-500 to-purple-600',
      'from-violet-400 via-indigo-500 to-blue-600'
    ];
    return gradients[hash % gradients.length];
  };

  // Navigation functions for gallery modal
  const nextImage = () => {
    if (selectedImageIndex !== null && galleryImages.length > 0) {
      setSelectedImageIndex((prev) => prev === null ? 0 : (prev + 1) % 6);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null && galleryImages.length > 0) {
      setSelectedImageIndex((prev) => prev === null ? 0 : prev === 0 ? 5 : prev - 1);
    }
  };

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Image Section with Overlay */}
      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        {/* City Image */}
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          /* Fallback gradient placeholder */
          <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(title)} opacity-90`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`cityscape-${title.replace(/\s+/g, '-').toLowerCase()}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <rect width="10" height="30" x="5" y="20" fill="white" opacity="0.1"/>
                  <rect width="8" height="35" x="18" y="15" fill="white" opacity="0.15"/>
                  <rect width="12" height="25" x="30" y="25" fill="white" opacity="0.1"/>
                  <rect width="6" height="40" x="45" y="10" fill="white" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#cityscape-${title.replace(/\s+/g, '-').toLowerCase()})`}/>
            </svg>
          </div>
        )}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* City Title Overlay - Bottom Left */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
          <div className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                    <MapPin className="w-3 h-3 mr-1" />
                    City Guide
                  </Badge>
                  <Badge variant="outline" className="text-white border-white/30 bg-white/10 hover:bg-white/20">
                    <Users className="w-3 h-3 mr-1" />
                    {attractions.length} Attractions
                  </Badge>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {title}
                </h1>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-white drop-shadow-sm">4.8</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 drop-shadow-sm text-right">
                  Based on traveler reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* TripAdvisor-style Info Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Photo Gallery Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          {/* Gallery Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Photo Gallery</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Discover the beauty of {title} through our curated collection of stunning photographs
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {Array.from({ length: 6 }, (_, index) => {
              const galleryImage = galleryImages[index];
              const isMainImage = index === 0;
              const gridClass = isMainImage ? "sm:col-span-2 sm:row-span-2" : "";
              
              return (
                <div 
                  key={index} 
                  className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:z-10 ${gridClass}`}
                  onClick={() => openGallery(index)}
                >
                  <div className={`relative ${isMainImage ? 'aspect-[4/3]' : 'aspect-square'} bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}>
                    {galleryImage?.url ? (
                      <>
                        <img 
                          src={galleryImage.url} 
                          alt={galleryImage.alt || `${title} photo ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Expand icon overlay */}
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                          <Expand className="w-4 h-4 text-gray-700" />
                        </div>
                        
                        {/* Photo counter for main image */}
                        {isMainImage && (
                          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            +{galleryImages.filter(img => img?.url).length || 6} photos
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        {/* Enhanced placeholder design */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass(title + index)} opacity-20`}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/90 transition-colors">
                              <Image className={`${isMainImage ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-6 h-6 sm:w-8 sm:h-8'} text-gray-600`} />
                            </div>
                            <p className={`${isMainImage ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} text-gray-700 font-medium`}>
                              {isMainImage ? 'Main Gallery Photo' : `Photo ${index + 1}`}
                            </p>
                            {isMainImage && (
                              <p className="text-xs text-gray-500 mt-1">Click to explore gallery</p>
                            )}
                          </div>
                        </div>
                        
                        {/* Decorative elements for placeholders */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                      </>
                    )}
                    
                    {/* Caption overlay */}
                    {galleryImage?.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-medium">{galleryImage.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Gallery Info Card */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Gallery</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {galleryImages?.length > 0 && galleryImages.some(img => img.url) 
                      ? `This curated photo collection showcases the most iconic sights and hidden gems of ${title}. Each image captures the unique character and beauty that makes this destination special.`
                      : `This gallery is ready to showcase the beauty of ${title}. Real photos can be added by updating the city's configuration file with authentic image URLs from the destination.`
                    }
                  </p>
                  {galleryImages?.some(img => img.url) && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                      <Camera className="w-4 h-4" />
                      <span>Click any photo to view in full-screen gallery mode</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            
            {/* Main image */}
            <div className="relative w-full h-full flex items-center justify-center">
              {galleryImages[selectedImageIndex]?.url ? (
                <img
                  src={galleryImages[selectedImageIndex].url}
                  alt={galleryImages[selectedImageIndex].alt || `${title} photo ${selectedImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              ) : (
                <div className="w-96 h-64 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Photo {selectedImageIndex + 1}</p>
                    <p className="text-sm opacity-75">Placeholder image</p>
                  </div>
                </div>
              )}
              
              {/* Image caption */}
              {galleryImages[selectedImageIndex]?.caption && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-white text-center">{galleryImages[selectedImageIndex].caption}</p>
                </div>
              )}
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / 6
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Tabs defaultValue="top5" className="w-full">
          <TabsList className={`grid w-full ${mobileGridCols} mb-6 sm:mb-8 bg-white border border-gray-200 shadow-sm rounded-lg`}>
            <TabsTrigger value="top5" className="text-xs sm:text-sm font-medium px-1 sm:px-4 whitespace-nowrap data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-green-200">
              <span className="hidden sm:inline">Top Attractions</span>
              <span className="sm:hidden">Top</span>
            </TabsTrigger>
            <TabsTrigger value="all" className="text-xs sm:text-sm font-medium px-1 sm:px-4 whitespace-nowrap data-[state=active]:bg-green-50 data-[state=active]:text-green-700 data-[state=active]:border-green-200">
              <span className="hidden sm:inline">All Attractions</span>
              <span className="sm:hidden">All</span>
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
                    <Info className="w-5 h-5 text-green-600" />
                    <h2 className="text-xl font-semibold text-gray-900">About {title}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{description}</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Attractions</div>
                        <div className="text-sm text-gray-600">{attractions.length} places to visit</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-orange-600" />
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

          {/* Top Attractions Tab */}
          <TabsContent value="top5" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Top Attractions</h2>
                  <p className="text-sm text-gray-600">Must-visit places recommended by travelers</p>
                </div>
              </div>
              
              <Accordion type="single" collapsible className="w-full space-y-3">
                {top5Attractions.map((attraction, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{attraction.name}</h3>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                          <span className="text-sm font-medium text-gray-700">4.{9 - index}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {attraction.description}
                        </p>
                        
                        {attraction.practicalInfo && (
                          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              Practical Information
                            </h4>
                            <div className="grid gap-3 text-sm">
                              {attraction.practicalInfo.openingHours && (
                                <div className="flex items-start gap-2">
                                  <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <strong className="text-gray-900">Hours:</strong>
                                    <span className="text-gray-700 ml-2">{attraction.practicalInfo.openingHours}</span>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.cost && (
                                <div className="flex items-start gap-2">
                                  <DollarSign className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <strong className="text-gray-900">Cost:</strong>
                                    <span className="text-gray-700 ml-2">{attraction.practicalInfo.cost}</span>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.howToGetThere && (
                                <div className="flex items-start gap-2">
                                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <strong className="text-gray-900">How to Get There:</strong>
                                    <span className="text-gray-700 ml-2">{attraction.practicalInfo.howToGetThere}</span>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.website && (
                                <div className="flex items-start gap-2">
                                  <Globe className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
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

          {/* All Attractions Tab */}
          <TabsContent value="all" className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">All Attractions</h2>
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
                    <div className="flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">{attraction.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                            <span className="text-sm font-medium text-gray-700">4.{Math.floor(Math.random() * 5) + 3}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{attraction.description}</p>
                        
                        {attraction.practicalInfo && (
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                              {attraction.practicalInfo.openingHours && (
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-gray-900">Hours</div>
                                    <div className="text-gray-600">{attraction.practicalInfo.openingHours}</div>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.cost && (
                                <div className="flex items-center gap-2">
                                  <DollarSign className="h-4 w-4 text-gray-500" />
                                  <div>
                                    <div className="font-medium text-gray-900">Price</div>
                                    <div className="text-gray-600">{attraction.practicalInfo.cost}</div>
                                  </div>
                                </div>
                              )}
                              {attraction.practicalInfo.website && (
                                <div className="flex items-center gap-2">
                                  <Globe className="h-4 w-4 text-gray-500" />
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
                                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
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


          {/* Plan Your Trip Tab */}
          {logistics && (
            <TabsContent value="plan" className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Plan Your Trip</h2>
                    <p className="text-sm text-gray-600">Essential travel information and tips</p>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {logistics.gettingAround && (
                    <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Getting Around</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm">{logistics.gettingAround}</p>
                    </div>
                  )}
                  
                  {logistics.whereToStay && (
                    <div className="bg-green-50 rounded-lg border border-green-200 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Where to Stay</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm">{logistics.whereToStay}</p>
                    </div>
                  )}
                  
                  {logistics.bestTimeToVisit && (
                    <div className="bg-orange-50 rounded-lg border border-orange-200 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <Clock className="w-4 h-4 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Best Time to Visit</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm">{logistics.bestTimeToVisit}</p>
                    </div>
                  )}
                  
                  {logistics.suggestedItinerary && (
                    <div className="bg-purple-50 rounded-lg border border-purple-200 p-4 md:col-span-2">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Suggested Itinerary</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{logistics.suggestedItinerary}</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          )}

          {/* FAQs Tab */}
          {faqs && (
            <TabsContent value="faqs" className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Info className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    <p className="text-sm text-gray-600">Common questions from travelers</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <h3 className="text-base font-semibold text-gray-900 mb-2 flex items-start gap-2">
                        <span className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-indigo-600 text-xs font-bold">Q</span>
                        </span>
                        {faq.question}
                      </h3>
                      <div className="ml-7">
                        <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};
