import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedDestinations } from '@/components/FeaturedDestinations';
import { CityDirectory } from '@/components/CityDirectory';
import { TravelCategories } from '@/components/TravelCategories';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedDestinations />
      <CityDirectory />
      <TravelCategories />
      <Footer />
    </div>
  );
}
