import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { DESTINATIONS } from "@/content/destinations";
import { IMAGES } from "@/content/images";
import { REGIONS } from "@/content/regions";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const ANSWER =
  "Εννέα προορισμοί σε πέντε περιοχές: Ινδικός Ωκεανός, Νοτιοανατολική Ασία, Καραϊβική, Πολυνησία και Βόρεια Αφρική. Όλοι για ελληνικά ζευγάρια που φεύγουν από την Αθήνα — όχι μετάφραση ενός νησιωτικού καταλόγου της Ελλάδας.";

const FAQS = [
  {
    question: "Πόσους προορισμούς να συνδυάσουμε;",
    answer:
      "Έναν για επτά-δέκα νύχτες στον Ινδικό. Δύο βάσεις για δεκατέσσερις νύχτες στην Ασία. Κάθε αλλαγή αεροδρομίου κοστίζει σχεδόν μία ημέρα.",
  },
  {
    question: "Ποια περιοχή είναι «καλύτερη»;",
    answer:
      "Ινδικός για νερό και απομόνωση, Ασία για ρυθμό, Μαρόκο αν η πτήση πρέπει να είναι σύντομη, Πολυνησία αν η διαμονή είναι το ταξίδι.",
  },
  {
    question: "Πότε να κλείσουμε;",
    answer:
      "Εννέα έως δώδεκα μήνες για υψηλή περίοδο στις Μαλδίβες και την Πολυνησία. Έξι μήνες αρκούν για Μαρόκο.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Ιδανικοί προορισμοί γαμήλιου ταξιδιού",
  description:
    "Εννέα προορισμοί για ελληνικά ζευγάρια — Μαλδίβες, Σεϋχέλλες, Μπαλί, Μαυρίκιος, Ταϊλάνδη, Μαρόκο, Πολυνησία, Καραϊβική, Ζανζιβάρη — με ειλικρίνεια για νύχτες, κόστος και πτήσεις.",
  pathname: routes.destinations,
  image: IMAGES.destinations.maldives[0],
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Προορισμοί", href: routes.destinations },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.destinations.maldives[0]}
        alt="Ατόλη στον Ινδικό Ωκεανό"
        eyebrow="Ο χάρτης"
        title="Πού θα πάτε"
        subtitle={`${DESTINATIONS.length} προορισμοί, ${REGIONS.length} περιοχές, μία ειλικρινής γνώμη για τον καθένα`}
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Πόσους προορισμούς σχεδιάζετε;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          <p>
            Δεν είναι λίστα από τα ίδια πέντε νησιά και μία καρδιά στην άμμο. Κάθε
            προορισμός έχει σελίδα με το ποιος του ταιριάζει, πόσες νύχτες αξίζει, και
            τι να συνδυάσετε μαζί του.
          </p>
          <p>
            Αν οι Μαλδίβες θα σας βαρέσουν την ημέρα τέσσερα, το λέμε στη σελίδα των
            Μαλδίβων. Αν έχετε δέκα νύχτες και θέλετε τρία αεροδρόμια, θα σας πούμε να
            πάρετε δύο.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">οι πέντε</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
              Περιοχές με μια ματιά
            </h2>
            <Diamond className="mt-4" />
          </div>
          <ul className="mt-10 divide-y divide-brand-teal/15 border-y border-brand-teal/15">
            {REGIONS.map((region) => (
              <li key={region.slug}>
                <Link
                  href={routes.region(region.slug)}
                  className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
                >
                  <span className="font-display text-2xl tracking-wide text-brand-ink transition group-hover:text-brand-teal md:w-64 md:shrink-0">
                    {region.title}
                  </span>
                  <span className="text-brand-ink/70">{region.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqList faqs={FAQS} title="Πώς διαλέγετε" />

      <CtaSection
        title="Δεν είστε σίγουροι ποιος είναι δικός σας;"
        body="Δύο λεπτά ερωτήσεων, ή είκοσι λεπτά σε μία κλήση. Και στα δύο φεύγετε με μικρή λίστα, όχι μεγάλη."
      />
    </>
  );
}
