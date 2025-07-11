import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { TravelCategories } from '@/components/TravelCategories';
import { CityDirectory } from '@/components/CityDirectory';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

export { Page };

function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TravelCategories />
      <section id="destinations" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Discover Amazing Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of the world's most incredible travel destinations, 
              from bustling cities to hidden gems waiting to be discovered.
            </p>
          </div>
          <CityDirectory 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedContinent={selectedContinent}
            setSelectedContinent={setSelectedContinent}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export const documentProps = {
  title: 'TravelWanders - Discover Amazing Destinations & Travel Guides',
  description: 'Discover the best travel destinations, attractions, and experiences with TravelWanders. Your ultimate guide to exploring the world with comprehensive city guides and travel tips.'
};