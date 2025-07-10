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
    count: "158+ destinations",
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
    <section id="experiences" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Plan your trip by interest
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find destinations perfectly suited to your travel style and interests.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
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
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};