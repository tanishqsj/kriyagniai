<template>
  <section class="relative bg-gray-900 overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-gray-900/95"></div>
    <div class="absolute inset-0">
      <svg class="h-full w-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" class="text-purple-500/20"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">
          AI Insights & Knowledge Hub
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Expert insights on AI solutions, prompt engineering, and business transformation.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>