"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";
import PhotoShowcase from "@/components/PhotoShowcase";


const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: i * 0.08 },
  }),
};

const USPS = [
  "Sneldrogende dekvloeren",
  "Gecertificeerde kwaliteit",
  "Heel Nederland",
  "Gratis prijsopgave",
];

const SERVICES = [
  {
    title: "Zandcement Dekvloeren",
    href: "/zandcement",
    desc: "De perfecte basis voor elk project. Strak, duurzaam en kaarsrecht — geschikt voor elke eindafwerking.",
    icon: "◆",
    images: ["/photos/werk-01.jpg", "/photos/werk-02.jpg", "/photos/werk-04.jpg"],
  },
];

const EXTRA_OPTIONS = [
  { name: "Randstrook", desc: "Voorkomt scheuren langs de randen en zorgt voor een nette afwerking" },
  { name: "Versneller", desc: "Legklaar in dagen i.p.v. weken — versnelt het droogproces aanzienlijk" },
  { name: "Verharder", desc: "Extra druksterkte voor intensief gebruik en zware belasting" },
  { name: "Vezel", desc: "Vezelversterking voor minimale kans op krimpscheuren" },
  { name: "Duramit", desc: "Premium high-strength compound voor maximale duurzaamheid" },
  { name: "Krimpnet", desc: "Staalwapening tegen scheurvorming, ideaal bij vloerverwarming" },
];

const STATS = [
  { value: "15+", label: "Jaar ervaring" },
  { value: "2500+", label: "Projecten" },
  { value: "100%", label: "Tevredenheid" },
  { value: "NL", label: "Landelijke dekking" },
];

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#111111" }}>
        <motion.div className="absolute inset-0" style={{ y }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #111111 0%, #111111 20%, rgba(17,17,17,0.7) 45%, rgba(17,17,17,0.1) 75%, transparent 100%)" }} />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "#111111" }} />
      </div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ background: "var(--theme-accent)" }} />

      <motion.div className="relative z-10 max-w-7xl mx-auto px-5 pt-32 pb-20 w-full" style={{ opacity }}>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-medium"
            style={{ background: "rgba(var(--theme-accent-rgb),0.15)", color: "var(--theme-accent-light)", border: "1px solid rgba(var(--theme-accent-rgb),0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Specialist in zandcement dekvloeren
          </motion.div>

          <motion.h1 className="text-white font-semibold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.025em" }}>
            <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.2 }}>
              De perfecte basis
            </motion.span>
            <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.3 }}>
              voor <span style={{ color: "var(--theme-accent-light)" }}>elk project.</span>
            </motion.span>
          </motion.h1>

          <motion.p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.4 }}>
            Vakkundige zandcement dekvloeren door heel Nederland. Strak, duurzaam en altijd op maat — voor nieuwbouw, renovatie en utiliteitsbouw.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-x-6 gap-y-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.5 }}>
            {USPS.map((usp) => (
              <div key={usp} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="8" cy="8" r="8" fill="var(--theme-accent)" />
                  <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {usp}
              </div>
            ))}
          </motion.div>

          <motion.div className="mt-10 flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.6 }}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-lg" style={{ background: "var(--theme-accent)", boxShadow: "0 8px 30px rgba(var(--theme-accent-rgb),0.3)" }}>
              Gratis Offerte
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="tel:+31612345678" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
              Bel Direct
            </a>
          </motion.div>
        </div>

        <motion.div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.7 }}>
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--theme-accent-light)" }}>{stat.value}</div>
              <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <motion.span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--theme-accent)" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={0}>{eyebrow}</motion.span>
      <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]" style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={1}>{title}</motion.h2>
      <motion.p className="mt-4 text-lg leading-relaxed" style={{ color: "#6b7280" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} custom={2}>{subtitle}</motion.p>
    </div>
  );
}

