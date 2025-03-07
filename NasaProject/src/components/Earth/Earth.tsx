import * as THREE from "three";
import React, { useEffect, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Nebula from "./Nebula";
import Starfield from "./StarField";
import EarthMaterial from "./EarthMaterial";
import AtmosphereMesh from "./Atmosphere";
import { Mars } from "./Mars";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

const Earth = ({ onLoad }: { onLoad?: () => void }) => {
  const ref = React.useRef<THREE.Mesh>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (ref.current && !isLoaded) {
      setIsLoaded(true);
      if (onLoad) onLoad();
    }
  }, [isLoaded, onLoad]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
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

const ZoomInEffect = () => {
  const { camera } = useThree();
  const [zoomingIn, setZoomingIn] = useState(true);

  useEffect(() => {
    setZoomingIn(true);
  }, []);

  useFrame(() => {
    if (zoomingIn && camera.position.x > 0) {
      camera.position.x -= 0.05;
    } else setZoomingIn(false);
  });

  return null;
};

export const EarthComponent = ({ onLoad }: { onLoad?: () => void }) => {
  const navigate = useNavigate();

  const handleMarsClick = () => {
    navigate("/marsRoverPhotos");
  };

  return (
    <Canvas
      camera={{ position: [100, 0.1, 7] }}
      gl={{ toneMapping: THREE.NoToneMapping, alpha: true }}
    >
      <ZoomInEffect />
      <Earth onLoad={onLoad} />
      <Mars onClick={handleMarsClick} />{" "}
      <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
      <directionalLight position={[-2, 0.5, 1.5]} />
      <Nebula />
      <Starfield />
      <OrbitControls enablePan={true} />
    </Canvas>
  );
};

export default EarthComponent;
