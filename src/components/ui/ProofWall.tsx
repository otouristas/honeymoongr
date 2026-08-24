import Link from "next/link";
import { Diamond } from "@/components/Logo";
import { STORIES } from "@/content/stories";
import { routes } from "@/lib/paths";

export default function ProofWall({
  title = "λόγια ζευγαριών",
  limit = 2,
}: {
  title?: string;
  limit?: number;
}) {
  const stories = STORIES.slice(0, limit);

  return (
    <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-script text-4xl text-brand-teal md:text-5xl">{title}</h2>
          <Diamond className="mt-4" />
        </div>

        <div className={`mt-12 grid gap-8 ${stories.length > 1 ? "md:grid-cols-2" : ""}`}>
          {stories.map((story) => (
            <figure
              key={story.slug}
              className="flex flex-col border border-brand-teal/20 bg-white/75 px-6 py-8"
            >
              <blockquote className="flex-1 text-brand-ink/75">
                &ldquo;{story.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-brand-teal/15 pt-4">
                <p className="font-display text-base tracking-wide text-brand-ink">
                  {story.couple}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-ink/45">
                  {story.from} · {story.year}
                </p>
                <Link
                  href={routes.story(story.slug)}
                  className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-brand-teal hover:underline"
                >
                  Διαβάστε το ταξίδι
                </Link>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
