import type { Metadata } from "next";
import PlannerTypeTemplate from "@/components/templates/PlannerTypeTemplate";
import { plannerTypesBySlug } from "@/content/quiz";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

const type = plannerTypesBySlug["oramatistis"];

export const metadata: Metadata = buildMetadata({
  title: `${type.title} | Τύπος σχεδιασμού γαμήλιου ταξιδιού`,
  description: clampDescription(type.answer),
  pathname: routes.plannerType(type.slug),
  image: type.heroImage,
  type: "article",
  modifiedTime: type.updatedAt,
});

export default function Page() {
  return <PlannerTypeTemplate type={type} />;
}
