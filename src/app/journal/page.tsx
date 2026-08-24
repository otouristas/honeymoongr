import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/content/images";
import { journalSorted } from "@/content/journal";
import { routes } from "@/lib/paths";
import { formatDate } from "@/lib/prose";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Honeymoon Journal | Σημειώσεις για γαμήλιο ταξίδι",
  description:
    "Κείμενα για εποχή, κόστος, Μαλδίβες και ταξιδιωτικό στιλ — γραμμένα για ελληνικά ζευγάρια, όχι μεταφρασμένος κατάλογος.",
  pathname: routes.journal,
  image: IMAGES.heroes.journal,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Journal", href: routes.journal },
];

export default function Page() {
  const [lead, ...rest] = journalSorted;

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.journal}
        alt="Μήνυμα σε μπουκάλι στην άμμο"
        eyebrow="Journal"
        title="Σημειώσεις από τον χάρτη"
        subtitle="Γνώμη, όχι κατάλογος"
      />

      <Breadcrumbs trail={trail} />

      {lead ? (
        <section className="px-6 py-14">
          <Link
            href={routes.journalPost(lead.slug)}
            className="group mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={lead.heroImage}
                alt={lead.title}
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-brand-teal">
                Τελευταίο · {formatDate(lead.date)}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-4 text-brand-ink/70">{lead.excerpt}</p>
              <span className="btn-ghost mt-7 inline-block">Διαβάστε το κείμενο</span>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={routes.journalPost(post.slug)}
              className="group block bg-white/70 transition hover:bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="px-5 py-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/45">
                  {formatDate(post.date)}
                </p>
                <h2 className="mt-2 font-display text-xl tracking-wide text-brand-ink">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-brand-ink/70">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection
        title="Σχεδιάστε το ταξίδι πίσω από τα κείμενα"
        body="Ό,τι διαβάζετε εδώ προέρχεται από πραγματικές επιλογές δωματίων και πτήσεων. Ας σας στείλουμε στα ίδια μέρη."
      />
    </>
  );
}
