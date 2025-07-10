import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedDestinations } from '@/components/FeaturedDestinations';
import { TravelCategories } from '@/components/TravelCategories';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedDestinations />
      <TravelCategories />
      <Footer />
    </div>
  );
};

export default Index;
