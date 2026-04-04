export default function SkillCard({ icon, name }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-700 hover:border-cyan-400/50 transition-all cursor-pointer">
      <div className="text-4xl text-cyan-400">{icon}</div>
      <p className="text-white font-semibold text-center">{name}</p>
    </div>
  );
}