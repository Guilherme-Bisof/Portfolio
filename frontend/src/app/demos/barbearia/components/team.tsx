import { barbershopDemo } from "../data/content";
import Image from "next/image";

export default function Team() {
  return (
    <section id="equipe" className="bb-section" style={{ backgroundColor: "var(--bb-bg-cream)" }}>
      <div className="bb-container">
        <div className="bb-reveal" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 64 }}>
          <span className="bb-eyebrow" style={{ marginBottom: 16 }}>Nossa Equipe</span>
          <h2 className="bb-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", textTransform: "uppercase", color: "var(--bb-text-dark)" }}>
            Mestres do Ofício
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="md:grid-cols-3">
          {barbershopDemo.team.map((member, i) => (
            <div key={i} className="bb-reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", marginBottom: 24, overflow: "hidden" }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                  className="hover:scale-105"
                />
              </div>
              <h3 className="bb-display" style={{ fontSize: 24, textTransform: "uppercase", color: "var(--bb-text-dark)", marginBottom: 8 }}>
                {member.name}
              </h3>
              <p style={{ fontSize: 14, color: "var(--bb-text-muted-dark)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
