"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PointerEvent, ReactElement, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/data/projects";
import { useSiteLanguage } from "@/app/components/language-provider";
import ProjectPageEnter from "@/app/components/project-page-enter";
import { useHydrationSafeReducedMotion } from "@/app/hooks/use-hydration-safe-reduced-motion";

type ProjectDescriptionPageProps = {
    slug: string;
};

function splitDescription(
    description: string,
    fallbackLead: string,
): { lead: string; rest: string } {
    const trimmed = description.trim();
    const match = trimmed.match(/^(.+?[.!?])(\s+|$)/);
    if (match && match[1].length <= 160 && match[1].length >= 16) {
        return {
            lead: match[1].trim(),
            rest: trimmed.slice(match[0].length).trim(),
        };
    }
    return { lead: fallbackLead, rest: trimmed };
}

function MetaRow({ label, value }: { label: string; value: string }): ReactElement {
    return (
        <div className="border-b border-border py-4 first:pt-0 sm:py-5">
            <dt className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground sm:text-[10px]">
                {label}
            </dt>
            <dd className="mt-2 text-sm font-medium leading-snug text-foreground sm:text-base wrap-break-word">
                {value}
            </dd>
        </div>
    );
}

function ExternalInlineLink({
    href,
    children,
}: {
    href: string | null;
    children: ReactNode;
}): ReactElement {
    if (!href) {
        return (
            <span className="mt-5 inline-block border-b border-foreground/10 pb-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/50 sm:text-xs">
                {children}
            </span>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block border-b border-foreground/25 pb-0.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground sm:text-xs"
        >
            {children}
        </a>
    );
}

function ExternalButton({
    href,
    children,
    variant,
}: {
    href: string | null;
    children: ReactNode;
    variant: "secondary" | "primary";
}): ReactElement {
    const className =
        variant === "primary"
            ? "inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/85 sm:w-auto"
            : "inline-flex w-full items-center justify-center border border-border px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:border-foreground/35 hover:bg-muted hover:text-foreground sm:w-auto";

    if (!href) {
        return (
            <span className={`${className} cursor-default opacity-45`}>
                {children}
            </span>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </a>
    );
}

const HERO_AUTOPLAY_MS = 2750;
const HERO_SWIPE_THRESHOLD_PX = 48;

function ProjectHeroCarousel({
    images,
    projectTitle,
    activeIndex,
    onActiveIndexChange,
    previousLabel,
    nextLabel,
}: {
    images: readonly string[];
    projectTitle: string;
    activeIndex: number;
    onActiveIndexChange: (index: number) => void;
    previousLabel: string;
    nextLabel: string;
}): ReactElement {
    const prefersReducedMotion = useHydrationSafeReducedMotion();
    const [isPointerOver, setIsPointerOver] = useState(false);
    const pointerStartX = useRef<number | null>(null);
    const imageCount = images.length;
    const hasMultipleImages = imageCount > 1;

    const goToNext = useCallback(() => {
        if (!hasMultipleImages) {
            return;
        }
        onActiveIndexChange((activeIndex + 1) % imageCount);
    }, [activeIndex, hasMultipleImages, imageCount, onActiveIndexChange]);

    const goToPrevious = useCallback(() => {
        if (!hasMultipleImages) {
            return;
        }
        onActiveIndexChange((activeIndex - 1 + imageCount) % imageCount);
    }, [activeIndex, hasMultipleImages, imageCount, onActiveIndexChange]);

    useEffect(() => {
        if (!hasMultipleImages || prefersReducedMotion || isPointerOver) {
            return;
        }

        const intervalId = window.setInterval(goToNext, HERO_AUTOPLAY_MS);
        return () => window.clearInterval(intervalId);
    }, [goToNext, hasMultipleImages, isPointerOver, prefersReducedMotion]);

    function handlePointerDown(event: PointerEvent<HTMLDivElement>): void {
        if (!hasMultipleImages || event.pointerType === "mouse") {
            return;
        }
        pointerStartX.current = event.clientX;
    }

    function handlePointerUp(event: PointerEvent<HTMLDivElement>): void {
        if (pointerStartX.current === null) {
            return;
        }

        const deltaX = event.clientX - pointerStartX.current;
        pointerStartX.current = null;

        if (Math.abs(deltaX) < HERO_SWIPE_THRESHOLD_PX) {
            return;
        }

        if (deltaX < 0) {
            goToNext();
            return;
        }

        goToPrevious();
    }

    return (
        <div
            className="absolute inset-0 touch-pan-y overflow-hidden"
            onPointerEnter={(event) => {
                if (event.pointerType === "mouse") {
                    setIsPointerOver(true);
                }
            }}
            onPointerLeave={() => {
                setIsPointerOver(false);
                pointerStartX.current = null;
            }}
            onPointerCancel={() => {
                pointerStartX.current = null;
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
        >
            {images.map((image, imageIndex) => {
                const isActive = imageIndex === activeIndex;
                return (
                    <Image
                        key={image}
                        src={image}
                        alt=""
                        fill
                        priority={imageIndex === 0}
                        sizes="100vw"
                        className={`object-cover object-center transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                            isActive
                                ? "scale-100 opacity-100"
                                : "scale-[1.025] opacity-0"
                        }`}
                        aria-hidden={!isActive}
                    />
                );
            })}

            <div
                className="absolute inset-0 bg-linear-to-b from-black/55 via-black/15 to-black/55 sm:from-black/50 sm:via-black/10 sm:to-black/50"
                aria-hidden
            />

            {hasMultipleImages ? (
                <>
                    <button
                        type="button"
                        onClick={goToPrevious}
                        className="absolute left-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/85 backdrop-blur-md transition-all duration-300 hover:border-white/45 hover:bg-black/35 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6 sm:h-11 sm:w-11"
                        aria-label={previousLabel}
                    >
                        <ChevronLeft className="h-4 w-4" aria-hidden />
                    </button>
                    <button
                        type="button"
                        onClick={goToNext}
                        className="absolute right-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white/85 backdrop-blur-md transition-all duration-300 hover:border-white/45 hover:bg-black/35 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:h-11 sm:w-11"
                        aria-label={nextLabel}
                    >
                        <ChevronRight className="h-4 w-4" aria-hidden />
                    </button>
                    <div
                        className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-24"
                        aria-label={`${projectTitle} gallery position`}
                    >
                        {images.map((image, imageIndex) => (
                            <button
                                key={`${image}-dot`}
                                type="button"
                                onClick={() => onActiveIndexChange(imageIndex)}
                                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                                    imageIndex === activeIndex
                                        ? "w-8 bg-white/90"
                                        : "w-1.5 bg-white/40 hover:bg-white/70"
                                }`}
                                aria-label={`Show image ${imageIndex + 1}`}
                                aria-current={imageIndex === activeIndex}
                            />
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default function ProjectDescriptionPage({
    slug,
}: ProjectDescriptionPageProps): ReactElement {
    const { content, locale } = useSiteLanguage();
    const project = getProjectBySlug(slug, locale);

    if (!project) {
        notFound();
    }

    const { lead, rest } = project.overviewTitle
        ? { lead: project.overviewTitle, rest: project.description }
        : splitDescription(project.description, content.projectDetail.defaultLead);
    const techLine = project.tech.join(" | ");
    const heroImages = useMemo(
        () => (project.images.length > 0 ? project.images : [project.image]),
        [project.image, project.images],
    );
    const [activeHeroImageIndex, setActiveHeroImageIndex] = useState(0);
    const safeHeroImageIndex = Math.min(activeHeroImageIndex, Math.max(heroImages.length - 1, 0));
    const activeHeroImage = heroImages[safeHeroImageIndex] ?? heroImages[0] ?? project.image;
    const previousImageLabel = locale === "pt-BR" ? "Imagem anterior" : "Previous image";
    const nextImageLabel = locale === "pt-BR" ? "Próxima imagem" : "Next image";

    return (
        <main className="w-full overflow-x-hidden bg-background text-foreground">
            <ProjectPageEnter>
                <section className="relative isolate min-h-dvh w-full" aria-label={`${project.title} hero`}>
                    <div className="absolute inset-0">
                        <ProjectHeroCarousel
                            images={heroImages}
                            projectTitle={project.title}
                            activeIndex={safeHeroImageIndex}
                            onActiveIndexChange={setActiveHeroImageIndex}
                            previousLabel={previousImageLabel}
                            nextLabel={nextImageLabel}
                        />
                    </div>

                    <div className="relative z-10 flex min-h-dvh flex-col">
                        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 px-4 pb-4 pt-[calc(var(--app-header-h,72px)+max(0.75rem,env(safe-area-inset-top,0px)))] sm:px-6 sm:pt-[calc(var(--app-header-h,80px)+max(1rem,env(safe-area-inset-top,0px)))] md:px-10 lg:px-14">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                <Link
                                    href="/projects"
                                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/85 transition-colors hover:text-white sm:text-[11px]"
                                >
                                    {content.projectDetail.allProjectsLabel}
                                </Link>
                                <span className="text-white/35" aria-hidden>
                                    /
                                </span>
                                <Link
                                    href="/"
                                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/85 transition-colors hover:text-white sm:text-[11px]"
                                >
                                    {content.projectDetail.homeLabel}
                                </Link>
                            </div>
                            <a
                                href={activeHeroImage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/35 bg-black/20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm transition-colors hover:border-white/55 hover:bg-black/35 sm:text-[10px]"
                            >
                                {content.projectDetail.openImageLabel}
                            </a>
                        </div>

                        <div className="flex flex-1 flex-col items-center justify-center px-5 pb-28 pt-8 sm:px-8 sm:pb-32 md:px-12">
                            <h1 className="max-w-[min(100%,56rem)] text-center text-[clamp(1.75rem,5vw,4rem)] font-black uppercase leading-[0.95] tracking-tighter text-white drop-shadow-[0_2px_24px_rgb(0_0_0/0.35)] text-balance">
                                {project.title}
                            </h1>
                        </div>

                        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-8">
                            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/65 sm:text-[10px]">
                                {content.projectDetail.heroScrollLabel}
                            </span>
                            <span
                                className="h-8 w-px animate-pulse bg-linear-to-b from-white/0 via-white/70 to-white/0 sm:h-10"
                                aria-hidden
                            />
                        </div>
                    </div>
                </section>

                <section className="border-t border-border bg-background" aria-label={content.projectDetail.detailsSectionAriaLabel}>
                    <div className="mx-auto max-w-[1920px] px-5 py-14 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-24">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
                            <div className="lg:col-span-5 xl:col-span-4">
                                <p className="text-2xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-3xl md:text-4xl wrap-break-word">
                                    {project.title}
                                </p>
                                <ExternalInlineLink href={project.live}>
                                    {project.live
                                        ? content.projectDetail.viewLiveSiteLabel
                                        : content.projectDetail.unavailableInlineLabel}
                                </ExternalInlineLink>

                                <dl className="mt-10 sm:mt-12">
                                    <MetaRow label={content.projectDetail.meta.year} value={project.year} />
                                    <MetaRow label={content.projectDetail.meta.role} value={project.role} />
                                    <MetaRow label={content.projectDetail.meta.techStack} value={techLine || "-"} />
                                    <MetaRow label={content.projectDetail.meta.status} value={project.status} />
                                </dl>

                                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                                    <ExternalButton href={project.github} variant="secondary">
                                        {project.github
                                            ? content.projectDetail.viewSourceLabel
                                            : content.projectDetail.unavailableButtonLabel}
                                    </ExternalButton>
                                    <ExternalButton href={project.live} variant="primary">
                                        {project.live
                                            ? content.projectDetail.liveDemoLabel
                                            : content.projectDetail.unavailableButtonLabel}
                                    </ExternalButton>
                                </div>
                            </div>

                            <div className="min-w-0 lg:col-span-7 xl:col-span-8">
                                <h2 className="text-[clamp(1.5rem,3.2vw,2.75rem)] font-black uppercase leading-[1.05] tracking-tight text-foreground text-balance">
                                    {lead}
                                </h2>
                                <div className="mt-6 h-px w-full bg-border sm:mt-8" aria-hidden />
                                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg sm:leading-relaxed">
                                    {rest ? <p className="wrap-break-word">{rest}</p> : null}
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-border pt-14 sm:mt-20 sm:gap-8 sm:pt-16 md:mt-24 md:pt-20 lg:grid-cols-12 lg:gap-12">
                            <div className="lg:col-span-5 xl:col-span-4">
                                <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:text-[11px]">
                                    {content.projectDetail.highlightsLabel}
                                </h2>
                                <p className="mt-4 text-xl font-black uppercase leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl wrap-break-word">
                                    {content.projectDetail.highlightsTitle}
                                </p>
                            </div>
                            <div className="min-w-0 lg:col-span-7 xl:col-span-8">
                                <ul className="space-y-4 text-sm leading-relaxed text-foreground/80 sm:text-base md:space-y-5">
                                    {project.highlights.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/30" aria-hidden />
                                            <span className="wrap-break-word">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </ProjectPageEnter>
        </main>
    );
}
