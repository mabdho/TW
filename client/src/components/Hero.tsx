import { Search, MapPin, Calendar, Star, Users, Globe, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export const Hero = () => {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-white to-green-50/30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust indicator */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200 px-4 py-2">
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by millions of travelers
            </Badge>
          </div>

          {/* Modern headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Explore the world with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              confidence
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get trusted reviews, insider tips, and comprehensive guides for 158+ destinations worldwide.
          </p>

          {/* Clean search bar */}
          <div id="search-section" className="bg-white rounded-2xl p-3 shadow-lg border border-gray-200 max-w-3xl mx-auto mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Where to?" 
                  className="pl-12 border-0 bg-gray-50 text-gray-900 placeholder:text-gray-500 h-14 text-base rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Check-in" 
                  className="pl-12 border-0 bg-gray-50 text-gray-900 placeholder:text-gray-500 h-14 text-base rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <Button className="h-14 text-base bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Clean stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">158+</div>
              <div className="text-sm text-gray-600 font-medium">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-sm text-gray-600 font-medium">Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.8★</div>
              <div className="text-sm text-gray-600 font-medium">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};