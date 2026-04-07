import SkillCard from "./SkillCard";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";


import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiMysql,
  SiSqlite,
  SiElectron,
  SiPrisma,
  SiAxios,
  SiVercel,
  SiRailway,
  SiJsonwebtokens,
} from "react-icons/si";

import {
  BiLogoPostgresql,
} from "react-icons/bi";

import { TbApi } from "react-icons/tb";


const backEndSkills = [
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiSqlite />, name: "SQLite" },
  { icon: <TbApi />, name: "APIs REST" },
  { icon: <SiJsonwebtokens />, name: "JWT" },
];

const frontEndSkills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "Html5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];

const tools = [
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "Github" },
  { icon: <SiElectron />, name: "Electron (Desktop apps)" },
  { icon: <SiPrisma />, name: "Prisma ORM" },
  { icon: <SiAxios />, name: "Axios" },
  { icon: <SiVercel />, name: "Vercel (deploy)" },
  { icon: <SiRailway />, name: "Railway (backend)" },
  {}
];

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="flex flex-col items-center py-24 bg-black text-white"
    >
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-cyan-400">
          Habilidades
        </h1>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Back-End</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {backEndSkills.map((backEndSkills) => (
              <SkillCard
                key={backEndSkills.name}
                icon={backEndSkills.icon}
                name={backEndSkills.name}
              />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Front-End</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frontEndSkills.map((frontEndSkills) => (
              <SkillCard
                key={frontEndSkills.name}
                icon={frontEndSkills.icon}
                name={frontEndSkills.name}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ferramentas e Outros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <SkillCard key={tool.name} icon={tool.icon} name={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
