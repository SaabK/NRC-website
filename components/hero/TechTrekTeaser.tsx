"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TechTrekTeaser() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating Teaser HUD Card on Desktop / Hero Visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-20 mt-4 w-full max-w-md mx-auto lg:mx-0 backdrop-blur-md bg-[#080c18]/90 border border-[#E84F0E]/30 p-4 rounded-xl shadow-[0_8px_32px_rgba(232,79,14,0.15)] group hover:border-[#E84F0E]/70 transition-all duration-300"
      >
        {/* Glow ambient */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E84F0E]/20 to-transparent rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500 pointer-events-none" />

        <div className="relative">
          {/* Header Tag */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E84F0E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E84F0E]" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#E84F0E] uppercase font-semibold">
                Next Event Teaser
              </span>
            </div>
            <span className="font-mono text-[9px] tracking-wider text-[#9AA0B2] bg-white/5 px-2 py-0.5 rounded border border-white/10">
              28–29 NOV 2026
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="mb-2">
            <h3 className="font-display font-black text-xl text-white tracking-wide flex items-center gap-2">
              TECHTREK <span className="text-[#E84F0E] text-sm font-mono tracking-widest font-normal">[2026]</span>
            </h3>
            <p className="text-xs text-[#9AA0B2] line-clamp-2 mt-0.5">
              Hands-on 2-day Robotics & AI workshop & contest. Build line followers, Bluetooth RC cars & AI vision robotic arms.
            </p>
          </div>

          {/* Key tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#E84F0E]/10 border border-[#E84F0E]/20 text-[#E84F0E] rounded">
              3 Modules
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/80 rounded">
              YOLO AI Vision
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/80 rounded">
              Robotic Arm
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-white/80 rounded">
              Grades 8–12 & O/A Levels
            </span>
          </div>

          {/* Action row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10">
            <span className="font-mono text-[11px] text-[#9AA0B2]">
              Entry: <strong className="text-white font-semibold">Rs. 7,000</strong>
            </span>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 font-display text-[11px] tracking-wider text-white bg-[#E84F0E] hover:bg-[#FF6B2B] px-3.5 py-1.5 rounded-full shadow-[0_0_12px_rgba(232,79,14,0.3)] transition-all duration-200 active:scale-95"
            >
              DETAILS BRIEF
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* TechTrek Details Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#080c18] border border-[#E84F0E]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(232,79,14,0.2)] text-white z-10 max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="techtrek-title"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-[#9AA0B2] hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/10 transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-px bg-[#E84F0E]" aria-hidden="true" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
                  Upcoming Event Proposal // NRC NUST
                </span>
              </div>

              {/* Title & Dates */}
              <h2 id="techtrek-title" className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                TechTrek: <span className="text-[#E84F0E]">Robotics & AI Workshop</span>
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-[#9AA0B2]">
                <span className="bg-[#E84F0E]/15 text-[#E84F0E] px-2.5 py-1 rounded border border-[#E84F0E]/30">
                  Tentative: 28 &amp; 29 November 2026
                </span>
                <span>•</span>
                <span>Grades 8 to 12 &amp; O/A Levels</span>
                <span>•</span>
                <span className="text-white font-semibold">Entry: Rs. 7,000</span>
              </div>

              {/* Overview */}
              <p className="mt-4 text-sm text-[#9AA0B2] leading-relaxed">
                TechTrek is a premier hands-on robotics workshop and contest organized by the NUST Robotics Club.
                Over two intensive days, participants build real physical robots—from basic line-followers to an
                advanced AI-powered robotic arm—culminating in an exhilarating grand contest.
              </p>

              {/* 3 Modules Grid */}
              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#E84F0E] mb-3">
                  The Three Core Modules
                </h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-[#0b1020] border border-white/10 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-[#E84F0E] mb-1">MODULE 01</div>
                      <h5 className="font-display font-bold text-white text-sm mb-1.5">Line Following Robot</h5>
                      <p className="text-xs text-[#9AA0B2] leading-relaxed">
                        Design, assemble, and tune sensor calibration for an autonomous line-tracking robot.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 font-mono text-[10px] text-[#6B7285]">
                      Duration: 3 hrs (Day 1)
                    </div>
                  </div>

                  <div className="bg-[#0b1020] border border-white/10 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-[#E84F0E] mb-1">MODULE 02</div>
                      <h5 className="font-display font-bold text-white text-sm mb-1.5">RC Car</h5>
                      <p className="text-xs text-[#9AA0B2] leading-relaxed">
                        Construct Bluetooth-controlled mobile platforms with motor drivers and wireless communication.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 font-mono text-[10px] text-[#6B7285]">
                      Duration: 3 hrs (Day 2)
                    </div>
                  </div>

                  <div className="bg-[#0b1020] border border-[#E84F0E]/30 p-4 rounded-xl flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#E84F0E] text-black font-mono text-[8px] font-bold px-2 py-0.5 rounded-bl">
                      ADVANCED
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-[#E84F0E] mb-1">MODULE 03</div>
                      <h5 className="font-display font-bold text-white text-sm mb-1.5">Inverse Kinematics &amp; AI</h5>
                      <p className="text-xs text-[#9AA0B2] leading-relaxed">
                        AI vision with YOLO and camera feeds driving kinematic coordinates to control a robotic arm.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 font-mono text-[10px] text-[#6B7285]">
                      Duration: 2 Days (Split)
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Perks & Why Join */}
              <div className="mt-6 bg-[#060810] border border-white/10 p-4 rounded-xl">
                <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-2.5">
                  The TechTrek Experience
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2 bg-white/[0.03] rounded-lg">
                    <div className="text-lg mb-1">🤖</div>
                    <div className="font-display text-xs font-bold text-white">Build Real Robots</div>
                    <div className="text-[10px] text-[#6B7285] mt-0.5">Real hardware, not slides</div>
                  </div>
                  <div className="p-2 bg-white/[0.03] rounded-lg">
                    <div className="text-lg mb-1">🎬</div>
                    <div className="font-display text-xs font-bold text-white">Movie Session</div>
                    <div className="text-[10px] text-[#6B7285] mt-0.5">Community cinema night</div>
                  </div>
                  <div className="p-2 bg-white/[0.03] rounded-lg">
                    <div className="text-lg mb-1">🏛️</div>
                    <div className="font-display text-xs font-bold text-white">NUST Tour</div>
                    <div className="text-[10px] text-[#6B7285] mt-0.5">Labs &amp; campus showcase</div>
                  </div>
                  <div className="p-2 bg-white/[0.03] rounded-lg">
                    <div className="text-lg mb-1">🏆</div>
                    <div className="font-display text-xs font-bold text-white">The Contest</div>
                    <div className="text-[10px] text-[#6B7285] mt-0.5">Put builds to the test</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#9AA0B2] font-mono text-center sm:text-left">
                  Registration portals and sponsor prospectus opening soon. Stay tuned!
                </span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-full sm:w-auto font-display text-xs tracking-wider text-white bg-[#E84F0E] hover:bg-[#FF6B2B] px-6 py-2.5 rounded-full transition-colors"
                >
                  GOT IT
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
