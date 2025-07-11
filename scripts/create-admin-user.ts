import { db } from '../server/db';
import { users } from '../shared/schema';
import bcrypt from 'bcryptjs';

async function createAdminUser() {
  try {
    const username = 'admin';
    const password = 'admin123'; // Change this to a secure password
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create admin user
    const [adminUser] = await db.insert(users).values({
      username: username,
      password: hashedPassword,
      isAdmin: true
    }).returning();
    
    console.log('✅ Admin user created successfully!');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('User ID:', adminUser.id);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    process.exit(1);
  }
}

createAdminUser();