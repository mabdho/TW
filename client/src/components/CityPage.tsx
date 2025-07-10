
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, DollarSign, Globe } from 'lucide-react';

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

interface CityPageProps {
  title: string;
  description: string;
  highlights: string[];
  attractions: Attraction[];
  logistics?: {
    gettingAround?: string;
    whereToStay?: string;
    bestTimeToVisit?: string;
    suggestedItinerary?: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export const CityPage: React.FC<CityPageProps> = ({
  title,
  description,
  highlights,
  attractions,
  logistics,
  faqs
}) => {
  const top5Attractions = attractions.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-card border shadow-sm">
            <TabsTrigger value="overview" className="text-sm font-medium">Overview</TabsTrigger>
            <TabsTrigger value="top5" className="text-sm font-medium">Top 5 Attractions</TabsTrigger>
            <TabsTrigger value="all" className="text-sm font-medium">All Attractions</TabsTrigger>
            {logistics && <TabsTrigger value="plan" className="text-sm font-medium">Plan Your Trip</TabsTrigger>}
            {faqs && <TabsTrigger value="faqs" className="text-sm font-medium">FAQs</TabsTrigger>}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm border p-8">
              <h1 className="text-4xl font-bold text-foreground mb-6">{title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </TabsContent>

          {/* Top 5 Attractions Tab */}
          <TabsContent value="top5" className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border">
              <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
                Top 5 Must-Visit Attractions
              </h2>
              <p className="text-muted-foreground mb-6">Don't miss these incredible experiences</p>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card/80 rounded-lg border">
                    <span className="text-2xl">✨</span>
                    <span className="text-lg font-medium text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* All Attractions Tab */}
          <TabsContent value="all" className="space-y-6">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">Complete Guide to All Attractions</h2>
              {attractions.map((attraction, index) => (
                <div key={index} className="bg-card rounded-xl shadow-sm border overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{attraction.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{attraction.description}</p>
                    
                    {attraction.practicalInfo && (
                      <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Practical Information
                        </h4>
                        <div className="grid gap-3 text-sm">
                          {attraction.practicalInfo.howToGetThere && (
                            <div>
                              <strong className="text-foreground">How to Get There:</strong>
                              <span className="text-muted-foreground ml-2">{attraction.practicalInfo.howToGetThere}</span>
                            </div>
                          )}
                          {attraction.practicalInfo.openingHours && (
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <strong className="text-foreground">Hours:</strong>
                              <span className="text-muted-foreground">{attraction.practicalInfo.openingHours}</span>
                            </div>
                          )}
                          {attraction.practicalInfo.cost && (
                            <div className="flex items-center gap-2">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <strong className="text-foreground">Cost:</strong>
                              <span className="text-muted-foreground">{attraction.practicalInfo.cost}</span>
                            </div>
                          )}
                          {attraction.practicalInfo.website && (
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-muted-foreground" />
                              <strong className="text-foreground">Website:</strong>
                              <a href={`https://${attraction.practicalInfo.website}`} 
                                 className="text-primary hover:underline" 
                                 target="_blank" 
                                 rel="noopener">
                                {attraction.practicalInfo.website}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Plan Your Trip Tab */}
          {logistics && (
            <TabsContent value="plan" className="space-y-6">
              <div className="bg-card rounded-xl shadow-sm border p-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">Planning Your Visit</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {logistics.gettingAround && (
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">Getting Around</h3>
                      <p className="text-muted-foreground leading-relaxed">{logistics.gettingAround}</p>
                    </div>
                  )}
                  {logistics.whereToStay && (
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">Where to Stay</h3>
                      <p className="text-muted-foreground leading-relaxed">{logistics.whereToStay}</p>
                    </div>
                  )}
                  {logistics.bestTimeToVisit && (
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">Best Time to Visit</h3>
                      <p className="text-muted-foreground leading-relaxed">{logistics.bestTimeToVisit}</p>
                    </div>
                  )}
                  {logistics.suggestedItinerary && (
                    <div className="space-y-3 md:col-span-2">
                      <h3 className="text-xl font-semibold text-foreground">Suggested Itinerary</h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{logistics.suggestedItinerary}</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          )}

          {/* FAQs Tab */}
          {faqs && (
            <TabsContent value="faqs" className="space-y-6">
              <div className="bg-card rounded-xl shadow-sm border p-8">
                <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};
