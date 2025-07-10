import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-glass border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-xl font-bold text-foreground">WanderGuide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#destinations" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Destinations
            </a>
            <a href="#experiences" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Experiences
            </a>
            <a href="#about" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button variant="ghost" size="sm" className="text-sm lg:text-base">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="text-sm lg:text-base">
              Start Planning
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-glass border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#destinations" 
              className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </a>
            <a 
              href="#experiences" 
              className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </a>
            <a 
              href="#about" 
              className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 text-base text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 pb-2 border-t border-border mt-4">
              <div className="flex flex-col gap-3 px-3">
                <Button variant="ghost" className="w-full justify-start h-12 text-base">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full h-12 text-base">
                  Start Planning
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};