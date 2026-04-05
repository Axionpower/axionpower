import { Fragment } from "react";
import React from "react";
import Link from "next/link";
import "./AboutHeroSection.css";
import type { AboutHeroData } from "@/lib/queries/about-page";
import HeroBackground from "./HeroBackground";

interface Props {
    data: AboutHeroData;
}

export default function AboutHeroSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h1') as React.ElementType;

    const headingLines = data.heading.split("\n");

    return (
        <HeroBackground
            imageUrl={data.backgroundImageUrl}
            videoUrl={data.backgroundVideoUrl}
            className="ah-hero"
        >
            {/* Background layers */}
            <div className="ah-overlay-vertical" aria-hidden="true" />
            <div className="ah-overlay-horizontal" aria-hidden="true" />

            {/* Content */}
            <div className="ah-content">
                {/* Breadcrumb */}
                <span className="ah-breadcrumb">{data.breadcrumb}</span>

                {/* Heading */}
                <HeadingTag className="ah-heading" style={{
                    ...(data.headingColor && { color: data.headingColor }),
                    ...(data.headingFontSize && { fontSize: data.headingFontSize }),
                    ...(data.headingFontWeight && { fontWeight: data.headingFontWeight }),
                    ...(data.headingFontFamily && { fontFamily: data.headingFontFamily }),
                }}>
                    {headingLines.map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < headingLines.length - 1 && <br />}
                        </span>
                    ))}
                </HeadingTag>

                {/* Blue accent bar */}
                <div className="ah-accent-bar" />

                {/* Subtext */}
                <p className="ah-subtext" style={{
                    ...(data.bodyColor && { color: data.bodyColor }),
                    ...(data.bodyFontSize && { fontSize: data.bodyFontSize }),
                    ...(data.bodyFontWeight && { fontWeight: data.bodyFontWeight }),
                }}>
                    {data.subtext}
                </p>

                {/* Stats bar */}
                <div className="ah-stats-bar">
                    {data.stats.map((stat, i) => (
                        <Fragment key={stat.label}>
                            {i > 0 && <div className="ah-stat-divider" />}
                            <div className="ah-stat-item">
                                <span className="ah-stat-value">{stat.value}</span>
                                <span className="ah-stat-label">{stat.label}</span>
                            </div>
                        </Fragment>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="ah-buttons">
                    <Link href={data.btnPrimaryUrl} className="ah-btn-primary">
                        {data.btnPrimaryLabel}
                    </Link>
                    <Link href={data.btnGhostUrl} className="ah-btn-ghost">
                        {data.btnGhostLabel}
                    </Link>
                </div>
            </div>
        </HeroBackground>
    );
}
