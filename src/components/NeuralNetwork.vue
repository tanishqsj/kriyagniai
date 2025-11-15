<template>
  <div ref="container" class="absolute inset-0 z-0"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const container = ref<HTMLElement | null>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let points: THREE.Points;
let connections: THREE.LineSegments;
let frameId: number;
let colorPhase = 0; // For color animation

interface Node {
  position: THREE.Vector3;
  connections: number[];
}

const init = () => {
  if (!container.value) return;

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // Create neural network
  const nodes: Node[] = [];
  const nodeCount = 200; // Further increased node count
  const maxConnections = 8; // Further increased max connections

  // Create nodes
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 150, // Increased spread
        (Math.random() - 0.5) * 150, // Increased spread
        (Math.random() - 0.5) * 75
      ),
      connections: []
    });
  }

  // Create connections
  for (let i = 0; i < nodes.length; i++) {
    const connectionCount = Math.floor(Math.random() * maxConnections) + 1;
    for (let j = 0; j < connectionCount; j++) {
      const target = Math.floor(Math.random() * nodes.length);
      if (target !== i && !nodes[i].connections.includes(target)) {
        nodes[i].connections.push(target);
      }
    }
  }

  // Create points geometry
  const pointsGeometry = new THREE.BufferGeometry();
  const pointsPositions = new Float32Array(nodeCount * 3);
  const pointsSizes = new Float32Array(nodeCount);

  nodes.forEach((node, i) => {
    pointsPositions[i * 3] = node.position.x;
    pointsPositions[i * 3 + 1] = node.position.y;
    pointsPositions[i * 3 + 2] = node.position.z;
    pointsSizes[i] = Math.random() * 4 + 2; // Further increased base size and variation
  });

  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointsPositions, 3));
  pointsGeometry.setAttribute('size', new THREE.BufferAttribute(pointsSizes, 1));

  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x4a90e2,
    size: 2, // Further increased base size
    transparent: true,
    opacity: 1, // Full opacity
    sizeAttenuation: true
  });

  points = new THREE.Points(pointsGeometry, pointsMaterial);
  scene.add(points);

  // Create connections geometry
  const linePositions: number[] = [];
  nodes.forEach((node, i) => {
    node.connections.forEach(targetIndex => {
      linePositions.push(node.position.x, node.position.y, node.position.z);
      linePositions.push(
        nodes[targetIndex].position.x,
        nodes[targetIndex].position.y,
        nodes[targetIndex].position.z
      );
    });
  });

  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

  const linesMaterial = new THREE.LineBasicMaterial({
    color: 0x4a90e2,
    transparent: true,
    opacity: 0.7 // Further increased opacity
  });

  connections = new THREE.LineSegments(linesGeometry, linesMaterial);
  scene.add(connections);

  camera.position.z = 150; // Further adjusted camera position for wider view
};

const animate = () => {
  frameId = requestAnimationFrame(animate);

  if (points && connections) {
    points.rotation.x += 0.003; // Further increased rotation speed
    points.rotation.y += 0.003; // Further increased rotation speed
    connections.rotation.x += 0.003; // Further increased rotation speed
    connections.rotation.y += 0.003; // Further increased rotation speed

    // Pulse effect for points
    const sizes = points.geometry.attributes.size;
    for (let i = 0; i < sizes.count; i++) {
      sizes.array[i] = (Math.sin(Date.now() * 0.003 + i) + 2) * 2; // Adjusted pulse effect for more intensity
    }
    sizes.needsUpdate = true;

    // Color animation for points and connections (more vibrant)
    colorPhase += 0.007; // Adjust speed of color change
    const hue = (Math.sin(colorPhase) * 0.5 + 0.5) * 360; // Smooth hue transition
    const saturation = (Math.sin(colorPhase * 0.7) * 0.2 + 0.8) * 100; // More vibrant saturation
    const lightness = (Math.sin(colorPhase * 1.2) * 0.1 + 0.6) * 100; // More dynamic lightness
    const color = new THREE.Color(`hsl(${hue}, ${saturation}%, ${lightness}%)`);

    (points.material as THREE.PointsMaterial).color.set(color);
    (connections.material as THREE.LineBasicMaterial).color.set(color);
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