import * as THREE from "three";
import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";

export const Mars = () => {
  const ref = React.useRef<THREE.Mesh>(null);

  const marsTexture = useLoader(
    THREE.TextureLoader,
    "./textures/mars_1k_color.jpg"
  );

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0003;
  });

  return (
    <mesh ref={ref} position={[20, 0, 5]} scale={[1.5, 1.5, 1.5]}>
      <icosahedronGeometry args={[1.2, 64]} />
      <meshStandardMaterial map={marsTexture} />
    </mesh>
  );
};
