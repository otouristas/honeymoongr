import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationTemplate from "@/components/templates/DestinationTemplate";
import { DESTINATIONS, getDestination } from "@/content/destinations";
import { routes } from "@/lib/paths";
import { buildMetadata, clampDescription } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};

  return buildMetadata({
    title: `Γαμήλιο ταξίδι: ${destination.name} | Πού να μείνετε, πόσες νύχτες, πότε`,
    description: clampDescription(destination.answer),
    pathname: routes.destination(destination.slug),
    image: destination.heroImage,
    modifiedTime: destination.updatedAt,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  return <DestinationTemplate destination={destination} />;
}