function ServiceCardGallery({ images, offset = 0 }: { images: string[]; offset?: number }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000 + offset * 800);
    return () => clearInterval(t);
  }, [images.length, offset]);

  return (
    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-5">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={images[idx]}
          src={images[idx]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: 6, ease: "linear" } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

function Services() {
  return (
    <section className="py-24 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Onze Hoofddienst" title="Zandcement dekvloeren van topkwaliteit" subtitle="Strak, duurzaam en kaarsrecht — de perfecte basis voor elke eindafwerking." />
        <div className="max-w-lg mx-auto">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              custom={i}
              whileHover={{ y: -4, transition: spring }}
            >
              <Link href={service.href} className="group block relative rounded-2xl overflow-hidden h-full transition-colors duration-300" style={{ background: "#111111" }}>
                <div className="px-8 pt-6">
                  <ServiceCardGallery images={service.images} offset={i} />
                </div>
                <div className="px-8 pb-8">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ background: "var(--theme-accent)", color: "#fff" }}>Hoofddienst</span>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{service.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: "var(--theme-accent-light)" }}>
                    Meer info
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CraftHero() {
  return (
    <section className="py-24 md:py-32 px-5 overflow-hidden" style={{ background: "#fafafa" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            className="order-2 md:order-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
          >
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-6"
              style={{ color: "var(--theme-accent)" }}
            >
              Waarom Dekvloer?
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-6"
              style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
            >
              Wij stoppen niet bij{" "}
              <span style={{ color: "var(--theme-accent)" }}>&lsquo;goed genoeg&rsquo;</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
              Elke vloer die wij storten is een handtekening. Geen haastwerk, geen
              compromissen — alleen millimeterprecisie, dag in dag uit. Waar anderen
              stoppen bij de norm, beginnen wij pas. Dat is geen slogan, dat is hoe
              ons team elke ochtend de bouwplaats op stapt.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Laag voor laag</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Opgebouwd met precisie en vakmanschap</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Altijd op tijd</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Planning is een belofte, geen schatting</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Nul-fouten mentaliteit</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Controleren, meten, dan pas storten</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Vast team</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Dezelfde vakmensen, elk project</p>
                </div>
              </div>
            </div>

            <Link
              href="/over-ons"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
              style={{ color: "var(--theme-accent)" }}
            >
              Meer over ons team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={2}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/werk-21.jpg"
                alt="Dekvloer vakmanschap"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--theme-accent)" }}>
                    <span className="text-white font-bold text-lg">15+</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Jaar ervaring</p>
                    <p className="text-white/60 text-xs">in de vloerbranche</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl -z-10"
              style={{ background: "rgba(var(--theme-accent-rgb),0.08)" }}
            />
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl -z-10"
              style={{ background: "rgba(var(--theme-accent-rgb),0.05)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ExtraOptions() {
  return (
    <section className="py-24 md:py-32 px-5" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--theme-accent)" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>Maatwerk Opties</motion.span>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white" style={{ letterSpacing: "-0.02em" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>Extra opties voor uw dekvloer</motion.h2>
          <motion.p className="mt-4 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>Elk bouwproject stelt andere eisen. Wij bieden hoogwaardige toevoegingen die direct meebesteld kunnen worden.</motion.p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTRA_OPTIONS.map((opt, i) => (
            <motion.div key={opt.name} className="flex items-start gap-4 rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(var(--theme-accent-rgb),0.15)" }}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M5 8l2 2 4-4" stroke="var(--theme-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <h4 className="font-semibold text-white">{opt.name}</h4>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{opt.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Contact & Advies", desc: "U neemt contact op. Wij bespreken uw wensen, bekijken de situatie en geven eerlijk advies." },
    { num: "02", title: "Offerte op Maat", desc: "U ontvangt een heldere, vrijblijvende prijsopgave inclusief alle opties en specificaties." },
    { num: "03", title: "Uitvoering", desc: "Ons vakkundig team verzorgt het storten. Schoon, efficiënt en volgens planning." },
    { num: "04", title: "Oplevering", desc: "Een strakke, kaarsrechte dekvloer die direct legklaar is voor uw eindafwerking." },
  ];

  return (
    <section className="py-24 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Werkwijze" title="Van contact tot oplevering" subtitle="Transparant, betrouwbaar en zonder verrassingen achteraf." />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div key={step.num} className="relative" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
              {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-full w-full h-[1px]" style={{ background: "linear-gradient(to right, rgba(var(--theme-accent-rgb),0.3), transparent)" }} />}
              <div className="text-4xl font-bold mb-4" style={{ color: "rgba(var(--theme-accent-rgb),0.2)" }}>{step.num}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div className="relative rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center" style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-[100px] pointer-events-none" style={{ background: "var(--theme-accent)" }} />
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1] max-w-xl mx-auto relative" style={{ letterSpacing: "-0.02em" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>Klaar voor een strakke dekvloer?</motion.h2>
          <motion.p className="mt-5 text-lg max-w-md mx-auto relative" style={{ color: "rgba(255,255,255,0.55)" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>Vraag vandaag nog een vrijblijvende offerte aan. Wij reageren binnen 24 uur.</motion.p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "var(--theme-accent)", boxShadow: "0 8px 30px rgba(var(--theme-accent-rgb),0.3)" }}>
              Offerte Aanvragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="tel:+31612345678" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
              +31 6 1234 5678
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <PhotoShowcase />
        <CraftHero />
        <ExtraOptions />
        <Process />
        <GoogleReviews />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
