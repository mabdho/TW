import { Mountain, Compass, Utensils, Heart, Camera, Waves } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  {
    icon: Mountain,
    title: "Adventure",
    description: "Thrilling experiences for adrenaline seekers",
    gradient: "bg-nature-gradient",
    count: "24 destinations"
  },
  {
    icon: Compass,
    title: "Culture",
    description: "Immerse yourself in local traditions and history",
    gradient: "bg-sunset-gradient", 
    count: "31 destinations"
  },
  {
    icon: Utensils,
    title: "Food & Drink",
    description: "Savor authentic flavors and culinary delights",
    gradient: "bg-hero-gradient",
    count: "18 destinations"
  },
  {
    icon: Heart,
    title: "Romance",
    description: "Perfect getaways for couples and honeymooners",
    gradient: "bg-ocean-gradient",
    count: "15 destinations"
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Capture stunning landscapes and moments",
    gradient: "bg-nature-gradient",
    count: "22 destinations"
  },
  {
    icon: Waves,
    title: "Beach & Islands",
    description: "Relax on pristine beaches and tropical paradises",
    gradient: "bg-ocean-gradient",
    count: "27 destinations"
  }
];

export const TravelCategories = () => {
  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Travel by Interest
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect adventure based on what you love most. 
            From adrenaline-pumping activities to cultural immersions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group relative overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${category.gradient} opacity-90`} />
                
                {/* Content */}
                <CardContent className="relative z-10 p-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4">
                      {category.description}
                    </p>
                    <span className="text-white/80 text-xs font-medium">
                      {category.count}
                    </span>
                  </div>
                  
                  <Button 
                    variant="glass" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-white/30 text-white hover:bg-white/20"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};