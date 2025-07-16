import { useState } from 'react';
import { MapPinIcon, ArrowRightIcon, StarIcon, SparklesIcon } from '@/components/icons/LightweightIcons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageOptimized } from './ImageOptimized';
import { CriticalResourceLoader } from './CriticalResourceLoader';

// Featured cities - ready for fresh production content via admin panel
const featuredCities = [
  { "name": "Venice", "country": "Italy", "path": "/best-things-to-do-in-venice", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Milan", "country": "Italy", "path": "/best-things-to-do-in-milan", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,
  { "name": "Rome", "country": "Italy", "path": "/best-things-to-do-in-rome", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,
  { "name": "Stockholm", "country": "Sweden", "path": "/best-things-to-do-in-stockholm", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,,
  { "name": "Oslo", "country": "Norway", "path": "/best-things-to-do-in-oslo", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1712009509758-dff926710413?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,,,
  { "name": "Accra", "country": "Ghana", "path": "/best-things-to-do-in-accra", "continent": "Africa", "imageUrl": "https://images.unsplash.com/photo-1589104602532-9cee07f8f62c?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,,,
  { "name": "Como", "country": "Italy", "path": "/best-things-to-do-in-como", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1606745463199-d7623eee5f8a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,,,
  { "name": "Antalya", "country": "Turkey", "path": "/best-things-to-do-in-antalya", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1593238739364-18cfde30e522?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,,
];

const FeaturedCities = () => {
  // Extract hero images for critical resource preloading
  const heroImages = featuredCities.map(city => city?.imageUrl).filter(Boolean) as string[];

  return (
    <CriticalResourceLoader criticalImages={heroImages.slice(0, 4)}>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            All Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world's most beloved travel destinations with comprehensive guides and insider tips.
          </p>
        </div>

        {/* Featured Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {featuredCities.filter(city => city).map((city, index) => (
            <a key={city.path} href={city.path}>
              <Card className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {city.imageUrl ? (
                    <ImageOptimized
                      src={city.imageUrl}
                      alt={`${city.name} travel guide`}
                      width={300}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      context="card"
                      priority={index < 2}
                      placeholder="shimmer"
                      onLoad={() => console.log(`Featured city image loaded: ${city.name}`)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                        <MapPinIcon className="w-3 h-3" />
                        {city.country}
                      </p>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center">
          <a href="/destinations">
            <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 text-base">
              View all destinations
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        </div>
      </section>
    </CriticalResourceLoader>
  );
};

export default FeaturedCities;
export { FeaturedCities };