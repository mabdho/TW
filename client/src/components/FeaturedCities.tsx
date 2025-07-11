import { useState } from 'react';
import { MapPin, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Get the last 8 cities from the cities array (most recently added)
const featuredCities = [
  { "name": "Trivandrum", "country": "India", "path": "/best-things-to-do-in-trivandrum", "continent": "Asia", "imageUrl": "" },
  { "name": "Chicago", "country": "USA", "path": "/best-things-to-do-in-chicago", "continent": "North America", "imageUrl": "https://images.unsplash.com/photo-1623607769583-f95269221eaf?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Boston", "country": "USA", "path": "/best-things-to-do-in-boston", "continent": "North America", "imageUrl": "https://images.unsplash.com/photo-1720655259605-5b0237f6c512?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Dhaandhoo", "country": "Maldives", "path": "/best-things-to-do-in-dhaandhoo", "continent": "Asia", "imageUrl": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Berlin", "country": "Germany", "path": "/best-things-to-do-in-berlin", "continent": "Europe", "imageUrl": "" },
  { "name": "Dubai", "country": "UAE", "path": "/best-things-to-do-in-dubai", "continent": "Asia", "imageUrl": "" },
  { "name": "New York", "country": "USA", "path": "/best-things-to-do-in-new-york", "continent": "North America", "imageUrl": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Tokyo", "country": "Japan", "path": "/best-things-to-do-in-tokyo", "continent": "Asia", "imageUrl": "" }
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
                    <img 
                      src={city.imageUrl} 
                      alt={`${city.name}, ${city.country}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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