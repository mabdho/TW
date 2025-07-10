import { Search, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import heroImage from '@/assets/hero-beach.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
            Discover Your Next
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up px-4 sm:px-0">
            Explore breathtaking destinations, immerse yourself in local cultures, 
            and create unforgettable memories with our curated travel guides.
          </p>

          {/* Search Section */}
          <div className="bg-background/25 backdrop-blur-glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-strong max-w-3xl mx-auto mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="relative order-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
                <Input 
                  placeholder="Where to?" 
                  className="pl-9 sm:pl-10 bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              
              <div className="relative order-2">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 sm:h-5 sm:w-5" />
                <Input 
                  placeholder="When?" 
                  className="pl-9 sm:pl-10 bg-background/50 border-white/20 text-foreground placeholder:text-muted-foreground h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full order-3 h-10 sm:h-11 text-sm sm:text-base">
                <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button variant="glass" size="xl" className="animate-float w-full sm:w-auto text-sm sm:text-base">
              Explore Destinations
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto text-sm sm:text-base">
              Watch Travel Guide
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};