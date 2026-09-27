"use client";

import { useState, useEffect } from "react";

const PASS = "123456";
const KEY = "dve_auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") {
        setAuthed(true);
      }
    } catch {}
    setChecking(false);
  }, []);

  if (checking) return null;

  if (authed) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      try { sessionStorage.setItem(KEY, "1"); } catch {}
      setAuthed(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        padding: "1.25rem",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "#1a1a1a",
          borderRadius: "1.25rem",
          padding: "2.5rem 2rem",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "rgba(13,148,136,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>
        <h1 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          DekvloerExpert
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
          Voer het wachtwoord in om de demo te bekijken.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false); }}
          placeholder="Wachtwoord"
          autoFocus
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            border: error ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            color: "#fff",
            fontSize: "0.9375rem",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        {error && (
          <p style={{ color: "#ef4444", fontSize: "0.8125rem", marginTop: "0.5rem" }}>
            Onjuist wachtwoord. Probeer opnieuw.
          </p>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            marginTop: "1rem",
            padding: "0.75rem",
            borderRadius: "0.75rem",
            background: "#0d9488",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.9375rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Inloggen
        </button>
      </form>
    </div>
  );
}
