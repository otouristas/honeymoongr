import type { Metadata } from "next";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import ProofWall from "@/components/ui/ProofWall";
import { IMAGES } from "@/content/images";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Επικοινωνία | Ξεκινήστε τον σχεδιασμό",
  description:
    "Πείτε στην Αγγελική τις ημερομηνίες και πώς θέλετε να νιώθουν οι μέρες. Απάντηση εντός μίας εργάσιμης ημέρας, από άνθρωπο.",
  pathname: routes.contact,
  image: IMAGES.heroes.contact,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Επικοινωνία", href: routes.contact },
];

const FAQS = [
  {
    question: "Πόσο γρήγορα θα απαντήσετε;",
    answer:
      "Εντός μίας εργάσιμης ημέρας, συνήθως το ίδιο απόγευμα. Η Αγγελική διαβάζει τα μηνύματα η ίδια.",
  },
  {
    question: "Δεσμευόμαστε με το μήνυμα;",
    answer:
      "Όχι. Η πρώτη συζήτηση είναι γνωριμία: είκοσι λεπτά για να δούμε αν ταιριάζουμε. Τίποτα δεν κοστολογείται πριν από αυτή.",
  },
  {
    question: "Πόσο νωρίς να γράψουμε;",
    answer:
      "Εννέα έως δώδεκα μήνες για υψηλή περίοδο στον Ινδικό. Έξι μήνες είναι λειτουργικά. Κάτω από τρεις μήνες βοηθάμε, αλλά τα καλύτερα δωμάτια έχουν φύγει.",
  },
  {
    question: "Δεν έχουμε ημερομηνίες ακόμη;",
    answer:
      "Γράψτε μας ούτως ή άλλως. Πολλοί έρχονται με εποχή, όχι ημερομηνία. Η επιλογή του δεκαημέρου είναι μέρος της δουλειάς.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.contact}
        alt="Χαρούμενη νύφη"
        eyebrow="Επικοινωνία"
        title="Ξεκινήστε τη συζήτηση"
        subtitle="Μία εργάσιμη ημέρα, ένας άνθρωπος, χωρίς σενάριο πωλήσεων"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Πώς ξεκινά ο σχεδιασμός;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>
              Στείλτε κατά προσέγγιση ημερομηνίες και μία πρόταση για το είδος των ημερών
              που θέλετε. Η Αγγελική απαντά εντός εργάσιμης ημέρας, μετά κλείνετε κλήση
              είκοσι λεπτών. Χωρίς αμοιβή μέχρι τότε.
            </AnswerBlock>
          </div>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[0.85fr_1fr]">
          <div className="text-center lg:text-left">
            <p className="font-script text-4xl text-brand-teal">επικοινωνία</p>
            <p className="mt-5 text-brand-ink/70">
              Ό,τι σας βολεύει. Η φόρμα πάει στο ίδιο inbox με το email, και τα δύο τα
              διαβάζει η Αγγελική.
            </p>

            <ul className="mt-10 space-y-6 text-brand-ink">
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Κλείστε κλήση γνωριμίας
                </p>
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-brand-teal hover:underline"
                >
                  Επιλέξτε ώρα στο ημερολόγιο
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Τηλέφωνο
                </p>
                <a href={SITE.phoneHref} className="mt-1 inline-block hover:text-brand-teal">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  WhatsApp
                </p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block hover:text-brand-teal"
                >
                  Στείλτε μήνυμα
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-block hover:text-brand-teal"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Αναλυτικό ερωτηματολόγιο
                </p>
                <a
                  href={SITE.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-brand-teal hover:underline"
                >
                  Φόρμα Dubsado
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-ink/45">
                  Έδρα
                </p>
                <p className="mt-1">Αθήνα, Αττική, Ελλάδα</p>
              </li>
            </ul>

            <p className="mt-10 text-sm text-brand-ink/55">
              Δεν είστε έτοιμοι να γράψετε; Κάντε το{" "}
              <Link
                href={routes.quiz}
                className="text-brand-teal underline underline-offset-4"
              >
                quiz δύο λεπτών
              </Link>
              .
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <ProofWall title="ζευγάρια που έγραψαν πρώτα" limit={2} />

      <FaqList faqs={FAQS} title="Πριν γράψετε" />
    </>
  );
}
