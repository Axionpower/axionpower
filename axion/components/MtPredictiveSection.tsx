"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import "./MtPredictiveSection.css";
import type { MtPredictiveData } from "@/lib/queries/maintenance";

interface Props {
    data: MtPredictiveData;
}

export default function MtPredictiveSection({ data }: Props) {
    const { label, heading, body, cards, stats, overrides } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

    const sectionStyle: React.CSSProperties = {
        ...(overrides.bgColor && { backgroundColor: overrides.bgColor }),
        ...(overrides.marginTop && { marginTop: overrides.marginTop }),
        ...(overrides.borderRadiusTop && { borderRadius: `${overrides.borderRadiusTop} ${overrides.borderRadiusTop} 0 0` }),
    };

    const innerStyle: React.CSSProperties = {
        ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
        ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
        ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
        ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
    };

    // ── Carousel state ──
    const trackRef = useRef<HTMLDivElement>(null);
    const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const total = cards.length;

    const scrollToIndex = useCallback((index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.children[index] as HTMLElement;
        if (!card) return;
        track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
        setActiveIndex(index);
    }, []);

    const resetAuto = useCallback(() => {
        if (autoRef.current) clearInterval(autoRef.current);
        autoRef.current = setInterval(() => {
            setActiveIndex(prev => {
                const next = (prev + 1) % total;
                const track = trackRef.current;
                if (track) {
                    const card = track.children[next] as HTMLElement;
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
        const handleScroll = () => {
            const card = track.children[0] as HTMLElement;
            const cardWidth = card ? card.offsetWidth + 16 : 1;
            const idx = Math.round(track.scrollLeft / cardWidth);
            setActiveIndex(Math.min(idx, total - 1));
        };
        track.addEventListener("scroll", handleScroll, { passive: true });
        return () => track.removeEventListener("scroll", handleScroll);
    }, [total]);

    return (
        <section className="mtpa-section" style={sectionStyle}>
            <div className="mtpa-inner" style={innerStyle}>
                <div className="mtpa-label-row">
                    <div className="mtpa-label-bar" style={overrides.labelColor ? { backgroundColor: overrides.labelColor } : undefined}></div>
                    <span className="mtpa-label" style={overrides.labelColor ? { color: overrides.labelColor } : undefined}>{label}</span>
                </div>
                <HeadingTag className="mtpa-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>
                <p className="mtpa-body" style={{
                    ...(overrides.bodyColor && { color: overrides.bodyColor }),
                    ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
                }}>{body}</p>

                {/* Desktop: flex row */}
                <div className="mtpa-cards mtpa-cards-desktop">
                    {cards.map((card, i) => (
                        <div key={i} className="mtpa-card" style={{ backgroundColor: card.cardColor }}>
                            <div className="mtpa-card-header">
                                <div className="mtpa-card-icon">{card.icon}</div>
                                <CardTag className="mtpa-card-title">{card.title}</CardTag>
                            </div>
                            <p className="mtpa-card-desc">{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile: carousel */}
                <div className="mtpa-mobile">
                    <div className="mtpa-carousel-wrap">
                        <button
                            className="mtpa-carousel-btn"
                            aria-label="Previous"
                            onClick={() => { scrollToIndex((activeIndex - 1 + total) % total); resetAuto(); }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <div className="mtpa-track" ref={trackRef}>
                            {cards.map((card, i) => (
                                <div key={i} className="mtpa-card" style={{ backgroundColor: card.cardColor }}>
                                    <div className="mtpa-card-header">
                                        <div className="mtpa-card-icon">{card.icon}</div>
                                        <CardTag className="mtpa-card-title">{card.title}</CardTag>
                                    </div>
                                    <p className="mtpa-card-desc">{card.description}</p>
                                </div>
                            ))}
                        </div>

                        <button
                            className="mtpa-carousel-btn"
                            aria-label="Next"
                            onClick={() => { scrollToIndex((activeIndex + 1) % total); resetAuto(); }}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="mtpa-dots">
                        {cards.map((_, i) => (
                            <button
                                key={i}
                                className={`mtpa-dot${i === activeIndex ? " mtpa-dot--active" : ""}`}
                                aria-label={`Go to slide ${i + 1}`}
                                onClick={() => { scrollToIndex(i); resetAuto(); }}
                            />
                        ))}
                    </div>
                </div>

                <div className="mtpa-stats-bar">
                    {stats.map((stat, i) => (
                        <div key={i} className="mtpa-stat-item">
                            <span className="mtpa-stat-icon">{stat.icon}</span>
                            <div className="mtpa-stat-text">
                                <span className="mtpa-stat-title">{stat.title}</span>
                                <span className="mtpa-stat-desc">{stat.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
