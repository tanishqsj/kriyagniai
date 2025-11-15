<template>
  <section class="relative py-20 bg-gray-50 overflow-hidden">
    <CircuitPattern />
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-poppins text-gray-900">
          Our AI Products
        </h2>
        <p class="text-xl max-w-2xl mx-auto text-gray-700">
          Explore our cutting-edge AI products designed to transform industries and drive innovation across multiple sectors.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index"
             class="group bg-white backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-lg border border-gray-200">
          <div class="h-48 mb-6 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center relative">
            <div class="absolute inset-0 bg-gray-200/0 group-hover:bg-gray-300/20 transition-all duration-500"></div>
            <component :is="service.icon" 
                     class="w-24 h-24 text-gray-600 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
          </div>
          <h3 class="text-xl font-bold mb-3 font-poppins text-gray-900">{{ service.title }}</h3>
          <p class="text-gray-600 transition-colors duration-300 group-hover:text-gray-900">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue';
import CircuitPattern from './CircuitPattern.vue';

// Icon components using SVG paths
const BrainIcon = defineComponent({
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    })
  ])
});

const AutomationIcon = defineComponent({
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
    })
  ])
});

const AnalyticsIcon = defineComponent({
  render: () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor'
  }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    })
  ])
});

const services = [
  {
    icon: BrainIcon,
    title: 'VIRAAT: Defense AI Simulation',
    description: 'Multi-agent defense scenario simulation system for comprehensive training and strategic planning in defense operations.',
    animation: 'fade-up',
    delay: 0
  },
  {
    icon: AutomationIcon,
    title: 'TenderMind: MSME Bidding Agent',
    description: 'AI-powered automated government tender analysis and bidding system designed specifically for MSMEs.',
    animation: 'fade-up',
    delay: 200
  },
  {
    icon: AnalyticsIcon,
    title: 'SwasthaGRID: Biosignal AI',
    description: 'Healthcare forecasting and biosignal analysis platform with predictive analytics for better patient care.',
    animation: 'fade-up',
    delay: 400
  }
];
</script>