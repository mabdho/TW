import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, Search, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const cities = [
  { "name": "Aarhus", "country": "Denmark", "path": "/best-things-to-do-in-aarhus", "continent": "Europe", "imageUrl": "" },
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
  { "name": "Berlin", "country": "Germany", "path": "/best-things-to-do-in-berlin", "continent": "Europe" },
  { "name": "Bilbao", "country": "Spain", "path": "/best-things-to-do-in-bilbao", "continent": "Europe" },
  { "name": "Bologna", "country": "Italy", "path": "/best-things-to-do-in-bologna", "continent": "Europe" },
  { "name": "Bordeaux", "country": "France", "path": "/best-things-to-do-in-bordeaux", "continent": "Europe" },
  { "name": "Boston", "country": "USA", "path": "/best-things-to-do-in-boston", "continent": "North America" },
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
  { "name": "Chicago", "country": "USA", "path": "/best-things-to-do-in-chicago", "continent": "North America" },
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
  { "name": "Dhaandhoo", "country": "Maldives", "path": "/best-things-to-do-in-dhaandhoo", "continent": "Asia" },
  { "name": "Dubai", "country": "UAE", "path": "/best-things-to-do-in-dubai", "continent": "Asia" },
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
  { "name": "Male'", "country": "Maldives", "path": "/best-things-to-do-in-male", "continent": "Asia" },
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
  { "name": "New York", "country": "USA", "path": "/best-things-to-do-in-new-york", "continent": "North America" },
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
  { "name": "Trivandrum", "country": "India", "path": "/best-things-to-do-in-trivandrum", "continent": "Asia" },
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
  { "name": "Zurich", "country": "Switzerland", "path": "/zurich", "continent": "Europe" },
  { "name": "Milan", "country": "Italy", "path": "/best-things-to-do-in-milan", "continent": "Europe" },
  { "name": "Rome", "country": "Italy", "path": "/best-things-to-do-in-rome", "continent": "Europe" },
  { "name": "Venice", "country": "Italy", "path": "/best-things-to-do-in-venice", "continent": "Europe" },
  { "name": "Amalfi", "country": "Italy", "path": "/best-things-to-do-in-amalfi", "continent": "Europe" },
  { "name": "Vienna", "country": "Austria", "path": "/best-things-to-do-in-vienna", "continent": "Europe" },
  { "name": "Prague", "country": "Czech Republic", "path": "/best-things-to-do-in-prague", "continent": "Europe" },
  { "name": "Florence", "country": "Italy", "path": "/best-things-to-do-in-florence", "continent": "Europe", "imageUrl": "" },
  { "name": "Paris", "country": "France", "path": "/best-things-to-do-in-paris", "continent": "Europe", "imageUrl": "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { "name": "Addu", "country": "Maldives", "path": "/best-things-to-do-in-addu", "continent": "Asia", "imageUrl": "https://images.unsplash.com/photo-1701602631596-2479190eb2f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFkZHUlMjBjaXR5fGVufDB8fDB8fHww" }
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