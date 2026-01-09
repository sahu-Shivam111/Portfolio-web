import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Text, OrbitControls } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

// Floating particles component
function Particles() {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0008
      ref.current.rotation.x += 0.0004
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
        color="#00ffff"
      />
    </Points>
  )
}



// Main Three.js Background
export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
         pointerEvents: "none",
        background: "radial-gradient(circle at top, #020617, #000000)"
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ff00ff" />

      {/* Animated particles */}
      <Particles />

     
      {/* OrbitControls for slight auto rotation */}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate rotateSpeed={0.2} />
    </Canvas>
  )
}