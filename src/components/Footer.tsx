import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialIcons } from "@/components/SocialIcons";
import {
  DESTINATION_NAV,
  LEGAL_NAV,
  PRIMARY_NAV,
  UTILITY_NAV,
  site,
} from "@/content/site";

export function Footer() {
  return (
    <footer>
      <div className="pattern-bg border-t border-brand-teal/15 py-14 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center md:grid-cols-3 md:items-start md:gap-8">
          <div className="space-y-3">
            <h3 className="font-display text-xl tracking-wide text-brand-ink">
              Επικοινωνία
            </h3>
            <p>
              <a href={`tel:${site.phoneTel}`} className="text-brand-ink hover:text-brand-teal">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="text-brand-ink hover:text-brand-teal">
                {site.email}
              </a>
            </p>
            <p className="text-sm text-brand-ink/60">Αθήνα, Ελλάδα</p>
            <div className="flex justify-center pt-2">
              <SocialIcons
                facebook={site.socials.facebook}
                instagram={site.socials.instagram}
                className="border-brand-teal/40 text-brand-teal hover:bg-brand-teal hover:text-white"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Logo variant="footer" />
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-xl tracking-wide text-brand-ink">Περιοχές</h3>
            <ul className="space-y-2">
              {DESTINATION_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-ink/80 hover:text-brand-teal">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav
          aria-label="Υποσέλιδο"
          className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-2 border-t border-brand-teal/15 px-6 pt-8"
        >
          {[...PRIMARY_NAV, ...UTILITY_NAV].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-xs uppercase tracking-[0.22em] text-brand-ink/70 hover:text-brand-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav
          aria-label="Νομικά"
          className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2 px-6"
        >
          {LEGAL_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-wide text-brand-ink/45 hover:text-brand-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="bg-brand-teal py-3" />
      <div className="bg-white py-4 text-center text-xs tracking-wide text-brand-ink/55">
        Designed with Travel Expertise & Passion by SkydreamLabs • SEO Strategy & Optimization by AnotherSEOGuru
      </div>
    </footer>
  );
}
