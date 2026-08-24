import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

type LogoProps = {
  variant?: "wordmark" | "icon" | "footer";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "wordmark",
  className = "",
  priority = false,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <Link href="/" className={`inline-block shrink-0 ${className}`} aria-label={site.name}>
        <Image
          src={site.assets.icon}
          alt=""
          width={72}
          height={72}
          priority={priority}
          className="h-8 w-8 object-contain"
        />
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link href="/" className={`inline-block ${className}`} aria-label={site.name}>
        <Image
          src={site.assets.footerLogo}
          alt={site.name}
          width={276}
          height={300}
          className="mx-auto h-[76px] w-auto object-contain md:h-24"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-block ${className}`} aria-label={site.name}>
      <Image
        src={site.assets.wordmark}
        alt={site.name}
        width={276}
        height={300}
        priority={priority}
        className="mx-auto h-14 w-auto max-h-14 object-contain md:h-[76px] md:max-h-[76px]"
      />
    </Link>
  );
}

export function Diamond({
  className = "",
  align = "center",
}: {
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <Image
      src={site.assets.flower}
      alt=""
      width={300}
      height={72}
      className={`${align === "center" ? "mx-auto" : "mr-auto"} h-5 w-auto object-contain md:h-6 ${className}`}
    />
  );
}
