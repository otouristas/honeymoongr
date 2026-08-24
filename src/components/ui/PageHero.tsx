import Image from "next/image";
import { Diamond } from "@/components/Logo";

type Height = "tall" | "standard" | "short";

const HEIGHTS: Record<Height, string> = {
  tall: "h-[72vh] min-h-[420px] md:h-[82vh]",
  standard: "h-[56vh] min-h-[360px]",
  short: "h-[42vh] min-h-[280px]",
};

export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  height = "standard",
  overlay = true,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  height?: Height;
  overlay?: boolean;
}) {
  const hasCaption = Boolean(eyebrow || title || subtitle);

  return (
    <section className={`relative w-full overflow-hidden ${HEIGHTS[height]}`}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="scale-105 object-cover object-center animate-[fade-up_1.4s_ease-out]"
        sizes="100vw"
      />
      {overlay && hasCaption ? (
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/25 via-transparent to-brand-ink/45" />
      ) : null}
      {hasCaption ? (
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-12 text-center text-white md:pb-16">
          {eyebrow ? (
            <p className="animate-fade-up font-display text-[11px] uppercase tracking-[0.35em] text-white/85">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h1 className="animate-fade-up-delay mt-3 font-display text-4xl tracking-[0.06em] text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
          ) : null}
          <Diamond className="animate-fade-up-delay-2 mt-5 brightness-0 invert" />
          {subtitle ? (
            <p className="animate-fade-up-delay-2 mt-4 max-w-xl font-body text-base text-white/90 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
