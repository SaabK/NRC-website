import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description: "NRC competitions, workshops, and flagship events.",
};

export default function EventsPage() {
  return (
    <div
      className="min-h-screen bg-[#060810] flex justify-center selection:bg-[#E84F0E] selection:text-white"
      style={{ paddingTop: "160px", paddingBottom: "160px" }}
    >
      <div className="max-w-[1100px] mx-auto w-full" style={{ padding: "0 48px" }}>

        {/* Page Header */}
        <div style={{ marginBottom: "96px" }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "24px" }}>
            <span className="w-8 h-px bg-[#E84F0E]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase font-semibold">
              Society Events
            </span>
          </div>
          <h1
            className="font-display font-black text-white tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.6rem)", lineHeight: 1.1, marginBottom: "20px" }}
          >
            WHAT WE <span className="text-[#E84F0E]">BUILD FOR.</span>
          </h1>
          <p className="text-[#9AA0B2]" style={{ fontSize: "1.0625rem", lineHeight: 1.8, maxWidth: "55ch" }}>
            From Asia&apos;s premier robotics competitions to hands-on workshops and cohort inductions.
          </p>
        </div>

        {/* Event Cards */}
        <div className="flex flex-col" style={{ gap: "48px" }}>

          {/* ─── 1. TechTrek ─── */}
          <div
            className="bg-[#080c18] border border-[#E84F0E]/40 rounded-2xl shadow-[0_8px_32px_rgba(232,79,14,0.12)] relative overflow-hidden"
            style={{ padding: "56px 56px 64px" }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#E84F0E]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between" style={{ gap: "40px" }}>
              <div style={{ maxWidth: "640px" }}>
                {/* Badges */}
                <div className="flex flex-wrap items-center" style={{ gap: "12px", marginBottom: "28px" }}>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#E84F0E] bg-[#E84F0E]/15 border border-[#E84F0E]/30 rounded-full uppercase font-semibold" style={{ padding: "6px 14px" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E84F0E] animate-pulse" />
                    UPCOMING WORKSHOP // TENTATIVE: 28–29 NOV 2026
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-[#9AA0B2] bg-white/5 border border-white/10 rounded-full" style={{ padding: "6px 12px" }}>
                    Grades 8–12 &amp; O/A Levels
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-display font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15, marginBottom: "20px" }}
                >
                  TechTrek: <span className="text-[#E84F0E]">Robotics &amp; AI Workshop</span>
                </h2>

                {/* Body */}
                <p className="text-[#9AA0B2]" style={{ fontSize: "0.9375rem", lineHeight: 1.85, marginBottom: "32px" }}>
                  A 2-day hands-on workshop &amp; contest. Build real robots across three modules: Autonomous Line Follower, Bluetooth RC Car, and Inverse Kinematics with YOLO AI Vision &amp; Robotic Arm.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center font-mono text-[#9AA0B2]" style={{ gap: "10px", fontSize: "0.75rem" }}>
                  {["3 Modules", "Entry: Rs. 7,000", "Movie & Campus Tour", "Grand Contest"].map((tag) => (
                    <span key={tag} className="bg-white/5 border border-white/10 rounded text-white/90" style={{ padding: "8px 14px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0">
                <span
                  className="inline-flex items-center gap-2 font-display font-bold text-[#E84F0E] bg-[#E84F0E]/10 border border-[#E84F0E]/30 rounded-full"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em", padding: "14px 28px" }}
                >
                  COMING SOON
                </span>
              </div>
            </div>
          </div>

          {/* ─── 2. Orientation '26 ─── */}
          <div
            className="bg-[#080c18] border border-white/10 hover:border-[#E84F0E]/40 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-colors"
            style={{ padding: "56px 56px 64px" }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between" style={{ gap: "40px" }}>
              <div style={{ maxWidth: "640px" }}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full font-mono text-[#9AA0B2]" style={{ fontSize: "10px", padding: "6px 14px", marginBottom: "28px" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E84F0E]" />
                  RECENT DISPATCH // COHORT 2026
                </div>

                {/* Title */}
                <h2
                  className="font-display font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15, marginBottom: "20px" }}
                >
                  NRC Orientation &apos;26
                </h2>

                {/* Body */}
                <p className="text-[#9AA0B2]" style={{ fontSize: "0.9375rem", lineHeight: 1.85 }}>
                  Explore the orientation session highlights, executive council address, season roadmap, and the photo gallery.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/events/orientation-26"
                  className="inline-flex items-center gap-2 font-display font-bold text-white bg-[#E84F0E] hover:bg-[#FF6B2B] rounded-full shadow-[0_0_15px_rgba(232,79,14,0.3)] transition-all"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em", padding: "14px 28px" }}
                >
                  VIEW ORIENTATION &apos;26 PAGE →
                </Link>
              </div>
            </div>
          </div>

          {/* ─── 3. NRC Robocon ─── */}
          <div
            className="bg-[#080c18] border border-white/10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
            style={{ padding: "56px 56px 64px" }}
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between" style={{ gap: "40px" }}>
              <div style={{ maxWidth: "640px" }}>
                {/* Badges */}
                <div className="flex flex-wrap items-center" style={{ gap: "12px", marginBottom: "28px" }}>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#E84F0E] bg-[#E84F0E]/10 border border-[#E84F0E]/30 rounded-full uppercase font-semibold" style={{ padding: "6px 14px" }}>
                    FLAGSHIP COMPETITION
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-[#9AA0B2] bg-white/5 border border-white/10 rounded-full" style={{ padding: "6px 12px" }}>
                    Coming February 27
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="font-display font-black text-white"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15, marginBottom: "20px" }}
                >
                  NRC Robocon
                </h2>

                {/* Body */}
                <p className="text-[#9AA0B2]" style={{ fontSize: "0.9375rem", lineHeight: 1.85 }}>
                  20+ modules engineering competition.
                </p>
              </div>

              <div className="flex-shrink-0">
                <span
                  className="font-mono text-[#6B7285] bg-white/5 border border-white/10 rounded-full"
                  style={{ fontSize: "0.75rem", padding: "14px 28px" }}
                >
                  COMING FEB &apos;27
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
