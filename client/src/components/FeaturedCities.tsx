import { useState } from 'react';
import { MapPin, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Featured cities - will be populated with new production cities
const featuredCities = [
  { "name": "Miami", "country": "USA", "path": "/best-things-to-do-in-miami", "continent": "North America", "imageUrl": "https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Austin", "country": "USA", "path": "/best-things-to-do-in-austin", "continent": "North America", "imageUrl": "https://images.unsplash.com/photo-1557335200-a65f7f032602?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,
  { "name": "Zurich", "country": "Switzerland", "path": "/best-things-to-do-in-zurich", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1689717850353-92c66a4f1441?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,
  { "name": "Milan", "country": "Italy", "path": "/best-things-to-do-in-milan", "continent": "Europe", "imageUrl": "https://plus.unsplash.com/premium_photo-1715075305614-e9258ad8c118?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },,,,
  { "name": "Porto", "country": "Portugal", "path": "/best-things-to-do-in-porto", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1577958194277-7b3bc213b03c?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

export const FeaturedCities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the world's most beloved travel destinations with comprehensive guides and insider tips.
          </p>
        </div>

        {/* Featured Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {featuredCities.map((city, index) => (
            <a key={city.path} href={city.path}>
              <Card className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {city.imageUrl ? (
                    <picture className="w-full h-full">
                      <source 
                        srcSet={city.imageUrl.replace(/fm=webp/g, 'fm=avif')} 
                        type="image/avif" 
                      />
                      <source 
                        srcSet={city.imageUrl.includes('fm=webp') ? city.imageUrl : `${city.imageUrl}&fm=webp`} 
                        type="image/webp" 
                      />
                      <img 
                        src={city.imageUrl} 
                        alt={`Best things to do in ${city.name}, ${city.country} - Featured destination`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        width="300"
                        height="225"
                      />
                    </picture>
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
                        <MapPin className="w-3 h-3" />
                        {city.country}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};