import * as THREE from 'three'
import {gsap, Power2} from 'gsap'
import './index.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ratio = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Setting scene
const scene = new THREE.Scene()
const raycaster = new THREE.Raycaster()

// Add a box
  const geometry = new THREE.BoxGeometry(.1, 15, 10)
  const material = new THREE.MeshStandardMaterial({
    color: '#b67ff5',
  })
  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, 0, 0)
  scene.add(cube)

  const geometry2 = new THREE.BoxGeometry(.1, 15, 10)
  const material2 = new THREE.MeshStandardMaterial({
    color: '#ff3333',
  })
  const cube2 = new THREE.Mesh(geometry2, material2)
  cube2.position.set(0.1, 0, 0)
  scene.add(cube2)

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
camera.enableDamping = true
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
controls.enablePan = false
controls.enableZoom = false
controls.zoomToCursor = true
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

// Animations and timeline
const tl = gsap.timeline({defaults: {duration: 1}})

// handle event listener
const zoomBtn = document.querySelector(".zoomBtn")

zoomBtn.addEventListener('click', () => {
  // A hack to zoom and animate on click
  // tl.fromTo(cube.position, {x: 0, y: 0, z: 0}, {x: 0, y: 0, z: 35})
  // tl.fromTo(cube.rotation, { x: 0, y: 0, z: 0 }, { x: 0, y: Math.PI / 2, z:0 })

  tl.fromTo(cube.rotation, { x: 0, y: 0, z: 0 }, { x: 0, y: Math.PI / 2, z: 0 })
  tl.fromTo(cube2.rotation, { x: 0, y: 0, z: 0 }, { x: 0, y: -Math.PI / 2, z: 0 })
})
