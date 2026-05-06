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
        description: {
            en: "I built FastDish as a responsive ordering interface focused on fast reading, direct navigation, and a lightweight experience.",
            "pt-BR":
                "Desenvolvi o FastDish como uma interface responsiva de pedidos, com foco em leitura rápida, navegação direta e uma experiência leve.",
        },
        highlights: {
            en: [
                "I designed the ordering flow around quick scanning, simple navigation, and responsive behavior.",
                "I used React and Vite to keep the implementation lean and straightforward.",
                "I prioritized visual hierarchy and task-oriented flow instead of decorative complexity.",
                "It works as a clear example of my frontend execution and interface decision-making.",
            ],
            "pt-BR": [
                "Desenhei o fluxo de pedidos para facilitar leitura rápida, navegação simples e comportamento responsivo.",
                "Usei React e Vite para manter a implementação enxuta e direta.",
                "Priorizei hierarquia visual e fluxo orientado à tarefa em vez de complexidade decorativa.",
                "Ele funciona como um exemplo claro da minha execução em frontend e das decisões de interface que tomo.",
            ],
        },
        tech: ["React", "Vite", "JavaScript", "CSS"],
        github: "https://github.com/eikefrota/fastdish",
        live: "https://fastdish.vercel.app/",
        featured: true,
        year: "2025",
        image: "/images/projects/fastdish/fastdish.webp",
        status: {
            en: "Visit site",
            "pt-BR": "Visitar site",
        },
    },
    {
        slug: "frotas-gourmet",
        title: "Frota's Gourmet",
        role: {
            en: "Frontend Development",
            "pt-BR": "Desenvolvimento Frontend",
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
