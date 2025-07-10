import { Mountain, Waves, Building2, TreePine, Camera, Heart, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    id: 1,
    name: "Adventure",
    description: "Thrilling experiences for adrenaline seekers",
    icon: Mountain,
    color: "bg-orange-500",
    count: "120+ experiences",
    rating: "4.8"
  },
  {
    id: 2,
    name: "Beach & Coast",
    description: "Relaxing getaways by pristine waters",
    icon: Waves,
    color: "bg-blue-500",
    count: "157+ destinations",
    rating: "4.9"
  },
  {
    id: 3,
    name: "City Escapes",
    description: "Urban adventures in vibrant metropolises",
    icon: Building2,
    color: "bg-purple-500",
    count: "200+ cities",
    rating: "4.7"
  },
  {
    id: 4,
    name: "Nature & Wildlife",
    description: "Connect with nature in its purest form",
    icon: TreePine,
    color: "bg-green-500",
    count: "95+ parks",
    rating: "4.8"
  },
  {
    id: 5,
    name: "Photography",
    description: "Picture-perfect spots for memorable shots",
    icon: Camera,
    color: "bg-pink-500",
    count: "150+ locations",
    rating: "4.6"
  },
  {
    id: 6,
    name: "Romance",
    description: "Intimate destinations for couples",
    icon: Heart,
    color: "bg-red-500",
    count: "60+ getaways",
    rating: "4.9"
  }
];

export const TravelCategories = () => {
  return (
    <section id="experiences" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-orange-400 fill-current" />
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              Top Rated Categories
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4 sm:px-0">
            Explore by Interest
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Discover destinations tailored to your interests. From thrilling adventures to peaceful retreats, 
            find experiences that match your travel style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                      <span className="text-sm font-medium text-gray-700">{category.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 group-hover:text-gray-700 transition-colors">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">{category.count}</span>
                    <div className="flex items-center gap-1 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
              Can't find your perfect category?
            </h3>
            <p className="text-gray-600 mb-6">
              Browse our complete directory of 157+ destinations to find exactly what you're looking for.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              View All Destinations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};