"use client";

import { motion, AnimatePresence } from "framer-motion";

interface TechTrekModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TechTrekModal({ isOpen, onClose }: TechTrekModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#080c18] border border-[#E84F0E]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(232,79,14,0.25)] text-white z-10 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="techtrek-modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#9AA0B2] hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/10 transition-colors"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-px bg-[#E84F0E]" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
                Upcoming Workshop // NRC NUST
              </span>
            </div>

            {/* Title & Dates */}
            <h2 id="techtrek-modal-title" className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              TechTrek: <span className="text-[#E84F0E]">Robotics &amp; AI Workshop</span>
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-[#9AA0B2]">
              <span className="bg-[#E84F0E]/15 text-[#E84F0E] px-2.5 py-1 rounded border border-[#E84F0E]/30 font-semibold">
                Tentative: 28 &amp; 29 November 2026
              </span>
              <span>•</span>
              <span>Grades 8 to 12 &amp; O/A Levels</span>
              <span>•</span>
              <span className="text-white font-semibold">Entry Fee: Rs. 7,000</span>
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
                    <div className="font-mono text-[10px] text-[#E84F0E] mb-1 font-semibold">MODULE 01</div>
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
                    <div className="font-mono text-[10px] text-[#E84F0E] mb-1 font-semibold">MODULE 02</div>
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
                    <div className="font-mono text-[10px] text-[#E84F0E] mb-1 font-semibold">MODULE 03</div>
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

            {/* Experience Perks */}
            <div className="mt-6 bg-[#060810] border border-white/10 p-4 rounded-xl">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-2.5">
                The TechTrek Experience
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-2.5 bg-white/[0.03] rounded-lg">
                  <div className="text-xl mb-1">🤖</div>
                  <div className="font-display text-xs font-bold text-white">Build Real Robots</div>
                  <div className="text-[10px] text-[#6B7285] mt-0.5">Real hardware, not slides</div>
                </div>
                <div className="p-2.5 bg-white/[0.03] rounded-lg">
                  <div className="text-xl mb-1">🎬</div>
                  <div className="font-display text-xs font-bold text-white">Movie Session</div>
                  <div className="text-[10px] text-[#6B7285] mt-0.5">Community cinema night</div>
                </div>
                <div className="p-2.5 bg-white/[0.03] rounded-lg">
                  <div className="text-xl mb-1">🏛️</div>
                  <div className="font-display text-xs font-bold text-white">NUST Tour</div>
                  <div className="text-[10px] text-[#6B7285] mt-0.5">Labs &amp; campus showcase</div>
                </div>
                <div className="p-2.5 bg-white/[0.03] rounded-lg">
                  <div className="text-xl mb-1">🏆</div>
                  <div className="font-display text-xs font-bold text-white">The Contest</div>
                  <div className="text-[10px] text-[#6B7285] mt-0.5">Put builds to the test</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#9AA0B2] font-mono text-center sm:text-left">
                Registration details and participant guidelines will be announced soon.
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto font-display text-xs tracking-wider text-white bg-[#E84F0E] hover:bg-[#FF6B2B] px-6 py-2.5 rounded-full transition-colors font-bold"
              >
                GOT IT
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
