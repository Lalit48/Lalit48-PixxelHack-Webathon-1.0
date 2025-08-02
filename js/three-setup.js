// Three.js Setup for PixxelHack 3D Interactive Element

let scene, camera, renderer, geometry, material, mesh;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// Initialize Three.js Scene
function initThreeJS() {
    const container = document.getElementById('three-container');
    
    if (!container) return;
    
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Camera setup
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
    });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Clear container and add canvas
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    
    // Create geometry - PixxelHack logo inspired shape
    createPixxelHackGeometry();
    
    // Add lights
    addLights();
    
    // Add ambient particles
    addParticles();
    
    // Start animation
    animate();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Handle mouse movement
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Handle touch events for mobile
    document.addEventListener('touchmove', onDocumentTouchMove);
}

// Create PixxelHack inspired geometry
function createPixxelHackGeometry() {
    // Create a group to hold multiple geometries
    const group = new THREE.Group();
    
    // Main cube with custom material
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshPhongMaterial({
        color: 0xd076bc,
        transparent: true,
        opacity: 0.8,
        shininess: 100
    });
    
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.receiveShadow = true;
    group.add(cube);
    
    // Inner sphere
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0xe6dda2,
        transparent: true,
        opacity: 0.6,
        shininess: 50
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    group.add(sphere);
    
    // Floating rings
    for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.TorusGeometry(1.5 + i * 0.3, 0.1, 8, 32);
        const ringMaterial = new THREE.MeshPhongMaterial({
            color: [0xc0bbdf, 0x266b45, 0x5e8584][i],
            transparent: true,
            opacity: 0.7
        });
        
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.z = (i - 1) * 0.5;
        group.add(ring);
    }
    
    // Add floating particles around the main shape
    for (let i = 0; i < 20; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: [0xd076bc, 0xe6dda2, 0xc0bbdf, 0x266b45, 0x5e8584][i % 5],
            transparent: true,
            opacity: 0.8
        });
        
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.position.set(
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 6
        );
        particle.userData = {
            originalPosition: particle.position.clone(),
            speed: Math.random() * 0.02 + 0.01,
            amplitude: Math.random() * 0.5 + 0.2
        };
        group.add(particle);
    }
    
    mesh = group;
    scene.add(mesh);
}

// Add lighting to the scene
function addLights() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xd076bc, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Point light
    const pointLight = new THREE.PointLight(0xe6dda2, 1, 100);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);
    
    // Spot light
    const spotLight = new THREE.SpotLight(0xc0bbdf, 0.8);
    spotLight.position.set(0, 10, 0);
    spotLight.angle = Math.PI / 6;
    spotLight.penumbra = 0.1;
    spotLight.decay = 2;
    spotLight.distance = 200;
    spotLight.castShadow = true;
    scene.add(spotLight);
}

// Add particle system
function addParticles() {
    const particleCount = 100;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        
        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.8, 0.6);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
    });
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    if (mesh) {
        // Rotate the main mesh
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.015;
        
        // Mouse interaction
        mesh.rotation.x += (mouseY - mesh.rotation.x) * 0.001;
        mesh.rotation.y += (mouseX - mesh.rotation.y) * 0.001;
        
        // Animate individual parts
        mesh.children.forEach((child, index) => {
            if (child.userData && child.userData.speed) {
                // Animate particles
                const time = Date.now() * child.userData.speed;
                child.position.x = child.userData.originalPosition.x + Math.sin(time) * child.userData.amplitude;
                child.position.y = child.userData.originalPosition.y + Math.cos(time) * child.userData.amplitude;
                child.position.z = child.userData.originalPosition.z + Math.sin(time * 0.5) * child.userData.amplitude;
            } else if (child.geometry.type === 'TorusGeometry') {
                // Animate rings
                child.rotation.z += 0.02;
            }
        });
    }
    
    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    const container = document.getElementById('three-container');
    if (!container) return;
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(containerWidth, containerHeight);
    
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
}

// Handle mouse movement
function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) * 0.001;
    mouseY = (event.clientY - windowHalfY) * 0.001;
}

// Handle touch movement for mobile
function onDocumentTouchMove(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
        mouseX = (event.touches[0].pageX - windowHalfX) * 0.001;
        mouseY = (event.touches[0].pageY - windowHalfY) * 0.001;
    }
}

// Intersection Observer to start/stop animation when visible
function initThreeJSObserver() {
    const container = document.getElementById('three-container');
    if (!container) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start Three.js when visible
                if (!scene) {
                    initThreeJS();
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    observer.observe(container);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for the page to load, then initialize
    setTimeout(() => {
        initThreeJSObserver();
    }, 1000);
});

// Cleanup function
function cleanupThreeJS() {
    if (renderer) {
        renderer.dispose();
    }
    if (scene) {
        scene.clear();
    }
    window.removeEventListener('resize', onWindowResize);
    document.removeEventListener('mousemove', onDocumentMouseMove);
    document.removeEventListener('touchmove', onDocumentTouchMove);
}

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        if (renderer) {
            renderer.setAnimationLoop(null);
        }
    } else {
        // Resume animations when page becomes visible
        if (renderer) {
            renderer.setAnimationLoop(animate);
        }
    }
});

console.log('PixxelHack Three.js Setup - Loaded Successfully! 🎨'); 