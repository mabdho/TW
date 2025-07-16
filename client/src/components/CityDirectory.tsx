import { useState } from 'react';
import { MapPinIcon, ArrowRightIcon, StarIcon, SearchIcon } from '@/components/icons/LightweightIcons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const cities = [
  // Cities cleared - ready for fresh production content via admin panel,
  { "name": "London", "country": "United Kingdom", "path": "/best-things-to-do-in-london", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Austin", "country": "USA", "path": "/best-things-to-do-in-austin", "continent": "North America", "imageUrl": "https://images.unsplash.com/photo-1557335200-a65f7f032602?q=80&w=1758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "New York", "country": "USA", "path": "/best-things-to-do-in-new-york", "continent": "North America", "imageUrl": "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Zurich", "country": "Switzerland", "path": "/best-things-to-do-in-zurich", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Antalya", "country": "Turkey", "path": "/best-things-to-do-in-antalya", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1593238739364-18cfde30e522?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Como", "country": "Italy", "path": "/best-things-to-do-in-como", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1606745463199-d7623eee5f8a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Accra", "country": "Ghana", "path": "/best-things-to-do-in-accra", "continent": "Africa", "imageUrl": "https://images.unsplash.com/photo-1589104602532-9cee07f8f62c?q=80&w=1328&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Oslo", "country": "Norway", "path": "/best-things-to-do-in-oslo", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1712009509758-dff926710413?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Stockholm", "country": "Sweden", "path": "/best-things-to-do-in-stockholm", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Rome", "country": "Italy", "path": "/best-things-to-do-in-rome", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Milan", "country": "Italy", "path": "/best-things-to-do-in-milan", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Venice", "country": "Italy", "path": "/best-things-to-do-in-venice", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

const continents = ["All", "Europe", "Asia", "Oceania", "Africa", "North America", "South America"];

export const CityDirectory = () => {
  const [selectedContinent, setSelectedContinent] = useState("All");

  const filteredCities = selectedContinent === "All" 
    ? cities 
    : cities.filter(city => city.continent === selectedContinent);

  return (
    <section id="destinations" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            All Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Browse our complete collection of travel guides and insider tips for destinations worldwide.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search destinations..." 
                className="pl-12 border-gray-300 focus:border-green-500 focus:ring-green-500 h-12 rounded-lg"
              />
            </div>
          </div>
          
          {/* Continent Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {continents.map((continent) => (
              <Button
                key={continent}
                variant={selectedContinent === continent ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedContinent(continent)}
                className={`transition-all duration-200 text-sm px-4 py-2 h-9 rounded-full ${
                  selectedContinent === continent 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {continent}
              </Button>
            ))}
          </div>
          
          <p className="text-sm text-gray-500">
            {filteredCities.length} destinations
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredCities.map((city, index) => (
            <a key={city.path} href={city.path}>
              <Card className="group overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white h-full">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors text-sm leading-tight truncate">
                        {city.name}
                      </h3>
                      <p className="text-xs text-gray-500 truncate mt-1">
                        {city.country}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500">{city.continent}</span>
                    <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>


      </div>
    </section>
  );
};