import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

mesh.position.y = 0
mesh.position.x = 2

mesh.rotation.reorder('YXZ') // Euler angles
mesh.rotation.x = 0.5
mesh.rotation.y = Math.PI

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff1234})
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 2, 1),
    new THREE.MeshBasicMaterial({color: 0xffff34})
)

cube3.position.set(-1, 1, 1)
cube3.rotation.x = 2
cube3.rotation.y = Math.PI


const axesHelper = new THREE.AxesHelper(3)

const group = new THREE.Group()
group.add(mesh, cube1, axesHelper, cube3)
group.position.y = 1
scene.add(group)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

// scale

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y =1
camera.position.x = 0.5

scene.add(camera)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)