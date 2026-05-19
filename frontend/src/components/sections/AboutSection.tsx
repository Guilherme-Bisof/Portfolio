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

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
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

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
          <a
            href="#projetos"
            className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold py-3 px-8 rounded transition shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-950 font-bold py-3 px-8 rounded transition"
          >
            Entrar em Contato
          </a>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/Curiculo-Guilherme-Desenvolvedor-FullStack.pdf"
            download="Curiculo-Guilherme-Desenvolvedor-FullStack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span className="underline underline-offset-4 decoration-gray-700 group-hover:decoration-cyan-400 transition-colors">
              Baixar Currículo em PDF
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
