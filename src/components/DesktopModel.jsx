import { useRef, useEffect } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"

export default function DesktopModel() {
  const ref = useRef()
  const { camera, size } = useThree()

  const model = useGLTF("/models/programmer_desktop_3d_pc.glb")
  const screenTexture = useTexture("/screens/code.png")

  // 🔥 RESPONSIVE VALUES BASED ON SCREEN WIDTH
  const isMobile = size.width < 640

  const scale = isMobile ? 0.14 : 0.22
  const yPosition = isMobile ? -0.8 : -0.45

  useEffect(() => {
    // ✅ HARD CENTER THE MODEL
    const box = new THREE.Box3().setFromObject(model.scene)
    const center = box.getCenter(new THREE.Vector3())
    model.scene.position.sub(center)

    screenTexture.colorSpace = THREE.SRGBColorSpace
    screenTexture.flipY = false

    model.scene.traverse((obj) => {
      if (!obj.isMesh) return

      if (obj.name.toLowerCase().includes("screen")) {
        obj.material = new THREE.MeshStandardMaterial({
          map: screenTexture,
          emissiveMap: screenTexture,
          emissive: new THREE.Color(1, 1, 1),
          emissiveIntensity: 0.6,
          roughness: 0.9,
          metalness: 0,
        })
      }
      else if (obj.material) { obj.material.roughness = 0.6
         obj.material.metalness = 0.1 }
    })
  }, [model, screenTexture])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      state.pointer.x * 0.25,
      0.05
    )
  })

  return (
    <group ref={ref} scale={scale} position={[0, yPosition, 0]}>
      <primitive object={model.scene} />
    </group>
  )
}

useGLTF.preload("/models/programmer_desktop_3d_pc.glb")
