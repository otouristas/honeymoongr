import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { COMPARES } from "@/content/compares";
import { GUIDES } from "@/content/guides";
import { IMAGES } from "@/content/images";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Οδηγοί γαμήλιου ταξιδιού | Πότε, κόστος, πτήσεις, βίζες",
  description:
    "Έξι οδηγοί και τέσσερις συγκρίσεις: πότε να κλείσετε, πόσο κοστίζει σε ευρώ, πτήσεις από Αθήνα, βίζες, εποχή και packing.",
  pathname: routes.guides,
  image: IMAGES.heroes.planning,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Οδηγοί", href: routes.guides },
];

const ANSWER =
  "Οι τέσσερις αποφάσεις που σχηματίζουν το ταξίδι είναι πότε θα φύγετε, πόσες νύχτες έχετε, πόσα διαθέτετε τη βραδιά, και πόσο μακριά αντέχετε να πετάξετε από την Αθήνα.";

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.planning}
        alt="Νύφη στην παραλία"
        eyebrow="Οδηγοί"
        title="Οι ειλικρινείς απαντήσεις"
        subtitle="Γραμμένες από κάποιον που θα σας δει μετά"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Τι αποφασίζει πραγματικά ένα γαμήλιο ταξίδι;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <ul className="divide-y divide-brand-teal/15 border-y border-brand-teal/15">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={routes.guide(guide.slug)}
                  className="group block py-7 transition"
                >
                  <h2 className="font-display text-2xl tracking-[0.04em] text-brand-ink transition group-hover:text-brand-teal">
                    {guide.title}
                  </h2>
                  <p className="mt-2 text-brand-ink/70">{guide.answer}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">αυτό ή εκείνο</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Συγκρίσεις προορισμών
            </h2>
            <Diamond className="mt-4" />
            <p className="mx-auto mt-5 max-w-xl text-brand-ink/70">
              Ζεύγη που τα ζευγάρια ζυγίζουν πραγματικά. Καθένα τελειώνει με κρίση, όχι
              με «εξαρτάται».
            </p>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {COMPARES.map((pair) => (
              <li key={pair.slug}>
                <Link
                  href={routes.compare(pair.slug)}
                  className="flex items-baseline gap-3 border-b border-brand-teal/15 py-3 text-brand-ink/80 transition hover:text-brand-teal"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
                  />
                  <span className="font-display text-lg tracking-wide">
                    {pair.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection
        title="Το διάβασμα αργεί περισσότερο από μία ερώτηση"
        body="Είκοσι λεπτά με την Αγγελική λύνουν περισσότερα από ένα απόγευμα οδηγών."
      />
    </>
  );
}
