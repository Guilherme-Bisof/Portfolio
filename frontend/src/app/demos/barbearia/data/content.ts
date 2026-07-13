export const barbershopDemo = {
  header: {
    brandName: "Lumina",
    brandSubtitle: "Barbearia",
    nav: [
      { label: "A Experiência", href: "#experiencia" },
      { label: "Serviços", href: "#servicos" },
      { label: "Equipe", href: "#equipe" },
      { label: "Avaliações", href: "#avaliacoes" },
    ],
  },
  ctas: {
    primaryText: "Agendar Horário",
    secondaryText: "Ver Serviços",
    whatsappNumber: "5515999999999",
    whatsappDefaultMessage: "Olá, Guilherme. Vi a demonstração de site para barbearia e gostaria de saber como funcionaria para o meu negócio.",
  },
  hero: {
    eyebrow: "Barbearia contemporânea em Tatuí / SP",
    title: "Seu tempo respeitado.\nSeu estilo alinhado.",
    subtitle: "Muito além do corte. Um ambiente silencioso e serviço impecável para quem exige precisão.",
    image: "/uploads/barber_hero_1783913742469.png",
  },
  trustBar: [
    { text: "Avaliação 5.0 (420+)" },
    { text: "Agendamento Inteligente" },
    { text: "Toalha Quente & Aromaterapia" },
  ],
  services: [
    {
      id: "corte",
      title: "Corte",
      duration: "45 min",
      price: "R$ 60",
      description: "Consultoria de visagismo, corte na tesoura ou máquina, lavagem com produtos premium e finalização impecável.",
    },
    {
      id: "barba",
      title: "Barba Terapia",
      duration: "30 min",
      price: "R$ 50",
      description: "Ritual completo com toalha quente, aromaterapia, massagem facial e alinhamento milimétrico dos fios.",
    },
    {
      id: "combo",
      title: "Corte & Barba",
      duration: "1h 15 min",
      price: "R$ 100",
      description: "A experiência assinatura da casa. Economia e perfeição em uma única sessão relaxante.",
    },
    {
      id: "acabamento",
      title: "Acabamento Premium",
      duration: "20 min",
      price: "R$ 35",
      description: "Manutenção do perfil. Alinhamento de pezinho, nuca e laterais para manter o visual limpo entre cortes.",
    },
    {
      id: "camuflagem",
      title: "Camuflagem",
      duration: "30 min",
      price: "R$ 70",
      description: "Tonalização discreta para cabelos ou barbas grisalhas, garantindo aspecto natural e rejuvenescido.",
    },
    {
      id: "infantil",
      title: "Corte Infantil",
      duration: "45 min",
      price: "R$ 60",
      description: "Atendimento paciente, rápido e cuidadoso, garantindo uma experiência agradável (Até 12 anos).",
    }
  ],
  experience: {
    title: "Uma pausa necessária.",
    description: "Criamos a Lumina para ser o seu refúgio na rotina. Aqui não há filas, barulho excessivo ou pressa. Há técnica artesanal, café expresso ou cerveja gelada de cortesia, e uma poltrona confortável aguardando você exatamente no horário marcado.",
    image: "/uploads/barber_process_1783913760326.png"
  },
  gallery: [
    "/uploads/barber_gallery_1_1783913776946.png",
    "/uploads/barber_gallery_2_1783913808378.png"
  ],
  team: [
    {
      name: "Marcus",
      role: "Especialista em Fade e Tesoura",
      image: "/uploads/barber_team_1_1783913768790.png",
    },
    {
      name: "Daniel",
      role: "Mestre em Barba Terapia",
      image: "/uploads/barber_team_2_1783913792061.png",
    },
    {
      name: "Thiago",
      role: "Clássicos e Camuflagem",
      image: "/uploads/barber_team_3_1783913800747.png",
    }
  ],
  howItWorks: [
    {
      step: "01",
      title: "Escolha o Serviço",
      description: "Selecione a opção que melhor atende à sua necessidade de hoje."
    },
    {
      step: "02",
      title: "Reserve o Horário",
      description: "Use nosso sistema ou WhatsApp para garantir sua poltrona sem esperas."
    },
    {
      step: "03",
      title: "Chegue e Relaxe",
      description: "Nós cuidamos do resto. Sua bebida já estará lhe aguardando."
    }
  ],
  reviews: [
    {
      author: "Ricardo Mendes",
      text: "A melhor barbearia que já frequentei. O ambiente é incrível, o atendimento é pontual e o corte impecável.",
    },
    {
      author: "Felipe Costa",
      text: "Finalmente um lugar silencioso, sem aquela poluição sonora e visual. Você chega, relaxa e sai renovado.",
    },
    {
      author: "Alexandre Silva",
      text: "O serviço de Barba Terapia vale cada centavo. Atenção aos detalhes que eu não encontrei em nenhum outro lugar na cidade.",
    }
  ],
  contact: {
    address: "Rua das Lâminas, 123 – Centro, Tatuí/SP",
    schedule: [
      { days: "Segunda a Sexta", hours: "09:00 às 20:00" },
      { days: "Sábado", hours: "09:00 às 18:00" },
      { days: "Domingo e Feriados", hours: "Fechado" }
    ]
  },
  faq: [
    {
      question: "Preciso agendar antes de ir?",
      answer: "Sim, trabalhamos exclusivamente com horário marcado para garantir que seu atendimento inicie pontualmente e você não perca tempo esperando."
    },
    {
      question: "Qual o tempo de tolerância para atrasos?",
      answer: "Temos uma tolerância de 10 minutos. Como nossa agenda é estruturada para respeitar o tempo de cada cliente, atrasos maiores podem exigir reagendamento."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos PIX, cartões de crédito e débito (Visa, Mastercard, Elo) e dinheiro em espécie."
    },
    {
      question: "As bebidas são pagas à parte?",
      answer: "O seu primeiro café expresso ou cerveja long neck é cortesia da casa a cada atendimento."
    }
  ]
};
