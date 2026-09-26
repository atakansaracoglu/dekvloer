"use client";

import { useState, useEffect } from "react";

export default function ColorSwitcher() {
  const [theme, setTheme] = useState<"red" | "blue">("red");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme-color");
      if (stored === "blue") {
        setTheme("blue");
        document.documentElement.setAttribute("data-theme", "blue");
      }
    } catch {}
  }, []);

  const toggle = () => {
    const next = theme === "red" ? "blue" : "red";
    setTheme(next);
    try {
      if (next === "blue") {
        document.documentElement.setAttribute("data-theme", "blue");
        localStorage.setItem("theme-color", "blue");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme-color", "red");
      }
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 h-8 px-2 rounded-lg transition-all duration-200 hover:bg-white/8"
      aria-label="Kleur wisselen"
      title={theme === "red" ? "Wissel naar blauw" : "Wissel naar rood"}
    >
      <span
        className="w-4 h-4 rounded-full border-2 transition-all duration-200"
        style={{
          background: theme === "red" ? "#dc2626" : "transparent",
          borderColor: theme === "red" ? "#dc2626" : "rgba(255,255,255,0.3)",
        }}
      />
      <span
        className="w-4 h-4 rounded-full border-2 transition-all duration-200"
        style={{
          background: theme === "blue" ? "#2563eb" : "transparent",
          borderColor: theme === "blue" ? "#2563eb" : "rgba(255,255,255,0.3)",
        }}
      />
    </button>
  );
}
