"use client";

import Link from "next/link";
import React from "react";
import { FeaturedProject } from "@/data/featuredProjects";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface ProjectModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage();
  if (!project) return null;

  const isEn = language === "en";
  const displayTitle = isEn ? project.titleEn : project.title;
  const displayDescription = isEn ? project.descriptionEn : project.description;
  const displayChallenge = isEn && project.challengeEn ? project.challengeEn : project.challenge;
  const displaySolution = isEn && project.solutionEn ? project.solutionEn : project.solution;
  const displayLearned = isEn && project.learnedEn ? project.learnedEn : project.learned;
  const displayCategory = isEn ? project.categoryLabelEn : project.categoryLabel;

  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  const imageSrc = project.image;

  // We find URLs from the buttons if they have action='url'
  const primaryUrl = project.primaryButton?.action === 'url' ? project.primaryButton.url : undefined;
  const secondaryUrl = project.secondaryButton?.action === 'url' ? project.secondaryButton.url : undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={handleContentClick}
        className="bg-[#111] w-full max-w-3xl rounded-2xl border border-neutral-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        {/* Cabeçalho */}
        <div className="flex justify-between items-start p-8 border-b border-neutral-900 bg-[#0a0a0a]">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3 font-semibold">
              {displayCategory}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {displayTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-white text-2xl transition-colors p-2"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo rolável */}
        <div className="p-8 overflow-y-auto space-y-12 custom-scrollbar">
          {/* Imagem */}
          {project.image && (
            <div className="overflow-hidden rounded-xl border border-neutral-800 relative w-full h-56 md:h-80">
              <Image
                src={imageSrc}
                fill
                className="object-cover object-top"
                alt={displayTitle}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          )}

          {/* Seção Editorial */}
          <div className="space-y-10">
            {!displayChallenge && !displaySolution && !displayLearned ? (
              <p className="text-neutral-300 text-lg font-light leading-relaxed whitespace-pre-wrap">
                {displayDescription}
              </p>
            ) : (
              <>
                {displayChallenge && (
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
                      {isEn ? "01. The Challenge" : "01. O Desafio"}
                    </h4>
                    <p className="text-neutral-300 text-base font-light leading-relaxed whitespace-pre-wrap">
                      {displayChallenge}
                    </p>
                  </div>
                )}
                {displaySolution && (
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
                      {isEn ? "02. The Solution" : "02. A Solução"}
                    </h4>
                    <p className="text-neutral-300 text-base font-light leading-relaxed whitespace-pre-wrap">
                      {displaySolution}
                    </p>
                  </div>
                )}
                {displayLearned && (
                  <div>
                    <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
                      {isEn ? "03. Lessons Learned" : "03. Aprendizados"}
                    </h4>
                    <p className="text-neutral-300 text-base font-light leading-relaxed whitespace-pre-wrap">
                      {displayLearned}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <hr className="border-neutral-900" />

          {/* Stack e Links */}
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
            <div className="flex-1">
              <h4 className="font-mono text-neutral-500 mb-4 uppercase tracking-widest text-xs font-semibold">
                {isEn ? "Tech Stack" : "Stack Tecnológica"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs px-3 py-1.5 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[200px] w-full md:w-auto">
              {primaryUrl && (
                <Link
                  href={primaryUrl}
                  target="_blank"
                  className="bg-white text-black hover:bg-neutral-200 font-bold py-3 px-6 rounded-lg transition-colors text-center text-sm"
                >
                  {isEn ? "Visit Link ↗" : "Acessar Link ↗"}
                </Link>
              )}
              {secondaryUrl && (
                <Link
                  href={secondaryUrl}
                  target="_blank"
                  className="bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center text-sm"
                >
                  {isEn ? "Secondary Link ↗" : "Acessar Repositório ↗"}
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
