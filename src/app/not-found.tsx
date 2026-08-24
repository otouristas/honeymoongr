import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export default function NotFound() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">404</p>
        <h1 className="mt-4 font-display text-4xl">Η σελίδα δεν βρέθηκε</h1>
        <p className="mt-4 max-w-md text-muted">
          Η σελίδα δεν υπάρχει ή μετακινήθηκε. Δοκιμάστε την αρχική ή τους προορισμούς.
        </p>
        <Link href="/" className="btn-ghost mt-8">
          Επιστροφή στην αρχική
        </Link>
      </section>
      <CtaSection />
    </>
  );
}
