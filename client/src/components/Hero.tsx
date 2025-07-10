import { Search, MapPin, Calendar, Star, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-beach.jpg';

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-teal-600 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 sm:mb-8">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Star className="w-3 h-3 mr-1 fill-current" />
              #1 Travel Guide
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Users className="w-3 h-3 mr-1" />
              Trusted by 2M+ travelers
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Globe className="w-3 h-3 mr-1" />
              152+ Cities
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            The World's Most Trusted
            <span className="block text-yellow-300">
              Travel Platform
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto px-4 sm:px-0">
            Get expert advice, insider tips, and comprehensive guides for 152+ destinations worldwide. 
            Join millions of travelers who trust WanderGuide for their adventures.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="relative order-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 sm:h-5 sm:w-5" />
                <Input 
                  placeholder="Where are you going?" 
                  className="pl-9 sm:pl-10 border-gray-300 text-gray-900 placeholder:text-gray-500 h-12 sm:h-14 text-sm sm:text-base focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <div className="relative order-2">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4 sm:h-5 sm:w-5" />
                <Input 
                  placeholder="Travel dates" 
                  className="pl-9 sm:pl-10 border-gray-300 text-gray-900 placeholder:text-gray-500 h-12 sm:h-14 text-sm sm:text-base focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <Button className="w-full order-3 h-12 sm:h-14 text-sm sm:text-base bg-green-600 hover:bg-green-700 text-white font-semibold">
                <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Search Destinations
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">157+</div>
              <div className="text-sm sm:text-base text-white/80">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2M+</div>
              <div className="text-sm sm:text-base text-white/80">Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4.8★</div>
              <div className="text-sm sm:text-base text-white/80">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-sm sm:text-base text-white/80">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};