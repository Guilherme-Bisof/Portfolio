"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: "Estagiário de Projeto",
    company: "Uotz - Inteligência de Mercado",
    period: "Set. 2025 — Presente",
    description: "• Elaboração de cenário de testes em processos, serviços e soluções digitais;\n• Execução de testes de validação das jornadas de produtos digitais e telecom (Quality Assurance e Customer Experience);\n• Confecção de relatórios, análise de resultados e report para área demandante e para os clientes."
  },
  {
    role: "Estagiário Administrativo",
    company: "Justiça Restaurativa",
    period: "Maio 2025 - Set. 2025",
    description: "Atuação focada na modernização do sistema web de gestão de processos e agendamentos institucionais.\n• Desenvolvimento full-stack da plataforma utilizando PHP, MySQL e Bootstrap.\n• Redução de 40% no tempo de triagem via digitalização e indexação de documentos.\n• Segurança avançada: proteção contra SQL Injection (Prepared Statements), criptografia de senhas e controle de acesso (RBAC)."
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer / Projetos Pessoais",
    period: "2023 — Presente",
    description:
      "Desenvolvimento de sistemas escaláveis, incluindo plataformas de gestão offline com Electron e aplicações web modernas utilizando Next.js, Node.js e bancos de dados relacionais.",
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

export default function ExperienceSection() {
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
            Experiência.
          </h2>
          <p className="text-neutral-400 font-light text-lg">
            Histórico profissional e atuação prática.
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
