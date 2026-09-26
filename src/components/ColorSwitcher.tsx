"use client";

import { useState, useEffect, useRef } from "react";

const THEMES = [
  { id: "red", label: "Rood", color: "#dc2626" },
  { id: "blue", label: "Blauw", color: "#2563eb" },
  { id: "emerald", label: "Smaragd", color: "#059669" },
  { id: "purple", label: "Paars", color: "#7c3aed" },
  { id: "orange", label: "Oranje", color: "#ea580c" },
  { id: "pink", label: "Roze", color: "#db2777" },
  { id: "teal", label: "Teal", color: "#0d9488" },
  { id: "amber", label: "Amber", color: "#d97706" },
  { id: "indigo", label: "Indigo", color: "#4f46e5" },
  { id: "rose", label: "Rosé", color: "#e11d48" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export default function ColorSwitcher() {
  const [theme, setTheme] = useState<ThemeId>("red");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme-color") as ThemeId | null;
      if (stored && THEMES.some((t) => t.id === stored)) {
        setTheme(stored);
        document.documentElement.setAttribute("data-theme", stored);
      }
    } catch {}
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const select = (id: ThemeId) => {
    setTheme(id);
    setOpen(false);
    try {
      document.documentElement.setAttribute("data-theme", id);
      localStorage.setItem("theme-color", id);
    } catch {}
  };

  const current = THEMES.find((t) => t.id === theme)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 h-8 px-2.5 rounded-lg transition-all duration-200 hover:bg-white/10"
        aria-label="Kleur kiezen"
        aria-expanded={open}
      >
        <span
          className="w-4 h-4 rounded-full ring-2 ring-white/30"
          style={{ background: current.color }}
        />
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 py-2 rounded-xl shadow-2xl z-50 min-w-[160px]"
          style={{
            background: "rgba(20,20,20,0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => select(t.id)}
              className="flex items-center gap-3 w-full px-4 py-2 text-left text-sm transition-colors duration-150 hover:bg-white/10"
              style={{ color: theme === t.id ? "#fff" : "rgba(255,255,255,0.7)" }}
            >
              <span
                className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{
                  background: t.color,
                  boxShadow: theme === t.id ? `0 0 0 2px rgba(20,20,20,0.95), 0 0 0 4px ${t.color}` : "none",
                }}
              />
              <span>{t.label}</span>
              {theme === t.id && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-auto flex-shrink-0">
                  <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
