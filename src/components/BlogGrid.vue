<template>
  <section class="bg-gray-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Search and Filter Controls -->
      <div class="mb-12 grid gap-8 md:grid-cols-2">
        <!-- Search -->
        <div class="relative">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search posts..."
            class="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-gray-300 placeholder:text-gray-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          />
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
            </svg>
          </div>
        </div>
        <!-- Category Filter -->
        <div class="flex flex-wrap gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="toggleCategory(category)"
            :class="[
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200',
              selectedCategories.includes(category)
                ? 'bg-purple-500 text-white'
                : 'bg-gray-800/50 text-gray-300 hover:bg-purple-500/20'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Blog Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        <template v-for="post in displayedPosts" :key="post.title">
          <BlogCard :post="post" />
        </template>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="mt-12 flex justify-center gap-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
            currentPage === page
              ? 'bg-purple-500 text-white'
              : 'bg-gray-800/50 text-gray-300 hover:bg-purple-500/20'
          ]"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import BlogCard from './BlogCard.vue';

// Sample blog posts data
const posts = [
  {
    title: "Simulation-Based Policy Making: The Future of Governance in the AI Era",
    author: "Kriyagni AI Team",
    date: "October 26, 2023",
    excerpt: "How advanced modeling and AI simulations can transform policy development from guesswork to precision",
    category: "AI Governance",
    image: "/images/blog-ai-governance.svg",
    tags: ["AI", "Policy Making", "Governance", "Simulation"],
    slug: "simulation-based-policy-making"
  },
  {
    title: "Companies Act 2013 Reform Package: Loophole-Proof Framework",
    author: "Kriyagni AI Team",
    date: "December 1, 2023",
    excerpt: "After analyzing potential vulnerabilities, here’s a comprehensive reform framework designed to boost India’s startup ecosystem while preventing abuse and maintaining system integrity.",
    category: "AI Governance",
    image: "/images/blog-ai-governance.svg",
    tags: ["Companies Act", "Startups", "Governance", "India"],
    slug: "companies-act-2013-reform-package"
  }
];

// State
const searchQuery = ref('');
const selectedCategories = ref([]);
const currentPage = ref(1);
const postsPerPage = 2;

// Computed properties
const categories = computed(() => [
    'AI Governance',
    'AI Ethics',
    'AI in Education',
    'AI and Environment',
    'Cybersecurity',
    'AI and Future of Work',
    'AI and Creativity'
  ]);

const filteredPosts = computed(() => {
  return posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()));
    
    const matchesCategory = selectedCategories.value.length === 0 ||
                           selectedCategories.value.includes(post.category);
    
    return matchesSearch && matchesCategory;
  });
});

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage));

const displayedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage;
  const end = start + postsPerPage;
  return filteredPosts.value.slice(start, end);
});

// Methods
function toggleCategory(category) {
  const index = selectedCategories.value.indexOf(category);
  if (index === -1) {
    selectedCategories.value.push(category);
  } else {
    selectedCategories.value.splice(index, 1);
  }
  currentPage.value = 1; // Reset to first page when filtering
}
</script>