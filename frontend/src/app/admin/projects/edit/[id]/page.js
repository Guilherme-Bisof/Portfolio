"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function EditProjectPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const router = useRouter();

  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    repoUrl: "",
    deployInput: "",
    technologies: [],
    type: "",
    challenge: "",
    solution: "",
    learned: "",
  });
  const [techInput, setTechInput] = useState("");
  const [newImage, setNewImage] = useState(null);
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
        !project.technologies.some(
          (t) => t.toLowerCase() === value.toLowerCase(),
        )
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

    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("description", project.description);
    formData.append("repoUrl", project.repoUrl || "");
    formData.append("deployInput", project.deployInput || "");
    formData.append("type", project.type || "");
    formData.append("technologies", JSON.stringify(project.technologies));
    formData.append("challenge", project.challenge || "");
    formData.append("solution", project.solution || "");
    formData.append("learned", project.learned || "");

    if (newImage) {
      formData.append("image", newImage);
    }

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`,
        formData,
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-neutral-500 font-mono tracking-widest uppercase">
          Carregando dados do projeto...
        </p>
      </div>
    );

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-black text-white">
      <div className="w-full max-w-3xl">
        <div className="mb-10">
          <Link
            href="/admin/dashboard"
            className="text-neutral-500 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest mb-6 inline-block"
          >
            ← Voltar ao Dashboard
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Editar Projeto.
          </h1>
          <p className="text-neutral-500 font-light mt-2">
            Atualize as informações do seu portfólio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border border-neutral-900 shadow-2xl"
        >
          {/* Título */}
          <div>
            <label
              htmlFor="title"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
            >
              Título do Projeto
            </label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              required
              className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

          {/* Categoria */}
          <div>
            <label
              htmlFor="setType"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
            >
              Tipo / Categoria
            </label>
            <select
              name="type"
              id="setType"
              value={project.type}
              onChange={handleChange}
              required
              className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors appearance-none"
            >
              <option value="">Selecione uma categoria...</option>
              <option value="Web Application">Web Application</option>
              <option value="Full-Stack Web App">Full-Stack Web App</option>
              <option value="Desktop App">Desktop App</option>
              <option value="Mobile App">Mobile App</option>
            </select>
          </div>

          {/* Descrição */}
          <div>
            <label
              htmlFor="description"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
            >
              Descrição Curta
            </label>
            <textarea
              name="description"
              rows="4"
              value={project.description}
              onChange={handleChange}
              required
              className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Imagem */}
          <div className="border border-neutral-900 p-6 rounded-xl bg-[#050505]">
            <label
              htmlFor="image"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4"
            >
              Imagem de Capa
            </label>

            <div className="flex flex-col md:flex-row gap-6 mb-4">
              {project.image && !newImage && (
                <div>
                  <p className="text-xs text-neutral-600 font-mono mb-2">
                    Imagem atual (produção):
                  </p>
                  <img
                    src={
                      project.image.startsWith("http")
                        ? project.image
                        : `${process.env.NEXT_PUBLIC_API_URL}${project.image}`
                    }
                    alt="Preview atual"
                    className="h-32 w-56 object-cover rounded-lg border border-neutral-800 opacity-80"
                  />
                </div>
              )}

              {newImage && (
                <div>
                  <p className="text-xs text-white font-mono mb-2">
                    Nova imagem (não salva):
                  </p>
                  <img
                    src={URL.createObjectURL(newImage)}
                    alt="Novo preview"
                    className="h-32 w-56 object-cover rounded-lg border border-neutral-500"
                  />
                </div>
              )}
            </div>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) =>
                setNewImage(e.target.files ? e.target.files[0] : null)
              }
              // Personalização elegante do input file
              className="block w-full text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-wider file:bg-white file:text-black hover:file:bg-neutral-200 file:cursor-pointer transition-colors"
            />
          </div>

          {/* Links e URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="repoUrl"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                URL do Repositório (GitHub)
              </label>
              <input
                type="text"
                name="repoUrl"
                value={project.repoUrl || ""}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700"
              />
            </div>

            <div>
              <label
                htmlFor="deployInput"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                URL do Deploy (Ao Vivo)
              </label>
              <input
                type="text"
                name="deployInput"
                value={project.deployInput || ""}
                onChange={handleChange}
                placeholder="https://meuprojeto.com"
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700"
              />
            </div>
          </div>

          {/* Tecnologias */}
          <div className="border-t border-neutral-900 pt-8">
            <label
              htmlFor="techInput"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
            >
              Stack Tecnológica
            </label>
            <input
              type="text"
              id="techInput"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={handleAddTecnology}
              className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700"
              placeholder="Digite a tecnologia e pressione Enter..."
            />

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 border border-neutral-800 text-neutral-300 text-xs px-3 py-1.5 rounded-full bg-[#111]"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => removeTechnology(index)}
                    className="text-neutral-500 hover:text-white transition-colors focus:outline-none"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Textos Editoriais (Desafio, Solução, Aprendizados) */}
          <div className="space-y-6 border-t border-neutral-900 pt-8">
            <div>
              <label
                htmlFor="challenge"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                01. O Desafio / Problema (Opcional)
              </label>
              <textarea
                name="challenge"
                rows="3"
                value={project.challenge || ""}
                onChange={handleChange}
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="solution"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                02. Solução de Engenharia (Opcional)
              </label>
              <textarea
                name="solution"
                rows="3"
                value={project.solution || ""}
                onChange={handleChange}
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label
                htmlFor="learned"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                03. Lições Aprendidas & Takeaways (Opcional)
              </label>
              <textarea
                name="learned"
                rows="3"
                value={project.learned || ""}
                onChange={handleChange}
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Tratamento de Erro */}
          {error && (
            <div className="bg-red-950/30 border border-red-900/50 p-4 rounded-lg">
              <p className="text-red-400 text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-6 pt-6 border-t border-neutral-900">
            <Link
              href="/admin/dashboard"
              className="text-neutral-500 hover:text-white font-medium transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="w-full md:w-auto bg-white hover:bg-neutral-200 text-black font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
