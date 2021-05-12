import * as THREE from 'three'

export const example = () => {
  // Create Scene
  const scene = new THREE.Scene()

  // Cameras
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  // Create Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  // Geometry
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshNormalMaterial({ wireframe: true })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
  camera.position.z = 2

  // Animate Function
  const animate = function () {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01

    renderer.render(scene, camera)
  }
  animate()
}
