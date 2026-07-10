"use client";

import React from "react";
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
}

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0a0a0a] border border-neutral-900 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#111111] hover:border-neutral-700 transition-colors cursor-pointer group h-full"
    >
      <div className="text-4xl text-neutral-600 group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      <p className="text-neutral-400 font-medium text-sm tracking-wide text-center group-hover:text-neutral-200 transition-colors duration-500">
        {name}
      </p>
    </motion.div>
  );
}
