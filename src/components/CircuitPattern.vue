<template>
  <div ref="container" class="absolute inset-0 z-0 opacity-20"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const container = ref<HTMLElement | null>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let lines: THREE.LineSegments;
let frameId: number;

const init = () => {
  if (!container.value) return;

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // Create circuit pattern
  const geometry = new THREE.BufferGeometry();
  const points: number[] = [];
  const gridSize = 20;
  const size = 100;

  for (let i = -size; i <= size; i += gridSize) {
    for (let j = -size; j <= size; j += gridSize) {
      // Horizontal lines
      points.push(i, j, 0);
      points.push(i + gridSize * Math.random(), j + (Math.random() - 0.5) * gridSize, 0);

      // Vertical lines
      points.push(j, i, 0);
      points.push(j + (Math.random() - 0.5) * gridSize, i + gridSize * Math.random(), 0);

      // Random connections
      if (Math.random() > 0.7) {
        points.push(i, j, 0);
        points.push(
          i + gridSize * Math.random(),
          j + gridSize * Math.random(),
          (Math.random() - 0.5) * 20
        );
      }
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
  const material = new THREE.LineBasicMaterial({
    color: 0x4a90e2,
    transparent: true,
    opacity: 0.5
  });

  lines = new THREE.LineSegments(geometry, material);
  scene.add(lines);

  camera.position.z = 150;
};

const animate = () => {
  frameId = requestAnimationFrame(animate);

  if (lines) {
    lines.rotation.x += 0.001;
    lines.rotation.y += 0.001;
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