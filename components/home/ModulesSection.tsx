import { techTrek } from "@/data/techtrek";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Reveal } from "@/components/home/Reveal";
import { HudCorners } from "@/components/home/ui/HudCorners";
import { Section } from "@/components/home/ui/Section";

export function ModulesSection() {
  return (
    <Section id="modules" tone="darker" aria-labelledby="modules-heading">
      <Reveal><SectionHeading id="modules-heading" {...techTrek.sectionCopy.modules} /></Reveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {techTrek.modules.map((module, index) => (
          <Reveal key={module.number} delay={index * 0.06}>
          <article className="hud-card group flex h-full flex-col gap-4 overflow-hidden rounded-lg border border-steel-500/40 bg-navy-950 p-6">
            <HudCorners />
            <span className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-orange-nrc transition-transform duration-300 motion-safe:group-hover:scale-x-100" aria-hidden="true" />
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-sm text-steel-400">{String(module.number).padStart(2, "0")}</span>
              {module.track ? <span className="type-label text-orange-nrc">{module.track}</span> : null}
            </div>
            <h3 className="type-h3 min-h-[3.25rem] text-steel-100">{module.title}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-steel-400">{module.day} · {module.duration}</p>
            <p className="text-sm leading-6 text-steel-300">{module.description}</p>
            <details className="mt-auto border-t border-steel-500/40 pt-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm text-steel-100">
                <span>Expected outcomes</span>
                <svg className="details-chevron h-4 w-4 shrink-0 text-orange-nrc" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3 6 5 5 5-5" stroke="currentColor" strokeWidth="1.5" /></svg>
              </summary>
              <div className="details-content">
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-steel-300">
                  {module.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </div>
            </details>
          </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3">
        {techTrek.experiences.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="hud-card group h-full rounded-lg border border-steel-500/40 bg-navy-950 p-6">
              <HudCorners />
              <h3 className="type-h3 text-steel-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-steel-300">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
