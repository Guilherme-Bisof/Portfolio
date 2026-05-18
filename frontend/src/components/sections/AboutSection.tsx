import React from "react";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center justify-center py-20 md:py-32 bg-black text-white"
    >
      {/* Container principal */}
      <div className="w-full max-w-3xl px-4 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6">
            Desenvolvo sistemas escaláveis, performáticos e prontos para
            produção real.
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-white mb-6">
            Desenvolvedor Full-Stack focado em backend, interfaces funcionais e
            produtos que resolvem problemas de verdade.
          </h2>
        </div>
        <p className="text-sm md:text-base text-gray-400 leading-8 max-w-xl mx-auto">
          Projetos com autenticação, banco de dados, deploy em produção e
          arquitetura próxima ao mercado real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projetos"
            className="bg-cyan-600 hover:bg-cyan-700 text-black font-bold py-2 px-6 rounded transition scroll-smooth"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-2 px-6 rounded transition"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
