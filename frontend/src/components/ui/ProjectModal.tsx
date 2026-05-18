"use client";

import Link from "next/link";
import React from "react";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

  const imageSrc = project.image
    ? project.image.startsWith("http")
      ? project.image
      : `${process.env.NEXT_PUBLIC_API_URL}${project.image}`
    : "";

  // Lógica de Fallback: se não houver os campos específicos no banco,
  // usamos a descrição atual ou um texto padrão inteligente.
  const challengeText = project.challenge || project.description;
  const solutionText =
    project.solution ||
    `O sistema foi desenvolvido utilizando uma arquitetura moderna focada em performance, aplicando as tecnologias descritas abaixo para garantir a escalabilidade e a melhor experiência de uso prática.`;
  const learnedText =
    project.learned ||
    `Consolidação de conceitos práticos de arquitetura de software, gerenciamento de estados no ecossistema de produção real e tratamento de fluxos assíncronos de dados.`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
    >
      {/* Container principal */}
      <div
        onClick={handleContentClick}
        className="bg-gray-900 w-full max-w-3xl rounded-lg border border-cyan-400/30 shadow-[0_0_25px_rgba(0,255,255,0.2)] flex flex-col max-h-[90vh]"
      >
        {/* Título e botão de fechar */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-500 block mb-1">
              {project.type || "Software Case"}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-cyan-400 text-3xl transition-colors p-2"
          >
            &times;
          </button>
        </div>

        {/* Conteúdo rolável */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Imagem (Mantém igual você já tem) */}
          {project.image && (
            <img
              src={imageSrc}
              className="w-full h-48 md:h-64 object-cover rounded-lg border border-cyan-400/20 shadow-[0_0_15px_rgba(0,255,255,0.1)] transition-transform duration-300 hover:scale-[1.01]"
              alt={project.title}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          )}

          {/* Se não houver nenhum campo preenchido no banco, podemos mostrar a descrição padrão */}
          {!project.challenge && !project.solution && !project.learned && (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          )}

          {/* STORYTELLING BLOCK 1: O DESAFIO (Só aparece se você digitar algo no Admin) */}
          {project.challenge && (
            <div className="space-y-2 border-l-2 border-amber-500/50 pl-4 animate-fadeIn">
              <h4 className="font-mono text-sm uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <span>⚠️</span> O Desafio / Problema
              </h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>
          )}

          {/* STORYTELLING BLOCK 2: A SOLUÇÃO (Só aparece se você digitar algo no Admin) */}
          {project.solution && (
            <div className="space-y-2 border-l-2 border-cyan-500/50 pl-4 animate-fadeIn">
              <h4 className="font-mono text-sm uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <span>🚀</span> Solução Engenharia de Software
              </h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* STORYTELLING BLOCK 3: APRENDIZADO (Só aparece se você digitar algo no Admin) */}
          {project.learned && (
            <div className="space-y-2 border-l-2 border-emerald-500/50 pl-4 animate-fadeIn">
              <h4 className="font-mono text-sm uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <span>🧠</span> Lições Aprendidas & Takeaways
              </h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {project.learned}
              </p>
            </div>
          )}

          <hr className="border-gray-800" />

          {/* Grid de Metadados (Responsabilidades + Techs) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Responsabilidades */}
            <div>
              <h4 className="font-semibold text-base text-gray-400 mb-3 uppercase tracking-wider text-xs">
                Responsabilidades
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 border border-gray-700 text-cyan-300 text-xs px-3 py-1 rounded-full">
                  Full-Stack Architecture
                </span>
                <span className="bg-gray-800 border border-gray-700 text-cyan-300 text-xs px-3 py-1 rounded-full">
                  Database Design
                </span>
                <span className="bg-gray-800 border border-gray-700 text-cyan-300 text-xs px-3 py-1 rounded-full">
                  Production Deployment
                </span>
              </div>
            </div>

            {/* Tecnologias */}
            <div>
              <h4 className="font-semibold text-base text-gray-400 mb-3 uppercase tracking-wider text-xs">
                Stack Tecnológica
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.length > 0 ? (
                  project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-cyan-950/40 border border-cyan-800/60 text-cyan-400 text-xs px-3 py-1 rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-xs">
                    Nenhuma tecnologia informada.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-bold py-2.5 px-6 rounded transition-all text-center flex items-center justify-center gap-2 text-sm"
              >
                Ver Código no GitHub
              </Link>
            )}

            {project.deployInput && (
              <Link
                href={
                  project.deployInput.startsWith("http")
                    ? project.deployInput
                    : `https://${project.deployInput}`
                }
                target="_blank"
                className="flex-1 bg-cyan-600 hover:bg-cyan-700 shadow-[0_0_15px_rgba(0,255,255,0.2)] text-black font-bold py-2.5 px-6 rounded transition-all text-center flex items-center justify-center gap-2 text-sm"
              >
                Acessar Aplicação Real 🌐
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
