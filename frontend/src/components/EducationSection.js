import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const graduation = {
  course: "Análise e Desenvolvimento de Sistemas",
  institution: "UniCesumar - Tatuí/SP",
  period: "Conclusão: Junho 2028",
  // description: "Curso superior com foco em gestão de projetos de tecnologia, infraestrutura e sistemas de informação.",
  tags: ["ADS", "TI", "Projetos"]
};

const complementaryCourses = [
  {
    name: "Introdução à POO",
    institution: "Fundação Bradesco",
    year: "Prev. 2025"
  },
  {
    name: "Site com HTML, CSS e JS",
    institution: "Fundação Bradesco",
    year: "2024"
  },
];


export default function EducationSection() {
  return (
    <section id="educacao" className="flex flex-col items-center py-24 bg-black text-white">
      <div className="w-full max-w-4xl px-4">
        {/* Título */}
        <div className="w-full mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Educação</h1>
          <div className="h-1 w-24 bg-cyan-400 mt-2"></div>
        </div>

        {/*  Graduação */}
        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="text-cyan-400 mt-1">
            <FaGraduationCap size={32} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-cyan-400 mb-2">{graduation.period}</p>
            <h3 className="text-2xl font-bold text-white mb-1">{graduation.course}</h3>
            <p className="text-lg text-gray-400 mb-4">{graduation.institution}</p>
            <p className="text-gray-300 mb-6">{graduation.description}</p>
            <div className="flex flex-wrap gap-2">
              {graduation.tags.map(tag => (
                <span key={tag} className="bg-gray-700 text-cyan-300 text-sm px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/*  Cursos Complementares */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Cursos Complementares</h2>
          <div className="space-y-6">
            {complementaryCourses.map(course => (
              <div key={course.name} className="flex items-center gap-6 p-4 rounded-lg hover:bg-gray-900/50 transition-colors">
                <div className="text-gray-500"><FaCertificate size={24} /></div>
                <div className="text-gray-400 font-semibold">{course.year}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white">{course.name}</h4>
                  <p className="text-sm text-gray-400">{course.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}