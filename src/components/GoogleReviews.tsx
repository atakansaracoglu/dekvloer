"use client";

import { motion } from "framer-motion";

const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { ...spring, delay: i * 0.08 } }),
};

const REVIEWS = [
  {
    name: "Pieter de Vries",
    body: "Fantastische service! De dekvloer is perfect vlak en binnen een week konden we al tegelen. Zeer professioneel team.",
    rating: 5,
  },
  {
    name: "Sandra Jansen",
    body: "Top bedrijf! Snelle levering, nette afwerking en eerlijke prijs. Onze aannemer was ook onder de indruk van de kwaliteit.",
    rating: 5,
  },
  {
    name: "Mark van den Berg",
    body: "Al drie projecten laten doen door Dekvloer Expert. Altijd op tijd, altijd strak resultaat. Absolute aanrader voor bouwbedrijven.",
    rating: 5,
  },
  {
    name: "Annemarie Bakker",
    body: "Vloerverwarming en dekvloer in één keer geregeld. Alles keurig opgeleverd, geen scheuren, perfect vlak. Heel tevreden!",
    rating: 5,
  },
  {
    name: "Jan-Willem Smit",
    body: "Wij hebben een groot bedrijfspand laten doen. 800m² in twee dagen gestort. Vakmanschap van de bovenste plank.",
    rating: 5,
  },
  {
    name: "Fatima El Amrani",
    body: "Eerlijk advies gekregen over welke opties we echt nodig hadden. Geen onnodige upselling. Resultaat is prachtig geworden.",
    rating: 5,
  },
  {
    name: "Tom Hendriks",
    body: "De sneldrogende variant was precies wat we nodig hadden. Binnen 4 dagen legklaar. Communicatie was ook uitstekend.",
    rating: 5,
  },
  {
    name: "Lisa de Groot",
    body: "Nieuwbouwwoning volledig door hen laten doen. Van schuimbeton tot dekvloer, alles in één hand. Zeer aan te bevelen!",
    rating: 5,
  },
];

const firstRow = REVIEWS.slice(0, 4);
const secondRow = REVIEWS.slice(4);

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, body }: { name: string; body: string }) {
  return (
    <div
      className="flex-shrink-0 w-72 rounded-xl p-5 flex flex-col gap-3"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{ background: "rgba(var(--theme-accent-rgb),0.2)", color: "var(--theme-accent-light)" }}
        >
          {name[0]}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <Stars />
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
        &ldquo;{body}&rdquo;
      </p>
    </div>
  );
}

function MarqueeRow({ reviews, reverse = false }: { reviews: typeof REVIEWS; reverse?: boolean }) {
  const content = reviews.map((r) => <ReviewCard key={r.name} {...r} />);
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex gap-4 py-2"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} 30s linear infinite`,
        }}
      >
        {content}
        {content}
      </div>
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-24 md:py-32 px-5" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          >
            <GoogleLogo />
            <span className="text-white font-semibold text-lg">Google Reviews</span>
            <div className="flex items-center gap-1 ml-2">
              <Stars />
              <span className="text-sm font-semibold ml-1" style={{ color: "#FBBC04" }}>5.0</span>
            </div>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white"
            style={{ letterSpacing: "-0.02em" }}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          >
            Wat onze klanten zeggen
          </motion.h2>
          <motion.p
            className="mt-4 text-lg"
            style={{ color: "rgba(255,255,255,0.5)" }}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
          >
            Beoordeeld met 5 sterren door tientallen tevreden opdrachtgevers.
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col gap-4"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
        >
          <MarqueeRow reviews={firstRow} />
          <MarqueeRow reviews={secondRow} reverse />
        </motion.div>
      </div>
    </section>
  );
}
