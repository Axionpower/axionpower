import HeroBackground from "./HeroBackground";
import React from "react";
import Link from "next/link";
import "./MtHeroSection.css";
import type { MtHeroData } from "@/lib/queries/maintenance";

interface Props {
    data: MtHeroData;
}

export default function MtHeroSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h1') as React.ElementType;

    const finalSectionStyle: React.CSSProperties = {
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
        <HeroBackground
            imageUrl={data.backgroundImageUrl || "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png"}
            videoUrl={data.backgroundVideoUrl}
            className="mt-hero"
            style={Object.keys(finalSectionStyle).length ? finalSectionStyle : undefined}
        >
            <div className="mt-overlay" aria-hidden="true" />
            <div className="mt-grid" aria-hidden="true" />
            <div className="mt-badge-top">{data.topBadgeText}</div>

            <div className="mt-content" style={Object.keys(contentStyle).length ? contentStyle : undefined}>
                <span className="mt-breadcrumb" style={o.breadcrumbColor ? { color: o.breadcrumbColor } : undefined}>
                    {data.breadcrumb}
                </span>

                <HeadingTag className="mt-heading" style={{
                    ...(o.headingColor && { color: o.headingColor }),
                    ...(o.headingFontSize && { fontSize: o.headingFontSize }),
                    ...(o.headingFontWeight && { fontWeight: o.headingFontWeight }),
                    ...(o.headingFontFamily && { fontFamily: o.headingFontFamily }),
                }}>
                    {data.heading}
                </HeadingTag>

                <div className="mt-accent-bar" style={o.accentBarColor ? { background: o.accentBarColor } : undefined} />

                <p className="mt-subtext" style={{
                    ...(o.bodyColor && { color: o.bodyColor }),
                    ...(o.subtextFontSize && { fontSize: o.subtextFontSize }),
                }}>
                    {data.subtext}
                </p>

                <div className="mt-buttons">
                    <Link href={data.btnPrimaryUrl} className="mt-btn-primary">
                        {data.btnPrimaryLabel}
                    </Link>
                    <Link href={data.btnGhostUrl} className="mt-btn-ghost">
                        {data.btnGhostLabel}
                    </Link>
                </div>
            </div>
        </HeroBackground>
    );
}
