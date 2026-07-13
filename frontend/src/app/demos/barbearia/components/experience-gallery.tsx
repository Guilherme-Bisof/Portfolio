import { barbershopDemo } from "../data/content";
import Image from "next/image";

export default function ExperienceGallery() {
  return (
    <section id="experiencia" style={{ backgroundColor: "var(--bb-bg-charcoal)" }}>
      {/* Experience Block */}
      <div className="bb-section border-b border-[#373A3E]">
        <div className="bb-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center" }} className="md:grid-cols-2 md:gap-24">
            
            {/* Left Image */}
            <div className="bb-image-reveal" style={{ position: "relative", width: "100%", aspectRatio: "4/5", maxWidth: 500, margin: "0 auto" }}>
              <Image
                src={barbershopDemo.experience.image}
                alt="Processo"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Right Text */}
            <div className="bb-reveal">
              <span className="bb-eyebrow" style={{ display: "block", marginBottom: 24 }}>O Processo</span>
              <h2 className="bb-display" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--bb-text-light)", textTransform: "uppercase", marginBottom: 24, lineHeight: 1.1 }}>
                {barbershopDemo.experience.title}
              </h2>
              <p style={{ fontSize: 16, color: "var(--bb-text-muted-light)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
                {barbershopDemo.experience.description}
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {barbershopDemo.howItWorks.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: 24 }}>
                    <span className="bb-serif-italic" style={{ fontSize: 24, color: "var(--bb-copper)", flexShrink: 0, marginTop: 4 }}>
                      {step.step}
                    </span>
                    <div>
                      <h4 className="bb-display" style={{ fontSize: 18, color: "var(--bb-text-light)", textTransform: "uppercase", marginBottom: 8 }}>
                        {step.title}
                      </h4>
                      <p style={{ fontSize: 14, color: "var(--bb-text-muted-light)", lineHeight: 1.6 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Gallery Block */}
      <div style={{ padding: "24px 0", backgroundColor: "var(--bb-bg-charcoal)" }}>
         <div className="bb-container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }} className="md:grid-cols-2">
              {barbershopDemo.gallery.map((img, i) => (
                <div key={i} className="bb-image-reveal" style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                   <Image src={img} alt="Galeria" fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
         </div>
      </div>
    </section>
  );
}
