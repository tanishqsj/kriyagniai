<template>
  <div ref="container" class="absolute inset-0 z-0 transition-opacity duration-1000" :class="{ 'opacity-80': isHovered }" @mouseenter="isHovered = true" @mouseleave="isHovered = false"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const container = ref<HTMLElement | null>(null);
const isHovered = ref(false);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let brain: THREE.Mesh;
let frameId: number;
let rotationSpeed = 0.008; // Increased base rotation speed

const init = () => {
  if (!container.value) return;

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // Create brain mesh (simplified representation)
  const geometry = new THREE.SphereGeometry(4, 32, 32); // Increased size
  const material = new THREE.MeshPhongMaterial({
    color: 0x4a90e2,
    wireframe: true,
    transparent: true,
    opacity: 0.9, // Increased opacity
  });
  brain = new THREE.Mesh(geometry, material);
  scene.add(brain);

  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  camera.position.z = 10;
};

const animate = () => {
  frameId = requestAnimationFrame(animate);

  if (brain) {
    const targetSpeed = isHovered.value ? 0.03 : 0.008; // Adjusted hover speed
    rotationSpeed += (targetSpeed - rotationSpeed) * 0.1;
    
    brain.rotation.x += rotationSpeed;
    brain.rotation.y += rotationSpeed;
    
    const scale = isHovered.value ? 1.3 : 1.1; // Adjusted hover scale
    brain.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  }

  renderer.render(scene, camera);
};

const handleResize = () => {
  if (!container.value) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    init();
    animate();
    window.addEventListener('resize', handleResize);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    cancelAnimationFrame(frameId);
    window.removeEventListener('resize', handleResize);
    if (container.value) {
      container.value.removeChild(renderer.domElement);
    }
  }
});
</script>