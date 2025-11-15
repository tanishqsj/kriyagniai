<script setup>
import { defineComponent, h } from 'vue';

// Icon components for each product
const DefenseIcon = defineComponent({
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
      d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    })
  ])
});

const BiddingIcon = defineComponent({
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
      d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    })
  ])
});

const HealthcareIcon = defineComponent({
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
      d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    })
  ])
});

const ComplianceIcon = defineComponent({
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
      d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    })
  ])
});

const EducationIcon = defineComponent({
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
      d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
    })
  ])
});

const products = [
  {
    icon: DefenseIcon,
    title: "VIRAAT: Defense AI Simulation",
    category: "Defense & Security",
    description: "Advanced multi-agent defense scenario simulation system that enables comprehensive training and strategic planning for defense operations. Features real-time threat assessment, scenario modeling, and tactical decision support.",
    features: ["Multi-agent simulation", "Real-time threat analysis", "Strategic planning tools", "Comprehensive training modules"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: BiddingIcon,
    title: "TenderMind: MSME Bidding Agent",
    category: "Business Automation",
    description: "Intelligent AI system designed specifically for MSMEs to automate government tender analysis and bidding processes. Streamlines procurement opportunities and maximizes winning potential.",
    features: ["Automated tender analysis", "Bid optimization", "Compliance checking", "MSME-focused features"],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: HealthcareIcon,
    title: "SwasthaGRID: Biosignal AI",
    category: "Healthcare Technology",
    description: "Cutting-edge healthcare forecasting and biosignal analysis platform that leverages AI to predict health trends, analyze physiological data, and provide actionable insights for better patient care.",
    features: ["Biosignal analysis", "Health forecasting", "Predictive analytics", "Patient monitoring"],
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: ComplianceIcon,
    title: "Vanguard: Compliance OS",
    category: "Governance & Compliance",
    description: "Comprehensive end-to-end audit and governance automation system that ensures regulatory compliance, streamlines audit processes, and provides real-time monitoring of organizational governance.",
    features: ["End-to-end automation", "Real-time monitoring", "Audit streamlining", "Compliance tracking"],
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: EducationIcon,
    title: "Bharat Vidya: Parallel Curriculum",
    category: "Education Technology",
    description: "Revolutionary AI-powered educational reform and curriculum design platform that creates personalized learning paths, optimizes educational content, and enhances learning outcomes through data-driven insights.",
    features: ["Personalized learning", "Curriculum optimization", "Educational analytics", "Learning path design"],
    color: "from-orange-500 to-red-600"
  }
];
</script>

<template>
  <div class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
          Our AI Products
        </h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Cutting-edge AI solutions designed to transform industries and drive innovation across defense, healthcare, education, and business sectors.
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div v-for="(product, index) in products" :key="product.title"
             class="group bg-white rounded-xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl border border-gray-200">
          
          <!-- Product Icon -->
          <div class="p-6 pb-4">
            <div class="w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
              <component :is="product.icon" class="w-8 h-8 text-gray-600" />
            </div>
            
            <!-- Category Badge -->
            <div class="text-center mb-3">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                {{ product.category }}
              </span>
            </div>
          </div>

          <!-- Product Content -->
          <div class="px-6 pb-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-gray-700 transition-colors duration-300">
              {{ product.title }}
            </h3>
            
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">
              {{ product.description }}
            </p>

            <!-- Features List -->
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
              <ul class="space-y-1">
                <li v-for="feature in product.features" :key="feature" 
                    class="text-xs text-gray-600 flex items-center">
                  <svg class="w-3 h-3 mr-2 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <!-- Learn More Button -->
            <div class="text-center">
              <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300">
                Learn More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <p class="text-lg text-gray-600 mb-6">
          Ready to explore how these AI products can transform your organization?
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300">
            Schedule a Demo
          </button>
          <button class="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
