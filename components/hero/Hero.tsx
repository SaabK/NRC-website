"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TechTrekModal } from "./TechTrekModal";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 30;
      const y = ((e.clientY - top) / height - 0.5) * 15;
      const visual = hero.querySelector<HTMLElement>(".hero-visual");
      if (visual) {
        visual.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
      }
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060810]"
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
        aria-label="Hero"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" aria-hidden="true" />

        {/* Orange radial glow — right side */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[65vw] h-[90vh] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 85% 50%, rgba(232,79,14,0.14) 0%, rgba(193,18,31,0.06) 45%, transparent 72%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full" style={{ padding: "0 40px" }}>
          <div className="grid lg:grid-cols-12 items-center" style={{ gap: "48px" }}>

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start justify-center min-w-0">

              {/* Event Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-2.5 bg-[#E84F0E]/10 border border-[#E84F0E]/30 rounded-full"
                style={{ marginBottom: "32px", padding: "10px 18px" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E84F0E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E84F0E]" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.25em] text-[#E84F0E] uppercase font-semibold">
                  Upcoming Workshop // Tentative: 28–29 Nov 2026
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display font-black tracking-tight"
                style={{ marginBottom: "28px" }}
              >
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 1.08, marginBottom: "8px" }}
                >
                  TECHTREK.
                </span>
                <span
                  className="block text-[#E84F0E]"
                  style={{
                    fontSize: "clamp(2rem, 4.2vw, 3.8rem)",
                    lineHeight: 1.08,
                    marginBottom: "8px",
                    textShadow: "0 0 50px rgba(232,79,14,0.35)",
                  }}
                >
                  ROBOTICS &amp; AI
                </span>
                <span
                  className="block text-transparent"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                    lineHeight: 1.08,
                    WebkitTextStroke: "1.2px rgba(240,242,245,0.35)",
                  }}
                >
                  WORKSHOP &amp; CONTEST
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#9AA0B2]"
                style={{ fontSize: "1.0625rem", lineHeight: 1.85, maxWidth: "50ch", marginBottom: "40px" }}
              >
                Over 2 days at NUST, build real robots—from your first line-follower to an AI-powered robotic arm—and put them to the test in the grand contest.
              </motion.p>

              {/* 3 Module Cards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="grid grid-cols-1 sm:grid-cols-3 w-full"
                style={{ gap: "16px", marginBottom: "36px" }}
              >
                {[
                  { num: "MODULE 01", name: "Line Follower", detail: "3 hrs • Day 1", highlight: false },
                  { num: "MODULE 02", name: "RC Car", detail: "Bluetooth • Day 2", highlight: false },
                  { num: "MODULE 03", name: "Inverse Kinematics", detail: "YOLO AI Vision + Arm", highlight: true },
                ].map((mod) => (
                  <div
                    key={mod.num}
                    className={`bg-[#080c18] rounded-xl transition-colors ${
                      mod.highlight
                        ? "border border-[#E84F0E]/30 hover:border-[#E84F0E]"
                        : "border border-white/10 hover:border-[#E84F0E]/40"
                    }`}
                    style={{ padding: "20px" }}
                  >
                    <div
                      className="font-mono text-[#E84F0E] uppercase font-semibold"
                      style={{ fontSize: "9px", letterSpacing: "0.1em", marginBottom: "10px" }}
                    >
                      {mod.num}
                    </div>
                    <div
                      className="font-display font-bold text-white"
                      style={{ fontSize: "0.9375rem", marginBottom: "8px" }}
                    >
                      {mod.name}
                    </div>
                    <div className="font-mono text-[#6B7285]" style={{ fontSize: "0.75rem" }}>
                      {mod.detail}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap items-center font-mono text-[#9AA0B2]"
                style={{ gap: "10px", marginBottom: "40px", fontSize: "0.75rem" }}
              >
                <span className="bg-white/5 border border-white/10 rounded text-white/90" style={{ padding: "8px 14px" }}>
                  Grades 8–12 &amp; O/A Levels
                </span>
                <span className="bg-white/5 border border-white/10 rounded text-white/90" style={{ padding: "8px 14px" }}>
                  Entry: <strong className="text-white">Rs. 7,000</strong>
                </span>
                <span className="bg-white/5 border border-white/10 rounded text-white/90" style={{ padding: "8px 14px" }}>
                  Movie Session &amp; NUST Tour
                </span>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
              >
                <button
                  onClick={() => setModalOpen(true)}
                  className="group inline-flex items-center gap-2.5 font-display font-bold text-white bg-[#E84F0E] hover:bg-[#FF6B2B] rounded-full shadow-[0_0_25px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                  style={{ fontSize: "0.875rem", letterSpacing: "0.15em", padding: "16px 32px" }}
                >
                  VIEW WORKSHOP BRIEF
                  <span aria-hidden="true" className="inline-block group-hover:translate-x-1.5 transition-transform duration-200">
                    →
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Right Column — Big NRC Logo */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                className="hero-visual relative flex items-center justify-center w-full max-w-[28rem] lg:max-w-[34rem] aspect-square transition-transform duration-700 ease-out"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Geometric backdrop rings */}
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  {[280, 360, 440].map((size, i) => (
                    <div
                      key={size}
                      className="absolute border border-[rgba(232,79,14,0.06)] rounded-full animate-pulse-glow"
                      style={{ width: size, height: size, animationDelay: `${i * 0.5}s` }}
                    />
                  ))}
                  <div className="absolute w-px h-36 bg-gradient-to-b from-transparent via-[rgba(232,79,14,0.25)] to-transparent" />
                  <div className="absolute h-px w-36 bg-gradient-to-r from-transparent via-[rgba(232,79,14,0.25)] to-transparent" />
                </div>

                {/* NRC Logo */}
                <div className="relative w-[85%] h-[85%]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(circle, rgba(232,79,14,0.08) 0%, transparent 70%)",
                      filter: "blur(25px)",
                    }}
                    aria-hidden="true"
                  />
                  <Image
                    src="/assets/nrc-logo.png"
                    alt="NRC — NUST Robotics Club"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>

                {/* Corner bracket ornaments */}
                {[
                  { pos: "top-4 left-4",    styles: { borderTop: "1px solid rgba(232,79,14,0.35)", borderLeft: "1px solid rgba(232,79,14,0.35)" } },
                  { pos: "top-4 right-4",   styles: { borderTop: "1px solid rgba(232,79,14,0.35)", borderRight: "1px solid rgba(232,79,14,0.35)" } },
                  { pos: "bottom-4 left-4", styles: { borderBottom: "1px solid rgba(232,79,14,0.35)", borderLeft: "1px solid rgba(232,79,14,0.35)" } },
                  { pos: "bottom-4 right-4",styles: { borderBottom: "1px solid rgba(232,79,14,0.35)", borderRight: "1px solid rgba(232,79,14,0.35)" } },
                ].map((ornament) => (
                  <div
                    key={ornament.pos}
                    className={`absolute ${ornament.pos} w-5 h-5`}
                    aria-hidden="true"
                    style={ornament.styles}
                  />
                ))}

                {/* System Label */}
                <div
                  className="absolute bottom-2 right-2 font-mono text-[#6B7285] bg-[#060810]/80 border border-[rgba(232,79,14,0.1)]"
                  aria-label="NRC System"
                  style={{ fontSize: "9px", letterSpacing: "0.3em", padding: "4px 8px" }}
                >
                  NRC — SYSTEM 01
                </div>
              </motion.div>
            </div>

          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            aria-hidden="true"
          >
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#6B7285]">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-[#E84F0E] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Workshop Details Modal */}
      <TechTrekModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}