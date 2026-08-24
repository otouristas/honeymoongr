import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import AuthorByline from "@/components/ui/AuthorByline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DayRibbon from "@/components/ui/DayRibbon";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { destinationsBySlug } from "@/content/destinations";
import { plannerTypesBySlug } from "@/content/quiz";
import { regionsBySlug } from "@/content/regions";
import type { Destination } from "@/content/types";
import { routes } from "@/lib/paths";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  touristDestinationSchema,
  touristTripSchema,
} from "@/lib/schema";

export default function DestinationTemplate({
  destination,
}: {
  destination: Destination;
}) {
  const region = regionsBySlug[destination.region];
  const plannerType = plannerTypesBySlug[destination.plannerType];
  const pathname = routes.destination(destination.slug);

  const trail = [
    { name: "Αρχική", href: "/" },
    { name: "Προορισμοί", href: routes.destinations },
    { name: region.navLabel, href: routes.region(region.slug) },
    { name: destination.name, href: pathname },
  ];

  const schema = graph(
    touristDestinationSchema({
      name: `Γαμήλιο ταξίδι: ${destination.name}`,
      description: destination.answer,
      pathname,
      image: destination.heroImage,
      region: region.title,
    }),
    touristTripSchema({
      name: `Γαμήλιο ταξίδι στις ${destination.name}`,
      description: destination.answer,
      pathname,
      image: destination.heroImage,
      nights: destination.nights,
      places: [destination.name, ...destination.bases.map((b) => b.name)],
    }),
    faqSchema(destination.faqs),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={destination.heroImage}
        alt={`${destination.name} — προορισμός γαμήλιου ταξιδιού`}
        eyebrow={destination.eyebrow}
        title={destination.name}
        subtitle={`${destination.nights} · ${destination.bestMonths}`}
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-4 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Ταιριάζουν οι {destination.name} στο γαμήλιο ταξίδι σας;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{destination.answer}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <dl className="mx-auto grid max-w-4xl gap-px overflow-hidden border border-brand-teal/20 bg-brand-teal/20 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Ιδανικό για", value: destination.bestFor },
            { label: "Όχι για", value: destination.notFor },
            { label: "Νύχτες", value: destination.nights },
            { label: "Πότε να πάτε", value: destination.bestMonths },
          ].map((item) => (
            <div key={item.label} className="bg-white px-5 py-6">
              <dt className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-teal">
                {item.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-brand-ink/75">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {destination.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="px-6 pb-14">
        <AuthorByline note={destination.plannerNote} lastWalked={destination.lastWalked} />
      </section>

      {destination.gallery.length ? (
        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
            {destination.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={`${destination.name} — ${["τοπίο", "ακτή", "λεπτομέρεια", "θέα"][i] ?? "θέα"}`}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Πού να μείνετε
            </h2>
            <Diamond className="mt-4" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {destination.bases.map((base) => (
              <div
                key={base.name}
                className="border border-brand-teal/20 bg-white/75 px-6 py-6"
              >
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {base.name}
                </h3>
                <p className="mt-2 text-brand-ink/70">{base.note}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 text-center font-display text-2xl tracking-[0.05em] text-brand-ink">
            Τι είδους διαμονές κλείνουμε
          </h3>
          <ul className="mx-auto mt-6 max-w-2xl divide-y divide-brand-teal/15 border-y border-brand-teal/15">
            {destination.stays.map((stay) => (
              <li key={stay.label} className="py-5">
                <p className="font-display text-lg tracking-wide text-brand-ink">
                  {stay.label}
                </p>
                <p className="mt-1 text-brand-ink/70">{stay.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <DayRibbon
          days={destination.arc}
          title={`Ένα ενδεικτικό τόξο στις ${destination.name}`}
        />
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            Πτήσεις, βίζα, κόστος
          </h2>
          <Diamond className="mt-4" />
          <dl className="mt-10 space-y-7">
            {[
              { label: "Πτήσεις από Αθήνα", value: destination.flightsFromAthens },
              { label: "Βίζα", value: destination.visa },
              { label: "Κόστος", value: destination.budget },
              { label: "Πλήθος", value: destination.crowds },
              { label: "Κλίμα", value: destination.climate },
            ].map((row) => (
              <div key={row.label}>
                <dt className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-teal">
                  {row.label}
                </dt>
                <dd className="mt-2 text-brand-ink/75">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {destination.pairings.length ? (
        <section className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
                Τι να συνδυάσετε με τις {destination.name}
              </h2>
              <Diamond className="mt-4" />
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {destination.pairings.map((pair) => {
                const other = destinationsBySlug[pair.slug];
                if (!other) return null;
                return (
                  <Link
                    key={pair.slug}
                    href={routes.destination(pair.slug)}
                    className="group block border border-brand-teal/20 transition hover:border-brand-teal"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={other.heroImage}
                        alt={other.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="px-5 py-5">
                      <h3 className="font-display text-xl tracking-wide text-brand-ink">
                        {other.name}
                      </h3>
                      <p className="mt-2 text-sm text-brand-ink/70">{pair.note}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <FaqList
        faqs={destination.faqs}
        title={`Ερωτήσεις για ${destination.name}`}
      />

      {plannerType ? (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-2xl border border-brand-teal/25 px-8 py-10 text-center">
            <p className="font-script text-3xl text-brand-teal">δεν είστε σίγουροι;</p>
            <p className="mt-4 text-brand-ink/70">
              Οι {destination.name} ταιριάζουν συχνά σε ζευγάρια που λέμε{" "}
              <Link
                href={routes.plannerType(plannerType.slug)}
                className="text-brand-teal underline underline-offset-4"
              >
                {plannerType.title}
              </Link>
              . Δύο λεπτά αρκούν για να δείτε αν είστε εσείς.
            </p>
            <Link href={routes.quiz} className="btn-ghost mt-7 inline-block">
              Κάντε το quiz
            </Link>
          </div>
        </section>
      ) : null}

      <CtaSection
        title={`Σχεδιάστε ${destination.name}`}
        body="Πείτε μας τις ημερομηνίες και πώς θέλετε να νιώθουν οι μέρες. Η Αγγελική απαντά με ειλικρίνεια — ακόμη και αν αυτός δεν είναι ο σωστός προορισμός."
      />
    </>
  );
}
