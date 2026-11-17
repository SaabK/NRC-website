import { techTrek } from "@/data/techtrek";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Reveal } from "@/components/home/Reveal";
import { Section } from "@/components/home/ui/Section";

export function ScheduleSection() {
  return (
    <Section id="schedule" tone="dark" aria-labelledby="schedule-heading">
      <Reveal><SectionHeading id="schedule-heading" {...techTrek.sectionCopy.schedule} /></Reveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {techTrek.schedule.map((day, index) => (
          <Reveal key={day.day} delay={index * 0.06}>
          <section key={day.day} aria-label={day.day} className="min-w-0">
            <h3 className="type-h3 border-b border-steel-500/40 pb-3 text-steel-100">{day.day}</h3>
            <ol className="mt-2">
              {day.items.map((item) => (
                <li key={`${day.day}-${item.time}`} className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-steel-500/40 py-4">
                  <time className="font-mono text-sm text-steel-400">{item.time}</time>
                  <span className="text-sm leading-6 text-steel-300">{item.activity}</span>
                </li>
              ))}
            </ol>
          </section>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-sm text-steel-400 md:mt-14">{techTrek.scheduleNote}</p>
    </Section>
  );
}
