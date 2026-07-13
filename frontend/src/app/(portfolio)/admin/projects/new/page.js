"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function NewProjectPage() {
  const { token } = useAuth();
  const router = useRouter();

  // Estado inicial limpo para um novo projeto
  const [project, setProject] = useState({
    title: "",
    titleEn: "",
    description: "",
    descriptionEn: "",
    repoUrl: "",
    deployInput: "",
    technologies: [],
    type: "",
    challenge: "",
    challengeEn: "",
    solution: "",
    solutionEn: "",
    learned: "",
    learnedEn: "",
  });

  const [techInput, setTechInput] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("titleEn", project.titleEn || "");
    formData.append("description", project.description);
    formData.append("descriptionEn", project.descriptionEn || "");
    formData.append("repoUrl", project.repoUrl || "");
    formData.append("deployInput", project.deployInput || "");
    formData.append("type", project.type || "");
    formData.append("technologies", JSON.stringify(project.technologies));
    formData.append("challenge", project.challenge || "");
    formData.append("challengeEn", project.challengeEn || "");
    formData.append("solution", project.solution || "");
    formData.append("solutionEn", project.solutionEn || "");
    formData.append("learned", project.learned || "");
    formData.append("learnedEn", project.learnedEn || "");

    // Na criação, a imagem é obrigatória ou altamente recomendada
    if (image) {
      formData.append("image", image);
    }

    try {
      // POST para criar um novo projeto
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      console.log("Projeto criado:", response.data);
      router.push("/admin/dashboard");
    } catch (err) {
      console.error("Erro na criação:", err.response?.data || err.message);
      setError("Falha ao criar o projeto. Verifique os dados.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12 bg-black text-white">
      <div className="w-full max-w-3xl">
        {/* Cabeçalho */}
        <div className="mb-10">
          <Link
            href="/admin/dashboard"
            className="text-neutral-500 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest mb-6 inline-block"
          >
            ← Voltar ao Dashboard
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Novo Projeto.
          </h1>
          <p className="text-neutral-500 font-light mt-2">
            Adicione um novo trabalho ao seu portfólio.
          </p>
        </div>

        {/* Formulário com Design Minimalista */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-[#0a0a0a] p-8 md:p-10 rounded-2xl border border-neutral-900 shadow-2xl"
        >
          {/* Título */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                Título do Projeto (PT)
              </label>
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={handleChange}
                required
                placeholder="Ex: Sistema de Gestão Financeira"
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700"
              />
            </div>
            <div>
              <label
                htmlFor="titleEn"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                Título do Projeto (EN)
              </label>
              <input
                type="text"
                name="titleEn"
                value={project.titleEn}
                onChange={handleChange}
                placeholder="Ex: Financial Management System"
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700"
              />
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="description"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                Descrição Curta (PT)
              </label>
              <textarea
                name="description"
                rows="4"
                value={project.description}
                onChange={handleChange}
                required
                placeholder="Um breve resumo sobre o que é o projeto e qual problema ele resolve..."
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none placeholder:text-neutral-700"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="descriptionEn"
                className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
              >
                Descrição Curta (EN)
              </label>
              <textarea
                name="descriptionEn"
                rows="4"
                value={project.descriptionEn}
                onChange={handleChange}
                placeholder="A short summary about what the project is..."
                className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none placeholder:text-neutral-700"
              ></textarea>
            </div>
          </div>

          {/* Imagem (Apenas Nova Imagem) */}
          <div className="border border-neutral-900 p-6 rounded-xl bg-[#050505]">
            <label
              htmlFor="image"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4"
            >
              Imagem de Capa (Obrigatório)
            </label>

            {image && (
              <div className="mb-4">
                <p className="text-xs text-white font-mono mb-2">
                  Preview da Imagem:
                </p>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="h-32 w-56 object-cover rounded-lg border border-neutral-500"
                />
              </div>
            )}

            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
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
                value={project.repoUrl}
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
                value={project.deployInput}
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

          {/* Textos Editoriais */}
          <div className="space-y-6 border-t border-neutral-900 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="challenge"
                  className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
                >
                  01. O Desafio / Problema (PT)
                </label>
                <textarea
                  name="challenge"
                  rows="3"
                  value={project.challenge}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                />
              </div>
              <div>
                <label
                  htmlFor="challengeEn"
                  className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
                >
                  01. The Challenge (EN)
                </label>
                <textarea
                  name="challengeEn"
                  rows="3"
                  value={project.challengeEn}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="solution"
                  className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
                >
                  02. Solução de Engenharia (PT)
                </label>
                <textarea
                  name="solution"
                  rows="3"
                  value={project.solution}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                />
              </div>
              <div>
                <label
                  htmlFor="solutionEn"
                  className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
                >
                  02. Engineering Solution (EN)
                </label>
                <textarea
                  name="solutionEn"
                  rows="3"
                  value={project.solutionEn}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="learned"
                  className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
                >
                  03. Lições Aprendidas (PT)
                </label>
                <textarea
                  name="learned"
                  rows="3"
                  value={project.learned}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                />
              </div>
              <div>
                <label
                  htmlFor="learnedEn"
                  className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
                >
                  03. Lessons Learned (EN)
                </label>
                <textarea
                  name="learnedEn"
                  rows="3"
                  value={project.learnedEn}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                />
              </div>
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
              disabled={isSubmitting}
              className="w-full md:w-auto bg-white hover:bg-neutral-200 text-black font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Criando..." : "Criar Projeto"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
