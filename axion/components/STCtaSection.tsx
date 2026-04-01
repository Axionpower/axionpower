"use client";

import React from "react";
import Link from "next/link";
import "./STCtaSection.css";
import type { STCtaData } from "@/lib/queries/safety-training";

interface Props {
    data: STCtaData;
}

export default function STCtaSection({ data }: Props) {
    return (
        <section className="stcta-cta">
            {/* Decorative background */}
            <div className="stcta-bg-glow stcta-glow-tl" aria-hidden="true" />
            <div className="stcta-bg-glow stcta-glow-br" aria-hidden="true" />
            <div className="stcta-dots-grid" aria-hidden="true" />

            <div className="stcta-inner">
                {/* Left column */}
                <div className="stcta-left">
                    <span className="stcta-label">{data.label}</span>

                    <h2 className="stcta-heading">{data.heading}</h2>
                    <div className="stcta-accent-line" aria-hidden="true" />

                    <p className="stcta-description">{data.description}</p>

                    <div className="stcta-buttons">
                        <Link href={data.btn1Url} className="stcta-btn stcta-btn-primary">
                            {data.btn1Label}
                        </Link>
                        <Link href={data.btn2Url} className="stcta-btn stcta-btn-secondary">
                            {data.btn2Label}
                        </Link>
                    </div>

                    <div className="stcta-phone">{data.phone}</div>

                    <div className="stcta-stats">
                        <div className="stcta-stat">
                            <span className="stcta-stat-value">500+</span>
                            <span className="stcta-stat-label">Staff Trained</span>
                        </div>
                        <div className="stcta-stat-divider" aria-hidden="true" />
                        <div className="stcta-stat">
                            <span className="stcta-stat-value">99.9%</span>
                            <span className="stcta-stat-label">Safety Compliance</span>
                        </div>
                        <div className="stcta-stat-divider" aria-hidden="true" />
                        <div className="stcta-stat">
                            <span className="stcta-stat-value">20+</span>
                            <span className="stcta-stat-label">Years Experience</span>
                        </div>
                    </div>
                </div>

                {/* Right column — service cards */}
                <div className="stcta-right">
                    {/* Training card */}
                    <div className="stcta-service-card">
                        <div className="stcta-card-top-bar stcta-bar-cyan" aria-hidden="true" />
                        <div className="stcta-card-header">
                            <span className="stcta-card-icon">&#127891;</span>
                            <div>
                                <span className="stcta-card-badge stcta-badge-cyan">Most Popular</span>
                                <h3 className="stcta-card-title">On-Site Staff Training</h3>
                            </div>
                        </div>
                        <p className="stcta-card-desc">
                            Expert-led, hands-on training tailored to your battery systems and site requirements.
                        </p>
                        <ul className="stcta-card-features">
                            <li><span className="stcta-check stcta-check-cyan">&#10003;</span> Expert-led instruction</li>
                            <li><span className="stcta-check stcta-check-cyan">&#10003;</span> Hands-on demonstrations</li>
                            <li><span className="stcta-check stcta-check-cyan">&#10003;</span> Team certification</li>
                        </ul>
                        <Link href={data.btn1Url} className="stcta-card-btn stcta-card-btn-cyan">
                            Schedule Training &#8594;
                        </Link>
                    </div>

                    {/* Documentation card */}
                    <div className="stcta-service-card">
                        <div className="stcta-card-top-bar stcta-bar-blue" aria-hidden="true" />
                        <div className="stcta-card-header">
                            <span className="stcta-card-icon">&#128203;</span>
                            <div>
                                <span className="stcta-card-badge stcta-badge-blue">Compliance Ready</span>
                                <h3 className="stcta-card-title">System Documentation</h3>
                            </div>
                        </div>
                        <p className="stcta-card-desc">
                            Comprehensive specs, maintenance records, and compliance documentation for your systems.
                        </p>
                        <ul className="stcta-card-features">
                            <li><span className="stcta-check stcta-check-blue">&#10003;</span> Technical specs</li>
                            <li><span className="stcta-check stcta-check-blue">&#10003;</span> Maintenance logs</li>
                            <li><span className="stcta-check stcta-check-blue">&#10003;</span> Audit records</li>
                        </ul>
                        <Link href={data.btn2Url} className="stcta-card-btn stcta-card-btn-blue">
                            Request Docs &#8594;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
