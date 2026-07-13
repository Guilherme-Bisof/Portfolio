import { psychologistDemo } from "../data/content";

export default function ApproachSection() {
  return (
    <section id="abordagem" className="psi-section" style={{ backgroundColor: "var(--primary-dark)", color: "var(--on-dark)" }}>
      <div className="psi-container">
        <div className="psi-reveal" style={{ marginBottom: 64 }}>
          <span className="psi-eyebrow" style={{ color: "var(--accent)", marginBottom: 16, display: "block" }}>Abordagem Terapêutica</span>
          <h2 className="psi-serif" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, color: "var(--on-dark)", maxWidth: 700 }}>
            Uma abordagem colaborativa e focada no presente.
          </h2>
        </div>

        <div className="psi-principles-grid">
          {psychologistDemo.approach.principles?.map((p, i) => (
            <div key={i} className="psi-reveal" style={{ borderTop: "1px solid rgba(245,241,234,0.15)", paddingTop: 32, transitionDelay: `${i * 100}ms` }}>
              <span className="psi-serif" style={{ fontSize: 36, color: "var(--accent)", display: "block", marginBottom: 16 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--on-dark)", marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontSize: 15, color: "var(--on-dark-muted)", lineHeight: 1.7, fontWeight: 300 }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
