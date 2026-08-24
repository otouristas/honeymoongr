import Link from "next/link";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-black/10 bg-white text-brand-ink md:hidden">
      <a
        href={SITE.phoneHref}
        className="py-3.5 text-center font-nav text-[11px] uppercase tracking-[0.24em]"
      >
        Καλέστε την Αγγελική
      </a>
      <Link
        href={routes.contact}
        className="border-l border-black/10 bg-brand-teal py-3.5 text-center font-nav text-[11px] uppercase tracking-[0.24em] text-white"
      >
        Ξεκινήστε
      </Link>
    </div>
  );
}
