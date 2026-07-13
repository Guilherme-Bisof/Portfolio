"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { featuredProjects, FeaturedProject } from "@/data/featuredProjects";
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

export default function ProjectsSection() {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const categories = [
    "Todos",
    "Sites e landing pages",
    "Sistemas web",
    "Aplicações desktop"
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? featuredProjects
      : featuredProjects.filter((project) => project.categoryFilter === activeFilter);

  return (
    <>
      <section
        id="projetos"
        className="flex flex-col py-32 bg-[#0a0a0a] text-white overflow-hidden"
      >
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
          {/* Título*/}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariant}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              {language === "en" ? "Featured Projects." : "Projetos em destaque."}
            </h2>
            <p className="text-neutral-400 font-light text-lg mb-10 max-w-2xl">
              {language === "en"
                ? "A selection of landing pages, platforms, and systems I developed to transform real ideas and processes into functional digital experiences."
                : "Uma seleção de landing pages, plataformas e sistemas que desenvolvi para transformar ideias e processos reais em experiências digitais funcionais."}
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap gap-6 mb-8">
              {categories.map((category) => {
                const isSelected = activeFilter === category;
                const buttonClass = isSelected
                  ? "text-white border-b border-white pb-1 text-sm font-medium transition-colors"
                  : "text-neutral-500 hover:text-neutral-300 pb-1 text-sm font-medium transition-colors cursor-pointer";

                let displayCategory = category;
                if (language === "en") {
                  if (category === "Todos") displayCategory = "All";
                  if (category === "Sites e landing pages") displayCategory = "Sites & Landing Pages";
                  if (category === "Sistemas web") displayCategory = "Web Systems";
                  if (category === "Aplicações desktop") displayCategory = "Desktop Apps";
                }

                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={buttonClass}
                  >
                    {displayCategory}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Grid de Projetos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
            {filteredProjects.length === 0 && (
              <p className="text-neutral-500 py-12 font-mono text-sm">
                Nenhum projeto encontrado.
              </p>
            )}
          </motion.div>

          {/* Bloco Comercial */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
            className="bg-[#111111] border border-neutral-800 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {language === "en" ? "Need something similar for your business?" : "Precisa de algo parecido para sua empresa?"}
            </h3>
            <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "I develop landing pages, institutional websites, and custom systems, from organizing the idea to publishing."
                : "Desenvolvo landing pages, sites institucionais e sistemas sob medida, desde a organização da ideia até a publicação."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="#contato"
                className="w-full sm:w-auto bg-white text-black font-semibold py-4 px-8 rounded-lg hover:bg-neutral-200 transition-colors"
              >
                {language === "en" ? "Request a Quote" : "Solicitar orçamento"}
              </a>
              <a 
                href="#servicos"
                className="w-full sm:w-auto bg-transparent border border-neutral-700 text-white font-semibold py-4 px-8 rounded-lg hover:border-neutral-500 transition-colors"
              >
                {language === "en" ? "View Services" : "Conhecer os serviços"}
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
