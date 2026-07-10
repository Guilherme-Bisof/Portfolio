"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const textReveal: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="sobre"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col gap-6 z-10"
        >
          <motion.h1
            variants={textReveal}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white leading-[0.9]"
          >
            Guilherme <br className="hidden md:block" />
            <span className="text-neutral-600">Bisof.</span>
          </motion.h1>

          <motion.h2
            variants={textReveal}
            className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-300 mt-4 md:mt-8"
          >
            Engenharia de Software & <br />
            Desenvolvimento Full-Stack.
          </motion.h2>

          <motion.p
            variants={textReveal}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mt-4 leading-relaxed font-light"
          >
            Construindo sistemas escaláveis, performáticos e focados na
            resolução de problemas reais do mercado. Baseado em Tatuí/SP.
          </motion.p>

          {/* Links */}
          <motion.div
            variants={textReveal}
            className="flex items-center gap-8 mt-12"
          >
            <a
              href="#projetos"
              className="text-white text-lg font-medium border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors"
            >
              Ver Projetos ↗
            </a>
            <a
              href="#contato"
              className="text-neutral-400 text-lg font-medium hover:text-white transition-colors"
            >
              Entrar em contato
            </a>
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex justify-end w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 40 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl group"
          >
            <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <Image
              src="/perfil.jpg"
              alt="Guilherme Bisof"
              fill
              className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              sizes="(max-width: 1024px) 100vw, 320px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
