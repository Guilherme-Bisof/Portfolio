"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { Project } from "@/types/project";
import axios from "axios";
import { motion, Variants } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/projects`,
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };
    fetchProjects();
  }, []);

  const categories = [
    "Todos",
    ...Array.from(
      new Set(projects.map((p) => p.type).filter(Boolean) as string[]),
    ),
  ];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <section
        id="projetos"
        className="flex flex-col py-32 bg-[#0a0a0a] text-white overflow-hidden"
      >
        <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
          {/* Título*/}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariant}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
              Trabalhos.
            </h2>
            <p className="text-neutral-400 font-light text-lg mb-8">
              Uma seleção de projetos recentes e em destaque.
            </p>

            {/* Filtros */}
            {projects.length > 0 && (
              <div className="flex flex-wrap gap-6">
                {categories.map((category) => {
                  const isSelected = activeFilter === category;
                  const buttonClass = isSelected
                    ? "text-white border-b border-white pb-1 text-sm font-medium transition-colors"
                    : "text-neutral-500 hover:text-neutral-300 pb-1 text-sm font-medium transition-colors cursor-pointer";

                  return (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={buttonClass}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Grid/Carrossel de Projetos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            {filteredProjects.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1.1}
                breakpoints={{
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 2.5 },
                }}
                className="pb-12"
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id} className="!h-auto flex">
                    <div className="w-full h-full flex flex-col">
                      <ProjectCard
                        project={project}
                        onClick={() => setSelectedProject(project)}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-neutral-500 py-12 font-mono text-sm">
                {projects.length === 0
                  ? "[Carregando banco de dados...]"
                  : "[Nenhum projeto encontrado]"}
              </p>
            )}
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
