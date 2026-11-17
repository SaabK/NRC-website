import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import { ContactSection } from "@/components/home/ContactSection";
import { EligibilityFeeSection } from "@/components/home/EligibilityFeeSection";
import { Hero } from "@/components/home/Hero";
import { ModulesSection } from "@/components/home/ModulesSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ScheduleSection } from "@/components/home/ScheduleSection";
import { SectionDivider } from "@/components/home/ui/SectionDivider";

export const metadata: Metadata = {
  title: "TechTrek 2026 | NUST Robotics Club",
  description: "Build real robots in a two-day, hands-on robotics workshop for school and college students at NUST.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NUST Robotics Club",
    title: "TechTrek 2026 | NUST Robotics Club",
    description: "Build real robots in a two-day, hands-on robotics workshop for school and college students at NUST.",
  },
  twitter: {
    card: "summary",
    title: "TechTrek 2026 | NUST Robotics Club",
    description: "Build real robots in a two-day, hands-on robotics workshop for school and college students at NUST.",
  },
};

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <Hero />
      <ModulesSection />
      <SectionDivider />
      <ScheduleSection />
      <SectionDivider />
      <EligibilityFeeSection />
      <SectionDivider />
      <OutcomesSection />
      <ContactSection />
    </MotionConfig>
  );
}
