import { useState } from 'react';
import { Search, MapPin, Star, Users, Globe, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// List of all cities for search functionality
const cities = [
  { "name": "Aarhus", "country": "Denmark", "path": "/aarhus" },
  { "name": "Accra", "country": "Ghana", "path": "/accra" },
  { "name": "Addis Ababa", "country": "Ethiopia", "path": "/addis-ababa" },
  { "name": "Adelaide", "country": "Australia", "path": "/adelaide" },
  { "name": "Ahmedabad", "country": "India", "path": "/ahmedabad" },
  { "name": "Albuquerque", "country": "United States", "path": "/albuquerque" },
  { "name": "Algiers", "country": "Algeria", "path": "/algiers" },
  { "name": "Alice Springs", "country": "Australia", "path": "/alice-springs" },
  { "name": "Antwerp", "country": "Belgium", "path": "/antwerp" },
  { "name": "Arequipa", "country": "Peru", "path": "/arequipa" },
  { "name": "Asunción", "country": "Paraguay", "path": "/asuncin" },
  { "name": "Asuncion", "country": "Paraguay", "path": "/asuncion" },
  { "name": "Auckland", "country": "New Zealand", "path": "/auckland" },
  { "name": "Austin", "country": "United States", "path": "/austin" },
  { "name": "Bandung", "country": "Indonesia", "path": "/bandung" },
  { "name": "Barranquilla", "country": "Colombia", "path": "/barranquilla" },
  { "name": "Belgrade", "country": "Serbia", "path": "/belgrade" },
  { "name": "Belo Horizonte", "country": "Brazil", "path": "/belo-horizonte" },
  { "name": "Bergen", "country": "Norway", "path": "/bergen" },
  { "name": "Bilbao", "country": "Spain", "path": "/bilbao" },
  { "name": "Bologna", "country": "Italy", "path": "/bologna" },
  { "name": "Bordeaux", "country": "France", "path": "/bordeaux" },
  { "name": "Bratislava", "country": "Slovakia", "path": "/bratislava" },
  { "name": "Brisbane", "country": "Australia", "path": "/brisbane" },
  { "name": "Brno", "country": "Czech Republic", "path": "/brno" },
  { "name": "Broome", "country": "Australia", "path": "/broome" },
  { "name": "Bucharest", "country": "Romania", "path": "/bucharest" },
  { "name": "Busan", "country": "South Korea", "path": "/busan" },
  { "name": "Cairns", "country": "Australia", "path": "/cairns" },
  { "name": "Cairo", "country": "Egypt", "path": "/cairo" },
  { "name": "Calgary", "country": "Canada", "path": "/calgary" },
  { "name": "Cali", "country": "Colombia", "path": "/cali" },
  { "name": "Cape Town", "country": "South Africa", "path": "/cape-town" },
  { "name": "Cartagena", "country": "Colombia", "path": "/cartagena" },
  { "name": "Casablanca", "country": "Morocco", "path": "/casablanca" },
  { "name": "Cebu", "country": "Philippines", "path": "/cebu" },
  { "name": "Charleston", "country": "United States", "path": "/charleston" },
  { "name": "Chiang Mai", "country": "Thailand", "path": "/chiang-mai" },
  { "name": "Christchurch", "country": "New Zealand", "path": "/christchurch" },
  { "name": "Colombo", "country": "Sri Lanka", "path": "/colombo" },
  { "name": "Columbus", "country": "United States", "path": "/columbus" },
  { "name": "Copenhagen", "country": "Denmark", "path": "/copenhagen" },
  { "name": "Córdoba", "country": "Spain", "path": "/crdoba" },
  { "name": "Curitiba", "country": "Brazil", "path": "/curitiba" },
  { "name": "Cusco", "country": "Peru", "path": "/cusco" },
  { "name": "Da Nang", "country": "Vietnam", "path": "/da-nang" },
  { "name": "Dakar", "country": "Senegal", "path": "/dakar" },
  { "name": "Dalat", "country": "Vietnam", "path": "/dalat" },
  { "name": "Dar Es Salaam", "country": "Tanzania", "path": "/dar-es-salaam" },
  { "name": "Darwin", "country": "Australia", "path": "/darwin" },
  { "name": "Debrecen", "country": "Hungary", "path": "/debrecen" },
  { "name": "Dubai", "country": "UAE", "path": "/dubai" },
  { "name": "Edmonton", "country": "Canada", "path": "/edmonton" },
  { "name": "Fukuoka", "country": "Japan", "path": "/fukuoka" },
  { "name": "Gaborone", "country": "Botswana", "path": "/gaborone" },
  { "name": "Gdansk", "country": "Poland", "path": "/gdansk" },
  { "name": "Genoa", "country": "Italy", "path": "/genoa" },
  { "name": "Ghent", "country": "Belgium", "path": "/ghent" },
  { "name": "Gold Coast", "country": "Australia", "path": "/gold-coast" },
  { "name": "Gothenburg", "country": "Sweden", "path": "/gothenburg" },
  { "name": "Guadalajara", "country": "Mexico", "path": "/guadalajara" },
  { "name": "Guatemala City", "country": "Guatemala", "path": "/guatemala-city" },
  { "name": "Guayaquil", "country": "Ecuador", "path": "/guayaquil" },
  { "name": "Halifax", "country": "Canada", "path": "/halifax" },
  { "name": "Hanoi", "country": "Vietnam", "path": "/hanoi" },
  { "name": "Harare", "country": "Zimbabwe", "path": "/harare" },
  { "name": "Havana", "country": "Cuba", "path": "/havana" },
  { "name": "Helsinki", "country": "Finland", "path": "/helsinki" },
  { "name": "Hobart", "country": "Australia", "path": "/hobart" },
  { "name": "Hoi An", "country": "Vietnam", "path": "/hoi-an" },
  { "name": "Indianapolis", "country": "United States", "path": "/indianapolis" },
  { "name": "Ipoh", "country": "Malaysia", "path": "/ipoh" },
  { "name": "Jaipur", "country": "India", "path": "/jaipur" },
  { "name": "Johannesburg", "country": "South Africa", "path": "/johannesburg" },
  { "name": "Kampala", "country": "Uganda", "path": "/kampala" },
  { "name": "Kansas City", "country": "United States", "path": "/kansas-city" },
  { "name": "Kathmandu", "country": "Nepal", "path": "/kathmandu" },
  { "name": "Kigali", "country": "Rwanda", "path": "/kigali" },
  { "name": "Kingston", "country": "Jamaica", "path": "/kingston" },
  { "name": "Krakow", "country": "Poland", "path": "/krakow" },
  { "name": "La Paz", "country": "Bolivia", "path": "/la-paz" },
  { "name": "Lagos", "country": "Nigeria", "path": "/lagos" },
  { "name": "Lahore", "country": "Pakistan", "path": "/lahore" },
  { "name": "Ljubljana", "country": "Slovenia", "path": "/ljubljana" },
  { "name": "Luanda", "country": "Angola", "path": "/luanda" },
  { "name": "Luang Prabang", "country": "Laos", "path": "/luang-prabang" },
  { "name": "Lusaka", "country": "Zambia", "path": "/lusaka" },
  { "name": "Lyon", "country": "France", "path": "/lyon" },
  { "name": "Malacca", "country": "Malaysia", "path": "/malacca" },
  { "name": "Malaga", "country": "Spain", "path": "/malaga" },
  { "name": "Male'", "country": "Maldives", "path": "/male'" },
  { "name": "Malmö", "country": "Sweden", "path": "/malm" },
  { "name": "Manaus", "country": "Brazil", "path": "/manaus" },
  { "name": "Maputo", "country": "Mozambique", "path": "/maputo" },
  { "name": "Maracaibo", "country": "Venezuela", "path": "/maracaibo" },
  { "name": "Marrakech", "country": "Morocco", "path": "/marrakech" },
  { "name": "Marseille", "country": "France", "path": "/marseille" },
  { "name": "Medellin", "country": "Colombia", "path": "/medellin" },
  { "name": "Milwaukee", "country": "United States", "path": "/milwaukee" },
  { "name": "Montevideo", "country": "Uruguay", "path": "/montevideo" },
  { "name": "Nairobi", "country": "Kenya", "path": "/nairobi" },
  { "name": "Nashville", "country": "United States", "path": "/nashville" },
  { "name": "New Orleans", "country": "United States", "path": "/new-orleans" },
  { "name": "New York", "country": "USA", "path": "/new-york" },
  { "name": "Nice", "country": "France", "path": "/nice" },
  { "name": "Nouméa", "country": "New Caledonia", "path": "/nouma" },
  { "name": "Oaxaca", "country": "Mexico", "path": "/oaxaca" },
  { "name": "Oslo", "country": "Norway", "path": "/oslo" },
  { "name": "Ottawa", "country": "Canada", "path": "/ottawa" },
  { "name": "Palermo", "country": "Italy", "path": "/palermo" },
  { "name": "Panama City", "country": "Panama", "path": "/panama-city" },
  { "name": "Papeete", "country": "French Polynesia", "path": "/papeete" },
  { "name": "Penang", "country": "Malaysia", "path": "/penang" },
  { "name": "Perth", "country": "Australia", "path": "/perth" },
  { "name": "Port Moresby", "country": "Papua New Guinea", "path": "/port-moresby" },
  { "name": "Portland", "country": "United States", "path": "/portland" },
  { "name": "Porto", "country": "Portugal", "path": "/porto" },
  { "name": "Quebec City", "country": "Canada", "path": "/quebec-city" },
  { "name": "Queenstown", "country": "New Zealand", "path": "/queenstown" },
  { "name": "Quito", "country": "Ecuador", "path": "/quito" },
  { "name": "Reykjavik", "country": "Iceland", "path": "/reykjavik" },
  { "name": "Riga", "country": "Latvia", "path": "/riga" },
  { "name": "Rosario", "country": "Argentina", "path": "/rosario" },
  { "name": "Sacramento", "country": "United States", "path": "/sacramento" },
  { "name": "Salt Lake City", "country": "United States", "path": "/salt-lake-city" },
  { "name": "Salvador", "country": "Brazil", "path": "/salvador" },
  { "name": "San Antonio", "country": "United States", "path": "/san-antonio" },
  { "name": "San Jose", "country": "Costa Rica", "path": "/san-jose" },
  { "name": "San Juan", "country": "Puerto Rico", "path": "/san-juan" },
  { "name": "Savannah", "country": "United States", "path": "/savannah" },
  { "name": "Seville", "country": "Spain", "path": "/seville" },
  { "name": "Siem Reap", "country": "Cambodia", "path": "/siem-reap" },
  { "name": "Sofia", "country": "Bulgaria", "path": "/sofia" },
  { "name": "Stockholm", "country": "Sweden", "path": "/stockholm" },
  { "name": "Strasbourg", "country": "France", "path": "/strasbourg" },
  { "name": "Sucre", "country": "Bolivia", "path": "/sucre" },
  { "name": "Surabaya", "country": "Indonesia", "path": "/surabaya" },
  { "name": "Suva", "country": "Fiji", "path": "/suva" },
  { "name": "Tallinn", "country": "Estonia", "path": "/tallinn" },
  { "name": "Tampere", "country": "Finland", "path": "/tampere" },
  { "name": "The Hague", "country": "Netherlands", "path": "/the-hague" },
  { "name": "Thessaloniki", "country": "Greece", "path": "/thessaloniki" },
  { "name": "Tokyo", "country": "Japan", "path": "/tokyo" },
  { "name": "Tunis", "country": "Tunisia", "path": "/tunis" },
  { "name": "Turin", "country": "Italy", "path": "/turin" },
  { "name": "Utrecht", "country": "Netherlands", "path": "/utrecht" },
  { "name": "Valencia", "country": "Spain", "path": "/valencia" },
  { "name": "Valparaiso", "country": "Chile", "path": "/valparaiso" },
  { "name": "Victoria", "country": "Seychelles", "path": "/victoria" },
  { "name": "Vilnius", "country": "Lithuania", "path": "/vilnius" },
  { "name": "Warsaw", "country": "Poland", "path": "/warsaw" },
  { "name": "Wellington", "country": "New Zealand", "path": "/wellington" },
  { "name": "Windhoek", "country": "Namibia", "path": "/windhoek" },
  { "name": "Winnipeg", "country": "Canada", "path": "/winnipeg" },
  { "name": "Yogyakarta", "country": "Indonesia", "path": "/yogyakarta" },
  { "name": "Zagreb", "country": "Croatia", "path": "/zagreb" },
  { "name": "Zaragoza", "country": "Spain", "path": "/zaragoza" }
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
              <Star className="w-4 h-4 mr-2 fill-current" />
              Trusted by millions of travelers
            </Badge>
          </div>

          {/* Modern headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Explore the world with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
              confidence
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get trusted reviews, insider tips, and comprehensive guides for 158+ destinations worldwide.
          </p>

          {/* Functional search bar */}
          <div id="search-section" className="bg-white rounded-2xl p-3 shadow-lg border border-gray-200 max-w-2xl mx-auto mb-16 relative">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onKeyPress={handleKeyPress}
                  onFocus={() => setShowSuggestions(searchTerm.length > 0)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Search destinations (e.g., Tokyo, Paris, New York)" 
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
                        <MapPin className="h-4 w-4 text-gray-400" />
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
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Clean stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">158+</div>
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