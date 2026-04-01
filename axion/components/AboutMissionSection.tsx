import React from "react";
import Image from "next/image";
import "./AboutMissionSection.css";
import type { AboutMissionData } from "@/lib/queries/about-page";

interface Props {
    data: AboutMissionData;
}

export default function AboutMissionSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    return (
        <section className="am-section">
            {/* Left – image + quote */}
            <div className="am-image-wrap">
                <Image
                    src={data.imageUrl ?? "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png"}
                    alt={data.imageAlt ?? "Technician at work"}
                    fill
                    className="am-image"
                />
                <div className="am-quote">
                    <p className="am-quote-text">{data.quote}</p>
                </div>
            </div>

            {/* Right – content */}
            <div className="am-right">
                {/* Label */}
                <div className="am-label-row">
                    <span className="am-label-bar" />
                    <span className="am-label">{data.label}</span>
                </div>

                {/* Heading */}
                <HeadingTag className="am-heading" style={{ ...(data.headingColor && { color: data.headingColor }), ...(data.headingFontWeight && { fontWeight: data.headingFontWeight }) }}>{data.heading}</HeadingTag>

                {/* Body */}
                <p className="am-body">{data.body}</p>

                {/* Feature cards */}
                <div className="am-cards">
                    {data.features.map((f) => (
                        <div key={f.label} className="am-card">
                            <div className="am-card-icon" aria-hidden="true">
                                {f.icon}
                            </div>
                            <p className="am-card-label">{f.label}</p>
                            <p className="am-card-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
