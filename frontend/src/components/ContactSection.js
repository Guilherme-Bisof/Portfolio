import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactButton({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 border border-transparent hover:border-cyan-400/50 text-white font-semibold flex items-center justify-center gap-3 py-3 px-6 rounded-lg transition-all w-full sm:w-auto"
    >
      {icon}
      {text}
    </a>
  );
}

export default function ContactSection() {
  const userEmail = "guilherme.bisoff@gmail.com";
  const userLinkedin = "https://www.linkedin.com/in/guilhermebisof/";

  return (
    <section
      id="contato"
      className="flex flex-col items-center py-24 bg-black text-white"
    >
      <div className="w-full max-w-4xl px-4 text-center">
        <div className="inline-block">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">Contatos</h1>
          <div className="h-1 w-2/3 bg-cyan-400 mt-2 mx-auto"></div>
        </div>

        <p className="max-w-xl mx-auto my-8 text-gray-400">
          Gostou do que viu? Ficarei feliz em conectar com você. Sinta-se à
          vontade para me contatar através de um dos canais abaixo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <ContactButton
            href={userLinkedin}
            icon={<FaLinkedin size={20} />}
            text="LinkedIn"
          />
          <ContactButton
            href={`mailto:${userEmail}`}
            icon={<FaEnvelope size={20} />}
            text="Email"
          />
        </div>
      </div>
    </section>
  );
}
