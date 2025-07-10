import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedCities } from '@/components/FeaturedCities';
import { TravelCategories } from '@/components/TravelCategories';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedCities />
      <TravelCategories />
      <Footer />
    </div>
  );
}
