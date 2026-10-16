"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { SocialIcons } from "@/components/SocialIcons";
import type { MenuLink, SiteMenuModel } from "@/content/nav";
import { SITE, site } from "@/content/site";
import { routes } from "@/lib/paths";

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0 opacity-35"
    >
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function Indicator({ children, accent }: { children: string; accent?: boolean }) {
  return (
    <span
      className={`shrink-0 whitespace-nowrap border px-2 py-[3px] font-nav text-[10px] uppercase tracking-[0.16em] ${
        accent
          ? "border-brand-teal/40 bg-brand-teal/10 text-brand-teal"
          : "border-black/15 text-brand-ink/45"
      }`}
    >
      {children}
    </span>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-nav text-[10px] uppercase tracking-[0.28em] text-brand-teal ${className}`}
    >
      {children}
    </p>
  );
}

function MenuRow({
  link,
  onNavigate,
  current,
  size = "lg",
}: {
  link: MenuLink;
  onNavigate: () => void;
  current: boolean;
  size?: "lg" | "sm";
}) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      aria-current={current ? "page" : undefined}
      className={`flex min-h-[64px] items-center gap-4 border-b border-black/10 px-5 py-3.5 transition active:bg-brand-teal/5 ${
        current ? "bg-brand-teal/5" : ""
      }`}
    >
      <span className="min-w-0 flex-1">
        <span
          className={`block font-nav tracking-wide ${
            size === "lg" ? "text-[26px] leading-tight" : "text-lg"
          } ${current ? "text-brand-teal" : "text-brand-ink"}`}
        >
          {link.label}
        </span>
        {link.hint ? (
          <span className="mt-1 block text-[13px] leading-snug text-brand-ink/45">
            {link.hint}
          </span>
        ) : null}
      </span>
      {link.badge ? <Indicator accent={link.accent}>{link.badge}</Indicator> : null}
      <Chevron />
    </Link>
  );
}

export function SiteMenu({ menu }: { menu: SiteMenuModel }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [open]);

  const isCurrent = (href: string) => pathname === href;
  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-teal/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 py-2 md:px-8">
          <span aria-hidden />
          <Logo variant="wordmark" priority />
          <button
            ref={toggleRef}
            type="button"
            className="flex items-center gap-2 justify-self-end"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="font-nav text-[10px] uppercase tracking-[0.28em] text-brand-ink">
              Μενού
            </span>
            <span className="flex w-5 flex-col items-end gap-[3px]" aria-hidden>
              <span
                className={`block h-px bg-brand-ink transition ${open ? "w-5 translate-y-[4px] rotate-45" : "w-5"}`}
              />
              <span
                className={`block h-px bg-brand-ink transition ${open ? "opacity-0" : "w-3.5"}`}
              />
              <span
                className={`block h-px bg-brand-ink transition ${open ? "w-5 -translate-y-[4px] -rotate-45" : "w-2.5"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        inert={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Μενού ιστοτόπου"
        className={`fixed inset-0 z-[70] bg-white text-brand-ink transition duration-400 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-[100dvh] flex-col">
          <div className="flex shrink-0 items-center justify-between border-b border-black/10 px-5 pb-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] md:px-10 md:py-5">
            <p className="font-nav text-sm uppercase tracking-[0.3em] text-brand-ink/70">
              myHoneymoon
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                close();
                toggleRef.current?.focus();
              }}
              className="-mr-2 px-2 py-1 font-nav text-xs uppercase tracking-[0.28em] text-brand-ink"
            >
              Κλείσιμο
            </button>
          </div>

          <ul className="no-scrollbar flex shrink-0 items-center gap-3 overflow-x-auto border-b border-black/10 px-5 py-2.5 md:justify-center md:px-10">
            {menu.proof.map((item) => (
              <li
                key={item}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap font-nav text-[10px] uppercase tracking-[0.18em] text-brand-ink/50"
              >
                <span aria-hidden className="h-1 w-1 rotate-45 bg-brand-teal" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="md:hidden">
              <nav aria-label="Κύριο">
                {menu.primary.map((link) => (
                  <MenuRow
                    key={link.href}
                    link={link}
                    onNavigate={close}
                    current={isCurrent(link.href)}
                  />
                ))}
              </nav>

              <SectionLabel className="px-5 pb-3 pt-7">Περιοχές</SectionLabel>
              <nav aria-label="Περιοχές" className="grid grid-cols-2 border-t border-black/10">
                {menu.regions.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={`flex min-h-[76px] flex-col justify-center gap-1 border-b border-black/10 px-5 py-3 transition active:bg-brand-teal/5 ${
                      index % 2 === 0 ? "border-r border-black/10" : ""
                    } ${isCurrent(link.href) ? "bg-brand-teal/5" : ""}`}
                  >
                    <span className="flex items-baseline gap-2">
                      <span className="font-nav text-base leading-tight tracking-wide text-brand-ink">
                        {link.label}
                      </span>
                      <span className="font-nav text-[11px] text-brand-teal">
                        {link.badge}
                      </span>
                    </span>
                    <span className="text-[12px] leading-snug text-brand-ink/40">
                      {link.hint}
                    </span>
                  </Link>
                ))}
              </nav>

              <SectionLabel className="px-5 pb-3 pt-7">Προορισμοί</SectionLabel>
              <ul className="no-scrollbar flex gap-2 overflow-x-auto px-5 pb-1">
                {menu.destinations.map((link) => (
                  <li key={link.href} className="shrink-0">
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block border border-brand-teal/30 px-3.5 py-2 text-sm text-brand-ink/80 transition active:bg-brand-teal/10"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <SectionLabel className="px-5 pb-3 pt-8">Περισσότερα</SectionLabel>
              <nav aria-label="Περισσότερα" className="border-t border-black/10">
                {menu.utility.map((link) => (
                  <MenuRow
                    key={link.href}
                    link={link}
                    onNavigate={close}
                    current={isCurrent(link.href)}
                    size="sm"
                  />
                ))}
              </nav>

              <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-7 text-sm text-brand-ink/70">
                <a href={SITE.phoneHref} className="active:text-brand-teal">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="active:text-brand-teal">
                  {site.email}
                </a>
                <SocialIcons
                  facebook={site.socials.facebook}
                  instagram={site.socials.instagram}
                  className="border-brand-teal/40 text-brand-teal"
                />
              </div>
            </div>

            <div className="mx-auto hidden max-w-5xl gap-12 px-10 py-10 md:grid md:grid-cols-3">
              <div>
                <SectionLabel className="mb-4">Κεντρικό μενού</SectionLabel>
                <ul className="space-y-3">
                  {menu.primary.map((link) => (
                    <li key={link.href} className="flex items-center gap-3">
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className={`font-nav text-3xl tracking-wide transition hover:text-brand-teal ${
                          isCurrent(link.href) ? "text-brand-teal" : "text-brand-ink"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.badge ? (
                        <Indicator accent={link.accent}>{link.badge}</Indicator>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionLabel className="mb-4">Περιοχές</SectionLabel>
                <ul className="space-y-2">
                  {menu.regions.map((link) => (
                    <li key={link.href} className="flex items-center gap-2.5">
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className={`font-nav text-xl tracking-wide transition hover:text-brand-teal ${
                          isCurrent(link.href) ? "text-brand-teal" : "text-brand-ink"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <span className="font-nav text-xs text-brand-ink/40">
                        {link.badge}
                      </span>
                    </li>
                  ))}
                </ul>

                <SectionLabel className="mb-3 mt-8">Προορισμοί</SectionLabel>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {menu.destinations.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        className="text-sm text-brand-ink/70 transition hover:text-brand-teal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SectionLabel className="mb-4">Ποιος τύπος σχεδιασμού είστε;</SectionLabel>
                <Link
                  href={menu.utility[0].href}
                  onClick={close}
                  className="btn-ghost"
                >
                  Κάντε το quiz
                </Link>

                <SectionLabel className="mb-3 mt-10">Περισσότερα</SectionLabel>
                <ul className="space-y-2">
                  {menu.utility.map((link) => (
                    <li key={link.href} className="flex items-center gap-2.5">
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className={`text-sm transition hover:text-brand-teal ${
                          isCurrent(link.href) ? "text-brand-teal" : "text-brand-ink/75"
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.badge ? (
                        <span className="font-nav text-[10px] uppercase tracking-[0.16em] text-brand-ink/35">
                          {link.badge}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-black/10 pt-6 text-sm text-brand-ink/75">
                  <a href={SITE.phoneHref} className="hover:text-brand-teal">
                    {site.phone}
                  </a>
                  <a href={`mailto:${site.email}`} className="hover:text-brand-teal">
                    {site.email}
                  </a>
                  <SocialIcons
                    facebook={site.socials.facebook}
                    instagram={site.socials.instagram}
                    className="border-brand-teal/40 text-brand-teal hover:bg-brand-teal/10"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid shrink-0 grid-cols-2 border-t border-black/10 pb-[env(safe-area-inset-bottom)] md:hidden">
            <a
              href={SITE.phoneHref}
              className="py-4 text-center font-nav text-[11px] uppercase tracking-[0.24em] text-brand-ink active:bg-brand-teal/10"
            >
              Καλέστε την Αγγελική
            </a>
            <Link
              href={routes.contact}
              onClick={close}
              className="border-l border-black/10 bg-brand-teal py-4 text-center font-nav text-[11px] uppercase tracking-[0.24em] text-white active:bg-brand-teal/80"
            >
              Ξεκινήστε
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
