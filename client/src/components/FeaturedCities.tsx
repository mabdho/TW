import { useState } from 'react';
import { MapPin, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Get the last 8 cities from the cities array (most recently added)
const featuredCities = [
  { "name": "New York", "country": "USA", "path": "/new-york", "continent": "North America" },
  { "name": "Dubai", "country": "UAE", "path": "/dubai", "continent": "Asia" },
  { "name": "Zaragoza", "country": "Spain", "path": "/zaragoza", "continent": "Europe" },
  { "name": "Zagreb", "country": "Croatia", "path": "/zagreb", "continent": "Europe" },
  { "name": "Yogyakarta", "country": "Indonesia", "path": "/yogyakarta", "continent": "Asia" },
  { "name": "Winnipeg", "country": "Canada", "path": "/winnipeg", "continent": "North America" },
  { "name": "Windhoek", "country": "Namibia", "path": "/windhoek", "continent": "Africa" },
  { "name": "Wellington", "country": "New Zealand", "path": "/wellington", "continent": "Oceania" }
];

export const FeaturedCities = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-orange-400 fill-current" />
            <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 hover:from-orange-200 hover:to-red-200">
              Recently Added
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            Featured Cities
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Discover our newest destination guides with fresh insights, updated recommendations, and the latest travel information.
          </p>
        </div>

        {/* Featured Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {featuredCities.map((city, index) => (
            <a key={city.path} href={city.path}>
              <Card 
                className="group overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white h-full relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* New Badge */}
                {index === 0 && (
                  <div className="absolute top-2 right-2 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs">
                      New
                    </Badge>
                  </div>
                )}
                
                {/* City Image Placeholder */}
                <div className="h-32 sm:h-40 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300"></div>
                  <div className="absolute bottom-2 left-2">
                    <div className="flex items-center gap-1 text-white">
                      <MapPin className="h-3 w-3" />
                      <span className="text-xs font-medium">{city.continent}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors text-sm sm:text-base leading-tight">
                        {city.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {city.country}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                      <Star className="h-3 w-3 fill-orange-400 text-orange-400" />
                      <span className="text-xs text-gray-600">4.{Math.floor(Math.random() * 5) + 5}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500">Complete Guide</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Explore All Destinations
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Browse our complete collection of destination guides to find your next adventure.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 text-sm sm:text-base">
              View All Cities
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};