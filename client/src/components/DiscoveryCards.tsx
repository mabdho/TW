import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  Coffee,
  ChevronLeft,
  ChevronRight
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
  discoveryTags?: {
    timeRequired?: string;
    experienceLevel?: string;
    interests?: string[];
    costLevel?: string;
    seasonalBest?: string;
    photoOpportunity?: string;
    insiderTip?: string;
    hiddenGem?: boolean;
    familyFriendly?: boolean;
    accessibilityNotes?: string;
  };
}

interface DiscoveryCardsProps {
  attractions: Attraction[];
  cityName: string;
  highlights: string[];
  discoveryData?: {
    localSecrets?: string[];
    budgetBreakdown?: {
      freeActivities?: string;
      budgetFriendly?: string;
      splurgeWorthy?: string;
    };
    diningHighlights?: {
      mustTryDishes?: string;
      bestCafes?: string;
      topRestaurants?: string;
      foodMarkets?: string;
      diningTips?: string;
    };
    seasonalHighlights?: {
      spring?: string;
      summer?: string;
      fall?: string;
      winter?: string;
    };
    quickFacts?: {
      totalAttractions?: string;
      freeActivities?: string;
      averageTimePerAttraction?: string;
      walkingFriendly?: boolean;
      publicTransportQuality?: string;
    };
  };
}

