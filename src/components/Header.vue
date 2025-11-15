<template>
  <header class="fixed w-full bg-white z-50 transition-all duration-300 border-b border-gray-200" :class="{ 'shadow-lg': scrolled }">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-3">
            <img src="/images/logo.png" alt="Kriyagni AI Logo" class="h-10 w-10 object-contain">
          <span class="text-2xl font-bold text-gray-900 font-poppins">
            Kriyagni AI
          </span>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a v-for="item in navItems" :key="item.path" :href="item.path"
          class="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
          {{ item.name }}
        </a>
      </div>

      <!-- Mobile Navigation Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Navigation Menu -->
    <transition name="slide">
      <div v-if="isMenuOpen"
           class="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
           @click.self="isMenuOpen = false">
        <div class="fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg p-6">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-xl font-bold text-gray-900">Menu</h2>
            <button @click="isMenuOpen = false" class="text-gray-700 hover:text-gray-900">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav class="flex flex-col space-y-6">
            <a v-for="item in navItems" :key="item.path" :href="item.path"
               class="block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-lg"
               @click="isMenuOpen = false">
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Workflows', path: '/workflows' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

const checkScroll = () => {
  if (typeof window !== 'undefined') {
    scrolled.value = window.scrollY > 20;
  }
};

onMounted(() => {
  checkScroll();
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScroll);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', checkScroll);
  }
});
</script>