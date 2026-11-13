import type { Metadata } from "next";
import Link from "next/link";
import { OrientationGallery } from "@/components/events/OrientationGallery";

export const metadata: Metadata = {
  title: "NRC Orientation '26 | NUST Robotics Club",
  description:
    "Orientation '26 at NUST. Induction ceremony, executive address, season roadmap, and photo gallery.",
};

export default function OrientationPage() {
  return (
    <main
      className="min-h-screen bg-[#060810] text-white selection:bg-[#E84F0E] selection:text-white"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-grid opacity-[0.25] pointer-events-none" aria-hidden="true" />
      <div
        className="fixed top-0 right-0 w-[55vw] h-[65vh] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 80% 20%, rgba(232,79,14,0.12) 0%, rgba(193,18,31,0.04) 50%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto" style={{ padding: "0 48px" }}>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-[#9AA0B2]" style={{ fontSize: "0.75rem", marginBottom: "56px", paddingTop: "16px" }}>
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/events" className="hover:text-white transition-colors">EVENTS</Link>
          <span>/</span>
          <span className="text-[#E84F0E]">ORIENTATION &apos;26</span>
        </div>

        {/* Hero Header */}
        <div style={{ maxWidth: "900px", marginBottom: "72px" }}>
          <div
            className="inline-flex items-center gap-2 bg-[#E84F0E]/10 border border-[#E84F0E]/30 rounded-full"
            style={{ marginBottom: "32px", padding: "8px 16px" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#E84F0E] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#E84F0E] uppercase font-semibold">
              Event Archive // Fall &apos;26 Induction
            </span>
          </div>

          <h1
            className="font-display font-black text-white tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", lineHeight: 1.05, marginBottom: "48px" }}
          >
            NRC ORIENTATION <span className="text-[#E84F0E]">&apos;26</span>
          </h1>

          {/* Telemetry Strip */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 font-mono text-[#9AA0B2] border-y border-white/10"
            style={{ gap: "32px", paddingTop: "28px", paddingBottom: "28px" }}
          >
            {[
              { label: "TIMEFRAME", value: "October 2026", accent: false },
              { label: "VENUE", value: "NUST H-12, Islamabad", accent: false },
              { label: "ATTENDEES", value: "100+ Students", accent: false },
              { label: "STATUS", value: "COMPLETED", accent: true },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-[#6B7285] block uppercase" style={{ fontSize: "10px", letterSpacing: "0.1em", marginBottom: "10px" }}>
                  {item.label}
                </span>
                {item.accent ? (
                  <span className="font-bold text-[#E84F0E]" style={{ fontSize: "0.9375rem" }}>{item.value}</span>
                ) : (
                  <strong className="text-white" style={{ fontSize: "0.9375rem" }}>{item.value}</strong>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Section */}
        <div
          className="bg-[#080c18] border border-[rgba(232,79,14,0.25)] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          style={{ padding: "56px", marginBottom: "80px" }}
        >
          <h2
            className="font-mono text-[#E84F0E] uppercase font-semibold"
            style={{ fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "28px" }}
          >
            [ ORIENTATION BRIEFING ]
          </h2>
          <div style={{ maxWidth: "800px" }}>
            <p className="text-[#9AA0B2]" style={{ fontSize: "1rem", lineHeight: 1.9, marginBottom: "20px" }}>
              The 2026 cohort gathered at the central auditorium for the official NUST Robotics Club Orientation. The Executive Council took the stage to welcome the incoming students, introducing the society&apos;s history, past competition successes, and vision for the academic year ahead.
            </p>
            <p className="text-[#9AA0B2]" style={{ fontSize: "1rem", lineHeight: 1.9 }}>
              Members of the council shared insights into what it takes to build competitive robotics projects, emphasizing our culture of hands-on learning, documentation, and technical teamwork.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ gap: "24px", marginBottom: "80px" }}
        >
          {[
            { value: "100+", label: "Attendees", sub: "Incoming cohort students" },
            { value: "Fall '26", label: "Orientation", sub: "Official society induction" },
            { value: "100%", label: "Student-Run", sub: "Peer mentorship & learning" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#080c18] border border-white/10 rounded-xl hover:border-[#E84F0E]/40 transition-colors"
              style={{ padding: "40px 36px" }}
            >
              <div className="font-display font-black text-white" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div className="font-mono text-[#E84F0E] uppercase font-semibold" style={{ fontSize: "10px", letterSpacing: "0.15em", marginTop: "16px" }}>
                {stat.label}
              </div>
              <div className="font-mono text-[#6B7285]" style={{ fontSize: "0.75rem", marginTop: "8px" }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Session Highlights */}
        <div style={{ marginBottom: "80px" }}>
          <div className="flex items-center gap-3" style={{ marginBottom: "40px" }}>
            <span className="w-8 h-px bg-[#E84F0E]" aria-hidden="true" />
            <h2 className="font-mono text-[#E84F0E] uppercase font-semibold" style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}>
              Session Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3" style={{ gap: "24px" }}>
            {[
              { num: "01 // WELCOME", title: "Executive Address", body: "Opening remarks by the President detailing NRC's journey, competition history, and community culture at NUST." },
              { num: "02 // ROADMAP", title: "Season Roadmap", body: "An outline of the year's upcoming technical workshops, internal competitions, and Robocon preparations." },
              { num: "03 // INTERACTION", title: "Q&A Session", body: "An interactive session where attendees asked questions about society involvement, learning curves, and projects." },
            ].map((card) => (
              <div
                key={card.num}
                className="bg-[#080c18] border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                style={{ padding: "36px 32px" }}
              >
                <div className="font-mono text-[#E84F0E] font-semibold" style={{ fontSize: "0.75rem", marginBottom: "16px" }}>
                  {card.num}
                </div>
                <h3 className="font-display font-bold text-white" style={{ fontSize: "1.125rem", lineHeight: 1.2, marginBottom: "16px" }}>
                  {card.title}
                </h3>
                <p className="text-[#9AA0B2]" style={{ fontSize: "0.875rem", lineHeight: 1.8 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <section style={{ marginBottom: "80px" }} aria-labelledby="gallery-heading">
          <div style={{ marginBottom: "40px" }}>
            <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
              <span className="w-8 h-px bg-[#E84F0E]" aria-hidden="true" />
              <span className="font-mono text-[#E84F0E] uppercase font-semibold" style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                Event Gallery
              </span>
            </div>
            <h2 id="gallery-heading" className="font-display font-black text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              ORIENTATION &apos;26 PHOTOS
            </h2>
          </div>

          <OrientationGallery />
        </section>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between border-t border-white/10" style={{ paddingTop: "40px" }}>
          <Link
            href="/#recents"
            className="inline-flex items-center gap-2 font-display text-[#9AA0B2] hover:text-white transition-colors"
            style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
          >
            ← BACK TO RECENTS
          </Link>
          <Link
            href="/events"
            className="font-display text-[#9AA0B2] hover:text-white transition-colors"
            style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}
          >
            ALL EVENTS →
          </Link>
        </div>
      </div>
    </main>
  );
}
