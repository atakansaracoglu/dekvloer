"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleReviews from "@/components/GoogleReviews";
import PhotoShowcase from "@/components/PhotoShowcase";
import ConcreteEffect from "@/components/ConcreteEffect";


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
  "Specialist in zandcementdekvloeren",
  "Gecertificeerde kwaliteit",
  "Door heel Nederland",
  "Gratis prijsopgave",
  "Voor particulieren & aannemers",
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
            DekvloerExpert — Specialist in zandcementdekvloeren
          </motion.div>

          <motion.h1 className="text-white font-semibold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.025em" }}>
            <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.2 }}>
              Zandcementvloer
            </motion.span>
            <motion.span className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.3 }}>
              laten leggen? <span style={{ color: "var(--theme-accent-light)" }}>Wij staan klaar.</span>
            </motion.span>
          </motion.h1>

          <motion.p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.65)" }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...spring, delay: 0.4 }}>
            Specialist in zandcementdekvloeren voor particulieren en aannemers. Wij werken door heel Nederland.
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
            <Link href="/offerte-aanvragen" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-lg" style={{ background: "var(--theme-accent)", boxShadow: "0 8px 30px rgba(var(--theme-accent-rgb),0.3)" }}>
              Offerte Aanvragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "#25D366", color: "#fff" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.116 1.52 5.852L0 24l6.335-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.884 0-3.633-.497-5.152-1.366l-.37-.217-3.83.999 1.022-3.727-.24-.38A9.79 9.79 0 012.182 12c0-5.417 4.401-9.818 9.818-9.818S21.818 6.583 21.818 12 17.417 21.818 12 21.818z"/></svg>
              WhatsApp
            </a>
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


function Services() {
  return (
    <section className="py-24 md:py-32 px-5 overflow-hidden" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
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
              Onze Hoofddienst
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-6"
              style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
            >
              Zandcementdekvloeren van{" "}
              <span style={{ color: "var(--theme-accent)" }}>topkwaliteit</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "#6b7280" }}>
              Strak, duurzaam en kaarsrecht — de perfecte basis voor elke
              eindafwerking. Van kleine renovatie tot grootschalig
              nieuwbouwproject, voor particulieren en aannemers door heel
              Nederland.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Diverse diktes</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Van 30mm tot 100mm, afgestemd op uw project</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Snel legklaar</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Met versneller nog sneller droog</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Vloerverwarming</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Ideaal in combinatie met vloerverwarming</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 7V5a4 4 0 0 0-8 0v2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#0a0a0a" }}>Maatwerk opties</h4>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>Vezel, verharder, krimpnet en meer</p>
                </div>
              </div>
            </div>

            <Link
              href="/zandcementdekvloer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
              style={{ color: "var(--theme-accent)" }}
            >
              Meer over zandcementdekvloeren
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={2}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src="/photos/werk-01.jpg"
                alt="Zandcementdekvloer storten"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--theme-accent)" }}>
                    <span className="text-white font-bold text-lg">NL</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Door heel Nederland</p>
                    <p className="text-white/60 text-xs">Wij komen naar u toe</p>
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
              Waarom DekvloerExpert?
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
              href="/zandcementdekvloer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
              style={{ color: "var(--theme-accent)" }}
            >
              Meer over zandcementdekvloeren
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
    <section className="py-24 md:py-32 px-5 relative" style={{ background: "#111111" }}>
      <ConcreteEffect />
      <div className="max-w-7xl mx-auto relative">
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
          <ConcreteEffect />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-[100px] pointer-events-none" style={{ background: "var(--theme-accent)" }} />
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1] max-w-xl mx-auto relative" style={{ letterSpacing: "-0.02em" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>Klaar voor een strakke dekvloer?</motion.h2>
          <motion.p className="mt-5 text-lg max-w-md mx-auto relative" style={{ color: "rgba(255,255,255,0.55)" }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>Vraag vandaag nog een vrijblijvende offerte aan. Wij reageren binnen 24 uur.</motion.p>
          <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
            <Link href="/offerte-aanvragen" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "var(--theme-accent)", boxShadow: "0 8px 30px rgba(var(--theme-accent-rgb),0.3)" }}>
              Offerte Aanvragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="https://wa.me/31612345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "#25D366", color: "#fff" }}>
              WhatsApp
            </a>
            <a href="tel:+31612345678" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
              Bel Direct
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
