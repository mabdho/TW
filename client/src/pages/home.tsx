import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, Zap, Smartphone, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleGetStarted = () => {
    // TODO: Implement navigation to getting started page
    console.log("Get Started clicked");
  };

  const handleLearnMore = () => {
    // TODO: Implement navigation to documentation
    console.log("Learn More clicked");
  };

  const handleStartBuilding = () => {
    // TODO: Implement navigation to development setup
    console.log("Start Building clicked");
  };

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized build process and modern tooling for lightning-fast load times and smooth user experience."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensures your application looks and works perfectly on all devices and screen sizes."
    },
    {
      icon: CheckCircle,
      title: "Production Ready",
      description: "Built with best practices, error boundaries, and optimized build configuration for reliable deployment."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-slate-900">React App</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block">Welcome to your</span>
                <span className="block text-primary-600">React Application</span>
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600">
                A modern, clean foundation for building amazing web applications. 
                This starter template provides everything you need to get started quickly.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={handleGetStarted}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  onClick={handleLearnMore}
                  className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium border border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Modern Development</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to build fast, scalable, and maintainable applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={feature.title} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                Start developing your next great application with this solid foundation. 
                Add your own components, routes, and features as you grow.
              </p>
              <Button
                onClick={handleStartBuilding}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Start Building
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="ml-3 text-lg font-semibold text-white">React App</span>
              </div>
              <p className="text-slate-400 max-w-md">
                A modern React application template designed for developers who want to build fast, scalable applications with clean architecture.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Examples</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Components</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 React App. Built with modern web technologies.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Privacy</a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
