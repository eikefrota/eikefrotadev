"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSiteLanguage } from "@/app/components/language-provider";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Marquee() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackTopRef = useRef<HTMLDivElement>(null);
    const trackBottomRef = useRef<HTMLDivElement>(null);
    const mobileRow1Ref = useRef<HTMLDivElement>(null);
    const mobileRow2Ref = useRef<HTMLDivElement>(null);
    const { content } = useSiteLanguage();

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(max-width: 767px)", () => {
                const row1 = mobileRow1Ref.current;
                const row2 = mobileRow2Ref.current;
                const trigger = sectionRef.current;
                if (row1 || row2) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true,
                            fastScrollEnd: true,
                            invalidateOnRefresh: true,
                        },
                    });
                    if (row1) tl.to(row1, { x: -120, ease: "none" }, 0);
                    if (row2) tl.to(row2, { x: 120, ease: "none" }, 0);
                }

                return () => {};
            });

            mm.add("(min-width: 768px)", () => {
                const trackTop = trackTopRef.current;
                const trackBottom = trackBottomRef.current;
                if (!trackTop || !trackBottom) return () => {};

                const calculateValues = (trackEl: HTMLDivElement) => {
                    const viewport = window.innerWidth;
                    const maxTravel = Math.max(trackEl.scrollWidth - viewport, 0);
                    const offscreenRight = Math.min(viewport * 0.9, 900);
                    const offscreenLeft = -Math.min(maxTravel + viewport * 0.2, maxTravel + 900);
                    const endLeft = -Math.min(maxTravel, viewport * 0.95);
                    const endRight = Math.min(viewport * 0.9, 900);

                    return { offscreenRight, offscreenLeft, endLeft, endRight };
                };

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.16,
                        fastScrollEnd: true,
                        invalidateOnRefresh: true,
                    },
                });

                tl.fromTo(
                    trackTop,
                    { x: () => calculateValues(trackTop).offscreenRight },
                    { x: () => calculateValues(trackTop).endLeft, ease: "none" },
                    0,
                );
                tl.fromTo(
                    trackBottom,
                    { x: () => calculateValues(trackBottom).offscreenLeft },
                    { x: () => calculateValues(trackBottom).endRight, ease: "none" },
                    0,
                );

                return () => {
                    tl.scrollTrigger?.kill();
                };
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24">
            <div className="hidden md:flex items-center overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="w-full flex flex-col justify-center gap-12 lg:gap-14">
                    <div ref={trackTopRef} className="flex items-center whitespace-nowrap will-change-transform">
                        <span className="text-[clamp(6rem,12vw,14rem)] font-black text-foreground leading-[0.9] tracking-tighter select-none">
                            {content.marquee.desktopTopLeft}
                        </span>
                        <span className="text-[clamp(3rem,5vw,5rem)] text-foreground/20 mx-14 select-none font-light italic">
                            &amp;
                        </span>
                        <span className="text-[clamp(6rem,12vw,14rem)] font-black text-foreground leading-[0.9] tracking-tighter select-none">
                            {content.marquee.desktopTopRight}
                        </span>

                        <div className="ml-24 pr-32 flex flex-col gap-2">
                            <span className="text-base text-foreground/45 font-mono uppercase tracking-[0.2em]">
                                {content.marquee.desktopTopLabel}
                            </span>
                            <div className="h-px w-8 bg-foreground/20 mb-2" />
                            {content.marquee.desktopTopItems.map((item) => (
                                <span key={item} className="text-xl text-foreground/70 font-bold uppercase tracking-tight">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div ref={trackBottomRef} className="flex items-center whitespace-nowrap will-change-transform">
                        <span className="text-[clamp(6rem,12vw,14rem)] font-black text-foreground leading-[0.9] tracking-tighter select-none">
                            {content.marquee.desktopBottomLeft}
                        </span>
                        <span className="text-[clamp(3rem,5vw,5rem)] text-foreground/20 mx-14 select-none font-light italic">
                            &amp;
                        </span>
                        <span className="text-[clamp(6rem,12vw,14rem)] font-black text-foreground leading-[0.9] tracking-tighter select-none">
                            {content.marquee.desktopBottomRight}
                        </span>

                        <div className="ml-24 pr-32 flex flex-col gap-2 text-right">
                            <span className="text-base text-foreground/45 font-mono uppercase tracking-[0.2em]">
                                {content.marquee.desktopBottomLabel}
                            </span>
                            <div className="ml-auto h-px w-8 bg-foreground/20 mb-2" />
                            {content.marquee.desktopBottomItems.map((item) => (
                                <span key={item} className="text-xl text-foreground/70 font-bold uppercase tracking-tight">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:hidden px-6 flex flex-col gap-12">
                <div className="space-y-2">
                    <div ref={mobileRow1Ref} className="whitespace-nowrap translate-x-12">
                        <span className="text-7xl font-black text-foreground uppercase leading-none tracking-tighter">
                            {content.marquee.mobileTop}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <span className="text-3xl font-light italic text-foreground/30">&amp;</span>
                        <div className="h-px flex-1 bg-border" />
                    </div>
                    <div ref={mobileRow2Ref} className="whitespace-nowrap -translate-x-12 flex justify-end">
                        <span className="text-7xl font-black text-foreground uppercase leading-none tracking-tighter">
                            {content.marquee.mobileBottom}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
