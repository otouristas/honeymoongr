import type { Metadata } from "next";
import RegionTemplate from "@/components/templates/RegionTemplate";
import { regionsBySlug } from "@/content/regions";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

const region = regionsBySlug["indian-ocean"];

export const metadata: Metadata = buildMetadata({
  title: "Γαμήλιο ταξίδι στον Ινδικό Ωκεανό",
  description: clampDescription(region.answer),
  pathname: routes.region(region.slug),
  image: region.heroImage,
});

export default function Page() {
  return <RegionTemplate region={region} />;
}
