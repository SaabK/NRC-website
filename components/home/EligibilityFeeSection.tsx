import { techTrek } from "@/data/techtrek";
import { RegisterButton } from "@/components/home/RegisterButton";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Reveal } from "@/components/home/Reveal";
import { HudCorners } from "@/components/home/ui/HudCorners";
import { Section } from "@/components/home/ui/Section";

export function EligibilityFeeSection() {
  return (
    <Section id="fee" tone="darker" aria-labelledby="fee-heading">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <Reveal><SectionHeading id="fee-heading" {...techTrek.sectionCopy.fee} /></Reveal>
          <ul className="mt-4 space-y-3 text-sm text-steel-300">
            {techTrek.eligibility.map((item) => <li key={item} className="border-b border-steel-500/30 pb-3">{item}</li>)}
          </ul>
        </div>

        <Reveal>
          <article className="hud-card group overflow-hidden rounded-lg border border-steel-500/40 bg-navy-900 p-8">
            <HudCorners />
            <p className="type-label text-orange-nrc">Entry fee</p>
            <h3 className="mt-3 font-display text-4xl font-bold text-steel-100">Rs. {techTrek.fee.toLocaleString("en-PK")} <span className="text-lg font-normal text-steel-300">per student</span></h3>
            <h4 className="mt-7 font-display text-lg font-semibold text-steel-100">Included</h4>
            <ul className="mt-4 space-y-3 text-sm text-steel-300">
              {techTrek.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-orange-nrc" aria-hidden="true">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <RegisterButton />
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
