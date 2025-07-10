import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedCities } from '@/components/FeaturedCities';
import { CityDirectory } from '@/components/CityDirectory';
import { TravelCategories } from '@/components/TravelCategories';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <FeaturedCities />
      <CityDirectory />
      <TravelCategories />
      <Footer />
    </div>
  );
}
