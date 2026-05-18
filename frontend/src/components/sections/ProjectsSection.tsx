"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { Project } from "@/types/project";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  

  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<Project[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/projects`
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
    ...Array.from(new Set(projects.map((p) => p.type).filter(Boolean) as string[]))
  ];


  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter((project) => project.type === activeFilter);

  return (
    <>
      <section
        id="projetos"
        className="flex flex-col items-center py-24 bg-black text-white overflow-hidden"
      >
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-5xl font-extrabold mb-6 text-center text-cyan-400">
            Projetos
          </h1>

          <p className="text-center text-gray-400 mb-8 max-w-md mx-auto text-sm md:text-base">
            Filtrar por categoria:
          </p>

          {/* 4. Render dos botões de filtro com estilo cyberpunk combinando com o site */}
          {projects.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => {
                // Isolamos a lógica da classe antes do retorno para o TS não se confundir
                const isSelected = activeFilter === category;
                const buttonClass = isSelected
                  ? "bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.4)] px-5 py-2 rounded-full text-sm font-semibold transition-all border duration-300"
                  : "bg-gray-900/60 text-gray-400 border-gray-800 hover:border-cyan-500/40 hover:text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold transition-all border duration-300";

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

          {/* 5. Passamos a lista filtrada para o Swiper */}
          {filteredProjects.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1.2}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-400 py-12">
              {projects.length === 0
                ? "Carregando projetos..."
                : "Nenhum projeto encontrado nesta categoria."}
            </p>
          )}
        </div>
      </section>

      {/* Render do Modal quando um projeto é selecionado */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}