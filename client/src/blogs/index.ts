// File-based blog system - this file will export all available blogs
import { Blog } from '@shared/schema';
// Blog imports will be automatically added when new blogs are generated



// This file will be automatically updated when new blogs are generated
export const allBlogs: Blog[] = [
  // No blog data - add blogs via admin panel
];

export function getAllBlogs(): Blog[] {
  return allBlogs.sort((a, b) => {
    // Use createdAt timestamp if available, fallback to date
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : new Date(a.date).getTime();
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : new Date(b.date).getTime();
    return timeB - timeA; // Most recent first
  });
}

export function getLatestBlogs(limit: number = 2): Blog[] {
  return getAllBlogs().slice(0, limit);
}

export function getLatestBlogsForHomePage(): Blog[] {
  const blogs = getAllBlogs();
  return blogs.slice(0, 2).map((blog, index) => ({
    ...blog,
    featured: index < 2 // Mark first 2 as featured
  }));
}

export function getBlogById(id: string): Blog | undefined {
  return allBlogs.find(blog => blog.id === id);
}

// Category filtering
export function getBlogsByCategory(category: string): Blog[] {
  return getAllBlogs().filter(blog => blog.category === category);
}

// Featured blogs
export function getFeaturedBlogs(): Blog[] {
  return getAllBlogs().filter(blog => blog.featured);
}