"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const spring = { type: "spring" as const, bounce: 0, duration: 0.5 };

const PROJECT_TYPES = [
  "Renovatie",
  "Nieuwbouw",
  "Utiliteitsbouw",
  "Buitenleven",
  "Overkapping / veranda",
];

const SITUATIES = [
  "Kelder",
  "Begane grond",
  "1e verdieping",
  "2e verdieping",
  "Anders",
];

const DIKTES = [
  "5 cm",
  "6 cm",
  "7 cm",
  "8 cm",
  "Anders",
  "Nog niet bekend",
];

const TOEVOEGINGEN = [
  "Vezelversterking",
  "Krimpnetten",
  "Droogtijdversneller / Versneller",
  "Verharder",
  "Duramit",
  "Randstroken / Randisolatie",
  "Nog niet bekend",
];

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm cursor-pointer transition-all duration-150"
          style={{
            border:
              value === opt
                ? "2px solid var(--theme-accent)"
                : "2px solid #e5e7eb",
            background:
              value === opt
                ? "rgba(var(--theme-accent-rgb), 0.06)"
                : "#fff",
            color: value === opt ? "var(--theme-accent)" : "#374151",
            fontWeight: value === opt ? 600 : 400,
          }}
        >
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="sr-only"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

function CheckboxGroup({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const checked = values.includes(opt);
        return (
          <label
            key={opt}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm cursor-pointer transition-all duration-150"
            style={{
              border: checked
                ? "2px solid var(--theme-accent)"
                : "2px solid #e5e7eb",
              background: checked
                ? "rgba(var(--theme-accent-rgb), 0.06)"
                : "#fff",
              color: checked ? "var(--theme-accent)" : "#374151",
              fontWeight: checked ? 600 : 400,
            }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggle(opt)}
              className="sr-only"
            />
            <span
              className="w-4 h-4 rounded flex items-center justify-center shrink-0"
              style={{
                border: checked
                  ? "none"
                  : "2px solid #d1d5db",
                background: checked ? "var(--theme-accent)" : "transparent",
              }}
            >
              {checked && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2.5 2.5L8 3"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            {opt}
          </label>
        );
      })}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-base font-semibold mb-3"
      style={{ color: "#0a0a0a" }}
    >
      {children}
    </h3>
  );
}

