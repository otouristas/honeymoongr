import Image from "next/image";
import Link from "next/link";
import { Diamond } from "@/components/Logo";
import AnswerBlock from "@/components/ui/AnswerBlock";
import FaqList from "@/components/ui/FaqList";
import MagazineSpread from "@/components/ui/MagazineSpread";
import ProofWall from "@/components/ui/ProofWall";
import { DESTINATIONS } from "@/content/destinations";
import { IMAGES } from "@/content/images";
import { journalSorted } from "@/content/journal";
import { PLANNER } from "@/content/planner";
import { PLANNER_TYPES } from "@/content/quiz";
import { REGIONS } from "@/content/regions";
import { SITE } from "@/content/site";
import { routes } from "@/lib/paths";

export const HOME_FAQS = [
  {
    question: "Πόσο κοστίζει ένα γαμήλιο ταξίδι από την Ελλάδα;",
    answer:
      "Σε ευρώ ανά βραδιά για δύο: καλό riad στο Μαρόκο από περίπου €150, Μαυρίκιος €250–€600, Μαλδίβες €700–€1.800. Οι πτήσεις είναι ξεχωριστά. Πάνω από €1.500 αγοράζετε σπανιότητα, όχι απαραίτητα πιο όμορφο νερό.",
  },
  {
    question: "Πότε είναι η καλύτερη εποχή;",
    answer:
      "Μετά από καλοκαιρινό ελληνικό γάμο, ο Οκτώβριος–Απρίλιος στον Ινδικό. Μαρόκο την άνοιξη και το φθινόπωρο. Μαυρίκιος Μάιο–Νοέμβριο. Δεν υπάρχει ένας «καλύτερος μήνας» για όλον τον χάρτη.",
  },
  {
    question: "Πόσες νύχτες χρειαζόμαστε;",
    answer:
      "Επτά το απόλυτο ελάχιστο για μακρινούς προορισμούς, δέκα το σωστό. Κάθε αλλαγή αεροδρομίου κοστίζει σχεδόν μία ημέρα.",
  },
  {
    question: "Χρειαζόμαστε σχεδιάστρια;",
    answer:
      "Όχι για να κλείσετε ένα δωμάτιο. Ναι για να ξέρετε ποιο bungalow κοιτάζει τον jetty, πότε ο μουσώνας αξίζει την έκπτωση, και τι να κάνετε αν το υδροπλάνο ακυρωθεί.",
  },
  {
    question: "Από πού πετάμε;",
    answer:
      "Από την Αθήνα, σχεδόν πάντα με μία στάση. Το Μαρόκο είναι η κοντινή εξαίρεση. Στείλτε μας τις ώρες πριν αγοράσετε εισιτήριο.",
  },
];

const FEATURED = DESTINATIONS.find((d) => d.slug === "maldives") ?? DESTINATIONS[0];

