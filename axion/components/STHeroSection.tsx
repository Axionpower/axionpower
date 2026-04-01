"use client";

import React from "react";
import Link from "next/link";
import "./STHeroSection.css";
import type { STHeroData } from "@/lib/queries/safety-training";

interface Props {
    data: STHeroData;
}

export default function STHeroSection({ data }: Props) {
    return (
        <section
            className="sth-hero"
            style={
                {
                    '--accent': data.accentColor,
                    ...(data.bgImage ? {
                        backgroundImage: `url(${data.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    } : {}),
                } as React.CSSProperties
            }
        >
            {/* Decorative elements */}
            <div className="sth-glow sth-glow-blue" aria-hidden="true" />
            <div className="sth-glow sth-glow-cyan" aria-hidden="true" />
            <div className="sth-dots" aria-hidden="true" />

            {/* Content wrapper */}
            <div className="sth-container">
                {/* Left column */}
                <div className="sth-left">
                    {/* Vertical line */}
                    <div className="sth-vertical-line" aria-hidden="true" />

                    {/* Breadcrumb */}
                    <span className="sth-breadcrumb">{data.breadcrumb}</span>

                    {/* Heading */}
                    <h1 className="sth-heading">{data.heading}</h1>

                    {/* Cyan accent rect */}
                    <div className="sth-accent-rect" aria-hidden="true" />

                    {/* Subtitle */}
                    <p className="sth-subtitle">{data.subtitle}</p>

                    {/* Trust badge */}
                    <div className="sth-trust-badge">
                        {data.trustBadge}
                    </div>

                    {/* Buttons */}
                    <div className="sth-buttons">
                        <Link href={data.btn1Url} className="sth-btn sth-btn-primary">
                            {data.btn1Label}
                        </Link>
                        <Link href={data.btn2Url} className="sth-btn sth-btn-secondary">
                            {data.btn2Label}
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="sth-divider" aria-hidden="true" />

                    {/* Stats row */}
                    <div className="sth-stats">
                        {data.stats.map((stat, i) => (
                            <React.Fragment key={i}>
                                <div className="sth-stat">
                                    <div className="sth-stat-value">{stat.value}</div>
                                    <div className="sth-stat-label">{stat.label}</div>
                                </div>
                                {i < data.stats.length - 1 && (
                                    <div className="sth-stat-divider" aria-hidden="true" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Right column - Dashboard mockup */}
                <div className="sth-right">
                    <div className="sth-dashboard">
                        {/* Header bar with dots */}
                        <div className="sth-dashboard-header">
                            <div className="sth-dots-container">
                                <div className="sth-dot sth-dot-red" />
                                <div className="sth-dot sth-dot-yellow" />
                                <div className="sth-dot sth-dot-green" />
                            </div>
                            <h3 className="sth-dashboard-title">Training Status Dashboard</h3>
                            <div className="sth-live-badge">● LIVE</div>
                        </div>

                        {/* Content */}
                        <div className="sth-dashboard-content">
                            {/* Top stat cards */}
                            <div className="sth-dashboard-stats">
                                <div className="sth-dashboard-stat-card sth-stat-card-cyan">
                                    <div className="sth-dashboard-stat-value">87%</div>
                                    <div className="sth-dashboard-stat-label">Completion</div>
                                </div>
                                <div className="sth-dashboard-stat-card sth-stat-card-green">
                                    <div className="sth-dashboard-stat-value">12</div>
                                    <div className="sth-dashboard-stat-label">Certified</div>
                                </div>
                            </div>

                            {/* Progress modules */}
                            <div className="sth-dashboard-modules">
                                <div className="sth-module">
                                    <div className="sth-module-header">
                                        <span className="sth-module-name">Safety Protocols</span>
                                        <span className="sth-module-percent">95%</span>
                                    </div>
                                    <div className="sth-progress-bar">
                                        <div className="sth-progress-fill" style={{ width: '95%' }} />
                                    </div>
                                </div>
                                <div className="sth-module">
                                    <div className="sth-module-header">
                                        <span className="sth-module-name">Emergency Response</span>
                                        <span className="sth-module-percent">78%</span>
                                    </div>
                                    <div className="sth-progress-bar">
                                        <div className="sth-progress-fill" style={{ width: '78%' }} />
                                    </div>
                                </div>
                                <div className="sth-module">
                                    <div className="sth-module-header">
                                        <span className="sth-module-name">Battery Handling</span>
                                        <span className="sth-module-percent">100%</span>
                                    </div>
                                    <div className="sth-progress-bar">
                                        <div className="sth-progress-fill" style={{ width: '100%' }} />
                                    </div>
                                </div>
                                <div className="sth-module">
                                    <div className="sth-module-header">
                                        <span className="sth-module-name">Documentation</span>
                                        <span className="sth-module-percent">45%</span>
                                    </div>
                                    <div className="sth-progress-bar">
                                        <div className="sth-progress-fill" style={{ width: '45%' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Recent certifications */}
                            <div className="sth-dashboard-certs">
                                <h4 className="sth-certs-title">Recent Certifications</h4>
                                <div className="sth-cert-item">
                                    <div className="sth-cert-dot sth-cert-dot-green" />
                                    <span className="sth-cert-name">Sarah Chen</span>
                                    <span className="sth-cert-badge">Certified</span>
                                </div>
                                <div className="sth-cert-item">
                                    <div className="sth-cert-dot sth-cert-dot-blue" />
                                    <span className="sth-cert-name">Mike Rodriguez</span>
                                    <span className="sth-cert-badge">In Progress</span>
                                </div>
                                <div className="sth-cert-item">
                                    <div className="sth-cert-dot sth-cert-dot-green" />
                                    <span className="sth-cert-name">Jane Park</span>
                                    <span className="sth-cert-badge">Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Column separator */}
            <div className="sth-column-separator" aria-hidden="true" />
        </section>
    );
}
