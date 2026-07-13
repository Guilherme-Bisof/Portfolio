import { Project } from "@/types/project";

export const fallbackProjects: Project[] = [
  {
    id: 9,
    title: "ConnectU — Plataforma Inteligente de Conexão entre Estudantes, Empresas e Universidades",
    titleEn: "ConnectU — Intelligent Platform Connecting Students, Companies and Universities",
    description: "Status: 🚧 MVP em desenvolvimento (Desenvolvimento contínuo)\n\nO ConnectU é uma plataforma Full-Stack desenvolvida para conectar estudantes, empresas e universidades em um único ecossistema profissional. A plataforma utiliza um sistema inteligente de Match para recomendar oportunidades de acordo com as competências do usuário, além de oferecer networking, comunicação entre candidatos e recrutadores, acompanhamento de candidaturas e recomendações de cursos para aumentar a compatibilidade com as vagas.",
    descriptionEn: "Status: 🚧 MVP in development (Continuous development)\n\nConnectU is a Full-Stack platform designed to connect students, companies, and universities in a single professional ecosystem. The platform uses an intelligent Match system to recommend opportunities according to the user's skills, in addition to offering networking, communication between candidates and recruiters, application tracking, and course recommendations to increase compatibility with job openings.",
    repoUrl: "",
    deployInput: "https://connect-u-psi.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Prisma ORM", "MySQL", "Cloudinary", "Socket.IO", "Vercel"],
    type: "Full-Stack Web App",
    image: "/uploads/image-1783689128191-556711748.png"
  },
  {
    id: 1,
    title: "Sistema de Gestão",
    titleEn: "Management System",
    description: "Sistema desktop desenvolvido para gerenciamento completo de uma loja de veículos, funcionando de forma totalmente offline.\nA aplicação permite controle de estoque, cadastro de veículos com múltiplas imagens, gestão financeira (contas a pagar/receber) e organização das vendas.\n\nO projeto foi pensado para resolver um problema real de negócio, garantindo performance e independência de conexão com a internet.",
    descriptionEn: "Desktop system developed for complete management of a vehicle store, running entirely offline.\nThe application allows inventory control, vehicle registration with multiple images, financial management (accounts payable/receivable), and sales organization.\n\nThe project was designed to solve a real business problem, ensuring performance and independence from an internet connection.",
    repoUrl: "https://github.com/Guilherme-Bisof/Sistema-de-Gestao",
    deployInput: "",
    technologies: ["JavaScript (ES6+)", "Node.js", "Electron", "CSS", "HTML"],
    type: "Desktop App",
    image: "/uploads/image-1779149756716-897967121.png"
  },
  {
    id: 2,
    title: "Sistema de Processos Circulares (PROJETO PARTICULAR)",
    titleEn: "Circular Processes System (PRIVATE PROJECT)",
    description: "Sistema web desenvolvido para gerenciamento de processos circulares na área de Justiça Restaurativa, incluindo cadastro de sessões, participantes e relatórios.\n\nProjeto focado em organização de fluxos e melhoria da gestão de atendimentos.",
    descriptionEn: "Web system developed to manage circular processes in the area of Restorative Justice, including session registration, participants, and reports.\n\nProject focused on organizing workflows and improving service management.",
    repoUrl: "",
    deployInput: "",
    technologies: ["PHP", "MYSQL", "JAVASCRIPT", "BOOTSTRAP"],
    type: "Web Application",
    image: "/uploads/image-1779149815893-698413198.png"
  },
  {
    id: 3,
    title: "Portfólio Full-Stack",
    titleEn: "Full-Stack Portfolio",
    description: "Aplicação fullstack desenvolvida para apresentação de projetos com gerenciamento dinâmico via painel administrativo. Inclui autenticação com JWT, integração com banco de dados e deploy em produção (Vercel + Railway).",
    descriptionEn: "Fullstack application developed for presenting projects with dynamic management via an administrative panel. Includes JWT authentication, database integration, and production deployment (Vercel + Railway).",
    repoUrl: "https://github.com/Guilherme-Bisof/Portfolio",
    deployInput: "https://guilhermebisof.site/",
    technologies: ["Next.js", "Node.js", "Exprees", "PostgreSQL", "Prisma", "Tailwind CSS"],
    type: "Full-Stack Web App",
    image: "/uploads/image-1779149827017-408206373.png",
    challenge: "Tes",
    solution: "teste",
    learned: "teste"
  }
];
