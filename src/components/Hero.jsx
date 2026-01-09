import { Canvas } from "@react-three/fiber"
import { Environment, Html, Loader } from "@react-three/drei"
import { Suspense } from "react"
import * as THREE from "three"
import { motion } from "framer-motion"
import DesktopModel from "./DesktopModel"

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-28 h-screen w-full">
       
 
      <Canvas
      dpr={[1, 1.5]}                 // 🔥 prevents mobile GPU crash
  camera={{
    position: [0, 1.3, 4],
    fov: 50,
    near: 0.1,
    far: 100,
  }}
        
        gl={{
           antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1,
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <DesktopModel />

          <Html position={[0, -1.5, 0]} center>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-cyan-300 text-lg tracking-wide whitespace-nowrap"
              style={{
                textAlign: "center",
                textShadow:
                  "0 0 8px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
              }}
            >
              Full Stack Developer | AI Enthusiast
            </motion.p>
          </Html>
        </Suspense>
      </Canvas>

      {/* ✅ SAFE GLOBAL LOADER */}
      {/* <Loader /> */}
    </section>
  )
}
