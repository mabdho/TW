// Types for city pages and travel data

export interface City {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  rating: number;
  attractions: string[];
  bestTimeToVisit: string;
  tags: string[];
}

export interface TravelCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  cities: string[];
}