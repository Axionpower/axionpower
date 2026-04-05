"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import CmsMedia from "./CmsMedia";
import "./WetCellKeyBenefitsSection.css";

interface BenefitCard {
    title: string;
    description: string;
    image: string;
    videoUrl?: string;
}

const DEFAULT_CARDS: BenefitCard[] = [
    {
        title: "Long Design Life",
        description: "Durable batteries engineered for decades of service in the most demanding environments.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Proven Technology",
        description: "Field-tested reliability across utility substations, power generation, and industrial DC systems.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Deep-Cycle Performance",
        description: "Handles extended discharge cycles without degradation — ideal for long-duration backup applications.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Ideal for Critical Infrastructure",
        description: "Supports high-reliability systems for utilities, industry, and essential services worldwide.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
];

interface WetCellKeyBenefitsProps {
    heading?: string;
    cards?: BenefitCard[];
    headingTag?: string;
    cardHeadingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    bgColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function WetCellKeyBenefitsSection({
    heading = "Key Benefits",
    cards = DEFAULT_CARDS,
    headingTag,
    cardHeadingTag,
    headingColor,
    headingFontSize,
    headingFontWeight,
    headingFontFamily,
    bgColor,
    marginTopOverlap,
    borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: WetCellKeyBenefitsProps) {
    const CardTag = (cardHeadingTag || "h3") as React.ElementType;
    const HeadingTag = (headingTag || "h2") as React.ElementType;
    const trackRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const total = cards.length;

    const scrollToIndex = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index] as HTMLElement | undefined;
        if (!card) return;
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
        setActiveIndex(index);
    }, []);

    const resetAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + 1) % total;
                const track = trackRef.current;
                if (track) {
                    const card = track.children[next] as HTMLElement | undefined;
                    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
                }
                return next;
            });
        }, 3200);
    }, [total]);

    useEffect(() => {
        resetAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [resetAuto]);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const card = track.children[0] as HTMLElement | undefined;
            if (!card) return;
            const cardWidth = card.offsetWidth + 16;
            const idx = Math.round(track.scrollLeft / cardWidth);
            setActiveIndex(Math.max(0, Math.min(idx, total - 1)));
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        return () => track.removeEventListener("scroll", onScroll);
    }, [total]);

    const goPrev = () => {
        const idx = activeIndex === 0 ? total - 1 : activeIndex - 1;
        scrollToIndex(idx);
        resetAuto();
    };

    const goNext = () => {
        const idx = (activeIndex + 1) % total;
        scrollToIndex(idx);
        resetAuto();
    };

    return (
        <section className="wetcell-benefits" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
            ...(paddingTop && { paddingTop }),
            ...(paddingBottom && { paddingBottom }),
            ...(paddingLeft && { paddingLeft }),
            ...(paddingRight && { paddingRight }),
        }}>
            <HeadingTag
                className="wetcell-benefits-heading"
                style={{
                    ...(headingColor && { color: headingColor }),
                    ...(headingFontSize && { fontSize: headingFontSize }),
                    ...(headingFontWeight && { fontWeight: headingFontWeight }),
                    ...(headingFontFamily && { fontFamily: headingFontFamily }),
                }}
            >
                {heading}
            </HeadingTag>

            {/* ── Desktop grid ── */}
            <div className="wetcell-benefits-grid wetcell-benefits-desktop">
                {cards.map((card, i) => (
                    <div key={i} className="wetcell-benefit-card">
                        <div className="wetcell-benefit-card-img">
                            <CmsMedia imageUrl={card.image} videoUrl={card.videoUrl} alt={card.title} fill />
                        </div>
                        <div className="wetcell-benefit-card-body">
                            <CardTag className="wetcell-benefit-card-title">{card.title}</CardTag>
                            <p className="wetcell-benefit-card-desc">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Mobile carousel ── */}
            <div className="wetcell-benefits-carousel-wrap wetcell-benefits-mobile">
                <button className="wetcell-carousel-btn wetcell-carousel-btn--prev" onClick={goPrev} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className="wetcell-benefits-track" ref={trackRef}>
                    {cards.map((card, i) => (
                        <div key={i} className="wetcell-benefit-card">
                            <div className="wetcell-benefit-card-img">
                                <CmsMedia imageUrl={card.image} videoUrl={card.videoUrl} alt={card.title} fill />
                            </div>
                            <div className="wetcell-benefit-card-body">
                                <CardTag className="wetcell-benefit-card-title">{card.title}</CardTag>
                                <p className="wetcell-benefit-card-desc">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="wetcell-carousel-btn wetcell-carousel-btn--next" onClick={goNext} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            {/* ── Dots ── */}
            <div className="wetcell-carousel-dots wetcell-benefits-mobile">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        className={`wetcell-carousel-dot${i === activeIndex ? " wetcell-carousel-dot--active" : ""}`}
                        onClick={() => { scrollToIndex(i); resetAuto(); }}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
