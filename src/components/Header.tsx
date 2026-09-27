"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon, LogoWide } from "./Logo";

const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };

const NAV_PRIMARY = [
  { label: "Zandcementdekvloer", href: "/zandcementdekvloer" },
  { label: "Projecten", href: "/projecten" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

const NAV_MEER_DIENSTEN = [
  { label: "Anhydrietvloeren", href: "/anhydrietvloeren" },
  { label: "Schuimbeton", href: "/schuimbeton" },
  { label: "Beton", href: "/beton" },
  { label: "Egaliseren", href: "/egaliseren" },
  { label: "Heipalen", href: "/heipalen" },
  { label: "Vloerverwarming", href: "/vloerverwarming" },
];

const ALL_NAV = [
  { label: "Home", href: "/" },
  ...NAV_PRIMARY,
  ...NAV_MEER_DIENSTEN,
];

export default function Header({ forceDark = false }: { forceDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* FLOATING GLASS HEADER */}
      <motion.header
        className="fixed z-50 left-0 right-0"
        style={{ top: scrolled ? "12px" : "24px" }}
        animate={{ top: scrolled ? 12 : 24 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="mx-auto transition-all"
          style={{
            maxWidth: "1100px",
            marginLeft: "max(16px, calc((100vw - 1100px) / 2))",
            marginRight: "max(16px, calc((100vw - 1100px) / 2))",
            borderRadius: scrolled ? "16px" : "20px",
            background: scrolled
              ? "rgba(8,8,8,0.72)"
              : "rgba(12,12,12,0.42)",
            backdropFilter: scrolled
              ? "blur(32px) saturate(160%)"
              : "blur(20px) saturate(130%)",
            border: scrolled
              ? "1px solid rgba(255,255,255,0.12)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.04) inset"
              : "0 4px 24px rgba(0,0,0,0.15)",
            transitionProperty: "background, backdrop-filter, border, box-shadow, border-radius",
            transitionDuration: "350ms",
            transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          }}
        >
          <div
            className="flex items-center justify-between gap-4 transition-all"
            style={{
              height: scrolled ? "52px" : "58px",
              padding: "0 20px",
              transitionDuration: "350ms",
              transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            {/* Left: Logo */}
            <Link href="/" className="flex-shrink-0 relative flex items-center gap-2">
              <motion.div
                animate={{
                  width: scrolled ? 24 : 0,
                  opacity: scrolled ? 1 : 0,
                  marginRight: scrolled ? 4 : 0,
                }}
                initial={{ width: 0, opacity: 0, marginRight: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                className="overflow-hidden flex-shrink-0"
              >
                <LogoIcon className="h-6 w-auto" />
              </motion.div>
              <LogoWide
                className="w-auto transition-all"
                style={{
                  height: scrolled ? "28px" : "34px",
                  transitionDuration: "350ms",
                }}
              />
            </Link>

            {/* Center: Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5">
              <NavLink href="/" label="Home" active={isActive("/")} />
              {NAV_PRIMARY.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} active={isActive(item.href)} />
              ))}

              {/* Meer diensten dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-[13px] font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-white/8"
                  style={{ color: NAV_MEER_DIENSTEN.some((i) => isActive(i.href)) ? "var(--theme-accent-light)" : "rgba(255,255,255,0.55)" }}
                >
                  Meer diensten
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="opacity-50">
                    <path d="M3 5l3 2.5L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 py-1.5 min-w-[180px]"
                      style={{
                        background: "rgba(15,15,15,0.85)",
                        backdropFilter: "blur(24px) saturate(150%)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                      }}
                      initial={{ opacity: 0, y: -4, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                    >
                      {NAV_MEER_DIENSTEN.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-[13px] font-medium transition-colors hover:bg-white/5"
                          style={{ color: isActive(item.href) ? "var(--theme-accent-light)" : "rgba(255,255,255,0.65)" }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Phone button */}
              <a
                href="tel:+31612345678"
                className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg transition-all duration-200 hover:bg-white/8"
                style={{ color: "rgba(255,255,255,0.5)" }}
                aria-label="Bel ons"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              </a>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg transition-all duration-200 hover:brightness-110"
                style={{ background: "rgba(37,211,102,0.15)", color: "#25d366" }}
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>

              {/* Offerte aanvragen button */}
              <Link
                href="/offerte-aanvragen"
                className="hidden sm:inline-flex items-center text-[13px] font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                style={{
                  background: "var(--theme-accent)",
                  color: "#fff",
                  boxShadow: "0 2px 12px rgba(var(--theme-accent-rgb),0.35)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Offerte aanvragen
              </Link>

              {/* Mobile offerte button */}
              <Link
                href="/offerte-aanvragen"
                className="sm:hidden inline-flex items-center text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
                style={{
                  background: "var(--theme-accent)",
                  color: "#fff",
                  boxShadow: "0 2px 8px rgba(var(--theme-accent-rgb),0.3)",
                }}
              >
                Offerte
              </Link>

              {/* Hamburger */}
              <button
                className="xl:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors hover:bg-white/8"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="flex flex-col gap-[5px]">
                  <motion.span className="block w-[18px] h-[1.5px] rounded-full bg-white" animate={menuOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }} transition={spring} />
                  <motion.span className="block w-[18px] h-[1.5px] rounded-full bg-white" animate={menuOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }} transition={spring} />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <motion.nav
              className="absolute top-0 right-0 h-full w-[320px] max-w-[88vw] flex flex-col overflow-hidden"
              style={{
                background: "rgba(10,10,10,0.95)",
                backdropFilter: "blur(32px) saturate(150%)",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={spring}
            >
              {/* Drawer head */}
              <div className="flex items-center justify-between px-5 h-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <LogoWide className="h-5 w-auto" />
                <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/8 transition-colors" aria-label="Sluiten">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8m0-8L3 11" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 overflow-y-auto py-2 px-2">
                {/* Primary nav items */}
                <Link
                  href="/"
                  className="flex items-center px-4 py-3 rounded-lg text-[14px] font-medium transition-colors hover:bg-white/5"
                  style={{
                    color: isActive("/") ? "var(--theme-accent-light)" : "rgba(255,255,255,0.7)",
                    borderLeft: isActive("/") ? "2px solid var(--theme-accent)" : "2px solid transparent",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                {NAV_PRIMARY.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-4 py-3 rounded-lg text-[14px] font-medium transition-colors hover:bg-white/5"
                    style={{
                      color: isActive(item.href) ? "var(--theme-accent-light)" : "rgba(255,255,255,0.7)",
                      borderLeft: isActive(item.href) ? "2px solid var(--theme-accent)" : "2px solid transparent",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Meer diensten label + items */}
                <div
                  className="px-4 pt-5 pb-2 text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Meer diensten
                </div>
                {NAV_MEER_DIENSTEN.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-4 py-3 rounded-lg text-[14px] font-medium transition-colors hover:bg-white/5"
                    style={{
                      color: isActive(item.href) ? "var(--theme-accent-light)" : "rgba(255,255,255,0.7)",
                      borderLeft: isActive(item.href) ? "2px solid var(--theme-accent)" : "2px solid transparent",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="p-4 space-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-4 text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <a href="tel:+31612345678" className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                    +31 6 1234 5678
                  </a>
                  <a
                    href="https://wa.me/31612345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-white/70 transition-colors"
                    style={{ color: "#25d366" }}
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp
                  </a>
                </div>
                <Link
                  href="/offerte-aanvragen"
                  className="flex items-center justify-center text-white text-[13px] font-semibold py-2.5 rounded-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                  style={{
                    background: "var(--theme-accent)",
                    border: "1px solid rgba(var(--theme-accent-rgb),0.3)",
                    boxShadow: "0 2px 12px rgba(var(--theme-accent-rgb),0.35)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Offerte Aanvragen
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className="relative text-[13px] font-medium px-3 py-1.5 rounded-lg transition-all duration-200 hover:bg-white/8"
      style={{ color: active ? "var(--theme-accent-light)" : "rgba(255,255,255,0.55)" }}
    >
      {label}
      {active && (
        <motion.span
          className="absolute bottom-0 left-3 right-3 h-[1.5px] rounded-full"
          style={{ background: "var(--theme-accent)" }}
          layoutId="nav-underline"
          transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
        />
      )}
    </Link>
  );
}
