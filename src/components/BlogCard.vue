<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: Object,
});
</script>

<template>
  <a :href="`/blog/${post.slug}`" class="block rounded-lg bg-gray-800/50 p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <img
      :src="post.image"
      :alt="post.title"
      class="mb-4 h-48 w-full rounded-md object-cover"
    />
    <div class="flex items-center justify-between text-sm text-gray-400">
      <span class="font-medium text-purple-400">{{ post.category }}</span>
      <span>{{ post.date }}</span>
    </div>
    <h3 class="mt-3 text-xl font-semibold text-white group-hover:text-purple-400">
      {{ post.title }}
    </h3>
    <p class="mt-2 text-gray-300">{{ post.excerpt }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300"
      >
        {{ tag }}
      </span>
    </div>
  </a>
</template>