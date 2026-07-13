import { psychologistDemo } from "../data/content";

export default function TopicsSection() {
  return (
    <section className="psi-section" style={{ backgroundColor: "var(--bg)" }}>
      <div className="psi-container">
        <div className="psi-topics-header psi-reveal" style={{ marginBottom: 64 }}>
          <h2 className="psi-serif" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.1, color: "var(--text)", maxWidth: 600 }}>
            Questões que podem ser acolhidas no processo
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", fontStyle: "italic", maxWidth: 280, lineHeight: 1.6 }}>
            Cada processo é singular. Estes exemplos não substituem avaliação profissional.
          </p>
        </div>

        <div className="psi-topics-grid">
          {psychologistDemo.topics.map((topic, i) => (
            <div key={i} className="psi-reveal" style={{ display: "flex", gap: 24, paddingTop: 28, paddingBottom: 28, borderTop: "1px solid var(--border)", transitionDelay: `${(i % 2) * 100}ms` }}>
              <span className="psi-serif" style={{ fontSize: 28, color: "var(--accent)", flexShrink: 0, width: 40, lineHeight: 1, paddingTop: 2 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>{topic.title}</h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 300 }}>{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
