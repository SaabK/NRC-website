import { siteConfig } from "@/data/site";
import { techTrek } from "@/data/techtrek";
import { RegisterButton } from "@/components/home/RegisterButton";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Reveal } from "@/components/home/Reveal";
import { Section } from "@/components/home/ui/Section";

export function ContactSection() {
  return (
    <Section id="contact" tone="dark" aria-labelledby="contact-heading">
      <Reveal><SectionHeading id="contact-heading" {...techTrek.sectionCopy.contact} /></Reveal>
      <Reveal>
        <div className="max-w-2xl">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="type-h3 text-steel-100">Questions?</h3>
              <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-sm text-steel-300">
                <a className="text-link hover:text-steel-100" href={`mailto:${techTrek.contact.email}`}>{techTrek.contact.email}</a>
                <a className="text-link hover:text-steel-100" href={`tel:${techTrek.contact.phone.replaceAll(" ", "")}`}>{techTrek.contact.phone}</a>
              </div>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-steel-400">
                {siteConfig.social.map((social) => <li key={social.platform}><a className="text-link hover:text-steel-100" href={social.url} target="_blank" rel="noopener noreferrer">{social.platform}</a></li>)}
              </ul>
            </div>

            <RegisterButton />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
