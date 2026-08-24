import type { Metadata } from "next";
import CtaSection from "@/components/CtaSection";
import QuizPage from "@/components/QuizPage";
import { QUIZ_DESTINATION_CARDS } from "@/content/quiz-cards";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Σχεδιάζεις γαμήλιο ταξίδι; | Quiz 2 λεπτών",
  description:
    "Πέντε ερωτήσεις που δείχνουν ποιοι προορισμοί ταιριάζουν στον τρόπο που ταξιδεύετε. Χωρίς email για να δείτε το αποτέλεσμα.",
  pathname: routes.quiz,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Quiz σχεδιασμού", href: routes.quiz },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />
      <Breadcrumbs trail={trail} />
      <QuizPage destinationCards={QUIZ_DESTINATION_CARDS} />
      <CtaSection
        title="Προτιμάτε απλώς να μιλήσουμε;"
        body="Παραλείψτε το quiz. Είκοσι λεπτά σε μία κλήση φτάνουν πιο μακριά από οποιαδήποτε πολλαπλή επιλογή."
      />
    </>
  );
}
