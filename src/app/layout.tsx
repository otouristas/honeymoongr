import type { Metadata } from "next";
import { Alegreya_Sans, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE } from "@/content/site";
import {
  graph,
  organizationSchema,
  plannerSchema,
  websiteSchema,
} from "@/lib/schema";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext", "greek"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin", "latin-ext", "greek", "greek-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-alegreya-sans",
  display: "swap",
});

const NOINDEX = process.env.NEXT_PUBLIC_NOINDEX === "1";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Εξατομικευμένος σχεδιασμός γαμήλιου ταξιδιού για ελληνικά ζευγάρια — από την Αθήνα προς τον κόσμο. Χωρίς πακέτα, με ειλικρίνεια για κόστος, πτήσεις και βίζες.",
  openGraph: {
    siteName: SITE.name,
    locale: "el_GR",
    type: "website",
  },
  icons: {
    icon: SITE.icon,
    apple: SITE.icon,
  },
  ...(NOINDEX ? { robots: { index: false, follow: false } } : {}),
};

const SITEWIDE_SCHEMA = graph(
  organizationSchema(),
  plannerSchema(),
  websiteSchema(),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className={`${sourceSerif.variable} ${alegreyaSans.variable}`}>
      <body className="min-h-screen pb-14 antialiased md:pb-0">
        <JsonLd data={SITEWIDE_SCHEMA} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
