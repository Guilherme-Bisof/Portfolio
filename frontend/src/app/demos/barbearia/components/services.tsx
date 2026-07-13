import { barbershopDemo } from "../data/content";

export default function Services() {
  const whatsappUrl = `https://wa.me/${barbershopDemo.ctas.whatsappNumber}?text=${encodeURIComponent(barbershopDemo.ctas.whatsappDefaultMessage)}`;

  return (
    <section id="servicos" className="bb-section" style={{ backgroundColor: "var(--bb-bg-cream)" }}>
      <div className="bb-container">
        
        <div className="bb-reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <span className="bb-eyebrow" style={{ marginBottom: 16 }}>Tabela de Preços</span>
          <h2 className="bb-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", textTransform: "uppercase", color: "var(--bb-text-dark)" }}>
            Serviços
          </h2>
        </div>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {barbershopDemo.services.map((service, i) => (
            <div key={service.id} className="bb-service-item bb-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="bb-service-info">
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
                  <h3 className="bb-display" style={{ fontSize: 24, textTransform: "uppercase", color: "var(--bb-text-dark)" }}>
                    {service.title}
                  </h3>
                  <span style={{ fontSize: 13, color: "var(--bb-text-muted-dark)", letterSpacing: "0.05em" }}>
                    {service.duration}
                  </span>
                </div>
                <p style={{ fontSize: 15, color: "var(--bb-text-muted-dark)", lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>
              
              <div className="bb-service-price">
                <span className="bb-serif-italic" style={{ fontSize: 32, color: "var(--bb-copper)" }}>
                  {service.price}
                </span>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--bb-border-dark)",
                    color: "var(--bb-text-dark)", textDecoration: "none", transition: "all 0.2s"
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--bb-text-dark)"; e.currentTarget.style.color = "var(--bb-bg-cream)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--bb-text-dark)"; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
