import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StoryTemplate from "@/components/templates/StoryTemplate";
import { STORIES, storiesBySlug } from "@/content/stories";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const story = storiesBySlug[slug];
  if (!story) return {};

  return buildMetadata({
    title: `${story.couple} — ${story.headline}`,
    description: clampDescription(story.quote),
    pathname: routes.story(story.slug),
    image: story.heroImage,
    type: "article",
    modifiedTime: story.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const story = storiesBySlug[slug];
  if (!story) notFound();

  return <StoryTemplate story={story} />;
}
