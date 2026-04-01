import React from "react";
import Link from "next/link";
import "./EsHeroSection.css";
import type { EsHeroData } from "@/lib/queries/emergency-support";

interface Props {
    data: EsHeroData;
}

export default function EsHeroSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h1') as React.ElementType;

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
        <section className="es-hero" style={finalSectionStyle}>
            <div className="es-overlay" aria-hidden="true" />
            <div className="es-grid" aria-hidden="true" />
            <div className="es-content" style={Object.keys(contentStyle).length ? contentStyle : undefined}>
                <span className="es-breadcrumb" style={o.breadcrumbColor ? { color: o.breadcrumbColor } : undefined}>
                    {data.breadcrumb}
                </span>

                <HeadingTag className="es-heading" style={{
                    ...(o.headingColor && { color: o.headingColor }),
                    ...(o.headingFontSize && { fontSize: o.headingFontSize }),
                    ...(o.headingFontWeight && { fontWeight: o.headingFontWeight }),
                    ...(o.headingFontFamily && { fontFamily: o.headingFontFamily }),
                }}>
                    {data.heading}
                </HeadingTag>

                <div className="es-accent-bar" style={o.accentBarColor ? { background: o.accentBarColor } : undefined} />

                <p className="es-subtext" style={{
                    ...(o.bodyColor && { color: o.bodyColor }),
                    ...(o.subtextFontSize && { fontSize: o.subtextFontSize }),
                }}>
                    {data.subtext}
                </p>

                <div className="es-stats-row">
                    {data.stats?.map((stat, idx) => (
                        <div key={idx} className="es-stat-box">
                            <div className="es-stat-icon">{stat.icon}</div>
                            <div>
                                <div className="es-stat-value">
                                    {stat.value}
                                </div>
                                <span className="es-stat-label">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="es-buttons">
                    <Link href={data.btnPrimaryUrl} className="es-btn-primary" style={o.btnPrimaryBg ? { backgroundColor: o.btnPrimaryBg } : undefined}>
                        {data.btnPrimaryLabel}
                    </Link>
                    <Link href={data.btnGhostUrl} className="es-btn-ghost" style={o.btnGhostColor ? { borderColor: o.btnGhostColor } : undefined}>
                        {data.btnGhostLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}
