import * as THREE from "three";
import React from "react";

// Type for the properties used in the getSprite function
interface SpriteProps {
  hasFog: boolean;
  color: THREE.Color | string | number; // Allow color to be a HEX value, string, or THREE.Color
  opacity: number;
  path: string;
  pos: THREE.Vector3;
  size: number;
}

// Type for the properties used in the getSprites function
interface SpritesProps {
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

// Create sprite with given properties
function getSprite({
  hasFog,
  color,
  opacity,
  path,
  pos,
  size,
}: SpriteProps): THREE.Sprite {
  const loader = new THREE.TextureLoader();
  const spriteMat = new THREE.SpriteMaterial({
    color,
    fog: hasFog,
    map: loader.load(path),
    transparent: true,
    opacity,
  });

  // Adjust the color slightly
  spriteMat.color.offsetHSL(0, 0, Math.random() * 0.2 - 0.1);

  const sprite = new THREE.Sprite(spriteMat);
  sprite.position.set(pos.x, -pos.y, pos.z); // Flipping the Y-axis
  size += Math.random() - 0.5; // Slight random variation in size
  sprite.scale.set(size, size, size);
  sprite.material.rotation = 0; // No rotation applied
  return sprite;
}

// Generate a group of sprites with random positioning
function getSprites({
  hasFog = true,
  hue = 0.65,
  numSprites = 8,
  opacity = 0.2,
  path = "./rad-grad.png",
  radius = 10,
  sat = 0.5,
  size = 24,
  z = -10.5,
}: SpritesProps = {}): THREE.Group {
  const layerGroup = new THREE.Group();
  for (let i = 0; i < numSprites; i += 1) {
    const angle = (i / numSprites) * Math.PI * 2;
    const pos = new THREE.Vector3(
      Math.cos(angle) * Math.random() * radius,
      Math.sin(angle) * Math.random() * radius,
      z + Math.random()
    );

    const color = new THREE.Color().setHSL(hue, 1, sat);
    const sprite = getSprite({ hasFog, color, opacity, path, pos, size });
    layerGroup.add(sprite);
  }
  return layerGroup;
}

// Nebula component using the generated sprites
const Nebula: React.FC = () => {
  const sprites = getSprites({
    numSprites: 8,
    radius: 10,
    z: -10.5,
    size: 24,
    opacity: 0.2,
    path: "./rad-grad.png",
  });
  return <primitive object={sprites} />;
};

export default Nebula;
