import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompareTemplate from "@/components/templates/CompareTemplate";
import { COMPARES, comparesBySlug } from "@/content/compares";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ pair: string }> };

export function generateStaticParams() {
  return COMPARES.map((c) => ({ pair: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { pair } = await params;
  const compare = comparesBySlug[pair];
  if (!compare) return {};

  return buildMetadata({
    title: `${compare.title} Ειλικρινής σύγκριση`,
    description: clampDescription(compare.answer),
    pathname: routes.compare(compare.slug),
    image: compare.left.image,
    type: "article",
    publishedTime: compare.updatedAt,
    modifiedTime: compare.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { pair } = await params;
  const compare = comparesBySlug[pair];
  if (!compare) notFound();

  return <CompareTemplate pair={compare} />;
}
