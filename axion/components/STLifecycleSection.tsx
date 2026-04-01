"use client";

import React from "react";
import Link from "next/link";
import "./STLifecycleSection.css";
import type { STLifecycleData } from "@/lib/queries/safety-training";

interface Props {
    data: STLifecycleData;
}

export default function STLifecycleSection({ data }: Props) {
    // Determine which steps are active
    const activeStepIndices = data.steps
        .map((step, i) => step.active ? i : -1)
        .filter(i => i !== -1);
    const minActive = Math.min(...activeStepIndices);
    const maxActive = Math.max(...activeStepIndices);

    return (
        <section className="stlc-lifecycle">
            {/* Decorative elements */}
            <div className="stlc-dots-grid" aria-hidden="true" />
            <div className="stlc-glow stlc-glow-left" aria-hidden="true" />
            <div className="stlc-glow stlc-glow-right" aria-hidden="true" />

            {/* Top section */}
            <div className="stlc-top">
                {/* Label pill */}
                <div className="stlc-label-pill">{data.label}</div>

                {/* Heading */}
                <h2 className="stlc-heading">{data.heading}</h2>

                {/* Accent line */}
                <div className="stlc-accent-line" aria-hidden="true" />

                {/* Description */}
                <p className="stlc-description">{data.description}</p>
            </div>

            {/* Feature cards section */}
            <div className="stlc-features">
                {data.features.map((feature, i) => (
                    <div
                        key={i}
                        className="stlc-feature-card"
                        style={{ '--accent-color': feature.accentColor } as React.CSSProperties}
                    >
                        {/* Ghost number */}
                        <div className="stlc-feature-ghost-number" style={{ color: feature.accentColor }}>
                            {feature.number}
                        </div>

                        {/* Header */}
                        <div className="stlc-feature-header">
                            {/* Accent bar */}
                            <div className="stlc-feature-accent-bar" aria-hidden="true" />

                            {/* Icon circle */}
                            <div
                                className="stlc-feature-icon-circle"
                                style={{ borderColor: feature.accentColor }}
                            >
                                {feature.icon}
                            </div>
                        </div>

                        {/* Badge */}
                        <div className="stlc-feature-badge">● Core Stage</div>

                        {/* Content */}
                        <h3 className="stlc-feature-title">{feature.title}</h3>
                        <p className="stlc-feature-description">{feature.description}</p>

                        {/* Link */}
                        <Link href="#" className="stlc-feature-link" style={{ color: feature.accentColor }}>
                            {feature.linkLabel}
                        </Link>
                    </div>
                ))}
            </div>

            {/* Timeline section */}
            <div className="stlc-timeline-container">
                {/* Timeline line */}
                <div className="stlc-timeline-line" aria-hidden="true">
                    <div
                        className="stlc-timeline-active-segment"
                        aria-hidden="true"
                        style={{
                            left: `calc((100% / ${data.steps.length}) * ${minActive} + (100% / ${data.steps.length * 2}))`,
                            right: `calc((100% / ${data.steps.length}) * ${data.steps.length - 1 - maxActive} + (100% / ${data.steps.length * 2}))`,
                        }}
                    />
                </div>

                {/* Steps */}
                <div className="stlc-steps">
                    {data.steps.map((step, i) => (
                        <div
                            key={i}
                            className={`stlc-step ${step.active ? 'stlc-step-active' : 'stlc-step-inactive'}`}
                        >
                            <div className="stlc-step-circle">{step.number}</div>
                            <div className="stlc-step-content">
                                <h4 className="stlc-step-title">{step.title}</h4>
                                <p className="stlc-step-description">{step.description}</p>
                            </div>
                            {step.active && (
                                <div className="stlc-step-active-badge">● Active</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom note */}
            <div className="stlc-bottom-note">
                {data.bottomNote}
            </div>
        </section>
    );
}