export default function HomePage() {
  const lead = journalSorted[0];

  return (
    <>
      <section className="relative h-[72vh] min-h-[420px] w-full overflow-hidden md:h-[85vh]">
        <Image
          src={IMAGES.heroes.home}
          alt="Καρδιά στην άμμο — γαμήλιο ταξίδι"
          fill
          priority
          fetchPriority="high"
          className="scale-105 object-cover object-center animate-[fade-up_1.4s_ease-out]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/25 via-transparent to-brand-ink/40" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-14 text-center text-white md:pb-20">
          <p className="animate-fade-up font-display text-[11px] uppercase tracking-[0.35em] text-white/85">
            Σχεδιασμός γαμήλιου ταξιδιού
          </p>
          <h1 className="animate-fade-up-delay mt-3 font-display text-4xl tracking-[0.08em] text-white md:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <Diamond className="animate-fade-up-delay-2 mt-5 brightness-0 invert" />
          <p className="animate-fade-up-delay-2 mt-4 max-w-md font-body text-base text-white/90 md:text-lg">
            Εννέα προορισμοί στον κόσμο. Μία σχεδιάστρια στην Αθήνα.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={routes.destinations}
              className="btn-ghost border-white text-white hover:bg-white hover:text-brand-ink"
            >
              Οι προορισμοί
            </Link>
            <Link
              href={routes.quiz}
              className="btn-ghost border-white text-white hover:bg-white hover:text-brand-ink"
            >
              Κάντε το quiz
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 pt-14 md:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-[0.05em] text-brand-ink md:text-3xl">
            Ποιος είναι ο καλύτερος προορισμός για γαμήλιο ταξίδι;
          </h2>
          <Diamond className="mt-4" />
          <div className="mt-6">
            <AnswerBlock>
              Δεν υπάρχει ένας. Υπάρχει ο σωστός για εσάς. Μαλδίβες για απομόνωση,
              Σεϋχέλλες για φύση, Μαρόκο αν η πτήση πρέπει να είναι σύντομη, Μπαλί αν
              θέλετε ρυθμό αντί για ένα pontoon.
            </AnswerBlock>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-2xl space-y-5 text-brand-ink/75">
          <p>
            Το γαμήλιο ταξίδι πρέπει να είναι το ταξίδι της ζωής σας. Οι στεναχώριες
            που ακούμε μετά είναι σχεδόν πάντα οι ίδιες: βιαστήκαμε, το δωμάτιο δεν
            ήταν αυτό της φωτογραφίας, χάσαμε μέρες σε αεροδρόμια.
          </p>
          <p>
            Και τα τρία είναι αποτυχίες σχεδιασμού. Και τα τρία αποφεύγονται. Αυτή
            είναι όλη η υπηρεσία — όχι πρόσβαση σε ξενοδοχεία, αλλά γνώση ποια αξίζουν
            τα λεφτά και πόσες νύχτες αξίζει κάθε μέρος.
          </p>
        </div>
      </section>

      <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
          <p className="font-script text-4xl text-brand-teal md:text-5xl">πού</p>
          <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
            Πέντε περιοχές, εννέα προορισμοί
          </h2>
          <Diamond className="mt-4" />
        </div>
        <ul className="mx-auto max-w-4xl divide-y divide-brand-teal/15 border-y border-brand-teal/15 px-6">
          {REGIONS.map((region) => (
            <li key={region.slug}>
              <Link
                href={routes.region(region.slug)}
                className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
              >
                <span className="font-display text-2xl tracking-wide text-brand-ink transition group-hover:text-brand-teal md:w-64 md:shrink-0">
                  {region.title}
                </span>
                <span className="text-brand-ink/70">{region.tagline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <MagazineSpread
        image={PLANNER.portrait}
        alt={`${PLANNER.name}, ${PLANNER.jobTitle}`}
        eyebrow={PLANNER.credential}
        title="Γεια σας, είμαι η Αγγελική"
        caption="Αθήνα, από όπου ξεκινά κάθε πλάνο"
      >
        <p>{PLANNER.bio[0]}</p>
        <p>{PLANNER.bio[2]}</p>
        <p>
          <Link
            href={routes.about}
            className="font-display text-xs uppercase tracking-[0.22em] text-brand-teal"
          >
            Περισσότερα για το πώς δουλεύουμε
          </Link>
        </p>
      </MagazineSpread>

      <section className="relative h-[45vh] min-h-[280px] overflow-hidden md:h-[55vh]">
        <Image
          src={IMAGES.destinations.maldives[0]}
          alt="Ατόλη στις Μαλδίβες από ψηλά"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">ένα σχήμα</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
              {FEATURED.name}
            </h2>
            <Diamond className="mt-4" />
          </div>
          <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={FEATURED.heroImage}
                alt={FEATURED.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-brand-teal">
                {FEATURED.nights} · {FEATURED.bestMonths}
              </p>
              <p className="mt-4 text-brand-ink/75">{FEATURED.answer}</p>
              <ul className="mt-6 space-y-2">
                {FEATURED.arc.map((day) => (
                  <li key={day.day} className="flex gap-4 text-sm">
                    <span className="w-28 shrink-0 font-display uppercase tracking-[0.14em] text-brand-teal">
                      {day.day}
                    </span>
                    <span className="text-brand-ink/70">{day.title}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={routes.destination(FEATURED.slug)}
                className="btn-ghost mt-8 inline-block"
              >
                Η σελίδα {FEATURED.name}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProofWall />

      <section className="pattern-bg border-y border-brand-teal/10 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="font-script text-4xl text-brand-teal">δύο λεπτά</p>
            <h2 className="mt-2 font-display text-3xl tracking-[0.06em] text-brand-ink md:text-4xl">
              Σχεδιάζεις γαμήλιο ταξίδι;
            </h2>
            <Diamond className="mt-4" />
            <p className="mx-auto mt-5 max-w-lg text-brand-ink/70">
              Τέσσερις τύποι ζευγαριών, διαφορετικός ρυθμός ο καθένας. Πέντε ερωτήσεις
              δείχνουν ποιοι προορισμοί είναι δικοί σας.
            </p>
          </div>
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {PLANNER_TYPES.map((type) => (
              <li key={type.slug}>
                <Link
                  href={routes.plannerType(type.slug)}
                  className="block border-b border-brand-teal/15 py-3 font-display text-lg tracking-wide text-brand-ink hover:text-brand-teal"
                >
                  {type.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center">
            <Link href={routes.quiz} className="btn-ghost">
              Κάντε το quiz
            </Link>
          </p>
        </div>
      </section>

      <section className="relative h-[42vh] min-h-[260px] overflow-hidden md:h-[50vh]">
        <Image
          src={IMAGES.heroes.couple}
          alt="Ζευγάρι σε γαμήλιο ταξίδι"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {lead ? (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="font-display text-3xl tracking-[0.06em] text-brand-ink">
                από το journal
              </h2>
              <Diamond className="mt-4" />
            </div>
            <article className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <Link
                href={routes.journalPost(lead.slug)}
                className="relative aspect-[16/10] overflow-hidden"
              >
                <Image
                  src={lead.heroImage}
                  alt={lead.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </Link>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-brand-ink">
                  <Link href={routes.journalPost(lead.slug)}>{lead.title}</Link>
                </h3>
                <p className="mt-4 text-brand-ink/70">{lead.excerpt}</p>
                <Link
                  href={routes.journal}
                  className="mt-6 inline-block font-display text-xs uppercase tracking-[0.22em] text-brand-teal"
                >
                  όλο το journal
                </Link>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <FaqList faqs={HOME_FAQS} title="Ερωτήσεις για γαμήλιο ταξίδι" />
    </>
  );
}
