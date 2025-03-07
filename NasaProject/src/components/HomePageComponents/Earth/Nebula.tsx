import * as THREE from "three";
import React from "react";
import { SpriteProps, SpritesProps } from "types";

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

  spriteMat.color.offsetHSL(0, 0, Math.random() * 0.2 - 0.1);

  const sprite = new THREE.Sprite(spriteMat);
  sprite.position.set(pos.x, -pos.y, pos.z);
  size += Math.random() - 0.5;
  sprite.scale.set(size, size, size);
  sprite.material.rotation = 0;
  return sprite;
}

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
