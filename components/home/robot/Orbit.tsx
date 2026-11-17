import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MascotMaterials, MascotQuality } from "@/components/home/robot/constants";

interface OrbitProps {
  materials: MascotMaterials;
  quality: MascotQuality;
  reducedMotion: boolean;
}

const phases = [0.2, 2.35, 4.5];
const speeds = [0.13, 0.17, 0.11];

export function Orbit({ materials, quality, reducedMotion }: OrbitProps) {
  const dotsRef = useRef<Array<THREE.Mesh | null>>([]);
  const segments = quality.weakDevice ? 24 : 48;
  const ringGeometry = useMemo(() => new THREE.TorusGeometry(2.4, 0.006, 4, segments), [segments]);
  const ringMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: "#FF6B2B",
    transparent: true,
    opacity: 0.25,
    depthWrite: false,
    toneMapped: false,
  }), []);
  const dotGeometry = useMemo(
    () => new THREE.SphereGeometry(0.045, quality.weakDevice ? 12 : 16, quality.weakDevice ? 8 : 12),
    [quality.weakDevice],
  );

  useEffect(() => () => {
    ringGeometry.dispose();
    ringMaterial.dispose();
    dotGeometry.dispose();
  }, [dotGeometry, ringGeometry, ringMaterial]);

  useFrame(({ clock }) => {
    if (reducedMotion) return;
    const time = clock.elapsedTime;
    dotsRef.current.forEach((dot, index) => {
      if (!dot) return;
      const angle = time * speeds[index] + phases[index];
      dot.position.x = Math.cos(angle) * 2.4;
      dot.position.y = Math.sin(angle) * 2.4 * 1.15;
    });
  });

  return (
    <group position={[0, 0.5, -0.5]} rotation={[0, 0, 0.21]} scale={0.75}>
      <mesh geometry={ringGeometry} material={ringMaterial} renderOrder={-1} scale={[1, 1.15, 1]} />
      {phases.map((phase, index) => (
        <mesh
          key={phase}
          ref={(mesh) => { dotsRef.current[index] = mesh; }}
          geometry={dotGeometry}
          material={materials.orangeGlow}
          position={[Math.cos(phase) * 2.4, Math.sin(phase) * 2.4 * 1.15, 0]}
        />
      ))}
    </group>
  );
}
