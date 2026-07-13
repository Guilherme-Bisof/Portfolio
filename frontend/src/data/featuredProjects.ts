export interface FeaturedProject {
  id: string;
  categoryFilter: string;
  categoryLabel: string;
  categoryLabelEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
  technologies: string[];
  image: string;
  
  // Modal/Case details 
  challenge?: string;
  challengeEn?: string;
  solution?: string;
  solutionEn?: string;
  learned?: string;
  learnedEn?: string;

  // Buttons configurations
  primaryButton: {
    label: string;
    labelEn: string;
    action: 'url' | 'modal' | 'video';
    url?: string;
  };
  secondaryButton?: {
    label: string;
    labelEn: string;
    action: 'url' | 'modal' | 'video';
    url?: string;
  };
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "connectu",
    categoryFilter: "Sistemas web",
    categoryLabel: "Plataforma full-stack",
    categoryLabelEn: "Full-stack Platform",
    title: "ConnectU — Plataforma de talentos e empresas",
    titleEn: "ConnectU — Talent and Company Platform",
    description: "Plataforma web desenvolvida para aproximar profissionais e empresas por meio de perfis, autenticação e jornadas específicas para diferentes tipos de usuário.",
    descriptionEn: "Web platform developed to connect professionals and companies through profiles, authentication, and specific journeys for different user types.",
    highlights: [
      "Autenticação e controle de acesso",
      "Perfis de talentos e empresas",
      "Upload e gerenciamento de imagens",
      "Comunicação em tempo real"
    ],
    highlightsEn: [
      "Authentication and access control",
      "Talent and company profiles",
      "Image upload and management",
      "Real-time communication"
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    image: "/uploads/connectu.png",
    challenge: "Criar um ecossistema seguro e escalável onde estudantes e empresas pudessem interagir de forma intuitiva, lidando com diferentes permissões, gerenciamento de mídias e atualizações em tempo real.",
    challengeEn: "Create a secure and scalable ecosystem where students and companies could interact intuitively, handling different permissions, media management, and real-time updates.",
    solution: "Foi construída uma arquitetura baseada em Next.js e Prisma, garantindo forte tipagem e performance. Implementamos Socket.IO para as interações em tempo real e integramos o Cloudinary para upload otimizado de imagens.",
    solutionEn: "An architecture based on Next.js and Prisma was built, ensuring strong typing and performance. We implemented Socket.IO for real-time interactions and integrated Cloudinary for optimized image upload.",
    primaryButton: {
      label: "Explorar plataforma",
      labelEn: "Explore platform",
      action: "url",
      url: "https://connect-u-psi.vercel.app/"
    },
    secondaryButton: {
      label: "Ver estudo de caso",
      labelEn: "View case study",
      action: "modal"
    }
  },
  {
    id: "processos-circulares",
    categoryFilter: "Sistemas web",
    categoryLabel: "Sistema web para gestão pública",
    categoryLabelEn: "Web system for public management",
    title: "Gestão de Processos Circulares",
    titleEn: "Circular Processes Management",
    description: "Sistema desenvolvido para centralizar processos, agendas, documentos e usuários ligados ao atendimento da Justiça Restaurativa.",
    descriptionEn: "System developed to centralize processes, schedules, documents, and users linked to Restorative Justice services.",
    highlights: [
      "Gerenciamento de processos",
      "Calendário e agendamentos",
      "Controle de usuários e permissões",
      "Acompanhamento de situação e arquivamento"
    ],
    highlightsEn: [
      "Process management",
      "Calendar and scheduling",
      "User and permission control",
      "Status tracking and archiving"
    ],
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "/uploads/processos_circulares.png",
    challenge: "Substituir controles e planilhas dispersos por uma plataforma centralizada, facilitando o acompanhamento de processos e garantindo restrição de acesso e segurança da informação.",
    challengeEn: "Replace scattered controls and spreadsheets with a centralized platform, facilitating process tracking and ensuring access restriction and information security.",
    solution: "Desenvolvimento de um sistema relacional robusto com painéis de acesso granulares, permitindo a gestão fácil de agendas, responsáveis e documentos através de uma interface administrativa limpa.",
    solutionEn: "Development of a robust relational system with granular access panels, allowing easy management of schedules, responsible parties, and documents through a clean administrative interface.",
    primaryButton: {
      label: "Ver estudo de caso",
      labelEn: "View case study",
      action: "modal"
    },
    secondaryButton: {
      label: "Conhecer funcionalidades",
      labelEn: "View features",
      action: "modal"
    }
  },
  {
    id: "gestao-loja",
    categoryFilter: "Aplicações desktop",
    categoryLabel: "Aplicação desktop",
    categoryLabelEn: "Desktop Application",
    title: "Sistema de Gestão para Loja de Veículos",
    titleEn: "Vehicle Store Management System",
    description: "Aplicação desktop criada para organizar veículos, clientes, vendas e informações operacionais de uma loja em uma única interface.",
    descriptionEn: "Desktop application created to organize vehicles, clients, sales, and operational information of a store in a single interface.",
    highlights: [
      "Cadastro e gerenciamento de veículos",
      "Controle de clientes",
      "Acompanhamento de vendas",
      "Operação local em aplicação desktop"
    ],
    highlightsEn: [
      "Vehicle registration and management",
      "Client control",
      "Sales tracking",
      "Local operation in desktop app"
    ],
    technologies: ["Electron", "JavaScript", "Node.js", "CSS"],
    image: "/uploads/sistema_de_gestão.png",
    challenge: "Desenvolver um sistema que funcionasse offline garantindo independência de internet na loja, mantendo integridade e agilidade nos lançamentos financeiros.",
    challengeEn: "Develop a system that works offline ensuring internet independence in the store, maintaining integrity and agility in financial entries.",
    solution: "Adoção do Electron para empacotar a aplicação web como desktop, com um banco de dados embutido para funcionamento local rápido e seguro.",
    solutionEn: "Adoption of Electron to package the web application as desktop, with an embedded database for fast and secure local operation.",
    primaryButton: {
      label: "Assistir demonstração",
      labelEn: "Watch demo",
      action: "url",
      url: "https://github.com/Guilherme-Bisof/Sistema-de-Gestao"
    },
    secondaryButton: {
      label: "Ver código",
      labelEn: "View code",
      action: "url",
      url: "https://github.com/Guilherme-Bisof/Sistema-de-Gestao"
    }
  },
  {
    id: "portfolio",
    categoryFilter: "Sites e landing pages",
    categoryLabel: "Projeto pessoal",
    categoryLabelEn: "Personal Project",
    title: "Portfólio Pessoal",
    titleEn: "Personal Portfolio",
    description: "Plataforma desenvolvida para reunir minha experiência, projetos, competências e canais de contato em uma experiência responsiva e bilíngue.",
    descriptionEn: "Platform developed to gather my experience, projects, skills, and contact channels in a responsive and bilingual experience.",
    highlights: [
      "Projetos dinâmicos",
      "Dois idiomas (PT/EN)",
      "Interface responsiva",
      "Administração de conteúdo"
    ],
    highlightsEn: [
      "Dynamic projects",
      "Bilingual support (PT/EN)",
      "Responsive interface",
      "Content administration"
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "/uploads/portfolio.png",
    challenge: "Criar uma vitrine altamente performática e fácil de atualizar, capaz de atender tanto recrutadores técnicos quanto clientes comerciais.",
    challengeEn: "Create a highly performant and easy-to-update showcase, capable of serving both technical recruiters and commercial clients.",
    solution: "Utilização do Next.js App Router aliado a uma API interna, permitindo carregar projetos estáticos no lado do cliente e gerenciar novos conteúdos através de um painel autenticado integrado.",
    solutionEn: "Use of Next.js App Router combined with an internal API, allowing static projects to load on the client side and managing new content through an integrated authenticated panel.",
    primaryButton: {
      label: "Ver estudo de caso",
      labelEn: "View case study",
      action: "modal"
    },
    secondaryButton: {
      label: "Ver código",
      labelEn: "View code",
      action: "url",
      url: "https://github.com/Guilherme-Bisof/Portfolio"
    }
  }
];
