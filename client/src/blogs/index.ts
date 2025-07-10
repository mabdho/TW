// File-based blog system - this file will export all available blogs
import { Blog } from '@shared/schema';

// This file will be automatically updated when new blogs are generated
export const allBlogs: Blog[] = [
  // Blog entries will be added here automatically
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