"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold text-white tracking-tighter"
        >
          Guilherme<span className="text-neutral-500">.</span>
        </Link>

        {/* Links de Navegação */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-neutral-400">
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#sobre">Sobre</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#educacao">Educação</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#experiencia">Experiência</a></li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#projetos">Projetos</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#contato">Contato</a>
          </li>
        </ul>

        {/* Botão de Currículo */}
        <motion.a
          whileHover={{ y: -2 }}
          href="/Curiculo-Guilherme-Desenvolvedor-FullStack.pdf"
          download
          className="px-5 py-2 border border-neutral-800 text-white rounded-full hover:bg-neutral-900 transition-colors text-xs tracking-widest uppercase font-medium flex items-center gap-2"
        >
          Currículo <span className="text-neutral-500">↓</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}
