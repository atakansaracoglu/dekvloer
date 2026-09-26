"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };

const SERVICES = [
  "Zandcement dekvloer",
  "Anhydrietvloer",
  "Vloerverwarming",
  "Egaliseren",
  "Beton & Fundering",
  "Schuimbeton",
  "Heipalen",
  "Anders",
];

const EXTRA_OPTIES = [
  "Randstrook",
  "Versneller",
  "Verharder",
  "Vezel",
  "Duramit",
  "Krimpnet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
              Contact / Offerte Aanvragen
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte op maat.
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-24 px-5">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: "rgba(var(--theme-accent-rgb),0.1)" }}>
                    <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
                      <path d="M5 8l2 2 4-4" stroke="var(--theme-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3" style={{ color: "#0a0a0a" }}>Bedankt voor uw aanvraag!</h2>
                  <p style={{ color: "#6b7280" }}>Wij nemen binnen 24 uur contact met u op.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Naam *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Telefoonnummer *</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>E-mailadres *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Gewenste dienst *</label>
                    <select required className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }}>
                      <option value="">Selecteer een dienst</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Postcode</label>
                      <input type="text" placeholder="bijv. 1234 AB" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Deel / Regio</label>
                      <input type="text" placeholder="bijv. Noord-Holland" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Adres</label>
                    <input type="text" placeholder="Straatnaam en huisnummer" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Aantal m²</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Dikte (cm)</label>
                      <input type="text" placeholder="bijv. 5 cm" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Extra opties</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {EXTRA_OPTIES.map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm py-1.5" style={{ color: "#374151" }}>
                          <input type="checkbox" className="rounded" />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#374151" }}>Omschrijving van uw project</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{ border: "1px solid #e5e7eb", background: "#fff" }} />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-white font-semibold transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                    style={{ background: "var(--theme-accent)" }}
                  >
                    Offerte Aanvragen
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.4 }}
            >
              <div className="rounded-2xl p-7 mb-6" style={{ background: "#f5f5f5" }}>
                <h3 className="font-semibold mb-4" style={{ color: "#0a0a0a" }}>Direct contact</h3>
                <ul className="space-y-3 text-sm" style={{ color: "#374151" }}>
                  <li className="flex items-center gap-3">
                    <span>📞</span> +31 6 1234 5678
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📧</span> info@dekvloerexpert.nl
                  </li>
                  <li className="flex items-center gap-3">
                    <span>📍</span> Heel Nederland
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl p-7" style={{ background: "#f5f5f5" }}>
                <h3 className="font-semibold mb-4" style={{ color: "#0a0a0a" }}>Werkgebied</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  Wij leveren onze diensten door heel Nederland. Van Amsterdam tot Maastricht, van Groningen tot Rotterdam — wij komen naar u toe.
                </p>
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
