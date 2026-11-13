import { Hero } from "@/components/hero/Hero";
import { Recents } from "@/components/sections/Recents";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Recents />
      <Contact />
    </>
  );
}
