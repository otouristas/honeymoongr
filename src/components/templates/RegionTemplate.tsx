import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { destinationsInRegion } from "@/content/destinations";
import type { Region } from "@/content/types";
import { routes } from "@/lib/paths";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  touristDestinationSchema,
} from "@/lib/schema";

export default function RegionTemplate({ region }: { region: Region }) {
  const destinations = destinationsInRegion(region.slug);
  const pathname = routes.region(region.slug);

  const trail = [
    { name: "Αρχική", href: "/" },
    { name: "Προορισμοί", href: routes.destinations },
    { name: region.navLabel, href: pathname },
  ];

  const schema = graph(
    touristDestinationSchema({
      name: region.title,
      description: region.answer,
      pathname,
      image: region.heroImage,
      region: region.title,
    }),
    faqSchema(region.faqs),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={region.heroImage}
        alt={region.title}
        eyebrow="Προορισμοί"
        title={region.title}
        subtitle={region.tagline}
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-6 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Ταιριάζει η περιοχή {region.title} στο γαμήλιο ταξίδι σας;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{region.answer}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {region.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">οι προορισμοί</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              {destinations.length} προορισμοί στον {region.title}
            </h2>
            <Diamond className="mt-4" />
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={routes.destination(dest.slug)}
                className="group block bg-white/70 transition hover:bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={dest.heroImage}
                    alt={`Γαμήλιο ταξίδι: ${dest.name}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-5 py-6">
                  <h3 className="font-display text-2xl tracking-wide text-brand-ink">
                    {dest.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                    {dest.nights} · {dest.bestMonths}
                  </p>
                  <p className="mt-3 text-sm text-brand-ink/70">{dest.bestFor}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <dl className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          <div>
            <dt className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-teal">
              Πώς φτάνετε
            </dt>
            <dd className="mt-2 text-brand-ink/75">{region.gettingThere}</dd>
          </div>
          <div>
            <dt className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-teal">
              Καλύτεροι μήνες
            </dt>
            <dd className="mt-2 text-brand-ink/75">{region.bestMonths}</dd>
          </div>
        </dl>
      </section>

      {region.gallery.length ? (
        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-4">
            {region.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={src}
                  alt={`${region.title} — ${["τοπίο", "ακτή", "λεπτομέρεια", "θέα"][i] ?? "θέα"}`}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <FaqList faqs={region.faqs} title={`Ερωτήσεις για ${region.title}`} />

      <CtaSection
        title={`Σχεδιάστε ταξίδι στον ${region.title}`}
        body="Θα σας πούμε ποιον προορισμό να διαλέξετε, πόσες νύχτες αξίζει, και πού θα ήσασταν πιο ευτυχισμένοι."
      />
    </>
  );
}
