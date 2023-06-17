import * as THREE from 'three';


// 1
const scene = new THREE.Scene();


// 3
const camera = new THREE.PerspectiveCamera( 
	100, 
	window.innerWidth / window.innerHeight, 
	0.1, 1000 
	);


// 4
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Mesh 0 (Object)
const geometry_0 = new THREE.BoxGeometry( 1, 1, 1 );
const material_0 = new THREE.MeshBasicMaterial( { color: '#F2BE22' } );
const cube_0 = new THREE.Mesh( geometry_0, material_0 );
scene.add( cube_0 );

// Mesh 1 (Object)
const geometry_1 = new THREE.BoxGeometry( 1.5, 0.9, 0.5 );
const material_1 = new THREE.MeshBasicMaterial( { color: 'purple' } );
const cube_1 = new THREE.Mesh( geometry_1, material_1 );
scene.add( cube_1 );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube_0.rotation.x += 0.01;
	cube_0.rotation.y += 0.01;

	cube_1.rotation.x += 0.01;
	cube_1.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();