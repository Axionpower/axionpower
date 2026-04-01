"use client";

import React from "react";
import Link from "next/link";
import "./STIntroSection.css";
import type { STIntroData } from "@/lib/queries/safety-training";

interface Props {
    data: STIntroData;
}

export default function STIntroSection({ data }: Props) {
    return (
        <section className="sti-intro">
            {/* Decorative glows */}
            <div className="sti-glow sti-glow-left" aria-hidden="true" />
            <div className="sti-glow sti-glow-right" aria-hidden="true" />

            {/* Container */}
            <div className="sti-container">
                {/* Left column */}
                <div className="sti-left">
                    {/* Label pill */}
                    <div className="sti-label-pill">{data.label}</div>

                    {/* Heading */}
                    <h2 className="sti-heading">{data.heading}</h2>

                    {/* Accent rect */}
                    <div className="sti-accent-rect" aria-hidden="true" />

                    {/* Description */}
                    <p className="sti-description">{data.description}</p>

                    {/* Stats row */}
                    <div className="sti-stats">
                        {data.stats.map((stat, i) => (
                            <React.Fragment key={i}>
                                <div className="sti-stat">
                                    <div className="sti-stat-value">{stat.value}</div>
                                    <div className="sti-stat-label">{stat.label}</div>
                                </div>
                                {i < data.stats.length - 1 && (
                                    <div className="sti-stat-divider" aria-hidden="true" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="sti-buttons">
                        <Link href={data.btn1Url} className="sti-btn sti-btn-primary">
                            {data.btn1Label}
                        </Link>
                        <Link href={data.btn2Url} className="sti-btn sti-btn-secondary">
                            {data.btn2Label}
                        </Link>
                    </div>
                </div>

                {/* Right column - panels */}
                <div className="sti-right">
                    {/* On-Site Training panel */}
                    <div className="sti-panel sti-panel-training">
                        <div className="sti-panel-icon">🛡️</div>
                        <h3 className="sti-panel-title">ON-SITE TRAINING</h3>
                        <ul className="sti-panel-items">
                            <li className="sti-panel-item">✓ Expert-led instruction</li>
                            <li className="sti-panel-item">✓ Hands-on demonstrations</li>
                            <li className="sti-panel-item">✓ Safety protocol review</li>
                            <li className="sti-panel-item">✓ Team certification</li>
                        </ul>
                        <div className="sti-panel-badge">Hands-on & Expert-Led</div>
                    </div>

                    {/* Documentation panel */}
                    <div className="sti-panel sti-panel-docs">
                        <div className="sti-panel-icon">📄</div>
                        <h3 className="sti-panel-title">DOCUMENTATION</h3>
                        <ul className="sti-panel-items">
                            <li className="sti-panel-item">✓ System specifications</li>
                            <li className="sti-panel-item">✓ Maintenance records</li>
                            <li className="sti-panel-item">✓ Safety procedures</li>
                            <li className="sti-panel-item">✓ Compliance records</li>
                        </ul>
                        <div className="sti-panel-badge">Compliance Ready</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
