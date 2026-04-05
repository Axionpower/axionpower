import HeroBackground from "./HeroBackground";
import React from "react";
import "./SustainHeroSection.css";
import type { SustainHeroData } from "@/lib/queries/sustainability";

interface Props {
    data: SustainHeroData;
}

export default function SustainHeroSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h1') as React.ElementType;

    // Merge background image with CMS overrides
    const finalSectionStyle: React.CSSProperties = {
        ...(o.bgColor       && { backgroundColor: o.bgColor }),
        ...(o.sectionHeight && { height:    o.sectionHeight }),
        ...(o.minHeight     && { minHeight: o.minHeight }),
    };

    const contentStyle: React.CSSProperties = {
        ...(o.paddingTop    && { paddingTop:    o.paddingTop }),
        ...(o.paddingBottom && { paddingBottom: o.paddingBottom }),
        ...(o.paddingLeft   && { paddingLeft:   o.paddingLeft }),
        ...(o.paddingRight  && { paddingRight:  o.paddingRight }),
    };

    const headingLines = data.heading.split("\n");

    return (
        <HeroBackground
            imageUrl={data.backgroundImageUrl || "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png"}
            videoUrl={data.backgroundVideoUrl}
            className="sh-hero"
            style={Object.keys(finalSectionStyle).length ? finalSectionStyle : undefined}
        >
            {/* Background layers */}
            <div className="sh-overlay" aria-hidden="true" />
            <div className="sh-grid" aria-hidden="true" />

            {/* Top-right sustainability badge */}
            <div className="sh-badge-top">{data.topBadgeText}</div>

            {/* Content */}
            <div className="sh-content" style={Object.keys(contentStyle).length ? contentStyle : undefined}>
                {/* Breadcrumb */}
                <span
                    className="sh-breadcrumb"
                    style={o.breadcrumbColor ? { color: o.breadcrumbColor } : undefined}
                >
                    {data.breadcrumb}
                </span>

                {/* Heading */}
                <HeadingTag
                    className="sh-heading"
                    style={{
                        ...(o.headingColor     && { color:        o.headingColor }),
                        ...(o.headingFontSize  && { fontSize:     o.headingFontSize }),
                        ...(o.headingFontWeight && { fontWeight:   o.headingFontWeight }),
                        ...(o.headingFontFamily && { fontFamily:   o.headingFontFamily }),
                    }}
                >
                    {headingLines.map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < headingLines.length - 1 && <br />}
                        </span>
                    ))}
                </HeadingTag>

                {/* Blue accent bar */}
                <div
                    className="sh-accent-bar"
                    style={o.accentBarColor ? { background: o.accentBarColor } : undefined}
                />

                {/* Subtext */}
                <p
                    className="sh-subtext"
                    style={{
                        ...(o.bodyColor       && { color:    o.bodyColor }),
                        ...(o.subtextFontSize && { fontSize: o.subtextFontSize }),
                    }}
                >
                    {data.subtext}
                </p>

                {/* Pill badges */}
                <div className="sh-pills">
                    {data.pills.map((pill, i) => (
                        <span
                            key={i}
                            className="sh-pill"
                            style={{
                                ...(o.pillBgColor   && { background: o.pillBgColor }),
                                ...(o.pillTextColor && { color:      o.pillTextColor }),
                            }}
                        >
                            {pill}
                        </span>
                    ))}
                </div>
            </div>
        </HeroBackground>
    );
}
