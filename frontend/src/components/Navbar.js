import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Sobre Mim", href: "/#sobre" },
  { name: "Educação", href: "/#educacao" },
  { name: "Habilidades", href: "/#habilidades" },
  { name: "Projetos", href: "/#projetos" },
  { name: "Contato", href: "/#contato" },
];

export default function Navbar() {
  return (
    <>
      {/* Botão mobile*/}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-gray-900 text-white p-2 rounded-md border border-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir Menu"
      >
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/*  Overlay escuro mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 md:hidden" onClick={() => setMenuOpen(false)} />
      )}

      <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col p-8 transition-transform duration-300 `{menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0">
        {/*  Perfil */}
        <div className="text-center mb-12">
          <Image
            src="/perfil.jpg"
            alt="Foto de Guilherme Bisof"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-4 border-2 border-cyan-400"
          />
          <h2 className="text-xl font-bold">Guilherme Bisof</h2>
          <p className="text-sm text-gray-400">Desenvolvedor Full-Stack</p>
        </div>

        {/*  Navegação Principal */}
        <nav>
          <h3 className="text-xs uppercase text-gray-500 font-bold mb-4">
            Navegação
          </h3>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center space-x-3 hover:text-cyan-400 transition-colors"
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
            
        {/*  LOGIN DO ADMIN */}
        {/*
        <div className="mt-auto">
          <h3 className="text-xs uppercase text-gray-500 font-bold mb-4">
            Admin
          </h3>
          <Link
            href="/admin/login"
            className="flex items-center space-x-3 hover:text-cyan-400 transition-colors"
          >
            <span>Acessar Painel</span>
          </Link>
        </div> */}

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-gray-600">
          © 2025 Guilherme Bisof
        </div>
      </aside>
    </>
  );
}
