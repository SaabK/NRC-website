import { SectionHeader } from "@/components/home/ui/SectionHeader";

export interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
    </div>
  );
}
