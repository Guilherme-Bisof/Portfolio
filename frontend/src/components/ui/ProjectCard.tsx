import { Project } from "@/types/project";
import React from "react";


interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { title, description, repoUrl, deployInput, technologies, type } =
    project;

  return (
    <div
      onClick={onClick}
      className="bg-gray-900/50 rounded-lg p-6 flex flex-col justify-between h-full border min-h-[300px] border-cyan-400/30 shadow-[0_0_10px_rgba(0,255,255,0.1)] cursor-pointer hover:border-cyan-400/80 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
    >
      <span className="text-base font-bold mb-1 text-cyan-200">
        {type || "Sem tipo"}
      </span>
      <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
      <p className="text-gray-300 grow mb-4 line-clamp-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {technologies && technologies.length > 0 ? (
          technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))
        ) : (
          <span className="text-gray-500 text-sm">
            Nenhuma tecnologia informada
          </span>
        )}
      </div>
      <div className="mt-4 text-cyan-500 font-semibold">Ver Detalhes</div>
    </div>
  );
}
