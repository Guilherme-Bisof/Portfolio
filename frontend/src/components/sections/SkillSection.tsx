"use client";

import React from "react";
import SkillCard from "../ui/SkillCard";
import { motion, Variants } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiElectron,
  SiPrisma,
  SiAxios,
  SiVercel,
  SiRailway,
  SiJsonwebtokens,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbApi } from "react-icons/tb";

interface SkillItem {
  icon: React.ReactNode;
  name: string;
}

const backEndSkills: SkillItem[] = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
  { icon: <TbApi />, name: "APIs REST" },
  { icon: <SiJsonwebtokens />, name: "JWT" },
];

const frontEndSkills: SkillItem[] = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const tools: SkillItem[] = [
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "Github" },
  { icon: <SiElectron />, name: "Electron" },
  { icon: <SiPrisma />, name: "Prisma ORM" },
  { icon: <SiAxios />, name: "Axios" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiRailway />, name: "Railway" },
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

import { useLanguage } from "@/context/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="habilidades"
      className="flex flex-col py-32 bg-black text-white"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariant}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-2xl leading-relaxed">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-24">
          {/* Categoria: Back-End */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariant}
          >
            <h3 className="text-xl font-medium tracking-tight mb-8 text-neutral-300 border-b border-neutral-900 pb-4">
              {t("skills.backend")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {backEndSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariant}
                  className="h-full"
                >
                  <SkillCard icon={skill.icon} name={skill.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Categoria: Front-End */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariant}
          >
            <h3 className="text-xl font-medium tracking-tight mb-8 text-neutral-300 border-b border-neutral-900 pb-4">
              {t("skills.frontend")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {frontEndSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariant}
                  className="h-full"
                >
                  <SkillCard icon={skill.icon} name={skill.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Categoria: Ferramentas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariant}
          >
            <h3 className="text-xl font-medium tracking-tight mb-8 text-neutral-300 border-b border-neutral-900 pb-4">
              {t("skills.tools")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariant}
                  className="h-full"
                >
                  <SkillCard icon={tool.icon} name={tool.name} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
