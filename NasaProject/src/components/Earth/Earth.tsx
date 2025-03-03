import * as THREE from "three";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nebula from "./Nebula";
import Starfield from "./StarField";
import EarthMaterial from "./EarthMaterial";
import AtmosphereMesh from "./Atmosphere";
import { Mars } from "./Mars";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

const Earth = () => {
  const ref = React.useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0007;
    }
  });

  const axialTilt = (23.4 * Math.PI) / 180;
  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
        <AtmosphereMesh />
      </mesh>
    </group>
  );
};

export const EarthComponent = () => {
  const { x, y, z } = sunDirection;
  return (
    <Canvas
      camera={{ position: [0, 0.1, 5] }}
      gl={{ toneMapping: THREE.NoToneMapping }}
    >
      <Earth />
      <Mars />
      <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
      <directionalLight position={[x, y, z]} />
      <Nebula />
      <Starfield />
      <OrbitControls />
    </Canvas>
  );
};

export default EarthComponent;
