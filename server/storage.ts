import { type User, type InsertUser } from "@shared/schema";
import { db } from "./firebase-config";

// Type the db properly to avoid TypeScript errors
type MockDB = {
  collection: (name: string) => any;
};

const typedDb = db as any;

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class FirestoreStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const userDoc = await typedDb.collection('users').doc(id).get();
    if (!userDoc.exists) return undefined;
    return { id: userDoc.id, ...userDoc.data() } as User;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const usersQuery = await typedDb.collection('users').where('username', '==', username).limit(1).get();
    if (usersQuery.empty) return undefined;
    const userDoc = usersQuery.docs[0];
    return { id: userDoc.id, ...userDoc.data() } as User;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const userRef = await typedDb.collection('users').add(insertUser);
    const userDoc = await userRef.get();
    return { id: userDoc.id, ...userDoc.data() } as User;
  }
}

export const storage = new FirestoreStorage();
