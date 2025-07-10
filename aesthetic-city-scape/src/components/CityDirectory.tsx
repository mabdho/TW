import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const cities = [
  { name: "Aarhus", country: "Denmark", path: "/aarhus", continent: "Europe" },
  { name: "Accra", country: "Ghana", path: "/accra", continent: "Africa" },
  { name: "Addis Ababa", country: "Ethiopia", path: "/addis-ababa", continent: "Africa" },
  { name: "Adelaide", country: "Australia", path: "/adelaide", continent: "Oceania" },
  { name: "Ahmedabad", country: "India", path: "/ahmedabad", continent: "Asia" },
  { name: "Albuquerque", country: "United States", path: "/albuquerque", continent: "North America" },
  { name: "Algiers", country: "Algeria", path: "/algiers", continent: "Africa" },
  { name: "Alice Springs", country: "Australia", path: "/alice-springs", continent: "Oceania" },
  { name: "Antwerp", country: "Belgium", path: "/antwerp", continent: "Europe" },
  { name: "Arequipa", country: "Peru", path: "/arequipa", continent: "South America" },
  { name: "Asuncion", country: "Paraguay", path: "/asuncion", continent: "South America" },
  { name: "Auckland", country: "New Zealand", path: "/auckland", continent: "Oceania" },
  { name: "Austin", country: "United States", path: "/austin", continent: "North America" },
  { name: "Bandung", country: "Indonesia", path: "/bandung", continent: "Asia" },
  { name: "Barranquilla", country: "Colombia", path: "/barranquilla", continent: "South America" },
  { name: "Belgrade", country: "Serbia", path: "/belgrade", continent: "Europe" },
  { name: "Belo Horizonte", country: "Brazil", path: "/belo-horizonte", continent: "South America" },
  { name: "Bergen", country: "Norway", path: "/bergen", continent: "Europe" },
  { name: "Bilbao", country: "Spain", path: "/bilbao", continent: "Europe" },
  { name: "Bologna", country: "Italy", path: "/bologna", continent: "Europe" },
  { name: "Bordeaux", country: "France", path: "/bordeaux", continent: "Europe" },
  { name: "Brisbane", country: "Australia", path: "/brisbane", continent: "Oceania" },
  { name: "Bucharest", country: "Romania", path: "/bucharest", continent: "Europe" },
  { name: "Busan", country: "South Korea", path: "/busan", continent: "Asia" },
  { name: "Calgary", country: "Canada", path: "/calgary", continent: "North America" },
  { name: "Cape Town", country: "South Africa", path: "/cape-town", continent: "Africa" },
  { name: "Cartagena", country: "Colombia", path: "/cartagena", continent: "South America" },
  { name: "Casablanca", country: "Morocco", path: "/casablanca", continent: "Africa" },
  { name: "Christchurch", country: "New Zealand", path: "/christchurch", continent: "Oceania" },
  { name: "Copenhagen", country: "Denmark", path: "/copenhagen", continent: "Europe" },
  { name: "Cusco", country: "Peru", path: "/cusco", continent: "South America" },
  { name: "Dakar", country: "Senegal", path: "/dakar", continent: "Africa" },
  { name: "Darwin", country: "Australia", path: "/darwin", continent: "Oceania" },
  { name: "Ghent", country: "Belgium", path: "/ghent", continent: "Europe" },
  { name: "Gothenburg", country: "Sweden", path: "/gothenberg", continent: "Europe" },
  { name: "Guadalajara", country: "Mexico", path: "/guadalajara", continent: "North America" },
  { name: "Guayaquil", country: "Ecuador", path: "/guayaquil", continent: "South America" },
  { name: "Helsinki", country: "Finland", path: "/helsinki", continent: "Europe" },
  { name: "Hobart", country: "Australia", path: "/hobart", continent: "Oceania" },
  { name: "Krakow", country: "Poland", path: "/krakow", continent: "Europe" },
  { name: "Lagos", country: "Nigeria", path: "/lagos", continent: "Africa" },
  { name: "Lyon", country: "France", path: "/lyon", continent: "Europe" },
  { name: "Marrakech", country: "Morocco", path: "/marrakech", continent: "Africa" },
  { name: "Marseille", country: "France", path: "/marseille", continent: "Europe" },
  { name: "Medellin", country: "Colombia", path: "/medellin", continent: "South America" },
  { name: "Nashville", country: "United States", path: "/nashville", continent: "North America" },
  { name: "Nice", country: "France", path: "/nice", continent: "Europe" },
  { name: "Ottawa", country: "Canada", path: "/ottawa", continent: "North America" },
  { name: "Palermo", country: "Italy", path: "/palermo", continent: "Europe" },
  { name: "Perth", country: "Australia", path: "/perth", continent: "Oceania" },
  { name: "Quebec City", country: "Canada", path: "/quebec-city", continent: "North America" },
  { name: "Quito", country: "Ecuador", path: "/quito", continent: "South America" },
  { name: "Salvador", country: "Brazil", path: "/salvador", continent: "South America" },
  { name: "Seville", country: "Spain", path: "/seville", continent: "Europe" },
  { name: "Stockholm", country: "Sweden", path: "/stockholm", continent: "Europe" },
  { name: "Strasbourg", country: "France", path: "/strasbourg", continent: "Europe" },
  { name: "Suva", country: "Fiji", path: "/suva", continent: "Oceania" },
  { name: "Tokyo", country: "Japan", path: "/tokyo", continent: "Asia" },
  { name: "Tunis", country: "Tunisia", path: "/tunis", continent: "Africa" },
  { name: "Turin", country: "Italy", path: "/turin", continent: "Europe" },
  { name: "Valencia", country: "Spain", path: "/valencia", continent: "Europe" },
  { name: "Warsaw", country: "Poland", path: "/warsaw", continent: "Europe" },
  { name: "Wellington", country: "New Zealand", path: "/wellington", continent: "Oceania" }
];

const continents = ["All", "Europe", "Asia", "Oceania", "Africa", "North America", "South America"];

export const CityDirectory = () => {
  const [selectedContinent, setSelectedContinent] = useState("All");

  const filteredCities = selectedContinent === "All" 
    ? cities 
    : cities.filter(city => city.continent === selectedContinent);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our City Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover comprehensive travel guides for 63 amazing cities worldwide. 
            Each guide features TripAdvisor-style layouts with attractions, logistics, and local insights.
          </p>
          
          {/* Continent Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {continents.map((continent) => (
              <Button
                key={continent}
                variant={selectedContinent === continent ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedContinent(continent)}
                className="transition-all duration-200"
              >
                {continent}
              </Button>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground">
            Showing {filteredCities.length} cities
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCities.map((city, index) => (
            <Link key={city.path} to={city.path}>
              <Card 
                className="group overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card h-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {city.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {city.country}
                      </p>
                    </div>
                    <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {city.continent}
                    </span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              More Cities Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're constantly adding new destinations to help you discover amazing places around the world.
            </p>
            <Button variant="hero" size="lg">
              Request a City Guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};