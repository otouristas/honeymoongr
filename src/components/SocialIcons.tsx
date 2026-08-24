type SocialIconsProps = {
  facebook: string;
  instagram: string;
  className?: string;
};

export function SocialIcons({ facebook, instagram, className = "" }: SocialIconsProps) {
  return (
    <div className="flex gap-3">
      <a
        href={facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className={`rounded-full border p-2 transition ${className}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
        </svg>
      </a>
      <a
        href={instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className={`rounded-full border p-2 transition ${className}`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      </a>
    </div>
  );
}
