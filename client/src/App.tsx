import { Route, Router } from 'wouter';
import { useLocation } from 'wouter';
import { lazy, Suspense } from 'react';
import { CityRoutes } from './components/DynamicCityRoute';
import { FloatingAdminButton } from './components/FloatingAdminButton';

// Lazy load major page components for code splitting
const Home = lazy(() => import('./pages/home'));
const NotFound = lazy(() => import('./pages/not-found'));
const AdminPage = lazy(() => import('./pages/admin'));
const LoginPage = lazy(() => import('./pages/login'));
const BlogsPage = lazy(() => import('./pages/blogs'));
const BlogDetailPage = lazy(() => import('./pages/blog-detail'));
const DestinationsPage = lazy(() => import('./pages/destinations'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

// No loading fallback - invisible to eliminate flash
const PageLoadingFallback = () => null;


// Define all valid routes - using dynamic generation for maintainability
const getCityRoutes = () => {
  const cityKeys = [
    "aarhus", "accra", "addis-ababa", "adelaide", "ahmedabad", "albuquerque", "algiers", "alice-springs", "antwerp", "arequipa", "asuncin", "asuncion", "auckland", "austin", "bandung", "barranquilla", "belgrade", "belo-horizonte", "bergen", "bilbao", "bologna", "bordeaux", "bratislava", "brisbane", "brno", "broome", "bucharest", "busan", "cairns", "cairo", "calgary", "cali", "cape-town", "cartagena", "casablanca", "cebu", "charleston", "chiang-mai", "christchurch", "colombo", "columbus", "copenhagen", "crdoba", "curitiba", "cusco", "da-nang", "dakar", "dalat", "dar-es-salaam", "darwin", "debrecen", "edmonton", "florence", "fukuoka", "gaborone", "gdansk", "genoa", "ghent", "gold-coast", "gothenburg", "guadalajara", "guatemala-city", "guayaquil", "halifax", "hanoi", "harare", "havana", "helsinki", "hobart", "hoi-an", "indianapolis", "ipoh", "jaipur", "johannesburg", "kampala", "kansas-city", "kathmandu", "kingston", "krakow", "la-paz", "ljubljana", "luanda", "luang-prabang", "lusaka", "lyon", "malacca", "malaga", "male", "malm", "manaus", "maputo", "maracaibo", "marrakech", "marseille", "medellin", "milwaukee", "montevideo", "nairobi", "nashville", "new-orleans", "new-york", "nice", "nouma", "oaxaca", "oslo", "ottawa", "palermo", "panama-city", "papeete", "penang", "perth", "port-moresby", "portland", "porto", "quebec-city", "queenstown", "quito", "reykjavik", "riga", "rosario", "sacramento", "salt-lake-city", "salvador", "san-antonio", "san-jose", "san-juan", "savannah", "seville", "siem-reap", "sofia", "stockholm", "strasbourg", "sucre", "surabaya", "suva", "tallinn", "tampere", "the-hague", "thessaloniki", "tokyo", "tunis", "turin", "utrecht", "valencia", "valparaiso", "victoria", "vilnius", "warsaw", "wellington", "windhoek", "winnipeg", "yogyakarta", "zagreb", "zaragoza", "dubai", "berlin", "dhaandhoo", "boston", "chicago"
  ];
  
  // Only SEO-friendly routes
  return cityKeys.map(cityKey => `/best-things-to-do-in-${cityKey}`);
};

const validRoutes = [
  "/", "/blogs", "/destinations", "/admin", "/login", "/privacy-policy", "/terms-of-service", "/cookie-policy",
  ...getCityRoutes()
];

function ConditionalNotFound() {
  const [location] = useLocation();
  
  // Check if it's a valid static route
  if (validRoutes.includes(location)) {
    return null;
  }
  
  // Check if it's a dynamic city route that should be handled by CityRoutes
  const cityRoutePattern = /^\/best-things-to-do-in-([a-z0-9-]+)$/;
  if (cityRoutePattern.test(location)) {
    // Let CityRoutes handle this - don't show 404
    return null;
  }
  
  // Check if it's a blog route
  const blogRoutePattern = /^\/blog\/[^\/]+$/;
  if (blogRoutePattern.test(location)) {
    return null;
  }
  
  // Only show 404 for truly unmatched routes
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
        <Route path="/login" component={LoginPage} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        
        {/* Dynamic city routes with code splitting */}
        <CityRoutes />
        
        <ConditionalNotFound />
      </Suspense>
      
      {/* Floating Admin Button - appears on all pages */}
      <FloatingAdminButton />
    </Router>
  );
}

export default App;