"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
// 1. Importe o useParams junto com o useRouter
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

// 2. Remova o { params } da função
export default function EditProjectPage() {
  // 3. Use o hook useParams para pegar o id
  const { id } = useParams();
  const { token } = useAuth();
  const router = useRouter();

  const [project, setProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
    repoUrl: "",
    deployInput: "",
    technologies: [],
  });
  const [techInput, setTechInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
        );
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        setError("Projeto não encontrado.");
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddTecnology = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const value = techInput.trim();

      if (
        value &&
        !project.technologies.some((t) => t.toLowerCase() === value.toLowerCase())
      ) {
        setProject((prevState) => ({
          ...prevState,
          technologies: [...prevState.technologies, value],
        }));
        setTechInput("");
      }
    }
  };

  const removeTechnology = (index) => {
    setProject((prevState) => ({
      ...prevState,
      technologies: prevState.technologies.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
       const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
        project,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log("Projeto atualizado:", response.data);
      router.push("/admin/dashboard");
    } catch (err) {
      console.error("Erro na atualização:", err.response?.data || err.message);
      setError("Falha ao atualizar o projeto.");
    }
  };

  if (loading)
    return <p className="text-center mt-20">Carregando projeto...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-900 text-white">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Editar Projeto</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-800 p-8 rounded-lg border border-gray-700"
        >
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Título
            </label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-gray-700 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Descrição
            </label>
            <textarea
              name="description"
              rows="4"
              value={project.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-gray-700 rounded-md p-2"
            ></textarea>
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium">
              URL da Imagem
            </label>
            <input
              type="text"
              name="imageUrl"
              value={project.imageUrl || ""}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="repoUrl" className="block text-sm font-medium">
              URL do Repositório
            </label>
            <input
              type="text"
              name="repoUrl"
              value={project.repoUrl || ""}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="deployInput" className="block text-sm font-medium">
              URL do Deploy
            </label>
            <input
              type="text"
              name="deployInput"
              value={project.deployInput || ""}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="techInput" className="block text-sm font-medium">
              Tecnologias
            </label>
            <input
              type="text"
              id="techInput"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={handleAddTecnology}
              className="mt-1 block w-full bg-gray-700 rounded-md p-2"
              placeholder="Digite e pressione Enter ou vírgula para adicionar"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-2 bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full"
              >
                {tech}
                <button
                  type="button"
                  onClick={() => removeTechnology(index)}
                  className="text-gray-400 hover:text-white"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify-end space-x-4">
            <Link
              href="/admin/dashboard"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
