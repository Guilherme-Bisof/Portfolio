import DemoBanner from "./components/demo-banner";
import Header from "./components/header";
import Hero from "./components/hero";
import AboutSection from "./components/about-section";
import TopicsSection from "./components/topics-section";
import ApproachSection from "./components/approach-section";
import FormatsSection from "./components/formats-section";
import ProcessSteps from "./components/process-steps";
import FAQ from "./components/faq";
import CTASection from "./components/cta-section";
import Footer from "./components/footer";

export default function PsicologoDemo() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <DemoBanner />
      <Header />

      <article>
        <Hero />
        <AboutSection />
        <TopicsSection />
        <ApproachSection />
        <FormatsSection />
        <ProcessSteps />
        <FAQ />
        <CTASection />
      </article>

      <Footer />
    </main>
  );
}
