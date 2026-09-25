"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import HeroGallery from "./HeroGallery";

const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: i * 0.08 },
  }),
};

interface Feature {
  title: string;
  desc: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  intro: string;
  features?: Feature[];
  extraSections?: { heading: string; content: string }[];
  ctaText?: string;
  ctaSubtext?: string;
  heroImages?: string[];
}

export default function ServicePage({
  title,
  subtitle,
  intro,
  features = [],
  extraSections = [],
  ctaText = "Vraag een vrijblijvende offerte aan",
  ctaSubtext = "Wij reageren binnen 24 uur met een heldere prijsopgave op maat.",
  heroImages,
}: ServicePageProps) {
  return (
    <>
      <Header forceDark />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-5 overflow-hidden" style={{ background: "#111111" }}>
          {heroImages && heroImages.length > 0 && <HeroGallery images={heroImages} />}
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium"
              style={{
                background: "rgba(220,38,38,0.15)",
                color: "#f87171",
                border: "1px solid rgba(220,38,38,0.25)",
              }}
            >
              Zandcement Expert
            </motion.div>
            <motion.h1
              className="text-white font-semibold leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{ background: "#dc2626", boxShadow: "0 8px 30px rgba(220,38,38,0.3)" }}
              >
                Gratis Offerte
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="tel:+31612345678"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Bel Direct
              </a>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-24 px-5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-base md:text-lg leading-relaxed whitespace-pre-line"
              style={{ color: "#374151" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={spring}
            >
              {intro}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        {features.length > 0 && (
          <section className="py-16 md:py-24 px-5" style={{ background: "#f5f5f5" }}>
            <div className="max-w-7xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-semibold tracking-tight mb-12 text-center"
                style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                Waarom kiezen voor onze dienst?
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    className="bg-white rounded-2xl p-7"
                    style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(220,38,38,0.1)" }}>
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path d="M5 8l2 2 4-4" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Extra sections */}
        {extraSections.map((section, idx) => (
          <section
            key={section.heading}
            className="py-16 md:py-24 px-5"
            style={{ background: idx % 2 === 0 ? "#ffffff" : "#f5f5f5" }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                className="text-2xl md:text-3xl font-semibold tracking-tight mb-6"
                style={{ color: "#0a0a0a", letterSpacing: "-0.02em" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                {section.heading}
              </motion.h2>
              <motion.div
                className="text-base leading-relaxed whitespace-pre-line"
                style={{ color: "#374151" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                {section.content}
              </motion.div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 md:py-28 px-5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="relative rounded-3xl overflow-hidden px-8 py-14 md:px-16 md:py-20 text-center"
              style={{ background: "linear-gradient(135deg, #111111 0%, #1a1a1a 100%)" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 blur-[100px]" style={{ background: "#dc2626" }} />
              <h2
                className="text-2xl md:text-4xl font-semibold tracking-tight text-white leading-[1.1] max-w-xl mx-auto relative"
                style={{ letterSpacing: "-0.02em" }}
              >
                {ctaText}
              </h2>
              <p className="mt-4 text-base md:text-lg max-w-md mx-auto relative" style={{ color: "rgba(255,255,255,0.55)" }}>
                {ctaSubtext}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                  style={{ background: "#dc2626", boxShadow: "0 8px 30px rgba(220,38,38,0.3)" }}
                >
                  Offerte Aanvragen
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="tel:+31612345678"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                  style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  +31 6 1234 5678
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
