<template>
  <section class="bg-gray-900 pt-16 pb-24 sm:pt-20 sm:pb-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Why Choose Our AI Workflows</h2>
        <p class="mt-4 text-lg leading-8 text-gray-300">Unlock the full potential of AI with our proven workflow solutions</p>
      </div>
      
      <div class="mx-auto grid max-w-lg grid-cols-1 gap-8 sm:gap-12 md:max-w-4xl md:grid-cols-2 lg:max-w-7xl lg:grid-cols-3">
        <div v-for="(benefit, index) in benefits" :key="index"
             class="relative bg-gray-800/80 p-8 rounded-2xl transform transition-all duration-300
                    hover:bg-gray-800 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700"
             :class="{'lg:col-span-2': index === benefits.length - 1 && benefits.length % 2 === 1}">
          <div class="flex items-start gap-6">
            <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-600 shadow-lg shadow-purple-500/20">
              <div class="h-8 w-8 text-white">
                <!-- Placeholder for icon -->
                <span class="text-2xl font-bold">•</span>
              </div>
            </div>
            <div class="flex-auto">
              <h3 class="text-xl font-semibold leading-7 text-white mb-3">
                {{ benefit.title }}
              </h3>
              <p class="text-base leading-7 text-gray-300">
                {{ benefit.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const benefits = [
  {
    title: '40% Faster Decision-Making',
    description: 'Accelerate your business decisions with AI-powered insights and recommendations.'
  },
  {
    title: '60% Reduction in Manual Tasks',
    description: 'Automate repetitive processes and free up your team for strategic work.'
  },
  {
    title: 'Real-Time Process Optimization',
    description: 'Continuously improve workflows with AI-driven performance analysis.'
  },
  {
    title: 'Seamless Team Collaboration',
    description: 'Enable efficient communication and coordination across departments.'
  },
  {
    title: 'Scalable AI Integration',
    description: 'Easily expand AI capabilities as your business grows and evolves.'
  }
];
</script>