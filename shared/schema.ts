import { z } from "zod";
import { pgTable, text, varchar, timestamp, serial, boolean } from "drizzle-orm/pg-core";

// Database schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).unique().notNull(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// File-based blog interface for static blog files
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl?: string;
  featured: boolean;
  readTime: string;
  date: string;
  createdAt?: string; // ISO timestamp for precise ordering
  author?: string;
}

// Insert schemas for validation
export const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export const insertBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  imageUrl: z.string().optional(),
  featured: z.boolean().default(false),
  readTime: z.string().min(1, "Read time is required"),
  author: z.string().optional(),
});

export type InsertBlog = z.infer<typeof insertBlogSchema>;
