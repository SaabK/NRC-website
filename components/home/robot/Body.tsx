import { useEffect, useMemo } from "react";
import * as THREE from "three";
import type { MascotMaterials, MascotQuality } from "@/components/home/robot/constants";

interface BodyProps {
  materials: MascotMaterials;
  quality: MascotQuality;
}

export function Body({ materials, quality }: BodyProps) {
  const geometry = useMemo(() => {
    const profile = [
      [0.025, -1.45], [0.08, -1.43], [0.16, -1.36], [0.28, -1.23],
      [0.43, -1.02], [0.58, -0.76], [0.72, -0.45], [0.85, -0.12],
      [0.96, 0.2], [1, 0.43], [0.96, 0.56], [0.84, 0.65],
      [0.62, 0.7], [0.3, 0.72], [0.025, 0.72],
    ].map(([radius, height]) => new THREE.Vector2(radius, height));
    const lathe = new THREE.LatheGeometry(profile, quality.segments);
    lathe.computeVertexNormals();
    return lathe;
  }, [quality.segments]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const logo = useMemo(() => {
    const makePolygon = (points: Array<[number, number]>) => {
      const shape = new THREE.Shape();
      points.forEach(([x, y], index) => {
        if (index === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      });
      shape.closePath();
      return new THREE.ShapeGeometry(shape);
    };
    return [
      makePolygon([[-0.17, -0.17], [-0.11, -0.17], [-0.11, 0.17], [-0.17, 0.17]]),
      makePolygon([[0.11, -0.17], [0.17, -0.17], [0.17, 0.17], [0.11, 0.17]]),
      makePolygon([[-0.11, 0.17], [-0.045, 0.17], [0.17, -0.17], [0.105, -0.17]]),
    ];
  }, []);

  const tipBand = useMemo(() => new THREE.LatheGeometry(
    [
      new THREE.Vector2(0.13, -1.43),
      new THREE.Vector2(0.17, -1.405),
      new THREE.Vector2(0.2, -1.365),
      new THREE.Vector2(0.19, -1.33),
    ],
    quality.weakDevice ? 32 : 48,
  ), [quality.weakDevice]);

  const tipTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Unable to create the mascot tip glow.");
    const gradient = context.createRadialGradient(64, 64, 2, 64, 64, 64);
    gradient.addColorStop(0, "rgba(255, 107, 43, 0.75)");
    gradient.addColorStop(1, "rgba(255, 107, 43, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const tipMaterial = useMemo(() => new THREE.SpriteMaterial({
    map: tipTexture,
    color: "#FF6B2B",
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    opacity: 0.45,
  }), [tipTexture]);

  useEffect(() => () => {
    tipBand.dispose();
  }, [tipBand]);

  useEffect(() => () => {
    logo.forEach((shape) => shape.dispose());
    tipTexture.dispose();
    tipMaterial.dispose();
  }, [logo, tipMaterial, tipTexture]);

  return (
    <group>
      <mesh geometry={geometry} material={materials.shell} />
      <mesh position={[0, 0.76, 0]} material={materials.shell}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, quality.weakDevice ? 24 : 32]} />
      </mesh>
      {logo.map((shape, index) => (
        <mesh
          key={index}
          geometry={shape}
          position={[0, 0.08, 0.99]}
          scale={[0.5, 0.55, 1]}
          material={materials.orangeGlow}
        />
      ))}
      <mesh geometry={tipBand} material={materials.orangeGlow} />
      <sprite position={[0, -1.35, 0]} scale={[0.9, 0.8, 1]} material={tipMaterial} />
    </group>
  );
}
