import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "1";

export default function robots(): MetadataRoute.Robots {
  if (NOINDEX) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/efharisto"] },
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
    host: SITE.domain,
  };
}
