import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)
// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 0.3
camera.position.y = 0.7

scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

window.addEventListener('keydown', (e) => {
    if (e.key === 'w') {
        mesh.position.y += 0.1
    }

    if (e.key === 'a') {
        mesh.position.x -= 0.1
    }

    if (e.key === 's') {
        mesh.position.y -= 0.1
    }

    if (e.key === 'd') {
        mesh.position.x += 0.1
    }
})

//cloak
const clock = new THREE.Clock()
gsap.to(mesh.position, { duration:1, delay: 1, x:2 })

//animation 
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    mesh.rotation.y = Math.sin(elapsedTime)
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)

}
tick()