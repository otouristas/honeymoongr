import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import HomePage, { HOME_FAQS } from "@/components/HomePage";
import { JsonLd } from "@/components/ui/JsonLd";
import { IMAGES } from "@/content/images";
import { faqSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Σχεδιασμός γαμήλιου ταξιδιού | myHoneymoon",
  description:
    "Εξατομικευμένα γαμήλια ταξίδια για ελληνικά ζευγάρια — Μαλδίβες, Μπαλί, Σεϋχέλλες και άλλοι προορισμοί. Χωρίς πακέτα, με ειλικρίνεια για κόστος και πτήσεις από Αθήνα.",
  pathname: "/",
  image: IMAGES.heroes.home,
});

export default function Page() {
  return (
    <>
      <JsonLd data={graph(faqSchema(HOME_FAQS))} />
      <HomePage />
      <CtaSection
        title="Ας σχεδιάσουμε το δικό σας"
        body="Πείτε μας τις ημερομηνίες και πώς θέλετε να νιώθουν οι μέρες. Η Αγγελική απαντά εντός μίας εργάσιμης ημέρας."
      />
    </>
  );
}
