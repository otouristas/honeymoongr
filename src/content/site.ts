import { IMAGES } from "./images";

export const SITE = {
  name: "myHoneymoon",
  tagline: "Σχεδιάζουμε το δικό σας γαμήλιο ταξίδι",
  domain: "https://www.myhoneymoon.gr",
  phoneDisplay: "+30 210 323 2522",
  phoneHref: "tel:+302103232522",
  whatsapp: "https://wa.me/302103232522",
  email: "welcome@myhoneymoon.gr",
  bookingUrl:
    "https://hello.dubsado.com/public/appointment-scheduler/5fff437b8bddf5a13954fb37/schedule",
  formUrl: "https://hello.dubsado.com/public/form/view/613854099c40aa3444c4a798",
  facebook: "https://www.facebook.com/DesignMyHoneymoon/",
  instagram: "https://www.instagram.com/designmyhoneymoon/",
  pinterest: "https://www.pinterest.com/designmyhoneymoon/",
  icon: IMAGES.logoIcon,
  address: {
    locality: "Αθήνα",
    region: "Αττική",
    country: "GR",
  },
  assets: {
    logoWordmark: IMAGES.logoWordmark,
    logoIcon: IMAGES.logoIcon,
    diamond: IMAGES.flower,
    pattern: IMAGES.pattern,
    footerLogo: IMAGES.footerLogo,
    hero: IMAGES.heroes.home,
  },
} as const;

export const site = {
  name: SITE.name,
  tagline: SITE.tagline,
  phone: SITE.phoneDisplay,
  phoneTel: SITE.phoneHref.replace("tel:", ""),
  email: SITE.email,
  socials: {
    facebook: SITE.facebook,
    instagram: SITE.instagram,
    pinterest: SITE.pinterest,
  },
  assets: {
    wordmark: SITE.assets.logoWordmark,
    icon: SITE.assets.logoIcon,
    diamond: SITE.assets.diamond,
    flower: IMAGES.flower,
    pattern: SITE.assets.pattern,
    footerLogo: SITE.assets.footerLogo,
    hero: SITE.assets.hero,
  },
};

export type NavItem = { href: string; label: string };

export const PRIMARY_NAV: NavItem[] = [
  { href: "/proorismoi", label: "Προορισμοί" },
  { href: "/gamilio-taxidi", label: "Σχεδιασμός" },
  { href: "/guides", label: "Οδηγοί" },
  { href: "/journal", label: "Journal" },
  { href: "/vip", label: "VIP Experience" },
  { href: "/about-us", label: "Η ομάδα" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];

export const DESTINATION_NAV: NavItem[] = [
  { href: "/indian-ocean", label: "Ινδικός Ωκεανός" },
  { href: "/southeast-asia", label: "ΝΑ Ασία" },
  { href: "/caribbean", label: "Καραϊβική" },
  { href: "/polynesia", label: "Πολυνησία" },
  { href: "/north-africa", label: "Βόρεια Αφρική" },
];

export const UTILITY_NAV: NavItem[] = [
  { href: "/sxediazeis-gamilio-taxidi", label: "Quiz σχεδιασμού" },
  { href: "/gia", label: "Για εσάς" },
  { href: "/faq", label: "Ερωτήσεις" },
  { href: "/stories", label: "Ταξίδεψαν μαζί μας" },
];

export const LEGAL_NAV: NavItem[] = [
  { href: "/privacy", label: "Απόρρητο" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Όροι" },
];

export const PLANNING_STEPS = [
  {
    step: "01",
    title: "Γνωριμία",
    body: "Ένα βιντεοκάλ με την Αγγελική. Μιλάμε για το πώς ταξιδεύετε μαζί, όχι για πακέτα.",
  },
  {
    step: "02",
    title: "Σχεδιασμός",
    body: "Προορισμός, ρυθμός, διαμονές και εμπειρίες — γραμμένα για εσάς, όχι από κατάλογο.",
  },
  {
    step: "03",
    title: "Επεξεργασία",
    body: "Διαβάζετε το πλάνο μαζί. Αλλάζουμε ό,τι δεν σας κάθεται σωστά, μέχρι να κάθεται.",
  },
  {
    step: "04",
    title: "Αναχώρηση",
    body: "Πτήσεις, μεταφορές, κρατήσεις, εκπλήξεις. Εσείς απλώς φτάνετε.",
  },
];
