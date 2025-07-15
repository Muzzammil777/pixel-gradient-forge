import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, BoxGeometry, MeshStandardMaterial } from "three";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

interface RotatingCubeProps {
  position?: [number, number, number];
  color?: string;
}

const RotatingCube = ({ position = [0, 0, 0], color = "#a855f7" }: RotatingCubeProps) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const FloatingCube = ({ position = [0, 0, 0], color = "#06b6d4" }: RotatingCubeProps) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

interface ThreeSceneProps {
  className?: string;
  showControls?: boolean;
}

const ThreeScene = ({ className = "", showControls = false }: ThreeSceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <RotatingCube position={[0, 0, 0]} color="#a855f7" />
        <FloatingCube position={[2, 0, -1]} color="#06b6d4" />
        <FloatingCube position={[-2, 0, -1]} color="#ec4899" />
        
        {showControls && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  );
};

export default ThreeScene;