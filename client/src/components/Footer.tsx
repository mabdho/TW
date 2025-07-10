import { Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                <span className="text-lg sm:text-xl font-bold text-foreground">WanderGuide</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">
                Your trusted companion for discovering amazing destinations around the world. 
                We curate the best travel experiences to make your journey unforgettable.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                  <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#destinations" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#experiences" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Travel Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#help" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#safety" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Safety Guidelines
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © 2024 WanderGuide. All rights reserved. Made with ❤️ for travelers worldwide.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};