"use client";

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ## THIS COMPONENT NOW RENDERS STARS ##
// Floating star shapes component
function FloatingShapes() {
  const meshRef = useRef<THREE.Group>(null);
  const count = 40; // Increased count for more stars
  
  // --- NEW: Procedurally generate a star texture ---
  const starTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(32, 2);
      ctx.lineTo(42, 24);
      ctx.lineTo(62, 28);
      ctx.lineTo(48, 44);
      ctx.lineTo(52, 62);
      ctx.lineTo(32, 52);
      ctx.lineTo(12, 62);
      ctx.lineTo(16, 44);
      ctx.lineTo(2, 28);
      ctx.lineTo(22, 24);
      ctx.closePath();
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <group ref={meshRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          map={starTexture} // --- USE THE STAR TEXTURE ---
          transparent
          color="#fb7185" // --- LIGHTER, PINKISH-RED COLOR ---
          size={0.15} // Increased size to make stars visible
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9} 
        />
      </Points>
    </group>
  );
}

// ## THIS COMPONENT NOW RENDERS VISIBLE SQUARES ##
// Animated code blocks floating in 3D space
function CodeBlocks() {
  const groupRef = useRef<THREE.Group>(null);
  const codeSnippets = useMemo(() => [
    'const app = () => {\n  return <div>Hello</div>\n}',
    'async function getData() {\n  const res = await fetch("/api")\n  return res.json()\n}',
    'class Database {\n  async connect() {\n    return this.pool.connect()\n  }\n}',
    'export const config = {\n  runtime: "edge",\n  regions: ["iad1"]\n}'
  ], []);

  const initialPositions = useMemo(() => 
    codeSnippets.map((_, index) => ({
      x: Math.cos(index * Math.PI * 0.5) * 8,
      y: Math.sin(index * Math.PI * 0.3) * 4,
      z: Math.sin(index * Math.PI * 0.7) * 6
    })), []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.position.x = initialPositions[index].x + Math.cos(state.clock.elapsedTime * 0.2 + index * 2) * 2;
        child.position.z = initialPositions[index].z + Math.sin(state.clock.elapsedTime * 0.2 + index * 2) * 2;
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.005;
        child.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.1;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {codeSnippets.map((_, index) => (
        <mesh key={index} position={[
          initialPositions[index].x,
          initialPositions[index].y,
          initialPositions[index].z
        ]}>
          <boxGeometry args={[2, 1.5, 0.1]} />
          {/* --- NEW MATERIAL FOR BETTER VISIBILITY --- */}
          <meshBasicMaterial
            color="#ef4444" // Brighter red
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Interactive particle system that responds to mouse movement
function InteractiveParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  const count = 1000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const mouseInfluence = 
          Math.sin(state.clock.elapsedTime + positions[i3] * 0.1) * 0.1 +
          Math.cos(mouse.x * viewport.width * 0.1 + positions[i3 + 1] * 0.1) * 0.1;
        
        positions[i3 + 2] += mouseInfluence * 0.1;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ef4444" // --- LIGHTER RED ---
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.0} color="#fb7185" /> 
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
      
      <FloatingShapes />
      <CodeBlocks />
      <InteractiveParticles />
    </>
  );
}

// Main component with responsive canvas
type AnimatedBackgroundVariant = 'default' | 'resume';

interface AnimatedBackgroundProps {
  variant?: AnimatedBackgroundVariant;
  className?: string;
}

export function AnimatedBackground({ variant = 'default', className = '' }: AnimatedBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-red-950/20 to-rose-950/20" />
    );
  }

  // --- LIGHTER RED GRADIENT ---
  const gradient = variant === 'resume'
    ? 'linear-gradient(135deg, #020617 0%, #111827 35%, #7f1d1d 70%, #b91c1c 100%)'
    : 'linear-gradient(135deg, #111827 0%, #7f1d1d 50%, #b91c1c 100%)';

  return (
    <div className={`fixed inset-0 -z-10 print:hidden ${className}`}>
      <Canvas
        camera={{
          position: [0, 0, 15],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        style={{ background: gradient }}
      >
        <Scene />
      </Canvas>
      
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/60 dark:via-black/30 dark:to-black/50 pointer-events-none mix-blend-normal" />
    </div>
  );
}