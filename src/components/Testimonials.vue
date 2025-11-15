<template>
  <section class="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-white mb-12 font-poppins">
        What Our Clients Say
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="testimonial in testimonials" :key="testimonial.name"
             class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 transform transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/30">
          <!-- Quote Icon -->
          <div class="mb-4 text-blue-400">
            <svg class="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <!-- Testimonial Text -->
          <p class="text-gray-300 mb-6 font-inter leading-relaxed">
            {{ testimonial.text }}
          </p>
          
          <!-- Author Info -->
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="ml-4">
              <h4 class="text-white font-semibold font-poppins">{{ testimonial.name }}</h4>
              <p class="text-gray-400 text-sm">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechForward Inc.",
    text: "Kriyagni AI's prompt systems have revolutionized how we approach problem-solving. Their solutions are both innovative and practical."
  },
  {
    name: "Michael Rodriguez",
    company: "DataFlow Solutions",
    text: "The automated workflows we implemented with Kriyagni AI have significantly improved our operational efficiency. Exceptional results!"
  },
  {
    name: "Emily Thompson",
    company: "Strategic Insights Ltd.",
    text: "Their Clarity Boost solution helped us make better decisions faster. The team's expertise in AI implementation is outstanding."
  }
];
</script>