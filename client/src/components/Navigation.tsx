import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-green-600" />
            <a href="/" className="text-xl font-bold text-gray-900 hover:text-green-600 transition-colors">TravelWanders</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Home
            </a>
            <button onClick={() => scrollToSection('destinations')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Destinations
            </button>
            <a href="/blogs" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Blogs
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/admin" className="text-orange-600 hover:text-orange-700 transition-colors font-medium text-sm">
              Admin
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a 
              href="/" 
              className="block px-3 py-3 text-base text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <button 
              onClick={() => {
                scrollToSection('destinations');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-3 text-base text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Destinations
            </button>
            <a 
              href="/blogs"
              className="block px-3 py-3 text-base text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </a>
            <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
              <div className="px-3">
                <a 
                  href="/admin" 
                  className="block py-3 text-base text-orange-600 hover:text-orange-700 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};