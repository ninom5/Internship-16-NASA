import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

// Type for the properties used in getPoints
interface StarProps {
  numStars?: number;
}

// Type for the result of randomSpherePoint
interface StarPoint {
  pos: THREE.Vector3;
  update: (t: number) => number;
  minDist: number;
}

// Function to generate random points for stars in a sphere
function getPoints({ numStars = 500 }: StarProps = {}): THREE.Points {
  function randomSpherePoint(): StarPoint {
    const radius = Math.random() * 25 + 25;
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    const rate = Math.random() * 1;
    const prob = Math.random();
    const light = Math.random();

    function update(t: number): number {
      return prob > 0.8 ? light + Math.sin(t * rate) * 1 : light;
    }

    return {
      pos: new THREE.Vector3(x, y, z),
      update,
      minDist: radius,
    };
  }

  const verts: number[] = [];
  const colors: number[] = [];
  const positions: StarPoint[] = [];
  let col: THREE.Color;

  // Generate stars
  for (let i = 0; i < numStars; i += 1) {
    let p = randomSpherePoint();
    const { pos } = p;
    positions.push(p);
    col = new THREE.Color().setHSL(Math.random(), 0.2, Math.random());
    verts.push(pos.x, pos.y, pos.z);
    colors.push(col.r, col.g, col.b);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.2,
    vertexColors: true,
    map: new THREE.TextureLoader().load("./circle.png"),
  });

  const points = new THREE.Points(geo, mat);

  // Update function for animating the points
  function update(t: number) {
    points.rotation.y -= 0.0002;
    const updatedColors: number[] = [];
    for (let i = 0; i < numStars; i += 1) {
      const p = positions[i];
      const { update } = p;
      let bright = update(t);
      col = new THREE.Color().setHSL(0.6, 0.2, bright);
      updatedColors.push(col.r, col.g, col.b);
    }
    geo.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(updatedColors, 3)
    );
    geo.attributes.color.needsUpdate = true;
  }

  points.userData = { update };
  return points;
}

// Starfield component
const Starfield: React.FC = () => {
  const ref = React.useRef<THREE.Points>(null);
  const points = getPoints({ numStars: 3000 });

  useFrame((state) => {
    const { clock } = state;
    if (ref.current) {
      ref.current.userData.update(clock.elapsedTime);
    }
  });

  return <primitive object={points} ref={ref} />;
};

export default Starfield;
