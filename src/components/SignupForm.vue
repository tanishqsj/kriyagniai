<template>
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create your account
      </h2>
    </div>
    <form class="mt-8 space-y-6" @submit.prevent="handleSignup">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="signup-name" class="sr-only">Name</label>
          <input id="signup-name" name="name" type="text" autocomplete="name" required v-model="name"
                 class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                 placeholder="Name">
        </div>
        <div>
          <label for="signup-email-address" class="sr-only">Email address</label>
          <input id="signup-email-address" name="email" type="email" autocomplete="email" required v-model="email"
                 class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                 placeholder="Email address">
        </div>
        <div>
          <label for="signup-password" class="sr-only">Password</label>
          <input id="signup-password" name="password" type="password" autocomplete="new-password" required v-model="password"
                 class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                 placeholder="Password">
        </div>
      </div>

      <div>
        <button type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Sign up
        </button>
      </div>
      <p v-if="errorMessage" class="mt-2 text-center text-sm text-red-600">{{ errorMessage }}</p>
      <p v-if="successMessage" class="mt-2 text-center text-sm text-green-600">{{ successMessage }}</p>
    </form>
    <div class="text-center text-sm mt-4">
      Already have an account? <a href="#" @click="$emit('switch-form', 'login')" class="font-medium text-gray-600 hover:text-gray-900">Sign in</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const handleSignup = async () => {
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name.value, email: email.value, password: password.value }),
    });

    const data = await response.json();

    if (response.ok) {
      successMessage.value = data.message; // e.g., "User registered successfully"
      console.log('Signup successful:', data.user);
      // Optionally clear form or redirect
      name.value = '';
      email.value = '';
      password.value = '';
      window.location.href = '/'; // Redirect to home page
    } else {
      errorMessage.value = data.message; // e.g., "User with this email already exists"
    }
  } catch (error) {
    console.error('Signup failed:', error);
    errorMessage.value = 'An unexpected error occurred. Please try again.';
  }
};
</script>
