import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { destinationNames } from "@/content/destinations";
import { IMAGES } from "@/content/images";
import { STORIES } from "@/content/stories";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ταξίδεψαν μαζί μας",
  description:
    "Λόγια ζευγαριών που σχεδίασαν το γαμήλιο ταξίδι τους με το myHoneymoon — χωρίς πλαστά ονόματα και χωρίς widget κριτικών.",
  pathname: routes.stories,
  image: IMAGES.heroes.stories,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Ταξίδεψαν μαζί μας", href: routes.stories },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.stories}
        alt="Μαριάννα στην Κούβα"
        eyebrow="Ζευγάρια"
        title="Ταξίδεψαν μαζί μας"
        subtitle="Πραγματικά λόγια από την παλιά σελίδα — χωρίς επινοημένα επώνυμα"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 py-14">
        <div className="mx-auto max-w-2xl space-y-5 text-center text-brand-ink/75">
          <p>
            Δεν τρέχουμε widget κριτικών. Δημοσιεύουμε ό,τι υπήρχε ήδη στον ιστότοπο,
            με τα ονόματα που μας δόθηκαν και χωρίς να γεμίζουμε κενά.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl space-y-12">
          {STORIES.map((story, i) => (
            <Link
              key={story.slug}
              href={routes.story(story.slug)}
              className={`group grid items-center gap-8 md:grid-cols-2 ${
                i % 2 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={story.heroImage}
                  alt={`Το ταξίδι της ${story.couple}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-brand-teal">
                  {story.from} · {story.year}
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-[0.05em] text-brand-ink">
                  {story.couple}
                </h2>
                <p className="mt-2 font-script text-2xl text-brand-teal">
                  {story.headline}
                </p>
                <p className="mt-4 text-brand-ink/70">«{story.quote}»</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                  {destinationNames(story.destinations).join(" · ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="Γράψτε το δικό σας του χρόνου"
        body="Όλα ξεκίνησαν με δύο γραμμές για ημερομηνίες και μία ιδέα. Στείλτε τις δικές σας."
      />
    </>
  );
}
