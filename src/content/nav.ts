import { routes } from "@/lib/paths";
import { COMPARES } from "./compares";
import { DESTINATIONS } from "./destinations";
import { ALL_FAQS } from "./faq";
import { GUIDES } from "./guides";
import { JOURNAL } from "./journal";
import { PLANNER } from "./planner";
import { REGIONS } from "./regions";
import { PLANNING_STEPS } from "./site";

export type MenuLink = {
  href: string;
  label: string;
  badge?: string;
  accent?: boolean;
  hint?: string;
};

export type SiteMenuModel = {
  primary: MenuLink[];
  regions: MenuLink[];
  destinations: MenuLink[];
  utility: MenuLink[];
  proof: string[];
};

const FEATURED = [
  "maldives",
  "seychelles",
  "bali",
  "mauritius",
  "thailand",
  "morocco",
  "zanzibar",
  "caribbean",
];

function destinationsIn(regionSlug: string): number {
  return DESTINATIONS.filter((d) => d.region === regionSlug).length;
}

export const SITE_MENU: SiteMenuModel = {
  primary: [
    {
      href: routes.destinations,
      label: "Προορισμοί",
      badge: `${DESTINATIONS.length} μέρη`,
      hint: "Εννέα προορισμοί, πέντε περιοχές",
    },
    {
      href: routes.planning,
      label: "Σχεδιασμός",
      badge: `${PLANNING_STEPS.length} βήματα`,
      hint: "Πώς δουλεύουμε, χωρίς πακέτα",
    },
    {
      href: routes.guides,
      label: "Οδηγοί",
      badge: `${GUIDES.length + COMPARES.length} απαντήσεις`,
      hint: "Κόστος, πτήσεις, συγκρίσεις",
    },
    {
      href: routes.journal,
      label: "Journal",
      badge: `${JOURNAL.length} κείμενα`,
      hint: "Γνώμη, όχι κατάλογος",
    },
    {
      href: routes.vip,
      label: "VIP Experience",
      badge: "Club",
      hint: "Εργαλεία, προνόμια, registry",
    },
    {
      href: routes.about,
      label: "Η ομάδα",
      badge: PLANNER.name,
      hint: `${PLANNER.yearsExperience}+ χρόνια`,
    },
    {
      href: routes.contact,
      label: "Επικοινωνία",
      badge: "Απάντηση σε 1 ημέρα",
      accent: true,
      hint: "Ημερομηνίες και δύο προτάσεις",
    },
  ],

  regions: REGIONS.map((region) => ({
    href: routes.region(region.slug),
    label: region.navLabel,
    badge: `${destinationsIn(region.slug)}`,
    hint: region.tagline,
  })),

  destinations: FEATURED.map((slug) => {
    const dest = DESTINATIONS.find((d) => d.slug === slug);
    return {
      href: routes.destination(slug),
      label: dest?.name ?? slug,
    };
  }).filter((link) => link.label),

  utility: [
    {
      href: routes.quiz,
      label: "Quiz σχεδιασμού",
      badge: "2 λεπτά",
      accent: true,
      hint: "Ποιος από τους τέσσερις τύπους είστε;",
    },
    {
      href: routes.audiences,
      label: "Για εσάς",
      badge: "6 αφετηρίες",
      hint: "Καλοκαιρινοί γάμοι, last minute, LGBTQ+",
    },
    {
      href: routes.faq,
      label: "Ερωτήσεις",
      badge: `${ALL_FAQS.length}`,
      hint: "Όσα ρωτούν τα ζευγάρια",
    },
    {
      href: routes.stories,
      label: "Ταξίδεψαν μαζί μας",
      hint: "Λόγια από πραγματικά ταξίδια",
    },
  ],

  proof: ["Από την Αθήνα", `${PLANNER.yearsExperience}+ χρόνια`, "Χωρίς πακέτα"],
};
