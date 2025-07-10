import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const cities = [
  { "name": "Aarhus", "country": "Denmark", "path": "/aarhus", "continent": "Europe" },
  { "name": "Accra", "country": "Ghana", "path": "/accra", "continent": "Africa" },
  { "name": "Addis Ababa", "country": "Ethiopia", "path": "/addis-ababa", "continent": "Africa" },
  { "name": "Adelaide", "country": "Australia", "path": "/adelaide", "continent": "Oceania" },
  { "name": "Ahmedabad", "country": "India", "path": "/ahmedabad", "continent": "Asia" },
  { "name": "Albuquerque", "country": "United States", "path": "/albuquerque", "continent": "North America" },
  { "name": "Algiers", "country": "Algeria", "path": "/algiers", "continent": "Africa" },
  { "name": "Alice Springs", "country": "Australia", "path": "/alice-springs", "continent": "Oceania" },
  { "name": "Antwerp", "country": "Belgium", "path": "/antwerp", "continent": "Europe" },
  { "name": "Arequipa", "country": "Peru", "path": "/arequipa", "continent": "South America" },
  { "name": "Asunción", "country": "Paraguay", "path": "/asuncin", "continent": "South America" },
  { "name": "Asuncion", "country": "Paraguay", "path": "/asuncion", "continent": "South America" },
  { "name": "Auckland", "country": "New Zealand", "path": "/auckland", "continent": "Oceania" },
  { "name": "Austin", "country": "United States", "path": "/austin", "continent": "North America" },
  { "name": "Bandung", "country": "Indonesia", "path": "/bandung", "continent": "Asia" },
  { "name": "Barranquilla", "country": "Colombia", "path": "/barranquilla", "continent": "South America" },
  { "name": "Belgrade", "country": "Serbia", "path": "/belgrade", "continent": "Europe" },
  { "name": "Belo Horizonte", "country": "Brazil", "path": "/belo-horizonte", "continent": "South America" },
  { "name": "Bergen", "country": "Norway", "path": "/bergen", "continent": "Europe" },
  { "name": "Bilbao", "country": "Spain", "path": "/bilbao", "continent": "Europe" },
  { "name": "Bologna", "country": "Italy", "path": "/bologna", "continent": "Europe" },
  { "name": "Bordeaux", "country": "France", "path": "/bordeaux", "continent": "Europe" },
  { "name": "Bratislava", "country": "Slovakia", "path": "/bratislava", "continent": "Europe" },
  { "name": "Brisbane", "country": "Australia", "path": "/brisbane", "continent": "Oceania" },
  { "name": "Brno", "country": "Czech Republic", "path": "/brno", "continent": "Europe" },
  { "name": "Broome", "country": "Australia", "path": "/broome", "continent": "Oceania" },
  { "name": "Bucharest", "country": "Romania", "path": "/bucharest", "continent": "Europe" },
  { "name": "Busan", "country": "South Korea", "path": "/busan", "continent": "Asia" },
  { "name": "Cairns", "country": "Australia", "path": "/cairns", "continent": "Oceania" },
  { "name": "Cairo", "country": "Egypt", "path": "/cairo", "continent": "Africa" },
  { "name": "Calgary", "country": "Canada", "path": "/calgary", "continent": "North America" },
  { "name": "Cali", "country": "Colombia", "path": "/cali", "continent": "South America" },
  { "name": "Cape Town", "country": "South Africa", "path": "/cape-town", "continent": "Africa" },
  { "name": "Cartagena", "country": "Colombia", "path": "/cartagena", "continent": "South America" },
  { "name": "Casablanca", "country": "Morocco", "path": "/casablanca", "continent": "Africa" },
  { "name": "Cebu", "country": "Philippines", "path": "/cebu", "continent": "Asia" },
  { "name": "Charleston", "country": "United States", "path": "/charleston", "continent": "North America" },
  { "name": "Chiang Mai", "country": "Thailand", "path": "/chiang-mai", "continent": "Asia" },
  { "name": "Christchurch", "country": "New Zealand", "path": "/christchurch", "continent": "Oceania" },
  { "name": "Colombo", "country": "Sri Lanka", "path": "/colombo", "continent": "Asia" },
  { "name": "Columbus", "country": "United States", "path": "/columbus", "continent": "North America" },
  { "name": "Copenhagen", "country": "Denmark", "path": "/copenhagen", "continent": "Europe" },
  { "name": "Córdoba", "country": "Spain", "path": "/crdoba", "continent": "Europe" },
  { "name": "Curitiba", "country": "Brazil", "path": "/curitiba", "continent": "South America" },
  { "name": "Cusco", "country": "Peru", "path": "/cusco", "continent": "South America" },
  { "name": "Da Nang", "country": "Vietnam", "path": "/da-nang", "continent": "Asia" },
  { "name": "Dakar", "country": "Senegal", "path": "/dakar", "continent": "Africa" },
  { "name": "Dalat", "country": "Vietnam", "path": "/dalat", "continent": "Asia" },
  { "name": "Dar Es Salaam", "country": "Tanzania", "path": "/dar-es-salaam", "continent": "Africa" },
  { "name": "Darwin", "country": "Australia", "path": "/darwin", "continent": "Oceania" },
  { "name": "Debrecen", "country": "Hungary", "path": "/debrecen", "continent": "Europe" },
  { "name": "Edmonton", "country": "Canada", "path": "/edmonton", "continent": "North America" },
  { "name": "Fukuoka", "country": "Japan", "path": "/fukuoka", "continent": "Asia" },
  { "name": "Gaborone", "country": "Botswana", "path": "/gaborone", "continent": "Africa" },
  { "name": "Gdansk", "country": "Poland", "path": "/gdansk", "continent": "Europe" },
  { "name": "Genoa", "country": "Italy", "path": "/genoa", "continent": "Europe" },
  { "name": "Ghent", "country": "Belgium", "path": "/ghent", "continent": "Europe" },
  { "name": "Gold Coast", "country": "Australia", "path": "/gold-coast", "continent": "Oceania" },
  { "name": "Gothenburg", "country": "Sweden", "path": "/gothenburg", "continent": "Europe" },
  { "name": "Guadalajara", "country": "Mexico", "path": "/guadalajara", "continent": "North America" },
  { "name": "Guatemala City", "country": "Guatemala", "path": "/guatemala-city", "continent": "North America" },
  { "name": "Guayaquil", "country": "Ecuador", "path": "/guayaquil", "continent": "South America" },
  { "name": "Halifax", "country": "Canada", "path": "/halifax", "continent": "North America" },
  { "name": "Hanoi", "country": "Vietnam", "path": "/hanoi", "continent": "Asia" },
  { "name": "Harare", "country": "Zimbabwe", "path": "/harare", "continent": "Africa" },
  { "name": "Havana", "country": "Cuba", "path": "/havana", "continent": "North America" },
  { "name": "Helsinki", "country": "Finland", "path": "/helsinki", "continent": "Europe" },
  { "name": "Hobart", "country": "Australia", "path": "/hobart", "continent": "Oceania" },
  { "name": "Hoi An", "country": "Vietnam", "path": "/hoi-an", "continent": "Asia" },
  { "name": "Indianapolis", "country": "United States", "path": "/indianapolis", "continent": "North America" },
  { "name": "Ipoh", "country": "Malaysia", "path": "/ipoh", "continent": "Asia" },
  { "name": "Jaipur", "country": "India", "path": "/jaipur", "continent": "Asia" },
  { "name": "Johannesburg", "country": "South Africa", "path": "/johannesburg", "continent": "Africa" },
  { "name": "Kampala", "country": "Uganda", "path": "/kampala", "continent": "Africa" },
  { "name": "Kansas City", "country": "United States", "path": "/kansas-city", "continent": "North America" },
  { "name": "Kathmandu", "country": "Nepal", "path": "/kathmandu", "continent": "Asia" },
  { "name": "Kigali", "country": "Rwanda", "path": "/kigali", "continent": "Africa" },
  { "name": "Kingston", "country": "Jamaica", "path": "/kingston", "continent": "North America" },
  { "name": "Krakow", "country": "Poland", "path": "/krakow", "continent": "Europe" },
  { "name": "La Paz", "country": "Bolivia", "path": "/la-paz", "continent": "South America" },
  { "name": "Lagos", "country": "Nigeria", "path": "/lagos", "continent": "Africa" },
  { "name": "Lahore", "country": "Pakistan", "path": "/lahore", "continent": "Asia" },
  { "name": "Ljubljana", "country": "Slovenia", "path": "/ljubljana", "continent": "Europe" },
  { "name": "Luanda", "country": "Angola", "path": "/luanda", "continent": "Africa" },
  { "name": "Luang Prabang", "country": "Laos", "path": "/luang-prabang", "continent": "Asia" },
  { "name": "Lusaka", "country": "Zambia", "path": "/lusaka", "continent": "Africa" },
  { "name": "Lyon", "country": "France", "path": "/lyon", "continent": "Europe" },
  { "name": "Malacca", "country": "Malaysia", "path": "/malacca", "continent": "Asia" },
  { "name": "Malaga", "country": "Spain", "path": "/malaga", "continent": "Europe" },
  { "name": "Malmö", "country": "Sweden", "path": "/malm", "continent": "Europe" },
  { "name": "Manaus", "country": "Brazil", "path": "/manaus", "continent": "South America" },
  { "name": "Maputo", "country": "Mozambique", "path": "/maputo", "continent": "Africa" },
  { "name": "Maracaibo", "country": "Venezuela", "path": "/maracaibo", "continent": "South America" },
  { "name": "Marrakech", "country": "Morocco", "path": "/marrakech", "continent": "Africa" },
  { "name": "Marseille", "country": "France", "path": "/marseille", "continent": "Europe" },
  { "name": "Medellin", "country": "Colombia", "path": "/medellin", "continent": "South America" },
  { "name": "Milwaukee", "country": "United States", "path": "/milwaukee", "continent": "North America" },
  { "name": "Montevideo", "country": "Uruguay", "path": "/montevideo", "continent": "South America" },
  { "name": "Nairobi", "country": "Kenya", "path": "/nairobi", "continent": "Africa" },
  { "name": "Nashville", "country": "United States", "path": "/nashville", "continent": "North America" },
  { "name": "New Orleans", "country": "United States", "path": "/new-orleans", "continent": "North America" },
  { "name": "Nice", "country": "France", "path": "/nice", "continent": "Europe" },
  { "name": "Nouméa", "country": "New Caledonia", "path": "/nouma", "continent": "Oceania" },
  { "name": "Oaxaca", "country": "Mexico", "path": "/oaxaca", "continent": "North America" },
  { "name": "Oslo", "country": "Norway", "path": "/oslo", "continent": "Europe" },
  { "name": "Ottawa", "country": "Canada", "path": "/ottawa", "continent": "North America" },
  { "name": "Palermo", "country": "Italy", "path": "/palermo", "continent": "Europe" },
  { "name": "Panama City", "country": "Panama", "path": "/panama-city", "continent": "North America" },
  { "name": "Papeete", "country": "French Polynesia", "path": "/papeete", "continent": "Oceania" },
  { "name": "Penang", "country": "Malaysia", "path": "/penang", "continent": "Asia" },
  { "name": "Perth", "country": "Australia", "path": "/perth", "continent": "Oceania" },
  { "name": "Port Moresby", "country": "Papua New Guinea", "path": "/port-moresby", "continent": "Oceania" },
  { "name": "Portland", "country": "United States", "path": "/portland", "continent": "North America" },
  { "name": "Porto", "country": "Portugal", "path": "/porto", "continent": "Europe" },
  { "name": "Quebec City", "country": "Canada", "path": "/quebec-city", "continent": "North America" },
  { "name": "Queenstown", "country": "New Zealand", "path": "/queenstown", "continent": "Oceania" },
  { "name": "Quito", "country": "Ecuador", "path": "/quito", "continent": "South America" },
  { "name": "Reykjavik", "country": "Iceland", "path": "/reykjavik", "continent": "Europe" },
  { "name": "Riga", "country": "Latvia", "path": "/riga", "continent": "Europe" },
  { "name": "Rosario", "country": "Argentina", "path": "/rosario", "continent": "South America" },
  { "name": "Sacramento", "country": "United States", "path": "/sacramento", "continent": "North America" },
  { "name": "Salt Lake City", "country": "United States", "path": "/salt-lake-city", "continent": "North America" },
  { "name": "Salvador", "country": "Brazil", "path": "/salvador", "continent": "South America" },
  { "name": "San Antonio", "country": "United States", "path": "/san-antonio", "continent": "North America" },
  { "name": "San Jose", "country": "Costa Rica", "path": "/san-jose", "continent": "North America" },
  { "name": "San Juan", "country": "Puerto Rico", "path": "/san-juan", "continent": "North America" },
  { "name": "Savannah", "country": "United States", "path": "/savannah", "continent": "North America" },
  { "name": "Seville", "country": "Spain", "path": "/seville", "continent": "Europe" },
  { "name": "Siem Reap", "country": "Cambodia", "path": "/siem-reap", "continent": "Asia" },
  { "name": "Sofia", "country": "Bulgaria", "path": "/sofia", "continent": "Europe" },
  { "name": "Stockholm", "country": "Sweden", "path": "/stockholm", "continent": "Europe" },
  { "name": "Strasbourg", "country": "France", "path": "/strasbourg", "continent": "Europe" },
  { "name": "Sucre", "country": "Bolivia", "path": "/sucre", "continent": "South America" },
  { "name": "Surabaya", "country": "Indonesia", "path": "/surabaya", "continent": "Asia" },
  { "name": "Suva", "country": "Fiji", "path": "/suva", "continent": "Oceania" },
  { "name": "Tallinn", "country": "Estonia", "path": "/tallinn", "continent": "Europe" },
  { "name": "Tampere", "country": "Finland", "path": "/tampere", "continent": "Europe" },
  { "name": "The Hague", "country": "Netherlands", "path": "/the-hague", "continent": "Europe" },
  { "name": "Thessaloniki", "country": "Greece", "path": "/thessaloniki", "continent": "Europe" },
  { "name": "Tokyo", "country": "Japan", "path": "/tokyo", "continent": "Asia" },
  { "name": "Tunis", "country": "Tunisia", "path": "/tunis", "continent": "Africa" },
  { "name": "Turin", "country": "Italy", "path": "/turin", "continent": "Europe" },
  { "name": "Utrecht", "country": "Netherlands", "path": "/utrecht", "continent": "Europe" },
  { "name": "Valencia", "country": "Spain", "path": "/valencia", "continent": "Europe" },
  { "name": "Valparaiso", "country": "Chile", "path": "/valparaiso", "continent": "South America" },
  { "name": "Victoria", "country": "Seychelles", "path": "/victoria", "continent": "Africa" },
  { "name": "Vilnius", "country": "Lithuania", "path": "/vilnius", "continent": "Europe" },
  { "name": "Warsaw", "country": "Poland", "path": "/warsaw", "continent": "Europe" },
  { "name": "Wellington", "country": "New Zealand", "path": "/wellington", "continent": "Oceania" },
  { "name": "Windhoek", "country": "Namibia", "path": "/windhoek", "continent": "Africa" },
  { "name": "Winnipeg", "country": "Canada", "path": "/winnipeg", "continent": "North America" },
  { "name": "Yogyakarta", "country": "Indonesia", "path": "/yogyakarta", "continent": "Asia" },
  { "name": "Zagreb", "country": "Croatia", "path": "/zagreb", "continent": "Europe" },
  { "name": "Zaragoza", "country": "Spain", "path": "/zaragoza", "continent": "Europe" }
];

