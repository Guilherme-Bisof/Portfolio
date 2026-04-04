import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project, onClick }) {
  const { title, description, imageUrl, repoUrl, deployInput } = project;

  return (
    <div
      onClick={onClick}
      className="bg-gray-900/50 rounded-lg p-6 flex flex-col h-full border border-cyan-400/30 shadow-[0_0_10px_rgba(0,255,255,0.1)] cursor-pointer hover:border-cyan-400/80 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
    >
      <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
      <p className="text-gray-300 flex-grow mb-4">{description}</p>

      <div className="mt-auto text-cyan-500 font-semibold">Ver Detalhes</div>
    </div>
  );
}