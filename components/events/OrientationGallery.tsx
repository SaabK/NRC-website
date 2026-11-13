"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHOTO_COUNT = 16;
const PHOTOS = Array.from({ length: PHOTO_COUNT }, (_, i) => ({
  index: i + 1,
  orientation: [1, 2, 4, 5, 9, 12].includes(i + 1) ? "portrait" : "landscape",
}));

export function OrientationGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => ((prev! + 1) % PHOTO_COUNT));
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + PHOTO_COUNT) % PHOTO_COUNT);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <div>
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: "12px" }}>
        {PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className="group relative rounded-xl overflow-hidden bg-[#080c18] border border-white/10 hover:border-[#E84F0E] cursor-pointer transition-all duration-300"
            style={{ aspectRatio: photo.orientation === "portrait" ? "3/4" : "4/3" }}
            onClick={() => setSelectedIndex(index)}
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#080c18] group-hover:bg-[#0d1428] transition-colors duration-300">
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(232,79,14,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,79,14,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              {/* Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#3D4358] group-hover:text-[#E84F0E]/50 transition-colors duration-300 mb-2"
                style={{ flexShrink: 0 }}
              >
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                className="font-mono text-[#3D4358] group-hover:text-[#6B7285] transition-colors duration-300"
                style={{ fontSize: "9px", letterSpacing: "0.15em" }}
              >
                PHOTO {String(photo.index).padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg" style={{ padding: "16px" }}>
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setSelectedIndex(null)} aria-hidden="true" />

            {/* Lightbox Container */}
            <div className="relative z-10 w-full flex flex-col items-center" style={{ maxWidth: "900px", maxHeight: "95vh" }}>
              {/* Top Controls */}
              <div className="w-full flex items-center justify-between font-mono text-xs" style={{ paddingBottom: "12px" }}>
                <span className="text-[#9AA0B2]">
                  Photo <strong className="text-white">{selectedIndex + 1}</strong> of {PHOTO_COUNT}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="bg-white/10 hover:bg-[#E84F0E] text-white rounded-full transition-colors"
                  style={{ padding: "8px" }}
                  aria-label="Close lightbox"
                >
                  ✕
                </button>
              </div>

              {/* Placeholder Image Area */}
              <div
                className="relative w-full flex items-center justify-center rounded-xl border border-white/10 bg-[#080c18]"
                style={{ height: "70vh" }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(232,79,14,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,79,14,0.5) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-[#3D4358]">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                    <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-[#3D4358]" style={{ fontSize: "11px", letterSpacing: "0.2em" }}>
                    PHOTO {String(selectedIndex + 1).padStart(2, "0")} — PLACEHOLDER
                  </span>
                </div>

                {/* Prev Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/60 hover:bg-[#E84F0E] text-white rounded-full border border-white/20 transition-all backdrop-blur-md"
                  style={{ padding: "12px" }}
                  aria-label="Previous photo"
                >
                  ◀
                </button>

                {/* Next Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/60 hover:bg-[#E84F0E] text-white rounded-full border border-white/20 transition-all backdrop-blur-md"
                  style={{ padding: "12px" }}
                  aria-label="Next photo"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
