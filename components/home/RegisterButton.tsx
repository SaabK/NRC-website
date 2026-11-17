import { techTrek } from "@/data/techtrek";

interface RegisterButtonProps {
  secondary?: boolean;
}

export function RegisterButton({ secondary = false }: RegisterButtonProps) {
  return (
    <a
      href={techTrek.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={secondary
        ? "tech-button group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-steel-500/50 px-6 text-steel-100 transition-colors hover:border-orange-nrc hover:text-steel-100"
        : "tech-button group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-orange-nrc px-6 text-steel-100 transition-colors motion-safe:transition-transform hover:bg-orange-light motion-safe:hover:-translate-y-0.5"}
    >
      Register <span className="button-arrow" aria-hidden="true">→</span>
    </a>
  );
}
