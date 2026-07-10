"use client";

import { Project } from "@/types/project";
import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { title, description, technologies, type } = project;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#111111] rounded-2xl p-8 flex flex-col justify-between h-full min-h-[320px] cursor-pointer group transition-colors hover:bg-[#151515]"
    >
      <div>
        {/* Categoria*/}
        <span className="text-xs font-mono tracking-widest uppercase mb-4 block text-neutral-500">
          {type || "Software Case"}
        </span>

        {/* Título */}
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-neutral-300 transition-colors tracking-tight line-clamp-3">
          {title}
        </h3>

        {/* Descrição*/}
        <p className="text-neutral-400 text-base leading-relaxed mb-8 line-clamp-3 font-light">
          {description}
        </p>
      </div>

      <div>
        {/* Tecnologias*/}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies && technologies.length > 0 ? (
            technologies.map((tech, index) => (
              <span
                key={index}
                className="border border-neutral-800 text-neutral-400 text-xs px-3 py-1 font-medium rounded-full"
              >
                {tech}
              </span>
            ))
          ) : (
            <span className="text-neutral-600 text-xs font-mono">
              [Sem tecnologias mapeadas]
            </span>
          )}
        </div>

        {/* Link */}
        <div className="pt-4 border-t border-neutral-800/50">
          <span className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-neutral-400 transition-colors">
            Explorar Projeto
            <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
