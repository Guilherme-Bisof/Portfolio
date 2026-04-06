import SkillCard from "./SkillCard";
// Importando os ícones que já tínhamos e adicionando os de Excel e PowerPoint
import { 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaPhp, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt,
  FaFileExcel,         // ÍCONE CORRIGIDO PARA EXCEL
  FaFilePowerpoint     // ÍCONE CORRIGIDO PARA POWERPOINT
} from 'react-icons/fa';

// Importando do pacote 'si' (Simple Icons)
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMysql, 
  SiNotion, 
  SiGoogledocs, 
  SiDiagramsdotnet,
  SiExcalidraw
} from 'react-icons/si';

const mainSkills = [
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPhp />, name: "PHP" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
];


const tools = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaGitAlt />, name: "Git & GitHub" },
  { icon: <SiNotion />, name: "Notion" },
  { icon: <SiDiagramsdotnet />, name: "Draw.io" },
  { icon: <SiExcalidraw />, name: "Excalidraw" },
];

export default function SkillsSection() {
  return (
    <section id="habilidades" className="flex flex-col items-center py-24 bg-black text-white">
      <div className="w-full max-w-4xl px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-cyan-400">Habilidades</h1>
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Tecnologias Principais</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mainSkills.map(skill => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">Ferramentas e Outros</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map(tool => (
              <SkillCard key={tool.name} icon={tool.icon} name={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}