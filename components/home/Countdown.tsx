"use client";

import { useEffect, useState } from "react";
import { techTrek } from "@/data/techtrek";

interface CountdownProps {
  startDate: string | null;
  endDate: string | null;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const emptyTime: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getTimeLeft(startDate: string, now: number): TimeLeft {
  const seconds = Math.max(0, Math.floor((new Date(startDate).getTime() - now) / 1000));
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export function Countdown({ startDate, endDate }: CountdownProps) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (!startDate) {
    return <p className="font-mono text-sm text-steel-300">{techTrek.dateAnnouncement}</p>;
  }

  const start = new Date(startDate).getTime();
  const end = endDate ? new Date(endDate).getTime() : null;
  const phase = now === null || now < start
    ? "countdown"
    : end !== null && now <= end
      ? "live"
      : "finished";

  if (phase === "live") return <p className="font-mono text-sm text-orange-nrc">TechTrek is live</p>;
  if (phase === "finished") return <p className="font-mono text-sm text-steel-300">TechTrek 2026 has concluded</p>;

  const values = now === null ? emptyTime : getTimeLeft(startDate, now);
  const units: Array<{ label: string; value: number }> = [
    { label: "Days", value: values.days },
    { label: "Hours", value: values.hours },
    { label: "Minutes", value: values.minutes },
    { label: "Seconds", value: values.seconds },
  ];

  return (
    <div>
      <p className="sr-only">Starts on {new Intl.DateTimeFormat("en-PK", { dateStyle: "long", timeZone: "Asia/Karachi" }).format(new Date(startDate))}.</p>
      <div className="grid max-w-md grid-cols-4 gap-3" aria-live="off">
        {units.map(({ label, value }) => (
          <div key={label} className="relative min-w-0 overflow-hidden rounded-lg border border-steel-500/40 bg-navy-900 py-4 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-steel-500/30" aria-hidden="true" />
            <div className="countdown-value relative font-mono text-3xl tabular-nums text-steel-100">{now === null ? "—" : String(value).padStart(2, "0")}</div>
            <div className="type-label mt-1 text-orange-nrc">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
