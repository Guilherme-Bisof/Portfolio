import React from "react";
import DemoBanner from "@/components/demos/DemoBanner";
import DemoFooter from "@/components/demos/DemoFooter";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Demo de Site para Restaurante | Guilherme Bisof",
  description: "Exemplo demonstrativo de site profissional para restaurantes, com apresentação, cardápio e reservas.",
  alternates: {
    canonical: "https://guilhermebisof.site/demos/restaurante",
  }
};

export default function RestauranteDemo() {
  const whatsappUrl = "https://wa.me/5515999999999?text=Ol%C3%A1%2C%20Guilherme!%20Vi%20a%20demonstra%C3%A7%C3%A3o%20de%20site%20para%20restaurantes%20e%20gostaria%20de%20saber%20como%20funcionaria%20para%20o%20meu%20neg%C3%B3cio.";

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-serif text-neutral-800">
      <DemoBanner demoName="restaurantes" />

      {/* Navbar Transparente (Falsa) */}
      <div className="absolute top-12 left-0 w-full z-30 pt-16">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-white">
          <div className="text-2xl font-bold uppercase tracking-[0.2em] drop-shadow-md">La Sabor</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans drop-shadow-md">
            <span>Menu</span>
            <span>Ambiente</span>
            <span>Contato</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
            alt="Restaurant Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-rose-100 uppercase tracking-[0.3em] font-sans text-sm mb-6 border-b border-rose-200 pb-2">Gastronomia Contemporânea</span>
          <h1 className="text-6xl md:text-8xl font-medium text-white mb-8 drop-shadow-lg">
            La Sabor
          </h1>
          <p className="text-xl md:text-2xl text-rose-50 font-light mb-12 max-w-2xl mx-auto italic drop-shadow-md">
            &quot;Uma experiência sensorial inesquecível, onde cada prato conta uma história.&quot;
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rose-900 hover:bg-rose-800 text-white font-sans text-sm py-4 px-12 tracking-widest uppercase transition-colors"
          >
            Reservar Mesa
          </a>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-rose-900 uppercase tracking-[0.2em] font-sans text-xs font-bold block mb-4">Descubra nosso Menu</span>
            <h2 className="text-4xl md:text-5xl font-medium text-neutral-900">Especialidades do Chef</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { name: "Risoto Trufado", desc: "Arroz arbório, cogumelos frescos, azeite trufado e lascas de grana padano.", price: "R$ 89" },
              { name: "Salmão Grelhado", desc: "Filé de salmão com crosta de ervas, purê de mandioquinha e aspargos.", price: "R$ 96" },
              { name: "Mignon ao Poivre", desc: "Medalhão de filé mignon, molho poivre vert e batatas gratinadas.", price: "R$ 112" },
              { name: "Tiramisu Clássico", desc: "Sobremesa italiana tradicional com café espresso e queijo mascarpone.", price: "R$ 38" },
              { name: "Burrata Cremosa", desc: "Burrata fresca com tomate confit, pesto de manjericão e torradas.", price: "R$ 65" },
              { name: "Polvo à Lagareiro", desc: "Polvo grelhado, batatas ao murro, alho confit e azeite extravirgem.", price: "R$ 145" }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-start group cursor-default">
                <div className="flex-1 pr-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium text-neutral-900 group-hover:text-rose-900 transition-colors">{item.name}</h3>
                    <div className="flex-1 border-b border-dotted border-neutral-400 mx-4 opacity-30"></div>
                    <span className="text-rose-900 font-sans font-bold">{item.price}</span>
                  </div>
                  <p className="text-neutral-500 font-sans text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-white font-sans text-sm py-4 px-10 tracking-widest uppercase transition-colors inline-block"
            >
              Fazer Pedido / Reserva
            </a>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" 
          alt="Chef cooking" 
          fill
          className="object-cover fixed-attachment" 
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="bg-white/95 p-12 text-center max-w-lg mx-4 shadow-2xl">
            <h3 className="text-3xl font-medium text-neutral-900 mb-4">Ingredientes Frescos</h3>
            <p className="text-neutral-600 font-sans font-light leading-relaxed mb-6">Trabalhamos exclusivamente com produtores locais para garantir o máximo de sabor e sustentabilidade em cada refeição.</p>
            <span className="text-rose-900 uppercase tracking-widest font-sans text-xs font-bold">Direto da fazenda para a mesa</span>
          </div>
        </div>
      </section>

      {/* Endereço e Contato (Sem ser o Footer de verdade, é da demo) */}
      <section className="bg-neutral-900 pt-20 pb-20 text-center text-white">
        <h2 className="text-3xl font-medium mb-8">La Sabor</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 font-sans text-neutral-400 text-sm font-light mb-12">
          <div>
            <span className="block text-rose-500 uppercase tracking-widest text-xs font-bold mb-2">Endereço (Fictício)</span>
            <p>Rua da Gastronomia, 123 - Centro<br/>Tatuí, SP</p>
          </div>
          <div>
            <span className="block text-rose-500 uppercase tracking-widest text-xs font-bold mb-2">Funcionamento</span>
            <p>Terça a Domingo<br/>19:00 às 23:30</p>
          </div>
          <div>
            <span className="block text-rose-500 uppercase tracking-widest text-xs font-bold mb-2">Contato</span>
            <p>reservas@lasabor.com</p>
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}
