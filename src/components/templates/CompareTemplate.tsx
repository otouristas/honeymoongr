import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import CtaSection from "@/components/CtaSection";
import AnswerBlock from "@/components/ui/AnswerBlock";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqList from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import type { ComparePair } from "@/content/types";
import { routes } from "@/lib/paths";
import { articleSchema, breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

function Column({
  column,
  side,
}: {
  column: ComparePair["left"];
  side: "left" | "right";
}) {
  return (
    <div className={side === "right" ? "md:border-l md:border-brand-teal/15 md:pl-10" : "md:pr-10"}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={column.image}
          alt={column.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h2 className="mt-6 font-display text-3xl tracking-[0.05em] text-brand-ink">
        {column.name}
      </h2>
      <p className="mt-2 font-script text-2xl text-brand-teal">{column.verdict}</p>
      <ul className="mt-5 space-y-2.5">
        {column.points.map((point) => (
          <li key={point} className="flex gap-3 text-brand-ink/75">
            <span
              aria-hidden
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
            />
            {point}
          </li>
        ))}
      </ul>
      <Link
        href={routes.destination(column.destinationSlug)}
        className="btn-ghost mt-7 inline-block"
      >
        Η σελίδα {column.name}
      </Link>
    </div>
  );
}

export default function CompareTemplate({ pair }: { pair: ComparePair }) {
  const pathname = routes.compare(pair.slug);

  const trail = [
    { name: "Αρχική", href: "/" },
    { name: "Οδηγοί", href: routes.guides },
    { name: pair.title, href: pathname },
  ];

  const schema = graph(
    articleSchema({
      headline: pair.title,
      description: pair.answer,
      pathname,
      image: pair.left.image,
      datePublished: pair.updatedAt,
      dateModified: pair.updatedAt,
    }),
    faqSchema(pair.faqs),
    breadcrumbSchema(trail),
  );

  return (
    <>
      <JsonLd data={schema} />

      <Breadcrumbs trail={trail} />

      <section className="px-6 pb-6 pt-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-ink/45">
            Σύγκριση
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-[0.05em] text-brand-ink md:text-5xl">
            {pair.title}
          </h1>
          <Diamond className="mt-5" />
          <div className="mt-7">
            <AnswerBlock>{pair.answer}</AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          {pair.intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-0">
          <Column column={pair.left} side="left" />
          <Column column={pair.right} side="right" />
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            Δίπλα-δίπλα
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                {pair.left.name} σε σύγκριση με {pair.right.name}
              </caption>
              <thead>
                <tr className="border-b border-brand-teal/25">
                  <th scope="col" className="py-3 pr-4 font-display text-[11px] uppercase tracking-[0.2em] text-brand-ink/45">
                    &nbsp;
                  </th>
                  <th scope="col" className="py-3 pr-4 font-display text-base tracking-wide text-brand-ink">
                    {pair.left.name}
                  </th>
                  <th scope="col" className="py-3 font-display text-base tracking-wide text-brand-ink">
                    {pair.right.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pair.table.map((row) => (
                  <tr key={row.label} className="border-b border-brand-teal/15 align-top">
                    <th
                      scope="row"
                      className="py-4 pr-4 font-display text-[11px] font-normal uppercase tracking-[0.18em] text-brand-teal"
                    >
                      {row.label}
                    </th>
                    <td className="py-4 pr-4 text-sm text-brand-ink/75">{row.left}</td>
                    <td className="py-4 text-sm text-brand-ink/75">{row.right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink">
              Διαλέξτε {pair.left.name} αν…
            </h2>
            <ul className="mt-5 space-y-2.5">
              {pair.chooseLeftIf.map((item) => (
                <li key={item} className="flex gap-3 text-brand-ink/75">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink">
              Διαλέξτε {pair.right.name} αν…
            </h2>
            <ul className="mt-5 space-y-2.5">
              {pair.chooseRightIf.map((item) => (
                <li key={item} className="flex gap-3 text-brand-ink/75">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-teal"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqList faqs={pair.faqs} />

      <CtaSection
        title="Ή αφήστε μας να διαλέξουμε"
        body="Λίγες ερωτήσεις αρκούν για να σας πούμε ποιος από τους δύο σας ταιριάζει — και αν ένας τρίτος προορισμός είναι καλύτερος και από τους δύο."
      />
    </>
  );
}
