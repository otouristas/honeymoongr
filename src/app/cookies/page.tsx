import type { Metadata } from "next";
import LegalTemplate from "@/components/templates/LegalTemplate";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

const UPDATED = "2026-08-01";

export const metadata: Metadata = buildMetadata({
  title: "Πολιτική cookies",
  description:
    "Ποια cookies και παρόμοιες τεχνολογίες χρησιμοποιεί αυτός ο ιστότοπος, τι κάνει το καθένα, και πώς τα απενεργοποιείτε.",
  pathname: routes.cookies,
});

export default function Page() {
  return (
    <LegalTemplate
      title="Πολιτική cookies"
      intro="Ο ιστότοπος τρέχει με λίγα. Εδώ είναι ακριβώς τι αποθηκεύεται στη συσκευή σας και γιατί."
      updatedAt={UPDATED}
      pathname={routes.cookies}
      sections={[
        {
          heading: "Τι είναι ένα cookie",
          body: [
            "Ένα cookie είναι μικρό αρχείο κειμένου που ζητά ένας ιστότοπος από τον φυλλομετρητή να κρατήσει. Το local storage και το session storage, από την πλευρά σας, κάνουν το ίδιο: αφήνουν κάτι στη συσκευή ανάμεσα στις σελίδες.",
          ],
        },
        {
          heading: "Τι αποθηκεύουμε",
          body: [
            "Δεν τρέχουμε διαφημιστικά cookies, cross-site trackers ή social pixels. Αποθηκεύουμε:",
          ],
          bullets: [
            "Session storage για το quiz σχεδιασμού. Όταν τελειώσετε, το αποτέλεσμα μένει στο session storage του φυλλομετρητή ώστε να το ξαναδείτε αν επιστρέψετε. Δεν φεύγει από τη συσκευή και σβήνει όταν κλείνετε την καρτέλα.",
            "Απαραίτητα cookies φιλοξενίας. Ο φιλοξενητής μπορεί να θέσει cookie για δρομολόγηση και προστασία από αυτοματοποιημένη κατάχρηση. Δεν φέρουν διαφημιστικά δεδομένα.",
            "Cookies τρίτων σε ενσωματωμένο περιεχόμενο. Αν ακολουθήσετε σύνδεσμο στις σελίδες προγραμματισμού της Dubsado, η Dubsado θέτει cookies στον δικό της τομέα, με τη δική της πολιτική.",
          ],
        },
        {
          heading: "Τι δεν χρησιμοποιούμε",
          body: [
            "Δεν υπάρχει Google Analytics, Meta pixel, remarketing ή εργαλείο A/B testing. Κανείς δεν σας ακολουθά στο διαδίκτυο επειδή διαβάσατε για τις Σεϋχέλλες.",
          ],
        },
        {
          heading: "Πώς τα απενεργοποιείτε",
          body: [
            "Κάθε μεγάλος φυλλομετρητής επιτρέπει αποκλεισμό ή διαγραφή cookies και εκκαθάριση local/session storage, συνήθως στις Ρυθμίσεις και μετά Απόρρητο. Ο αποκλεισμός απαραίτητων cookies μπορεί να σταματήσει μέρη του ιστοτόπου· ο αποκλεισμός του quiz σημαίνει απλώς ότι το αποτέλεσμα δεν θυμάται.",
          ],
        },
        {
          heading: "Ερωτήσεις",
          body: [
            `Αν θέλετε να ξέρετε αν αποθηκεύεται κάτι συγκεκριμένο, ρωτήστε στο ${SITE.email} και θα σας το πούμε καθαρά.`,
          ],
        },
      ]}
    />
  );
}
