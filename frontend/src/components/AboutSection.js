import Image from "next/image";

const navLinks = [
  { name: "Projetos", href: "/#projetos" },
  { name: "Contatos", href: "/#contato" },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center justify-center py-16 md:py-24 bg-black text-white "
    >
      {/* Container principal */}
      <div className="w-full max-w-3xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6">
          Construo sistemas reais, escaláveis e prontos para produção.
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-6">
          Desenvolvedor Full-Stack focado em backend, interfaces funcionais e
          produtos que resolvem problemas de verdade.
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Projetos com autenticação, banco de dados, deploy em produção e
          arquitetura próxima ao mercado real.
        </p>

        <a
          href="#projetos"
          class="flex-1 bg-cyan-600 hover:bg-cyan-700 text-black font-bold py-2 px-6 rounded transition-colors text-center"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          class="flex-1 bg-cyan-600 hover:bg-cyan-700 text-black font-bold py-2 px-6 rounded transition-colors text-center"
        >
          Entrar em Contato
        </a>

        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Olá! Sou **Guilherme Bisof**, um desenvolvedor apaixonado por
          transformar ideias em experiências digitais modernas e intuitivas.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mt-4 max-w-2xl mx-auto">
          Atualmente cursando Gestão de TI na Fatec Tatuí, meu foco é o
          desenvolvimento Full-Stack, combinando lógica de back-end com
          interfaces de front-end dinâmicas para construir aplicações robustas e
          eficientes.
        </p>

        <div className="mt-8 inline-block">
          <h3 className="text-xl font-bold text-white">
            Construindo o futuro, uma linha de código por vez.
          </h3>
          <div className="h-1 w-full bg-cyan-400 mt-2"></div>
        </div>
      </div>
    </section>
  );
}
