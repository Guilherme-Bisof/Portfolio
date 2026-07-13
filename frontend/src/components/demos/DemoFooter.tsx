import React from 'react';

export default function DemoFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-500 py-8 px-6 text-center font-sans border-t border-neutral-900">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-light">
          <strong>Esta é uma demonstração fictícia.</strong> Nomes, imagens, endereços, depoimentos e informações são apenas ilustrativos. 
        </p>
        <p className="text-xs mt-2 opacity-60">
          Desenvolvido por Guilherme Bisof para demonstração de portfólio.
        </p>
      </div>
    </footer>
  );
}
