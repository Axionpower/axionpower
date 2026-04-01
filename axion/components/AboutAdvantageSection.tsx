"use client";

import React, { useRef, useEffect } from "react";
import "./AboutAdvantageSection.css";
import type { AboutAdvantageData } from "@/lib/queries/about-page";

interface Props {
    data: AboutAdvantageData;
}

export default function AboutAdvantageSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    const CardTag = (data.cardHeadingTag || 'h3') as React.ElementType;
    const carouselRef = useRef<HTMLDivElement>(null);

    // Smooth auto-scroll carousel on mobile
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;

        // Only run when carousel layout is active (mobile)
        const check = () => el.scrollWidth > el.clientWidth + 10;

        const scroll = () => {
            if (!check()) return;
            const maxScroll = el.scrollWidth - el.clientWidth;
            if (el.scrollLeft >= maxScroll - 4) {
                // Loop back to start smoothly
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Advance by one card width
                const cardWidth = el.querySelector<HTMLElement>(".adv-card")?.offsetWidth ?? 280;
                el.scrollBy({ left: cardWidth + 14, behavior: "smooth" });
            }
        };

        const interval = setInterval(scroll, 3200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="adv-section">
            {/* Decorative blobs */}
            <div className="adv-ellipse-1" aria-hidden="true" />
            <div className="adv-ellipse-2" aria-hidden="true" />

            {/* ── Image Banner ── */}
            <div className="adv-banner">
                <div className="adv-banner-grid-h" aria-hidden="true" />
                <div className="adv-banner-grid-v" aria-hidden="true" />
                <div className="adv-banner-gradient" aria-hidden="true" />

                {/* Left content */}
                <div className="adv-banner-left">
                    <div className="adv-banner-label-row">
                        <span className="adv-banner-label-bar" />
                        <span className="adv-banner-label">{data.label}</span>
                    </div>
                    <HeadingTag className="adv-banner-heading" style={{ ...(data.headingColor && { color: data.headingColor }) }}>{data.heading}</HeadingTag>
                    <p className="adv-banner-subtext">{data.subtext}</p>
                </div>

                {/* Stat boxes */}
                <div className="adv-banner-stats">
                    {data.stats.map((s) => (
                        <div key={s.label} className="adv-banner-stat">
                            <span className="adv-banner-stat-value">{s.value}</span>
                            <span className="adv-banner-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Reason Cards ── */}
            <div className="adv-cards" ref={carouselRef}>
                {data.cards.map((card) => (
                    <div key={card.number} className="adv-card">
                        {/* Left colored border bar */}
                        <div className="adv-card-left-bar" style={{ background: card.numberColor }} />
                        {/* Watermark number — top-right */}
                        <span className="adv-card-number">{card.number}</span>
                        {/* Icon circle — top-left */}
                        <div className="adv-card-icon-circle">
                            <span className="adv-card-icon">{card.icon}</span>
                        </div>
                        {/* Divider */}
                        <div className="adv-card-divider" />
                        {/* Title */}
                        <CardTag className="adv-card-title" style={{ ...(data.cardTitleColor && { color: data.cardTitleColor }) }}>{card.title}</CardTag>
                        {/* Description */}
                        <p className="adv-card-desc">{card.description}</p>
                        {/* Bottom indicator dots */}
                        <div className="adv-card-dots">
                            <span className="adv-card-dot" style={{ background: card.numberColor }} />
                            <span className="adv-card-dot" style={{ background: card.numberColor, opacity: 0.4 }} />
                            <span className="adv-card-dot" style={{ background: card.numberColor, opacity: 0.4 }} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
