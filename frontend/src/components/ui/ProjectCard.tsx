"use client";

import { FeaturedProject } from "@/data/featuredProjects";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface ProjectCardProps {
  project: FeaturedProject;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { language } = useLanguage();

  const isEn = language === "en";
  const displayCategory = isEn ? project.categoryLabelEn : project.categoryLabel;
  const displayTitle = isEn ? project.titleEn : project.title;
  const displayDescription = isEn ? project.descriptionEn : project.description;
  const displayHighlights = isEn ? project.highlightsEn : project.highlights;
  const imageSrc = project.image;

  const handleAction = (e: React.MouseEvent, actionType: string, url?: string) => {
    e.stopPropagation(); // Previne que o card inteiro dispare o onClick se clicarmos num botão
    if (actionType === "url" && url) {
      window.open(url, "_blank");
    } else {
      onClick(); // Abre o modal
    }
  };

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#111111] rounded-2xl border border-neutral-900 overflow-hidden flex flex-col h-full cursor-pointer group transition-colors hover:bg-[#131313] hover:border-neutral-700"
    >
      {/* Imagem */}
      <div className="h-64 overflow-hidden relative border-b border-neutral-900">
        <Image
          src={imageSrc}
          alt={displayTitle}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#111111] to-transparent opacity-50"></div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        {/* Categoria */}
        <span className="text-xs font-mono tracking-widest uppercase mb-3 block text-neutral-500 font-semibold">
          {displayCategory}
        </span>

        {/* Título */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neutral-300 transition-colors tracking-tight">
          {displayTitle}
        </h3>

        {/* Descrição Curta */}
        <p className="text-neutral-400 text-base leading-relaxed mb-6 font-light">
          {displayDescription}
        </p>

        {/* Destaques */}
        {displayHighlights && displayHighlights.length > 0 && (
          <ul className="mb-8 space-y-3 flex-grow">
            {displayHighlights.map((hl, idx) => (
              <li key={idx} className="flex items-start gap-3 text-neutral-300 text-sm font-light">
                <span className="text-neutral-600 mt-0.5 text-xs">●</span>
                <span className="leading-relaxed">{hl}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs px-3 py-1.5 font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões Contextuais */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto border-t border-neutral-900 pt-6">
          <button
            onClick={(e) => handleAction(e, project.primaryButton.action, project.primaryButton.url)}
            className="w-full flex justify-center items-center gap-2 bg-white text-black font-semibold py-3 px-4 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
          >
            {isEn ? project.primaryButton.labelEn : project.primaryButton.label} 
            {project.primaryButton.action === 'url' && <span>↗</span>}
          </button>
          
          {project.secondaryButton && (
            <button
              onClick={(e) => handleAction(e, project.secondaryButton.action, project.secondaryButton.url)}
              className="w-full flex justify-center items-center gap-2 bg-transparent border border-neutral-700 text-white font-semibold py-3 px-4 rounded-lg hover:border-neutral-500 transition-colors text-sm"
            >
              {isEn ? project.secondaryButton.labelEn : project.secondaryButton.label} 
              {project.secondaryButton.action === 'url' ? <span>↗</span> : <span>→</span>}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