const continents = ["All", "Europe", "Asia", "Oceania", "Africa", "North America", "South America"];

export const CityDirectory = () => {
  const [selectedContinent, setSelectedContinent] = useState("All");

  const filteredCities = selectedContinent === "All" 
    ? cities 
    : cities.filter(city => city.continent === selectedContinent);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4 sm:px-0">
            Explore Our City Guides
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Discover comprehensive travel guides for 152+ amazing cities worldwide. 
            Each guide features TripAdvisor-style layouts with attractions, logistics, and local insights.
          </p>
          
          {/* Continent Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8 px-4 sm:px-0">
            {continents.map((continent) => (
              <Button
                key={continent}
                variant={selectedContinent === continent ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedContinent(continent)}
                className="transition-all duration-200 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 h-8 sm:h-9"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredCities.map((city, index) => (
            <a key={city.path} href={city.path}>
              <Card 
                className="group overflow-hidden border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card h-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-xs sm:text-sm leading-tight truncate">
                        {city.name}
                      </h3>
                      <p className="text-xs text-muted-foreground truncate">
                        {city.country}
                      </p>
                    </div>
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-1 sm:ml-2" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full truncate max-w-[80px] sm:max-w-none">
                      {city.continent}
                    </span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-muted/30 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              More Cities Coming Soon
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md mx-auto px-4 sm:px-0">
              We're constantly adding new destinations to help you discover amazing places around the world.
            </p>
            <Button variant="default" size="lg" className="text-sm sm:text-base">
              Request a City Guide
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};