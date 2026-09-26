"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

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

function MarqueeStrip({
  photos,
  reverse = false,
  onPhotoClick,
}: {
  photos: string[];
  reverse?: boolean;
  onPhotoClick: (index: number) => void;
}) {
  const doubled = [...photos, ...photos];

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex gap-3 flex-shrink-0"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${photos.length * 4}s linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <button
            key={`${src}-${i}`}
            className="relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer group"
            style={{ width: 220, height: 160 }}
            onClick={() => onPhotoClick(i % photos.length)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/0" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(var(--theme-accent-rgb),0.85)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <button
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
        style={{ background: "rgba(255,255,255,0.1)" }}
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <motion.div
        key={index}
        className="relative max-w-[90vw] max-h-[85vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos[index]}
          alt=""
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm text-white/60" style={{ background: "rgba(0,0,0,0.5)" }}>
          {index + 1} / {photos.length}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PhotoShowcase() {
  const firstRow = PHOTOS.slice(0, 8);
  const secondRow = PHOTOS.slice(8);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((globalIndex: number) => {
    setLightboxIndex(globalIndex);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + PHOTOS.length) % PHOTOS.length));
  }, []);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % PHOTOS.length));
  }, []);

  return (
    <>
      <section className="py-24 md:py-32 overflow-hidden" style={{ background: "#111111" }}>
        <div className="max-w-7xl mx-auto px-5 mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <motion.span
                className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--theme-accent)" }}
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
                <span style={{ color: "var(--theme-accent-light)" }}>één standaard.</span>
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
                <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--theme-accent-light)" }}>500+</div>
                <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Projecten</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold" style={{ color: "var(--theme-accent-light)" }}>20+</div>
                <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Vakmensen</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <MarqueeStrip
            photos={firstRow}
            onPhotoClick={(i) => openLightbox(i)}
          />
          <MarqueeStrip
            photos={secondRow}
            reverse
            onPhotoClick={(i) => openLightbox(i + firstRow.length)}
          />
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={PHOTOS}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </>
  );
}
