"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroGallery({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 7000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={images[idx]}
          src={images[idx]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.0 }}
          animate={{ opacity: 1, scale: 1.25 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: 8, ease: "linear" } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.72)" }} />
    </div>
  );
}
