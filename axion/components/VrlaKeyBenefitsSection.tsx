"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import CmsMedia from "./CmsMedia";
import "./VrlaKeyBenefitsSection.css";

interface BenefitCard {
    title: string;
    description: string;
    image: string;
    videoUrl?: string;
}

const DEFAULT_CARDS: BenefitCard[] = [
    {
        title: "Maintenance-Free Operation",
        description: "No need for regular electrolyte checks — sealed design requires zero water top-up.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Compact Footprint",
        description: "Ideal for space-constrained installations where rack density matters.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "High Power Density",
        description: "Delivers reliable power in a smaller form factor across all critical applications.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Proven Reliability",
        description: "Field-tested in mission-critical environments including data centres, telecom, and healthcare.",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
];

interface VrlaKeyBenefitsProps {
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

export default function VrlaKeyBenefitsSection({
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
}: VrlaKeyBenefitsProps) {
    const CardTag = (cardHeadingTag || "h3") as React.ElementType;
    const HeadingTag = (headingTag || "h2") as React.ElementType;
    const trackRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const total = cards.length;

    /** Scroll track to a specific card index */
    const scrollToIndex = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index] as HTMLElement | undefined;
        if (!card) return;
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
        setActiveIndex(index);
    }, []);

    /** Reset auto-scroll timer so manual navigation doesn't fight auto */
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

    // Start auto-scroll on mount
    useEffect(() => {
        resetAuto();
        return () => { if (autoRef.current) clearInterval(autoRef.current); };
    }, [resetAuto]);

    // Sync active dot when user manually swipes
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const onScroll = () => {
            const card = track.children[0] as HTMLElement | undefined;
            if (!card) return;
            const cardWidth = card.offsetWidth + 16; // 16 = gap
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
        <section className="vrla-benefits" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
            ...(paddingTop && { paddingTop }),
            ...(paddingBottom && { paddingBottom }),
            ...(paddingLeft && { paddingLeft }),
            ...(paddingRight && { paddingRight }),
        }}>
            <HeadingTag
                className="vrla-benefits-heading"
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
            <div className="vrla-benefits-grid vrla-benefits-desktop">
                {cards.map((card, i) => (
                    <div key={i} className="vrla-benefit-card">
                        <div className="vrla-benefit-card-img">
                            <CmsMedia imageUrl={card.image} videoUrl={card.videoUrl} alt={card.title} fill />
                        </div>
                        <div className="vrla-benefit-card-body">
                            <CardTag className="vrla-benefit-card-title">{card.title}</CardTag>
                            <p className="vrla-benefit-card-desc">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Mobile carousel ── */}
            <div className="vrla-benefits-carousel-wrap vrla-benefits-mobile">
                {/* Prev button */}
                <button className="vrla-carousel-btn vrla-carousel-btn--prev" onClick={goPrev} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Track */}
                <div className="vrla-benefits-track" ref={trackRef}>
                    {cards.map((card, i) => (
                        <div key={i} className="vrla-benefit-card">
                            <div className="vrla-benefit-card-img">
                                <CmsMedia imageUrl={card.image} videoUrl={card.videoUrl} alt={card.title} fill />
                            </div>
                            <div className="vrla-benefit-card-body">
                                <CardTag className="vrla-benefit-card-title">{card.title}</CardTag>
                                <p className="vrla-benefit-card-desc">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Next button */}
                <button className="vrla-carousel-btn vrla-carousel-btn--next" onClick={goNext} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            {/* ── Dots ── */}
            <div className="vrla-carousel-dots vrla-benefits-mobile">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        className={`vrla-carousel-dot${i === activeIndex ? " vrla-carousel-dot--active" : ""}`}
                        onClick={() => { scrollToIndex(i); resetAuto(); }}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
