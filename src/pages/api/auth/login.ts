import type { APIRoute } from 'astro';
import { User } from '../../../types/user';
import { users } from '../../../lib/users'; // Import the shared users array

// For demonstration, this should be a shared persistent store with signup endpoint
// const users: User[] = []; // Remove this line

export const POST: APIRoute = async ({ request }) => {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response(JSON.stringify({ message: 'Email and password are required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
