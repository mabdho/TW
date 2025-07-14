import { Router, Route } from 'wouter';
import { useLocation } from 'wouter';
import { lazy, Suspense } from 'react';
import { CityRoutes } from './components/DynamicCityRoute';

// Critical: Load home page immediately for FCP
import Home from './pages/home';

// Lazy load all other pages for better code splitting
const NotFound = lazy(() => import('./pages/not-found'));
const AdminPage = lazy(() => import('./pages/admin'));
const LoginPage = lazy(() => import('./pages/login'));
const BlogsPage = lazy(() => import('./pages/blogs'));
const BlogDetailPage = lazy(() => import('./pages/blog-detail'));
const DestinationsPage = lazy(() => import('./pages/destinations'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

// Optimized loading fallback - minimal to prevent layout shift
const PageFallback = () => (
  <div className="min-h-screen bg-white">
    <div className="animate-pulse">
      <div className="h-16 bg-gray-100 mb-4"></div>
      <div className="container mx-auto px-4">
        <div className="h-8 bg-gray-100 rounded mb-4 w-1/3"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          <div className="h-4 bg-gray-100 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
);

function ConditionalNotFound() {
  const [location] = useLocation();
  
  // Only show 404 for non-city routes to prevent conflicts with dynamic city routing
  if (location.startsWith('/best-things-to-do-in-')) {
    return null;
  }
  
  return <NotFound />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={null}>
          {/* Priority route: Home page (no lazy loading) */}
          <Route path="/" component={Home} />
          
          {/* Lazy loaded routes */}
          <Route path="/admin">
            <Suspense fallback={<PageFallback />}>
              <AdminPage />
            </Suspense>
          </Route>
          
          <Route path="/login">
            <Suspense fallback={<PageFallback />}>
              <LoginPage />
            </Suspense>
          </Route>
          
          <Route path="/blogs">
            <Suspense fallback={<PageFallback />}>
              <BlogsPage />
            </Suspense>
          </Route>
          
          <Route path="/blog/:id">
            <Suspense fallback={<PageFallback />}>
              <BlogDetailPage />
            </Suspense>
          </Route>
          
          <Route path="/destinations">
            <Suspense fallback={<PageFallback />}>
              <DestinationsPage />
            </Suspense>
          </Route>
          
          <Route path="/privacy-policy">
            <Suspense fallback={<PageFallback />}>
              <PrivacyPolicy />
            </Suspense>
          </Route>
          
          <Route path="/terms-of-service">
            <Suspense fallback={<PageFallback />}>
              <TermsOfService />
            </Suspense>
          </Route>
          
          <Route path="/cookie-policy">
            <Suspense fallback={<PageFallback />}>
              <CookiePolicy />
            </Suspense>
          </Route>
          
          {/* Dynamic city routes */}
          <CityRoutes />
          
          {/* 404 fallback */}
          <Route>
            <Suspense fallback={<PageFallback />}>
              <ConditionalNotFound />
            </Suspense>
          </Route>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;