import React from "react";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoFooter from "@/components/demos/DemoFooter";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Demo de Site para Psicólogo | Guilherme Bisof",
  description: "Exemplo demonstrativo de site profissional para psicólogos, com apresentação, serviços, FAQ e agendamento pelo WhatsApp.",
  alternates: {
    canonical: "https://guilhermebisof.site/demos/psicologo",
  }
};

export default function PsicologoDemo() {
  const whatsappUrl = "https://wa.me/5515999999999?text=Ol%C3%A1%2C%20Guilherme!%20Vi%20a%20demonstra%C3%A7%C3%A3o%20de%20site%20para%20psic%C3%B3logos%20e%20gostaria%20de%20saber%20como%20funcionaria%20para%20o%20meu%20neg%C3%B3cio.";

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans text-slate-800 scroll-smooth">
      <DemoBanner demoName="psicólogos" />

      {/* Header Fictício */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-xl text-slate-800 tracking-tight">Dra. Helena Martins</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Psicologia Clínica</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#inicio" className="hover:text-teal-600 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-teal-600 transition-colors">Sobre</a>
            <a href="#atendimento" className="hover:text-teal-600 transition-colors">Atendimento</a>
            <a href="#duvidas" className="hover:text-teal-600 transition-colors">Dúvidas</a>
            <a href="#contato" className="hover:text-teal-600 transition-colors">Contato</a>
          </nav>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm shadow-teal-200"
          >
            Agendar conversa
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-32 overflow-hidden bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-serif text-slate-800 leading-tight mb-6">
              Psicoterapia com acolhimento, escuta e respeito ao seu tempo
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-light">
              Atendimento psicológico para adultos, presencial em Tatuí e também online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3.5 rounded-full font-medium transition-colors text-center shadow-lg shadow-teal-700/20"
              >
                Agendar pelo WhatsApp
              </a>
              <a 
                href="#atendimento" 
                className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-full font-medium transition-colors border border-slate-200 text-center"
              >
                Conhecer o atendimento
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Blob de fundo para dar tom calmo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#E8F3F1] rounded-full blur-3xl opacity-70 -z-10"></div>
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-tl-full rounded-tr-full rounded-bl-xl rounded-br-xl shadow-xl shadow-slate-200/50 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop" 
                alt="Psicóloga em atendimento" 
                fill
                className="object-cover"
              />
            </div>
            {/* Selo Fictício */}
            <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg border border-slate-50 hidden md:flex items-center gap-4">
              <div className="bg-teal-50 text-teal-700 w-10 h-10 rounded-full flex items-center justify-center text-xl">
                ✓
              </div>
              <div>
                <p className="font-bold text-slate-700 text-sm">CRP 00/00000</p>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Registro ilustrativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Profissional */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative rounded-2xl shadow-md w-full h-[400px] overflow-hidden grayscale-[20%]">
            <Image 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
              alt="Consultório" 
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-teal-700 font-semibold tracking-wider uppercase text-xs mb-3 block">Sobre mim</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-6">Prazer, Helena.</h2>
            <div className="space-y-4 text-slate-500 font-light leading-relaxed">
              <p>
                Sou psicóloga clínica formada há mais de 10 anos, com especialização em Terapia Cognitivo-Comportamental.
                Meu objetivo é proporcionar um ambiente seguro onde você possa se expressar sem julgamentos.
              </p>
              <p>
                Acredito que o processo terapêutico é uma parceria colaborativa. Juntos, vamos identificar padrões de pensamento, desenvolver habilidades de enfrentamento e promover mudanças positivas na sua vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona o atendimento & Temas */}
      <section id="atendimento" className="py-24 bg-[#F2F7F6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-teal-700 font-semibold tracking-wider uppercase text-xs mb-3 block">Abordagem</span>
            <h2 className="text-3xl font-serif text-slate-800 mb-4">Como funciona o atendimento</h2>
            <p className="text-slate-500 leading-relaxed font-light">
              Ofereço modalidades flexíveis para que a terapia se adapte à sua rotina, sempre mantendo a mesma qualidade e ética profissional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center text-2xl mb-6">🛋️</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Presencial em Tatuí</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                Um espaço preparado para te receber com conforto e privacidade no centro da cidade. Ideal para quem prefere o contato humano direto e um ambiente neutro fora de casa.
              </p>
              <ul className="text-sm text-slate-400 space-y-2 font-medium">
                <li>✓ Ambiente climatizado</li>
                <li>✓ Estacionamento próximo</li>
                <li>✓ Acessibilidade</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center text-2xl mb-6">💻</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Atendimento Online</h3>
              <p className="text-slate-500 font-light leading-relaxed mb-6">
                Sessões realizadas via plataforma segura de vídeo (Google Meet ou Zoom). Perfeito para brasileiros no exterior, pessoas com rotina corrida ou dificuldades de locomoção.
              </p>
              <ul className="text-sm text-slate-400 space-y-2 font-medium">
                <li>✓ Praticidade e economia de tempo</li>
                <li>✓ Plataformas criptografadas</li>
                <li>✓ No conforto do seu lar</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-slate-800 mb-8 text-center">Temas comumente trabalhados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Ansiedade e Pânico', 'Depressão', 'Autoestima', 'Burnout e Carreira', 'Luto e Perdas', 'Relacionamentos', 'Transições de Vida', 'Autoconhecimento'].map((tema, i) => (
                <div key={i} className="bg-white text-slate-600 text-sm font-medium py-3 px-4 rounded-lg text-center border border-slate-100 shadow-sm">
                  {tema}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-slate-800 mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: 'Qual a duração das sessões?', a: 'Cada sessão tem a duração de 50 minutos. A frequência é geralmente semanal, mas pode ser ajustada conforme a necessidade.' },
              { q: 'Você atende convênio médico?', a: 'Os atendimentos são particulares. No entanto, forneço recibo para solicitação de reembolso junto ao seu plano de saúde, caso ele ofereça essa modalidade.' },
              { q: 'Para quem é o atendimento?', a: 'Atendo exclusivamente jovens (a partir de 16 anos) e adultos, nas modalidades individual e casal.' },
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-6">
                <h4 className="font-semibold text-slate-800 mb-2">{faq.q}</h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização e CTA Final */}
      <section id="contato" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-teal-400 font-semibold tracking-wider uppercase text-xs mb-3 block">Vamos começar?</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">O primeiro passo pode ser uma conversa</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Entre em contato para tirar dúvidas sobre disponibilidade, formatos de atendimento, valores e agendamento. Terei o maior prazer em responder.
          </p>
          <div className="flex justify-center mb-16">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 rounded-full font-medium transition-colors text-center shadow-lg shadow-teal-900/50 flex items-center gap-3"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left border-t border-slate-800 pt-16">
            <div>
              <h4 className="font-serif text-xl mb-4">Localização (Fictícia)</h4>
              <p className="text-slate-400 font-light text-sm">
                Edifício Comercial Tatuí, Sala 402<br/>
                Rua das Flores, 123 - Centro<br/>
                Tatuí - SP
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4">Horário de Atendimento</h4>
              <p className="text-slate-400 font-light text-sm">
                Segunda a Sexta: 08:00 às 20:00<br/>
                Sábado: 09:00 às 13:00<br/>
                <em className="opacity-70 mt-2 block">* Apenas com horário marcado.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
