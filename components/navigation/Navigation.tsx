"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { techTrek } from "@/data/techtrek";

const links = [
  { label: "Modules", href: "/#modules" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Fee", href: "/#fee" },
  { label: "Contact", href: "/#contact" },
  { label: "Events", href: "/events" },
];

function getLinkHash(href: string) {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? "" : href.slice(hashIndex + 1);
}

function isCurrentLink(href: string, pathname: string, activeHash: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex !== -1) {
    const linkPath = href.slice(0, hashIndex) || "/";
    return pathname === linkPath && activeHash === href.slice(hashIndex + 1);
  }
  return pathname === href || (href === "/events" && pathname.startsWith("/events/"));
}

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash.slice(1));
    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
      return () => { document.body.style.overflow = previousOverflow; };
    }
    if (wasOpenRef.current) toggleRef.current?.focus();
    wasOpenRef.current = false;
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    wasOpenRef.current = true;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 h-16 border-b transition-colors duration-200 md:h-20 ${scrolled || menuOpen ? "border-steel-500/40 bg-navy-950" : "border-transparent bg-transparent"}`}>
      <nav className="relative z-20 mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="NUST Robotics Club home">
          <Image
            src="/assets/nrc-logo.png"
            alt="NUST Robotics Club"
            width={256}
            height={160}
            quality={100}
            unoptimized
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
          <span className="hidden font-display text-sm uppercase tracking-[0.12em] text-steel-300 sm:block">NUST Robotics Club</span>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex" role="list">
          {links.map((link) => {
            const hash = getLinkHash(link.href);
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => { if (hash) setActiveHash(hash); }}
                  aria-current={isCurrentLink(link.href, pathname, activeHash) ? "page" : undefined}
                  className="nav-link inline-block font-display text-sm uppercase tracking-wider text-steel-300 transition-colors hover:text-steel-100"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a href={techTrek.registrationUrl} target="_blank" rel="noopener noreferrer" className="tech-button inline-flex h-11 items-center justify-center gap-2 rounded-md bg-orange-nrc px-6 text-steel-100 transition-colors motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 hover:bg-orange-light">
            Register <span aria-hidden="true">→</span>
          </a>
        </div>

        <button ref={toggleRef} type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel-500/50 text-steel-100 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          <span className="font-mono text-xs">{menuOpen ? "Close" : "Menu"}</span>
        </button>
      </nav>

      <div id="mobile-navigation" className={`fixed inset-0 z-10 bg-navy-950 px-6 pb-10 pt-24 lg:hidden ${menuOpen ? "flex flex-col" : "hidden"}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col" role="list">
            {links.map((link, index) => {
              const hash = getLinkHash(link.href);
              return (
                <li key={link.label} className="border-b border-steel-500/30">
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => {
                      if (hash) setActiveHash(hash);
                      closeMenu();
                    }}
                    aria-current={isCurrentLink(link.href, pathname, activeHash) ? "page" : undefined}
                    tabIndex={menuOpen ? 0 : -1}
                    className="nav-link inline-block py-4 font-display text-3xl font-semibold uppercase tracking-wider text-steel-100"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-auto">
          <a href={techTrek.registrationUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1} className="tech-button flex h-12 items-center justify-center gap-2 rounded-md bg-orange-nrc px-5 text-steel-100 transition-colors motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 hover:bg-orange-light">
            Register <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}