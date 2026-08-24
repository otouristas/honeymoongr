import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JournalTemplate from "@/components/templates/JournalTemplate";
import { JOURNAL, journalBySlug } from "@/content/journal";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return JOURNAL.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = journalBySlug[slug];
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: clampDescription(post.excerpt),
    pathname: routes.journalPost(post.slug),
    image: post.heroImage,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const post = journalBySlug[slug];
  if (!post) notFound();

  return <JournalTemplate post={post} />;
}
