"use client";

import React from "react";
import Link from "next/link";
import "./STBenefitsSection.css";
import type { STBenefitsData } from "@/lib/queries/safety-training";

interface Props {
    data: STBenefitsData;
}

export default function STBenefitsSection({ data }: Props) {
    return (
        <section className="stb-benefits">
            {/* Decorative glow */}
            <div className="stb-glow" aria-hidden="true" />

            {/* Container */}
            <div className="stb-container">
                {/* Left column */}
                <div className="stb-left">
                    {/* Label */}
                    <span className="stb-label">{data.label}</span>

                    {/* Heading */}
                    <h2 className="stb-heading">{data.heading}</h2>

                    {/* Description */}
                    <p className="stb-description">{data.description}</p>

                    {/* Stat boxes */}
                    <div className="stb-stat-boxes">
                        {data.stats.map((stat, i) => (
                            <div key={i} className="stb-stat-box">
                                <div className="stb-stat-box-value">{stat.value}</div>
                                <div className="stb-stat-box-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA card — left column, below stats */}
                    <div className="stb-cta-card">
                        <span className="stb-cta-badge">READY?</span>
                        <h3 className="stb-cta-title">{data.ctaTitle}</h3>
                        <p className="stb-cta-description">{data.ctaDesc}</p>
                        <Link href="#contact" className="stb-cta-link">
                            Get Started →
                        </Link>
                    </div>
                </div>

                {/* Right column - benefit cards */}
                <div className="stb-right">
                    <div className="stb-cards-layout">
                        {data.benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="stb-benefit-card"
                                style={{ '--accent-color': benefit.accentColor } as React.CSSProperties}
                            >
                                <div className="stb-benefit-accent" aria-hidden="true" />
                                <div className="stb-benefit-number" style={{ color: benefit.accentColor }}>
                                    {benefit.number}
                                </div>
                                <h3 className="stb-benefit-title">{benefit.title}</h3>
                                <p className="stb-benefit-description">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Separator line */}
            <div className="stb-separator" aria-hidden="true" />

            {/* Floating dots */}
            <div className="stb-dots" aria-hidden="true" />
        </section>
    );
}
