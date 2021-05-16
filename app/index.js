/**
 * Application entry point
 */

// Load application styles
import 'scss/_index.scss';

// Import Three.js
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Create the Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 3D Model
const loader = new GLTFLoader();

loader.load('../assets/neo_tokyo/scene.gltf', function(gltf) {
  scene.scale.set(0.01,0.01,0.01);
  scene.add(gltf.scene);
}, undefined, function(error) {
  console.error(error);
});

// Animate
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene,camera);
}

animate();