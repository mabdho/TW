import { Route, Router } from 'wouter';
import { useLocation } from 'wouter';
import { lazy, Suspense } from 'react';
import { CityRoutes } from './components/DynamicCityRoute';

// Lazy load major page components for code splitting
const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/not-found'));
const AdminPage = lazy(() => import('./pages/admin'));
const BlogsPage = lazy(() => import('./pages/blogs'));
const BlogDetailPage = lazy(() => import('./pages/blog-detail'));
const DestinationsPage = lazy(() => import('./pages/destinations'));

// No loading fallback - invisible to eliminate flash
const PageLoadingFallback = () => null;


// Define all valid routes
const validRoutes = [
  "/", "/blogs", "/destinations", "/aarhus", "/accra", "/addis-ababa", "/adelaide", "/ahmedabad", "/albuquerque", "/algiers", "/alice-springs", "/antwerp", "/arequipa", "/asuncin", "/asuncion", "/auckland", "/austin", "/bandung", "/barranquilla", "/belgrade", "/belo-horizonte", "/bergen", "/bilbao", "/bologna", "/bordeaux", "/bratislava", "/brisbane", "/brno", "/broome", "/bucharest", "/busan", "/cairns", "/cairo", "/calgary", "/cali", "/cape-town", "/cartagena", "/casablanca", "/cebu", "/charleston", "/chiang-mai", "/christchurch", "/colombo", "/columbus", "/copenhagen", "/crdoba", "/curitiba", "/cusco", "/da-nang", "/dakar", "/dalat", "/dar-es-salaam", "/darwin", "/debrecen", "/edmonton", "/fukuoka", "/gaborone", "/gdansk", "/genoa", "/ghent", "/gold-coast", "/gothenburg", "/guadalajara", "/guatemala-city", "/guayaquil", "/halifax", "/hanoi", "/harare", "/havana", "/helsinki", "/hobart", "/hoi-an", "/indianapolis", "/ipoh", "/jaipur", "/johannesburg", "/kampala", "/kansas-city", "/kathmandu", "/kigali", "/kingston", "/krakow", "/la-paz", "/lagos", "/lahore", "/ljubljana", "/luanda", "/luang-prabang", "/lusaka", "/lyon", "/malacca", "/malaga", "/male", "/malm", "/manaus", "/maputo", "/maracaibo", "/marrakech", "/marseille", "/medellin", "/milwaukee", "/montevideo", "/nairobi", "/nashville", "/new-orleans", "/new-york", "/norfolk", "/oporto", "/oslo", "/ottawa", "/palma", "/panama-city", "/papeete", "/penang", "/perth", "/port-moresby", "/portland", "/porto", "/quebec-city", "/queenstown", "/quito", "/reykjavik", "/riga", "/rosario", "/sacramento", "/salt-lake-city", "/salvador", "/san-antonio", "/san-jose", "/san-juan", "/savannah", "/seville", "/siem-reap", "/sofia", "/stockholm", "/strasbourg", "/sucre", "/surabaya", "/suva", "/tallinn", "/tampere", "/the-hague", "/thessaloniki", "/tokyo", "/tunis", "/turin", "/utrecht", "/valencia", "/valparaiso", "/victoria", "/vilnius", "/warsaw", "/wellington", "/windhoek", "/winnipeg", "/yogyakarta", "/zagreb", "/zaragoza", "/dubai", "/admin"
];

function ConditionalNotFound() {
  const [location] = useLocation();
  
  // Only render NotFound if the current path is not in our valid routes
  if (validRoutes.includes(location)) {
    return null;
  }
  
  return <NotFound />;
}

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoadingFallback />}>
        <Route path="/" component={Home} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/blog/:id" component={BlogDetailPage} />
        <Route path="/destinations" component={DestinationsPage} />
        <Route path="/admin" component={AdminPage} />
        
        {/* Dynamic city routes with code splitting */}
        <CityRoutes />
        
        <ConditionalNotFound />
      </Suspense>
    </Router>
  );
}

export default App;