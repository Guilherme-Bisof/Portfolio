"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function DashboardPage() {
  const { token, logout, loading } = useAuth();
  const router = useRouter();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!loading && !token) {
      router.push('/admin/login');
    }
  }, [token, loading, router]);

  useEffect(() => {
    if (token) {
      const fetchProjects = async () => {
        try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
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
    router.push('/admin/login');
  };

  // --- NOVA FUNÇÃO DE EXCLUIR ---
  const handleDelete = async (projectId) => {
    if (!window.confirm("Tem certeza que deseja excluir este projeto?")) {
      return;
    }

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}`, {
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      });
      // Remove o projeto da lista na tela, sem precisar recarregar a página
      setProjects(projects.filter(p => p.id !== projectId));
    } catch (error) {
      console.error("Erro ao excluir projeto:", error);
      alert("Não foi possível excluir o projeto.");
    }
  };

  if (loading) {
    return <p className="text-center mt-20">Carregando...</p>;
  }

  if (!token) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-900 text-white">
      <div className="w-full max-w-4xl">
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold">Painel Administrativo</h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Sair
              </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
             <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Meus Projetos</h2>
                <Link 
                    href="/admin/projects/new"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                    Adicionar Novo
                </Link>
            </div>
              {projects.length > 0 ? (
                <ul className="space-y-2">
                  {projects.map(project => (
                    <li key={project.id} className="bg-gray-700 p-3 rounded-md flex justify-between items-center">
                      <span>{project.title}</span>
                      <div className="space-x-2">
                        <Link 
                          href={`/admin/projects/edit/${project.id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded transition-colors"
                        >
                          Editar
                        </Link>
                        <button 
                          onClick={() => handleDelete(project.id)}
                          className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-1 px-3 rounded transition-colors"
                        >
                          Excluir
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Nenhum projeto encontrado.</p>
              )}
            </div>
          </>
      </div>
    </main>
  );
}