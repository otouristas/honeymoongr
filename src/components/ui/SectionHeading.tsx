import { Diamond } from "@/components/Logo";

export default function SectionHeading({
  eyebrow,
  title,
  script,
  intro,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  script?: string;
  intro?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 text-center">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.28em] text-brand-ink/45">{eyebrow}</p>
      ) : null}
      {script ? (
        <p className="font-script text-4xl text-brand-teal md:text-5xl">{script}</p>
      ) : null}
      <Tag className="mt-3 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
        {title}
      </Tag>
      <Diamond className="mt-4" />
      {intro ? <p className="mt-6 text-brand-ink/70">{intro}</p> : null}
    </div>
  );
}
