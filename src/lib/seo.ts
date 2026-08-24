import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { absoluteUrl, path } from "./paths";

type BuildMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  pathname,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(path(pathname));
  const ogImage = image ?? SITE.assets.hero;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: "el_GR",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function clampDescription(text: string, max = 158): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}
