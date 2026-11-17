import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/home/ui/Container";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  tone: "dark" | "darker";
  children: ReactNode;
}

const toneClasses = {
  dark: "bg-navy-900",
  darker: "bg-navy-950",
};

export function Section({ id, tone, children, className = "", ...props }: SectionProps) {
  return <section id={id} className={`scroll-mt-20 py-14 md:py-20 ${toneClasses[tone]} ${className}`.trim()} {...props}>
    <Container>{children}</Container>
  </section>;
}
