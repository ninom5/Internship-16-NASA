import * as THREE from "three";

export interface StarProps {
  numStars?: number;
}

export interface StarPoint {
  pos: THREE.Vector3;
  update: (t: number) => number;
  minDist: number;
}
