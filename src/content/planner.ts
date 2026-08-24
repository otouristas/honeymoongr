import type { Planner } from "./types";
import { IMAGES } from "./images";
import { SITE } from "./site";

export const PLANNER: Planner = {
  name: "Αγγελική",
  jobTitle: "Honeymoon Planner",
  credential: "Σχεδιάστρια γαμήλιων ταξιδιών",
  yearsExperience: 20,
  languages: ["el", "en"],
  portrait: IMAGES.angeliki,
  bio: [
    "Είμαι η Αγγελική. Σχεδιάζω γαμήλια ταξίδια για ελληνικά ζευγάρια που θέλουν κάτι πιο προσωπικό από ένα πακέτο all inclusive — και αρκετά πιο ήσυχο από μια λίστα Pinterest.",
    "Δουλεύω από την Αθήνα, με ζευγάρια που παντρεύονται στην Ελλάδα και φεύγουν για Μαλδίβες, Μπαλί, Σεϋχέλλες, Μαυρίκιο, Καραϊβική, Πολυνησία, Ταϊλάνδη, Μαρόκο ή Ζανζιβάρη. Το επάγγελμα δεν είναι πρόσβαση σε ξενοδοχεία. Είναι να ξέρεις ποιο bungalow βλέπει την αποβάθρα του προσωπικού και ποιο τον ορίζοντα.",
    "Δεν πουλάω πακέτα. Σχεδιάζω το ταξίδι όπως θα το σχεδίαζα για μένα: με ρυθμό, με αλήθεια για το κόστος, και με δύο άδεια απογεύματα που σχεδόν πάντα γίνονται οι αγαπημένες μέρες.",
  ],
  sameAs: [SITE.facebook, SITE.instagram, SITE.pinterest],
};

export const PLANNER_ID = `${SITE.domain}/about-us#angeliki`;
export const ORGANIZATION_ID = `${SITE.domain}/#organization`;
export const WEBSITE_ID = `${SITE.domain}/#website`;
