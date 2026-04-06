"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
    >
      {/* Container principal*/}
      <div
        onClick={handleContentClick}
        className="bg-gray-900 max-h-[90vh] overflow-y-auto rounded-lg border border-cyan-400/30 shadow-[0_0_25px_rgba(0,255,255,0.2)] flex flex-col max-h-[90vh]"
      >
        {/* título e botão de fechar */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-3xl font-bold text-cyan-400">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl"
          >
            &times;
          </button>
        </div>

        {/* Conteúdo rolável */}
        <div className="p-6 overflow-y-auto">
          <p className="text-gray-300 mb-6">{project.description}</p>

          {/* Responsabilidades */}
          <div className="mb-6">
            <h4 className="font-semibold text-lg text-cyan-400 mb-2">
              Responsabilidades
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full">
                Front-end
              </span>
              <span className="bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full">
                Back-end
              </span>
              <span className="bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full">
                UI/UX Design
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg text-cyan-400 mb-2">
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies && project.technologies.length > 0 ? (
                project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))
              ) : (
                <span className="text-gray-500 text-sm">
                  Nenhuma tecnologia informada.
                </span>
              )}
            </div>
          </div>

          {/* Botões de Ação */}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-black font-bold py-2 px-6 rounded transition-colors"
            >
              Ver no GitHub
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
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-black font-bold py-2 px-6 rounded transition-colors"
            >
              Link do Projeto
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
