import { useState } from 'react';
import { MapPin, ArrowRight, Star, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const cities = [
  { "name": "Aarhus", "country": "Denmark", "path": "/best-things-to-do-in-aarhus", "continent": "Europe" },
  { "name": "Accra", "country": "Ghana", "path": "/best-things-to-do-in-accra", "continent": "Africa" },
  { "name": "Addis Ababa", "country": "Ethiopia", "path": "/best-things-to-do-in-addis-ababa", "continent": "Africa" },
  { "name": "Adelaide", "country": "Australia", "path": "/best-things-to-do-in-adelaide", "continent": "Oceania" },
  { "name": "Ahmedabad", "country": "India", "path": "/best-things-to-do-in-ahmedabad", "continent": "Asia" },
  { "name": "Albuquerque", "country": "United States", "path": "/best-things-to-do-in-albuquerque", "continent": "North America" },
  { "name": "Algiers", "country": "Algeria", "path": "/best-things-to-do-in-algiers", "continent": "Africa" },
  { "name": "Alice Springs", "country": "Australia", "path": "/best-things-to-do-in-alice-springs", "continent": "Oceania" },
  { "name": "Antwerp", "country": "Belgium", "path": "/best-things-to-do-in-antwerp", "continent": "Europe" },
  { "name": "Arequipa", "country": "Peru", "path": "/best-things-to-do-in-arequipa", "continent": "South America" },
  { "name": "Asunción", "country": "Paraguay", "path": "/best-things-to-do-in-asuncin", "continent": "South America" },
  { "name": "Asuncion", "country": "Paraguay", "path": "/best-things-to-do-in-asuncion", "continent": "South America" },
  { "name": "Auckland", "country": "New Zealand", "path": "/best-things-to-do-in-auckland", "continent": "Oceania" },
  { "name": "Austin", "country": "United States", "path": "/best-things-to-do-in-austin", "continent": "North America" },
  { "name": "Bandung", "country": "Indonesia", "path": "/best-things-to-do-in-bandung", "continent": "Asia" },
  { "name": "Barranquilla", "country": "Colombia", "path": "/best-things-to-do-in-barranquilla", "continent": "South America" },
  { "name": "Belgrade", "country": "Serbia", "path": "/best-things-to-do-in-belgrade", "continent": "Europe" },
  { "name": "Belo Horizonte", "country": "Brazil", "path": "/best-things-to-do-in-belo-horizonte", "continent": "South America" },
  { "name": "Bergen", "country": "Norway", "path": "/best-things-to-do-in-bergen", "continent": "Europe" },
  { "name": "Bilbao", "country": "Spain", "path": "/best-things-to-do-in-bilbao", "continent": "Europe" },
  { "name": "Bologna", "country": "Italy", "path": "/best-things-to-do-in-bologna", "continent": "Europe" },
  { "name": "Bordeaux", "country": "France", "path": "/best-things-to-do-in-bordeaux", "continent": "Europe" },
  { "name": "Bratislava", "country": "Slovakia", "path": "/best-things-to-do-in-bratislava", "continent": "Europe" },
  { "name": "Brisbane", "country": "Australia", "path": "/best-things-to-do-in-brisbane", "continent": "Oceania" },
  { "name": "Brno", "country": "Czech Republic", "path": "/best-things-to-do-in-brno", "continent": "Europe" },
  { "name": "Broome", "country": "Australia", "path": "/best-things-to-do-in-broome", "continent": "Oceania" },
  { "name": "Bucharest", "country": "Romania", "path": "/best-things-to-do-in-bucharest", "continent": "Europe" },
  { "name": "Busan", "country": "South Korea", "path": "/best-things-to-do-in-busan", "continent": "Asia" },
  { "name": "Cairns", "country": "Australia", "path": "/best-things-to-do-in-cairns", "continent": "Oceania" },
  { "name": "Cairo", "country": "Egypt", "path": "/best-things-to-do-in-cairo", "continent": "Africa" },
  { "name": "Calgary", "country": "Canada", "path": "/best-things-to-do-in-calgary", "continent": "North America" },
  { "name": "Cali", "country": "Colombia", "path": "/best-things-to-do-in-cali", "continent": "South America" },
  { "name": "Cape Town", "country": "South Africa", "path": "/best-things-to-do-in-cape-town", "continent": "Africa" },
  { "name": "Cartagena", "country": "Colombia", "path": "/best-things-to-do-in-cartagena", "continent": "South America" },
  { "name": "Casablanca", "country": "Morocco", "path": "/best-things-to-do-in-casablanca", "continent": "Africa" },
  { "name": "Cebu", "country": "Philippines", "path": "/best-things-to-do-in-cebu", "continent": "Asia" },
  { "name": "Charleston", "country": "United States", "path": "/best-things-to-do-in-charleston", "continent": "North America" },
  { "name": "Chiang Mai", "country": "Thailand", "path": "/best-things-to-do-in-chiang-mai", "continent": "Asia" },
  { "name": "Christchurch", "country": "New Zealand", "path": "/best-things-to-do-in-christchurch", "continent": "Oceania" },
  { "name": "Colombo", "country": "Sri Lanka", "path": "/best-things-to-do-in-colombo", "continent": "Asia" },
  { "name": "Columbus", "country": "United States", "path": "/best-things-to-do-in-columbus", "continent": "North America" },
  { "name": "Copenhagen", "country": "Denmark", "path": "/best-things-to-do-in-copenhagen", "continent": "Europe" },
  { "name": "Córdoba", "country": "Spain", "path": "/best-things-to-do-in-crdoba", "continent": "Europe" },
  { "name": "Curitiba", "country": "Brazil", "path": "/best-things-to-do-in-curitiba", "continent": "South America" },
  { "name": "Cusco", "country": "Peru", "path": "/best-things-to-do-in-cusco", "continent": "South America" },
  { "name": "Da Nang", "country": "Vietnam", "path": "/best-things-to-do-in-da-nang", "continent": "Asia" },
  { "name": "Dakar", "country": "Senegal", "path": "/best-things-to-do-in-dakar", "continent": "Africa" },
  { "name": "Dalat", "country": "Vietnam", "path": "/best-things-to-do-in-dalat", "continent": "Asia" },
  { "name": "Dar Es Salaam", "country": "Tanzania", "path": "/best-things-to-do-in-dar-es-salaam", "continent": "Africa" },
  { "name": "Darwin", "country": "Australia", "path": "/best-things-to-do-in-darwin", "continent": "Oceania" },
  { "name": "Debrecen", "country": "Hungary", "path": "/best-things-to-do-in-debrecen", "continent": "Europe" },
  { "name": "Edmonton", "country": "Canada", "path": "/best-things-to-do-in-edmonton", "continent": "North America" },
  { "name": "Fukuoka", "country": "Japan", "path": "/best-things-to-do-in-fukuoka", "continent": "Asia" },
  { "name": "Gaborone", "country": "Botswana", "path": "/best-things-to-do-in-gaborone", "continent": "Africa" },
  { "name": "Gdansk", "country": "Poland", "path": "/best-things-to-do-in-gdansk", "continent": "Europe" },
  { "name": "Genoa", "country": "Italy", "path": "/best-things-to-do-in-genoa", "continent": "Europe" },
  { "name": "Ghent", "country": "Belgium", "path": "/best-things-to-do-in-ghent", "continent": "Europe" },
  { "name": "Gold Coast", "country": "Australia", "path": "/best-things-to-do-in-gold-coast", "continent": "Oceania" },
  { "name": "Gothenburg", "country": "Sweden", "path": "/best-things-to-do-in-gothenburg", "continent": "Europe" },
  { "name": "Guadalajara", "country": "Mexico", "path": "/best-things-to-do-in-guadalajara", "continent": "North America" },
  { "name": "Guatemala City", "country": "Guatemala", "path": "/best-things-to-do-in-guatemala-city", "continent": "North America" },
  { "name": "Guayaquil", "country": "Ecuador", "path": "/best-things-to-do-in-guayaquil", "continent": "South America" },
  { "name": "Halifax", "country": "Canada", "path": "/best-things-to-do-in-halifax", "continent": "North America" },
  { "name": "Hanoi", "country": "Vietnam", "path": "/best-things-to-do-in-hanoi", "continent": "Asia" },
  { "name": "Harare", "country": "Zimbabwe", "path": "/best-things-to-do-in-harare", "continent": "Africa" },
  { "name": "Havana", "country": "Cuba", "path": "/best-things-to-do-in-havana", "continent": "North America" },
  { "name": "Helsinki", "country": "Finland", "path": "/best-things-to-do-in-helsinki", "continent": "Europe" },
  { "name": "Hobart", "country": "Australia", "path": "/best-things-to-do-in-hobart", "continent": "Oceania" },
  { "name": "Hoi An", "country": "Vietnam", "path": "/best-things-to-do-in-hoi-an", "continent": "Asia" },
  { "name": "Indianapolis", "country": "United States", "path": "/best-things-to-do-in-indianapolis", "continent": "North America" },
  { "name": "Ipoh", "country": "Malaysia", "path": "/best-things-to-do-in-ipoh", "continent": "Asia" },
  { "name": "Jaipur", "country": "India", "path": "/best-things-to-do-in-jaipur", "continent": "Asia" },
  { "name": "Johannesburg", "country": "South Africa", "path": "/best-things-to-do-in-johannesburg", "continent": "Africa" },
  { "name": "Kampala", "country": "Uganda", "path": "/best-things-to-do-in-kampala", "continent": "Africa" },
  { "name": "Kansas City", "country": "United States", "path": "/best-things-to-do-in-kansas-city", "continent": "North America" },
  { "name": "Kathmandu", "country": "Nepal", "path": "/best-things-to-do-in-kathmandu", "continent": "Asia" },
  { "name": "Kigali", "country": "Rwanda", "path": "/best-things-to-do-in-kigali", "continent": "Africa" },
  { "name": "Kingston", "country": "Jamaica", "path": "/best-things-to-do-in-kingston", "continent": "North America" },
  { "name": "Krakow", "country": "Poland", "path": "/best-things-to-do-in-krakow", "continent": "Europe" },
  { "name": "La Paz", "country": "Bolivia", "path": "/best-things-to-do-in-la-paz", "continent": "South America" },
  { "name": "Lagos", "country": "Nigeria", "path": "/best-things-to-do-in-lagos", "continent": "Africa" },
  { "name": "Lahore", "country": "Pakistan", "path": "/best-things-to-do-in-lahore", "continent": "Asia" },
  { "name": "Ljubljana", "country": "Slovenia", "path": "/best-things-to-do-in-ljubljana", "continent": "Europe" },
  { "name": "Luanda", "country": "Angola", "path": "/best-things-to-do-in-luanda", "continent": "Africa" },
  { "name": "Luang Prabang", "country": "Laos", "path": "/best-things-to-do-in-luang-prabang", "continent": "Asia" },
  { "name": "Lusaka", "country": "Zambia", "path": "/best-things-to-do-in-lusaka", "continent": "Africa" },
  { "name": "Lyon", "country": "France", "path": "/best-things-to-do-in-lyon", "continent": "Europe" },
  { "name": "Malacca", "country": "Malaysia", "path": "/best-things-to-do-in-malacca", "continent": "Asia" },
  { "name": "Malaga", "country": "Spain", "path": "/best-things-to-do-in-malaga", "continent": "Europe" },
  { "name": "Malmö", "country": "Sweden", "path": "/best-things-to-do-in-malm", "continent": "Europe" },
  { "name": "Manaus", "country": "Brazil", "path": "/best-things-to-do-in-manaus", "continent": "South America" },
  { "name": "Maputo", "country": "Mozambique", "path": "/best-things-to-do-in-maputo", "continent": "Africa" },
  { "name": "Maracaibo", "country": "Venezuela", "path": "/best-things-to-do-in-maracaibo", "continent": "South America" },
  { "name": "Marrakech", "country": "Morocco", "path": "/best-things-to-do-in-marrakech", "continent": "Africa" },
  { "name": "Marseille", "country": "France", "path": "/best-things-to-do-in-marseille", "continent": "Europe" },
  { "name": "Medellin", "country": "Colombia", "path": "/best-things-to-do-in-medellin", "continent": "South America" },
  { "name": "Milwaukee", "country": "United States", "path": "/best-things-to-do-in-milwaukee", "continent": "North America" },
  { "name": "Montevideo", "country": "Uruguay", "path": "/best-things-to-do-in-montevideo", "continent": "South America" },
  { "name": "Nairobi", "country": "Kenya", "path": "/best-things-to-do-in-nairobi", "continent": "Africa" },
  { "name": "Nashville", "country": "United States", "path": "/best-things-to-do-in-nashville", "continent": "North America" },
  { "name": "New Orleans", "country": "United States", "path": "/best-things-to-do-in-new-orleans", "continent": "North America" },
  { "name": "Nice", "country": "France", "path": "/best-things-to-do-in-nice", "continent": "Europe" },
  { "name": "Nouméa", "country": "New Caledonia", "path": "/best-things-to-do-in-nouma", "continent": "Oceania" },
  { "name": "Oaxaca", "country": "Mexico", "path": "/best-things-to-do-in-oaxaca", "continent": "North America" },
  { "name": "Oslo", "country": "Norway", "path": "/best-things-to-do-in-oslo", "continent": "Europe" },
  { "name": "Ottawa", "country": "Canada", "path": "/best-things-to-do-in-ottawa", "continent": "North America" },
  { "name": "Palermo", "country": "Italy", "path": "/best-things-to-do-in-palermo", "continent": "Europe" },
  { "name": "Panama City", "country": "Panama", "path": "/best-things-to-do-in-panama-city", "continent": "North America" },
  { "name": "Papeete", "country": "French Polynesia", "path": "/best-things-to-do-in-papeete", "continent": "Oceania" },
  { "name": "Penang", "country": "Malaysia", "path": "/best-things-to-do-in-penang", "continent": "Asia" },
  { "name": "Perth", "country": "Australia", "path": "/best-things-to-do-in-perth", "continent": "Oceania" },
  { "name": "Port Moresby", "country": "Papua New Guinea", "path": "/best-things-to-do-in-port-moresby", "continent": "Oceania" },
  { "name": "Portland", "country": "United States", "path": "/best-things-to-do-in-portland", "continent": "North America" },
  { "name": "Porto", "country": "Portugal", "path": "/best-things-to-do-in-porto", "continent": "Europe" },
  { "name": "Quebec City", "country": "Canada", "path": "/best-things-to-do-in-quebec-city", "continent": "North America" },
  { "name": "Queenstown", "country": "New Zealand", "path": "/best-things-to-do-in-queenstown", "continent": "Oceania" },
  { "name": "Quito", "country": "Ecuador", "path": "/best-things-to-do-in-quito", "continent": "South America" },
  { "name": "Reykjavik", "country": "Iceland", "path": "/best-things-to-do-in-reykjavik", "continent": "Europe" },
  { "name": "Riga", "country": "Latvia", "path": "/best-things-to-do-in-riga", "continent": "Europe" },
  { "name": "Rosario", "country": "Argentina", "path": "/best-things-to-do-in-rosario", "continent": "South America" },
  { "name": "Sacramento", "country": "United States", "path": "/best-things-to-do-in-sacramento", "continent": "North America" },
  { "name": "Salt Lake City", "country": "United States", "path": "/best-things-to-do-in-salt-lake-city", "continent": "North America" },
  { "name": "Salvador", "country": "Brazil", "path": "/best-things-to-do-in-salvador", "continent": "South America" },
  { "name": "San Antonio", "country": "United States", "path": "/best-things-to-do-in-san-antonio", "continent": "North America" },
  { "name": "San Jose", "country": "Costa Rica", "path": "/best-things-to-do-in-san-jose", "continent": "North America" },
  { "name": "San Juan", "country": "Puerto Rico", "path": "/best-things-to-do-in-san-juan", "continent": "North America" },
  { "name": "Savannah", "country": "United States", "path": "/best-things-to-do-in-savannah", "continent": "North America" },
  { "name": "Seville", "country": "Spain", "path": "/best-things-to-do-in-seville", "continent": "Europe" },
  { "name": "Siem Reap", "country": "Cambodia", "path": "/best-things-to-do-in-siem-reap", "continent": "Asia" },
  { "name": "Sofia", "country": "Bulgaria", "path": "/best-things-to-do-in-sofia", "continent": "Europe" },
  { "name": "Stockholm", "country": "Sweden", "path": "/best-things-to-do-in-stockholm", "continent": "Europe" },
  { "name": "Strasbourg", "country": "France", "path": "/best-things-to-do-in-strasbourg", "continent": "Europe" },
  { "name": "Sucre", "country": "Bolivia", "path": "/best-things-to-do-in-sucre", "continent": "South America" },
  { "name": "Surabaya", "country": "Indonesia", "path": "/best-things-to-do-in-surabaya", "continent": "Asia" },
  { "name": "Suva", "country": "Fiji", "path": "/best-things-to-do-in-suva", "continent": "Oceania" },
  { "name": "Tallinn", "country": "Estonia", "path": "/best-things-to-do-in-tallinn", "continent": "Europe" },
  { "name": "Tampere", "country": "Finland", "path": "/best-things-to-do-in-tampere", "continent": "Europe" },
  { "name": "The Hague", "country": "Netherlands", "path": "/best-things-to-do-in-the-hague", "continent": "Europe" },
  { "name": "Thessaloniki", "country": "Greece", "path": "/best-things-to-do-in-thessaloniki", "continent": "Europe" },
  { "name": "Tokyo", "country": "Japan", "path": "/best-things-to-do-in-tokyo", "continent": "Asia" },
  { "name": "Tunis", "country": "Tunisia", "path": "/best-things-to-do-in-tunis", "continent": "Africa" },
  { "name": "Turin", "country": "Italy", "path": "/best-things-to-do-in-turin", "continent": "Europe" },
  { "name": "Utrecht", "country": "Netherlands", "path": "/best-things-to-do-in-utrecht", "continent": "Europe" },
  { "name": "Valencia", "country": "Spain", "path": "/best-things-to-do-in-valencia", "continent": "Europe" },
  { "name": "Valparaiso", "country": "Chile", "path": "/best-things-to-do-in-valparaiso", "continent": "South America" },
  { "name": "Victoria", "country": "Seychelles", "path": "/best-things-to-do-in-victoria", "continent": "Africa" },
  { "name": "Vilnius", "country": "Lithuania", "path": "/best-things-to-do-in-vilnius", "continent": "Europe" },
  { "name": "Warsaw", "country": "Poland", "path": "/best-things-to-do-in-warsaw", "continent": "Europe" },
  { "name": "Wellington", "country": "New Zealand", "path": "/best-things-to-do-in-wellington", "continent": "Oceania" },
  { "name": "Windhoek", "country": "Namibia", "path": "/best-things-to-do-in-windhoek", "continent": "Africa" },
  { "name": "Winnipeg", "country": "Canada", "path": "/best-things-to-do-in-winnipeg", "continent": "North America" },
  { "name": "Yogyakarta", "country": "Indonesia", "path": "/best-things-to-do-in-yogyakarta", "continent": "Asia" },
  { "name": "Zagreb", "country": "Croatia", "path": "/best-things-to-do-in-zagreb", "continent": "Europe" },
  { "name": "Zaragoza", "country": "Spain", "path": "/best-things-to-do-in-zaragoza", "continent": "Europe" },
  { "name": "Dubai", "country": "UAE", "path": "/best-things-to-do-in-dubai", "continent": "Asia" },
  { "name": "New York", "country": "USA", "path": "/best-things-to-do-in-new-york", "continent": "North America" },
  { "name": "Male'", "country": "Maldives", "path": "/best-things-to-do-in-male'", "continent": "Asia" },
  { "name": "TestCity", "country": "TestCountry", "path": "/best-things-to-do-in-testcity", "continent": "" },
  { "name": "Berlin", "country": "Germany", "path": "/best-things-to-do-in-berlin", "continent": "Europe" },
  { "name": "Dhaandhoo", "country": "Maldives", "path": "/best-things-to-do-in-dhaandhoo", "continent": "Asia" },
  { "name": "Boston", "country": "USA", "path": "/best-things-to-do-in-boston", "continent": "North America" },
  { "name": "Chicago", "country": "USA", "path": "/best-things-to-do-in-chicago", "continent": "North America" },
  { "name": "Trivandrum", "country": "India", "path": "/best-things-to-do-in-trivandrum", "continent": "Asia" },
  { "name": "Zurich", "country": "Switzerland", "path": "/zurich", "continent": "Europe" }
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