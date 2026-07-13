import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export const metadata = {
  title: "Demos de sites comerciais | Guilherme Bisof",
  description: "Exemplos de sites que desenvolvo para empresas, profissionais e comércios locais.",
};

export default function DemosCatalog() {
  const whatsappUrl = "https://wa.me/5515999999999?text=Ol%C3%A1%2C%20Guilherme!%20Vi%20sua%20vitrine%20de%20demos%20e%20gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20meu%20neg%C3%B3cio.";

  const demos = [
    {
      title: "Psicólogo — Site profissional",
      description: "Exemplo de site para apresentar atendimento, especialidades, formas de consulta e contato pelo WhatsApp.",
      tags: ["Clínica", "Profissional Liberal", "Serviços"],
      url: "/demos/psicologo",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Barbearia — Estilo e Agendamento",
      description: "Serviços, tabela de preços, galeria de cortes, localização e botão direto para agendamento.",
      tags: ["Comércio Local", "Estética", "Agendamento"],
      url: "/demos/barbearia",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1988&auto=format&fit=crop"
    },
    {
      title: "Restaurante — Menu e Reservas",
      description: "Apresentação visual de pratos, cardápio digital, ambiente, horário de funcionamento e reservas.",
      tags: ["Gastronomia", "Comércio Local", "Experiência"],
      url: "/demos/restaurante",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-teal-500/30">
      {/* Header Simples */}
      <header className="border-b border-neutral-900 bg-[#0a0a0a] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight hover:text-neutral-300 transition-colors">
            Guilherme Bisof
          </Link>
          <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Voltar ao portfólio
          </Link>
        </div>
      </header>

      <main className="pb-32">
        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Demos de sites para <span className="text-teal-500">negócios locais</span>
            </h1>
            <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              Veja exemplos de páginas que podem ser personalizadas com a identidade, serviços e informações da sua empresa.
            </p>
          </div>
        </section>

        {/* Catalog Grid */}
        <section className="px-6 max-w-6xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, idx) => (
              <div key={idx} className="bg-[#111] rounded-2xl border border-neutral-800 overflow-hidden flex flex-col group hover:border-neutral-600 transition-colors">
                <div className="h-48 overflow-hidden bg-neutral-900 relative">
                  <Image 
                    src={demo.image} 
                    alt={demo.title} 
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-80"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white">{demo.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                    {demo.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {demo.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-semibold bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={demo.url}
                    className="w-full block text-center bg-white text-black font-semibold py-3 px-4 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                  >
                    Ver demonstração
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 max-w-3xl mx-auto text-center bg-[#111] border border-neutral-800 rounded-3xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Não encontrou seu segmento?</h2>
          <p className="text-neutral-400 mb-8 font-light text-lg">
            Posso criar uma demonstração adaptada ao seu tipo de negócio antes mesmo de fecharmos contrato.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold py-4 px-10 rounded-lg transition-colors"
          >
            Pedir uma avaliação
          </a>
        </section>
      </main>
    </div>
  );
}
