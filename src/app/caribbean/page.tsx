import type { Metadata } from "next";
import RegionTemplate from "@/components/templates/RegionTemplate";
import { regionsBySlug } from "@/content/regions";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

const region = regionsBySlug["caribbean"];

export const metadata: Metadata = buildMetadata({
  title: "Γαμήλιο ταξίδι στην Καραϊβική",
  description: clampDescription(region.answer),
  pathname: routes.region(region.slug),
  image: region.heroImage,
});

export default function Page() {
  return <RegionTemplate region={region} />;
}
