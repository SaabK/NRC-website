import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Arms } from "@/components/home/robot/Arms";
import { Body } from "@/components/home/robot/Body";
import { Head } from "@/components/home/robot/Head";
import { Orbit } from "@/components/home/robot/Orbit";
import { Shadow, type FloorRingMesh, type GlowMesh } from "@/components/home/robot/Shadow";
import { EYE_COLOR, type MascotMaterials, type MascotProps } from "@/components/home/robot/constants";

export function Mascot({ pointerRef, scrollProgress, reducedMotion, quality }: MascotProps) {
  const viewport = useThree((state) => state.viewport);
  const rootRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const faceRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);
  const mouthRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const glowRef = useRef<GlowMesh>(null);
  const ringRef = useRef<FloorRingMesh>(null);
  const contactRef = useRef<GlowMesh>(null);
  const nextBlinkAt = useRef(4.5);
  const elapsedTime = useRef(0);
  const orangeBaseColor = useMemo(() => new THREE.Color("#FF6B2B"), []);
  const fitScale = Math.min(viewport.height * 0.83 / 3.65, viewport.width * 0.98 / 3.72);

  const materials = useMemo<MascotMaterials>(() => ({
    shell: quality.weakDevice
      ? new THREE.MeshStandardMaterial({ color: "#0c0e16", metalness: 0.55, roughness: 0.32 })
      : new THREE.MeshPhysicalMaterial({
        color: "#0c0e16",
        metalness: 0.55,
        roughness: 0.32,
        clearcoat: 0.8,
        clearcoatRoughness: 0.25,
        envMapIntensity: 0.55,
      }),
    glass: new THREE.MeshStandardMaterial({ color: "#02040a", metalness: 0.2, roughness: 0.12 }),
    orangeGlow: new THREE.MeshBasicMaterial({ color: "#FF6B2B", toneMapped: false }),
    faceGlow: new THREE.MeshBasicMaterial({ color: EYE_COLOR, toneMapped: false }),
  }), [quality.weakDevice]);

  useEffect(() => () => Object.values(materials).forEach((material) => material.dispose()), [materials]);
  useEffect(() => {
    nextBlinkAt.current = 4 + Math.random() * 2;
  }, []);

  useFrame((state, delta) => {
    if (reducedMotion) return;
    elapsedTime.current += delta;
    const time = elapsedTime.current;
    const progress = THREE.MathUtils.clamp(scrollProgress.current, 0, 1);
    const pointer = pointerRef.current;
    const pointerActive = pointer.active && performance.now() - pointer.lastMoveAt < 2000;
    const pointerX = pointerActive ? THREE.MathUtils.clamp(pointer.x, -1, 1) : 0;
    const pointerY = pointerActive ? THREE.MathUtils.clamp(pointer.y, -1, 1) : 0;
    const intro = THREE.MathUtils.clamp(time / 0.9, 0, 1);
    const easeOut = 1 - Math.pow(1 - intro, 3);
    const bob = Math.sin(time * 1.1) * 0.09;
    materials.orangeGlow.color.copy(orangeBaseColor).multiplyScalar(0.96 + 0.04 * Math.sin(time * 1.5));

    if (rootRef.current) {
      rootRef.current.position.y = THREE.MathUtils.damp(rootRef.current.position.y, -0.35 - 0.4 * (1 - easeOut) + bob + progress * 1.1, 5, delta);
      rootRef.current.scale.setScalar(THREE.MathUtils.damp(rootRef.current.scale.x, fitScale * (0.85 + 0.15 * easeOut) * (1 - progress * 0.3), 5, delta));
      rootRef.current.rotation.x = THREE.MathUtils.damp(rootRef.current.rotation.x, progress * 0.25, 4, delta);
      rootRef.current.rotation.y = THREE.MathUtils.damp(rootRef.current.rotation.y, progress * Math.PI * 1.6 + Math.sin(time * 0.5) * 0.12, 3, delta);
      rootRef.current.rotation.z = THREE.MathUtils.damp(rootRef.current.rotation.z, Math.sin(time * 0.7) * 0.04, 3, delta);
    }

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.damp(headRef.current.rotation.y, Math.sin(time * 0.6 + 0.8) * 0.1 + pointerX * 0.35, 5, delta);
      headRef.current.rotation.x = THREE.MathUtils.damp(headRef.current.rotation.x, -pointerY * 0.2, 5, delta);
    }
    if (faceRef.current) {
      faceRef.current.position.x = THREE.MathUtils.damp(faceRef.current.position.x, pointerX * 0.06, 5, delta);
      faceRef.current.position.y = THREE.MathUtils.damp(faceRef.current.position.y, pointerY * 0.04, 5, delta);
    }

    let blink = 1;
    if (time >= nextBlinkAt.current) {
      const phase = (time - nextBlinkAt.current) / 0.16;
      if (phase < 0.5) blink = 1 - phase * 1.8;
      else if (phase < 1) blink = 0.1 + (phase - 0.5) * 1.8;
      else nextBlinkAt.current = time + 3.5 + Math.random() * 2.5;
    }
    if (eyesRef.current) eyesRef.current.scale.set(1 + progress * 0.2, blink * (1 + progress * 0.2), 1);
    if (mouthRef.current) mouthRef.current.scale.x = 1 + progress * 0.15;

    const armSwing = Math.sin(time * 1.3) * 0.12;
    if (leftArmRef.current) leftArmRef.current.rotation.z = THREE.MathUtils.damp(leftArmRef.current.rotation.z, -0.58 - armSwing - progress * 0.5, 4, delta);
    if (rightArmRef.current) rightArmRef.current.rotation.z = THREE.MathUtils.damp(rightArmRef.current.rotation.z, 0.58 + armSwing + progress * 0.5, 4, delta);

    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, 7.3 + progress * 1.2, 4, delta);
    state.camera.lookAt(0, 0.1, 0);

    if (glowRef.current) {
      const lift = Math.max(0, bob + progress * 1.1);
      const size = 1 - lift * 0.16;
      glowRef.current.scale.set(2.4 * size, 0.5 * size, 1);
      glowRef.current.material.opacity = THREE.MathUtils.damp(glowRef.current.material.opacity, 0.8 - lift * 0.3, 4, delta);
      if (ringRef.current) ringRef.current.scale.set(1.25 * size, 0.35 * size, 1);
    }
  });

  return (
    <group ref={rootRef}>
      <Orbit materials={materials} quality={quality} reducedMotion={reducedMotion} />
      <Body materials={materials} quality={quality} />
      <group ref={headRef} position={[0, 1.42, 0]}>
        <Head materials={materials} quality={quality} faceRef={faceRef} eyesRef={eyesRef} mouthRef={mouthRef} />
      </group>
      <Arms materials={materials} quality={quality} leftRef={leftArmRef} rightRef={rightArmRef} />
      <Shadow
        glowRef={glowRef}
        ringRef={ringRef}
        contactRef={contactRef}
        orangeMaterial={materials.orangeGlow}
        segments={quality.weakDevice ? 24 : 48}
      />
    </group>
  );
}
