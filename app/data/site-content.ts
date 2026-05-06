export type SocialLink = {
  name: string;
  url: string | null;
};

export type TechItem = {
  name: string;
  iconSrc: string;
  invertInDark?: boolean;
};

export type SiteLocale = "en" | "pt-BR";

type LocaleContent = {
  nav: {
    items: readonly { name: string; href: string }[];
    ctaLabel: string;
    themeToggleDark: string;
    themeToggleLight: string;
    themeTogglePending: string;
    languageToggle: string;
    menuToggle: string;
    menuClose: string;
    homeAriaLabel: string;
  };
  hero: {
    topNoteLine1: string;
    topNoteLine2: string;
    titleLine1: string;
    titleLine2: string;
    portraitLabel: string;
    portraitAlt: string;
    bodyLine1: string;
    bodyLine2: string;
    availabilityLine1: string;
    availabilityLine2: string;
    yearLabel: string;
    locationLine1: string;
    locationLine2: string;
    locationLine3: string;
    footerNote: string;
    stackLinks: readonly { label: string; href: string }[];
    availabilityLabel: string;
    exploreLabel: string;
  };
  marquee: {
    desktopTopLeft: string;
    desktopTopRight: string;
    desktopTopLabel: string;
    desktopTopItems: readonly string[];
    desktopBottomLeft: string;
    desktopBottomRight: string;
    desktopBottomLabel: string;
    desktopBottomItems: readonly string[];
    mobileTop: string;
    mobileBottom: string;
    mobileLabel: string;
    mobileItems: readonly string[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: readonly string[];
  };
  techStacks: readonly { label: string; items: readonly TechItem[] }[];
  skillsTicker: string;
  achievements: {
    label: string;
    title: string;
    description: string;
    items: readonly {
      icon: string;
      title: string;
      description: string;
      year: string;
      category: string;
    }[];
  };
  testimonials: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    note: string;
    ratingLabel: string;
    items: readonly {
      name: string;
      role: string;
      company: string;
      badge: string;
      content: string;
      rating: number;
    }[];
  };
  contact: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    socials: readonly SocialLink[];
    bodyText: string;
    cardPrompt: string;
    cardLine1: string;
    cardLine2: string;
    cardCopiedText: string;
    cardCopyText: string;
    emailPrompt: string;
    emailCopied: string;
    copyAddress: string;
  };
  floatingSocials: readonly SocialLink[];
  floatingSocialsUnavailableLabel: string;
  footer: {
    navigationLabel: string;
    nav: readonly { label: string; href: string }[];
    backToTopLabel: string;
    rights: string;
    note: string;
  };
  projectsHome: {
    sectionAriaLabel: string;
    mobileTitle: string;
    mobileDescription: string;
    desktopEyebrow: string;
    desktopTitleLine1: string;
    desktopTitleLine2: string;
    desktopDescription: string;
    viewAllLabel: string;
    scrubHint: string;
    progressLabel: string;
    projectCountLabel: string;
  };
  projectsPage: {
    pageAriaLabel: string;
    eyebrow: string;
    backHomeLabel: string;
    title: string;
    description: string;
    cardCta: string;
    featuredBadge: string;
  };
  projectDetail: {
    defaultLead: string;
    openImageLabel: string;
    caseStudyLabel: string;
    allProjectsLabel: string;
    homeLabel: string;
    viewLiveSiteLabel: string;
    unavailableInlineLabel: string;
    unavailableButtonLabel: string;
    viewSourceLabel: string;
    liveDemoLabel: string;
    highlightsLabel: string;
    highlightsTitle: string;
    heroScrollLabel: string;
    detailsSectionAriaLabel: string;
    meta: {
      year: string;
      role: string;
      techStack: string;
      status: string;
    };
  };
};

export const DEFAULT_SITE_LOCALE: SiteLocale = "en";

export const SITE_IDENTITY = {
  name: "Eike Frota",
  firstName: "Eike",
  lastName: "Frota",
  role: "Software Developer",
  locationShort: "Fortaleza, BR",
  locationLong: "Fortaleza, CE - Brazil",
  email: "eikefrotaa@hotmail.com",
  emailUser: "eikefrotaa",
  emailDomain: "@hotmail.com",
  linkedin: "https://www.linkedin.com/in/eikefrota/",
  githubProfile: "https://github.com/eikefrota",
  instagram: "https://www.instagram.com/eikefrotaa",
  whatsappNumber: "+55 85 99906-2339",
  whatsapp: "https://wa.me/5585999062339?text=Fala%20Eike,%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar.",
  siteUrl: "https://eikefrotadev.netlify.app",
} as const;

