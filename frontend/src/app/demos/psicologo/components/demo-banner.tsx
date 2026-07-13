"use client";

import Link from "next/link";
import { useState } from "react";

export default function DemoBanner() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const whatsappUrl = `https://wa.me/5515981837353?text=${encodeURIComponent("Olá! Vi a demonstração de site para Psicólogo no seu portfólio e gostaria de saber como ter um site semelhante.")}`;

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden md:flex items-center justify-between w-full px-6"
        style={{ height: 40, backgroundColor: "#EEEAE3", borderBottom: "1px solid var(--border)", fontSize: 13, color: "var(--text-muted)" }}
      >
        <span>
          Demo fictícia criada por{" "}
          <strong style={{ color: "var(--text)" }}>Guilherme Bisof</strong>
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color .2s" }}>
            Ver portfólio
          </Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, textDecoration: "none" }}>
            Solicitar projeto semelhante
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div
        className="md:hidden flex items-center justify-between w-full px-4"
        style={{ height: 36, backgroundColor: "#EEEAE3", borderBottom: "1px solid var(--border)", fontSize: 11, color: "var(--text-muted)" }}
      >
        <span style={{ fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Projeto demonstrativo
        </span>
        <button
          onClick={() => setPopoverOpen(!popoverOpen)}
          style={{ background: "none", border: "none", color: "var(--text-muted)", textDecoration: "underline", cursor: "pointer", fontSize: 11, padding: 0 }}
        >
          Saiba mais
        </button>
      </div>

      {popoverOpen && (
        <div
          className="md:hidden"
          style={{ position: "fixed", top: 36, left: 0, width: "100%", backgroundColor: "var(--surface)", borderBottom: "1px solid var(--border)", padding: 20, zIndex: 55, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
        >
          <p style={{ fontSize: 14, color: "var(--text)", marginBottom: 16, lineHeight: 1.6 }}>
            Esta é uma <strong>demonstração fictícia</strong> criada por Guilherme Bisof para compor seu portfólio de desenvolvimento web.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Link href="/" style={{ display: "block", textAlign: "center", backgroundColor: "var(--surface-soft)", color: "var(--text)", padding: "10px 0", borderRadius: 8, textDecoration: "none", fontWeight: 500, fontSize: 14 }}>
              Ver portfólio completo
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block", textAlign: "center", backgroundColor: "var(--primary-dark)", color: "var(--on-dark)", padding: "10px 0", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>
              Solicitar projeto semelhante
            </a>
          </div>
        </div>
      )}
    </>
  );
}
