import type { Metadata } from "next";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ευχαριστούμε",
  description: "Το μήνυμά σας έφτασε στην Αγγελική. Δείτε τι ακολουθεί.",
  pathname: routes.thankYou,
  noIndex: true,
});

const trail = [
  { name: "Αρχική", href: "/" },
  { name: "Ευχαριστούμε", href: routes.thankYou },
];

const NEXT = [
  {
    step: "01",
    title: "Απάντηση εντός μίας εργάσιμης ημέρας",
    body: "Από την Αγγελική, όχι από αυτόματο μήνυμα. Θα έχει μία πρώτη ειλικρινή αντίδραση στις ημερομηνίες και στη λίστα σας.",
  },
  {
    step: "02",
    title: "Κλήση γνωριμίας είκοσι λεπτών",
    body: "Ένας εικονικός καφές για να καταλάβουμε τι θέλετε πραγματικά. Τίποτα δεν κοστολογείται πριν από αυτή.",
  },
  {
    step: "03",
    title: "Σχήμα, μετά τιμή",
    body: "Παίρνετε πρώτα τη διαδρομή και τον ρυθμό, ώστε να κρίνετε το ταξίδι και όχι το τιμολόγιο.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <section className="pattern-bg border-b border-brand-teal/10 px-6 py-20 text-center md:py-28">
        <p className="font-script text-5xl text-brand-teal">ευχαριστούμε</p>
        <h1 className="mt-5 font-display text-4xl tracking-[0.05em] text-brand-ink md:text-5xl">
          Το μήνυμα είναι στην Αγγελική
        </h1>
        <Diamond className="mt-5" />
        <p className="mx-auto mt-6 max-w-lg text-brand-ink/70">
          Αν επείγει, καλέστε{" "}
          <a href={SITE.phoneHref} className="text-brand-teal underline underline-offset-4">
            {SITE.phoneDisplay}
          </a>{" "}
          και θα σηκώσει άνθρωπος.
        </p>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            Τι ακολουθεί
          </h2>
          <Diamond className="mt-4" />
          <ol className="mt-10 space-y-8">
            {NEXT.map((item) => (
              <li key={item.step} className="flex gap-6">
                <span className="font-display text-3xl text-brand-teal/45">{item.step}</span>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-brand-ink/70">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16 text-center">
        <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
          Όσο περιμένετε
        </h2>
        <Diamond className="mt-4" />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={routes.destinations} className="btn-ghost">
            Οι προορισμοί
          </Link>
          <Link href={routes.quiz} className="btn-ghost">
            Το quiz
          </Link>
          <Link href={routes.journal} className="btn-ghost">
            Το journal
          </Link>
        </div>
      </section>
    </>
  );
}
