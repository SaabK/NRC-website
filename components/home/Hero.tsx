import { techTrek } from "@/data/techtrek";
import { Countdown } from "@/components/home/Countdown";
import { RegisterButton } from "@/components/home/RegisterButton";
import { RobotStage } from "@/components/home/RobotStage";
import { Container } from "@/components/home/ui/Container";

function formatEventDate(startDate: string | null, endDate: string | null) {
  if (!startDate) return techTrek.dateAnnouncement;

  const formatter = new Intl.DateTimeFormat("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Karachi",
  });

  const start = formatter.format(new Date(startDate));
  return endDate ? `${start} – ${formatter.format(new Date(endDate))}` : start;
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy-950 lg:h-[100svh] lg:min-h-[640px]" aria-labelledby="hero-title">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-100" aria-hidden="true" />
      <Container className="relative !max-w-7xl grid grid-cols-1 items-center gap-8 pb-6 pt-24 md:gap-10 md:pb-8 md:pt-28 lg:h-full lg:grid-cols-2 lg:gap-12">
          <div className="hero-copy relative z-10 flex min-w-0 flex-col gap-4 lg:gap-5">
            <div className="flex items-center gap-2">
              <span className="status-dot motion-reduce:animate-none" aria-hidden="true" />
              <p className="type-label text-orange-nrc">NRC · NUST Robotics Club</p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 id="hero-title" className="hero-title type-h1 text-steel-100">{techTrek.title}</h1>
              <p className="font-display text-lg font-medium leading-tight text-steel-100 lg:text-xl">{techTrek.tagline}</p>
            </div>

            <p className="hero-intro max-w-prose text-sm leading-6 text-steel-300 sm:text-base">{techTrek.intro}</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel-300">
              <p><span className="type-label text-orange-nrc">Dates</span><span className="ml-2">{formatEventDate(techTrek.startDate, techTrek.endDate)}</span></p>
              <p><span className="type-label text-orange-nrc">Venue</span><span className="ml-2">{techTrek.venue}</span></p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <RegisterButton />
              <a href="#modules" className="text-link inline-flex h-11 items-center text-sm text-steel-300 transition-colors hover:text-steel-100">View modules</a>
            </div>

            <Countdown startDate={techTrek.startDate} endDate={techTrek.endDate} />
          </div>

          <div className="flex min-w-0 items-center justify-center lg:h-full">
            <RobotStage />
          </div>
      </Container>
    </section>
  );
}
