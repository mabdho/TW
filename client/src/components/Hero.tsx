import { useState } from 'react';
import { SearchIcon, MapPinIcon, StarIcon, UsersIcon, GlobeIcon, PlaneIcon } from '@/components/icons/LightweightIcons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CriticalResourceLoader } from './CriticalResourceLoader';
import { ImageOptimized } from './ImageOptimized';

// List of all cities for search functionality with SEO-friendly URLs
const cities = [
  // Cities cleared - ready for fresh production content
];

export const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.country.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Try to find exact match first
      const exactMatch = cities.find(city => 
        city.name.toLowerCase() === searchTerm.toLowerCase()
      );
      
      if (exactMatch) {
        window.location.href = exactMatch.path;
      } else if (filteredCities.length > 0) {
        // Go to the first match
        window.location.href = filteredCities[0].path;
      } else {
        // Go to destinations page with search term
        window.location.href = `/destinations?search=${encodeURIComponent(searchTerm)}`;
      }
    } else {
      // If no search term, go to destinations page
      window.location.href = '/destinations';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
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
              <StarIcon className="w-4 h-4 mr-2 fill-current" />
              Trusted by millions of travelers
            </Badge>
          </div>

          {/* Modern headline - matches HTML exactly */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Explore the world with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              confidence
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get trusted reviews, insider tips, and comprehensive guides for destinations worldwide.
          </p>

          {/* Functional search bar */}
          <div id="search-section" className="bg-white rounded-2xl p-3 shadow-lg border border-gray-200 max-w-2xl mx-auto mb-16 relative">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setShowSuggestions(searchTerm.length > 0)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Search destinations..." 
                  className="pl-12 border-0 bg-gray-50 text-gray-900 placeholder:text-gray-500 h-14 text-base rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                
                {/* Search suggestions */}
                {showSuggestions && filteredCities.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
                    {filteredCities.map((city) => (
                      <button
                        key={city.path}
                        onClick={() => {
                          setSearchTerm(city.name);
                          setShowSuggestions(false);
                          window.location.href = city.path;
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                      >
                        <MapPinIcon className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">{city.name}</div>
                          <div className="text-sm text-gray-500">{city.country}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <Button 
                onClick={handleSearch}
                className="h-14 px-8 text-base bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl"
              >
                <SearchIcon className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Clean stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">New</div>
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