import { Route, Router } from 'wouter';
import { useLocation } from 'wouter';
import { lazy, Suspense } from 'react';
import { CityRoutes } from './components/DynamicCityRoute';

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


// Define all valid routes - cleared for fresh production content
const getCityRoutes = () => {
  const cityKeys = [
    // Cities cleared - ready for fresh production content
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
    </Router>
  );
}

export default App;