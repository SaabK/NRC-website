"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Mascot } from "@/components/home/robot/Mascot";
import type { MascotQuality, PointerState } from "@/components/home/robot/constants";
import { MascotFallback } from "@/components/home/robot/MascotFallback";

interface RobotSceneProps {
  reducedMotion?: boolean;
  frameloop?: "always" | "never";
  quality: MascotQuality;
}

export default function RobotScene({ reducedMotion = false, frameloop = "always", quality }: RobotSceneProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<PointerState>({ x: 0, y: 0, active: false, lastMoveAt: 0 });
  const scrollProgress = useRef(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const hoverPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      pointerRef.current.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerRef.current.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      pointerRef.current.active = true;
      pointerRef.current.lastMoveAt = performance.now();
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    if (hoverPointer) {
      host.addEventListener("pointermove", handlePointerMove, { passive: true });
      host.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    }

    return () => {
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const heroHeight = document.getElementById("hero")?.offsetHeight || window.innerHeight;
        scrollProgress.current = Math.max(0, Math.min(1, window.scrollY / heroHeight));
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0 touch-pan-y">
      <Canvas
        className="!absolute inset-0"
        camera={{ position: [0, 0.1, 7.3], fov: 35 }}
        dpr={quality.weakDevice ? 1 : [1, 1.75]}
        frameloop={frameloop}
        fallback={<MascotFallback />}
        gl={{ antialias: !quality.weakDevice, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => gl.setClearColor("#080c18", 0)}
      >
        <Suspense fallback={null}>
          <Environment resolution={128} frames={1}>
            <Lightformer form="rect" color="#DCEAFF" intensity={0.8} position={[0, 4, -1]} scale={[5, 2, 1]} />
            <Lightformer form="rect" color="#E84F0E" intensity={3} position={[-4, 1, -2]} scale={[0.7, 4, 1]} />
            <Lightformer form="rect" color="#E84F0E" intensity={3} position={[4, 1, -2]} scale={[0.7, 4, 1]} />
            <Lightformer form="rect" color="#15264A" intensity={0.25} position={[0, -4, -1]} scale={[5, 1, 1]} />
          </Environment>
          <directionalLight position={[0, 3, 4]} intensity={0.5} color="#ffffff" />
          <pointLight position={[-3, 0.2, -3]} intensity={20} distance={8} color="#E84F0E" />
          <pointLight position={[3, 0.2, -3]} intensity={20} distance={8} color="#E84F0E" />
          <Mascot pointerRef={pointerRef} scrollProgress={scrollProgress} reducedMotion={reducedMotion} quality={quality} />
        </Suspense>
      </Canvas>
    </div>
  );
}
