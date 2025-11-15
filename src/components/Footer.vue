<template>
  <footer class="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
    <div class="container mx-auto px-4">
      <!-- Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Company Info -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6 font-poppins">Kriyagni AI</h3>
          <p class="text-gray-600 mb-6">Empowering businesses with cutting-edge AI solutions and prompt engineering services.</p>
          <div class="flex space-x-4">
            <a v-for="social in socials" 
               :key="social.name"
               :href="social.url"
               :aria-label="social.name"
               class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer">
              <component :is="social.icon" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-6">Quick Links</h4>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.name">
              <a v-if="link.url" :href="link.url" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">{{ link.name }}</a>
              <button v-else-if="link.action" @click="link.action()" class="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-left w-full">{{ link.name }}</button>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-6">Services</h4>
          <ul class="space-y-4">
            <li v-for="service in services" :key="service.name">
              <a :href="service.url" class="text-gray-600 hover:text-gray-900 transition-colors duration-300">{{ service.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-6">Contact Us</h4>
          <ul class="space-y-4 text-gray-600">
            <li class="flex items-start">
              <svg class="w-6 h-6 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Chhatrapati sambhaji nagar, maharastra</span>
            </li>
            <li class="flex items-center">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:kriyagniai@gmail.com" class="hover:text-gray-900 transition-colors duration-300">kriyagniai@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-200 pt-8">
        <p class="text-center text-gray-600">
          © {{ new Date().getFullYear() }} Kriyagni AI. All rights reserved.
        </p>
      </div>
    </div>
    <!-- Contact Form Modal -->
    <div v-if="showContactForm" class="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 p-4">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative mx-auto border border-gray-200">
        <button @click="showContactForm = false" class="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl">&times;</button>
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <ContactForm />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h, ref } from 'vue';
import ContactForm from './ContactForm.vue';

const showContactForm = ref(false);

// Social Media Icons
const TwitterIcon = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' },
    [h('path', { d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' })]
  )
});

const LinkedInIcon = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' },
    [h('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' })]
  )
});

const GitHubIcon = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' },
    [h('path', { d: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' })]
  )
});

const InstagramIcon = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' },
    [h('path', { d: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' })]
  )
});

const MailIcon = defineComponent({
  render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 24 24' },
    [h('path', { d: 'M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-11 7.873-11-7.873zm21.086-1.523l-10.086 7.232-10.086-7.232h20.172z' })]
  )
});

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/kriyagni-ai/', icon: LinkedInIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/kriyagniai/', icon: InstagramIcon },
  { name: 'Mail', url: 'mailto:kriyagniai@gmail.com', icon: MailIcon }
];

const quickLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Solutions', url: '/solutions' },
  { name: 'About Us', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', action: () => { showContactForm.value = true; } }
];

const services = [
  { name: 'VIRAAT Defense AI', url: '/products#viraat' },
  { name: 'TenderMind MSME', url: '/products#tendermind' },
  { name: 'SwasthaGRID Healthcare', url: '/products#swasthagrid' },
  { name: 'Vanguard Compliance', url: '/products#vanguard' },
  { name: 'Bharat Vidya Education', url: '/products#bharat-vidya' }
];
</script>