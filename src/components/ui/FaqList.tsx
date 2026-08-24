import { Diamond } from "@/components/Logo";
import type { FaqItem } from "@/content/types";

export default function FaqList({
  faqs,
  title = "Ερωτήσεις που κάνουν τα ζευγάρια",
}: {
  faqs: FaqItem[];
  title?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
            {title}
          </h2>
          <Diamond className="mt-4" />
        </div>
        <dl className="mt-10 divide-y divide-brand-teal/15 border-y border-brand-teal/15">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-7">
              <dt className="font-display text-xl leading-snug tracking-wide text-brand-ink">
                {faq.question}
              </dt>
              <dd className="mt-3 text-brand-ink/70">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
