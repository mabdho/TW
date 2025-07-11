import React, { useState, useRef, useEffect } from 'react';
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
  ChevronRight,
  X,
  Maximize2
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
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle card click
  const handleCardClick = (index: number) => {
    setSelectedCard(index);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  // Handle modal navigation
  const handleModalNext = () => {
    if (selectedCard !== null) {
      setSelectedCard((selectedCard + 1) % 6); // 6 discovery cards
    }
  };

  const handleModalPrev = () => {
    if (selectedCard !== null) {
      setSelectedCard(selectedCard === 0 ? 5 : selectedCard - 1); // 6 discovery cards
    }
  };

  // Handle scroll tracking for preview indicators
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = 360; // Approximate card width including gap
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentSlide(Math.max(0, Math.min(newIndex, 5))); // Max 6 cards
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'Escape') {
          handleModalClose();
        } else if (e.key === 'ArrowLeft') {
          handleModalPrev();
        } else if (e.key === 'ArrowRight') {
          handleModalNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedCard]);
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
      content: insiderTips.slice(0, 4).map((tip, index) => (
        <div key={index} className="mb-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-3 border-yellow-400">
          <p className="text-sm text-gray-700 dark:text-gray-300">{tip}</p>
        </div>
      ))
    },
    {
      title: "Photo Spots",
      icon: <Camera className="w-5 h-5 text-blue-500" />,
      color: "blue", 
      summary: `${photoOps.length} photo opportunities`,
      content: photoOps.slice(0, 4).map((op, index) => (
        <div key={index} className="mb-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-3 border-blue-400">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm mb-1">{op.spot}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {op.description}
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
        <div className="space-y-3">
          {attractions.slice(0, 4).map((attr, index) => (
            <div key={index} className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-3 border-indigo-400">
              <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2 text-sm">
                {attr.name}
              </h4>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs bg-white">
                  <Clock className="w-3 h-3 mr-1" />
                  {getTimeEstimate(attr)}
                </Badge>
                <Badge variant="outline" className="text-xs bg-white">
                  <DollarSign className="w-3 h-3 mr-1" />
                  {getCostLevel(attr)}
                </Badge>
                <Badge variant="outline" className="text-xs bg-white">
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
      color: "pink",
      summary: `${attractions.filter(attr => 
        attr.description.toLowerCase().includes('hidden') || 
        attr.description.toLowerCase().includes('secret') ||
        attr.description.toLowerCase().includes('local') ||
        !highlights.includes(attr.name)
      ).length} hidden gems`,
      content: (
        <div className="space-y-3">
          {attractions.filter(attr => 
            attr.description.toLowerCase().includes('hidden') || 
            attr.description.toLowerCase().includes('secret') ||
            attr.description.toLowerCase().includes('local') ||
            !highlights.includes(attr.name)
          ).slice(0, 3).map((attr, index) => (
            <div key={index} className="p-2 bg-pink-50 dark:bg-pink-900/20 rounded-lg border-l-3 border-pink-400">
              <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1 text-sm">
                {attr.name}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
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
            <div className="text-center p-4">
              <Eye className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-500 italic">Explore beyond the highlights!</p>
            </div>
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
        <div className="space-y-3">
          {diningOptions.length > 0 ? (
            <>
              {diningOptions.slice(0, 3).map((option, index) => (
                <div key={index} className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-3 border-orange-400">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300 text-sm">
                      {option.name}
                    </h4>
                    <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300 text-xs">
                      {option.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {option.description}
                  </p>
                </div>
              ))}
              {discoveryData?.diningHighlights?.diningTips && (
                <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-3 border-amber-400">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-300 text-sm">Dining Tips</h4>
                    <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300 text-xs">
                      Local Advice
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{discoveryData.diningHighlights.diningTips}</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center p-4">
              <Coffee className="w-8 h-8 text-gray-400 mx-auto mb-2" />
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
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-center border-l-3 border-amber-400">
              <div className="text-2xl font-bold text-amber-600">{attractions.length}</div>
              <div className="text-xs text-gray-600">Total Attractions</div>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center border-l-3 border-emerald-400">
              <div className="text-2xl font-bold text-emerald-600">
                {attractions.filter(attr => getCostLevel(attr) === 'Free').length}
              </div>
              <div className="text-xs text-gray-600">Free Activities</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center border-l-3 border-blue-400">
              <div className="text-2xl font-bold text-blue-600">
                {attractions.filter(attr => getTimeEstimate(attr) === '30-60 Min').length}
              </div>
              <div className="text-xs text-gray-600">Quick Visits</div>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center border-l-3 border-purple-400">
              <div className="text-2xl font-bold text-purple-600">
                {attractions.filter(attr => getSeasonalInfo(attr) === 'Year-Round').length}
              </div>
              <div className="text-xs text-gray-600">Year-Round</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="w-full py-4">
      <div className="mb-6 sm:mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          Discover {cityName}
        </h3>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
          Interactive guides to help you explore like a local
        </p>
      </div>

      {/* Horizontal Slider */}
      <div className="relative -mx-4 py-2">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pl-6 pr-6 scrollbar-hide snap-x snap-mandatory touch-pan-x" 
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {discoveryCards.map((card, index) => (
            <Card 
              key={index} 
              className="flex-shrink-0 w-[340px] sm:w-96 lg:w-[420px] h-[380px] sm:h-[420px] bg-white dark:bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 snap-start border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => handleCardClick(index)}
            >
              <div className="h-full flex flex-col">
                <CardHeader className="pb-4 pt-6 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 flex-shrink-0 border-b border-gray-200 dark:border-gray-600">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-shadow">
                      {card.icon}
                    </div>
                    <span className="truncate">{card.title}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-5 h-5 text-gray-500" />
                    </div>
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {card.summary}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 p-6 bg-white dark:bg-gray-800 overflow-y-auto">
                  <div className="space-y-4">
                    {card.content}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Preview Indicators - Mobile First */}
        <div className="flex justify-center mt-4 px-2">
          {/* Mobile: Show dots only */}
          <div className="flex sm:hidden justify-center space-x-2">
            {discoveryCards.map((card, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-blue-500 scale-125' : 'bg-gray-400'
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 360;
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                aria-label={`View ${card.title}`}
              />
            ))}
          </div>
          
          {/* Desktop: Show full indicators */}
          <div className="hidden sm:flex justify-center space-x-2 flex-wrap max-w-4xl">
            {discoveryCards.map((card, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 hover:shadow-md ${
                  currentSlide === index 
                    ? 'bg-blue-100 border-blue-300 dark:bg-blue-900/30 dark:border-blue-600' 
                    : 'bg-gray-100 border-gray-200 dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 360;
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <div className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'
                }`} />
                <span className={`text-xs font-medium whitespace-nowrap ${
                  currentSlide === index 
                    ? 'text-blue-700 dark:text-blue-300' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {card.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-friendly note */}
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <span className="sm:hidden">Swipe left • Tap dots to jump • Click cards for details</span>
          <span className="hidden sm:inline">Scroll horizontally • Click indicators to jump • Click any card to view full details</span>
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md flex-shrink-0">
                  {discoveryCards[selectedCard].icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                    {discoveryCards[selectedCard].title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 truncate">
                    {discoveryCards[selectedCard].summary}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleModalPrev}
                  className="h-8 w-8 p-0 sm:h-9 sm:w-9"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-xs sm:text-sm text-gray-500 px-1 sm:px-2 whitespace-nowrap">
                  {selectedCard + 1}/6
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleModalNext}
                  className="h-8 w-8 p-0 sm:h-9 sm:w-9"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleModalClose}
                  className="h-8 w-8 p-0 sm:h-9 sm:w-9 ml-1 sm:ml-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {discoveryCards[selectedCard].content}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 gap-3 sm:gap-0">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                <span className="sm:hidden">Swipe or use buttons to navigate</span>
                <span className="hidden sm:inline">Use arrow keys to navigate • Press Esc to close</span>
              </p>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" onClick={handleModalPrev} size="sm" className="flex-1 sm:flex-none">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </Button>
                <Button variant="outline" onClick={handleModalNext} size="sm" className="flex-1 sm:flex-none">
                  <span className="hidden sm:inline">Next</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};