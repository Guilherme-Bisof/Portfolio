// frontend>src>app>admin>projects>new>page.js :

"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function NewProjectPage() {
  const { token } = useAuth();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [techInput, settechInput] = useState("");
  const [deployInput, setdeployInput] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [error, setError] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!token) {
      setError("Você não está autenticado");
      return;
    }

    const newProject = {
      title,
      description,
      imageUrl,
      repoUrl,
      deployInput,
      technologies,
      type,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/projects`,
        newProject,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Falha ao criar o projeto. Tente novamente.");
      console.error(err);
    }
  };

  const handleAddTecnology = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const value = techInput.trim();

      if (
        value &&
        !technologies.some((t) => t.toLowerCase() === value.toLowerCase())
      ) {
        setTechnologies([...technologies, value]);
        settechInput("");
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-900 text-white">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Adicionar Novo Projeto</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-800 p-8 rounded-lg border border-gray-700"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Título
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300"
            >
              Descrição
            </label>
            <textarea
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-300"
            >
              URL da Imagem (Opcional)
            </label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="repoUrl"
              className="block text-sm font-medium text-gray-300"
            >
              URL do Repositório (Opcional)
            </label>
            <input
              type="text"
              id="repoUrl"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="deployInput"
              className="block text-sm font-medium text-gray-300"
            >
              Link do Deploy
            </label>
            <input
              type="text"
              id="deployInput"
              value={deployInput}
              onChange={(e) => setdeployInput(e.target.value)}
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="techInput"
              className="block text-sm font-medium text-gray-300"
            >
              Tecnologias
            </label>
            <input
              type="text"
              id="techInput"
              value={techInput}
              onChange={(e) => settechInput(e.target.value)}
              onKeyDown={handleAddTecnology}
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="flex items-center gap-2 bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full"
              >
                {tech}
                <button
                  type="button"
                  onClick={() =>
                    setTechnologies(technologies.filter((_, i) => i !== index))
                  }
                  className="text-gray-400 hover:text-white"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>

          <div>
            <label
              htmlFor="setType"
              className="block text-sm font-medium text-gray-300"
            >
              Tipo
            </label>
            <input
              value={type}
              type="text"
              id="setType"
              onChange={(e) => setType(e.target.value)}
              onKeyDown={handleAddType}
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md p-2"
            ></input>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex justify-end space-x-4">
            <Link
              href="/admin/dashboard"
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              {" "}
              Cancelar
            </Link>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {" "}
              Salvar Projeto
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
