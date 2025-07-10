import { z } from "zod";

// Firestore data models
export interface User {
  id: string;
  username: string;
  password: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
  featured: boolean;
  readTime: string;
  createdAt: Date;
  updatedAt: Date;
}

// Insert schemas for validation
export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const insertBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  imageUrl: z.string().optional(),
  featured: z.boolean().default(false),
  readTime: z.string().min(1, "Read time is required"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertBlog = z.infer<typeof insertBlogSchema>;
