import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { MapPinIcon, SearchIcon, GlobeIcon, ArrowRightIcon } from '@/components/icons/LightweightIcons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CriticalResourceLoader } from '@/components/CriticalResourceLoader';
import { ImageOptimized } from '@/components/ImageOptimized';

const cities = [
  // Cities cleared - ready for fresh production content,
  { "name": "Porto", "country": "Portugal", "path": "/best-things-to-do-in-porto", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1577958194277-7b3bc213b03c?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Bologna", "country": "Italy", "path": "/best-things-to-do-in-bologna", "continent": "Europe", "imageUrl": "https://plus.unsplash.com/premium_photo-1677427230972-7cabe0d3e005?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Milan", "country": "Italy", "path": "/best-things-to-do-in-milan", "continent": "Europe", "imageUrl": "https://plus.unsplash.com/premium_photo-1715075305614-e9258ad8c118?q=80&w=1801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Zurich", "country": "Switzerland", "path": "/best-things-to-do-in-zurich", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1689717850353-92c66a4f1441?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Austin", "country": "USA", "path": "/best-things-to-do-in-austin", "continent": "North America", "imageUrl": "https://images.unsplash.com/photo-1557335200-a65f7f032602?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Miami", "country": "USA", "path": "/best-things-to-do-in-miami", "continent": "North America", "imageUrl": "https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Venice", "country": "Italy", "path": "/best-things-to-do-in-venice", "continent": "Europe", "imageUrl": "https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Berlin", "country": "Germany", "path": "/best-things-to-do-in-berlin", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "New York", "country": "USA", "path": "/best-things-to-do-in-new-york", "continent": "North America" },
  { "name": "Sydney", "country": "Australia", "path": "/best-things-to-do-in-sydney", "continent": "Australia" },
  { "name": "Los Angeles", "country": "USA", "path": "/best-things-to-do-in-los-angeles", "continent": "North America" },
  { "name": "Boston", "country": "USA", "path": "/best-things-to-do-in-boston", "continent": "North America" },
  { "name": "Male", "country": "Maldives", "path": "/best-things-to-do-in-male", "continent": "Asia" },
  { "name": "Colombo", "country": "Sri Lanka", "path": "/best-things-to-do-in-colombo", "continent": "Asia" },
  { "name": "Chicago", "country": "USA", "path": "/best-things-to-do-in-chicago", "continent": "North America" },
  { "name": "Aarhus", "country": "Denmark", "path": "/best-things-to-do-in-aarhus", "continent": "Europe" },
  { "name": "London", "country": "United Kingdom", "path": "/best-things-to-do-in-london", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1737649766441-a334350d6015?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Rome", "country": "Italy", "path": "/best-things-to-do-in-rome", "continent": "Europe", "imageUrl": "https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Edinburgh", "country": "United Kingdom", "path": "/best-things-to-do-in-edinburgh", "continent": "Europe", "imageUrl": "https://plus.unsplash.com/premium_photo-1699566448247-1627bee256d0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Seoul", "country": "South Korea", "path": "/best-things-to-do-in-seoul", "continent": "Asia", "imageUrl": "https://images.unsplash.com/photo-1595817986621-2b7d9ffd3f25?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const continents = ["All", "Europe", "Asia", "Oceania", "Africa", "North America", "South America"];

export default function DestinationsPage() {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const seoData = {
    title: "All Destinations - TravelWanders",
    description: "Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.",
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

  // Get critical images for preloading (first 6 cities with images)
  const criticalImages = cities
    .filter(city => city.imageUrl)
    .slice(0, 6)
    .map(city => city.imageUrl);

  return (
    <CriticalResourceLoader criticalImages={criticalImages}>
      <div className="min-h-screen bg-white">
      <SEOHead seoData={seoData} structuredData={structuredData} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              All Destinations
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our complete collection of {cities.length} travel guides spanning {continents.length - 1} continents. 
              Find insider tips, must-see attractions, and local insights for every destination.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
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
                      <GlobeIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                      {city.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{city.country}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 text-sm font-medium">View Guide</span>
                      <ArrowRightIcon className="h-4 w-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCities.length === 0 && (
            <div className="text-center py-16">
              <GlobeIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
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
    </CriticalResourceLoader>
  );
}