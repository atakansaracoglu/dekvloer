"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: i * 0.06 },
  }),
};

const PROJECTS = [
  { title: "Nieuwbouw Appartementen", location: "Amsterdam", area: "1.200 m²", type: "Zandcement" },
  { title: "Renovatie Woonhuis", location: "Rotterdam", area: "180 m²", type: "Zandcement" },
  { title: "Bedrijfshal Vloer", location: "Utrecht", area: "3.500 m²", type: "Zandcement" },
  { title: "Villa Nieuwbouw", location: "Haarlem", area: "350 m²", type: "Zandcement" },
  { title: "Schoolgebouw Renovatie", location: "Groningen", area: "2.100 m²", type: "Zandcement" },
  { title: "Woonwijk Nieuwbouw", location: "Almere", area: "4.800 m²", type: "Zandcement" },
];

export default function ProjectenPage() {
  return (
    <>
      <Header forceDark />
      <main>
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-5" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-white font-semibold leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              Onze Projecten
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              Een greep uit onze gerealiseerde projecten door heel Nederland.
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ background: "#111111", aspectRatio: "4/3" }}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4, transition: spring }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, hsl(${210 + i * 12}, 20%, ${18 + i * 3}%) 0%, hsl(${220 + i * 12}, 15%, ${28 + i * 3}%) 100%)`,
                  }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(220,38,38,0.2)", color: "#f87171" }}>
                    {project.type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  <div className="flex items-center gap-3 mt-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white leading-[1.1] max-w-xl mx-auto relative" style={{ letterSpacing: "-0.02em" }}>
                Uw project hier toevoegen?
              </h2>
              <p className="mt-4 text-base md:text-lg max-w-md mx-auto relative" style={{ color: "rgba(255,255,255,0.55)" }}>
                Vraag een vrijblijvende offerte aan en laat ons ook voor u een strakke vloer realiseren.
              </p>
              <div className="mt-8 relative">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
                  style={{ background: "#dc2626", boxShadow: "0 8px 30px rgba(220,38,38,0.3)" }}
                >
                  Offerte Aanvragen
                </Link>
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
