"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // Estados e Contexto originais mantidos intactos
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  // Lógica de submissão do formulário original
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const success = await login(email, password);

    if (success) {
      router.push("/admin/dashboard");
    } else {
      setError("Email ou senha inválidos.");
    }
  };

  return (
    // Fundo preto puro para a tela de login
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-black text-white">
      {/* Container principal grafite com bordas sutis */}
      <div className="bg-[#0a0a0a] border border-neutral-900 w-full max-w-md p-8 md:p-12 rounded-2xl shadow-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">
            Painel de Acesso.
          </h1>
          <p className="text-neutral-500 font-light text-sm">
            Área restrita à administração.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo de Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              // Estilos minimalistas: fundo um tom acima do grafite, sem bordas coloridas
              className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700"
              placeholder="admin@exemplo.com"
            />
          </div>

          {/* Campo de Senha */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#111111] border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-700"
              placeholder="••••••••"
            />
          </div>

          {/* Mensagem de Erro formatada de forma elegante */}
          {error && (
            <p className="text-red-400 bg-red-950/30 border border-red-900/50 p-3 rounded-lg text-sm text-center">
              {error}
            </p>
          )}

          {/* Botão de Submit Branco (Alto contraste) */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg hover:bg-neutral-200 transition-colors"
            >
              Autenticar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
