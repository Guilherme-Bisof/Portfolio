"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { psychologistDemo } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${psychologistDemo.ctas.whatsappNumber}?text=${encodeURIComponent(psychologistDemo.ctas.whatsappDefaultMessage)}`;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    
    // Initial reveal animation trigger for the page
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("psi-visible");
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.psi-reveal, .psi-image-reveal').forEach(el => observer.observe(el));
    
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Abordagem", href: "#abordagem" },
    { label: "Dúvidas", href: "#duvidas" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: scrolled ? "rgba(245,241,234,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.3s ease, height 0.3s ease",
      }}
    >
      <div style={{ 
        maxWidth: 1200, 
        margin: "0 auto", 
        padding: "0 24px", 
        height: scrolled ? 64 : 80, 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        transition: "height 0.3s ease"
      }}>
        {/* Adjusted Logo: Serif name + Sans-serif spec */}
        <Link href="#inicio" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
          <span className="psi-serif" style={{ fontSize: 22, color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            Helena Martins
          </span>
          <span style={{ fontSize: 10, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Psicologia Clínica
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: 40 }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="psi-nav-link" style={{ fontSize: 14, fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}>
              {link.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="psi-btn-primary group" style={{ padding: "10px 24px", fontSize: 14, minHeight: 40 }}>
            Consultar disponibilidade
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" style={{ transition: "transform 0.3s ease" }}>
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden animate-in slide-in-from-top-2 duration-300"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 16, fontWeight: 500, color: "var(--text)", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="psi-btn-primary" style={{ textAlign: "center", marginTop: 8 }}>
            Consultar disponibilidade
          </a>
        </div>
      )}
    </header>
  );
}
