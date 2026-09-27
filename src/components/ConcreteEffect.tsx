"use client";

import { motion } from "framer-motion";

export default function ConcreteEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grain/noise texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.06,
          animation: "grain 6s steps(8) infinite",
        }}
      />

      {/* Slow-drifting glow shapes */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          top: "5%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(255,255,255,0.045) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 40, -15, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          bottom: "0%",
          left: "5%",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, 15, -25, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 250,
          height: 250,
          top: "40%",
          left: "45%",
          background: "radial-gradient(circle, rgba(var(--theme-accent-rgb),0.03) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Subtle vertical lines */}
      <motion.div
        className="absolute"
        style={{
          width: 1,
          height: 150,
          top: "15%",
          left: "25%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06), transparent)",
        }}
        animate={{ opacity: [0, 1, 0], scaleY: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          width: 1,
          height: 100,
          bottom: "25%",
          right: "20%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), transparent)",
        }}
        animate={{ opacity: [0, 0.8, 0], scaleY: [0.8, 1.1, 0.8] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute"
        style={{
          width: 1,
          height: 120,
          top: "50%",
          left: "65%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)",
        }}
        animate={{ opacity: [0, 0.7, 0], scaleY: [0.9, 1, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />

      {/* Dust particles */}
      {[
        { size: 3, top: "12%", left: "18%", dur: 16, delay: 0 },
        { size: 2, top: "55%", left: "72%", dur: 20, delay: 2 },
        { size: 3.5, top: "35%", left: "48%", dur: 14, delay: 5 },
        { size: 2, top: "75%", left: "30%", dur: 18, delay: 1 },
        { size: 2.5, top: "20%", left: "82%", dur: 22, delay: 7 },
        { size: 1.5, top: "65%", left: "15%", dur: 19, delay: 4 },
        { size: 2, top: "45%", left: "90%", dur: 17, delay: 9 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: "rgba(255,255,255,0.2)",
          }}
          animate={{
            y: [0, -40, 15, 0],
            x: [0, 20, -12, 0],
            opacity: [0, 0.6, 0.3, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
