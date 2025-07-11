import { useState } from 'react';
import { Search, MapPin, Star, Users, Globe, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// List of all cities for search functionality with SEO-friendly URLs
const cities = [
  { "name": "Aarhus", "country": "Denmark", "path": "/best-things-to-do-in-aarhus" },
  { "name": "Accra", "country": "Ghana", "path": "/best-things-to-do-in-accra" },
  { "name": "Addis Ababa", "country": "Ethiopia", "path": "/best-things-to-do-in-addis-ababa" },
  { "name": "Adelaide", "country": "Australia", "path": "/best-things-to-do-in-adelaide" },
  { "name": "Ahmedabad", "country": "India", "path": "/best-things-to-do-in-ahmedabad" },
  { "name": "Albuquerque", "country": "United States", "path": "/best-things-to-do-in-albuquerque" },
  { "name": "Algiers", "country": "Algeria", "path": "/best-things-to-do-in-algiers" },
  { "name": "Alice Springs", "country": "Australia", "path": "/best-things-to-do-in-alice-springs" },
  { "name": "Antwerp", "country": "Belgium", "path": "/best-things-to-do-in-antwerp" },
  { "name": "Arequipa", "country": "Peru", "path": "/best-things-to-do-in-arequipa" },
  { "name": "Asunción", "country": "Paraguay", "path": "/best-things-to-do-in-asuncin" },
  { "name": "Asuncion", "country": "Paraguay", "path": "/best-things-to-do-in-asuncion" },
  { "name": "Auckland", "country": "New Zealand", "path": "/best-things-to-do-in-auckland" },
  { "name": "Austin", "country": "United States", "path": "/best-things-to-do-in-austin" },
  { "name": "Bandung", "country": "Indonesia", "path": "/best-things-to-do-in-bandung" },
  { "name": "Barranquilla", "country": "Colombia", "path": "/best-things-to-do-in-barranquilla" },
  { "name": "Belgrade", "country": "Serbia", "path": "/best-things-to-do-in-belgrade" },
  { "name": "Belo Horizonte", "country": "Brazil", "path": "/best-things-to-do-in-belo-horizonte" },
  { "name": "Bergen", "country": "Norway", "path": "/best-things-to-do-in-bergen" },
  { "name": "Berlin", "country": "Germany", "path": "/best-things-to-do-in-berlin" },
  { "name": "Bilbao", "country": "Spain", "path": "/best-things-to-do-in-bilbao" },
  { "name": "Bologna", "country": "Italy", "path": "/best-things-to-do-in-bologna" },
  { "name": "Bordeaux", "country": "France", "path": "/best-things-to-do-in-bordeaux" },
  { "name": "Boston", "country": "USA", "path": "/best-things-to-do-in-boston" },
  { "name": "Bratislava", "country": "Slovakia", "path": "/best-things-to-do-in-bratislava" },
  { "name": "Brisbane", "country": "Australia", "path": "/best-things-to-do-in-brisbane" },
  { "name": "Brno", "country": "Czech Republic", "path": "/best-things-to-do-in-brno" },
  { "name": "Broome", "country": "Australia", "path": "/best-things-to-do-in-broome" },
  { "name": "Bucharest", "country": "Romania", "path": "/best-things-to-do-in-bucharest" },
  { "name": "Busan", "country": "South Korea", "path": "/best-things-to-do-in-busan" },
  { "name": "Cairns", "country": "Australia", "path": "/best-things-to-do-in-cairns" },
  { "name": "Cairo", "country": "Egypt", "path": "/best-things-to-do-in-cairo" },
  { "name": "Calgary", "country": "Canada", "path": "/best-things-to-do-in-calgary" },
  { "name": "Cali", "country": "Colombia", "path": "/best-things-to-do-in-cali" },
  { "name": "Cape Town", "country": "South Africa", "path": "/best-things-to-do-in-cape-town" },
  { "name": "Cartagena", "country": "Colombia", "path": "/best-things-to-do-in-cartagena" },
  { "name": "Casablanca", "country": "Morocco", "path": "/best-things-to-do-in-casablanca" },
  { "name": "Cebu", "country": "Philippines", "path": "/best-things-to-do-in-cebu" },
  { "name": "Charleston", "country": "United States", "path": "/best-things-to-do-in-charleston" },
  { "name": "Chiang Mai", "country": "Thailand", "path": "/best-things-to-do-in-chiang-mai" },
  { "name": "Chicago", "country": "USA", "path": "/best-things-to-do-in-chicago" },
  { "name": "Christchurch", "country": "New Zealand", "path": "/best-things-to-do-in-christchurch" },
  { "name": "Colombo", "country": "Sri Lanka", "path": "/best-things-to-do-in-colombo" },
  { "name": "Columbus", "country": "United States", "path": "/best-things-to-do-in-columbus" },
  { "name": "Copenhagen", "country": "Denmark", "path": "/best-things-to-do-in-copenhagen" },
  { "name": "Córdoba", "country": "Spain", "path": "/best-things-to-do-in-crdoba" },
  { "name": "Curitiba", "country": "Brazil", "path": "/best-things-to-do-in-curitiba" },
  { "name": "Cusco", "country": "Peru", "path": "/best-things-to-do-in-cusco" },
  { "name": "Da Nang", "country": "Vietnam", "path": "/best-things-to-do-in-da-nang" },
  { "name": "Dakar", "country": "Senegal", "path": "/best-things-to-do-in-dakar" },
  { "name": "Dalat", "country": "Vietnam", "path": "/best-things-to-do-in-dalat" },
  { "name": "Dar Es Salaam", "country": "Tanzania", "path": "/best-things-to-do-in-dar-es-salaam" },
  { "name": "Darwin", "country": "Australia", "path": "/best-things-to-do-in-darwin" },
  { "name": "Debrecen", "country": "Hungary", "path": "/best-things-to-do-in-debrecen" },
  { "name": "Dhaandhoo", "country": "Maldives", "path": "/best-things-to-do-in-dhaandhoo" },
  { "name": "Dubai", "country": "UAE", "path": "/best-things-to-do-in-dubai" },
  { "name": "Edmonton", "country": "Canada", "path": "/best-things-to-do-in-edmonton" },
  { "name": "Fukuoka", "country": "Japan", "path": "/best-things-to-do-in-fukuoka" },
  { "name": "Gaborone", "country": "Botswana", "path": "/best-things-to-do-in-gaborone" },
  { "name": "Gdansk", "country": "Poland", "path": "/best-things-to-do-in-gdansk" },
  { "name": "Genoa", "country": "Italy", "path": "/best-things-to-do-in-genoa" },
  { "name": "Ghent", "country": "Belgium", "path": "/best-things-to-do-in-ghent" },
  { "name": "Gold Coast", "country": "Australia", "path": "/best-things-to-do-in-gold-coast" },
  { "name": "Gothenburg", "country": "Sweden", "path": "/best-things-to-do-in-gothenburg" },
  { "name": "Guadalajara", "country": "Mexico", "path": "/best-things-to-do-in-guadalajara" },
  { "name": "Guatemala City", "country": "Guatemala", "path": "/best-things-to-do-in-guatemala-city" },
  { "name": "Guayaquil", "country": "Ecuador", "path": "/best-things-to-do-in-guayaquil" },
  { "name": "Halifax", "country": "Canada", "path": "/best-things-to-do-in-halifax" },
  { "name": "Hanoi", "country": "Vietnam", "path": "/best-things-to-do-in-hanoi" },
  { "name": "Harare", "country": "Zimbabwe", "path": "/best-things-to-do-in-harare" },
  { "name": "Havana", "country": "Cuba", "path": "/best-things-to-do-in-havana" },
  { "name": "Helsinki", "country": "Finland", "path": "/best-things-to-do-in-helsinki" },
  { "name": "Hobart", "country": "Australia", "path": "/best-things-to-do-in-hobart" },
  { "name": "Hoi An", "country": "Vietnam", "path": "/best-things-to-do-in-hoi-an" },
  { "name": "Indianapolis", "country": "United States", "path": "/best-things-to-do-in-indianapolis" },
  { "name": "Ipoh", "country": "Malaysia", "path": "/best-things-to-do-in-ipoh" },
  { "name": "Jaipur", "country": "India", "path": "/best-things-to-do-in-jaipur" },
  { "name": "Johannesburg", "country": "South Africa", "path": "/best-things-to-do-in-johannesburg" },
  { "name": "Kampala", "country": "Uganda", "path": "/best-things-to-do-in-kampala" },
  { "name": "Kansas City", "country": "United States", "path": "/best-things-to-do-in-kansas-city" },
  { "name": "Kathmandu", "country": "Nepal", "path": "/best-things-to-do-in-kathmandu" },
  { "name": "Kigali", "country": "Rwanda", "path": "/best-things-to-do-in-kigali" },
  { "name": "Kingston", "country": "Jamaica", "path": "/best-things-to-do-in-kingston" },
  { "name": "Krakow", "country": "Poland", "path": "/best-things-to-do-in-krakow" },
  { "name": "La Paz", "country": "Bolivia", "path": "/best-things-to-do-in-la-paz" },
  { "name": "Lagos", "country": "Nigeria", "path": "/best-things-to-do-in-lagos" },
  { "name": "Lahore", "country": "Pakistan", "path": "/best-things-to-do-in-lahore" },
  { "name": "Ljubljana", "country": "Slovenia", "path": "/best-things-to-do-in-ljubljana" },
  { "name": "Luanda", "country": "Angola", "path": "/best-things-to-do-in-luanda" },
  { "name": "Luang Prabang", "country": "Laos", "path": "/best-things-to-do-in-luang-prabang" },
  { "name": "Lusaka", "country": "Zambia", "path": "/best-things-to-do-in-lusaka" },
  { "name": "Lyon", "country": "France", "path": "/best-things-to-do-in-lyon" },
  { "name": "Malacca", "country": "Malaysia", "path": "/best-things-to-do-in-malacca" },
  { "name": "Malaga", "country": "Spain", "path": "/best-things-to-do-in-malaga" },
  { "name": "Male'", "country": "Maldives", "path": "/best-things-to-do-in-male" },
  { "name": "Malmö", "country": "Sweden", "path": "/best-things-to-do-in-malm" },
  { "name": "Manaus", "country": "Brazil", "path": "/best-things-to-do-in-manaus" },
  { "name": "Maputo", "country": "Mozambique", "path": "/best-things-to-do-in-maputo" },
  { "name": "Maracaibo", "country": "Venezuela", "path": "/best-things-to-do-in-maracaibo" },
  { "name": "Marrakech", "country": "Morocco", "path": "/best-things-to-do-in-marrakech" },
  { "name": "Marseille", "country": "France", "path": "/best-things-to-do-in-marseille" },
  { "name": "Medellin", "country": "Colombia", "path": "/best-things-to-do-in-medellin" },
  { "name": "Milwaukee", "country": "United States", "path": "/best-things-to-do-in-milwaukee" },
  { "name": "Montevideo", "country": "Uruguay", "path": "/best-things-to-do-in-montevideo" },
  { "name": "Nairobi", "country": "Kenya", "path": "/best-things-to-do-in-nairobi" },
  { "name": "Nashville", "country": "United States", "path": "/best-things-to-do-in-nashville" },
  { "name": "New Orleans", "country": "United States", "path": "/best-things-to-do-in-new-orleans" },
  { "name": "New York", "country": "USA", "path": "/best-things-to-do-in-new-york" },
  { "name": "Nice", "country": "France", "path": "/best-things-to-do-in-nice" },
  { "name": "Nouméa", "country": "New Caledonia", "path": "/best-things-to-do-in-nouma" },
  { "name": "Oaxaca", "country": "Mexico", "path": "/best-things-to-do-in-oaxaca" },
  { "name": "Oslo", "country": "Norway", "path": "/best-things-to-do-in-oslo" },
  { "name": "Ottawa", "country": "Canada", "path": "/best-things-to-do-in-ottawa" },
  { "name": "Palermo", "country": "Italy", "path": "/best-things-to-do-in-palermo" },
  { "name": "Panama City", "country": "Panama", "path": "/best-things-to-do-in-panama-city" },
  { "name": "Papeete", "country": "French Polynesia", "path": "/best-things-to-do-in-papeete" },
  { "name": "Penang", "country": "Malaysia", "path": "/best-things-to-do-in-penang" },
  { "name": "Perth", "country": "Australia", "path": "/best-things-to-do-in-perth" },
  { "name": "Port Moresby", "country": "Papua New Guinea", "path": "/best-things-to-do-in-port-moresby" },
  { "name": "Portland", "country": "United States", "path": "/best-things-to-do-in-portland" },
  { "name": "Porto", "country": "Portugal", "path": "/best-things-to-do-in-porto" },
  { "name": "Quebec City", "country": "Canada", "path": "/best-things-to-do-in-quebec-city" },
  { "name": "Queenstown", "country": "New Zealand", "path": "/best-things-to-do-in-queenstown" },
  { "name": "Quito", "country": "Ecuador", "path": "/best-things-to-do-in-quito" },
  { "name": "Reykjavik", "country": "Iceland", "path": "/best-things-to-do-in-reykjavik" },
  { "name": "Riga", "country": "Latvia", "path": "/best-things-to-do-in-riga" },
  { "name": "Rosario", "country": "Argentina", "path": "/best-things-to-do-in-rosario" },
  { "name": "Sacramento", "country": "United States", "path": "/best-things-to-do-in-sacramento" },
  { "name": "Salt Lake City", "country": "United States", "path": "/best-things-to-do-in-salt-lake-city" },
  { "name": "Salvador", "country": "Brazil", "path": "/best-things-to-do-in-salvador" },
  { "name": "San Antonio", "country": "United States", "path": "/best-things-to-do-in-san-antonio" },
  { "name": "San Jose", "country": "Costa Rica", "path": "/best-things-to-do-in-san-jose" },
  { "name": "San Juan", "country": "Puerto Rico", "path": "/best-things-to-do-in-san-juan" },
  { "name": "Savannah", "country": "United States", "path": "/best-things-to-do-in-savannah" },
  { "name": "Seville", "country": "Spain", "path": "/best-things-to-do-in-seville" },
  { "name": "Siem Reap", "country": "Cambodia", "path": "/best-things-to-do-in-siem-reap" },
  { "name": "Sofia", "country": "Bulgaria", "path": "/best-things-to-do-in-sofia" },
  { "name": "Stockholm", "country": "Sweden", "path": "/best-things-to-do-in-stockholm" },
  { "name": "Strasbourg", "country": "France", "path": "/best-things-to-do-in-strasbourg" },
  { "name": "Sucre", "country": "Bolivia", "path": "/best-things-to-do-in-sucre" },
  { "name": "Surabaya", "country": "Indonesia", "path": "/best-things-to-do-in-surabaya" },
  { "name": "Suva", "country": "Fiji", "path": "/best-things-to-do-in-suva" },
  { "name": "Tallinn", "country": "Estonia", "path": "/best-things-to-do-in-tallinn" },
  { "name": "Tampere", "country": "Finland", "path": "/best-things-to-do-in-tampere" },
  { "name": "The Hague", "country": "Netherlands", "path": "/best-things-to-do-in-the-hague" },
  { "name": "Thessaloniki", "country": "Greece", "path": "/best-things-to-do-in-thessaloniki" },
  { "name": "Tokyo", "country": "Japan", "path": "/best-things-to-do-in-tokyo" },
  { "name": "Trivandrum", "country": "India", "path": "/best-things-to-do-in-trivandrum" },
  { "name": "Tunis", "country": "Tunisia", "path": "/best-things-to-do-in-tunis" },
  { "name": "Turin", "country": "Italy", "path": "/best-things-to-do-in-turin" },
  { "name": "Utrecht", "country": "Netherlands", "path": "/best-things-to-do-in-utrecht" },
  { "name": "Valencia", "country": "Spain", "path": "/best-things-to-do-in-valencia" },
  { "name": "Valparaiso", "country": "Chile", "path": "/best-things-to-do-in-valparaiso" },
  { "name": "Victoria", "country": "Seychelles", "path": "/best-things-to-do-in-victoria" },
  { "name": "Vilnius", "country": "Lithuania", "path": "/best-things-to-do-in-vilnius" },
  { "name": "Warsaw", "country": "Poland", "path": "/best-things-to-do-in-warsaw" },
  { "name": "Wellington", "country": "New Zealand", "path": "/best-things-to-do-in-wellington" },
  { "name": "Windhoek", "country": "Namibia", "path": "/best-things-to-do-in-windhoek" },
  { "name": "Winnipeg", "country": "Canada", "path": "/best-things-to-do-in-winnipeg" },
  { "name": "Yogyakarta", "country": "Indonesia", "path": "/best-things-to-do-in-yogyakarta" },
  { "name": "Zagreb", "country": "Croatia", "path": "/best-things-to-do-in-zagreb" },
  { "name": "Zaragoza", "country": "Spain", "path": "/best-things-to-do-in-zaragoza" }
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