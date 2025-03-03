import * as THREE from "three";

export interface SpriteProps {
  hasFog: boolean;
  color: THREE.Color | string | number;
  opacity: number;
  path: string;
  pos: THREE.Vector3;
  size: number;
}

export interface SpritesProps {
  hasFog?: boolean;
  hue?: number;
  numSprites?: number;
  opacity?: number;
  path?: string;
  radius?: number;
  sat?: number;
  size?: number;
  z?: number;
}
