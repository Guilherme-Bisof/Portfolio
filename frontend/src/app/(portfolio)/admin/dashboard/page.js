"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function DashboardPage() {
  // Lógica funcional original mantida intacta
  const { token, logout, loading } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!loading && !token) {
      router.push("/admin/login");
    }
  }, [token, loading, router]);

  useEffect(() => {
    if (token) {
      const fetchProjects = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/projects`,
          );
          setProjects(response.data);
        } catch (error) {
          console.error("Erro ao buscar projetos:", error);
        }
      };
      fetchProjects();
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  const handleDelete = async (projectId) => {
    if (!window.confirm("Tem certeza que deseja excluir este projeto?")) {
      return;
    }

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setProjects(projects.filter((p) => p.id !== projectId));
    } catch (error) {
      console.error("Erro ao excluir projeto:", error);
      alert("Não foi possível excluir o projeto.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-neutral-500 font-mono tracking-widest uppercase">
          Autenticando...
        </p>
      </div>
    );
  }

  if (!token) {
    return null;
  }

  return (
    // Fundo preto puro e tipografia clean
    <main className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho Minimalista com Botão de Logout como Link de Texto */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 border-b border-neutral-900 pb-8 mt-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
              Visão Geral.
            </h1>
            <p className="text-neutral-500 font-light text-lg">
              Gerenciamento do conteúdo do portfólio.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-neutral-500 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white pb-1"
          >
            Encerrar Sessão ↗
          </button>
        </header>

        {/* Container da Lista de Projetos em Grafite Escuro */}
        <div className="bg-[#0a0a0a] border border-neutral-900 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-neutral-900 flex justify-between items-center bg-[#050505]">
            <h2 className="text-lg font-medium text-white">
              Projetos Publicados
            </h2>
            <Link
              href="/admin/projects/new"
              className="bg-white text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors"
            >
              + Novo Projeto
            </Link>
          </div>

          <div className="divide-y divide-neutral-900">
            {projects.length > 0 ? (
              <ul className="flex flex-col">
                {projects.map((project) => (
                  <li
                    key={project.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-[#111111] transition-colors gap-4"
                  >
                    {/* Informações do Projeto */}
                    <div>
                      <h3 className="text-lg font-medium text-white tracking-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mt-1 block">
                        {project.type || "Categoria Indefinida"}
                      </span>
                    </div>

                    {/* Ações (Editar e Excluir) */}
                    <div className="flex items-center gap-6">
                      <Link
                        href={`/admin/projects/edit/${project.id}`}
                        className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-sm font-medium text-red-900 hover:text-red-500 transition-colors"
                      >
                        Excluir
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-12 text-center">
                <p className="text-neutral-500 font-light">
                  Nenhum projeto encontrado no banco de dados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
