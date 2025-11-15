<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-100"></div>
    
    <!-- 3D Brain Model -->
    <BrainModel />
    
    <!-- Neural Network Grid -->
    <NeuralNetwork />
    


    <!-- Content -->
    <div class="relative container mx-auto px-4 text-center z-10">
      <h1 class="text-6xl md:text-8xl font-extrabold mb-8 font-poppins text-gray-900">
      Kriyagni AI
      </h1>
      <h4 class="text-2xl md:text-3xl font-poppins text-gray-700 mb-8">
  Transform your business with cutting-edge AI and prompt engineering services
  that deliver clear, actionable insights.
</h4>


      <div class="flex flex-col sm:flex-row justify-center gap-6">
        <a href="/login" class="btn-primary">
          Start Now
        </a>
        <a href="/about" class="btn-secondary">
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BrainModel from './BrainModel.vue';
import NeuralNetwork from './NeuralNetwork.vue'; // Ensure NeuralNetwork is imported

import { ref, onMounted } from 'vue';

const description = ref<HTMLElement | null>(null);
const isDescriptionVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isDescriptionVisible.value = true;
  }, 500);
});
</script>

<style scoped>
.btn-primary {
  @apply px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg
         transform transition-all duration-300 hover:scale-105 hover:shadow-lg;
  position: relative;
  overflow: hidden;
}

.btn-primary::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.btn-secondary {
  @apply px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 font-semibold rounded-lg
         transform transition-all duration-300 hover:bg-gray-900 hover:text-white;
}

.animate-text-3d {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.particle {
  opacity: 0.6;
  animation: float linear infinite;
  filter: blur(0px);
  transition: filter 0.3s;
}

.particle:hover {
  filter: blur(2px);
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient span {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}
</style>