import { barbershopDemo } from "../data/content";

export default function TrustBar() {
  return (
    <div style={{ backgroundColor: "var(--bb-bg-charcoal)", borderTop: "1px solid var(--bb-border-dark)", borderBottom: "1px solid var(--bb-border-light)" }}>
      <div className="bb-container" style={{ padding: "24px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          {barbershopDemo.trustBar.map((item, i) => (
            <div key={i} className="bb-reveal" style={{ display: "flex", alignItems: "center", gap: 12, transitionDelay: `${i * 100}ms` }}>
              <div style={{ width: 6, height: 6, backgroundColor: "var(--bb-copper)", borderRadius: "50%" }}></div>
              <span className="bb-display" style={{ color: "var(--bb-text-muted-light)", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
