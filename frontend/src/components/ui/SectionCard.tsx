"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#111111] rounded-2xl p-8 md:p-10 w-full max-w-4xl mb-8 border border-neutral-800"
    >
      <h2 className="text-3xl font-bold mb-8 text-white tracking-tight">
        {title}
      </h2>
      <div className="text-neutral-400 space-y-6 font-light leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
}
