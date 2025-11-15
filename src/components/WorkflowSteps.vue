<template>
  <section class="bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Workflow Process</h2>
        <p class="mt-4 text-lg leading-8 text-gray-300">A systematic approach to implementing AI solutions</p>
      </div>
      <div class="relative mt-12">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-purple-500/30 md:block hidden"></div>
        
        <!-- Workflow Steps -->
        <div class="space-y-16 md:space-y-24">
          <div v-for="(step, index) in workflowSteps" :key="index"
               class="relative flex md:items-center flex-col md:flex-row"
               :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">
            
            <!-- Step Number -->
            <div class="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0
                        flex items-center justify-center w-16 h-16 rounded-full
                        bg-purple-600 text-white font-bold text-xl z-10 shadow-lg shadow-purple-500/20">
              {{ step.step }}
            </div>

            <!-- Step Content -->
            <div class="w-full md:w-5/12 mt-8 md:mt-0"
                 :class="index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'">
              <div class="bg-gray-800/80 p-8 rounded-2xl transform transition-all duration-300
                          hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 border border-gray-700">
                <h3 class="text-xl font-semibold text-white mb-2">{{ step.title }}</h3>
                <p class="text-gray-300">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const workflowSteps = [
  {
    step: '01',
    title: 'Analysis & Discovery',
    description: 'We analyze your current processes and identify optimization opportunities through AI integration.',
    icon: '/analysis-icon.jpg'
  },
  {
    step: '02',
    title: 'Custom AI Design',
    description: 'Design tailored AI systems and prompts that align perfectly with your business objectives.',
    icon: '/design-icon.jpg'
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Seamlessly integrate AI workflows into your existing systems with minimal disruption.',
    icon: '/implementation-icon.jpg'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Continuous monitoring and refinement to ensure peak performance and ROI.',
    icon: '/optimization-icon.jpg'
  }
];
</script>