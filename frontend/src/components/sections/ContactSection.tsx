"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contato"
      className="flex flex-col py-32 bg-black text-white border-t border-neutral-900"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
            {t("contact.title1")} <br className="hidden md:block" /> {t("contact.title2")}
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-md">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
          className="flex flex-col gap-6"
        >
          {/* Links */}
          <a
            href="https://www.linkedin.com/in/guilhermebisof/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-4 group"
          >
            LinkedIn
            <span className="text-2xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-neutral-700 group-hover:text-neutral-300">
              ↗
            </span>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5514981245716&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl md:text-4xl font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-4 group"
          >
            WhatsApp
            <span className="text-2xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-neutral-700 group-hover:text-neutral-300">
              ↗
            </span>
          </a>

          <a
            href="mailto:guilherme.bisoff@gmail.com"
            className="text-3xl md:text-4xl font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-4 group"
          >
            E-mail
            <span className="text-2xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-neutral-700 group-hover:text-neutral-300">
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
