import { psychologistDemo } from "../data/content";

export default function FAQ() {
  return (
    <section id="duvidas" className="psi-section" style={{ backgroundColor: "var(--surface)" }}>
      <div className="psi-container">
        <h2 className="psi-serif psi-reveal" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, color: "var(--text)", marginBottom: 48 }}>
          Dúvidas frequentes
        </h2>

        <div className="psi-reveal" style={{ borderTop: "1px solid var(--border)" }}>
          {psychologistDemo.faq.map((item, i) => (
            <details key={i} style={{ borderBottom: "1px solid var(--border)" }}>
              <summary style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", cursor: "pointer", fontSize: 17, fontWeight: 600, color: "var(--text)", userSelect: "none", lineHeight: 1.4 }}>
                {item.question}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" style={{ flexShrink: 0, marginLeft: 16, transition: "transform 0.3s ease" }} className="faq-icon">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </summary>
              <div style={{ paddingBottom: 24, paddingRight: 48, fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300 }}>
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
