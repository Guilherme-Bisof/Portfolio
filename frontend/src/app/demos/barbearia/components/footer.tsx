import { barbershopDemo } from "../data/content";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${barbershopDemo.ctas.whatsappNumber}?text=${encodeURIComponent(barbershopDemo.ctas.whatsappDefaultMessage)}`;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="bb-section" style={{ backgroundColor: "var(--bb-bg-charcoal)", textAlign: "center", borderTop: "1px solid var(--bb-border-dark)" }}>
        <div className="bb-container bb-reveal">
          <span className="bb-serif-italic" style={{ fontSize: 32, color: "var(--bb-copper)", display: "block", marginBottom: 24 }}>
            Pronto para uma pausa?
          </span>
          <h2 className="bb-display" style={{ fontSize: "clamp(32px, 5vw, 56px)", color: "var(--bb-text-light)", textTransform: "uppercase", marginBottom: 40 }}>
            Reserve seus 45 minutos<br /> de tranquilidade.
          </h2>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bb-btn-primary">
            {barbershopDemo.ctas.primaryText}
          </a>
        </div>
      </section>

      <footer style={{ backgroundColor: "var(--bb-bg-charcoal)", padding: "48px 0 24px", borderTop: "1px solid var(--bb-border-dark)" }}>
        <div className="bb-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, marginBottom: 48 }} className="md:grid-cols-3">
            
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span className="bb-serif-italic" style={{ color: "var(--bb-copper)", fontSize: 24, lineHeight: 1 }}>
                  {barbershopDemo.header.brandName.charAt(0)}
                </span>
                <span className="bb-display" style={{ color: "var(--bb-text-light)", fontSize: 20, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1 }}>
                  {barbershopDemo.header.brandName}
                </span>
              </div>
              <p style={{ fontSize: 14, color: "var(--bb-text-muted-light)", lineHeight: 1.6, maxWidth: 300 }}>
                {barbershopDemo.contact.address}
              </p>
            </div>

            <div>
              <h4 className="bb-display" style={{ fontSize: 14, color: "var(--bb-text-light)", textTransform: "uppercase", marginBottom: 24, letterSpacing: "0.05em" }}>
                Horários
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {barbershopDemo.contact.schedule.map((s, i) => (
                  <li key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "var(--bb-text-muted-light)", borderBottom: "1px solid var(--bb-border-dark)", paddingBottom: 8 }}>
                    <span>{s.days}</span>
                    <span className="bb-serif-italic" style={{ color: "var(--bb-copper)" }}>{s.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="bb-display" style={{ fontSize: 14, color: "var(--bb-text-light)", textTransform: "uppercase", marginBottom: 24, letterSpacing: "0.05em" }}>
                Projeto Demonstrativo
              </h4>
              <p style={{ fontSize: 13, color: "var(--bb-text-muted-light)", lineHeight: 1.6 }}>
                Este site é uma simulação criada para o portfólio de Guilherme Bisof. A empresa, local, equipe e valores são inteiramente fictícios.
              </p>
            </div>

          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid var(--bb-border-dark)" }} className="md:flex-row md:justify-between">
            <p style={{ fontSize: 12, color: "var(--bb-text-muted-light)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              © {currentYear} {barbershopDemo.header.brandName} Barber Shop. Demo by Guilherme Bisof.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ color: "var(--bb-text-muted-light)", textDecoration: "none", fontSize: 12, textTransform: "uppercase" }}>Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
