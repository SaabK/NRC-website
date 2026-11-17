import { useEffect, useMemo, type RefObject } from "react";
import * as THREE from "three";

export type GlowMesh = THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
export type FloorRingMesh = THREE.Mesh<THREE.TorusGeometry, THREE.MeshBasicMaterial>;

interface ShadowProps {
  glowRef: RefObject<GlowMesh | null>;
  ringRef: RefObject<FloorRingMesh | null>;
  contactRef: RefObject<GlowMesh | null>;
  orangeMaterial: THREE.MeshBasicMaterial;
  segments: number;
}

function createRadialTexture(centerColor: string, edgeColor: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Unable to create the mascot floor glow.");
  const gradient = context.createRadialGradient(64, 64, 2, 64, 64, 64);
  gradient.addColorStop(0, centerColor);
  gradient.addColorStop(1, edgeColor);
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(canvas);
}

export function Shadow({ glowRef, ringRef, contactRef, orangeMaterial, segments }: ShadowProps) {
  const glowTexture = useMemo(
    () => createRadialTexture("rgba(255, 107, 43, 1)", "rgba(255, 107, 43, 0)"),
    [],
  );
  const contactTexture = useMemo(
    () => createRadialTexture("rgba(3, 4, 10, 0.44)", "rgba(3, 4, 10, 0)"),
    [],
  );
  const glowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    map: glowTexture,
    color: "#FF6B2B",
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,
    opacity: 0.8,
  }), [glowTexture]);
  const contactMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    map: contactTexture,
    transparent: true,
    depthWrite: false,
    opacity: 0.2,
  }), [contactTexture]);

  useEffect(() => () => {
    glowTexture.dispose();
    contactTexture.dispose();
    glowMaterial.dispose();
    contactMaterial.dispose();
  }, [contactTexture, contactMaterial, glowMaterial, glowTexture]);

  return (
    <>
      <mesh
        ref={contactRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.64, 0]}
        scale={[1.8, 0.4, 1]}
        material={contactMaterial}
      >
        <planeGeometry args={[1, 1]} />
      </mesh>
      <mesh
        ref={glowRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.62, 0]}
        scale={[2.4, 0.5, 1]}
        material={glowMaterial}
      >
        <planeGeometry args={[1, 1]} />
      </mesh>
      <mesh
        ref={ringRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.61, 0]}
        scale={[1.25, 0.35, 1]}
        material={orangeMaterial}
      >
        <torusGeometry args={[0.3, 0.008, 8, segments]} />
      </mesh>
    </>
  );
}
