import { type User, type InsertUser, type Blog, type InsertBlog } from "@shared/schema";
import { db } from "./firebase-config";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog operations
  getAllBlogs(): Promise<Blog[]>;
  getBlog(id: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: string, blog: Partial<InsertBlog>): Promise<Blog>;
  deleteBlog(id: string): Promise<void>;
  getLatestBlogs(limit?: number): Promise<Blog[]>;
}

export class FirestoreStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const userDoc = await db.collection('users').doc(id).get();
    if (!userDoc.exists) return undefined;
    return { id: userDoc.id, ...userDoc.data() } as User;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const usersQuery = await db.collection('users').where('username', '==', username).limit(1).get();
    if (usersQuery.empty) return undefined;
    const userDoc = usersQuery.docs[0];
    return { id: userDoc.id, ...userDoc.data() } as User;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const userRef = await db.collection('users').add(insertUser);
    const userDoc = await userRef.get();
    return { id: userDoc.id, ...userDoc.data() } as User;
  }

  // Blog operations
  async getAllBlogs(): Promise<Blog[]> {
    const blogsQuery = await db.collection('blogs').orderBy('createdAt', 'desc').get();
    return blogsQuery.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
  }

  async getBlog(id: string): Promise<Blog | undefined> {
    const blogDoc = await db.collection('blogs').doc(id).get();
    if (!blogDoc.exists) return undefined;
    return { id: blogDoc.id, ...blogDoc.data() } as Blog;
  }

  async createBlog(insertBlog: InsertBlog): Promise<Blog> {
    const now = new Date();
    const blogData = {
      ...insertBlog,
      createdAt: now,
      updatedAt: now
    };
    const blogRef = await db.collection('blogs').add(blogData);
    const blogDoc = await blogRef.get();
    return { id: blogDoc.id, ...blogDoc.data() } as Blog;
  }

  async updateBlog(id: string, updateData: Partial<InsertBlog>): Promise<Blog> {
    const blogRef = db.collection('blogs').doc(id);
    await blogRef.update({
      ...updateData,
      updatedAt: new Date()
    });
    const blogDoc = await blogRef.get();
    return { id: blogDoc.id, ...blogDoc.data() } as Blog;
  }

  async deleteBlog(id: string): Promise<void> {
    await db.collection('blogs').doc(id).delete();
  }

  async getLatestBlogs(limit: number = 10): Promise<Blog[]> {
    const blogsQuery = await db.collection('blogs').orderBy('createdAt', 'desc').limit(limit).get();
    return blogsQuery.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
  }
}

export const storage = new FirestoreStorage();
