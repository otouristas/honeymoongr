import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import AuthorByline from "@/components/ui/AuthorByline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import ProofWall from "@/components/ui/ProofWall";
import { IMAGES } from "@/content/images";
import { PLANNING_STEPS } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Γαμήλιο ταξίδι | Πώς σχεδιάζουμε",
  description:
    "Τέσσερα βήματα από την πρώτη κλήση μέχρι την αναχώρηση: γνωριμία, σχεδιασμός, επεξεργασία, αναχώρηση. Χωρίς πακέτα και χωρίς εκπλήξεις στο αεροδρόμιο.",
  pathname: routes.planning,
  image: IMAGES.heroes.planning,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Σχεδιασμός", href: routes.planning },
];

const ANSWER =
  "Ξεκινάτε με ένα βιντεοκάλ. Κλειδώνουμε προορισμό και ρυθμό, μετά δωμάτια και πτήσεις. Αλλάζουμε ό,τι δεν κάθεται σωστά, μέχρι να κάθεται. Εσείς φτάνετε.";

const FAQS = [
  {
    question: "Πόσο νωρίς να ξεκινήσουμε;",
    answer:
      "Εννέα έως δώδεκα μήνες για Ινδικό και Πολυνησία σε υψηλή περίοδο. Έξι μήνες αρκούν για Μαρόκο. Κάτω από τρεις δουλεύουμε με ό,τι έχει μείνει.",
  },
  {
    question: "Τι καλύπτει η αμοιβή σχεδιασμού;",
    answer:
      "Τον σχεδιασμό, τις κρατήσεις, την αλληλογραφία με προμηθευτές, και έναν άνθρωπο διαθέσιμο στο ταξίδι. Είναι σταθερή αμοιβή μετά την πρώτη κλήση, ποτέ ποσοστό.",
  },
  {
    question: "Μπορούμε να αλλάξουμε το πλάνο;",
    answer:
      "Ναι, και σχεδόν όλοι το κάνουν μία ή δύο φορές. Οι αλλαγές είναι ελεύθερες μέχρι να κλειδώσουν μη επιστρέψιμες κρατήσεις.",
  },
  {
    question: "Κλείνετε τις πτήσεις;",
    answer:
      "Συμβουλεύουμε στα δρομολόγια από Αθήνα. Πολλά ζευγάρια κλείνουν μόνα τους με μίλια. Στείλτε μας τις ώρες πριν επιβεβαιώσετε.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.planning}
        alt="Νύφη στην παραλία"
        eyebrow="Η διαδικασία"
        title="Γαμήλιο ταξίδι"
        subtitle="Τέσσερα βήματα, μία σχεδιάστρια, χωρίς εκπλήξεις"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Πώς σχεδιάζεται ένα γαμήλιο ταξίδι;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-2xl">
          <AuthorByline />
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <ol className="mx-auto max-w-3xl space-y-10">
          {PLANNING_STEPS.map((step) => (
            <li key={step.step} className="flex gap-6">
              <span className="font-display text-3xl text-brand-teal/45">{step.step}</span>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-brand-ink/70">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <ProofWall />

      <FaqList faqs={FAQS} title="Πριν ξεκινήσετε" />

      <CtaSection
        title="Το πρώτο βήμα είναι μία κλήση"
        body="Είκοσι λεπτά. Χωρίς προσφορά και χωρίς πίεση. Μόνο για να δούμε αν ταιριάζουμε."
      />
    </>
  );
}
