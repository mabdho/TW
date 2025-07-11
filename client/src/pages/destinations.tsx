import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { MapPin, Search, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const cities = [
  // Cities cleared - ready for fresh production content
];

const continents = ["All", "Europe", "Asia", "Oceania", "Africa", "North America", "South America"];

export default function DestinationsPage() {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const seoData = {
    title: "Travel Destinations - Explore Amazing Places | TravelWanders",
    description: "Browse our comprehensive collection of travel destinations worldwide. Find your next adventure with detailed city guides, attractions, and travel tips.",
    keywords: "travel destinations, city guides, travel planning, vacation spots, tourist attractions, world travel, destination guides",
    canonicalUrl: "https://travelwanders.com/destinations",
    slug: "destinations",
    mainKeyword: "travel destinations",
    keywordDensity: 2.3,
    seoScore: 92,
    lastModified: new Date().toISOString(),
    ogImage: "https://travelwanders.com/city-europe.jpg",
    ogType: "website",
    author: "TravelWanders",
    section: "destinations"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Travel Destinations",
    "description": "Browse our comprehensive collection of travel destinations worldwide",
    "url": "https://travelwanders.com/destinations",
    "isPartOf": {
      "@type": "WebSite",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    }
  };

  // Handle URL search parameters from Hero search functionality
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchTerm(searchParam);
    }
  }, []);

  const filteredCities = cities.filter(city => {
    const matchesContinent = selectedContinent === "All" || city.continent === selectedContinent;
    const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         city.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesContinent && matchesSearch;
  });

  const continentCounts = continents.map(continent => ({
    name: continent,
    count: continent === "All" ? cities.length : cities.filter(city => city.continent === continent).length
  }));

  return (
    <div className="min-h-screen bg-white">
      <SEOHead seoData={seoData} structuredData={structuredData} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              All <span className="text-green-600">Destinations</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our complete collection of {cities.length} travel guides spanning {continents.length - 1} continents. 
              Find insider tips, must-see attractions, and local insights for every destination.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search destinations or countries..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 border-gray-300 focus:border-green-500 focus:ring-green-500 h-12 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Continent Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {continentCounts.map((continent) => (
              <Button
                key={continent.name}
                variant={selectedContinent === continent.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedContinent(continent.name)}
                className={`transition-all duration-200 text-sm px-4 py-2 h-9 rounded-full ${
                  selectedContinent === continent.name 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {continent.name} ({continent.count})
              </Button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              {searchTerm ? (
                `Found ${filteredCities.length} destination${filteredCities.length !== 1 ? 's' : ''} matching "${searchTerm}"`
              ) : (
                `Showing ${filteredCities.length} destination${filteredCities.length !== 1 ? 's' : ''} 
                ${selectedContinent !== "All" ? `in ${selectedContinent}` : 'worldwide'}`
              )}
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCities.map((city) => (
              <Card key={city.path} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-gray-200">
                <a href={city.path} className="block">
                  <div 
                    className={`relative h-48 overflow-hidden rounded-t-lg ${!city.imageUrl ? 'bg-gradient-to-br from-green-400 to-blue-500' : 'bg-gray-900'}`}
                    style={city.imageUrl ? {
                      backgroundImage: `url(${city.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    } : {}}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900 text-xs">
                        {city.continent}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <Globe className="h-5 w-5" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {city.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{city.country}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 text-sm font-medium">View Guide</span>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCities.length === 0 && (
            <div className="text-center py-16">
              <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or selecting a different continent.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedContinent("All");
                }}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Show All Destinations
              </Button>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore by Continent</h2>
              <p className="text-gray-600">Discover amazing destinations across all continents</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {continentCounts.filter(c => c.name !== "All").map((continent) => (
                <button
                  key={continent.name}
                  onClick={() => setSelectedContinent(continent.name)}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-200 hover:border-green-300"
                >
                  <div className="text-2xl font-bold text-green-600 mb-1">{continent.count}</div>
                  <div className="text-sm text-gray-700 font-medium">{continent.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}