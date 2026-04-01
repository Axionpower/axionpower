"use client";

import React from "react";
import "./STTrainingSection.css";
import type { STTrainingData } from "@/lib/queries/safety-training";

interface Props {
    data: STTrainingData;
}

export default function STTrainingSection({ data }: Props) {
    return (
        <section className="sttr-training">
            {/* Container */}
            <div className="sttr-container">
                {/* Left column */}
                <div className="sttr-left">
                    {/* Label */}
                    <span className="sttr-label">{data.label}</span>

                    {/* Heading */}
                    <h2 className="sttr-heading">{data.heading}</h2>

                    {/* Description */}
                    <p className="sttr-description">{data.description}</p>

                    {/* Trust badge */}
                    <div className="sttr-trust-badge">
                        {data.trustBadge}
                    </div>

                    {/* Timeline section */}
                    <div className="sttr-timeline-section">
                        <h3 className="sttr-timeline-title">WHAT YOU'LL LEARN</h3>

                        <div className="sttr-timeline">
                            {/* Timeline line */}
                            <div className="sttr-timeline-line" aria-hidden="true" />

                            {/* Steps */}
                            {data.steps.map((step, i) => (
                                <div key={i} className="sttr-timeline-step">
                                    <div className="sttr-timeline-circle">
                                        {step.number}
                                    </div>
                                    <div className="sttr-timeline-title-text">
                                        {step.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="sttr-divider" aria-hidden="true" />

                {/* Right column - Cards */}
                <div className="sttr-right">
                    <div className="sttr-cards-grid">
                        {data.cards.map((card, i) => (
                            <div key={i} className="sttr-card">
                                <div className="sttr-card-accent" aria-hidden="true" />
                                <div className="sttr-card-icon-box">
                                    {card.icon}
                                </div>
                                <h3 className="sttr-card-title">{card.title}</h3>
                                <p className="sttr-card-description">{card.description}</p>
                                <div className="sttr-card-link">
                                    View details →
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stat strip */}
                    <div className="sttr-stat-strip">
                        {data.stats.map((stat, i) => (
                            <React.Fragment key={i}>
                                <div className="sttr-stat-item">
                                    <div className="sttr-stat-item-value">{stat.value}</div>
                                    <div className="sttr-stat-item-label">{stat.label}</div>
                                </div>
                                {i < data.stats.length - 1 && (
                                    <div className="sttr-stat-item-divider" aria-hidden="true" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
