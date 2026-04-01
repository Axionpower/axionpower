import React from "react";
import "./AboutIntroSection.css";
import type { AboutIntroData } from "@/lib/queries/about-page";

interface Props {
    data: AboutIntroData;
}

export default function AboutIntroSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    return (
        <section className="ai-section">
            {/* ── Left Column ── */}
            <div className="ai-left">
                <div className="ai-label-row">
                    <div className="ai-label-bar" />
                    <span className="ai-label">{data.label}</span>
                </div>

                <HeadingTag className="ai-heading" style={{ ...(data.headingColor && { color: data.headingColor }), ...(data.headingFontWeight && { fontWeight: data.headingFontWeight }) }}>
                    {data.heading.split("\n").map((line, i, arr) => (
                        <span key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                        </span>
                    ))}
                </HeadingTag>

                <div className="ai-accent-bar" />

                <p className="ai-body">{data.body1}</p>
                <p className="ai-body">{data.body2}</p>

                <div className="ai-badges">
                    {data.badge1 && <div className="ai-badge">{data.badge1}</div>}
                    {data.badge2 && <div className="ai-badge">{data.badge2}</div>}
                </div>
            </div>

            {/* ── Right Column — Image ── */}
            <div className="ai-image-wrap">
                <div className="ai-grid" aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={data.imageUrl ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png"}
                    alt={data.imageAlt ?? "Battery room installation"}
                    className="ai-image"
                />
                <div className="ai-badge-2004">
                    <span className="ai-badge-since">{data.badgeSince}</span>
                    <span className="ai-badge-years">{data.badgeYears}</span>
                </div>
            </div>
        </section>
    );
}
