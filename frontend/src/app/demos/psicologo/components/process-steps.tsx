import { psychologistDemo } from "../data/content";

export default function ProcessSteps() {
  const whatsappUrl = `https://wa.me/${psychologistDemo.ctas.whatsappNumber}?text=${encodeURIComponent(psychologistDemo.ctas.whatsappDefaultMessage)}`;

  return (
    <section className="psi-section" style={{ backgroundColor: "var(--bg)" }}>
      <div className="psi-container">
        <h2 className="psi-serif psi-reveal" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, color: "var(--text)", marginBottom: 64 }}>
          Como iniciar o atendimento
        </h2>

        <div className="psi-steps-grid">
          {psychologistDemo.steps.map((step, i) => (
            <div key={i} className="psi-reveal" style={{ display: "flex", flexDirection: "column", paddingTop: 32, paddingBottom: 32, borderTop: "1px solid var(--border)", transitionDelay: `${i * 100}ms` }}>
              <span className="psi-serif" style={{ fontSize: "clamp(48px, 6vw, 72px)", color: "#C8876A", opacity: 0.55, lineHeight: 1, marginBottom: 16 }}>
                0{step.number}
              </span>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 300, maxWidth: 320 }}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="psi-reveal" style={{ marginTop: 48 }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="psi-btn-primary group">
            Consultar disponibilidade
            <span className="psi-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
