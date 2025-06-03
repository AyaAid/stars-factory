import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';
import './style/Scene3D.css';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import marsTexture from '../assets/mars-texture.jpg';

function AnimatedPlanet() {
  const texture = useLoader(TextureLoader, marsTexture);
  return (
    <Sphere args={[1.5, 64, 64]} scale={1.2}>
      <MeshDistortMaterial
        attach="material"
        distort={0.2}
        speed={2}
        roughness={0.5}
        metalness={0.4}
        map={texture}
      />
    </Sphere>
  );
}

function Scene3D() {
  return (
    <section className="scene3d-section">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 1]} intensity={1} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />
          <AnimatedPlanet />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="overlay-text">
          <h3>Explore the universe from your screen</h3>
        </div>
      </div>
    </section>
  );
}

export default Scene3D;