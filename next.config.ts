import type { NextConfig } from "next";

type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

function redirect(source: string, destination: string): Redirect[] {
  const encoded = source
    .split("/")
    .map((seg) => (seg ? encodeURIComponent(seg) : ""))
    .join("/");
  const items: Redirect[] = [{ source, destination, permanent: true }];
  if (encoded !== source) {
    items.push({ source: encoded, destination, permanent: true });
  }
  return items;
}

const wpRedirects: Redirect[] = [
  ...redirect("/welcome-honeymooners", "/"),
  ...redirect("/γαμήλιο-ταξίδι", "/gamilio-taxidi"),
  ...redirect("/γαμηλιο-ταξιδι", "/gamilio-taxidi"),
  ...redirect("/γαμήλιo-ταξίδι", "/gamilio-taxidi"),
  ...redirect("/ιδανικοί-προορισμοί", "/proorismoi"),
  ...redirect("/ιδανικοι-προορισμοι", "/proorismoi"),
  ...redirect("/επικοινωνία", "/epikoinonia"),
  ...redirect("/επικοινωνια", "/epikoinonia"),
  ...redirect("/ταξίδεψαν-μαζί-μας", "/stories"),
  ...redirect("/ταξιδεψαν-μαζι-μας", "/stories"),
  ...redirect("/my-vip-honeymoon-experience", "/vip"),
  ...redirect("/honeymoon-journal", "/journal"),
  ...redirect("/blog", "/journal"),
  { source: "/blog/:slug", destination: "/journal/:slug", permanent: true },
  ...redirect("/blog-full-post", "/journal"),
  ...redirect("/thank-you", "/efharisto"),
  ...redirect("/quiz-results", "/sxediazeis-gamilio-taxidi"),
  ...redirect("/honeymoon-contest-new-life-2020", "/"),
  ...redirect("/contest-new-life-2020", "/"),

  ...redirect("/γαμήλιο-ταξίδι-στο-μπαλί", "/gamilio-taxidi/bali"),
  ...redirect("/γαμηλιο-ταξιδι-στο-μπαλι", "/gamilio-taxidi/bali"),
  ...redirect("/γαμήλιο-ταξίδι-στις-μαλδίβες", "/gamilio-taxidi/maldives"),
  ...redirect("/γαμηλιο-ταξιδι-στις-μαλδιβες", "/gamilio-taxidi/maldives"),
  ...redirect("/γαμήλιο-ταξίδι-στις-σεϋχέλλες", "/gamilio-taxidi/seychelles"),
  ...redirect("/γαμηλιο-ταξιδι-στις-σεϋχέλλες", "/gamilio-taxidi/seychelles"),
  ...redirect("/γαμηλιο-ταξιδι-στις-σεϋχελλες", "/gamilio-taxidi/seychelles"),
  ...redirect("/γαμήλιο-ταξίδι-στο-μαϋρίκιο", "/gamilio-taxidi/mauritius"),
  ...redirect("/γαμηλιο-ταξιδι-στο-μαυρικιο", "/gamilio-taxidi/mauritius"),
  ...redirect("/γαμήλιο-ταξίδι-στο-μαρόκο", "/gamilio-taxidi/morocco"),
  ...redirect("/γαμηλιο-ταξιδι-στο-μαροκο", "/gamilio-taxidi/morocco"),
  ...redirect("/γαμήλιο-ταξίδι-στη-ταϊλάνδη", "/gamilio-taxidi/thailand"),
  ...redirect("/γαμηλιο-ταξιδι-στη-ταιλανδη", "/gamilio-taxidi/thailand"),
  ...redirect("/γαμήλιο-ταξίδι-στην-πολυνησία", "/gamilio-taxidi/polynesia"),
  ...redirect("/γαμηλιο-ταξιδι-στην-πολυνησια", "/gamilio-taxidi/polynesia"),
  ...redirect("/γαμήλιο-ταξίδι-στην-καραϊβική", "/gamilio-taxidi/caribbean"),
  ...redirect("/γαμηλιο-ταξιδι-στην-καραιβικη", "/gamilio-taxidi/caribbean"),
  ...redirect("/γαμήλιο-ταξίδι-στη-ζανζιβάρη", "/gamilio-taxidi/zanzibar"),
  ...redirect("/γαμηλιο-ταξιδι-στη-ζανζιβαρη", "/gamilio-taxidi/zanzibar"),

  ...redirect("/σχεδιάζεις-γαμήλιο-ταξίδι-οραματιστ", "/oramatistis"),
  ...redirect("/σχεδιάζεις-γαμήλιο-ταξίδι-προσαρμοσ", "/prosarmostikos"),
  ...redirect("/σχεδιάζεις-γαμήλιο-ταξίδι-λεπτομερή", "/leptomeres"),
  ...redirect("/σχεδιάζεις-γαμήλιο-ταξίδι-αποτελεσμ", "/apotelesmatikos"),

  ...redirect("/gamilio-taxidi-oktovrios", "/journal/gamilio-taxidi-oktovrios"),
  ...redirect("/maldives-mina-tou-melitos", "/journal/maldives-mina-tou-melitos"),
  ...redirect(
    "/honeymoon-travel-style-lovination-types",
    "/journal/honeymoon-travel-style-lovination-types",
  ),
  ...redirect(
    "/pos-na-epilexete-proorismo-gia-mina-tou-melitos",
    "/journal/pos-na-epilexete-proorismo-gia-mina-tou-melitos",
  ),
  ...redirect("/γαμηλιο-ταξιδι-το-μαιο", "/journal/gamilio-taxidi-to-maio"),
  ...redirect("/γαμηλιο-ταξιδι-το-φεβρουαριο", "/journal/gamilio-taxidi-to-fevrouario"),
  ...redirect("/ρομαντικοί-προορισμοί", "/journal/romantiki-proorismoi"),
  ...redirect(
    "/πως-να-επιλεξετε-που-θα-πατε-μηνα-του-με",
    "/journal/pos-na-epilexete-pou-tha-pate",
  ),
  ...redirect(
    "/ποτε-να-κλεισετε-το-γαμηλιο-ταξιδι-σας",
    "/journal/pote-na-kleisete-to-gamilio-taxidi-sas",
  ),
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.myhoneymoon.gr",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.myhoneymoon.travel",
        pathname: "/wp-content/uploads/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return wpRedirects;
  },
};

export default nextConfig;
