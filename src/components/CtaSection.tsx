import Link from "next/link";
import { SITE } from "@/content/site";
import { Diamond } from "@/components/Logo";
import { routes } from "@/lib/paths";

export default function CtaSection({
  title = "Έτοιμοι να ξεκινήσετε;",
  body = "Ας σχεδιάσουμε μαζί το γαμήλιο ταξίδι σας.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
          {title}
        </h2>
        <Diamond className="mt-4" />
        <p className="mt-6 text-brand-ink/70">{body}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={routes.contact} className="btn-ghost">
            Κλείστε κλήση
          </Link>
          <a href={SITE.phoneHref} className="text-sm text-brand-ink/60 hover:text-brand-teal">
            Ή καλέστε {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
