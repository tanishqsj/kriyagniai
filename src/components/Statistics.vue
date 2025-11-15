<template>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4 text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="statistic-item">
          <p class="text-5xl font-bold text-indigo-700 mb-2">
            {{ animatedResults }}<span class="text-4xl">+</span>
          </p>
          <p class="text-xl text-gray-700">Proven Results</p>
          <p class="text-gray-500">Successful AI implementations across various industries</p>
        </div>
        <div class="statistic-item">
          <p class="text-5xl font-bold text-indigo-700 mb-2">{{ animatedLeaders }}</p>
          <p class="text-xl text-gray-700">Trusted by Leaders</p>
          <p class="text-gray-500">Industry leaders who rely on our AI solutions</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { animate } from 'motion'

const animatedResults = ref(0)
const animatedLeaders = ref(0)

onMounted(() => {
  let prev = 0
  animate(0, 150, {
    duration: 1,
    easing: 'ease-out',
    onUpdate: (latest) => {
      const intVal = Math.floor(latest)
      if (intVal !== prev) {
        prev = intVal
        animatedResults.value = intVal
      }
    }
  })

  let prevLeaders = 0
  animate(0, 15, {
    duration: 1,
    easing: 'ease-out',
    onUpdate: (latest) => {
      const intVal = Math.floor(latest)
      if (intVal !== prevLeaders) {
        prevLeaders = intVal
        animatedLeaders.value = intVal
      }
    }
  })
})
</script>
