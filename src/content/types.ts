export type FaqItem = {
  question: string;
  answer: string;
};

export type Planner = {
  name: string;
  jobTitle: string;
  credential: string;
  yearsExperience: number;
  languages: string[];
  bio: string[];
  portrait: string;
  sameAs: string[];
};

export type RegionSlug =
  | "indian-ocean"
  | "southeast-asia"
  | "caribbean"
  | "polynesia"
  | "north-africa";

export type Region = {
  slug: RegionSlug;
  title: string;
  navLabel: string;
  tagline: string;
  answer: string;
  intro: string[];
  heroImage: string;
  gallery: string[];
  gettingThere: string;
  bestMonths: string;
  faqs: FaqItem[];
  updatedAt: string;
};

export type StayArea = {
  name: string;
  note: string;
};

export type StayType = {
  label: string;
  note: string;
};

export type ArcDay = {
  day: string;
  title: string;
  body: string;
};

export type Pairing = {
  slug: string;
  note: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: RegionSlug;
  eyebrow: string;
  answer: string;
  bestFor: string;
  notFor: string;
  nights: string;
  bestMonths: string;
  budget: string;
  plannerNote: string;
  lastWalked: string;
  intro: string[];
  bases: StayArea[];
  stays: StayType[];
  arc: ArcDay[];
  pairings: Pairing[];
  flightsFromAthens: string;
  visa: string;
  crowds: string;
  climate: string;
  faqs: FaqItem[];
  heroImage: string;
  gallery: string[];
  plannerType: string;
  updatedAt: string;
};

export type GuideSection = {
  heading: string;
  answer: string;
  body: string[];
};

export type Guide = {
  slug: string;
  title: string;
  answer: string;
  intro: string[];
  sections: GuideSection[];
  faqs: FaqItem[];
  heroImage: string;
  updatedAt: string;
};

export type CompareColumn = {
  destinationSlug: string;
  name: string;
  verdict: string;
  points: string[];
  image: string;
};

export type ComparePair = {
  slug: string;
  title: string;
  answer: string;
  intro: string[];
  left: CompareColumn;
  right: CompareColumn;
  table: { label: string; left: string; right: string }[];
  chooseLeftIf: string[];
  chooseRightIf: string[];
  faqs: FaqItem[];
  updatedAt: string;
};

export type Audience = {
  slug: string;
  title: string;
  tagline: string;
  answer: string;
  intro: string[];
  concerns: { title: string; body: string }[];
  destinations: string[];
  faqs: FaqItem[];
  heroImage: string;
  updatedAt: string;
};

export type PlannerType = {
  slug: string;
  title: string;
  summary: string;
  answer: string;
  essay: string[];
  strengths: string[];
  watchOuts: string[];
  howWeWork: string[];
  destinations: string[];
  heroImage: string;
  updatedAt: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string;
  heroImage: string;
  destinations: string[];
  updatedAt: string;
};

export type CoupleStory = {
  slug: string;
  couple: string;
  from: string;
  year: string;
  destinations: string[];
  headline: string;
  quote: string;
  body: string[];
  heroImage: string;
  updatedAt: string;
};
