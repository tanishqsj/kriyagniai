export interface User {
  id: string;
  name: string;
  email: string;
  // In a real application, password would not be stored/returned directly
  // but rather hashed passwords would be managed securely on the backend.
  // For this simulation, we'll keep it simple.
  password?: string;
}
