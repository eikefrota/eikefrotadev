import { DEFAULT_SITE_LOCALE, type SiteLocale } from "./site-content";

export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string | null;
    live: string | null;
    featured: boolean;
    year: string;
    image: string;
    status: string;
};

type LocalizedText = Record<SiteLocale, string>;

type ProjectDefinition = {
    slug: string;
    title: string;
    role: LocalizedText;
    description: LocalizedText;
    highlights: Record<SiteLocale, readonly string[]>;
    tech: readonly string[];
    github: string | null;
    live: string | null;
    featured: boolean;
    year: string;
    image: string;
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
        description: {
            en: "I built ShapeOn as a high-impact landing page for a supplement store, focused on strong visual positioning, fast product discovery, and direct WhatsApp conversion.",
            "pt-BR":
                "Desenvolvi o ShapeOn como uma landing page de impacto para uma loja de suplementos, com foco em posicionamento visual forte, descoberta rápida de produtos e conversão direta pelo WhatsApp.",
        },
        highlights: {
            en: [
                "I created a dark, performance-oriented visual direction aligned with the supplement and fitness market.",
                "I structured the page around a persuasive hero, product categories, trust points, testimonials, and contact flow.",
                "I connected product and CTA actions to WhatsApp to reduce friction between interest and purchase intent.",
                "I used React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide icons, and Motion for a polished responsive experience.",
            ],
            "pt-BR": [
                "Criei uma direção visual escura e orientada a performance, alinhada ao mercado fitness e de suplementos.",
                "Estruturei a página com hero persuasivo, categorias de produto, pontos de confiança, depoimentos e fluxo de contato.",
                "Conectei produtos e chamadas de ação ao WhatsApp para reduzir o atrito entre interesse e intenção de compra.",
                "Usei React, Vite, TypeScript, Tailwind CSS, shadcn/ui, ícones Lucide e Motion para entregar uma experiência responsiva mais refinada.",
            ],
        },
        tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/eikefrota/shapeon",
        live: null,
        featured: true,
        year: "2026",
        image: "/images/projects/shapeon/mockup-shapeon-01.png",
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
            en: "Live demo",
            "pt-BR": "Demo online",
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
            en: "Live demo",
            "pt-BR": "Demo online",
        },
    },
];

function toProject(definition: ProjectDefinition, locale: SiteLocale): Project {
    return {
        slug: definition.slug,
        title: definition.title,
        role: definition.role[locale],
        description: definition.description[locale],
        highlights: definition.highlights[locale],
        tech: definition.tech,
        github: definition.github,
        live: definition.live,
        featured: definition.featured,
        year: definition.year,
        image: definition.image,
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