export default function OfferteAanvragenPage() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [situatie, setSituatie] = useState("");
  const [oppervlakte, setOppervlakte] = useState("");
  const [dikte, setDikte] = useState("");
  const [toevoegingen, setToevoegingen] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const inputStyle = {
    border: "1px solid #e5e7eb",
    background: "#fff",
  };

  return (
    <>
      <Header forceDark />
      <main>
        {/* Hero */}
        <section
          className="pt-28 pb-16 md:pt-36 md:pb-24 px-5"
          style={{ background: "#111111" }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-white font-semibold leading-[1.08] tracking-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                letterSpacing: "-0.025em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              Offerte Aanvragen
            </motion.h1>
            <motion.p
              className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
            >
              Vraag vrijblijvend een offerte aan en ontvang binnen 24 uur een
              prijsindicatie op maat. Gratis en zonder verplichtingen.
            </motion.p>
          </div>
        </section>

        {/* Form section */}
        <section className="py-16 md:py-24 px-5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              {submitted ? (
                <div className="text-center py-20">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background: "rgba(var(--theme-accent-rgb),0.1)",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="var(--theme-accent)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2
                    className="text-2xl font-semibold mb-3"
                    style={{ color: "#0a0a0a" }}
                  >
                    Bedankt voor uw aanvraag!
                  </h2>
                  <p className="mb-2" style={{ color: "#6b7280" }}>
                    Wij nemen binnen 24 uur contact met u op met een
                    vrijblijvende offerte.
                  </p>
                  <p className="text-sm" style={{ color: "#9ca3af" }}>
                    Heeft u dringend een antwoord nodig? Bel ons gerust op{" "}
                    <a
                      href="tel:+31612345678"
                      style={{ color: "var(--theme-accent)" }}
                    >
                      +31 6 1234 5678
                    </a>
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  {/* Project type */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "#fff",
                    }}
                  >
                    <SectionHeading>Projecttype</SectionHeading>
                    <RadioGroup
                      name="projectType"
                      options={PROJECT_TYPES}
                      value={projectType}
                      onChange={setProjectType}
                    />
                  </div>

                  {/* Situatie */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "#fff",
                    }}
                  >
                    <SectionHeading>Situatie / verdieping</SectionHeading>
                    <RadioGroup
                      name="situatie"
                      options={SITUATIES}
                      value={situatie}
                      onChange={setSituatie}
                    />
                  </div>

                  {/* Oppervlakte */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "#fff",
                    }}
                  >
                    <SectionHeading>Oppervlakte</SectionHeading>
                    <div className="relative max-w-xs">
                      <input
                        type="number"
                        min="0"
                        step="any"
                        placeholder="bijv. 80"
                        value={oppervlakte}
                        onChange={(e) => setOppervlakte(e.target.value)}
                        className="w-full px-4 py-3 pr-12 rounded-xl text-sm"
                        style={inputStyle}
                      />
                      <span
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium"
                        style={{ color: "#9ca3af" }}
                      >
                        m&sup2;
                      </span>
                    </div>
                  </div>

                  {/* Dikte */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "#fff",
                    }}
                  >
                    <SectionHeading>Gewenste dikte</SectionHeading>
                    <RadioGroup
                      name="dikte"
                      options={DIKTES}
                      value={dikte}
                      onChange={setDikte}
                    />
                  </div>

                  {/* Toevoegingen */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "#fff",
                    }}
                  >
                    <SectionHeading>Toevoegingen</SectionHeading>
                    <CheckboxGroup
                      options={TOEVOEGINGEN}
                      values={toevoegingen}
                      onChange={setToevoegingen}
                    />
                  </div>

                  {/* Contact info */}
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      border: "1px solid #e5e7eb",
                      background: "#fff",
                    }}
                  >
                    <SectionHeading>Uw gegevens</SectionHeading>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: "#374151" }}
                          >
                            Naam *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl text-sm"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: "#374151" }}
                          >
                            Telefoonnummer *
                          </label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-3 rounded-xl text-sm"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: "#374151" }}
                        >
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm"
                          style={inputStyle}
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: "#374151" }}
                          >
                            Straat
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl text-sm"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: "#374151" }}
                          >
                            Huisnummer
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl text-sm"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: "#374151" }}
                          >
                            Postcode
                          </label>
                          <input
                            type="text"
                            placeholder="bijv. 1234 AB"
                            className="w-full px-4 py-3 rounded-xl text-sm"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium mb-1.5"
                            style={{ color: "#374151" }}
                          >
                            Plaats
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl text-sm"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: "#374151" }}
                        >
                          Extra informatie
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Beschrijf uw project, speciale wensen of vragen..."
                          className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium mb-1.5"
                          style={{ color: "#374151" }}
                        >
                          Foto&apos;s uploaden
                        </label>
                        <div
                          className="rounded-xl p-6 text-center cursor-pointer transition-colors duration-150"
                          style={{
                            border: "2px dashed #d1d5db",
                            background: "#fafafa",
                          }}
                          onClick={() => fileRef.current?.click()}
                        >
                          <input
                            ref={fileRef}
                            type="file"
                            multiple
                            accept="image/*,.pdf"
                            className="hidden"
                            onChange={(e) => setFiles(e.target.files)}
                          />
                          <div
                            className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                            style={{
                              background:
                                "rgba(var(--theme-accent-rgb),0.1)",
                            }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M12 16V8m0 0l-3 3m3-3l3 3M21 15v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
                                stroke="var(--theme-accent)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p
                            className="text-sm font-medium"
                            style={{ color: "#374151" }}
                          >
                            Klik om bestanden te uploaden
                          </p>
                          <p
                            className="text-xs mt-1"
                            style={{ color: "#9ca3af" }}
                          >
                            Afbeeldingen of PDF (max. 10 MB per bestand)
                          </p>
                          {files && files.length > 0 && (
                            <p
                              className="text-sm mt-3 font-medium"
                              style={{ color: "var(--theme-accent)" }}
                            >
                              {files.length} bestand
                              {files.length !== 1 ? "en" : ""} geselecteerd
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-white font-semibold text-base transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                    style={{ background: "var(--theme-accent)" }}
                  >
                    Offerte Aanvragen
                  </button>
                  <p
                    className="text-center text-xs"
                    style={{ color: "#9ca3af" }}
                  >
                    Wij reageren binnen 24 uur. Uw gegevens worden
                    vertrouwelijk behandeld.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Side panel */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.4 }}
            >
              <div className="sticky top-28 space-y-6">
                <div
                  className="rounded-2xl p-7"
                  style={{ background: "#f5f5f5" }}
                >
                  <h3
                    className="font-semibold mb-4"
                    style={{ color: "#0a0a0a" }}
                  >
                    Direct contact
                  </h3>
                  <ul
                    className="space-y-4 text-sm"
                    style={{ color: "#374151" }}
                  >
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"
                            stroke="var(--theme-accent)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Telefoon</p>
                        <a
                          href="tel:+31612345678"
                          className="hover:underline"
                          style={{ color: "#6b7280" }}
                        >
                          +31 6 1234 5678
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                            stroke="var(--theme-accent)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M22 6l-10 7L2 6"
                            stroke="var(--theme-accent)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">E-mail</p>
                        <a
                          href="mailto:info@dekvloerexpert.nl"
                          className="hover:underline"
                          style={{ color: "#6b7280" }}
                        >
                          info@dekvloerexpert.nl
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                            stroke="#25D366"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <a
                          href="https://wa.me/31612345678"
                          className="hover:underline"
                          style={{ color: "#6b7280" }}
                        >
                          Stuur een bericht
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                            stroke="var(--theme-accent)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="10"
                            r="3"
                            stroke="var(--theme-accent)"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="font-medium">Werkgebied</p>
                        <p style={{ color: "#6b7280" }}>Heel Nederland</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-7"
                  style={{ background: "#f5f5f5" }}
                >
                  <h3
                    className="font-semibold mb-3"
                    style={{ color: "#0a0a0a" }}
                  >
                    Waarom DekvloerExpert?
                  </h3>
                  <ul
                    className="space-y-2.5 text-sm"
                    style={{ color: "#6b7280" }}
                  >
                    {[
                      "Gratis vrijblijvende offerte",
                      "Reactie binnen 24 uur",
                      "Scherpe prijzen",
                      "Door heel Nederland",
                      "Jarenlange ervaring",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="shrink-0"
                        >
                          <path
                            d="M4 8l3 3 5-5"
                            stroke="var(--theme-accent)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
