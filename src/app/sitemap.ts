import type { MetadataRoute } from "next";
import { AUDIENCES } from "@/content/audiences";
import { COMPARES } from "@/content/compares";
import { DESTINATIONS } from "@/content/destinations";
import { GUIDES } from "@/content/guides";
import { JOURNAL } from "@/content/journal";
import { PLANNER_TYPES } from "@/content/quiz";
import { REGIONS } from "@/content/regions";
import { STORIES } from "@/content/stories";
import { absoluteUrl, routes } from "@/lib/paths";

type Entry = MetadataRoute.Sitemap[number];

function entry(
  pathname: string,
  updatedAt: string,
  priority: number,
  image?: string,
): Entry {
  return {
    url: absoluteUrl(pathname),
    lastModified: new Date(updatedAt),
    changeFrequency: priority >= 0.8 ? "weekly" : "monthly",
    priority,
    ...(image ? { images: [image] } : {}),
  };
}

function latest(dates: string[]): string {
  return dates.slice().sort().at(-1) ?? new Date().toISOString().slice(0, 10);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const destDates = DESTINATIONS.map((d) => d.updatedAt);
  const guideDates = GUIDES.map((g) => g.updatedAt);
  const journalDates = JOURNAL.map((p) => p.updatedAt);

  const hubs: Entry[] = [
    entry("/", latest(destDates), 1),
    entry(routes.destinations, latest(destDates), 0.9),
    entry(routes.planning, latest(destDates), 0.8),
    entry(routes.guides, latest(guideDates), 0.8),
    entry(routes.journal, latest(journalDates), 0.7),
    entry(routes.audiences, latest(AUDIENCES.map((a) => a.updatedAt)), 0.7),
    entry(routes.stories, latest(STORIES.map((s) => s.updatedAt)), 0.6),
    entry(routes.faq, latest(guideDates), 0.7),
    entry(routes.about, latest(destDates), 0.8),
    entry(routes.contact, latest(destDates), 0.8),
    entry(routes.quiz, latest(PLANNER_TYPES.map((t) => t.updatedAt)), 0.8),
    entry(routes.vip, latest(destDates), 0.7),
    entry(routes.privacy, "2026-08-01", 0.2),
    entry(routes.cookies, "2026-08-01", 0.2),
    entry(routes.terms, "2026-08-01", 0.2),
  ];

  return [
    ...hubs,
    ...REGIONS.map((r) => entry(routes.region(r.slug), r.updatedAt, 0.9, r.heroImage)),
    ...DESTINATIONS.map((d) =>
      entry(routes.destination(d.slug), d.updatedAt, 0.9, d.heroImage),
    ),
    ...GUIDES.map((g) => entry(routes.guide(g.slug), g.updatedAt, 0.8, g.heroImage)),
    ...COMPARES.map((c) =>
      entry(routes.compare(c.slug), c.updatedAt, 0.8, c.left.image),
    ),
    ...AUDIENCES.map((a) =>
      entry(routes.audience(a.slug), a.updatedAt, 0.7, a.heroImage),
    ),
    ...PLANNER_TYPES.map((t) =>
      entry(routes.plannerType(t.slug), t.updatedAt, 0.7, t.heroImage),
    ),
    ...JOURNAL.map((p) =>
      entry(routes.journalPost(p.slug), p.updatedAt, 0.6, p.heroImage),
    ),
    ...STORIES.map((s) => entry(routes.story(s.slug), s.updatedAt, 0.5, s.heroImage)),
  ];
}
