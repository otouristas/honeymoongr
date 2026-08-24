import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideTemplate from "@/components/templates/GuideTemplate";
import { GUIDES, guidesBySlug } from "@/content/guides";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  if (!guide) return {};

  return buildMetadata({
    title: guide.title,
    description: clampDescription(guide.answer),
    pathname: routes.guide(guide.slug),
    image: guide.heroImage,
    type: "article",
    publishedTime: guide.updatedAt,
    modifiedTime: guide.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  if (!guide) notFound();

  return <GuideTemplate guide={guide} />;
}
