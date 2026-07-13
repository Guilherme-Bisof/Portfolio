import Link from "next/link";

export default function Footer() {
  return (
    <footer className="psi-reveal" style={{ backgroundColor: "var(--bg)", borderTop: "1px solid var(--border)", paddingTop: 80, paddingBottom: 40 }}>
      <div className="psi-container" style={{ padding: "0 24px" }}>
        <div className="psi-footer-grid" style={{ marginBottom: 64 }}>
          <div>
            <h2 className="psi-serif" style={{ fontSize: 28, color: "var(--text)", marginBottom: 12 }}>Helena Martins</h2>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 260 }}>Psicologia clínica para adultos. Atendimento presencial e online.</p>
          </div>
          <div>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Navegação</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Link href="#inicio" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Início</Link>
              <Link href="#sobre" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Sobre</Link>
              <Link href="#abordagem" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Abordagem</Link>
              <Link href="#duvidas" style={{ fontSize: 14, color: "var(--text-muted)", textDecoration: "none" }}>Dúvidas</Link>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Atendimento</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>Presencial (Tatuí/SP)</span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>Online (Videochamada)</span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>TCC</span>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Credenciais</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>CRP 00/00000 (Fictício)</p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.6, borderLeft: "2px solid var(--accent)", paddingLeft: 12 }}>
              Esta é uma página demonstrativa. Dados e personalidades são fictícios.
            </p>
          </div>
        </div>

        <div className="psi-footer-bottom" style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>© {new Date().getFullYear()} Helena Martins. Projeto demonstrativo.</p>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            Design e Desenvolvimento por{" "}
            <Link href="/" style={{ color: "var(--text)", fontWeight: 600, textDecoration: "underline", textDecorationColor: "var(--border)", textUnderlineOffset: 3 }}>
              Guilherme Bisof
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