const SHARED_TECH_STACKS: readonly {
  label: string;
  items: readonly TechItem[];
}[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", iconSrc: "/images/frontend/react.svg" },
      {
        name: "Next.js",
        iconSrc: "/images/frontend/nextjs.svg",
        invertInDark: true,
      },
      { name: "React Native", iconSrc: "/images/frontend/react.svg" },
      { name: "JavaScript", iconSrc: "/images/frontend/javascript.svg" },
      { name: "TypeScript", iconSrc: "/images/frontend/typescript.svg" },
      { name: "Tailwind CSS", iconSrc: "/images/frontend/tailwind-css.svg" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", iconSrc: "/images/backend/nodejs.svg" },
      { name: "NestJS", iconSrc: "/images/backend/nestjs.svg" },
      { name: "Python", iconSrc: "/images/backend/python.svg" },
      {
        name: "Django",
        iconSrc: "/images/backend/django.svg",
        invertInDark: true,
      },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", iconSrc: "/images/database/postgresql.svg" },
      { name: "MySQL", iconSrc: "/images/database/mysql.svg" },
      { name: "MongoDB", iconSrc: "/images/database/mongodb.svg" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", iconSrc: "/images/tools/git.svg" },
      { name: "Docker", iconSrc: "/images/tools/docker.svg" },
      { name: "Jest", iconSrc: "/images/tools/jest.svg" },
      { name: "Selenium", iconSrc: "/images/tools/selenium.svg" },
      { name: "Swagger", iconSrc: "/images/tools/swagger.svg" },
      { name: "Expo", iconSrc: "/images/tools/expo.svg", invertInDark: true },
    ],
  },
] as const;

const sharedSocials = [
  { name: "GitHub", url: SITE_IDENTITY.githubProfile },
  { name: "LinkedIn", url: SITE_IDENTITY.linkedin },
  { name: "WhatsApp", url: SITE_IDENTITY.whatsapp },
  { name: "Instagram", url: SITE_IDENTITY.instagram },
] as const;

const sharedFloatingSocials = [
  ...sharedSocials,
  { name: "Email", url: `mailto:${SITE_IDENTITY.email}` },
] as const;

const sharedContactSocials = [
  { name: "WhatsApp", url: SITE_IDENTITY.whatsapp },
  { name: "Email", url: `mailto:${SITE_IDENTITY.email}` },
  { name: "LinkedIn", url: SITE_IDENTITY.linkedin },
  { name: "GitHub", url: SITE_IDENTITY.githubProfile },
  { name: "Instagram", url: SITE_IDENTITY.instagram },
] as const;

