import * as THREE from 'three';
import "./style.css"
import gsap from 'gsap'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

//fonts I like: tourney, Press Start 2P, Bangers, Pixelify Sans, VT323, Creepster (lmfao)

//Scene
const scene = new THREE.Scene();
//Parameters:
//3 is radius, 64 and 64 are height and width segments
//This makes the ball very smooth
//Geometry def.: shape
const geometry = new THREE.SphereGeometry(3, 64, 64);
//material is how it looks
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff83,
    roughness: 0,
    metalness: 0,
})
//Mesh def.: basically the combination of material and geometry
const mesh = new THREE.Mesh(geometry, material);
//Add to scene
scene.add(mesh)

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

//Lights
const light = new THREE.PointLight(0xffffff, 100, 50)
light.position.set(0,10,10)
scene.add(light)

//Camera
//Parameters:
//45  is field of view, if you go above 50 it causes distortion
//like a fisheye camera :P
//800, 600 is the aspect ratio of camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height)
camera.position.z = 20
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas});
//define where and how big to render
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//Controls
//Must be below definitions of canvas
const controls =  new OrbitControls(camera, canvas)
//dampening changes movement based on mouse drag speed
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 10

//Resize
window.addEventListener('resize', () =>{
    //Update Sizes with scrolling screen
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
})

//Loop to continuously render
const loop = () => {
    //create movement
    //mesh.position.x += 0.1
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop()

//Timeline Magic wit Gsap
const tl = gsap.timeline({default: 1})
//must scale correctly or else distortion
tl.fromTo(mesh.scale, {z:0, x:0, y:0}, {z:1, x:1, y:1})
//moving down nav
tl.fromTo('nav', {y:'-100%'}, {y:'0%'})
tl.fromTo(".title", {opacity: 0 }, {opacity: 1 })

//Mouse Animation Color
let mouseDown = false
let rgb = [];
window.addEventListener("mousedown", () => (mouseDown = true))
window.addEventListener("mouseup", () => (mouseDown = false))

window.addEventListener('mousemove', (e) => {
    if(mouseDown){
        rgb = [
            Math.round((e.pageX / sizes.width) * 255),
            Math.round((e.pageY / sizes.height) * 255),
            150,
        ]
        //Animation time
        let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
        gsap.to(mesh.material.color, {r:newColor.r, g:newColor.g, b: newColor.b})
    }
})