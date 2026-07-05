import { useProgress } from '@react-three/drei';

export default function Loader() {
  const { progress } = useProgress();
  
  // Completely hides the loader view DOM element once loaded
  if (progress === 100) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-[#030014] z-[99] flex flex-col items-center justify-center">
      <div className="w-64 text-white">
        <p className="text-sm mb-2 text-center text-cyan-300 font-medium tracking-wide">
          Loading 3D Experience
        </p>
        <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-white/5">
          <div 
            className="h-full bg-cyan-400 transition-all duration-300 ease-out"
            style={{ 
              width: `${progress}%`,
              boxShadow: "0 0 14px rgba(6, 182, 212, 0.8)"
            }} 
          />
        </div>
        <p className="text-cyan-400/80 text-xs mt-2 text-center font-mono">
          {Math.floor(progress)}%
        </p>
      </div>
    </div>
  );
}
