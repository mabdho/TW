import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Lightbulb, 
  Camera, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Users,
  Compass,
  Calendar,
  Target,
  Eye,
  Heart,
  Zap,
  Award,
  TrendingUp,
  Coffee
} from 'lucide-react';

interface Attraction {
  name: string;
  description: string;
  practicalInfo?: {
    howToGetThere?: string;
    openingHours?: string;
    cost?: string;
    website?: string;
  };
}

interface DiscoveryCardsProps {
  attractions: Attraction[];
  cityName: string;
  highlights: string[];
}

export const DiscoveryCards: React.FC<DiscoveryCardsProps> = ({ 
  attractions, 
  cityName, 
  highlights 
}) => {
  const [activeCard, setActiveCard] = useState(0);

  // Helper function to categorize attractions by difficulty/accessibility
  const categorizeAttractions = (attractions: Attraction[]) => {
    const categories = {
      easyAccess: [] as Attraction[],
      moderateAdventure: [] as Attraction[],
      localExpert: [] as Attraction[]
    };

    attractions.forEach(attraction => {
      const desc = attraction.description.toLowerCase();
      const hasEasyAccess = desc.includes('easy') || desc.includes('accessible') || desc.includes('central') || desc.includes('main');
      const hasModerateAccess = desc.includes('walk') || desc.includes('bike') || desc.includes('explore') || desc.includes('stroll');
      const hasExpertLevel = desc.includes('hidden') || desc.includes('local') || desc.includes('secret') || desc.includes('off the beaten');
      
      if (hasExpertLevel) {
        categories.localExpert.push(attraction);
      } else if (hasModerateAccess) {
        categories.moderateAdventure.push(attraction);
      } else {
        categories.easyAccess.push(attraction);
      }
    });

    return categories;
  };

  // Helper function to extract insider tips from descriptions
  const extractInsiderTips = (attractions: Attraction[]) => {
    const tips: string[] = [];
    attractions.forEach(attraction => {
      const desc = attraction.description;
      // Extract sentences that contain tip-like phrases
      const sentences = desc.split(/[.!?]+/);
      sentences.forEach(sentence => {
        if (sentence.includes('tip') || sentence.includes('recommend') || sentence.includes('best time') || 
            sentence.includes('avoid') || sentence.includes('don\'t miss') || sentence.includes('be sure to') ||
            sentence.includes('consider') || sentence.includes('worth') || sentence.includes('should')) {
          tips.push(sentence.trim() + '.');
        }
      });
    });
    return tips.slice(0, 6); // Limit to 6 tips
  };

  // Helper function to extract photo opportunities from descriptions
  const extractPhotoOps = (attractions: Attraction[]) => {
    const photoOps: Array<{spot: string, description: string}> = [];
    attractions.forEach(attraction => {
      const desc = attraction.description;
      if (desc.includes('view') || desc.includes('photo') || desc.includes('picture') || 
          desc.includes('sunset') || desc.includes('panoramic') || desc.includes('stunning')) {
        photoOps.push({
          spot: attraction.name,
          description: desc.split('.')[0] + '.'
        });
      }
    });
    return photoOps.slice(0, 6);
  };

  // Helper function to calculate estimated time for attractions
  const getTimeEstimate = (attraction: Attraction) => {
    const desc = attraction.description.toLowerCase();
    if (desc.includes('hours') || desc.includes('day') || desc.includes('entire')) return 'Half Day+';
    if (desc.includes('stroll') || desc.includes('walk') || desc.includes('explore')) return '1-2 Hours';
    return '30-60 Min';
  };

  // Helper function to get cost level
  const getCostLevel = (attraction: Attraction) => {
    const cost = attraction.practicalInfo?.cost?.toLowerCase() || '';
    if (cost.includes('free')) return 'Free';
    if (cost.includes('$') || cost.includes('expensive') || cost.includes('fee')) return 'Paid';
    return 'Varies';
  };

  // Helper function to extract seasonal info
  const getSeasonalInfo = (attraction: Attraction) => {
    const desc = attraction.description.toLowerCase();
    if (desc.includes('summer') || desc.includes('warm')) return 'Best in Summer';
    if (desc.includes('winter') || desc.includes('cold')) return 'Winter Special';
    if (desc.includes('spring') || desc.includes('fall')) return 'Spring/Fall';
    return 'Year-Round';
  };

  const categories = categorizeAttractions(attractions);
  const insiderTips = extractInsiderTips(attractions);
  const photoOps = extractPhotoOps(attractions);

  const discoveryCards = [
    {
      title: "Local Insider Tips",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      content: insiderTips.map((tip, index) => (
        <div key={index} className="mb-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
          <p className="text-sm text-gray-700 dark:text-gray-300">{tip}</p>
        </div>
      ))
    },
    {
      title: "Photo Opportunities",
      icon: <Camera className="w-5 h-5 text-blue-500" />,
      content: photoOps.map((op, index) => (
        <div key={index} className="mb-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">{op.spot}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{op.description}</p>
        </div>
      ))
    },
    {
      title: "Experience Levels",
      icon: <Target className="w-5 h-5 text-green-500" />,
      content: (
        <div className="space-y-4">
          {categories.easyAccess.length > 0 && (
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300">
                  Easy Access
                </Badge>
                <span className="text-sm text-gray-600">{categories.easyAccess.length} attractions</span>
              </div>
              <div className="space-y-1">
                {categories.easyAccess.slice(0, 3).map((attr, index) => (
                  <p key={index} className="text-sm text-gray-700 dark:text-gray-300">• {attr.name}</p>
                ))}
              </div>
            </div>
          )}
          {categories.moderateAdventure.length > 0 && (
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300">
                  Moderate Adventure
                </Badge>
                <span className="text-sm text-gray-600">{categories.moderateAdventure.length} attractions</span>
              </div>
              <div className="space-y-1">
                {categories.moderateAdventure.slice(0, 3).map((attr, index) => (
                  <p key={index} className="text-sm text-gray-700 dark:text-gray-300">• {attr.name}</p>
                ))}
              </div>
            </div>
          )}
          {categories.localExpert.length > 0 && (
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300">
                  Local Expert
                </Badge>
                <span className="text-sm text-gray-600">{categories.localExpert.length} attractions</span>
              </div>
              <div className="space-y-1">
                {categories.localExpert.slice(0, 3).map((attr, index) => (
                  <p key={index} className="text-sm text-gray-700 dark:text-gray-300">• {attr.name}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Time & Budget Guide",
      icon: <Clock className="w-5 h-5 text-indigo-500" />,
      content: (
        <div className="space-y-3">
          {attractions.slice(0, 4).map((attr, index) => (
            <div key={index} className="p-3 border rounded-lg">
              <h4 className="font-semibold text-sm mb-2">{attr.name}</h4>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {getTimeEstimate(attr)}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <DollarSign className="w-3 h-3 mr-1" />
                  {getCostLevel(attr)}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  {getSeasonalInfo(attr)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Hidden Gems",
      icon: <Eye className="w-5 h-5 text-pink-500" />,
      content: (
        <div className="space-y-3">
          {attractions.filter(attr => 
            attr.description.toLowerCase().includes('hidden') || 
            attr.description.toLowerCase().includes('secret') ||
            attr.description.toLowerCase().includes('local') ||
            !highlights.includes(attr.name)
          ).slice(0, 3).map((attr, index) => (
            <div key={index} className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg border-l-4 border-pink-400">
              <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">{attr.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {attr.description.split('.')[0]}.
              </p>
            </div>
          ))}
          {attractions.filter(attr => 
            attr.description.toLowerCase().includes('hidden') || 
            attr.description.toLowerCase().includes('secret') ||
            attr.description.toLowerCase().includes('local') ||
            !highlights.includes(attr.name)
          ).length === 0 && (
            <p className="text-sm text-gray-500 italic">Explore beyond the highlights to discover {cityName}'s hidden treasures!</p>
          )}
        </div>
      )
    },
    {
      title: "Quick Facts",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      content: (
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-amber-600">{attractions.length}</div>
            <div className="text-xs text-gray-600">Total Attractions</div>
          </div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-emerald-600">
              {attractions.filter(attr => getCostLevel(attr) === 'Free').length}
            </div>
            <div className="text-xs text-gray-600">Free Activities</div>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">
              {attractions.filter(attr => getTimeEstimate(attr) === '30-60 Min').length}
            </div>
            <div className="text-xs text-gray-600">Quick Visits</div>
          </div>
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">
              {attractions.filter(attr => getSeasonalInfo(attr) === 'Year-Round').length}
            </div>
            <div className="text-xs text-gray-600">Year-Round</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Discover {cityName}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Interactive guides to help you explore like a local
        </p>
      </div>

      <Tabs defaultValue="0" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
          {discoveryCards.map((card, index) => (
            <TabsTrigger 
              key={index} 
              value={index.toString()}
              className="flex items-center gap-1 text-xs"
            >
              {card.icon}
              <span className="hidden sm:inline">{card.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {discoveryCards.map((card, index) => (
          <TabsContent key={index} value={index.toString()}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {card.icon}
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {card.content}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};