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
  // Tipamos o estado para ser uma lista de Projects
  const [projects, setProjects] = useState<Project[]>([]);
  // O projeto selecionado pode ser um Project ou null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      console.log(
        "Tentando buscar projetos da URL:",
        `${process.env.NEXT_PUBLIC_API_URL}/projects`,
      );

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

  return (
    <>
      <section
        id="projetos"
        className="flex flex-col items-center py-24 bg-black text-white overflow-hidden"
      >
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-5xl font-extrabold mb-12 text-center text-cyan-400">
            Projetos
          </h1>

          {projects.length > 0 ? (
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
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-400">Carregando projetos...</p>
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
