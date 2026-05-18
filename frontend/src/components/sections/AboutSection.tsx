"use client";

import React, { useState, useEffect } from "react";

export default function AboutSection() {
  const words = [
    "Desenvolvedor Full-Stack focado em backend.",
    "Criador de interfaces funcionais e escaláveis.",
    "Focado em produtos que resolvem problemas de verdade.",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];

    const typingSpeed = isDeleting ? 30 : 60;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        // Se terminou de digitar a palavra inteira, espera e muda para modo de apagar
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Exibe por 2 segundos
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

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
          <h2 className="text-xl md:text-3xl font-semibold text-white mb-6 min-h-[40px] md:min-h-[80px] flex justify-center items-center gap-1">
            <span>{currentText}</span>
            <span className="text-cyan-400 animate-pulse font-light">|</span>
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
