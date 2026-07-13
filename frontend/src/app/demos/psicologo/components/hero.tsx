import { psychologistDemo } from "../data/content";
import Image from "next/image";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${psychologistDemo.ctas.whatsappNumber}?text=${encodeURIComponent(psychologistDemo.ctas.whatsappDefaultMessage)}`;

  return (
    <section id="inicio" className="psi-section" style={{ backgroundColor: "var(--bg)", paddingTop: 0, paddingBottom: 64 }}>
      <div className="psi-container">
        
        {/* Solution A: Title and Image intertwined */}
        <div style={{ position: "relative", minHeight: "calc(100vh - 112px)", display: "flex", alignItems: "center" }}>
           <div className="psi-hero-layout w-full">
              
              {/* Left Column (Text) */}
              <div className="psi-hero-content psi-reveal" style={{ zIndex: 2, position: "relative" }}>
                 <div className="psi-eyebrow" style={{ marginBottom: 24 }}>
                    Psicologia Clínica para Adultos
                 </div>
                 <h1
                    className="psi-serif"
                    style={{ 
                      fontSize: "clamp(36px, 6vw, 70px)", 
                      lineHeight: 1.05, 
                      color: "var(--text)", 
                      letterSpacing: "-0.02em", 
                      marginBottom: 32,
                      maxWidth: "110%" // Allows text to slightly overlap or push to the right
                    }}
                  >
                    Um espaço para respirar,<br />
                    se compreender e<br />
                    seguir com mais clareza.
                  </h1>
                  
                  <div style={{ maxWidth: 480 }}>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-muted)", marginBottom: 32, fontWeight: 400 }}>
                      Atendimento psicológico presencial em Tatuí e online, conduzido com escuta, clareza e respeito ao seu tempo.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start", marginBottom: 32 }} className="sm:flex-row sm:items-center">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="psi-btn-primary group">
                        Consultar disponibilidade
                        <span className="psi-btn-arrow">→</span>
                      </a>
                      <a href="#abordagem" className="psi-btn-secondary group">
                        Conhecer o atendimento
                        <span className="psi-btn-arrow ml-1">→</span>
                      </a>
                    </div>

                    <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                      <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                        CRP 00/00000 (Fictício) · Terapia Cognitivo-Comportamental
                      </p>
                    </div>
                  </div>
              </div>

              {/* Right Column (Image) */}
              <div className="psi-hero-image-wrapper psi-image-reveal">
                 <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", maxHeight: 680, overflow: "hidden" }}>
                    <Image
                      src="/uploads/dra_helena_hero.png"
                      alt="Helena Martins — Psicóloga Clínica"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center 20%" }}
                    />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
