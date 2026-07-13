"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
          onClick={closeMenu}
        >
          Guilherme<span className="text-neutral-500">.</span>
        </Link>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-neutral-400">
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#sobre">{t("navbar.about")}</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#educacao">{t("navbar.education")}</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#experiencia">{t("navbar.experience")}</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#projetos">{t("navbar.projects")}</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#demos">{t("navbar.demos")}</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#contato">{t("navbar.contact")}</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Botão de Idioma */}
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          >
            {language === "pt" ? "EN" : "PT"}
          </button>

          {/* Botão de Currículo (Desktop) */}
          <motion.a
            whileHover={{ y: -2 }}
            href="/Curiculo-Guilherme-Desenvolvedor-FullStack.pdf"
            download
            className="hidden md:flex px-5 py-2 border border-neutral-800 text-white rounded-full hover:bg-neutral-900 transition-colors text-xs tracking-widest uppercase font-medium items-center gap-2"
          >
            {t("navbar.resume")} <span className="text-neutral-500">↓</span>
          </motion.a>

          {/* Menu Hamburger (Mobile) */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 border-b border-neutral-900"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-neutral-300">
              <li className="hover:text-white transition-colors cursor-pointer border-b border-neutral-900 pb-2">
                <a href="#sobre" onClick={closeMenu}>{t("navbar.about")}</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer border-b border-neutral-900 pb-2">
                <a href="#educacao" onClick={closeMenu}>{t("navbar.education")}</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer border-b border-neutral-900 pb-2">
                <a href="#experiencia" onClick={closeMenu}>{t("navbar.experience")}</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer border-b border-neutral-900 pb-2">
                <a href="#projetos" onClick={closeMenu}>{t("navbar.projects")}</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer border-b border-neutral-900 pb-2">
                <a href="#demos" onClick={closeMenu}>{t("navbar.demos")}</a>
              </li>
              <li className="hover:text-white transition-colors cursor-pointer border-b border-neutral-900 pb-2">
                <a href="#contato" onClick={closeMenu}>{t("navbar.contact")}</a>
              </li>
              <li className="pt-2">
                <a
                  href="/Curiculo-Guilherme-Desenvolvedor-FullStack.pdf"
                  download
                  className="w-full text-center block px-5 py-3 border border-neutral-700 text-white rounded-lg hover:bg-neutral-900 transition-colors text-xs tracking-widest uppercase font-medium"
                >
                  {t("navbar.resume")} ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
