import { users, blogs, type User, type InsertUser, type Blog, type InsertBlog } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog operations
  getAllBlogs(): Promise<Blog[]>;
  getBlog(id: number): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog>;
  deleteBlog(id: number): Promise<void>;
  getLatestBlogs(limit?: number): Promise<Blog[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Blog operations
  async getAllBlogs(): Promise<Blog[]> {
    return db.select().from(blogs).orderBy(desc(blogs.createdAt));
  }

  async getBlog(id: number): Promise<Blog | undefined> {
    const [blog] = await db.select().from(blogs).where(eq(blogs.id, id));
    return blog || undefined;
  }

  async createBlog(insertBlog: InsertBlog): Promise<Blog> {
    const [blog] = await db
      .insert(blogs)
      .values(insertBlog)
      .returning();
    return blog;
  }

  async updateBlog(id: number, updateData: Partial<InsertBlog>): Promise<Blog> {
    const [blog] = await db
      .update(blogs)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(blogs.id, id))
      .returning();
    return blog;
  }

  async deleteBlog(id: number): Promise<void> {
    await db.delete(blogs).where(eq(blogs.id, id));
  }

  async getLatestBlogs(limit: number = 10): Promise<Blog[]> {
    return db.select().from(blogs).orderBy(desc(blogs.createdAt)).limit(limit);
  }
}

export const storage = new DatabaseStorage();
