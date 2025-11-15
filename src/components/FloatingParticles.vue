<template>
  <div class="absolute inset-0 overflow-hidden">
    <div v-for="n in 100" :key="n" 
         class="particle absolute rounded-full bg-white"
         :style="getParticleStyle(n)">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const particles = ref(Array.from({ length: 100 }, (_, i) => ({
  width: (Math.random() * 6 + 3) + 'px', // Further increased size
  height: (Math.random() * 6 + 3) + 'px', // Further increased size
  left: (Math.random() * 100) + '%',
  top: (Math.random() * 100) + '%',
  animationDuration: (6 + Math.random() * 10) + 's', // Adjusted speed
  animationDelay: (Math.random() * 7) + 's', // Adjusted delay
  backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)` // Dynamic color
})));

const getParticleStyle = (n: number) => particles.value[n - 1];
</script>

<style scoped>
.particle {
  opacity: 0.7;
  animation: float linear infinite;
  filter: blur(0px);
  transition: filter 0.3s;
}

.particle:hover {
  filter: blur(2px);
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0) scale(0.5);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-60vh) translateX(150px) scale(1.2);
    opacity: 0.9;
  }
  100% {
    transform: translateY(-120vh) translateX(300px) scale(0.7);
    opacity: 0;
  }
}
</style>
