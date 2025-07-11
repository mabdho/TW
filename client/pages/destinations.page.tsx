import DestinationsPage from '@/pages/destinations';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export { Page };

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <DestinationsPage />
      <Footer />
    </div>
  );
}

export const documentProps = {
  title: 'Travel Destinations Directory - TravelWanders',
  description: 'Explore our comprehensive directory of travel destinations worldwide. Find the perfect place for your next adventure with detailed city guides, attractions, and travel tips.'
};