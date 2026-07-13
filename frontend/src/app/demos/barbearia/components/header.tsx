"use client";

import { useEffect, useState } from "react";
import { barbershopDemo } from "../data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: "40px", // Below DemoBanner
          left: 0,
          right: 0,
          zIndex: 40,
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "rgba(31, 33, 35, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid var(--bb-border-dark)" : "1px solid transparent",
          padding: scrolled ? "16px 0" : "24px 0",
        }}
      >
        <div className="bb-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span className="bb-serif-italic" style={{ color: "var(--bb-copper)", fontSize: 24, lineHeight: 1 }}>
              {barbershopDemo.header.brandName.charAt(0)}
            </span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="bb-display" style={{ color: "var(--bb-text-light)", fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1 }}>
                {barbershopDemo.header.brandName}
              </span>
              <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--bb-text-muted-light)", marginTop: 2 }}>
                {barbershopDemo.header.brandSubtitle}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex" style={{ gap: 32 }}>
            {barbershopDemo.header.nav.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--bb-text-light)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--bb-copper)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--bb-text-light)"}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a 
              href={`https://wa.me/${barbershopDemo.ctas.whatsappNumber}?text=${encodeURIComponent(barbershopDemo.ctas.whatsappDefaultMessage)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex bb-btn-primary"
              style={{ padding: "12px 24px", minHeight: "auto", fontSize: 12 }}
            >
              {barbershopDemo.ctas.primaryText}
            </a>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: "none", border: "none", color: "var(--bb-text-light)", padding: 8, cursor: "pointer" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: "100px", left: 0, right: 0, bottom: 0,
          backgroundColor: "var(--bb-bg-charcoal)",
          zIndex: 39,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 32
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 40 }}>
            {barbershopDemo.header.nav.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: 24, color: "var(--bb-text-light)", textDecoration: "none" }}
                className="bb-display"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a 
            href={`https://wa.me/${barbershopDemo.ctas.whatsappNumber}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="bb-btn-primary"
            style={{ width: "100%" }}
          >
            {barbershopDemo.ctas.primaryText}
          </a>
        </div>
      )}
    </>
  );
}
