import React, { lazy, Suspense } from 'react';
import { Route } from 'wouter';

// Loading fallback component for city pages
const CityLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="loading-skeleton mb-4" style={{ width: '300px', height: '24px', borderRadius: '8px', margin: '0 auto' }}></div>
      <div className="loading-skeleton mb-3" style={{ width: '200px', height: '16px', borderRadius: '8px', margin: '0 auto' }}></div>
      <div className="loading-skeleton" style={{ width: '150px', height: '12px', borderRadius: '8px', margin: '0 auto' }}></div>
      <p className="text-gray-600 mt-4">Loading destination...</p>
    </div>
  </div>
);

// City mapping for dynamic imports
const cityMap = {
  'aarhus': () => import('../pages/cities/Aarhus'),
  'accra': () => import('../pages/cities/Accra'),
  'addis-ababa': () => import('../pages/cities/AddisAbaba'),
  'adelaide': () => import('../pages/cities/Adelaide'),
  'ahmedabad': () => import('../pages/cities/Ahmedabad'),
  'albuquerque': () => import('../pages/cities/Albuquerque'),
  'algiers': () => import('../pages/cities/Algiers'),
  'alice-springs': () => import('../pages/cities/AliceSprings'),
  'antwerp': () => import('../pages/cities/Antwerp'),
  'arequipa': () => import('../pages/cities/Arequipa'),
  'asuncin': () => import('../pages/cities/Asuncin'),
  'asuncion': () => import('../pages/cities/Asuncion'),
  'auckland': () => import('../pages/cities/Auckland'),
  'austin': () => import('../pages/cities/Austin'),
  'bandung': () => import('../pages/cities/Bandung'),
  'barranquilla': () => import('../pages/cities/Barranquilla'),
  'belgrade': () => import('../pages/cities/Belgrade'),
  'belo-horizonte': () => import('../pages/cities/BeloHorizonte'),
  'bergen': () => import('../pages/cities/Bergen'),
  'bilbao': () => import('../pages/cities/Bilbao'),
  'bologna': () => import('../pages/cities/Bologna'),
  'bordeaux': () => import('../pages/cities/Bordeaux'),
  'bratislava': () => import('../pages/cities/Bratislava'),
  'brisbane': () => import('../pages/cities/Brisbane'),
  'brno': () => import('../pages/cities/Brno'),
  'broome': () => import('../pages/cities/Broome'),
  'bucharest': () => import('../pages/cities/Bucharest'),
  'busan': () => import('../pages/cities/Busan'),
  'cairns': () => import('../pages/cities/Cairns'),
  'cairo': () => import('../pages/cities/Cairo'),
  'calgary': () => import('../pages/cities/Calgary'),
  'cali': () => import('../pages/cities/Cali'),
  'cape-town': () => import('../pages/cities/CapeTown'),
  'cartagena': () => import('../pages/cities/Cartagena'),
  'casablanca': () => import('../pages/cities/Casablanca'),
  'cebu': () => import('../pages/cities/Cebu'),
  'charleston': () => import('../pages/cities/Charleston'),
  'chiang-mai': () => import('../pages/cities/ChiangMai'),
  'christchurch': () => import('../pages/cities/Christchurch'),
  'colombo': () => import('../pages/cities/Colombo'),
  'columbus': () => import('../pages/cities/Columbus'),
  'copenhagen': () => import('../pages/cities/Copenhagen'),
  'crdoba': () => import('../pages/cities/Crdoba'),
  'curitiba': () => import('../pages/cities/Curitiba'),
  'cusco': () => import('../pages/cities/Cusco'),
  'da-nang': () => import('../pages/cities/DaNang'),
  'dakar': () => import('../pages/cities/Dakar'),
  'dalat': () => import('../pages/cities/Dalat'),
  'dar-es-salaam': () => import('../pages/cities/DarEsSalaam'),
  'darwin': () => import('../pages/cities/Darwin'),
  'debrecen': () => import('../pages/cities/Debrecen'),
  'edmonton': () => import('../pages/cities/Edmonton'),
  'fukuoka': () => import('../pages/cities/Fukuoka'),
  'gaborone': () => import('../pages/cities/Gaborone'),
  'gdansk': () => import('../pages/cities/Gdansk'),
  'genoa': () => import('../pages/cities/Genoa'),
  'ghent': () => import('../pages/cities/Ghent'),
  'gold-coast': () => import('../pages/cities/GoldCoast'),
  'gothenburg': () => import('../pages/cities/Gothenburg'),
  'guadalajara': () => import('../pages/cities/Guadalajara'),
  'guatemala-city': () => import('../pages/cities/GuatemalaCity'),
  'guayaquil': () => import('../pages/cities/Guayaquil'),
  'halifax': () => import('../pages/cities/Halifax'),
  'hanoi': () => import('../pages/cities/Hanoi'),
  'harare': () => import('../pages/cities/Harare'),
  'havana': () => import('../pages/cities/Havana'),
  'helsinki': () => import('../pages/cities/Helsinki'),
  'hobart': () => import('../pages/cities/Hobart'),
  'hoi-an': () => import('../pages/cities/HoiAn'),
  'indianapolis': () => import('../pages/cities/Indianapolis'),
  'ipoh': () => import('../pages/cities/Ipoh'),
  'jaipur': () => import('../pages/cities/Jaipur'),
  'johannesburg': () => import('../pages/cities/Johannesburg'),
  'kampala': () => import('../pages/cities/Kampala'),
  'kansas-city': () => import('../pages/cities/KansasCity'),
  'kathmandu': () => import('../pages/cities/Kathmandu'),
  'kingston': () => import('../pages/cities/Kingston'),
  'krakow': () => import('../pages/cities/Krakow'),
  'la-paz': () => import('../pages/cities/LaPaz'),
  'ljubljana': () => import('../pages/cities/Ljubljana'),
  'luanda': () => import('../pages/cities/Luanda'),
  'luang-prabang': () => import('../pages/cities/LuangPrabang'),
  'lusaka': () => import('../pages/cities/Lusaka'),
  'lyon': () => import('../pages/cities/Lyon'),
  'malacca': () => import('../pages/cities/Malacca'),
  'malaga': () => import('../pages/cities/Malaga'),
  'male': () => import('../pages/cities/Male'),
  'malm': () => import('../pages/cities/Malm'),
  'manaus': () => import('../pages/cities/Manaus'),
  'maputo': () => import('../pages/cities/Maputo'),
  'maracaibo': () => import('../pages/cities/Maracaibo'),
  'marrakech': () => import('../pages/cities/Marrakech'),
  'marseille': () => import('../pages/cities/Marseille'),
  'medellin': () => import('../pages/cities/Medellin'),
  'milwaukee': () => import('../pages/cities/Milwaukee'),
  'montevideo': () => import('../pages/cities/Montevideo'),
  'nairobi': () => import('../pages/cities/Nairobi'),
  'nashville': () => import('../pages/cities/Nashville'),
  'new-orleans': () => import('../pages/cities/NewOrleans'),
  'new-york': () => import('../pages/cities/NewYork'),
  'nice': () => import('../pages/cities/Nice'),
  'nouma': () => import('../pages/cities/Nouma'),
  'oaxaca': () => import('../pages/cities/Oaxaca'),
  'oslo': () => import('../pages/cities/Oslo'),
  'ottawa': () => import('../pages/cities/Ottawa'),
  'palermo': () => import('../pages/cities/Palermo'),
  'panama-city': () => import('../pages/cities/PanamaCity'),
  'papeete': () => import('../pages/cities/Papeete'),
  'penang': () => import('../pages/cities/Penang'),
  'perth': () => import('../pages/cities/Perth'),
  'port-moresby': () => import('../pages/cities/PortMoresby'),
  'portland': () => import('../pages/cities/Portland'),
  'porto': () => import('../pages/cities/Porto'),
  'quebec-city': () => import('../pages/cities/QuebecCity'),
  'queenstown': () => import('../pages/cities/Queenstown'),
  'quito': () => import('../pages/cities/Quito'),
  'reykjavik': () => import('../pages/cities/Reykjavik'),
  'riga': () => import('../pages/cities/Riga'),
  'rosario': () => import('../pages/cities/Rosario'),
  'sacramento': () => import('../pages/cities/Sacramento'),
  'salt-lake-city': () => import('../pages/cities/SaltLakeCity'),
  'salvador': () => import('../pages/cities/Salvador'),
  'san-antonio': () => import('../pages/cities/SanAntonio'),
  'san-jose': () => import('../pages/cities/SanJose'),
  'san-juan': () => import('../pages/cities/SanJuan'),
  'savannah': () => import('../pages/cities/Savannah'),
  'seville': () => import('../pages/cities/Seville'),
  'siem-reap': () => import('../pages/cities/SiemReap'),
  'sofia': () => import('../pages/cities/Sofia'),
  'stockholm': () => import('../pages/cities/Stockholm'),
  'strasbourg': () => import('../pages/cities/Strasbourg'),
  'sucre': () => import('../pages/cities/Sucre'),
  'surabaya': () => import('../pages/cities/Surabaya'),
  'suva': () => import('../pages/cities/Suva'),
  'tallinn': () => import('../pages/cities/Tallinn'),
  'tampere': () => import('../pages/cities/Tampere'),
  'the-hague': () => import('../pages/cities/TheHague'),
  'thessaloniki': () => import('../pages/cities/Thessaloniki'),
  'tokyo': () => import('../pages/cities/Tokyo'),
  'tunis': () => import('../pages/cities/Tunis'),
  'turin': () => import('../pages/cities/Turin'),
  'utrecht': () => import('../pages/cities/Utrecht'),
  'valencia': () => import('../pages/cities/Valencia'),
  'valparaiso': () => import('../pages/cities/Valparaiso'),
  'victoria': () => import('../pages/cities/Victoria'),
  'vilnius': () => import('../pages/cities/Vilnius'),
  'warsaw': () => import('../pages/cities/Warsaw'),
  'wellington': () => import('../pages/cities/Wellington'),
  'windhoek': () => import('../pages/cities/Windhoek'),
  'winnipeg': () => import('../pages/cities/Winnipeg'),
  'yogyakarta': () => import('../pages/cities/Yogyakarta'),
  'zagreb': () => import('../pages/cities/Zagreb'),
  'zaragoza': () => import('../pages/cities/Zaragoza'),
  'dubai': () => import('../pages/cities/Dubai')
};

interface DynamicCityRouteProps {
  path: string;
  cityKey: string;
}

export const DynamicCityRoute: React.FC<DynamicCityRouteProps> = ({ path, cityKey }) => {
  const LazyComponent = lazy(cityMap[cityKey as keyof typeof cityMap]);
  
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