const siteContentByLocale: Record<SiteLocale, LocaleContent> = {
  en: {
    nav: {
      items: [
        { name: "ABOUT", href: "/#about" },
        { name: "PROJECTS", href: "/projects" },
        { name: "CONTACT", href: "/#contact" },
      ],
      ctaLabel: "LET'S TALK",
      themeToggleDark: "Switch to dark theme",
      themeToggleLight: "Switch to light theme",
      themeTogglePending: "Toggle color theme",
      languageToggle: "Translate site to Portuguese (Brazil)",
      menuToggle: "Toggle menu",
      menuClose: "Close menu",
      homeAriaLabel: "Go to home",
    },
    hero: {
      topNoteLine1: "",
      topNoteLine2: "",
      titleLine1: "Software",
      titleLine2: "Developer",
      portraitLabel: "EF / Portrait",
      portraitAlt: "Eike Frota portrait",
      bodyLine1: "I solve problems with technology.",
      bodyLine2: "Web systems, applications and automations.",
      availabilityLine1: "",
      availabilityLine2: "",
      yearLabel: "Portfolio",
      locationLine1: "Fortaleza, Brazil • Product and code",
      locationLine2: "",
      locationLine3: "",
      footerNote: "Built by Eike Frota",
      stackLinks: [
        { label: "React", href: "/projects" },
        { label: "Next.js", href: "/projects" },
        { label: "Node.js", href: "/#contact" },
      ],
      availabilityLabel: "Available for new projects",
      exploreLabel: "Selected work",
    },
    marquee: {
      desktopTopLeft: "Frontend",
      desktopTopRight: "Backend",
      desktopTopLabel: "I build",
      desktopTopItems: [
        "React / Next.js interfaces",
        "Node / Nest / Django services",
        "Responsive product flows",
        "API integration",
      ],
      desktopBottomLeft: "Interface",
      desktopBottomRight: "Systems",
      desktopBottomLabel: "I focus on",
      desktopBottomItems: [
        "Clarity",
        "Performance",
        "Bug fixing",
        "Continuous evolution",
      ],
      mobileTop: "Frontend",
      mobileBottom: "Backend",
      mobileLabel: "I work with",
      mobileItems: [
        "Interfaces with React and Next.js",
        "Backend systems and APIs",
        "Responsive interfaces",
        "Mobile-first thinking",
        "Product-oriented delivery",
      ],
    },
    about: {
      label: "About me",
      title: "About me",
      paragraphs: [
        "A software developer focused on solving real problems.",
        "In my day-to-day work, I handle both frontend and backend, building systems and improving products that are already in use through new features, integrations, and performance improvements.",
        "I completed the Systems Development technical program at Senac Ceara and I'm currently studying Computer Science at the University of Fortaleza.",
      ],
    },
    techStacks: SHARED_TECH_STACKS,
    skillsTicker:
      "React / Next.js / React Native / JavaScript / TypeScript / Tailwind CSS / Node.js / NestJS / Python / Django / PostgreSQL / MySQL / MongoDB / Git / Docker / Jest / Selenium / Swagger / Expo / ",
    achievements: {
      label: "Journey",
      title: "Experience & Growth",
      description:
        "The key moments of my journey, showing where I've already worked and how I continue to grow as a developer.",
      items: [
        {
          icon: "briefcase",
          title: "Full Stack Internship",
          description:
            "My first professional experience working with real production software, contributing to systems, websites, and applications in day-to-day delivery.",
          year: "2025",
          category: "Professional",
        },
        {
          icon: "graduation-cap",
          title: "Technical Education",
          description:
            "I completed the Systems Development technical program at Senac Ceará, with a practical focus on building systems and delivering projects.",
          year: "2025",
          category: "Education",
        },
        {
          icon: "code",
          title: "Computer Science",
          description:
            "Ongoing Computer Science degree at the University of Fortaleza, expanding my theoretical foundation and engineering perspective.",
          year: "2028",
          category: "Academic",
        },
        {
          icon: "sparkles",
          title: "Events",
          description:
            "I worked as an exhibitor at Feira do Conhecimento 2024 and Siará Tech Summit 2025, and also took part in the Geração Tech 2.0 project (FIEC), experiences that expanded my perspective and growth in the field.",
          year: "2024-2025",
          category: "Community",
        },
      ],
    },
    testimonials: {
      label: "Testimonials",
      titleLine1: "What People",
      titleLine2: "Say",
      note: "Feedback from teammates, leads, and clients who have worked with me across product, frontend, and delivery.",
      ratingLabel: "stars",
      items: [
        {
          name: "Mariana Costa",
          role: "Product Manager",
          company: "Product Manager • B2B Platform",
          badge: "MC",
          content:
            "Eike brings clarity very quickly. In a few days he understood the product constraints, proposed cleaner flows, and shipped improvements without creating rework for the team.",
          rating: 5,
        },
        {
          name: "Lucas Ribeiro",
          role: "Tech Lead",
          company: "Tech Lead • Internal Tools Squad",
          badge: "LR",
          content:
            "He is easy to collaborate with because he communicates tradeoffs early and keeps moving. Even when scope changed mid-sprint, his deliveries stayed organized and reliable.",
          rating: 5,
        },
        {
          name: "Ana Bezerra",
          role: "Client",
          company: "Client • Website Relaunch",
          badge: "AB",
          content:
            "What stood out most was how calmly he handled feedback. He translated business requests into practical decisions and the final experience felt more polished than we expected.",
          rating: 5,
        },
        {
          name: "Rafael Mendes",
          role: "Frontend Engineer",
          company: "Frontend Engineer • Shared Product Team",
          badge: "RM",
          content:
            "Working with Eike felt lightweight in the best way. He respected the existing codebase, improved the details that mattered, and helped unblock decisions instead of adding more discussion.",
          rating: 5,
        },
      ],
    },
    contact: {
      label: "Contact",
      titleLine1: "Have a Project",
      titleLine2: "or Idea?",
      description:
        "If you need someone to improve a product with clearer interfaces, stronger integrations, and consistent technical delivery, that's where I create the most value today.",
      socials: sharedContactSocials,
      bodyText:
        "I build systems, websites, and applications with a focus on quality and performance. If you want to start or improve a product, WhatsApp is the fastest way to reach me.",
      cardPrompt: "Fast replies on WhatsApp",
      cardLine1: "Start the",
      cardLine2: "conversation",
      cardCopiedText: "Number copied",
      cardCopyText: "Copy number",
      emailPrompt: "Drop me a line",
      emailCopied: "Email copied",
      copyAddress: "Copy address",
    },
    floatingSocials: sharedFloatingSocials,
    floatingSocialsUnavailableLabel: "unavailable",
    footer: {
      navigationLabel: "Navigation",
      nav: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#achievements" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
      ],
      backToTopLabel: "Back to Top",
      rights: "Software Developer",
      note: "Portfolio 2026",
    },
        projectsHome: {
            sectionAriaLabel: "Projects",
            mobileTitle: "Featured Work",
            mobileDescription:
                "Four public projects that show how I currently work across frontend, mobile-first flows, and product-oriented implementation.",
            desktopEyebrow: "Recent work",
            desktopTitleLine1: "Featured",
            desktopTitleLine2: "Projects",
            desktopDescription:
                "Some projects that show how I work in my day-to-day, from building interfaces to integrations and evolving systems.",
            viewAllLabel: "View all",
            scrubHint: "Scroll to explore - Click a project to open",
            progressLabel: "Project",
            projectCountLabel: "of",
        },
    projectsPage: {
      pageAriaLabel: "All projects",
      eyebrow: "Portfolio",
      backHomeLabel: "Back to home",
      title: "All Projects",
      description:
        "A curated list of the public projects I currently use to represent my work.",
      cardCta: "View project details",
      featuredBadge: "Featured",
    },
    projectDetail: {
      defaultLead: "Project overview",
      openImageLabel: "Open image",
      caseStudyLabel: "Case study",
      allProjectsLabel: "All projects",
      homeLabel: "Home",
      viewLiveSiteLabel: "View production site",
      unavailableInlineLabel: "Link unavailable",
      unavailableButtonLabel: "Link unavailable",
      viewSourceLabel: "View source",
      liveDemoLabel: "Visit site",
      highlightsLabel: "Highlights",
      highlightsTitle: "Scope & impact",
      heroScrollLabel: "Scroll",
      detailsSectionAriaLabel: "Project details",
      meta: {
        year: "Year",
        role: "Role",
        techStack: "Tech stack",
        status: "Status",
      },
    },
  },
  "pt-BR": {
    nav: {
      items: [
        { name: "SOBRE", href: "/#about" },
        { name: "PROJETOS", href: "/projects" },
        { name: "CONTATO", href: "/#contact" },
      ],
      ctaLabel: "VAMOS CONVERSAR",
      themeToggleDark: "Mudar para o tema escuro",
      themeToggleLight: "Mudar para o tema claro",
      themeTogglePending: "Alternar tema",
      languageToggle: "Traduzir site para inglês",
      menuToggle: "Abrir menu",
      menuClose: "Fechar menu",
      homeAriaLabel: "Ir para a página inicial",
    },
    hero: {
      topNoteLine1: "",
      topNoteLine2: "",
      titleLine1: "Desenvolvedor",
      titleLine2: "de Software",
      portraitLabel: "EF / Retrato",
      portraitAlt: "Retrato de Eike Frota",
      bodyLine1: "Resolvo problemas com tecnologia.",
      bodyLine2: "Sistemas web, aplicativos e automações.",
      availabilityLine1: "",
      availabilityLine2: "",
      yearLabel: "Portfólio",
      locationLine1: "Fortaleza, Brasil • Produto e código",
      locationLine2: "",
      locationLine3: "",
      footerNote: "Feito por Eike Frota",
      stackLinks: [
        { label: "React", href: "/projects" },
        { label: "Next.js", href: "/projects" },
        { label: "Node.js", href: "/#contact" },
      ],
      availabilityLabel: "Disponível para novos projetos",
      exploreLabel: "Projetos em destaque",
    },
    marquee: {
      desktopTopLeft: "Frontend",
      desktopTopRight: "Backend",
      desktopTopLabel: "Eu construo",
      desktopTopItems: [
        "Interfaces com React / Next.js",
        "Serviços com Node / Nest / Django",
        "Fluxos responsivos de produto",
        "Integração de APIs",
      ],
      desktopBottomLeft: "Interface",
      desktopBottomRight: "Sistemas",
      desktopBottomLabel: "Meu foco",
      desktopBottomItems: [
        "Clareza",
        "Performance",
        "Correção de bugs",
        "Evolução contínua",
      ],
      mobileTop: "Frontend",
      mobileBottom: "Backend",
      mobileLabel: "Eu trabalho com",
      mobileItems: [
        "Interfaces com React e Next.js",
        "Sistemas backend e APIs",
        "Interfaces responsivas",
        "Pensamento mobile-first",
        "Entrega orientada a produto",
      ],
    },
    about: {
      label: "Sobre mim",
      title: "Sobre mim",
      paragraphs: [
        "Um desenvolvedor de software focado em resolver problemas reais.",
        "No dia a dia, trabalho com frontend e backend, desenvolvendo sistemas e melhorando produtos que já estão em uso, seja com novas funcionalidades, integrações ou ajustes de performance.",
        "Sou formado no curso Técnico em Desenvolvimento de Sistemas pelo Senac Ceará e atualmente curso Ciência da Computação na Universidade de Fortaleza.",
      ],
    },
    techStacks: SHARED_TECH_STACKS,
    skillsTicker:
      "React / Next.js / React Native / JavaScript / TypeScript / Tailwind CSS / Node.js / NestJS / Python / Django / PostgreSQL / MySQL / MongoDB / Git / Docker / Jest / Selenium / Swagger / Expo / ",
    achievements: {
      label: "Trajetória",
      title: "Experiência & Evolução",
      description:
        "Os principais momentos da minha trajetória, mostrando onde já atuei e como venho evoluindo como desenvolvedor.",
      items: [
        {
          icon: "briefcase",
          title: "Estágio Full Stack",
          description:
            "Primeira experiência profissional atuando com softwares reais de produção, contribuindo com sistemas, sites e aplicações no dia a dia.",
          year: "2025",
          category: "Profissional",
        },
        {
          icon: "graduation-cap",
          title: "Formação Técnica",
          description:
            "Concluí o curso técnico em Desenvolvimento de Sistemas pelo Senac Ceará, com foco prático na construção de sistemas e entrega de projetos.",
          year: "2025",
          category: "Educação",
        },
        {
          icon: "code",
          title: "Ciência da Computação",
          description:
            "Formação em andamento em Ciência da Computação na Universidade de Fortaleza, ampliando minha base teórica e visão de engenharia.",
          year: "2028",
          category: "Acadêmico",
        },
        {
          icon: "sparkles",
          title: "Eventos",
          description:
            "Atuei como expositor na Feira do Conhecimento 2024 e no Siará Tech Summit 2025, além de participar do projeto Geração Tech 2.0 (FIEC), experiências que ampliaram minha visão e evolução na área.",
          year: "2024-2025",
          category: "Comunidade",
        },
      ],
    },
    testimonials: {
      label: "Depoimentos",
      titleLine1: "O que",
      titleLine2: "falam de mim",
      note: "Feedbacks de líderes, colegas e clientes que já trabalharam comigo em projetos, produtos e entregas reais.",
      ratingLabel: "estrelas",
      items: [
        {
          name: "Mariana Costa",
          role: "Product Manager",
          company: "Product Manager • Plataforma B2B",
          badge: "MC",
          content:
            "O Eike ganha contexto muito rápido. Em poucos dias entendeu as restrições do produto, sugeriu fluxos mais claros e entregou melhorias sem gerar retrabalho para o time.",
          rating: 5,
        },
        {
          name: "Lucas Ribeiro",
          role: "Tech Lead",
          company: "Tech Lead • Squad de ferramentas internas",
          badge: "LR",
          content:
            "É fácil trabalhar com ele porque a comunicação é objetiva e os trade-offs aparecem cedo. Mesmo com mudança de escopo no meio da sprint, as entregas continuaram organizadas e confiáveis.",
          rating: 5,
        },
        {
          name: "Ana Bezerra",
          role: "Cliente",
          company: "Cliente • Relançamento de site",
          badge: "AB",
          content:
            "O que mais me marcou foi a forma calma como ele conduziu os ajustes. Ele transformou pedidos de negócio em decisões práticas e a experiência final ficou mais refinada do que imaginávamos.",
          rating: 5,
        },
        {
          name: "Rafael Mendes",
          role: "Desenvolvedor Frontend",
          company: "Desenvolvedor Frontend • Projeto compartilhado",
          badge: "RM",
          content:
            "Trabalhar com o Eike foi leve no melhor sentido. Ele respeitou a base existente, melhorou os detalhes que realmente importavam e ajudou a destravar decisões sem aumentar o ruído.",
          rating: 5,
        },
      ],
    },
    contact: {
      label: "Contato",
      titleLine1: "Quer fazer",
      titleLine2: "um projeto?",
      description:
        "Se você precisa evoluir um produto com interfaces mais claras, integrações mais fortes e consistência técnica na entrega, esse é o tipo de contexto em que eu mais gero valor hoje.",
      socials: sharedContactSocials,
      bodyText:
        "Desenvolvo sistemas, sites e aplicacoes com foco em qualidade e performance. Se voce quer tirar um projeto do papel ou evoluir um produto, o caminho mais rapido e pelo WhatsApp.",
      cardPrompt: "Resposta rapida por aqui",
      cardLine1: "Falar no",
      cardLine2: "WhatsApp",
      cardCopiedText: "Numero copiado",
      cardCopyText: "Copiar numero",
      emailPrompt: "Me envie uma mensagem",
      emailCopied: "Email copiado",
      copyAddress: "Copiar endereço",
    },
    floatingSocials: sharedFloatingSocials,
    floatingSocialsUnavailableLabel: "indisponível",
    footer: {
      navigationLabel: "Navegação",
      nav: [
        { label: "Sobre", href: "#about" },
        { label: "Projetos", href: "#projects" },
        { label: "Trajetória", href: "#achievements" },
        { label: "Depoimentos", href: "#testimonials" },
        { label: "Contato", href: "#contact" },
      ],
      backToTopLabel: "Voltar ao topo",
      rights: "Desenvolvedor de Software",
      note: "Portfólio 2026",
    },
        projectsHome: {
            sectionAriaLabel: "Projetos",
            mobileTitle: "Projetos em Destaque",
            mobileDescription:
                "Quatro projetos públicos que mostram como eu trabalho hoje entre frontend, fluxos mobile-first e implementação orientada a produto.",
            desktopEyebrow: "Trabalhos recentes",
            desktopTitleLine1: "Projetos",
            desktopTitleLine2: "em Destaque",
            desktopDescription:
                "Alguns projetos que mostram como eu trabalho no dia a dia, desde a construção de interfaces até integrações e evolução de sistemas.",
            viewAllLabel: "Ver todos",
            scrubHint: "Role para explorar - Clique em um projeto para abrir",
            progressLabel: "Projeto",
            projectCountLabel: "de",
        },
    projectsPage: {
      pageAriaLabel: "Todos os projetos",
      eyebrow: "Portfólio",
      backHomeLabel: "Voltar para a home",
      title: "Todos os Projetos",
      description:
        "Uma lista curada dos projetos públicos que uso hoje para representar meu trabalho.",
      cardCta: "Ver detalhes do projeto",
      featuredBadge: "Destaque",
    },
    projectDetail: {
      defaultLead: "Visão geral do projeto",
      openImageLabel: "Abrir imagem",
      caseStudyLabel: "Estudo de caso",
      allProjectsLabel: "Todos os projetos",
      homeLabel: "Início",
      viewLiveSiteLabel: "Ver site em produção",
      unavailableInlineLabel: "Link indisponível",
      unavailableButtonLabel: "Link indisponível",
      viewSourceLabel: "Ver código",
      liveDemoLabel: "Visitar site",
      highlightsLabel: "Destaques",
      highlightsTitle: "Escopo & impacto",
      heroScrollLabel: "Role",
      detailsSectionAriaLabel: "Detalhes do projeto",
      meta: {
        year: "Ano",
        role: "Função",
        techStack: "Stack",
        status: "Status",
      },
    },
  },
};

export function getSiteContent(
  locale: SiteLocale = DEFAULT_SITE_LOCALE,
): LocaleContent {
  return (
    siteContentByLocale[locale] ?? siteContentByLocale[DEFAULT_SITE_LOCALE]
  );
}
