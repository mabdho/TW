import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Users,
  Camera,
  Building,
  Leaf,
  Palette,
  Coffee,
  Mountain,
  Waves,
  BookOpen,
  Heart,
  Filter,
  Search,
  ExternalLink,
  Calendar
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

interface InteractiveAttractionExplorerProps {
  attractions: Attraction[];
  cityName: string;
  highlights: string[];
}

type FilterType = 'all' | 'free' | 'quick' | 'halfday' | 'indoor' | 'outdoor' | 'cultural' | 'nature';
type InterestType = 'history' | 'art' | 'architecture' | 'nature' | 'food' | 'adventure' | 'relaxation' | 'photography';

export const InteractiveAttractionExplorer: React.FC<InteractiveAttractionExplorerProps> = ({ 
  attractions, 
  cityName, 
  highlights 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedInterests, setSelectedInterests] = useState<InterestType[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Helper functions to categorize attractions
  const getAttractionCategory = (attraction: Attraction) => {
    const desc = attraction.description.toLowerCase();
    const categories = [];
    
    if (desc.includes('museum') || desc.includes('gallery') || desc.includes('art') || desc.includes('history')) {
      categories.push('cultural');
    }
    if (desc.includes('park') || desc.includes('garden') || desc.includes('nature') || desc.includes('outdoor')) {
      categories.push('nature');
    }
    if (desc.includes('indoor') || desc.includes('inside') || desc.includes('building')) {
      categories.push('indoor');
    } else {
      categories.push('outdoor');
    }
    
    return categories;
  };

  const getTimeEstimate = (attraction: Attraction) => {
    // Use discovery tags if available
    if (attraction.discoveryTags?.timeRequired) {
      const time = attraction.discoveryTags.timeRequired.toLowerCase();
      if (time.includes('half day') || time.includes('full day')) return 'halfday';
      if (time.includes('30-60') || time.includes('quick')) return 'quick';
      return 'quick';
    }
    
    // Fall back to description analysis
    const desc = attraction.description.toLowerCase();
    if (desc.includes('hours') || desc.includes('day') || desc.includes('entire')) return 'halfday';
    if (desc.includes('stroll') || desc.includes('walk') || desc.includes('quick')) return 'quick';
    return 'quick';
  };

  const getCostLevel = (attraction: Attraction) => {
    // Use discovery tags if available
    if (attraction.discoveryTags?.costLevel) {
      const cost = attraction.discoveryTags.costLevel.toLowerCase();
      if (cost.includes('free')) return 'free';
      return 'paid';
    }
    
    // Fall back to practical info analysis
    const cost = attraction.practicalInfo?.cost?.toLowerCase() || '';
    if (cost.includes('free')) return 'free';
    return 'paid';
  };

  const getInterestTags = (attraction: Attraction): InterestType[] => {
    // Use discovery tags if available
    if (attraction.discoveryTags?.interests) {
      return attraction.discoveryTags.interests.filter(interest => 
        ['history', 'art', 'architecture', 'nature', 'food', 'adventure', 'relaxation', 'photography'].includes(interest)
      ) as InterestType[];
    }
    
    // Fall back to description analysis
    const desc = attraction.description.toLowerCase();
    const tags: InterestType[] = [];
    
    if (desc.includes('history') || desc.includes('historical') || desc.includes('ancient')) tags.push('history');
    if (desc.includes('art') || desc.includes('artist') || desc.includes('painting') || desc.includes('sculpture')) tags.push('art');
    if (desc.includes('architecture') || desc.includes('building') || desc.includes('design')) tags.push('architecture');
    if (desc.includes('nature') || desc.includes('park') || desc.includes('garden') || desc.includes('wildlife')) tags.push('nature');
    if (desc.includes('food') || desc.includes('restaurant') || desc.includes('cafe') || desc.includes('market')) tags.push('food');
    if (desc.includes('adventure') || desc.includes('climb') || desc.includes('hike') || desc.includes('activity')) tags.push('adventure');
    if (desc.includes('relax') || desc.includes('peaceful') || desc.includes('calm') || desc.includes('quiet')) tags.push('relaxation');
    if (desc.includes('view') || desc.includes('photo') || desc.includes('scenic') || desc.includes('panoramic')) tags.push('photography');
    
    return tags;
  };

  const getAttractionScore = (attraction: Attraction) => {
    let score = 0;
    if (highlights.includes(attraction.name)) score += 10;
    if (attraction.description.length > 300) score += 5;
    if (attraction.practicalInfo?.website) score += 3;
    if (getCostLevel(attraction) === 'free') score += 2;
    if (attraction.discoveryTags?.hiddenGem) score += 8;
    if (attraction.discoveryTags?.insiderTip) score += 4;
    if (attraction.discoveryTags?.photoOpportunity) score += 3;
    return score;
  };

  // Filter attractions based on active filters
  const filteredAttractions = useMemo(() => {
    let filtered = attractions;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(attr => 
        attr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        attr.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(attr => {
        switch (activeFilter) {
          case 'free':
            return getCostLevel(attr) === 'free';
          case 'quick':
            return getTimeEstimate(attr) === 'quick';
          case 'halfday':
            return getTimeEstimate(attr) === 'halfday';
          case 'indoor':
            return getAttractionCategory(attr).includes('indoor');
          case 'outdoor':
            return getAttractionCategory(attr).includes('outdoor');
          case 'cultural':
            return getAttractionCategory(attr).includes('cultural');
          case 'nature':
            return getAttractionCategory(attr).includes('nature');
          default:
            return true;
        }
      });
    }

    // Apply interest filter
    if (selectedInterests.length > 0) {
      filtered = filtered.filter(attr => {
        const interests = getInterestTags(attr);
        return selectedInterests.some(interest => interests.includes(interest));
      });
    }

    // Sort by score (highlights first, then by content quality)
    return filtered.sort((a, b) => getAttractionScore(b) - getAttractionScore(a));
  }, [attractions, searchTerm, activeFilter, selectedInterests, highlights]);

  const filters = [
    { id: 'all', label: 'All', icon: <Filter className="w-4 h-4" /> },
    { id: 'free', label: 'Free', icon: <Heart className="w-4 h-4" /> },
    { id: 'quick', label: 'Quick Visit', icon: <Clock className="w-4 h-4" /> },
    { id: 'halfday', label: 'Half Day+', icon: <Calendar className="w-4 h-4" /> },
    { id: 'indoor', label: 'Indoor', icon: <Building className="w-4 h-4" /> },
    { id: 'outdoor', label: 'Outdoor', icon: <Leaf className="w-4 h-4" /> },
    { id: 'cultural', label: 'Cultural', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'nature', label: 'Nature', icon: <Mountain className="w-4 h-4" /> }
  ];

  const interests = [
    { id: 'history', label: 'History', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'art', label: 'Art', icon: <Palette className="w-4 h-4" /> },
    { id: 'architecture', label: 'Architecture', icon: <Building className="w-4 h-4" /> },
    { id: 'nature', label: 'Nature', icon: <Leaf className="w-4 h-4" /> },
    { id: 'food', label: 'Food', icon: <Coffee className="w-4 h-4" /> },
    { id: 'adventure', label: 'Adventure', icon: <Mountain className="w-4 h-4" /> },
    { id: 'relaxation', label: 'Relaxation', icon: <Waves className="w-4 h-4" /> },
    { id: 'photography', label: 'Photography', icon: <Camera className="w-4 h-4" /> }
  ];

  const toggleInterest = (interest: InterestType) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Explore {cityName} Your Way
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Discover {filteredAttractions.length} attractions tailored to your interests
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search attractions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Filter by Type</h4>
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id as FilterType)}
                className="flex items-center gap-1"
              >
                {filter.icon}
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Interests</h4>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
              <Button
                key={interest.id}
                variant={selectedInterests.includes(interest.id as InterestType) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleInterest(interest.id as InterestType)}
                className="flex items-center gap-1"
              >
                {interest.icon}
                {interest.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className={`grid gap-4 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredAttractions.map((attraction, index) => {
          const interests = getInterestTags(attraction);
          const isHighlight = highlights.includes(attraction.name);
          const timeEstimate = getTimeEstimate(attraction);
          const costLevel = getCostLevel(attraction);
          
          return (
            <Card key={index} className={`h-full ${isHighlight ? 'ring-2 ring-blue-500' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{attraction.name}</CardTitle>
                  {isHighlight && (
                    <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                      <Star className="w-3 h-3 mr-1" />
                      Highlight
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {timeEstimate === 'quick' ? '30-60 Min' : 'Half Day+'}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <DollarSign className="w-3 h-3 mr-1" />
                    {costLevel === 'free' ? 'Free' : 'Paid'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                  {attraction.description.split('.')[0]}.
                </p>
                
                {interests.length > 0 && (
                  <div className="mb-3">
                    <div className="flex gap-1 flex-wrap">
                      {interests.slice(0, 3).map(interest => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                      {interests.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{interests.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {attraction.practicalInfo && (
                  <div className="space-y-2 text-xs text-gray-500">
                    {attraction.practicalInfo.howToGetThere && (
                      <div className="flex items-start gap-1">
                        <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{attraction.practicalInfo.howToGetThere}</span>
                      </div>
                    )}
                    {attraction.practicalInfo.openingHours && (
                      <div className="flex items-start gap-1">
                        <Clock className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{attraction.practicalInfo.openingHours}</span>
                      </div>
                    )}
                    {attraction.practicalInfo.website && (
                      <div className="flex items-start gap-1">
                        <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0" />
                        <a 
                          href={attraction.practicalInfo.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 truncate"
                        >
                          Official Website
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredAttractions.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            No attractions match your current filters. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
};