// File-based blog system - this file will export all available blogs
import { Blog } from '@shared/schema';

// This file will be automatically updated when new blogs are generated
export const allBlogs: Blog[] = [
  {
    id: 'best-travel-destinations-2025',
    title: 'Best Travel Destinations for 2025',
    excerpt: 'Discover the most exciting travel destinations to visit this year, from hidden gems to popular hotspots.',
    content: 'Planning your next adventure? 2025 offers incredible travel opportunities around the world...',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80',
    featured: true,
    readTime: '5 min read',
    date: '2025-01-13',
    author: 'TravelWanders Team'
  },
  {
    id: 'sustainable-travel-tips',
    title: 'Sustainable Travel Tips for Eco-Conscious Explorers',
    excerpt: 'Learn how to reduce your environmental impact while traveling and support local communities.',
    content: 'Sustainable travel is more important than ever. Here are practical tips for eco-conscious explorers...',
    category: 'Tips',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    featured: false,
    readTime: '7 min read',
    date: '2025-01-12',
    author: 'TravelWanders Team'
  },
  {
    id: 'hidden-gems-europe-2025',
    title: 'Hidden Gems of Europe 2025',
    excerpt: 'Discover lesser-known European destinations that offer authentic culture, stunning landscapes, and unforgettable experiences.',
    content: 'Europe is filled with countless hidden gems waiting to be discovered. From the colorful houses of Cinque Terre to the mystical forests of Bavaria, these destinations offer travelers a chance to escape the crowds and experience authentic European culture.',
    category: 'Destinations',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featured: false,
    readTime: '6 min read',
    date: '2025-01-13',
    author: 'TravelWanders Team'
  }
];

export function getAllBlogs(): Blog[] {
  return allBlogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestBlogs(limit: number = 2): Blog[] {
  return getAllBlogs().slice(0, limit);
}

export function getBlogById(id: string): Blog | undefined {
  return allBlogs.find(blog => blog.id === id);
}

export function getFeaturedBlogs(): Blog[] {
  return getAllBlogs().filter(blog => blog.featured);
}