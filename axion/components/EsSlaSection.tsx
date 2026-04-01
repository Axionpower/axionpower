"use client";

import React, { useRef, useState, useEffect } from "react";
import "./EsSlaSection.css";
import type { EsSlaData } from "@/lib/queries/emergency-support";

interface Props {
    data: EsSlaData;
}

export default function EsSlaSection({ data }: Props) {
    const { label, heading, body, tiers, overrides } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const [activeIndex, setActiveIndex] = useState(0);
    const tiersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = tiersRef.current;
        if (!el) return;
        const handleScroll = () => {
            const cardWidth = el.firstElementChild
                ? (el.firstElementChild as HTMLElement).offsetWidth + 14 // 14px gap
                : el.scrollWidth / tiers.length;
            const index = Math.round(el.scrollLeft / cardWidth);
            setActiveIndex(Math.max(0, Math.min(index, tiers.length - 1)));
        };
        el.addEventListener("scroll", handleScroll, { passive: true });
        return () => el.removeEventListener("scroll", handleScroll);
    }, [tiers.length]);

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

    const headingStyle: React.CSSProperties = {
        ...(overrides.headingColor && { color: overrides.headingColor }),
        ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
    };

    const bodyStyle: React.CSSProperties = {
        ...(overrides.bodyColor && { color: overrides.bodyColor }),
        ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
    };

    const labelStyle: React.CSSProperties = {
        ...(overrides.labelColor && { color: overrides.labelColor }),
    };

    const labelBarStyle: React.CSSProperties = {
        ...(overrides.labelColor && { backgroundColor: overrides.labelColor }),
    };

    const tiersStyle: React.CSSProperties = {
        ...(overrides.cardsGap && { gap: overrides.cardsGap }),
    };

    return (
        <section className="essa-section" style={sectionStyle}>
            <div className="essa-inner" style={innerStyle}>
                <div className="essa-label-row">
                    <div className="essa-label-bar" style={Object.keys(labelBarStyle).length ? labelBarStyle : undefined}></div>
                    <span className="essa-label" style={Object.keys(labelStyle).length ? labelStyle : undefined}>{label}</span>
                </div>
                <HeadingTag className="essa-heading" style={Object.keys(headingStyle).length ? headingStyle : undefined}>{heading}</HeadingTag>
                <p className="essa-body" style={Object.keys(bodyStyle).length ? bodyStyle : undefined}>{body}</p>

                <div className="essa-tiers" style={tiersStyle} ref={tiersRef}>
                    {tiers.map((tier, i) => {
                        // Map index to variant: 0=standard, 1=priority, 2=critical
                        const variants = ["standard", "priority", "critical"];
                        const variantClass = variants[i] || "standard";
                        // Strip emoji prefix from label for clean display
                        const cleanLabel = tier.tierLabel.replace(/^[\p{Emoji}\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/u, "").trim() || tier.tierLabel;
                        return (
                        <div key={i} className={`essa-tier-card ${variantClass}`} style={{ backgroundColor: tier.tierBgColor }}>
                            <div className="essa-tier-label" style={{ color: tier.tierColor }}>
                                <span className="essa-tier-dot" style={{ backgroundColor: tier.tierColor }}></span>
                                {cleanLabel}
                            </div>
                            <p className="essa-response-subtitle">Response Time</p>
                            <div className="essa-response-time">{tier.responseTime}</div>
                            <hr className="essa-tier-divider" />
                            <ul className="essa-features">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="essa-feature-item">
                                        <div className="essa-feature-checkmark">✓</div>
                                        <span className="essa-feature-text">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {variantClass === "priority" && (
                                <div className="essa-most-popular">
                                    <span className="essa-most-popular-badge">★ MOST POPULAR</span>
                                </div>
                            )}
                        </div>
                        );
                    })}
                </div>

                {/* Mobile-only dot indicators */}
                <div className="essa-carousel-dots" aria-hidden="true">
                    {tiers.map((_, i) => (
                        <span key={i} className={`essa-dot ${i === activeIndex ? "essa-dot--active" : ""}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
