import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AuthorByline from "@/components/ui/AuthorByline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { destinationsBySlug } from "@/content/destinations";
import type { JournalPost } from "@/content/types";
import { routes } from "@/lib/paths";
import { parseProse, formatDate } from "@/lib/prose";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/schema";

export default function JournalTemplate({ post }: { post: JournalPost }) {
  const pathname = routes.journalPost(post.slug);
  const destinations = post.destinations
    .map((s) => destinationsBySlug[s])
    .filter(Boolean);

  const trail = [
    { name: "Αρχική", href: "/" },
    { name: "Journal", href: routes.journal },
    { name: post.title, href: pathname },
  ];

  const schema = graph(
    articleSchema({
      headline: post.title,
      description: post.excerpt,
      pathname,
      image: post.heroImage,
      datePublished: post.date,
      dateModified: post.updatedAt,
    }),
    breadcrumbSchema(trail),
  );

  const blocks = parseProse(post.body);

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={post.heroImage}
        alt={post.title}
        eyebrow={formatDate(post.date)}
        title={post.title}
      />

      <Breadcrumbs trail={trail} />

      <article className="px-6 py-12">
        <div className="mx-auto max-w-2xl">
          <p className="font-display text-xl leading-relaxed text-brand-ink">
            {post.excerpt}
          </p>
          <Diamond className="my-8" align="left" />
          <div className="space-y-5 text-brand-ink/75">
            {blocks.map((block) =>
              block.type === "h" ? (
                <h2
                  key={block.text.slice(0, 32)}
                  className="pt-4 font-display text-2xl tracking-[0.04em] text-brand-ink"
                >
                  {block.text}
                </h2>
              ) : (
                <p key={block.text.slice(0, 32)}>{block.text}</p>
              ),
            )}
          </div>

          <div className="mt-12">
            <AuthorByline lastWalked={post.updatedAt} />
          </div>

          {destinations.length ? (
            <div className="mt-12 border-t border-brand-teal/20 pt-8">
              <p className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-teal">
                Προορισμοί στο κείμενο
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
      </article>

      <CtaSection
        title="Θέλετε ένα ταξίδι που να διαβάζεται έτσι;"
        body="Σχεδιάζουμε το σύνολο — πτήσεις, δωμάτια, το σωστό τραπέζι — ώστε εσείς απλώς να φτάσετε."
      />
    </>
  );
}
