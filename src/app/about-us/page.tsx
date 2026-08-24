import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import MagazineSpread from "@/components/ui/MagazineSpread";
import PageHero from "@/components/ui/PageHero";
import ProofWall from "@/components/ui/ProofWall";
import { IMAGES } from "@/content/images";
import { PLANNER } from "@/content/planner";
import { PLANNING_STEPS } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Η Αγγελική | Σχεδιάστρια γαμήλιων ταξιδιών",
  description:
    "Η Αγγελική σχεδιάζει γαμήλια ταξίδια για ελληνικά ζευγάρια από την Αθήνα προς τον κόσμο. Χωρίς πακέτα, χωρίς call centre.",
  pathname: routes.about,
  image: PLANNER.portrait,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Η ομάδα", href: routes.about },
];

const ANSWER =
  "Το myHoneymoon είναι η Αγγελική: σχεδιάστρια γαμήλιων ταξιδιών στην Αθήνα, με πάνω από είκοσι χρόνια στα ταξίδια. Ένας άνθρωπος, χωρίς call centre, χωρίς πακέτα.";

const FAQS = [
  {
    question: "Ποιος σχεδιάζει το ταξίδι;",
    answer:
      "Η Αγγελική. Δεν υπάρχει ομάδα junior πίσω από κοινό inbox. Το άτομο στην κλήση γνωριμίας είναι αυτό που διαλέγει τα δωμάτια και αυτό που σηκώνει το τηλέφωνο αν ακυρωθεί η πτήση.",
  },
  {
    question: "Πόσο κοστίζει η υπηρεσία;",
    answer:
      "Αμοιβή σχεδιασμού, συμφωνημένη μετά την πρώτη κλήση, με βάση τη διάρκεια και την πολυπλοκότητα. Δεν είναι ποσοστό επί των κρατήσεων.",
  },
  {
    question: "Θα μας πείτε αν ο προορισμός είναι λάθος;",
    answer:
      "Ναι. Καλύτερα ένα ειλικρινές «όχι» πριν την προκαταβολή παρά ένα ωραίο bungalow που θα σας βαρέσει την ημέρα τέσσερα.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.planning}
        alt="Παραλία γαμήλιου ταξιδιού"
        eyebrow="Η ομάδα"
        title="Μία σχεδιάστρια, εννέα προορισμοί"
        subtitle="Και γνώμη για τον καθένα"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Ποιος είναι πίσω από το myHoneymoon;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <MagazineSpread
        image={PLANNER.portrait}
        alt={`${PLANNER.name}, ${PLANNER.jobTitle}`}
        eyebrow={PLANNER.credential}
        title={`Γεια σας, είμαι η ${PLANNER.name}`}
        caption="Αθήνα"
      >
        {PLANNER.bio.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </MagazineSpread>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink">
            Πώς δουλεύουμε
          </h2>
          <Diamond className="mt-4" />
          <ol className="mt-10 space-y-8">
            {PLANNING_STEPS.map((step) => (
              <li key={step.step} className="flex gap-6">
                <span className="font-display text-3xl text-brand-teal/45">{step.step}</span>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-brand-ink/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center">
            <Link href={routes.planning} className="btn-ghost">
              Η διαδικασία αναλυτικά
            </Link>
          </p>
        </div>
      </section>

      <ProofWall />

      <FaqList faqs={FAQS} />

      <CtaSection
        title="Γνωριστείτε σε είκοσι λεπτά"
        body="Φέρτε ημερομηνίες και τις αμφιβολίες σας. Χωρίς σενάριο."
      />
    </>
  );
}
