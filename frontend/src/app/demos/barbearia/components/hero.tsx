import { barbershopDemo } from "../data/content";
import Image from "next/image";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${barbershopDemo.ctas.whatsappNumber}?text=${encodeURIComponent(barbershopDemo.ctas.whatsappDefaultMessage)}`;

  return (
    <section id="inicio" style={{ position: "relative", backgroundColor: "var(--bb-bg-charcoal)", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
      {/* Background Image with Overlay */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1, overflow: "hidden" }}>
        <Image
          src={barbershopDemo.hero.image}
          alt="Barbershop Environment"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.4 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(31,33,35,0.95) 0%, rgba(31,33,35,0.7) 50%, rgba(31,33,35,0.4) 100%)" }} />
      </div>

      <div className="bb-container" style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <div className="bb-reveal" style={{ maxWidth: 640 }}>
          <span className="bb-eyebrow" style={{ display: "block", marginBottom: 24, borderLeft: "2px solid var(--bb-copper)", paddingLeft: 16 }}>
            {barbershopDemo.hero.eyebrow}
          </span>
          
          <h1 className="bb-display" style={{ fontSize: "clamp(40px, 7vw, 72px)", color: "var(--bb-text-light)", lineHeight: 1.1, marginBottom: 24, textTransform: "uppercase" }}>
            {barbershopDemo.hero.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h1>
          
          <p style={{ fontSize: 18, color: "var(--bb-text-muted-light)", lineHeight: 1.6, marginBottom: 48, maxWidth: 500 }}>
            {barbershopDemo.hero.subtitle}
          </p>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bb-btn-primary">
              {barbershopDemo.ctas.primaryText}
            </a>
            <a href="#servicos" className="bb-btn-secondary">
              {barbershopDemo.ctas.secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
