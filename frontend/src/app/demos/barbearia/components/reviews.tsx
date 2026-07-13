import { barbershopDemo } from "../data/content";

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bb-section" style={{ backgroundColor: "var(--bb-bg-charcoal)", borderTop: "1px solid var(--bb-border-dark)" }}>
      <div className="bb-container">
        
        <div className="bb-reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <span className="bb-eyebrow" style={{ marginBottom: 16 }}>Reconhecimento</span>
          <h2 className="bb-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", textTransform: "uppercase", color: "var(--bb-text-light)" }}>
            O que dizem
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="md:grid-cols-3">
          {barbershopDemo.reviews.map((review, i) => (
            <div key={i} className="bb-reveal" style={{ backgroundColor: "var(--bb-bg-elevated)", padding: 32, borderRadius: 2, transitionDelay: `${i * 100}ms` }}>
              <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="var(--bb-copper)" stroke="var(--bb-copper)" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: 15, color: "var(--bb-text-muted-light)", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                &quot;{review.text}&quot;
              </p>
              <h4 className="bb-display" style={{ fontSize: 16, color: "var(--bb-text-light)", textTransform: "uppercase" }}>
                — {review.author}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
