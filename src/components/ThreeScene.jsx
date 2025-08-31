import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

const GeometricShape = ({ position, rotation, scale, geometry, colorIndex }) => {
  const meshRef = useRef();
  const { isDark } = useTheme();

  const colors = [
    '#1e40af', // Blue
    '#059669', // Emerald  
    '#d97706', // Amber
    '#7c3aed', // Purple
    '#dc2626', // Red
  ];

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
        geometry={geometry}
      >
        <meshStandardMaterial
          color={colors[colorIndex]}
          wireframe={true}
          transparent={true}
          opacity={0.8}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const ConnectingLines = () => {
  const { isDark } = useTheme();
  
  const points1 = useMemo(() => [
    new THREE.Vector3(-3, -1, 0),
    new THREE.Vector3(0, 2, 1),
    new THREE.Vector3(3, -1, 0)
  ], []);

  const points2 = useMemo(() => [
    new THREE.Vector3(-2, 3, -1),
    new THREE.Vector3(2, 0, 0),
    new THREE.Vector3(-2, -3, 1)
  ], []);

  return (
    <>
      <Line
        points={points1}
        color="#059669"
        opacity={0.4}
        transparent={true}
        lineWidth={2}
      />
      <Line
        points={points2}
        color="#1e40af"
        opacity={0.3}
        transparent={true}
        lineWidth={2}
      />
    </>
  );
};

const EnhancedParticles = () => {
  const particlesRef = useRef();
  const { isDark } = useTheme();

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
      particlesRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={100}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#d97706"
        size={0.08}
        transparent={true}
        opacity={0.6}
        vertexColors={false}
      />
    </points>
  );
};

const ThreeScene = () => {
  const geometries = useMemo(() => [
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.ConeGeometry(0.8, 1.8, 8),
    new THREE.TorusGeometry(0.8, 0.3, 16, 100),
    new THREE.OctahedronGeometry(1.2),
    new THREE.TetrahedronGeometry(1),
    new THREE.DodecahedronGeometry(0.8),
  ], []);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#059669" />
        <pointLight position={[10, -10, 10]} intensity={0.5} color="#1e40af" />
        
        {/* Enhanced Geometric Shapes */}
        <GeometricShape
          position={[-3, 2, 0]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
          geometry={geometries[0]}
          colorIndex={0}
        />
        <GeometricShape
          position={[3, -2, -1]}
          rotation={[0.5, 0, 0]}
          scale={[1.2, 1.2, 1.2]}
          geometry={geometries[1]}
          colorIndex={1}
        />
        <GeometricShape
          position={[0, 3, 1]}
          rotation={[0, 0.5, 0]}
          scale={[0.8, 0.8, 0.8]}
          geometry={geometries[2]}
          colorIndex={2}
        />
        <GeometricShape
          position={[-2, -2, 0.5]}
          rotation={[0.2, 0, 0.3]}
          scale={[0.9, 0.9, 0.9]}
          geometry={geometries[3]}
          colorIndex={3}
        />
        <GeometricShape
          position={[2, 2, -0.5]}
          rotation={[0.3, 0.2, 0]}
          scale={[0.7, 0.7, 0.7]}
          geometry={geometries[4]}
          colorIndex={4}
        />
        <GeometricShape
          position={[-1, 0, 2]}
          rotation={[0.1, 0.4, 0]}
          scale={[0.6, 0.6, 0.6]}
          geometry={geometries[5]}
          colorIndex={0}
        />
        <GeometricShape
          position={[1.5, -3, 1]}
          rotation={[0.4, 0.1, 0.2]}
          scale={[0.8, 0.8, 0.8]}
          geometry={geometries[6]}
          colorIndex={1}
        />

        {/* Connecting Lines */}
        <ConnectingLines />
        
        {/* Enhanced Particles */}
        <EnhancedParticles />
      </Canvas>
    </div>
  );
};

export default ThreeScene;