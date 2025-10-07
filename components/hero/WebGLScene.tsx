'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  // Procedural shader for dreamlike effect
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;

    void main() {
      vUv = uv;
      vPosition = position;
      
      vec3 pos = position;
      float noise = sin(pos.x * 2.0 + time) * cos(pos.y * 2.0 + time) * 0.1;
      pos += normal * noise;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;

    void main() {
      float pattern = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
      vec3 color = mix(color1, color2, pattern * 0.5 + 0.5);
      
      float alpha = 0.6 + sin(time + vPosition.z) * 0.2;
      gl_FragColor = vec4(color, alpha);
    }
  `

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      color1: { value: new THREE.Color('#16213E') },
      color2: { value: new THREE.Color('#E94560') },
    }),
    []
  )

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time * 0.5
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1
      meshRef.current.rotation.y = time * 0.15
    }
  })

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </Sphere>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#E94560" transparent opacity={0.6} />
    </points>
  )
}

export default function WebGLScene() {
  return (
    <div className="absolute inset-0 canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#E94560" intensity={0.5} />
        
        <AnimatedSphere />
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
