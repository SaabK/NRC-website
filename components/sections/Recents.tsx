"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Recents() {
  return (
    <section
      id="recents"
      className="relative bg-[#060810] overflow-hidden flex justify-center border-t border-[rgba(232,79,14,0.1)]"
      style={{ padding: "120px 0 140px" }}
      aria-labelledby="recents-heading"
    >
      {/* Anchor shim */}
      <div id="about" className="absolute -top-16 left-0 pointer-events-none" aria-hidden="true" />

      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/3 -translate-y-1/2 w-[50vw] h-[60vh] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 10% 50%, rgba(232,79,14,0.08) 0%, rgba(193,18,31,0.03) 50%, transparent 75%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full relative z-10" style={{ padding: "0 48px" }}>

        {/* Section Header */}
        <div style={{ marginBottom: "64px" }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
            <span className="w-8 h-px bg-[#E84F0E]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase font-semibold">
              Recent Activities &amp; Dispatches
            </span>
          </div>
          <h2
            id="recents-heading"
            className="font-display font-black text-white tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.05, marginBottom: "16px" }}
          >
            LATEST AT <span className="text-[#E84F0E]">NRC.</span>
          </h2>
          <p className="text-[#9AA0B2]" style={{ fontSize: "1.0625rem", lineHeight: 1.75, maxWidth: "48ch" }}>
            Cohort inductions, orientations, and society milestones.
          </p>
        </div>

        {/* Orientation '26 Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative bg-[#080c18] border border-[rgba(232,79,14,0.25)] hover:border-[#E84F0E]/60 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#E84F0E] via-[#FF6B2B] to-transparent" />

          <div
            className="grid lg:grid-cols-12 items-start"
            style={{ gap: "48px", padding: "56px 56px 64px" }}
          >
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: "28px" }}>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#E84F0E] bg-[#E84F0E]/10 border border-[#E84F0E]/30 px-3 py-1.5 rounded-full uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84F0E]" />
                  Fall &apos;26 Flagship
                </span>
                <span className="font-mono text-[10px] tracking-wider text-[#9AA0B2] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  Auditorium Induction
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display font-black text-white tracking-tight"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, marginBottom: "24px" }}
              >
                NRC ORIENTATION <span className="text-[#E84F0E]">&apos;26</span>
              </h3>

              {/* Description */}
              <div style={{ marginBottom: "40px" }}>
                <p className="text-[#9AA0B2]" style={{ fontSize: "1rem", lineHeight: 1.9, marginBottom: "16px" }}>
                  The 2026 cohort gathered at NUST for the official NRC Orientation. The Executive Council took the stage to introduce incoming students to the club&apos;s history, past competition achievements, and our roadmap for the upcoming year.
                </p>
                <p className="text-[#6B7285] hidden sm:block" style={{ fontSize: "0.9375rem", lineHeight: 1.85 }}>
                  Attendees learned about society culture, expectations for future technical projects, and how new members will collaborate on national robotics competitions.
                </p>
              </div>

              {/* Stats Row */}
              <div
                className="grid grid-cols-3 border-y border-white/10"
                style={{ gap: "32px", paddingTop: "28px", paddingBottom: "28px", marginBottom: "44px" }}
              >
                <div>
                  <div className="font-display font-black text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1 }}>100+</div>
                  <div className="font-mono uppercase text-[#E84F0E]" style={{ fontSize: "10px", letterSpacing: "0.15em", marginTop: "10px" }}>Attendees</div>
                </div>
                <div>
                  <div className="font-display font-black text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1 }}>Fall &apos;26</div>
                  <div className="font-mono uppercase text-[#E84F0E]" style={{ fontSize: "10px", letterSpacing: "0.15em", marginTop: "10px" }}>Cohort Induction</div>
                </div>
                <div>
                  <div className="font-display font-black text-white whitespace-nowrap" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)", lineHeight: 1 }}>NUST H-12</div>
                  <div className="font-mono uppercase text-[#E84F0E]" style={{ fontSize: "10px", letterSpacing: "0.15em", marginTop: "10px" }}>Auditorium</div>
                </div>
              </div>

              {/* CTA */}
              <div>
                <Link
                  href="/events/orientation-26"
                  className="inline-flex items-center gap-3 font-display font-bold text-white bg-[#E84F0E] hover:bg-[#FF6B2B] rounded-full hover:shadow-[0_0_25px_rgba(232,79,14,0.5)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.15em", padding: "16px 32px" }}
                >
                  EXPLORE ORIENTATION &apos;26 GALLERY &amp; DETAILS
                  <span aria-hidden="true" className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Photo Preview */}
            <div className="lg:col-span-5 relative">
              {/* Main photo placeholder */}
              <Link
                href="/events/orientation-26"
                className="block relative rounded-xl overflow-hidden border border-[rgba(232,79,14,0.3)] hover:border-[#E84F0E] transition-all duration-300"
                aria-label="View Orientation 2026 page and photo gallery"
              >
                <div
                  className="relative w-full bg-[#080c18] flex flex-col items-center justify-center overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Grid texture */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(232,79,14,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,79,14,0.5) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[#3D4358] mb-2 relative z-10">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                    <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-[#3D4358] relative z-10" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>
                    PHOTO PLACEHOLDER
                  </span>

                  <div className="absolute top-3 left-3 bg-[#060810]/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded font-mono text-[10px] text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E84F0E]" />
                    ORIENTATION &apos;26 DISPATCH
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90 bg-[#060810]/85 backdrop-blur-md px-3.5 py-2 rounded border border-white/10">
                    <span>Click to view photos &amp; details</span>
                    <span className="text-[#E84F0E] font-bold">OPEN →</span>
                  </div>
                </div>
              </Link>

              {/* Thumbnail placeholders */}
              <div className="grid grid-cols-3" style={{ gap: "10px", marginTop: "10px" }}>
                {[1, 2, 3].map((n) => (
                  <Link
                    key={n}
                    href="/events/orientation-26"
                    className="relative rounded-lg overflow-hidden border border-white/10 hover:border-[#E84F0E] transition-colors flex items-center justify-center bg-[#080c18]"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(232,79,14,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,79,14,0.5) 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#3D4358] relative z-10">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                      <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
