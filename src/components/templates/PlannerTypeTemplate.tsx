import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { destinationsBySlug } from "@/content/destinations";
import type { PlannerType } from "@/content/types";
import { routes } from "@/lib/paths";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/schema";

export default function PlannerTypeTemplate({ type }: { type: PlannerType }) {
  const pathname = routes.plannerType(type.slug);
  const destinations = type.destinations
    .map((s) => destinationsBySlug[s])
    .filter(Boolean);

  const trail = [
    { name: "Αρχική", href: "/" },
    { name: "Quiz σχεδιασμού", href: routes.quiz },
    { name: type.title, href: pathname },
  ];

  const schema = graph(
    articleSchema({
      headline: `${type.title} — ο τύπος σχεδιασμού σας`,
      description: type.answer,
      pathname,
      image: type.heroImage,
      datePublished: type.updatedAt,
      dateModified: type.updatedAt,
    }),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={type.heroImage}
        alt={type.title}
        eyebrow="Ο τύπος σας"
        title={type.title}
        subtitle={type.summary}
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-8 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <AnswerBlock>{type.answer}</AnswerBlock>
        </div>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {type.essay.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink">
              Σε τι είστε καλοί
            </h2>
            <ul className="mt-5 space-y-2.5">
              {type.strengths.map((s) => (
                <li key={s} className="flex gap-3 text-brand-ink/75">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink">
              Τι σας μπερδεύει
            </h2>
            <ul className="mt-5 space-y-2.5">
              {type.watchOuts.map((s) => (
                <li key={s} className="flex gap-3 text-brand-ink/75">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-ink/40"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {destinations.length ? (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="font-script text-4xl text-brand-teal">οι προορισμοί σας</p>
              <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
                Όπου οι {type.title} είναι συνήθως πιο ευτυχισμένοι
              </h2>
              <Diamond className="mt-4" />
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {destinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={routes.destination(dest.slug)}
                  className="group block"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={dest.heroImage}
                      alt={`Γαμήλιο ταξίδι: ${dest.name}`}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl tracking-wide text-brand-ink">
                    {dest.name}
                  </h3>
                  <p className="mt-2 text-brand-ink/70">{dest.answer}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-2xl tracking-[0.05em] text-brand-ink">
            Πώς θα δουλεύαμε μαζί
          </h2>
          <Diamond className="mt-4" />
          <ol className="mt-8 space-y-5">
            {type.howWeWork.map((step, i) => (
              <li key={step} className="flex gap-5">
                <span className="font-display text-2xl text-brand-teal/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-brand-ink/75">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pb-4 text-center">
        <Link href={routes.quiz} className="text-sm text-brand-ink/50 hover:text-brand-teal">
          Δεν είστε εσείς; Κάντε το quiz ξανά
        </Link>
      </section>

      <CtaSection
        title="Κλείστε κλήση με την Αγγελική"
        body="Είκοσι λεπτά, χωρίς υποχρέωση. Φέρτε ημερομηνίες και αμφιβολίες."
      />
    </>
  );
}
