import { DEFAULT_SITE_LOCALE, type SiteLocale } from "./site-content";

export type Project = {
    slug: string;
    title: string;
    role: string;
    overviewTitle?: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string | null;
    live: string | null;
    featured: boolean;
    year: string;
    image: string;
    images: readonly string[];
    status: string;
};

type LocalizedText = Record<SiteLocale, string>;

type ProjectDefinition = {
    slug: string;
    title: string;
    role: LocalizedText;
    overviewTitle?: LocalizedText;
    description: LocalizedText;
    highlights: Record<SiteLocale, readonly string[]>;
    tech: readonly string[];
    github: string | null;
    live: string | null;
    featured: boolean;
    year: string;
    image: string;
    images?: readonly string[];
    status: LocalizedText;
};

const projectDefinitions: readonly ProjectDefinition[] = [
    {
        slug: "ef-sistemas",
        title: "EF Sistemas",
        role: {
            en: "Full Stack Development",
            "pt-BR": "Desenvolvimento Full Stack",
        },
        overviewTitle: {
            en: "Project overview",
            "pt-BR": "Visão geral do projeto",
        },
        description: {
            en: "EF Sistemas is a multi-tenant SaaS platform for Occupational Health and Safety (SST) management, built for EF Consultoria and the companies it serves. I develop and maintain it end to end, from tenant isolation and role-based access to risk management, service orders, and automated document generation, in an active production environment.",
            "pt-BR":
                "O EF Sistemas é uma plataforma SaaS multi-tenant para gestão de Saúde e Segurança do Trabalho (SST), construída para a EF Consultoria e as empresas que ela atende. Desenvolvo e mantenho o sistema de ponta a ponta, do isolamento entre clientes e controle de acesso por perfil até a gestão de riscos, ordens de serviço e geração automatizada de documentos, em ambiente de produção ativo.",
        },
        highlights: {
            en: [
                "I develop and maintain a multi-tenant architecture where each client company operates in its own isolated environment, with role-based access for administrators, technicians, physicians, and viewers.",
                "I built the PGR (Risk Management Program) module: risk inventory across the 6 categories required by Brazil's NR-1 regulation, a probability x severity matrix, and automatic action plans for critical risks.",
                "I implemented per-role Service Orders that are issued individually to each worker as a frozen copy of the role template, so later template revisions never change what a worker already received.",
                "I built automated multi-section PDF generation for technical documents and an administrative panel with operational indicators and dashboards.",
                "The platform runs on Laravel, Vue.js 3, Inertia.js, TypeScript, and Tailwind CSS, deployed on a dedicated server with automatic deployment and close to 900 automated tests covering backend, frontend, and end-to-end flows.",
            ],
            "pt-BR": [
                "Desenvolvo e mantenho uma arquitetura multi-tenant em que cada empresa-cliente opera em seu próprio ambiente isolado, com controle de acesso baseado em perfis de administrador, técnico, médico e visualizador.",
                "Construí o módulo de PGR (Programa de Gerenciamento de Riscos): inventário de riscos cobrindo os 6 grupos exigidos pela NR-1, matriz de probabilidade x severidade e plano de ação automático para riscos críticos.",
                "Implementei as Ordens de Serviço por cargo, emitidas individualmente para cada trabalhador como uma cópia congelada do template do cargo, de forma que revisões futuras no template não alterem o que o trabalhador já recebeu.",
                "Construí a geração automatizada de documentos técnicos em PDF com múltiplas seções e um painel administrativo com indicadores e dashboards operacionais.",
                "A plataforma roda em Laravel, Vue.js 3, Inertia.js, TypeScript e Tailwind CSS, com deploy automático em servidor próprio e cerca de 900 testes automatizados cobrindo backend, frontend e fluxos ponta a ponta.",
            ],
        },
        tech: ["Laravel", "Vue.js 3", "Inertia.js", "TypeScript", "Tailwind CSS"],
        github: null,
        live: "https://efsistemas.cloud",
        featured: true,
        year: "2026",
        image: "/images/projects/efsistemas/efsistemas-mockup-01.webp",
        images: [
            "/images/projects/efsistemas/efsistemas-mockup-01.webp",
            "/images/projects/efsistemas/efsistemas-mockup-02.webp",
        ],
        status: {
            en: "In production",
            "pt-BR": "Em produção",
        },
    },
    {
        slug: "ef-consultoria",
        title: "EF Consultoria",
        role: {
            en: "Full Stack Development",
            "pt-BR": "Desenvolvimento Full Stack",
        },
        overviewTitle: {
            en: "Project overview",
            "pt-BR": "Visão geral do projeto",
        },
        description: {
            en: "I built the institutional site for EF Consultoria, a workplace safety engineering and legal consultancy with over 18 years in the market. It runs on the same Laravel/Inertia/Vue platform as the EF Sistemas product, served on its own domain, and translates the consultancy's technical credibility into a dark, gold-accented visual identity.",
            "pt-BR":
                "Desenvolvi o site institucional da EF Consultoria, uma consultoria de engenharia de segurança do trabalho e assessoria jurídica com mais de 18 anos de atuação. O site roda na mesma plataforma Laravel/Inertia/Vue do EF Sistemas, servido em domínio próprio, e traduz a credibilidade técnica da consultoria numa identidade visual escura com detalhes dourados.",
        },
        highlights: {
            en: [
                "I built the full landing page inside the existing Laravel/Inertia/Vue codebase, served on its own custom domain through the platform's multi-domain routing.",
                "I structured the page around credibility signals — years of activity, reference clients, delivery rate — right above the fold, before any service description.",
                "I implemented sections for services, team, client portfolio, and an NR fine-risk calculator used as a lead-generation tool.",
                "I built a responsive interface consistent across desktop and mobile, reusing the design system shared with the EF Sistemas product.",
            ],
            "pt-BR": [
                "Construí toda a landing page dentro do código já existente da plataforma Laravel/Inertia/Vue, servida em domínio próprio através do roteamento multi-domínio da plataforma.",
                "Estruturei a página em torno de sinais de credibilidade — anos de atuação, clientes de referência, taxa de entrega — logo acima da dobra, antes de qualquer descrição de serviço.",
                "Implementei as seções de serviços, equipe, portfólio de clientes e uma calculadora de risco de multa por NR usada como ferramenta de captação de leads.",
                "Desenvolvi uma interface responsiva e consistente entre desktop e mobile, reaproveitando o design system compartilhado com o produto EF Sistemas.",
            ],
        },
        tech: ["Laravel", "Vue.js 3", "Inertia.js", "Tailwind CSS"],
        github: null,
        live: "https://emiliofrotaconsultoria.com.br",
        featured: true,
        year: "2026",
        image: "/images/projects/efconsultoria/efconsultoria-mockup-01.webp",
        images: [
            "/images/projects/efconsultoria/efconsultoria-mockup-01.webp",
            "/images/projects/efconsultoria/efconsultoria-mockup-02.webp",
        ],
        status: {
            en: "Visit site",
            "pt-BR": "Visitar site",
        },
    },
    {
        slug: "ef-advocacia",
        title: "EF Advocacia",
        role: {
            en: "Full Stack Development",
            "pt-BR": "Desenvolvimento Full Stack",
        },
        overviewTitle: {
            en: "Project overview",
            "pt-BR": "Visão geral do projeto",
        },
        description: {
            en: "I built the institutional site for Emílio Frota Advocacia, a labor and business law practice with 15 years of experience. It shares the same Laravel/Inertia/Vue platform as EF Consultoria and EF Sistemas, with its own navy-and-gold identity to set the legal practice apart from the engineering consultancy.",
            "pt-BR":
                "Desenvolvi o site institucional da Emílio Frota Advocacia, um escritório de advocacia trabalhista e empresarial com 15 anos de experiência. Ele roda na mesma plataforma Laravel/Inertia/Vue da EF Consultoria e do EF Sistemas, com identidade própria em azul-marinho e dourado, para diferenciar o escritório de advocacia da consultoria de engenharia.",
        },
        highlights: {
            en: [
                "I built a second institutional site on the same shared platform, with a distinct navy-and-gold identity to separate the law practice from the engineering consultancy's brand.",
                "I structured the hero around the practice's specialty (labor law) and experience, with direct calls to action to book a consultation.",
                "I set up its own custom domain on the platform's multi-domain routing, alongside EF Consultoria and EF Sistemas.",
                "I kept the same component system and interaction patterns from EF Consultoria, adapting only typography and color to fit a law firm's tone.",
            ],
            "pt-BR": [
                "Construí um segundo site institucional na mesma plataforma compartilhada, com identidade própria em azul-marinho e dourado para separar o escritório de advocacia da marca da consultoria de engenharia.",
                "Estruturei a hero em torno da especialidade do escritório (direito trabalhista) e da experiência acumulada, com chamadas diretas para agendar uma consulta.",
                "Configurei um domínio próprio dentro do roteamento multi-domínio da plataforma, ao lado da EF Consultoria e do EF Sistemas.",
                "Mantive o mesmo sistema de componentes e padrões de interação da EF Consultoria, ajustando apenas tipografia e cor para o tom de um escritório de advocacia.",
            ],
        },
        tech: ["Laravel", "Vue.js 3", "Inertia.js", "Tailwind CSS"],
        github: null,
        live: "https://emiliofrotaadvocacia.com.br",
        featured: true,
        year: "2026",
        image: "/images/projects/efadvocacia/efadvocacia-mockup-01.webp",
        images: [
            "/images/projects/efadvocacia/efadvocacia-mockup-01.webp",
            "/images/projects/efadvocacia/efadvocacia-mockup-02.webp",
        ],
        status: {
            en: "Visit site",
            "pt-BR": "Visitar site",
        },
    },
    {
        slug: "shapeon",
        title: "ShapeOn",
        role: {
            en: "Frontend Development",
            "pt-BR": "Desenvolvimento Frontend",
        },
        overviewTitle: {
            en: "Project overview",
            "pt-BR": "Visão geral do projeto",
        },
        description: {
            en: "I developed a modern and strategic landing page for ShapeOn, a supplement store focused on fitness and high-performance audiences. The project was created to deliver strong visual impact, strengthen the brand's digital presence, and drive direct customer conversion through WhatsApp. I handled the full process myself, from the visual concept and experience definition to the complete interface implementation.",
            "pt-BR":
                "Desenvolvi uma landing page moderna e estratégica para a ShapeOn, uma loja de suplementos voltada ao público fitness e de alta performance. O projeto foi criado com foco em impacto visual, fortalecimento da presença digital da marca e conversão direta de clientes através do WhatsApp. Todo o processo foi desenvolvido por mim, desde a concepção visual e definição da experiência até a implementação completa da interface.",
        },
        highlights: {
            en: [
                "I created the full visual direction for the landing page, developing a modern identity aligned with the fitness market, focused on performance, contrast, and strong visual presence.",
                "I planned and developed the full page structure around user experience, smooth navigation, and conversion, highlighting products, benefits, and strategic calls to action.",
                "I developed a responsive interface optimized for different devices, ensuring a consistent experience on both desktop and mobile.",
                "I implemented the full application using React, Vite, TypeScript, and Tailwind CSS, prioritizing performance, code organization, and interface scalability.",
                "I worked on visual effects, composition, typographic hierarchy, and graphic elements to communicate a more premium and professional position for the brand.",
                "I led the entire project independently, from the design and visual concept to the complete development of the landing page.",
            ],
            "pt-BR": [
                "Criei toda a direção visual da landing page, desenvolvendo uma identidade moderna e alinhada ao mercado fitness, com foco em performance, contraste e presença visual forte.",
                "Planejei e desenvolvi toda a estrutura da página pensando em experiência do usuário, navegação fluida e conversão, destacando produtos, benefícios e chamadas estratégicas para ação.",
                "Desenvolvi uma interface responsiva e otimizada para diferentes dispositivos, garantindo uma experiência consistente tanto no desktop quanto no mobile.",
                "Implementei toda a aplicação utilizando React, Vite, TypeScript e Tailwind CSS, priorizando performance, organização de código e escalabilidade da interface.",
                "Trabalhei efeitos visuais, composição, hierarquia tipográfica e elementos gráficos para transmitir um posicionamento mais premium e profissional para a marca.",
                "Conduzi todo o projeto de forma individual, atuando desde a criação do design e conceito visual até o desenvolvimento completo da landing page.",
            ],
        },
        tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/eikefrota/shapeon",
        live: "https://shapeon.vercel.app/",
        featured: true,
        year: "2026",
        image: "/images/projects/shapeon/mockup-shapeon-01.png",
        images: [
            "/images/projects/shapeon/mockup-shapeon-01.png",
            "/images/projects/shapeon/mockup-shapeon-02.png",
            "/images/projects/shapeon/mockup-shapeon-03.png",
        ],
        status: {
            en: "Public repository",
            "pt-BR": "Repositório público",
        },
    },
    {
        slug: "quizdev",
        title: "QuizDev",
        role: {
            en: "Full Stack Development",
            "pt-BR": "Desenvolvimento Full Stack",
        },
        overviewTitle: {
            en: "Project overview",
            "pt-BR": "Visão geral do projeto",
        },
        description: {
            en: "I built QuizDev as a mobile-first full stack experience that brings together React Native, backend logic, and persisted data in a compact product flow.",
            "pt-BR":
                "Desenvolvi o QuizDev como uma experiência full stack mobile-first, unindo React Native, lógica de backend e persistência de dados em um fluxo de produto enxuto.",
        },
        highlights: {
            en: [
                "I built the mobile-first interface with React Native and Expo.",
                "I connected the quiz flow to backend logic and persisted data with PostgreSQL.",
                "I structured navigation, question progression, and feedback to keep the experience clear and direct.",
                "It shows how I work beyond browser-based interfaces without losing product clarity.",
            ],
            "pt-BR": [
                "Desenvolvi a interface mobile-first com React Native e Expo.",
                "Conectei o fluxo do quiz à lógica de backend e à persistência de dados com PostgreSQL.",
                "Estruturei navegação, progressão das perguntas e feedback para manter a experiência clara e direta.",
                "O projeto mostra como trabalho além da web sem perder clareza de produto.",
            ],
        },
        tech: ["React Native", "Node.js", "PostgreSQL", "Expo"],
        github: "https://github.com/eikefrota/quiz-dev",
        live: null,
        featured: true,
        year: "2025",
        image: "/images/projects/quizdev/quizdev.webp",
        status: {
            en: "Public repository",
            "pt-BR": "Repositório público",
        },
    },
    {
        slug: "fastdish",
        title: "FastDish",
        role: {
            en: "Frontend Development",
            "pt-BR": "Desenvolvimento Frontend",
        },
        overviewTitle: {
            en: "Project overview",
            "pt-BR": "Visão geral do projeto",
        },
        description: {
            en: "I developed a modern and conversion-focused landing page for FastDish, a fictional fast food brand created to present a fast, practical, and visually impactful ordering experience. The project was designed to communicate speed, appetite appeal, and direct purchase intent, combining a strong visual identity with a responsive interface optimized for desktop and mobile. I handled the full process myself, from the visual concept and experience planning to the complete frontend implementation.",
            "pt-BR":
                "Desenvolvi uma landing page moderna e focada em conversão para o FastDish, uma marca fictícia de fast food criada para apresentar uma experiência de pedido rápida, prática e visualmente impactante. O projeto foi pensado para comunicar velocidade, apelo gastronômico e intenção direta de compra, combinando uma identidade visual forte com uma interface responsiva otimizada para desktop e mobile. Todo o processo foi desenvolvido por mim, desde a concepção visual e planejamento da experiência até a implementação completa do frontend.",
        },
        highlights: {
            en: [
                "I created the full visual direction for the landing page, developing a bold identity with warm colors, high contrast, and strong food-focused presentation.",
                "I planned the page structure around fast decision-making, highlighting the product, delivery benefits, social proof, and direct calls to action.",
                "I developed a responsive interface optimized for different devices, ensuring the visual composition worked consistently on both desktop and mobile.",
                "I implemented the application using React, Vite, JavaScript, and CSS, keeping the structure lightweight, organized, and easy to maintain.",
                "I worked on visual hierarchy, layout rhythm, interactive elements, and product presentation to make the ordering experience feel immediate and engaging.",
                "I led the entire project independently, from the initial concept and interface design to the final development and deployment of the landing page.",
            ],
            "pt-BR": [
                "Criei toda a direção visual da landing page, desenvolvendo uma identidade marcante com cores quentes, alto contraste e forte apresentação gastronômica.",
                "Planejei a estrutura da página pensando em decisão rápida, destacando o produto, benefícios de entrega, prova social e chamadas diretas para ação.",
                "Desenvolvi uma interface responsiva e otimizada para diferentes dispositivos, garantindo uma composição visual consistente tanto no desktop quanto no mobile.",
                "Implementei a aplicação utilizando React, Vite, JavaScript e CSS, mantendo uma estrutura leve, organizada e fácil de manter.",
                "Trabalhei hierarquia visual, ritmo de layout, elementos interativos e apresentação do produto para tornar a experiência de pedido mais imediata e envolvente.",
                "Conduzi todo o projeto de forma individual, desde o conceito inicial e design da interface até o desenvolvimento final e deploy da landing page.",
            ],
        },
        tech: ["React", "Vite", "JavaScript", "CSS"],
        github: "https://github.com/eikefrota/fastdish",
        live: "https://fastdish.vercel.app/",
        featured: true,
        year: "2025",
        image: "/images/projects/fastdish/fastdish-mockup-01.png",
        images: [
            "/images/projects/fastdish/fastdish-mockup-01.png",
            "/images/projects/fastdish/fastdish-mockup-02.png",
            "/images/projects/fastdish/fastdish-mockup-03.png",
        ],
        status: {
            en: "Public repository",
            "pt-BR": "Repositório público",
        },
    },
    {
        slug: "frotas-gourmet",
        title: "Frota's Gourmet",
        role: {
            en: "Frontend Development",
            "pt-BR": "Desenvolvimento Frontend",
        },
        overviewTitle: {
            en: "Project overview",
            "pt-BR": "Visão geral do projeto",
        },
        description: {
            en: "I designed Frota's Gourmet as a digital menu experience centered on mobile clarity, direct conversion, and organized information.",
            "pt-BR":
                "Desenhei o Frota's Gourmet como uma experiência de cardápio digital pensada para clareza no mobile, conversão direta e informação bem organizada.",
        },
        highlights: {
            en: [
                "I created the menu around fast reading, mobile clarity, and direct conversion.",
                "I organized categories and pricing to work well on smaller screens.",
                "I used a lean stack to ship a clear and lightweight experience.",
                "It is a practical example of how I organize interfaces with commercial intent.",
            ],
            "pt-BR": [
                "Criei o cardápio com foco em leitura rápida, clareza no mobile e conversão direta.",
                "Organizei categorias e preços para funcionar bem em telas menores.",
                "Usei uma stack enxuta para entregar uma experiência clara e leve.",
                "Ele é um exemplo prático de como organizo interfaces com intenção comercial.",
            ],
        },
        tech: ["HTML5", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/eikefrota/frota-gourmet",
        live: "https://frotagourmet.netlify.app",
        featured: true,
        year: "2024",
        image: "/images/projects/frotasgourmet/frotas-gourmet.webp",
        status: {
            en: "Visit site",
            "pt-BR": "Visitar site",
        },
    },
];

function toProject(definition: ProjectDefinition, locale: SiteLocale): Project {
    return {
        slug: definition.slug,
        title: definition.title,
        role: definition.role[locale],
        overviewTitle: definition.overviewTitle?.[locale],
        description: definition.description[locale],
        highlights: definition.highlights[locale],
        tech: definition.tech,
        github: definition.github,
        live: definition.live,
        featured: definition.featured,
        year: definition.year,
        image: definition.image,
        images: definition.images ?? [definition.image],
        status: definition.status[locale],
    };
}

export function getProjects(locale: SiteLocale = DEFAULT_SITE_LOCALE): readonly Project[] {
    return projectDefinitions.map((definition) => toProject(definition, locale));
}

export function getProjectBySlug(
    slug: string,
    locale: SiteLocale = DEFAULT_SITE_LOCALE,
): Project | null {
    const definition = projectDefinitions.find((project) => project.slug === slug);
    return definition ? toProject(definition, locale) : null;
}

export const projects = getProjects();
