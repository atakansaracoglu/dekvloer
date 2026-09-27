"use client";

import { motion } from "framer-motion";

export default function ConcreteEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grain texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          opacity: 0.03,
          mixBlendMode: "overlay",
          animation: "grain 8s steps(10) infinite",
        }}
      />

      {/* Slow-drifting shapes */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          top: "10%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          bottom: "5%",
          left: "10%",
          background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -25, 15, 0], y: [0, 10, -20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          width: 1,
          height: 120,
          top: "20%",
          left: "30%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)",
          transformOrigin: "center",
        }}
        animate={{ opacity: [0, 0.6, 0], rotate: [0, 3, 0], scaleY: [0.8, 1, 0.8] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          width: 1,
          height: 80,
          bottom: "30%",
          right: "25%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.03), transparent)",
          transformOrigin: "center",
        }}
        animate={{ opacity: [0, 0.5, 0], rotate: [0, -2, 0], scaleY: [0.9, 1.1, 0.9] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Subtle dust particles */}
      {[
        { size: 2, top: "15%", left: "20%", dur: 18, delay: 0 },
        { size: 1.5, top: "60%", left: "75%", dur: 22, delay: 3 },
        { size: 2.5, top: "40%", left: "50%", dur: 16, delay: 6 },
        { size: 1, top: "80%", left: "35%", dur: 20, delay: 2 },
        { size: 1.5, top: "25%", left: "85%", dur: 24, delay: 8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            background: "rgba(255,255,255,0.15)",
          }}
          animate={{
            y: [0, -30, 10, 0],
            x: [0, 15, -10, 0],
            opacity: [0, 0.4, 0.2, 0],
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