export const DiscoveryCards: React.FC<DiscoveryCardsProps> = ({ 
  attractions, 
  cityName, 
  highlights,
  discoveryData 
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

  // Helper function to extract insider tips from descriptions and discovery tags
  const extractInsiderTips = (attractions: Attraction[]) => {
    const tips: string[] = [];
    
    // First, use dedicated insider tips from discovery tags
    attractions.forEach(attraction => {
      if (attraction.discoveryTags?.insiderTip) {
        tips.push(attraction.discoveryTags.insiderTip);
      }
    });
    
    // Then extract from descriptions if needed
    if (tips.length < 6) {
      attractions.forEach(attraction => {
        const desc = attraction.description;
        const sentences = desc.split(/[.!?]+/);
        sentences.forEach(sentence => {
          if (sentence.includes('tip') || sentence.includes('recommend') || sentence.includes('best time') || 
              sentence.includes('avoid') || sentence.includes('don\'t miss') || sentence.includes('be sure to') ||
              sentence.includes('consider') || sentence.includes('worth') || sentence.includes('should')) {
            tips.push(sentence.trim() + '.');
          }
        });
      });
    }
    
    // Add local secrets from discovery data if available
    if (discoveryData?.localSecrets) {
      tips.push(...discoveryData.localSecrets);
    }
    
    return tips.slice(0, 6); // Limit to 6 tips
  };

  // Helper function to extract photo opportunities from descriptions and discovery tags
  const extractPhotoOps = (attractions: Attraction[]) => {
    const photoOps: Array<{spot: string, description: string}> = [];
    
    // First, use dedicated photo opportunities from discovery tags
    attractions.forEach(attraction => {
      if (attraction.discoveryTags?.photoOpportunity) {
        photoOps.push({
          spot: attraction.name,
          description: attraction.discoveryTags.photoOpportunity
        });
      }
    });
    
    // Then extract from descriptions if needed
    if (photoOps.length < 6) {
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
    }
    
    return photoOps.slice(0, 6);
  };

  // Helper function to calculate estimated time for attractions
  const getTimeEstimate = (attraction: Attraction) => {
    // Use discovery tags if available
    if (attraction.discoveryTags?.timeRequired) {
      return attraction.discoveryTags.timeRequired;
    }
    
    // Fall back to description analysis
    const desc = attraction.description.toLowerCase();
    if (desc.includes('hours') || desc.includes('day') || desc.includes('entire')) return 'Half Day+';
    if (desc.includes('stroll') || desc.includes('walk') || desc.includes('explore')) return '1-2 Hours';
    return '30-60 Min';
  };

  // Helper function to get cost level
  const getCostLevel = (attraction: Attraction) => {
    // Use discovery tags if available
    if (attraction.discoveryTags?.costLevel) {
      return attraction.discoveryTags.costLevel;
    }
    
    // Fall back to practical info analysis
    const cost = attraction.practicalInfo?.cost?.toLowerCase() || '';
    if (cost.includes('free')) return 'Free';
    if (cost.includes('$') || cost.includes('expensive') || cost.includes('fee')) return 'Paid';
    return 'Varies';
  };

  // Helper function to extract seasonal info
  const getSeasonalInfo = (attraction: Attraction) => {
    // Use discovery tags if available
    if (attraction.discoveryTags?.seasonalBest) {
      return attraction.discoveryTags.seasonalBest;
    }
    
    // Fall back to description analysis
    const desc = attraction.description.toLowerCase();
    if (desc.includes('summer') || desc.includes('warm')) return 'Best in Summer';
    if (desc.includes('winter') || desc.includes('cold')) return 'Winter Special';
    if (desc.includes('spring') || desc.includes('fall')) return 'Spring/Fall';
    return 'Year-Round';
  };

  // Helper function to extract cafes and restaurants from attractions and discovery data
  const extractDiningOptions = (attractions: Attraction[]) => {
    const diningOptions: Array<{name: string, type: string, description: string}> = [];
    
    // First, add dedicated dining highlights from discovery data if available
    if (discoveryData?.diningHighlights) {
      const highlights = discoveryData.diningHighlights;
      
      if (highlights.bestCafes) {
        diningOptions.push({
          name: "Local Cafes",
          type: "Cafe",
          description: highlights.bestCafes
        });
      }
      
      if (highlights.topRestaurants) {
        diningOptions.push({
          name: "Top Restaurants",
          type: "Restaurant", 
          description: highlights.topRestaurants
        });
      }
      
      if (highlights.foodMarkets) {
        diningOptions.push({
          name: "Food Markets",
          type: "Food Market",
          description: highlights.foodMarkets
        });
      }
      
      if (highlights.mustTryDishes) {
        diningOptions.push({
          name: "Must-Try Dishes",
          type: "Local Cuisine",
          description: highlights.mustTryDishes
        });
      }
    }
    
    // Then, extract dining attractions from the attractions list
    attractions.forEach(attraction => {
      const desc = attraction.description.toLowerCase();
      const name = attraction.name;
      
      // Check for dining-related keywords
      if (desc.includes('restaurant') || desc.includes('cafe') || desc.includes('coffee') || 
          desc.includes('dining') || desc.includes('food') || desc.includes('cuisine') ||
          desc.includes('eatery') || desc.includes('bistro') || desc.includes('brasserie') ||
          desc.includes('tavern') || desc.includes('pub') || desc.includes('bar') ||
          desc.includes('market') && (desc.includes('food') || desc.includes('eat')) ||
          desc.includes('culinary') || desc.includes('gastronom') || desc.includes('menu') ||
          desc.includes('meal') || desc.includes('breakfast') || desc.includes('lunch') || desc.includes('dinner')) {
        
        let type = 'Dining';
        if (desc.includes('cafe') || desc.includes('coffee')) type = 'Cafe';
        else if (desc.includes('restaurant') || desc.includes('dining')) type = 'Restaurant';
        else if (desc.includes('market') && desc.includes('food')) type = 'Food Market';
        else if (desc.includes('pub') || desc.includes('bar') || desc.includes('tavern')) type = 'Bar/Pub';
        else if (desc.includes('street food') || desc.includes('vendor')) type = 'Street Food';
        
        // Extract a relevant snippet about the dining experience
        const sentences = attraction.description.split(/[.!?]+/);
        let relevantSentence = sentences.find(sentence => 
          sentence.toLowerCase().includes('food') || 
          sentence.toLowerCase().includes('restaurant') ||
          sentence.toLowerCase().includes('cafe') ||
          sentence.toLowerCase().includes('cuisine') ||
          sentence.toLowerCase().includes('meal') ||
          sentence.toLowerCase().includes('dining')
        ) || sentences[0];
        
        diningOptions.push({
          name: name,
          type: type,
          description: relevantSentence.trim() + (relevantSentence.endsWith('.') ? '' : '.')
        });
      }
    });
    
    return diningOptions.slice(0, 6); // Limit to 6 options
  };

  const categories = categorizeAttractions(attractions);
  const insiderTips = extractInsiderTips(attractions);
  const photoOps = extractPhotoOps(attractions);
  const diningOptions = extractDiningOptions(attractions);

  const discoveryCards = [
    {
      title: "Local Insider Tips",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      color: "yellow",
      summary: `${insiderTips.length} insider tips`,
      content: insiderTips.slice(0, 3).map((tip, index) => (
        <div key={index} className="mb-2 text-sm text-gray-700 dark:text-gray-300">
          • {tip.length > 80 ? tip.substring(0, 80) + '...' : tip}
        </div>
      ))
    },
    {
      title: "Photo Spots",
      icon: <Camera className="w-5 h-5 text-blue-500" />,
      color: "blue", 
      summary: `${photoOps.length} photo opportunities`,
      content: photoOps.slice(0, 3).map((op, index) => (
        <div key={index} className="mb-2">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm">{op.spot}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {op.description.length > 70 ? op.description.substring(0, 70) + '...' : op.description}
          </p>
        </div>
      ))
    },
    {
      title: "Experience Levels",
      icon: <Target className="w-5 h-5 text-green-500" />,
      color: "green",
      summary: `${categories.easyAccess.length + categories.moderateAdventure.length + categories.localExpert.length} attractions categorized`,
      content: (
        <div className="space-y-2">
          {categories.easyAccess.length > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 text-xs">
                Easy Access
              </Badge>
              <span className="text-xs text-gray-600">{categories.easyAccess.length}</span>
            </div>
          )}
          {categories.moderateAdventure.length > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300 text-xs">
                Moderate
              </Badge>
              <span className="text-xs text-gray-600">{categories.moderateAdventure.length}</span>
            </div>
          )}
          {categories.localExpert.length > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300 text-xs">
                Expert
              </Badge>
              <span className="text-xs text-gray-600">{categories.localExpert.length}</span>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Time & Budget",
      icon: <Clock className="w-5 h-5 text-indigo-500" />,
      color: "indigo",
      summary: `Planning guide for ${attractions.length} attractions`,
      content: (
        <div className="space-y-2">
          {attractions.slice(0, 2).map((attr, index) => (
            <div key={index} className="text-sm">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
                {attr.name.length > 25 ? attr.name.substring(0, 25) + '...' : attr.name}
              </h4>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {getTimeEstimate(attr)}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <DollarSign className="w-3 h-3 mr-1" />
                  {getCostLevel(attr)}
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
      color: "pink",
      summary: `${attractions.filter(attr => 
        attr.description.toLowerCase().includes('hidden') || 
        attr.description.toLowerCase().includes('secret') ||
        attr.description.toLowerCase().includes('local') ||
        !highlights.includes(attr.name)
      ).length} hidden gems`,
      content: (
        <div className="space-y-2">
          {attractions.filter(attr => 
            attr.description.toLowerCase().includes('hidden') || 
            attr.description.toLowerCase().includes('secret') ||
            attr.description.toLowerCase().includes('local') ||
            !highlights.includes(attr.name)
          ).slice(0, 2).map((attr, index) => (
            <div key={index} className="text-sm">
              <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">
                {attr.name.length > 25 ? attr.name.substring(0, 25) + '...' : attr.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {attr.description.split('.')[0].substring(0, 60)}...
              </p>
            </div>
          ))}
          {attractions.filter(attr => 
            attr.description.toLowerCase().includes('hidden') || 
            attr.description.toLowerCase().includes('secret') ||
            attr.description.toLowerCase().includes('local') ||
            !highlights.includes(attr.name)
          ).length === 0 && (
            <p className="text-xs text-gray-500 italic">Explore beyond the highlights!</p>
          )}
        </div>
      )
    },
    {
      title: "Dining",
      icon: <Coffee className="w-5 h-5 text-orange-600" />,
      color: "orange",
      summary: `${diningOptions.length} dining options`,
      content: (
        <div className="space-y-2">
          {diningOptions.length > 0 ? (
            <>
              {diningOptions.slice(0, 2).map((option, index) => (
                <div key={index} className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300">
                      {option.name.length > 20 ? option.name.substring(0, 20) + '...' : option.name}
                    </h4>
                    <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300 text-xs">
                      {option.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {option.description.length > 60 ? option.description.substring(0, 60) + '...' : option.description}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center">
              <Coffee className="w-6 h-6 text-gray-400 mx-auto mb-1" />
              <p className="text-xs text-gray-500 italic">
                Discover local dining!
              </p>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Quick Facts",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      color: "amber",
      summary: `${attractions.length} attractions overview`,
      content: (
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-center">
            <div className="text-lg font-bold text-amber-600">{attractions.length}</div>
            <div className="text-xs text-gray-600">Total</div>
          </div>
          <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center">
            <div className="text-lg font-bold text-emerald-600">
              {attractions.filter(attr => getCostLevel(attr) === 'Free').length}
            </div>
            <div className="text-xs text-gray-600">Free</div>
          </div>
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
            <div className="text-lg font-bold text-blue-600">
              {attractions.filter(attr => getTimeEstimate(attr) === '30-60 Min').length}
            </div>
            <div className="text-xs text-gray-600">Quick</div>
          </div>
          <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
            <div className="text-lg font-bold text-purple-600">
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
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Discover {cityName}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Interactive guides to help you explore like a local
        </p>
      </div>

      {/* Horizontal Slider */}
      <div className="relative -mx-4">
        <div 
          className="flex gap-4 overflow-x-auto pb-4 pl-4 pr-4 scrollbar-hide snap-x snap-mandatory touch-pan-x" 
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {discoveryCards.map((card, index) => (
            <Card key={index} className="flex-shrink-0 w-[280px] sm:w-72 lg:w-80 h-44 sm:h-48 hover:shadow-lg transition-shadow duration-200 snap-start border-2 border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  {card.icon}
                  <span className="truncate">{card.title}</span>
                </CardTitle>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {card.summary}
                </p>
              </CardHeader>
              <CardContent className="pt-0 h-20 sm:h-24 overflow-hidden">
                {card.content}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-2 space-x-1">
          {discoveryCards.map((_, index) => (
            <div
              key={index}
              className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"
            />
          ))}
        </div>
      </div>

      {/* Mobile-friendly note */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Swipe left to explore more discovery cards
        </p>
      </div>
    </div>
  );
};