import type { APIRoute } from 'astro';
import { User } from '../../../types/user';
import { users } from '../../../lib/users'; // Import the shared users array

// const users: User[] = []; // Remove this line

export const POST: APIRoute = async ({ request }) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return new Response(JSON.stringify({ message: 'Name, email, and password are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Basic email validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    return new Response(JSON.stringify({ message: 'Invalid email format' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check if user already exists
  if (users.some(user => user.email === email)) {
    return new Response(JSON.stringify({ message: 'User with this email already exists' }), {
      status: 409,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // In a real application, you would hash the password before saving.
  // For this simulation, we'll store it as is.
  const newUser: User = {
    id: crypto.randomUUID(), // Generate a unique ID
    name,
    email,
    password, // Store password (for simulation only)
  };

  users.push(newUser);
  console.log('New user registered:', newUser);

  return new Response(JSON.stringify({ message: 'User registered successfully', user: { id: newUser.id, name: newUser.name, email: newUser.email } }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
};
