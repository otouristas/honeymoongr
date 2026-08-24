import Link from "next/link";

export type Crumb = { name: string; href: string };

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="px-6 pt-6">
      <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.18em] text-brand-ink/45">
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-brand-ink/70">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-brand-teal">
                  {crumb.name}
                </Link>
              )}
              {!isLast ? <span aria-hidden>·</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
