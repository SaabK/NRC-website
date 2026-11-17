import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/home/ui/Container";

const footerLinks = [
  { label: "Modules", href: "/#modules" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Fee", href: "/#fee" },
  { label: "Contact", href: "/#contact" },
  { label: "Events", href: "/events" },
];

export function Footer() {
  return (
    <footer className="border-t border-steel-500/40 bg-navy-950" role="contentinfo">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="NUST Robotics Club home">
              <Image src="/assets/nrc-logo.png" alt="NUST Robotics Club" width={56} height={36} className="h-8 w-12 object-contain" />
              <span className="font-display text-base font-semibold text-steel-100">NRC</span>
            </Link>
            <a href={`mailto:${siteConfig.contact[0].email}`} className="mt-3 block text-sm text-steel-400 transition-colors hover:text-steel-100">{siteConfig.contact[0].email}</a>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-steel-400" role="list">
              {footerLinks.map((link) => <li key={link.label}><Link href={link.href} className="text-link transition-colors hover:text-steel-100">{link.label}</Link></li>)}
            </ul>
          </nav>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-steel-400" aria-label="Social media">
            {siteConfig.social.map((social) => <li key={social.platform}><a href={social.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-steel-100">{social.platform}</a></li>)}
          </ul>
        </div>
        <div className="mt-12 border-t border-steel-500/40 pt-6 text-sm text-steel-400">
          © {new Date().getFullYear()} NUST Robotics Club
        </div>
      </Container>
    </footer>
  );
}
