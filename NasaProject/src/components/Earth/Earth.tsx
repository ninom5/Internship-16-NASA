import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import Nebula from "./Nebula";
import Starfield from "./StarField";
import EarthMaterial from "./EarthMaterial";
import AtmosphereMesh from "./Atmosphere";
import { Mars } from "./Mars";
// import { triggerAsyncId } from "async_hooks";

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

// const CameraController = () => {
//   const { camera, gl } = useThree();

//   useEffect(() => {
//     const handleDoubleClick = (event: MouseEvent) => {
//       const { clientX, clientY } = event;
//       const raycaster = new THREE.Raycaster();
//       const mouse = new THREE.Vector2(
//         (clientX / window.innerWidth) * 2 - 1,
//         -(clientY / window.innerHeight) * 2 + 1
//       );

//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObjects([], true);

//       if (intersects.length > 0) {
//         const target = intersects[0].point;
//         camera.position.set(target.x, target.y, target.z + 3);
//         camera.lookAt(target);
//       }
//     };

//     gl.domElement.addEventListener("dblclick", handleDoubleClick);
//     return () =>
//       gl.domElement.removeEventListener("dblclick", handleDoubleClick);
//   }, [camera, gl]);

//   return null;
// };

export const EarthComponent = ({ onLoad }: { onLoad?: () => void }) => {
  const navigate = useNavigate();

  const handleMarsClick = () => {
    navigate("/marsRoverPhotos");
  };

  return (
    <Canvas
      camera={{ position: [0, 0.1, 7] }}
      gl={{ toneMapping: THREE.NoToneMapping, alpha: true }}
    >
      {/* <CameraController /> */}
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
