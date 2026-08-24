import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AudienceTemplate from "@/components/templates/AudienceTemplate";
import { AUDIENCES, audiencesBySlug } from "@/content/audiences";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return AUDIENCES.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const audience = audiencesBySlug[slug];
  if (!audience) return {};

  return buildMetadata({
    title: audience.title,
    description: clampDescription(audience.answer),
    pathname: routes.audience(audience.slug),
    image: audience.heroImage,
    modifiedTime: audience.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const audience = audiencesBySlug[slug];
  if (!audience) notFound();

  return <AudienceTemplate audience={audience} />;
}
