import Image from 'next/image';



export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center justify-center py-16 md:py-24 bg-black text-white "
    >
      {/* Container principal agora é mais simples e centralizado */}
      <div className="w-full max-w-3xl px-4 text-center">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-6">
          Desenvolvedor Full-Stack focado em sistemas reais e escaláveis
        </h1>

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