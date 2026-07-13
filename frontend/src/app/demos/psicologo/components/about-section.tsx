import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="psi-section" style={{ backgroundColor: "var(--surface-soft)" }}>
      <div className="psi-container">
        
        {/* Giant Quote */}
        <div className="psi-reveal" style={{ marginBottom: 72 }}>
          <blockquote
            className="psi-serif"
            style={{ 
              fontSize: "clamp(24px, 3.5vw, 42px)", // slightly smaller (~8% less)
              lineHeight: 1.25, 
              color: "var(--text)", 
              maxWidth: 760, 
              position: "relative", 
              paddingLeft: 0, 
              margin: 0 
            }}
          >
            <span style={{ color: "var(--accent)", fontSize: "1.3em", lineHeight: 0, position: "relative", top: 8 }}>&ldquo;</span>
            Meu trabalho não é oferecer respostas prontas, mas construir um espaço seguro para que você compreenda suas próprias questões.
            <span style={{ color: "var(--accent)" }}>&rdquo;</span>
          </blockquote>
          <p style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 24, fontStyle: "italic" }}>
            — Princípio que orienta meu trabalho
          </p>
        </div>

        {/* Two-column: About Text + Image */}
        <div className="psi-about-grid">
          <div className="psi-reveal" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: 20, marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Helena Martins</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: 4 }}>
                <li>Psicóloga clínica</li>
                <li>Formação ilustrativa em Psicologia</li>
                <li>Especialização em Terapia Cognitivo-Comportamental</li>
                <li>Atendimento de adultos</li>
              </ul>
            </div>
            
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", fontWeight: 300, maxWidth: 520, marginBottom: 24 }}>
              Acredito que o processo terapêutico não precisa ser frio ou distante. Minha escuta é focada em compreender a sua realidade de forma humana e prática, ajudando você a desenvolver ferramentas para lidar com a ansiedade, estresse e mudanças de vida, sempre respeitando o seu tempo.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--text)", fontWeight: 300, maxWidth: 520, marginBottom: 32 }}>
              Cada sessão é construída no seu ritmo. Meu objetivo é proporcionar um ambiente livre de julgamentos, onde você tenha a segurança necessária para investigar suas próprias questões.
            </p>

            <div style={{ padding: "16px", backgroundColor: "rgba(245,241,234,0.5)", border: "1px solid var(--border)", borderRadius: 4, display: "inline-block", maxWidth: 400 }}>
              <p style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.5 }}>
                Formação e credenciais apresentadas apenas para fins demonstrativos.
              </p>
            </div>
          </div>

          <div className="psi-image-reveal" style={{ position: "relative", width: "100%", aspectRatio: "4/5", overflow: "hidden" }}>
            <Image
              src="/uploads/therapy_room_psicologo.png"
              alt="Consultório de Psicologia — Ambiente acolhedor"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
