import React from "react";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoFooter from "@/components/demos/DemoFooter";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Demo de Site para Barbearia | Guilherme Bisof",
  description: "Exemplo demonstrativo de site profissional para barbearias, com apresentação, serviços, tabela de preços e agendamento.",
  alternates: {
    canonical: "https://guilhermebisof.site/demos/barbearia",
  }
};

export default function BarbeariaDemo() {
  const whatsappUrl = "https://wa.me/5515999999999?text=Ol%C3%A1%2C%20Guilherme!%20Vi%20a%20demonstra%C3%A7%C3%A3o%20de%20site%20para%20barbearias%20e%20gostaria%20de%20saber%20como%20funcionaria%20para%20o%20meu%20neg%C3%B3cio.";

  return (
    <div className="bg-[#111] min-h-screen font-sans text-neutral-300">
      <DemoBanner demoName="barbearias" />

      {/* Header */}
      <header className="bg-black/95 border-b border-[#B87333]/20 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#B87333] flex items-center justify-center text-[#B87333] font-serif italic text-2xl font-bold">L</div>
            <div className="flex flex-col">
              <span className="font-serif text-xl text-white tracking-widest uppercase">Lumina</span>
              <span className="text-[10px] text-[#B87333] tracking-[0.3em] uppercase">Barber Shop</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 uppercase tracking-widest">
            <a href="#inicio" className="hover:text-[#B87333] transition-colors">Início</a>
            <a href="#servicos" className="hover:text-[#B87333] transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-[#B87333] transition-colors">A Barbearia</a>
            <a href="#galeria" className="hover:text-[#B87333] transition-colors">Galeria</a>
          </nav>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#B87333] hover:bg-[#A06028] text-black px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
            alt="Barber Shop"
            fill
            className="object-cover grayscale-[30%] opacity-60"
            priority
          />
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-[#B87333] uppercase tracking-[0.3em] text-sm font-bold block mb-4 border-l-2 border-[#B87333] pl-4">A Arte do Corte</span>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Tradição,<br /> Estilo e <br /><span className="text-[#B87333]">Precisão.</span>
            </h1>
            <p className="text-lg text-neutral-400 font-light mb-10 max-w-lg">
              Transforme seu visual com mestres da barbearia clássica e contemporânea. Muito mais que um corte, uma experiência.
            </p>
            <div className="flex gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B87333] hover:bg-[#A06028] text-black font-bold py-4 px-10 text-sm uppercase tracking-widest transition-colors inline-block"
              >
                Agendar Horário
              </a>
              <a 
                href="#servicos"
                className="border border-neutral-600 hover:border-neutral-400 text-white font-bold py-4 px-10 text-sm uppercase tracking-widest transition-colors inline-block"
              >
                Ver Valores
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#B87333] uppercase tracking-[0.3em] text-xs font-bold block mb-2">Tabela de Preços</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">Nossos Serviços</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {[
              { title: "Corte Clássico", price: "R$ 55", desc: "Corte na tesoura ou máquina, lavagem e finalização premium." },
              { title: "Barba Terapia", price: "R$ 45", desc: "Toalha quente, massagem facial, aromaterapia e alinhamento." },
              { title: "Corte + Barba", price: "R$ 90", desc: "O combo completo para um visual impecável. Economize." },
              { title: "Platinado / Luzes", price: "R$ 120", desc: "Descoloração profissional preservando a saúde dos fios." },
              { title: "Corte Infantil", price: "R$ 45", desc: "Atendimento paciente e especializado para crianças." },
              { title: "Limpeza de Pele", price: "R$ 70", desc: "Remoção de cravos, esfoliação e hidratação profunda." }
            ].map((service, idx) => (
              <div key={idx} className="group border-b border-neutral-800 pb-6 hover:border-[#B87333] transition-colors">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#B87333] transition-colors uppercase tracking-wide">{service.title}</h3>
                  <div className="flex-1 border-b border-dashed border-neutral-800 mx-4 relative top-[-6px]"></div>
                  <span className="text-[#B87333] font-serif text-2xl font-bold">{service.price}</span>
                </div>
                <p className="text-neutral-500 font-light text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111] border border-[#B87333] text-[#B87333] hover:bg-[#B87333] hover:text-black font-bold py-3 px-8 text-sm uppercase tracking-widest transition-colors inline-block"
            >
              Agendar via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[500px]">
            <div className="absolute inset-0 border-2 border-[#B87333] translate-x-4 translate-y-4"></div>
            <div className="relative z-10 w-full h-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1988&auto=format&fit=crop" 
                alt="Barber" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">A Verdadeira <br/><span className="text-[#B87333]">Experiência</span></h2>
            <p className="text-neutral-400 font-light text-lg mb-6 leading-relaxed">
              Fundada com o propósito de resgatar a essência das barbearias clássicas, a Lumina é desenhada para ser o seu refúgio. Aqui, o tempo passa devagar, a cerveja é gelada e o corte é impecável.
            </p>
            <p className="text-neutral-400 font-light text-lg mb-10 leading-relaxed">
              Nossos profissionais são especialistas formados nas melhores academias do país, prontos para entregar exatamente o estilo que combina com você.
            </p>
            
            <div className="grid grid-cols-2 gap-8 bg-[#0a0a0a] p-8 border border-neutral-800">
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Horário de Funcionamento</h4>
                <p className="text-[#B87333] font-serif">Seg - Sex: 09h às 20h</p>
                <p className="text-[#B87333] font-serif">Sábado: 09h às 18h</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Cortesia</h4>
                <p className="text-neutral-400 text-sm">A 1ª cerveja long neck ou café expresso é por nossa conta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
