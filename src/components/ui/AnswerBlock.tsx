/**
 * The extractable answer that sits directly beneath a question-shaped heading.
 * Keep the text under roughly 40 words; elaboration belongs after it, not inside.
 */
export default function AnswerBlock({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <p
      className={`mx-auto max-w-2xl border-l-2 border-brand-teal/50 bg-white/60 py-3 pl-5 pr-4 font-body text-lg leading-relaxed text-brand-ink ${
        align === "center" ? "text-left md:text-center md:border-l-0 md:border-t-2 md:pl-4 md:pt-5" : "text-left"
      }`}
    >
      {children}
    </p>
  );
}
