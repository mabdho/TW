import { Mountain, Waves, Building2, TreePine, Camera, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 1,
    name: "Adventure",
    description: "Thrilling experiences for adrenaline seekers",
    icon: Mountain,
    gradient: "bg-nature-gradient",
    count: "120+ experiences"
  },
  {
    id: 2,
    name: "Beach & Coast",
    description: "Relaxing getaways by pristine waters",
    icon: Waves,
    gradient: "bg-ocean-gradient",
    count: "85+ destinations"
  },
  {
    id: 3,
    name: "City Escapes",
    description: "Urban adventures in vibrant metropolises",
    icon: Building2,
    gradient: "bg-hero-gradient",
    count: "200+ cities"
  },
  {
    id: 4,
    name: "Nature & Wildlife",
    description: "Connect with nature in its purest form",
    icon: TreePine,
    gradient: "bg-nature-gradient",
    count: "95+ parks"
  },
  {
    id: 5,
    name: "Photography",
    description: "Picture-perfect spots for memorable shots",
    icon: Camera,
    gradient: "bg-sunset-gradient",
    count: "150+ locations"
  },
  {
    id: 6,
    name: "Romance",
    description: "Intimate destinations for couples",
    icon: Heart,
    gradient: "bg-sunset-gradient",
    count: "60+ getaways"
  }
];

export const TravelCategories = () => {
  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Travel by Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect adventure based on what you love to do. 
            From heart-pumping adventures to peaceful retreats.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer border-0 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-32 ${category.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <IconComponent className="h-8 w-8 mb-2" />
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
                    {category.count}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};