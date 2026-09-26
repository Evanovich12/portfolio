import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function Blob() {
  return (
    <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.4}>
      <mesh>
        <icosahedronGeometry args={[1.6, 6]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.3}
        />
      </mesh>
    </Float>
  )
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 4, 4]} intensity={60} color="#c084fc" />
      <pointLight position={[-4, -2, -2]} intensity={30} color="#22d3ee" />
      <Suspense fallback={null}>
        <Blob />
      </Suspense>
    </Canvas>
  )
}
