import React, { lazy, Suspense } from 'react';
import { Route } from 'wouter';

// Invisible loading fallback - no loading screens
const CityLoadingFallback = () => null;

// Helper function to transform named exports to default exports
const createCityImport = (cityName: string, importPath: string) => 
  () => import(/* @vite-ignore */ importPath).then(module => ({ default: module[cityName] }));

// City mapping for dynamic imports
const cityMap = {
  'aarhus': createCityImport('Aarhus', '../pages/cities/Aarhus'),
  'accra': createCityImport('Accra', '../pages/cities/Accra'),
  'addis-ababa': createCityImport('AddisAbaba', '../pages/cities/AddisAbaba'),
  'adelaide': createCityImport('Adelaide', '../pages/cities/Adelaide'),
  'ahmedabad': createCityImport('Ahmedabad', '../pages/cities/Ahmedabad'),
  'albuquerque': createCityImport('Albuquerque', '../pages/cities/Albuquerque'),
  'algiers': createCityImport('Algiers', '../pages/cities/Algiers'),
  'alice-springs': createCityImport('AliceSprings', '../pages/cities/AliceSprings'),
  'antwerp': createCityImport('Antwerp', '../pages/cities/Antwerp'),
  'arequipa': createCityImport('Arequipa', '../pages/cities/Arequipa'),
  'asuncin': createCityImport('Asuncin', '../pages/cities/Asuncin'),
  'asuncion': createCityImport('Asuncion', '../pages/cities/Asuncion'),
  'auckland': createCityImport('Auckland', '../pages/cities/Auckland'),
  'austin': createCityImport('Austin', '../pages/cities/Austin'),
  'bandung': createCityImport('Bandung', '../pages/cities/Bandung'),
  'barranquilla': createCityImport('Barranquilla', '../pages/cities/Barranquilla'),
  'belgrade': createCityImport('Belgrade', '../pages/cities/Belgrade'),
  'belo-horizonte': createCityImport('BeloHorizonte', '../pages/cities/BeloHorizonte'),
  'bergen': createCityImport('Bergen', '../pages/cities/Bergen'),
  'bilbao': createCityImport('Bilbao', '../pages/cities/Bilbao'),
  'bologna': createCityImport('Bologna', '../pages/cities/Bologna'),
  'bordeaux': createCityImport('Bordeaux', '../pages/cities/Bordeaux'),
  'bratislava': createCityImport('Bratislava', '../pages/cities/Bratislava'),
  'brisbane': createCityImport('Brisbane', '../pages/cities/Brisbane'),
  'brno': createCityImport('Brno', '../pages/cities/Brno'),
  'broome': createCityImport('Broome', '../pages/cities/Broome'),
  'bucharest': createCityImport('Bucharest', '../pages/cities/Bucharest'),
  'busan': createCityImport('Busan', '../pages/cities/Busan'),
  'cairns': createCityImport('Cairns', '../pages/cities/Cairns'),
  'cairo': createCityImport('Cairo', '../pages/cities/Cairo'),
  'calgary': createCityImport('Calgary', '../pages/cities/Calgary'),
  'cali': createCityImport('Cali', '../pages/cities/Cali'),
  'cape-town': createCityImport('CapeTown', '../pages/cities/CapeTown'),
  'cartagena': createCityImport('Cartagena', '../pages/cities/Cartagena'),
  'casablanca': createCityImport('Casablanca', '../pages/cities/Casablanca'),
  'cebu': createCityImport('Cebu', '../pages/cities/Cebu'),
  'charleston': createCityImport('Charleston', '../pages/cities/Charleston'),
  'chiang-mai': createCityImport('ChiangMai', '../pages/cities/ChiangMai'),
  'christchurch': createCityImport('Christchurch', '../pages/cities/Christchurch'),
  'colombo': createCityImport('Colombo', '../pages/cities/Colombo'),
  'columbus': createCityImport('Columbus', '../pages/cities/Columbus'),
  'copenhagen': createCityImport('Copenhagen', '../pages/cities/Copenhagen'),
  'crdoba': createCityImport('Crdoba', '../pages/cities/Crdoba'),
  'curitiba': createCityImport('Curitiba', '../pages/cities/Curitiba'),
  'cusco': createCityImport('Cusco', '../pages/cities/Cusco'),
  'da-nang': createCityImport('DaNang', '../pages/cities/DaNang'),
  'dakar': createCityImport('Dakar', '../pages/cities/Dakar'),
  'dalat': createCityImport('Dalat', '../pages/cities/Dalat'),
  'dar-es-salaam': createCityImport('DarEsSalaam', '../pages/cities/DarEsSalaam'),
  'darwin': createCityImport('Darwin', '../pages/cities/Darwin'),
  'debrecen': createCityImport('Debrecen', '../pages/cities/Debrecen'),
  'edmonton': createCityImport('Edmonton', '../pages/cities/Edmonton'),
  'fukuoka': createCityImport('Fukuoka', '../pages/cities/Fukuoka'),
  'gaborone': createCityImport('Gaborone', '../pages/cities/Gaborone'),
  'gdansk': createCityImport('Gdansk', '../pages/cities/Gdansk'),
  'genoa': createCityImport('Genoa', '../pages/cities/Genoa'),
  'ghent': createCityImport('Ghent', '../pages/cities/Ghent'),
  'gold-coast': createCityImport('GoldCoast', '../pages/cities/GoldCoast'),
  'gothenburg': createCityImport('Gothenburg', '../pages/cities/Gothenburg'),
  'guadalajara': createCityImport('Guadalajara', '../pages/cities/Guadalajara'),
  'guatemala-city': createCityImport('GuatemalaCity', '../pages/cities/GuatemalaCity'),
  'guayaquil': createCityImport('Guayaquil', '../pages/cities/Guayaquil'),
  'halifax': createCityImport('Halifax', '../pages/cities/Halifax'),
  'hanoi': createCityImport('Hanoi', '../pages/cities/Hanoi'),
  'harare': createCityImport('Harare', '../pages/cities/Harare'),
  'havana': createCityImport('Havana', '../pages/cities/Havana'),
  'helsinki': createCityImport('Helsinki', '../pages/cities/Helsinki'),
  'hobart': createCityImport('Hobart', '../pages/cities/Hobart'),
  'hoi-an': createCityImport('HoiAn', '../pages/cities/HoiAn'),
  'indianapolis': createCityImport('Indianapolis', '../pages/cities/Indianapolis'),
  'ipoh': createCityImport('Ipoh', '../pages/cities/Ipoh'),
  'jaipur': createCityImport('Jaipur', '../pages/cities/Jaipur'),
  'johannesburg': createCityImport('Johannesburg', '../pages/cities/Johannesburg'),
  'kampala': createCityImport('Kampala', '../pages/cities/Kampala'),
  'kansas-city': createCityImport('KansasCity', '../pages/cities/KansasCity'),
  'kathmandu': createCityImport('Kathmandu', '../pages/cities/Kathmandu'),
  'kingston': createCityImport('Kingston', '../pages/cities/Kingston'),
  'krakow': createCityImport('Krakow', '../pages/cities/Krakow'),
  'la-paz': createCityImport('LaPaz', '../pages/cities/LaPaz'),
  'ljubljana': createCityImport('Ljubljana', '../pages/cities/Ljubljana'),
  'luanda': createCityImport('Luanda', '../pages/cities/Luanda'),
  'luang-prabang': createCityImport('LuangPrabang', '../pages/cities/LuangPrabang'),
  'lusaka': createCityImport('Lusaka', '../pages/cities/Lusaka'),
  'lyon': createCityImport('Lyon', '../pages/cities/Lyon'),
  'malacca': createCityImport('Malacca', '../pages/cities/Malacca'),
  'malaga': createCityImport('Malaga', '../pages/cities/Malaga'),
  'male': createCityImport('Male', '../pages/cities/Male'),
  'malm': createCityImport('Malm', '../pages/cities/Malm'),
  'manaus': createCityImport('Manaus', '../pages/cities/Manaus'),
  'maputo': createCityImport('Maputo', '../pages/cities/Maputo'),
  'maracaibo': createCityImport('Maracaibo', '../pages/cities/Maracaibo'),
  'marrakech': createCityImport('Marrakech', '../pages/cities/Marrakech'),
  'marseille': createCityImport('Marseille', '../pages/cities/Marseille'),
  'medellin': createCityImport('Medellin', '../pages/cities/Medellin'),
  'milwaukee': createCityImport('Milwaukee', '../pages/cities/Milwaukee'),
  'montevideo': createCityImport('Montevideo', '../pages/cities/Montevideo'),
  'nairobi': createCityImport('Nairobi', '../pages/cities/Nairobi'),
  'nashville': createCityImport('Nashville', '../pages/cities/Nashville'),
  'new-orleans': createCityImport('NewOrleans', '../pages/cities/NewOrleans'),
  'new-york': createCityImport('NewYork', '../pages/cities/NewYork'),
  'nice': createCityImport('Nice', '../pages/cities/Nice'),
  'nouma': createCityImport('Nouma', '../pages/cities/Nouma'),
  'oaxaca': createCityImport('Oaxaca', '../pages/cities/Oaxaca'),
  'oslo': createCityImport('Oslo', '../pages/cities/Oslo'),
  'ottawa': createCityImport('Ottawa', '../pages/cities/Ottawa'),
  'palermo': createCityImport('Palermo', '../pages/cities/Palermo'),
  'panama-city': createCityImport('PanamaCity', '../pages/cities/PanamaCity'),
  'papeete': createCityImport('Papeete', '../pages/cities/Papeete'),
  'penang': createCityImport('Penang', '../pages/cities/Penang'),
  'perth': createCityImport('Perth', '../pages/cities/Perth'),
  'port-moresby': createCityImport('PortMoresby', '../pages/cities/PortMoresby'),
  'portland': createCityImport('Portland', '../pages/cities/Portland'),
  'porto': createCityImport('Porto', '../pages/cities/Porto'),
  'quebec-city': createCityImport('QuebecCity', '../pages/cities/QuebecCity'),
  'queenstown': createCityImport('Queenstown', '../pages/cities/Queenstown'),
  'quito': createCityImport('Quito', '../pages/cities/Quito'),
  'reykjavik': createCityImport('Reykjavik', '../pages/cities/Reykjavik'),
  'riga': createCityImport('Riga', '../pages/cities/Riga'),
  'rosario': createCityImport('Rosario', '../pages/cities/Rosario'),
  'sacramento': createCityImport('Sacramento', '../pages/cities/Sacramento'),
  'salt-lake-city': createCityImport('SaltLakeCity', '../pages/cities/SaltLakeCity'),
  'salvador': createCityImport('Salvador', '../pages/cities/Salvador'),
  'san-antonio': createCityImport('SanAntonio', '../pages/cities/SanAntonio'),
  'san-jose': createCityImport('SanJose', '../pages/cities/SanJose'),
  'san-juan': createCityImport('SanJuan', '../pages/cities/SanJuan'),
  'savannah': createCityImport('Savannah', '../pages/cities/Savannah'),
  'seville': createCityImport('Seville', '../pages/cities/Seville'),
  'siem-reap': createCityImport('SiemReap', '../pages/cities/SiemReap'),
  'sofia': createCityImport('Sofia', '../pages/cities/Sofia'),
  'stockholm': createCityImport('Stockholm', '../pages/cities/Stockholm'),
  'strasbourg': createCityImport('Strasbourg', '../pages/cities/Strasbourg'),
  'sucre': createCityImport('Sucre', '../pages/cities/Sucre'),
  'surabaya': createCityImport('Surabaya', '../pages/cities/Surabaya'),
  'suva': createCityImport('Suva', '../pages/cities/Suva'),
  'tallinn': createCityImport('Tallinn', '../pages/cities/Tallinn'),
  'tampere': createCityImport('Tampere', '../pages/cities/Tampere'),
  'the-hague': createCityImport('TheHague', '../pages/cities/TheHague'),
  'thessaloniki': createCityImport('Thessaloniki', '../pages/cities/Thessaloniki'),
  'tokyo': createCityImport('Tokyo', '../pages/cities/Tokyo'),
  'tunis': createCityImport('Tunis', '../pages/cities/Tunis'),
  'turin': createCityImport('Turin', '../pages/cities/Turin'),
  'utrecht': createCityImport('Utrecht', '../pages/cities/Utrecht'),
  'valencia': createCityImport('Valencia', '../pages/cities/Valencia'),
  'valparaiso': createCityImport('Valparaiso', '../pages/cities/Valparaiso'),
  'victoria': createCityImport('Victoria', '../pages/cities/Victoria'),
  'vilnius': createCityImport('Vilnius', '../pages/cities/Vilnius'),
  'warsaw': createCityImport('Warsaw', '../pages/cities/Warsaw'),
  'wellington': createCityImport('Wellington', '../pages/cities/Wellington'),
  'windhoek': createCityImport('Windhoek', '../pages/cities/Windhoek'),
  'winnipeg': createCityImport('Winnipeg', '../pages/cities/Winnipeg'),
  'yogyakarta': createCityImport('Yogyakarta', '../pages/cities/Yogyakarta'),
  'zagreb': createCityImport('Zagreb', '../pages/cities/Zagreb'),
  'zaragoza': createCityImport('Zaragoza', '../pages/cities/Zaragoza'),
  'dubai': createCityImport('Dubai', '../pages/cities/Dubai'),
  'berlin': createCityImport('Berlin', '../pages/cities/Berlin'),
  'dhaandhoo': createCityImport('Dhaandhoo', '../pages/cities/Dhaandhoo'),
  'boston': createCityImport('Boston', '../pages/cities/Boston'),

  'chicago': createCityImport('Chicago', '../pages/cities/Chicago'),
};

interface DynamicCityRouteProps {
  path: string;
  cityKey: string;
}

export const DynamicCityRoute: React.FC<DynamicCityRouteProps> = ({ path, cityKey }) => {
  // Create lazy component with proper error handling
  const LazyComponent = lazy(async () => {
    try {
      const module = await cityMap[cityKey as keyof typeof cityMap]();
      return module;
    } catch (error) {
      console.error(`Failed to load city component for ${cityKey}:`, error);
      // Return a fallback component
      return {
        default: () => (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">City page not found</h1>
              <p className="text-gray-600">The page for {cityKey} could not be loaded.</p>
            </div>
          </div>
        )
      };
    }
  });
  
  return (
    <Route 
      path={path} 
      component={() => (
        <Suspense fallback={<CityLoadingFallback />}>
          <LazyComponent />
        </Suspense>
      )} 
    />
  );
};

// Generate all city routes dynamically
export const CityRoutes: React.FC = () => {
  return (
    <>
      {Object.keys(cityMap).map((cityKey) => (
        <DynamicCityRoute
          key={cityKey}
          path={`/${cityKey}`}
          cityKey={cityKey}
        />
      ))}
    </>
  );
};