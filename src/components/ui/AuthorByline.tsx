import Image from "next/image";
import Link from "next/link";
import { PLANNER } from "@/content/planner";
import { routes } from "@/lib/paths";

export default function AuthorByline({
  note,
  lastWalked,
}: {
  note?: string;
  lastWalked?: string;
}) {
  return (
    <aside className="mx-auto flex max-w-2xl flex-col items-center gap-5 border-y border-brand-teal/15 px-6 py-8 text-center sm:flex-row sm:text-left">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
        <Image
          src={PLANNER.portrait}
          alt={`${PLANNER.name}, σχεδιάστρια γαμήλιων ταξιδιών`}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div>
        <p className="font-display text-sm uppercase tracking-[0.22em] text-brand-teal">
          {PLANNER.name}
        </p>
        <p className="mt-1 text-sm text-brand-ink/60">
          {PLANNER.credential} · {PLANNER.yearsExperience}+ χρόνια
        </p>
        {note ? <p className="mt-3 italic text-brand-ink/75">&ldquo;{note}&rdquo;</p> : null}
        {lastWalked ? (
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-brand-ink/45">
            Τελευταία επίσκεψη: {lastWalked}
          </p>
        ) : null}
        <Link
          href={routes.about}
          className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-brand-teal hover:underline"
        >
          Γνωρίστε τη σχεδιάστρια
        </Link>
      </div>
    </aside>
  );
}
