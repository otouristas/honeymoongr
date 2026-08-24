import { SITE } from "@/content/site";

/** Canonical internal paths never carry a trailing slash. */
export function path(...parts: string[]): string {
  const joined = parts
    .filter(Boolean)
    .map((p) => p.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/");
  return joined ? `/${joined}` : "/";
}

export const routes = {
  home: "/",
  about: "/about-us",
  planning: "/gamilio-taxidi",
  contact: "/epikoinonia",
  destinations: "/proorismoi",
  guides: "/guides",
  journal: "/journal",
  faq: "/faq",
  audiences: "/gia",
  stories: "/stories",
  quiz: "/sxediazeis-gamilio-taxidi",
  vip: "/vip",
  privacy: "/privacy",
  cookies: "/cookies",
  terms: "/terms",
  thankYou: "/efharisto",
  region: (slug: string) => path(slug),
  destination: (slug: string) => path("gamilio-taxidi", slug),
  guide: (slug: string) => path("guides", slug),
  compare: (slug: string) => path("compare", slug),
  audience: (slug: string) => path("gia", slug),
  journalPost: (slug: string) => path("journal", slug),
  story: (slug: string) => path("stories", slug),
  plannerType: (slug: string) => path(slug),
} as const;

export function absoluteUrl(pathname: string): string {
  const clean = pathname === "/" ? "" : path(pathname);
  return `${SITE.domain}${clean}`;
}
