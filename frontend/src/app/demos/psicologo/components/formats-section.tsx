import { psychologistDemo } from "../data/content";

export default function FormatsSection() {
  return (
    <section className="psi-section" style={{ backgroundColor: "var(--surface-soft)" }}>
      <div className="psi-container">
        <h2 className="psi-serif psi-reveal" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, color: "var(--text)", marginBottom: 64 }}>
          Formatos de Atendimento
        </h2>

        <div className="psi-formats-grid">
          {psychologistDemo.formats.map((format, i) => (
            <div key={i} className={`psi-reveal ${i === 0 ? "psi-format-left" : "psi-format-right"}`}>
              <span className="psi-eyebrow" style={{ marginBottom: 16, display: "block", color: "var(--accent)" }}>
                {i === 0 ? "Presencial" : "Online"}
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "var(--text)", marginBottom: 16, lineHeight: 1.2 }}>{format.title}</h3>
              <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: 24 }}>{format.description}</p>
              
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {format.bullets?.map((bullet, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
