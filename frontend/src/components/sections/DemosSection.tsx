"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function DemosSection() {
  const { language } = useLanguage();
  const isEn = language === "en";

  const demos = [
    {
      title: isEn ? "Site for Psychologist" : "Demo para Psicólogo",
      description: isEn 
        ? "Example of a professional site to present services, consultation formats, FAQs, and WhatsApp scheduling." 
        : "Exemplo de site profissional para apresentar atendimento, formatos de consulta, perguntas frequentes, localização e agendamento pelo WhatsApp.",
      url: "/demos/psicologo"
    },
    {
      title: isEn ? "Site for Barbershop" : "Demo para Barbearia",
      description: isEn 
        ? "Example of a commercial site with services, price list, haircuts gallery, location, and direct scheduling." 
        : "Exemplo de site comercial com serviços, tabela de preços, galeria de cortes, localização e agendamento direto.",
      url: "/demos/barbearia"
    },
    {
      title: isEn ? "Site for Restaurant" : "Demo para Restaurante",
      description: isEn 
        ? "Example of a gastronomic site with visual presentation of dishes, digital menu, environment, and reservations." 
        : "Exemplo de site gastronômico com apresentação visual de pratos, cardápio digital, ambiente e reservas.",
      url: "/demos/restaurante"
    }
  ];

  return (
    <section id="demos" className="py-24 bg-[#111] border-t border-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {isEn ? "Sites for local businesses" : "Sites para negócios locais"}
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-2xl">
            {isEn 
              ? "Demonstrations of pages that I can adapt for different types of companies and professionals."
              : "Demonstrações de páginas que posso adaptar para diferentes tipos de empresa e profissional."}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="grid md:grid-cols-3 gap-6"
        >
          {demos.map((demo, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 flex flex-col hover:border-neutral-600 transition-colors">
              <span className="text-xs font-mono tracking-widest uppercase mb-4 block text-neutral-500 font-semibold">
                {isEn ? "Commercial Demo" : "Demonstração comercial"}
              </span>
              <h3 className="text-xl font-bold mb-3 text-white">{demo.title}</h3>
              <p className="text-neutral-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                {demo.description}
              </p>
              <Link 
                href={demo.url}
                className="w-full text-center bg-transparent border border-neutral-700 text-white font-semibold py-3 px-4 rounded-lg hover:border-neutral-500 transition-colors text-sm"
              >
                {isEn ? "View Demonstration ↗" : "Ver demonstração ↗"}
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
