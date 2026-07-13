import { barbershopDemo } from "../data/content";

export default function FAQ() {
  return (
    <section className="bb-section" style={{ backgroundColor: "var(--bb-bg-cream)" }}>
      <div className="bb-container">
        
        <div className="bb-reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <span className="bb-eyebrow" style={{ marginBottom: 16 }}>FAQ</span>
          <h2 className="bb-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", textTransform: "uppercase", color: "var(--bb-text-dark)" }}>
            Dúvidas Frequentes
          </h2>
        </div>

        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {barbershopDemo.faq.map((item, i) => (
            <details key={i} className="bb-faq-details bb-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <summary>
                {item.question}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--bb-copper)" strokeWidth="2" strokeLinecap="round" className="bb-faq-icon" style={{ transition: "transform 0.3s ease" }}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </summary>
              <div style={{ paddingBottom: 24, paddingRight: 48, fontSize: 15, color: "var(--bb-text-muted-dark)", lineHeight: 1.6 }}>
                {item.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
