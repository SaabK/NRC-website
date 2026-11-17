interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-2xl md:mb-12">
      <p className="type-label text-orange-nrc">{eyebrow}</p>
      <h2 className="type-h2 mt-3 text-steel-100">{title}</h2>
      {description ? <p className="type-body-lg mt-4 max-w-prose text-steel-300">{description}</p> : null}
    </div>
  );
}
