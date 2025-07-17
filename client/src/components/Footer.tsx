import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '@/components/icons/SimpleIcons';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-lg sm:text-xl font-bold text-gray-900">TravelWanders</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md">
                Your trusted companion for discovering amazing destinations around the world. 
                We curate the best travel experiences to make your journey unforgettable.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a href="https://facebook.com/travelwanders" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                    <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a href="https://twitter.com/travelwanders" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                    <TwitterIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a href="https://instagram.com/travelwanders" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                    <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a href="https://youtube.com/travelwanders" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-primary h-8 w-8 sm:h-10 sm:w-10">
                    <YoutubeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/destinations" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Travel Blog
                  </a>
                </li>
                <li>
                  <a href="/" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/destinations" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Featured Cities
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Get Started</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/destinations" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Browse Destinations
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Travel Inspiration
                  </a>
                </li>
                <li>
                  <a href="/destinations" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Plan Your Trip
                  </a>
                </li>
                <li>
                  <a href="/destinations" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Discover Places
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Travel Tips
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">Legal & Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy-policy" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="mailto:support@travelwanders.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="mailto:feedback@travelwanders.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    Send Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © 2025 TravelWanders. All rights reserved. Made with ❤️ for travelers worldwide.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="/admin" className="text-muted-foreground hover:text-primary transition-colors">
                🔒
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };