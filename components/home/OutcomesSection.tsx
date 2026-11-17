import type { ReactNode } from "react";
import { techTrek } from "@/data/techtrek";
import { Reveal } from "@/components/home/Reveal";
import { HudCorners } from "@/components/home/ui/HudCorners";
import { SectionDivider } from "@/components/home/ui/SectionDivider";
import { Section } from "@/components/home/ui/Section";
import { SectionHeader } from "@/components/home/ui/SectionHeader";

const icons: Record<string, ReactNode> = {
  "Practical skills": <><path d="m14 7 3 3m-9 7 8-8a2.1 2.1 0 0 0-3-3l-8 8-1 4 4-1Z" /><path d="m4 5 2-2 3 3-2 2" /></>,
  "Problem-solving": <><path d="M8 3H5a2 2 0 0 0-2 2v3h3a2 2 0 0 1 0 4H3v4a2 2 0 0 0 2 2h3v-3a2 2 0 0 1 4 0v3h3a2 2 0 0 0 2-2v-3" /><path d="M13 3h4v4" /></>,
  "Peer network": <><circle cx="8" cy="8" r="2.5" /><circle cx="16" cy="8" r="2.5" /><path d="M3.5 18v-1a4.5 4.5 0 0 1 9 0v1m-1-3a4.5 4.5 0 0 1 8 3" /></>,
  "Expert access": <><path d="M4 5h16v11H9l-5 4V5Z" /><path d="M8 9h8m-8 3h5" /></>,
  "Path clarity": <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" /></>,
  Recognition: <><path d="M8 3h8v5a4 4 0 0 1-8 0V3Z" /><path d="M8 5H5v2a4 4 0 0 0 4 4m7-6h3v2a4 4 0 0 1-4 4m-3 0v4m-4 3h8m-7-3h6v3H9v-3Z" /></>,
};

export function OutcomesSection() {
  return (
    <>
      <Section id="outcomes" tone="darker" aria-labelledby="outcomes-heading">
        <Reveal>
          <div id="outcomes-heading">
            <SectionHeader eyebrow="Outcomes" title="What students gain" description="Practical skills and confidence to take into the next step." />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techTrek.benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.06}>
              <article className="hud-card group h-full overflow-hidden rounded-lg border border-steel-500/40 bg-navy-900 p-6">
                <HudCorners />
                <div className="flex items-center justify-between gap-4">
                  <div className="outcome-icon flex h-10 w-10 items-center justify-center rounded-md border border-steel-500/40 bg-navy-950 text-orange-nrc transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {icons[benefit.title]}
                    </svg>
                  </div>
                  <span className="font-mono text-sm text-steel-500">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="type-h3 mt-4 text-steel-100">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel-300">{benefit.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <SectionDivider />
    </>
  );
}
