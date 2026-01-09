import { Html, useProgress } from "@react-three/drei"

export default function Loader() {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="w-64 text-white">
        <p className="text-sm mb-2 text-center text-white">
          Loading 3D Experience
        </p>

        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 12px rgba(255,255,255,0.9)",
            }}
          />
        </div>

        <p className="text-white text-xs mt-1 text-center">
          {Math.floor(progress)}%
        </p>
      </div>
    </Html>
  )
}
