"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useState, type ErrorInfo, type ReactNode } from "react";
import type { MascotQuality } from "@/components/home/robot/constants";
import { MascotFallback } from "@/components/home/robot/MascotFallback";

const RobotScene = dynamic(() => import("@/components/home/robot/RobotScene"), {
  ssr: false,
  loading: () => <StageSkeleton />,
});

function StageSkeleton() {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full opacity-90">
        <MascotFallback />
      </div>
    </div>
  );
}

class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("The 3D mascot scene failed to render.", error, info.componentStack);
  }

  render() {
    return this.state.hasError ? <MascotFallback /> : this.props.children;
  }
}

export function RobotStage() {
  const [canRender, setCanRender] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [canUseWebGL, setCanUseWebGL] = useState(false);
  const [quality, setQuality] = useState<MascotQuality>({ weakDevice: true, segments: 32 });

  useEffect(() => {
    const canvas = document.createElement("canvas");
    let context: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    let webglFrame = 0;
    try {
      context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    } catch (error) {
      console.info("WebGL is unavailable; showing the static mascot.", error);
      return;
    }
    if (context) {
      context.getExtension("WEBGL_lose_context")?.loseContext();
      webglFrame = window.requestAnimationFrame(() => setCanUseWebGL(true));
    }

    const detectQuality = () => {
      const nav = navigator as Navigator & { deviceMemory?: number };
      const weakDevice =
        window.innerWidth < 768 ||
        navigator.hardwareConcurrency <= 4 ||
        (nav.deviceMemory !== undefined && nav.deviceMemory <= 4);
      setQuality({ weakDevice, segments: weakDevice ? 32 : 48 });
    };
    detectQuality();
    window.addEventListener("resize", detectQuality, { passive: true });

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => setReducedMotion(media.matches);
    updateReducedMotion();
    media.addEventListener("change", updateReducedMotion);
    return () => {
      window.cancelAnimationFrame(webglFrame);
      window.removeEventListener("resize", detectQuality);
      media.removeEventListener("change", updateReducedMotion);
    };
  }, []);

  useEffect(() => {
    const scheduleRender = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(() => setCanRender(true));
        return;
      }
      window.setTimeout(() => setCanRender(true), 200);
    };

    scheduleRender();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    const node = document.getElementById("hero-stage");
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const shouldRender = canRender && canUseWebGL && !reducedMotion;

  return (
    <div
      id="hero-stage"
      className="relative h-[340px] w-full sm:h-[420px] lg:h-[clamp(380px,72svh,640px)]"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(234,246,255,0.05),transparent_65%)]"
        aria-hidden="true"
      />
      {shouldRender ? (
        <SceneErrorBoundary>
          <RobotScene
            reducedMotion={reducedMotion}
            frameloop={isInView && isVisible && !reducedMotion ? "always" : "never"}
            quality={quality}
          />
        </SceneErrorBoundary>
      ) : (
        <StageSkeleton />
      )}
    </div>
  );
}