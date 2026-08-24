import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { destinationsBySlug } from "@/content/destinations";
import type { CoupleStory } from "@/content/types";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph, reviewSchema } from "@/lib/schema";

export default function StoryTemplate({ story }: { story: CoupleStory }) {
  const pathname = routes.story(story.slug);
  const destinations = story.destinations
    .map((s) => destinationsBySlug[s])
    .filter(Boolean);

  const trail = [
    { name: "Αρχική", href: "/" },
    { name: "Ταξίδεψαν μαζί μας", href: routes.stories },
    { name: story.couple, href: pathname },
  ];

  const schema = graph(
    reviewSchema({
      author: story.couple,
      body: story.quote,
      headline: story.headline,
      datePublished: `${story.year}-09-01`,
      pathname,
    }),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={story.heroImage}
        alt={`Το γαμήλιο ταξίδι της ${story.couple}`}
        eyebrow={`${story.from} · ${story.year}`}
        title={story.couple}
        subtitle={story.headline}
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 py-14">
        <blockquote className="mx-auto max-w-2xl text-center">
          <p className="font-display text-2xl leading-relaxed text-brand-ink md:text-3xl">
            «{story.quote}»
          </p>
          <footer className="mt-5 text-xs uppercase tracking-[0.24em] text-brand-ink/45">
            {story.couple}, {story.from}
          </footer>
        </blockquote>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto max-w-2xl">
          <Diamond className="mb-8" />
          <div className="space-y-5 text-brand-ink/75">
            {story.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          {destinations.length ? (
            <div className="mt-12 border-t border-brand-teal/20 pt-8">
              <p className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-teal">
                Η διαδρομή
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {destinations.map((dest) => (
                  <li key={dest.slug}>
                    <Link
                      href={routes.destination(dest.slug)}
                      className="text-brand-ink/75 underline-offset-4 hover:text-brand-teal hover:underline"
                    >
                      {dest.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <CtaSection
        title="Η σειρά σας"
        body="Όλα αυτά ξεκίνησαν με ένα σύντομο μήνυμα για ημερομηνίες και μία ασαφή ιδέα. Αυτό μας φτάνει."
      />
    </>
  );
}
