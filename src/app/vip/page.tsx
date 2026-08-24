import type { Metadata } from "next";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import { IMAGES } from "@/content/images";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "My VIP Honeymoon Experience",
  description:
    "VIP εμπειρία γαμήλιου ταξιδιού: εξατομικευμένος σχεδιασμός, ψηφιακά εργαλεία, προνόμια και honeymoon registry — χωρίς πακέτα.",
  pathname: routes.vip,
  image: IMAGES.heroes.vip,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "VIP Experience", href: routes.vip },
];

const ANSWER =
  "Το VIP Honeymoon Experience είναι ο τρόπος που σχεδιάζουμε όταν θέλετε περισσότερη φροντίδα από μία κράτηση ξενοδοχείου: εργαλεία πριν φύγετε, άνθρωπος όσο είστε μακριά, και προνόμια που δεν είναι «πετσέτα με καρδιά».";

const BLOCKS = [
  {
    title: "Ψηφιακά εργαλεία σχεδιασμού",
    image: IMAGES.vip.tools,
    body: "Αν ξέρετε ακριβώς πού θέλετε να πάτε — ή αν δεν ξέρετε καθόλου — τα εργαλεία βοηθούν να καταγραφούν επιθυμίες με λόγια και εικόνες, πριν κλείσουμε το πρώτο δωμάτιο.",
  },
  {
    title: "Ψηφιακή επικοινωνία",
    image: IMAGES.vip.services,
    body: "Ένα κανάλι, όχι πέντε εφαρμογές. Απαντήσεις για πτήσεις, βίζες και το bungalow που κοιτάζει τον jetty, χωρίς να κυνηγάτε διαφορετικά τμήματα.",
  },
  {
    title: "Romantic Escapade",
    image: IMAGES.vip.escapade,
    body: "Πριν τον γάμο ή πριν το μεγάλο ταξίδι, ένα μικρό διάλειμμα — όχι απαραίτητα «ρομαντικό» με την έννοια του καταλόγου, σίγουρα όμως απόδραση από την καθημερινότητα του σχεδιασμού.",
  },
  {
    title: "Προστιθέμενη αξία",
    image: IMAGES.vip.benefits,
    body: "Λεπτομέρειες που δεν φαίνονται στην προσφορά: προσανατολισμός δωματίου, μεταφορά που όντως φτάνει, ασφάλεια που καλύπτει αυτό που νομίζετε ότι καλύπτει.",
  },
  {
    title: "Δώρα πριν φύγετε",
    image: IMAGES.vip.gifts,
    body: "Χρήσιμα πράγματα για το ταξίδι — όχι τάπερ. Αποκλειστικά για όσους μας εμπιστεύονται τον σχεδιασμό.",
  },
  {
    title: "Honeymoon registry",
    image: IMAGES.vip.registry,
    body: "Όχι άλλα σερβίτσια. Οι καλεσμένοι συνεισφέρουν στο ταξίδι με voucher. Εσείς ενημερώνεστε, το «σακούλι» γεμίζει.",
  },
];

const FAQS = [
  {
    question: "Είναι υποχρεωτικό το VIP club;",
    answer:
      "Όχι. Σχεδιάζουμε και χωρίς αυτό. Το VIP είναι για ζευγάρια που θέλουν τα εργαλεία, τα προνόμια και το registry σε ένα πακέτο φροντίδας.",
  },
  {
    question: "Πώς μπαίνουμε;",
    answer: `Γράψτε στο ${SITE.email} ή συμπληρώστε την φόρμα επικοινωνίας. Δεν υπάρχει αυτοματοποιημένη εγγραφή χωρίς συζήτηση.`,
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(FAQS), breadcrumbSchema(trail))} />

      <PageHero
        image={IMAGES.heroes.vip}
        alt="VIP Honeymoon Experience"
        eyebrow="Club"
        title="My VIP Honeymoon Experience"
        subtitle="Σχεδιασμός, προνόμια και φροντίδα μέχρι την απογείωση"
        height="tall"
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Τι είναι το VIP Honeymoon Experience;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>{ANSWER}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2">
          {BLOCKS.map((block) => (
            <article key={block.title} className="border border-brand-teal/20 bg-white/70">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="px-6 py-6">
                <h3 className="font-display text-xl tracking-wide text-brand-ink">
                  {block.title}
                </h3>
                <p className="mt-3 text-brand-ink/70">{block.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqList faqs={FAQS} />

      <CtaSection
        title="Είναι για εσάς;"
        body="Αν αναγνωρίζετε έστω μία ανησυχία — λάθος δωμάτιο, ασαφής ασφάλεια, έτοιμο πακέτο — γράψτε μας. Θα σας πούμε ειλικρινά αν το VIP προσθέτει κάτι ή αν φτάνει ο απλός σχεδιασμός."
      />
    </>
  );
}
