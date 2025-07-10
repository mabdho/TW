import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import cityEurope from '@/assets/city-europe.jpg';
import mountainsAdventure from '@/assets/mountains-adventure.jpg';
import templeCulture from '@/assets/temple-culture.jpg';

const destinations = [
  {
    id: 1,
    name: "Auckland, New Zealand",
    description: "City of Sails with stunning harbours, volcanoes, and islands",
    image: cityEurope,
    rating: 4.8,
    link: "/auckland",
    category: "Adventure & Culture"
  },
  {
    id: 2,
    name: "Copenhagen, Denmark", 
    description: "Nordic charm with world-class design and cozy hygge culture",
    image: mountainsAdventure,
    rating: 4.9,
    link: "/copenhagen",
    category: "Design & Culture"
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    description: "Ultra-modern metropolis blending tradition with innovation",
    image: templeCulture,
    rating: 4.7,
    link: "/tokyo",
    category: "Culture & Technology"
  }
];

export const FeaturedDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked destinations that offer unique experiences, 
            stunning landscapes, and unforgettable memories.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {destination.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current text-secondary" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    Travel Guide
                  </span>
                  <Link to={destination.link}>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};