import * as THREE from 'three'
import './index.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ratio = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Setting scene
const scene = new THREE.Scene()

// Create a book
const geometry = new THREE.BoxGeometry(1, 10, 15)
const material = new THREE.MeshStandardMaterial({
  color: '#b67ff5',
})
const cube = new THREE.Mesh(geometry, material)
cube.rotateY(14)
scene.add(cube)

// plane

const plane = new Plane()



// lights
const light = new THREE.DirectionalLight(0x404040, 10, 100)
light.position.set(8, 23, 25)
scene.add(light)


// camera setup
const camera = new THREE.PerspectiveCamera(
  45,
  ratio.width / ratio.height,
  0.1,
  100
) //takes field of view and aspect ratio.
camera.position.z = 50
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webGl')
const renderer = new THREE.WebGL1Renderer({ canvas })
renderer.setSize(ratio.width, ratio.height)
renderer.render(scene, camera)
renderer.setPixelRatio(2)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enableZoom = false
controls.enablePan = false
// controls.autoRotate = true
// controls.autoRotateSpeed = 5


window.addEventListener('resize', () => {
  ratio.width = window.innerWidth
  ratio.height = window.innerHeight
  camera.aspect = ratio.width / ratio.height
  renderer.setSize(ratio.width, ratio.height)
})

const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}

loop()
