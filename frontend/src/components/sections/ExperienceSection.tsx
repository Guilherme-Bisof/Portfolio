"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ExperienceSection() {
  const { t } = useLanguage();
  const experiences = t("experience.jobs") as Experience[];

  return (
    <section
      id="experiencia"
      className="flex flex-col py-32 bg-[#0a0a0a] text-white"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
            {t("experience.title")}
          </h2>
          <p className="text-neutral-400 font-light text-lg">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col gap-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={sectionVariant}
              className="flex flex-col md:flex-row gap-4 md:gap-12 group"
            >
              <div className="md:w-1/4 shrink-0 pt-1">
                <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest group-hover:text-neutral-300 transition-colors">
                  {exp.period}
                </span>
              </div>

              {/* Detalhes do cargo */}
              <div className="flex-1 pb-12 border-b border-neutral-900 group-hover:border-neutral-700 transition-colors">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-neutral-400 font-medium mb-4">
                  {exp.company}
                </h4>
                <p className="text-neutral-400 font-light leading-relaxed whitespace-pre-line">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
