import type { RefObject } from "react";
import { RoundedBox } from "@react-three/drei";
import type * as THREE from "three";
import type { MascotMaterials, MascotQuality } from "@/components/home/robot/constants";

interface HeadProps {
  materials: MascotMaterials;
  quality: MascotQuality;
  faceRef: RefObject<THREE.Group | null>;
  eyesRef: RefObject<THREE.Group | null>;
  mouthRef: RefObject<THREE.Group | null>;
}

export function Head({ materials, quality, faceRef, eyesRef, mouthRef }: HeadProps) {
  const segments = quality.weakDevice ? 24 : 32;

  return (
    <group>
      <RoundedBox args={[2, 1.55, 1.25]} radius={0.55} smoothness={6} material={materials.shell} />
      <RoundedBox args={[1.65, 1.15, 0.2]} radius={0.38} smoothness={6} position={[0, 0, 0.62]} material={materials.glass} />
      <RoundedBox args={[0.55, 0.1, 0.38]} radius={0.05} smoothness={4} position={[0, 0.79, 0]} material={materials.shell} />
      <group ref={faceRef} position={[0, 0, 0.73]}>
        <group ref={eyesRef} position={[0, 0.14, 0]}>
          {[-0.38, 0.38].map((x) => (
            <mesh key={x} position={[x, 0, 0]}>
              <torusGeometry args={[0.17, 0.035, 8, segments, Math.PI]} />
              <primitive object={materials.faceGlow} attach="material" />
            </mesh>
          ))}
        </group>
        <group ref={mouthRef} position={[0, -0.22, 0]}>
          <mesh rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.22, 0.04, 8, segments, Math.PI]} />
            <primitive object={materials.faceGlow} attach="material" />
          </mesh>
        </group>
      </group>
      {[-1, 1].map((side) => (
        <group key={side}>
          <mesh position={[side * 1.04, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.shell}>
            <cylinderGeometry args={[0.42, 0.42, 0.22, segments]} />
          </mesh>
          <mesh position={[side * 1.12, 0, 0.08]} rotation={[0, side * 0.75, 0]} material={materials.orangeGlow}>
            <torusGeometry args={[0.42, 0.022, 8, segments]} />
          </mesh>
          <mesh position={[side * 1.13, 0, 0.08]} rotation={[0, side * 0.75, 0]} material={materials.glass}>
            <circleGeometry args={[0.31, segments]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
