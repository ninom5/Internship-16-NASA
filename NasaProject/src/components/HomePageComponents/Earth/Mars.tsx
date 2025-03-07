import * as THREE from "three";
import React from "react";
import { useLoader } from "@react-three/fiber";

interface MarsProps {
  onClick?: () => void;
}

export const Mars = ({ onClick }: MarsProps) => {
  const ref = React.useRef<THREE.Mesh>(null);
  const marsTexture = useLoader(
    THREE.TextureLoader,
    "./textures/mars_1k_color.jpg"
  );

  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <mesh
      ref={ref}
      position={[22, 2, -17]}
      scale={[1.5, 1.5, 1.5]}
      onClick={handleClick}
    >
      <icosahedronGeometry args={[1.2, 64]} />
      <meshStandardMaterial map={marsTexture} />
    </mesh>
  );
};
