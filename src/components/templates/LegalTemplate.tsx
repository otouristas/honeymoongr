import { Diamond } from "@/components/Logo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { formatDate } from "@/lib/prose";
import { breadcrumbSchema, graph } from "@/lib/schema";

export type LegalSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export default function LegalTemplate({
  title,
  intro,
  updatedAt,
  pathname,
  sections,
}: {
  title: string;
  intro: string;
  updatedAt: string;
  pathname: string;
  sections: LegalSection[];
}) {
  const trail = [
    { name: "Αρχική", href: "/" },
    { name: title, href: pathname },
  ];

  return (
    <>
      <JsonLd data={graph(breadcrumbSchema(trail))} />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-10 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl tracking-[0.05em] text-brand-ink md:text-5xl">
            {title}
          </h1>
          <Diamond className="mt-5" />
          <p className="mx-auto mt-6 max-w-xl text-brand-ink/70">{intro}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-brand-ink/40">
            Τελευταία ενημέρωση {formatDate(updatedAt)}
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-2xl space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl tracking-[0.04em] text-brand-ink">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-brand-ink/75">
                {section.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-brand-ink/75">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
