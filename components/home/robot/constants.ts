import type { MutableRefObject } from "react";
import type * as THREE from "three";

export const EYE_COLOR = "#EAF6FF";

export interface PointerState {
  x: number;
  y: number;
  active: boolean;
  lastMoveAt: number;
}

export interface MascotQuality {
  weakDevice: boolean;
  segments: 32 | 48;
}

export interface MascotMaterials {
  shell: THREE.MeshStandardMaterial;
  glass: THREE.MeshStandardMaterial;
  orangeGlow: THREE.MeshBasicMaterial;
  faceGlow: THREE.MeshBasicMaterial;
}

export interface MascotProps {
  pointerRef: MutableRefObject<PointerState>;
  scrollProgress: MutableRefObject<number>;
  reducedMotion: boolean;
  quality: MascotQuality;
}
