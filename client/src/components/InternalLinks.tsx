import React from 'react';
import { ArrowRightIcon, MapPinIcon, BookOpenIcon, CompassIcon } from '@/components/icons/LightweightIcons';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { InternalLink } from '@/utils/seo';

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
  description?: string;
  className?: string;
}

const getIconForType = (type: string) => {
  switch (type) {
    case 'city':
      return <MapPinIcon className="h-4 w-4" />;
    case 'blog':
      return <BookOpenIcon className="h-4 w-4" />;
    case 'category':
      return <CompassIcon className="h-4 w-4" />;
    default:
      return <ArrowRightIcon className="h-4 w-4" />;
  }
};

const getBadgeVariant = (type: string) => {
  switch (type) {
    case 'city':
      return 'bg-green-100 text-green-800 border-green-300';
    case 'blog':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'category':
      return 'bg-orange-100 text-orange-800 border-orange-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

export const InternalLinks: React.FC<InternalLinksProps> = ({
  links,
  title = "Related Content",
  description = "Discover more amazing destinations and travel insights",
  className = ""
}) => {
  if (links.length === 0) return null;

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block group"
            >
              <Card className="h-full border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-green-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getIconForType(link.type)}
                      <Badge
                        variant="outline"
                        className={`text-xs ${getBadgeVariant(link.type)}`}
                      >
                        {link.type === 'city' ? 'Destination' : 
                         link.type === 'blog' ? 'Blog Post' : 'Category'}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {Math.round(link.relevanceScore * 100)}% match
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {link.title}
                  </h3>
                  
                  <div className="flex items-center text-green-600 group-hover:text-green-700 font-medium text-sm">
                    <span>
                      {link.type === 'city' ? 'Explore Destination' : 
                       link.type === 'blog' ? 'Read Article' : 'Browse Category'}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};