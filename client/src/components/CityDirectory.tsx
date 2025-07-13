import { useState } from 'react';
import { MapPin, ArrowRight, Star, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const cities = [
  // Cities cleared - ready for fresh production content,
  { "name": "Porto", "country": "Portugal", "path": "/best-things-to-do-in-porto", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1577958194277-7b3bc213b03c?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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
  { "name": "Aarhus", "country": "Denmark", "path": "/best-things-to-do-in-aarhus", "continent": "Europe" }
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
            All destinations
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