import React from "react";
import Link from "next/link";
import "./QSHeroSection.css";
import type { QSHeroData } from "@/lib/queries/quality-safety";

interface Props {
    data: QSHeroData;
}

export default function QSHeroSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h1') as React.ElementType;

    // Merge background image with CMS overrides
    const finalSectionStyle: React.CSSProperties = {
        backgroundImage: `url(${data.backgroundImageUrl || "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png"})`,
        ...(o.bgColor && { backgroundColor: o.bgColor }),
        ...(o.minHeight && { minHeight: o.minHeight }),
    };

    const contentStyle: React.CSSProperties = {
        ...(o.paddingTop && { paddingTop: o.paddingTop }),
        ...(o.paddingBottom && { paddingBottom: o.paddingBottom }),
        ...(o.paddingLeft && { paddingLeft: o.paddingLeft }),
        ...(o.paddingRight && { paddingRight: o.paddingRight }),
    };

    return (
        <section className="qs-hero" style={finalSectionStyle}>
            {/* Background layers */}
            <div className="qs-overlay" aria-hidden="true" />
            <div className="qs-grid" aria-hidden="true" />

            {/* Top-right quality assured badge */}
            <div className="qs-badge-top">{data.topBadgeText}</div>

            {/* Content */}
            <div className="qs-content" style={Object.keys(contentStyle).length ? contentStyle : undefined}>
                {/* Breadcrumb */}
                <span
                    className="qs-breadcrumb"
                    style={o.breadcrumbColor ? { color: o.breadcrumbColor } : undefined}
                >
                    {data.breadcrumb}
                </span>

                {/* Heading */}
                <HeadingTag
                    className="qs-heading"
                    style={{
                        ...(o.headingColor && { color: o.headingColor }),
                        ...(o.headingFontSize && { fontSize: o.headingFontSize }),
                        ...(o.headingFontWeight && { fontWeight: o.headingFontWeight }),
                        ...(o.headingFontFamily && { fontFamily: o.headingFontFamily }),
                    }}
                >
                    {data.heading}
                </HeadingTag>

                {/* Blue accent bar */}
                <div
                    className="qs-accent-bar"
                    style={o.accentBarColor ? { background: o.accentBarColor } : undefined}
                />

                {/* Subtext */}
                <p
                    className="qs-subtext"
                    style={{
                        ...(o.bodyColor && { color: o.bodyColor }),
                        ...(o.subtextFontSize && { fontSize: o.subtextFontSize }),
                    }}
                >
                    {data.subtext}
                </p>

                {/* CTA Button */}
                {data.btnLabel && (
                    <Link
                        href={data.btnUrl || "#"}
                        className="qs-cta-btn"
                        style={{
                            ...(o.btnPrimaryBg && { backgroundColor: o.btnPrimaryBg }),
                            ...(o.btnPrimaryFg && { color: o.btnPrimaryFg }),
                        }}
                    >
                        {data.btnLabel}
                    </Link>
                )}
            </div>
        </section>
    );
}
