import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import AuthorByline from "@/components/ui/AuthorByline";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import PageHero from "@/components/ui/PageHero";
import type { Guide } from "@/content/types";
import { routes } from "@/lib/paths";
import { articleSchema, breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export default function GuideTemplate({ guide }: { guide: Guide }) {
  const pathname = routes.guide(guide.slug);

  const trail = [
    { name: "Αρχική", href: "/" },
    { name: "Οδηγοί", href: routes.guides },
    { name: guide.title, href: pathname },
  ];

  const schema = graph(
    articleSchema({
      headline: guide.title,
      description: guide.answer,
      pathname,
      image: guide.heroImage,
      datePublished: guide.updatedAt,
      dateModified: guide.updatedAt,
    }),
    faqSchema(guide.faqs),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <PageHero
        image={guide.heroImage}
        alt={guide.title}
        eyebrow="Οδηγός"
        title={guide.title}
      />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pt-10 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <AnswerBlock>{guide.answer}</AnswerBlock>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {guide.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-6 pb-12">
        <AuthorByline lastWalked={guide.updatedAt} />
      </div>

      <section className="px-6 pb-8">
        <div className="mx-auto max-w-2xl space-y-14">
          {guide.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
                {section.heading}
              </h2>
              <Diamond className="mt-4" align="left" />
              <div className="mt-5">
                <AnswerBlock align="left">{section.answer}</AnswerBlock>
              </div>
              <div className="mt-5 space-y-4 text-brand-ink/75">
                {section.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FaqList faqs={guide.faqs} />

      <CtaSection
        title="Ακόμη αποφασίζετε;"
        body="Είκοσι λεπτά σε μία κλήση απαντούν περισσότερα από ένα απόγευμα διαβάσματος. Χωρίς υποχρέωση."
      />
    </>
  );
}
