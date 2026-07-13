import Link from 'next/link';
import React from 'react';

interface DemoBannerProps {
  demoName?: string;
}

export default function DemoBanner({ demoName }: DemoBannerProps) {
  const phoneNumber = "5515999999999"; // TODO: Substitua pelo seu número real
  
  const textMessage = demoName 
    ? `Olá, Guilherme! Vi a demonstração de site para ${demoName} e gostaria de saber como funcionaria para o meu negócio.`
    : `Olá, Guilherme! Vi uma de suas demonstrações de site e gostaria de saber como funcionaria para o meu negócio.`;
    
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;

  return (
    <div className="bg-neutral-900 text-white w-full z-[100] py-3 px-4 shadow-md sticky top-0 font-sans border-b border-neutral-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center md:text-left">
          <span className="bg-amber-500 text-black font-bold uppercase tracking-wider text-xs px-2 py-1 rounded mr-3 inline-block mb-2 md:mb-0">
            Projeto demonstrativo
          </span>
          <span className="text-neutral-300 font-light">
            Esta página é um exemplo fictício desenvolvido por Guilherme Bisof e pode ser personalizada para sua empresa.
          </span>
        </div>
        
        <div className="flex gap-3 shrink-0">
          <Link 
            href="/"
            className="bg-transparent border border-neutral-600 hover:border-neutral-400 text-white font-medium py-1.5 px-4 rounded transition-colors text-xs uppercase tracking-wide"
          >
            Ver portfólio
          </Link>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white font-medium py-1.5 px-4 rounded transition-colors text-xs uppercase tracking-wide shadow-lg shadow-green-600/20"
          >
            Solicitar um site parecido
          </a>
        </div>
      </div>
    </div>
  );
}
