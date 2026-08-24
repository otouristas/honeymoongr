import Image from "next/image";
import { Diamond } from "@/components/Logo";

export default function MagazineSpread({
  image,
  alt,
  caption,
  eyebrow,
  title,
  children,
  flip = false,
  tone = "plain",
}: {
  image: string;
  alt: string;
  caption?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  flip?: boolean;
  tone?: "plain" | "cream";
}) {
  return (
    <section
      className={
        tone === "cream"
          ? "pattern-bg border-y border-brand-teal/10 px-6 py-16 md:py-20"
          : "px-6 py-16 md:py-20"
      }
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <figure className={flip ? "md:order-2" : ""}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {caption ? (
            <figcaption className="mt-3 font-script text-2xl text-brand-teal">
              {caption}
            </figcaption>
          ) : null}
        </figure>

        <div className={flip ? "md:order-1" : ""}>
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.28em] text-brand-ink/45">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
            {title}
          </h2>
          <Diamond className="mt-4" align="left" />
          <div className="mt-6 space-y-5 text-brand-ink/75">{children}</div>
        </div>
      </div>
    </section>
  );
}
