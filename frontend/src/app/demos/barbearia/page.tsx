"use client";

import React, { useEffect } from "react";
import DemoBanner from "@/components/demos/DemoBanner";
import Header from "./components/header";
import Hero from "./components/hero";
import TrustBar from "./components/trust-bar";
import Services from "./components/services";
import ExperienceGallery from "./components/experience-gallery";
import Team from "./components/team";
import Reviews from "./components/reviews";
import FAQ from "./components/faq";
import Footer from "./components/footer";

export default function BarbeariaDemo() {
  useEffect(() => {
    // Intersection Observer for .bb-reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bb-visible");
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.bb-reveal, .bb-image-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="barbearia-demo">
      <DemoBanner demoName="barbearias" />
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <ExperienceGallery />
      <Team />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}
