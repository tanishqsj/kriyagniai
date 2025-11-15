<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 font-poppins text-gray-900">Get in Touch</h2>
        <p class="text-xl text-gray-600">Have questions? We'd love to hear from you.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto">
        <div class="space-y-6">
          <!-- Name Input -->
          <div class="form-group">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="formData.name"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-white text-gray-900"
              required
            />
            <div class="line"></div>
          </div>

          <!-- Email Input -->
          <div class="form-group">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="formData.email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-white text-gray-900"
              required
            />
            <div class="line"></div>
            <span v-if="!isValidEmail && formData.email" class="error-message">Please enter a valid email address</span>
          </div>

          <!-- Message Input -->
          <div class="form-group">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              v-model="formData.message"
              rows="4"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm bg-white text-gray-900"
              required
            ></textarea>
            <div class="line"></div>
          </div>

          <!-- Honeypot Field -->
          
          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full py-4 px-6 bg-gray-900 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Submit Your Inquiry</span>
            <div v-else class="loading-spinner"></div>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

console.log('ContactForm.vue setup running');

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);

const message = ref('');

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !formData.value.email || emailRegex.test(formData.value.email);
});

const handleSubmit = async () => {
  if (!isValidEmail.value) return;
  
  isSubmitting.value = true;

  const data = new FormData();
  data.append('access_key', import.meta.env.WEB3FORMS_KEY);
  data.append('name', name.value);
  data.append('email', email.value);
  data.append('message', message.value);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      // Reset form
      formData.value = {
        name: '',
        email: '',
        message: ''
      };
      alert('Message sent successfully!');
    } else {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.message}`);
      } else {
        alert('Failed to send message. Please try again later.');
      }
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.form-group {
  @apply relative;
}

.form-group input,
.form-group textarea {
  @apply w-full bg-white text-gray-900 px-4 pt-6 pb-2 rounded-lg outline-none transition-all duration-300 border border-gray-300;
}

.form-group label {
  @apply absolute left-4 top-4 text-gray-500 transition-all duration-300 pointer-events-none;
}

.form-group input:focus ~ label,
.form-group textarea:focus ~ label,
.form-group input.has-value ~ label,
.form-group textarea.has-value ~ label {
  @apply text-sm text-gray-600 -translate-y-3;
}

.form-group .line {
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-gray-300 transform scale-x-0 transition-transform duration-300 origin-center;
}

.form-group input:focus ~ .line,
.form-group textarea:focus ~ .line {
  @apply scale-x-100 bg-gray-600;
}

.form-group input.invalid {
  @apply border-red-500;
}

.error-message {
  @apply text-sm text-red-500 mt-1;
}

.loading-spinner {
  @apply w-6 h-6 border-[3px] border-white border-t-transparent rounded-full animate-spin;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
