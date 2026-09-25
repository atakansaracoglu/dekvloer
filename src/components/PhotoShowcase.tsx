"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { ...spring, delay: i * 0.08 } }),
};

const PHOTOS = [
  "/photos/werk-12.jpg",
  "/photos/werk-14.jpg",
  "/photos/werk-21.jpg",
  "/photos/werk-04.jpg",
  "/photos/werk-10.jpg",
  "/photos/werk-17.jpg",
  "/photos/werk-02.jpg",
  "/photos/werk-13.jpg",
  "/photos/werk-15.jpg",
  "/photos/werk-09.jpg",
  "/photos/werk-16.jpg",
  "/photos/werk-19.jpg",
  "/photos/werk-11.jpg",
  "/photos/werk-01.jpg",
  "/photos/werk-18.jpg",
  "/photos/werk-20.jpg",
];

function PhotoStrip({ photos, direction = 1 }: { photos: string[]; direction?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [direction * 80, direction * -80]);

  return (
    <motion.div ref={ref} className="flex gap-3" style={{ x }}>
      {photos.map((src, i) => (
        <motion.div
          key={src}
          className="relative flex-shrink-0 rounded-xl overflow-hidden"
          style={{ width: 220, height: 160 }}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...spring, delay: i * 0.05 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function PhotoShowcase() {
  const firstRow = PHOTOS.slice(0, 8);
  const secondRow = PHOTOS.slice(8);

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-5 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <motion.span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#dc2626" }}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            >
              Ons Werk
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white"
              style={{ letterSpacing: "-0.02em" }}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            >
              Honderden projecten,{" "}
              <span style={{ color: "#f87171" }}>één standaard.</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)" }}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            >
              Van kleine woningen tot grootschalige utiliteitsprojecten — ons
              professioneel team levert overal hetzelfde strakke resultaat. Met
              modern materieel en jarenlange ervaring storten wij dagelijks
              tientallen vierkante meters door heel Nederland.
            </motion.p>
          </div>
          <motion.div
            className="flex gap-8"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "#f87171" }}>500+</div>
              <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Projecten</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold" style={{ color: "#f87171" }}>20+</div>
              <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Vakmensen</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <PhotoStrip photos={firstRow} direction={1} />
        <PhotoStrip photos={secondRow} direction={-1} />
      </div>
    </section>
  );
}
