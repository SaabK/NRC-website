import type { RefObject } from "react";
import type * as THREE from "three";
import type { MascotMaterials, MascotQuality } from "@/components/home/robot/constants";

interface ArmsProps {
  materials: MascotMaterials;
  quality: MascotQuality;
  leftRef: RefObject<THREE.Group | null>;
  rightRef: RefObject<THREE.Group | null>;
}

export function Arms({ materials, quality, leftRef, rightRef }: ArmsProps) {
  const segments = quality.weakDevice ? 24 : 32;

  return (
    <>
      <group ref={leftRef} position={[-1.08, 0.38, 0]} rotation={[0, 0, -0.58]}>
        <mesh position={[0, -0.52, 0]} scale={[1, 1, 0.65]} material={materials.shell}>
          <capsuleGeometry args={[0.26, 0.65, 8, segments]} />
        </mesh>
        <mesh position={[-0.2, -0.52, 0.18]} material={materials.orangeGlow}>
          <capsuleGeometry args={[0.02, 0.9, 6, segments]} />
        </mesh>
      </group>
      <group ref={rightRef} position={[1.08, 0.38, 0]} rotation={[0, 0, 0.58]}>
        <mesh position={[0, -0.52, 0]} scale={[1, 1, 0.65]} material={materials.shell}>
          <capsuleGeometry args={[0.26, 0.65, 8, segments]} />
        </mesh>
        <mesh position={[0.2, -0.52, 0.18]} material={materials.orangeGlow}>
          <capsuleGeometry args={[0.02, 0.9, 6, segments]} />
        </mesh>
      </group>
    </>
  );
}
