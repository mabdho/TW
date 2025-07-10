import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, Search, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

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
  { "name": "Dubai", "country": "UAE", "path": "/dubai", "continent": "Asia" },
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
  { "name": "Male'", "country": "Maldives", "path": "/male'", "continent": "Asia" },
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
  { "name": "New York", "country": "USA", "path": "/new-york", "continent": "North America" },
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
  { "name": "Zaragoza", "country": "Spain", "path": "/zaragoza", "continent": "Europe" },
  { "name": "Berlin", "country": "Germany", "path": "/berlin", "continent": "Europe" }
];

const continents = ["All", "Europe", "Asia", "Oceania", "Africa", "North America", "South America"];

export default function DestinationsPage() {
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

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
                  <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500 overflow-hidden rounded-t-lg">
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