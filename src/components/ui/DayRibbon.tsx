import type { ArcDay } from "@/content/types";

export default function DayRibbon({
  days,
  title,
}: {
  days: ArcDay[];
  title?: string;
}) {
  if (!days.length) return null;

  return (
    <div className="mx-auto max-w-3xl">
      {title ? (
        <h2 className="text-center font-display text-3xl tracking-[0.05em] text-brand-ink md:text-4xl">
          {title}
        </h2>
      ) : null}
      <ol className="mt-10 border-l border-brand-teal/30 pl-6 md:pl-10">
        {days.map((day) => (
          <li key={day.day} className="relative pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[1.7rem] top-2 h-2 w-2 rotate-45 bg-brand-teal md:-left-[2.7rem]"
            />
            <p className="font-display text-xs uppercase tracking-[0.28em] text-brand-teal">
              {day.day}
            </p>
            <h3 className="mt-2 font-display text-xl tracking-wide text-brand-ink">
              {day.title}
            </h3>
            <p className="mt-2 text-brand-ink/70">{day.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
