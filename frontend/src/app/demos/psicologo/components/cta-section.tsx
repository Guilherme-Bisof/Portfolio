import { psychologistDemo } from "../data/content";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${psychologistDemo.ctas.whatsappNumber}?text=${encodeURIComponent(psychologistDemo.ctas.whatsappDefaultMessage)}`;

  return (
    <section className="psi-section" style={{ backgroundColor: "var(--primary)", color: "var(--on-dark)" }}>
      <div className="psi-container">
        <div className="psi-cta-grid">
          <div className="psi-reveal">
            <h2 className="psi-serif" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, color: "var(--on-dark)", marginBottom: 24 }}>
              Pronto para dar<br />o primeiro passo?
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#F5F1EA", opacity: 0.88, maxWidth: 460, marginBottom: 32, fontWeight: 300 }}>
              Entre em contato para consultar horários, valores e entender como posso te ajudar nesse momento. Atendimento presencial em Tatuí e online.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="psi-btn-light group">
              Tirar dúvidas sobre o atendimento
              <span className="psi-btn-arrow">→</span>
            </a>
          </div>

          <div className="psi-reveal" style={{ display: "flex", flexDirection: "column", gap: 24, transitionDelay: "150ms" }}>
            <div style={{ borderTop: "1px solid rgba(245,241,234,0.4)", paddingTop: 24 }}>
              <span className="psi-eyebrow" style={{ color: "var(--surface)", opacity: 0.9, marginBottom: 8, display: "block" }}>Consultório</span>
              <p style={{ fontSize: 16, fontWeight: 500, color: "var(--on-dark)", marginBottom: 4 }}>Endereço demonstrativo — Tatuí/SP</p>
              <p style={{ fontSize: 13, color: "var(--on-dark)", opacity: 0.7, fontStyle: "italic" }}>Projeto fictício. Não há dados locais reais.</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(245,241,234,0.4)", paddingTop: 24 }}>
              <span className="psi-eyebrow" style={{ color: "var(--surface)", opacity: 0.9, marginBottom: 8, display: "block" }}>Modalidades</span>
              <p style={{ fontSize: 16, color: "var(--on-dark)" }}>Presencial e Online</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(245,241,234,0.4)", paddingTop: 24 }}>
              <span className="psi-eyebrow" style={{ color: "var(--surface)", opacity: 0.9, marginBottom: 8, display: "block" }}>Registro</span>
              <p style={{ fontSize: 16, color: "var(--on-dark)" }}>CRP 00/00000 (Fictício)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
