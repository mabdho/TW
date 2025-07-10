import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">WanderGuide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#destinations" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Destinations
            </a>
            <a href="#experiences" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Things to Do
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Travel Stories
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Help
            </a>
            <a href="/admin" className="text-orange-600 hover:text-orange-700 transition-colors font-medium">
              Admin
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700 hover:text-green-600 font-medium">
              Sign In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-medium">
              Join
            </Button>
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
              href="#destinations" 
              className="block px-3 py-3 text-base text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </a>
            <a 
              href="#experiences" 
              className="block px-3 py-3 text-base text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Things to Do
            </a>
            <a 
              href="#about" 
              className="block px-3 py-3 text-base text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel Stories
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 text-base text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Help
            </a>
            <a 
              href="/admin" 
              className="block px-3 py-3 text-base text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </a>
            <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
              <div className="flex flex-col gap-3 px-3">
                <Button variant="ghost" className="w-full justify-start h-12 text-base text-gray-700">
                  Sign In
                </Button>
                <Button className="w-full h-12 text-base bg-green-600 hover:bg-green-700 text-white">
                  Join
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};