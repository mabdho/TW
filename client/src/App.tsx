import { Router, Route } from 'wouter';
import { useLocation } from 'wouter';
import { lazy, Suspense } from 'react';

// Critical: Load home page immediately for FCP
import Home from './pages/home';

// Optimized lazy loading with better code splitting
const NotFound = lazy(() => import('./pages/not-found'));
const BlogsPage = lazy(() => import('./pages/blogs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

// Heavy components - load only when needed
const AdminPage = lazy(() => import('./pages/admin'));
const LoginPage = lazy(() => import('./pages/login'));
const BlogDetailPage = lazy(() => import('./pages/blog-detail'));
const DestinationsPage = lazy(() => import('./pages/destinations'));

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
  
  // Show 404 only for truly unmatched routes, not valid city routes
  if (location.startsWith('/things-to-do-in-')) {
    // For city routes, check if it's a valid format but no city exists
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">City Guide Coming Soon</h1>
          <p className="text-gray-600 mb-6">
            We're working on creating amazing travel guides for this destination. 
            Check back soon or explore our other featured cities!
          </p>
          <a 
            href="/destinations" 
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Browse All Destinations
          </a>
        </div>
      </div>
    );
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
          
          {/* City routes handled by ConditionalNotFound */}
        </Suspense>
      </Router>
    </div>
  );
}

export default App;