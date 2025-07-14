import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Optimized icon imports - using lightweight alternatives
import { 
  CameraIcon, 
  MapPinIcon, 
  ClockIcon, 
  DollarSignIcon, 
  StarIcon, 
  HeartIcon,
  EyeIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon
} from '@/components/icons/LightweightIcons';

// Simple SVG icons for less critical elements
const SimpleIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center justify-center ${className}`}>{children}</span>
);

// Lightweight icon alternatives
const LightbulbIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17h8v-2.3c1.8-1.2 3-3.3 3-5.7 0-3.9-3.1-7-7-7z"/>
  </svg>
);

const TrendingIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/>
    <polyline points="17,6 23,6 23,12"/>
  </svg>
);

const AwardIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
  </svg>
);

const TargetIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

const UtensilsIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 2 1.5 12L5 22l5-3 5 3 .5-8L18 2l-5 3-5-3z"/>
    <path d="M9 12V6.5a2.5 2.5 0 0 1 5 0V12"/>
  </svg>
);

const CoffeeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2V15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V2"/>
    <path d="M18 10h4v4a2 2 0 0 1-2 2h-2"/>
    <path d="M6 2h12"/>
    <path d="M10 8V6"/>
    <path d="M14 8V6"/>
  </svg>
);

const ZapIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
);

// Use lightweight arrow icons for navigation
const ChevronLeftIcon = ArrowLeftIcon;
const ChevronRightIcon = ArrowRightIcon;

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
      // Use discoveryTags experienceLevel if available
      const experienceLevel = attraction.discoveryTags?.experienceLevel?.toLowerCase() || '';
      
      if (experienceLevel) {
        if (experienceLevel.includes('easy') || experienceLevel.includes('accessible')) {
          categories.easyAccess.push(attraction);
        } else if (experienceLevel.includes('moderate') || experienceLevel.includes('intermediate')) {
          categories.moderateAdventure.push(attraction);
        } else if (experienceLevel.includes('expert') || experienceLevel.includes('advanced')) {
          categories.localExpert.push(attraction);
        } else {
          // Default to easy access if unclear
          categories.easyAccess.push(attraction);
        }
      } else {
        // Fall back to description analysis if no discoveryTags
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
      }
    });

    return categories;
  };

  // Helper function to extract insider tips from descriptions and discovery tags
  const extractInsiderTips = (attractions: Attraction[]) => {
    const tips: string[] = [];
    
    // PRIORITIZE: Use local secrets from discovery data first if available
    if (discoveryData?.localSecrets) {
      tips.push(...discoveryData.localSecrets);
    }
    
    // Then add dedicated insider tips from discovery tags if we need more
    if (tips.length < 6) {
      attractions.forEach(attraction => {
        if (attraction.discoveryTags?.insiderTip) {
          tips.push(attraction.discoveryTags.insiderTip);
        }
      });
    }
    
    // Finally extract from descriptions if still needed
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
      icon: <LightbulbIcon className="w-5 h-5 text-yellow-500" />,
      color: "yellow",
      summary: `${insiderTips.length} insider tips`,
      content: insiderTips.slice(0, 4).map((tip, index) => (
        <div key={index} className="mb-3 p-3 bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border-l-4 border-amber-400 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-1 bg-amber-100 dark:bg-amber-800/30 rounded-lg">
              <LightbulbIcon className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
          </div>
        </div>
      ))
    },
    {
      title: "Photo Spots",
      icon: <CameraIcon className="w-5 h-5 text-blue-500" />,
      color: "blue", 
      summary: `${photoOps.length} photo opportunities`,
      content: photoOps.slice(0, 4).map((op, index) => (
        <div key={index} className="mb-3 p-3 bg-gradient-to-r from-sky-50/80 to-blue-50/80 dark:from-sky-900/20 dark:to-blue-900/20 rounded-xl border-l-4 border-sky-400 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-1 bg-sky-100 dark:bg-sky-800/30 rounded-lg">
              <CameraIcon className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sky-700 dark:text-sky-300 text-sm mb-1">{op.spot}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {op.description}
              </p>
            </div>
          </div>
        </div>
      ))
    },
    {
      title: "Experience Levels",
      icon: <TargetIcon className="w-5 h-5 text-green-500" />,
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
      icon: <ClockIcon className="w-5 h-5 text-indigo-500" />,
      color: "indigo",
      summary: `Planning guide for ${attractions.length} attractions`,
      content: (
        <div className="space-y-3">
          {attractions.slice(0, 4).map((attr, index) => (
            <div key={index} className="p-3 bg-gradient-to-r from-violet-50/80 to-purple-50/80 dark:from-violet-900/20 dark:to-purple-900/20 rounded-xl border-l-4 border-violet-400 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-1 bg-violet-100 dark:bg-violet-800/30 rounded-lg">
                  <ClockIcon className="w-4 h-4 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-violet-700 dark:text-violet-300 mb-2 text-sm">
                    {attr.name}
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs bg-white/80 border-violet-200">
                      <ClockIcon className="w-3 h-3 mr-1" />
                      {getTimeEstimate(attr)}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-white/80 border-violet-200">
                      <DollarSignIcon className="w-3 h-3 mr-1" />
                      {getCostLevel(attr)}
                    </Badge>
                    <Badge variant="outline" className="text-xs bg-white/80 border-violet-200">
                      <CalendarIcon className="w-3 h-3 mr-1" />
                      {getSeasonalInfo(attr)}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Hidden Gems",
      icon: <EyeIcon className="w-5 h-5 text-pink-500" />,
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
            <div key={index} className="p-3 bg-gradient-to-r from-rose-50/80 to-pink-50/80 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl border-l-4 border-rose-400 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-1 bg-rose-100 dark:bg-rose-800/30 rounded-lg">
                  <EyeIcon className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-rose-700 dark:text-rose-300 mb-1 text-sm">
                    {attr.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {attr.description.split('.')[0]}.
                  </p>
                </div>
              </div>
            </div>
          ))}
          {attractions.filter(attr => 
            attr.description.toLowerCase().includes('hidden') || 
            attr.description.toLowerCase().includes('secret') ||
            attr.description.toLowerCase().includes('local') ||
            !highlights.includes(attr.name)
          ).length === 0 && (
            <div className="text-center p-4">
              <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg inline-block">
                <EyeIcon className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              </div>
              <p className="text-xs text-gray-500 italic">Explore beyond the highlights!</p>
            </div>
          )}
        </div>
      )
    },
    {
      title: "Dining",
      icon: <CoffeeIcon className="w-5 h-5 text-orange-600" />,
      color: "orange",
      summary: `${diningOptions.length} dining options`,
      content: (
        <div className="space-y-3">
          {diningOptions.length > 0 ? (
            <>
              {diningOptions.slice(0, 3).map((option, index) => (
                <div key={index} className="p-3 bg-gradient-to-r from-orange-50/80 to-amber-50/80 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl border-l-4 border-orange-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-orange-100 dark:bg-orange-800/30 rounded-lg">
                      <UtensilsIcon className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 text-sm">
                          {option.name}
                        </h4>
                        <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300 text-xs">
                          {option.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {discoveryData?.diningHighlights?.diningTips && (
                <div className="p-3 bg-gradient-to-r from-amber-50/80 to-yellow-50/80 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl border-l-4 border-amber-400 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-1 bg-amber-100 dark:bg-amber-800/30 rounded-lg">
                      <LightbulbIcon className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 text-sm">Dining Tips</h4>
                        <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-300 text-xs">
                          Local Advice
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{discoveryData.diningHighlights.diningTips}</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center p-4">
              <CoffeeIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
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
      icon: <ZapIcon className="w-5 h-5 text-amber-500" />,
      color: "amber",
      summary: `${discoveryData?.quickFacts?.totalAttractions || attractions.length} attractions overview`,
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl text-center border-l-4 border-amber-400 shadow-sm">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                {discoveryData?.quickFacts?.totalAttractions || attractions.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Total Attractions</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-emerald-50/80 to-teal-50/80 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl text-center border-l-4 border-emerald-400 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                {discoveryData?.quickFacts?.freeActivities || attractions.filter(attr => getCostLevel(attr) === 'Free').length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Free Activities</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-gradient-to-br from-sky-50/80 to-blue-50/80 dark:from-sky-900/20 dark:to-blue-900/20 rounded-xl text-center border-l-4 border-sky-400 shadow-sm">
              <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                {discoveryData?.quickFacts?.averageTimePerAttraction || 'Varies'}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Average Time</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50/80 to-violet-50/80 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl text-center border-l-4 border-purple-400 shadow-sm">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {discoveryData?.quickFacts?.walkingFriendly ? 'Yes' : 'Varies'}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Walking Friendly</div>
            </div>
          </div>
          {discoveryData?.quickFacts?.publicTransportQuality && (
            <div className="p-3 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border-l-4 border-indigo-400 shadow-sm">
              <div className="text-center">
                <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {discoveryData.quickFacts.publicTransportQuality}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Public Transport</div>
              </div>
            </div>
          )}
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
              className="flex-shrink-0 w-[340px] sm:w-96 lg:w-[420px] h-[380px] sm:h-[420px] bg-gradient-to-br from-white to-gray-50/30 dark:from-gray-900 dark:to-gray-800/50 hover:shadow-xl hover:shadow-blue-100/20 dark:hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 snap-start border border-gray-200/50 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-md cursor-pointer group backdrop-blur-sm"
              onClick={() => handleCardClick(index)}
            >
              <div className="h-full flex flex-col relative">
                {/* Subtle travel-themed background pattern */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-500 via-teal-500 to-green-500"></div>
                
                <CardHeader className="pb-4 pt-6 px-6 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:from-transparent dark:via-gray-800/80 dark:to-transparent flex-shrink-0 border-b border-gray-200/30 dark:border-gray-700/30 backdrop-blur-sm">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-800 dark:text-white mb-2 relative">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 shadow-sm group-hover:shadow-md transition-all duration-300 border border-blue-100/50 dark:border-blue-800/50">
                      <div className="text-blue-600 dark:text-blue-400">
                        {card.icon}
                      </div>
                    </div>
                    <span className="truncate text-gray-800 dark:text-gray-100">{card.title}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M8 3v3a2 2 0 0 1-2 2H3M18 8h3m-3 8h3M8 21v-3a2 2 0 0 0-2-2H3M16 8V5a2 2 0 0 0-2-2H11M16 16v3a2 2 0 0 1-2 2H11"/>
                      </svg>
                    </div>
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                    {card.summary}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 p-6 bg-gradient-to-b from-transparent to-gray-50/30 dark:to-gray-800/30 overflow-y-auto relative">
                  <div className="space-y-4 relative z-10">
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
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-gradient-to-br from-white via-gray-50/80 to-white dark:from-gray-900 dark:via-gray-800/80 dark:to-gray-900 rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm animate-in fade-in-0 zoom-in-95 duration-300 relative">
            {/* Subtle travel-themed background pattern */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-blue-500 via-teal-500 to-green-500 pointer-events-none"></div>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200/30 dark:border-gray-700/30 bg-gradient-to-r from-transparent via-white/80 to-transparent dark:from-transparent dark:via-gray-800/80 dark:to-transparent backdrop-blur-sm">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/30 dark:to-teal-900/30 shadow-sm border border-blue-100/50 dark:border-blue-800/50 flex-shrink-0">
                  <div className="text-blue-600 dark:text-blue-400">
                    {discoveryCards[selectedCard].icon}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white truncate">
                    {discoveryCards[selectedCard].title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 truncate">
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
                  <ChevronLeftIcon className="h-4 w-4" />
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
                  <ChevronRightIcon className="h-4 w-4" />
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
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh] relative">
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 relative z-10">
                {discoveryCards[selectedCard].content}
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 border-t border-gray-200/30 dark:border-gray-700/30 bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm gap-3 sm:gap-0">
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                <span className="sm:hidden">Swipe or use buttons to navigate</span>
                <span className="hidden sm:inline">Use arrow keys to navigate • Press Esc to close</span>
              </p>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" onClick={handleModalPrev} size="sm" className="flex-1 sm:flex-none">
                  <ChevronLeftIcon className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Previous</span>
                  <span className="sm:hidden">Prev</span>
                </Button>
                <Button variant="outline" onClick={handleModalNext} size="sm" className="flex-1 sm:flex-none">
                  <span className="hidden sm:inline">Next</span>
                  <span className="sm:hidden">Next</span>
                  <ChevronRightIcon className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};