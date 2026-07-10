"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Graduation {
  course: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
}

interface ComplementaryCourse {
  name: string;
  institution: string;
  year: string;
}

const graduation: Graduation = {
  course: "Análise e Desenvolvimento de Sistemas",
  institution: "UniCesumar - Tatuí/SP",
  period: "Set. 2025 - Jun. 2028",
  description:
    "Foco em desenvolvimento de sistemas escaláveis e arquitetura de aplicações reais.",
  tags: ["Engenharia de Software", "Sistemas", "Projetos Reais"],
};

const complementaryCourses: ComplementaryCourse[] = [
  { name: "Linux Unhatched", institution: "Cisco", year: "2025" },
  { name: "Introdução à POO", institution: "Fundação Bradesco", year: "2025" },
  { name: "Versionamento com Git/GitHub", institution: "DIO", year: "2025" },
  {
    name: "Site com HTML, CSS e JS",
    institution: "Fundação Bradesco",
    year: "2024",
  },
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function EducationSection() {
  return (
    <section id="educacao" className="flex flex-col py-32 bg-black text-white">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
            Trajetória.
          </h2>
          <p className="text-neutral-400 font-light text-lg">
            Formação acadêmica e especializações.
          </p>
        </motion.div>

        {/* Bloco de Graduação*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="mb-20 border-l border-neutral-800 pl-6 md:pl-8"
        >
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {graduation.course}
            </h3>
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">
              {graduation.period}
            </span>
          </div>
          <p className="text-lg text-neutral-300 mb-2 font-medium">
            {graduation.institution}
          </p>
          <p className="text-neutral-400 mb-6 font-light leading-relaxed max-w-2xl">
            {graduation.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {graduation.tags.map((tag) => (
              <span
                key={tag}
                className="border border-neutral-800 text-neutral-500 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Linha do tempo*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <h3 className="text-xl font-medium tracking-tight mb-8 text-neutral-300">
            Especializações Complementares
          </h3>
          <div className="flex flex-col">
            {complementaryCourses.map((course, index) => (
              <motion.div
                key={course.name}
                variants={sectionVariant}
                className="group flex flex-col sm:flex-row sm:items-center py-5 border-t border-neutral-900 hover:border-neutral-700 transition-colors gap-2 sm:gap-6"
              >
                <div className="text-neutral-600 font-mono text-sm sm:w-24 shrink-0 transition-colors group-hover:text-neutral-400">
                  {course.year}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-neutral-200 transition-colors group-hover:text-white">
                    {course.name}
                  </h4>
                  <p className="text-sm text-neutral-500 font-light mt-1">
                    {course.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
