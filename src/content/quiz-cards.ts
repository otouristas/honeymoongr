import { routes } from "@/lib/paths";
import { destinationsBySlug } from "./destinations";
import { PLANNER_TYPES } from "./quiz";

export type QuizDestinationCard = {
  slug: string;
  name: string;
  heroImage: string;
  href: string;
};

const REFERENCED = [...new Set(PLANNER_TYPES.flatMap((type) => type.destinations))];

export const QUIZ_DESTINATION_CARDS: Record<string, QuizDestinationCard> =
  Object.fromEntries(
    REFERENCED.flatMap((slug) => {
      const dest = destinationsBySlug[slug];
      if (!dest) return [];
      return [
        [
          slug,
          {
            slug,
            name: dest.name,
            heroImage: dest.heroImage,
            href: routes.destination(slug),
          },
        ],
      ];
    }),
  );
