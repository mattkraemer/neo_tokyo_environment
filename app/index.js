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
const camera = new THREE.PerspectiveCamera(17, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,0,25);

// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lights
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.15 );
scene.add( directionalLight );

// 3D Model
const loader = new GLTFLoader();

loader.load('../assets/neo_tokyo/scene.gltf', function(gltf) {
  scene.scale.set(0.1,0.1,0.1);
  scene.rotation.x += .75;
  scene.add(gltf.scene);
}, undefined, function(error) {
  console.error(error);
});

// Animate
function animate() {
  requestAnimationFrame(animate);

  scene.rotation.y += 0.0005;

  renderer.render(scene,camera);
}

animate();