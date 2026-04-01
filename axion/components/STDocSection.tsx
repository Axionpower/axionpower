"use client";

import React from "react";
import Link from "next/link";
import "./STDocSection.css";
import type { STDocData } from "@/lib/queries/safety-training";

interface Props {
    data: STDocData;
}

export default function STDocSection({ data }: Props) {
    // Split cards into left (big) and right (top/bottom)
    const bigCard = data.cards[0];
    const rightTopCard = data.cards[1];
    const rightBottomCard = data.cards[2];
    const bottomCard = data.cards[3];

    return (
        <section className="std-doc">
            {/* Ghost number */}
            <div className="std-ghost-number" aria-hidden="true">02</div>

            {/* Top content */}
            <div className="std-top">
                {/* Label */}
                <span className="std-label">{data.label}</span>

                {/* Heading */}
                <h2 className="std-heading">{data.heading}</h2>

                {/* Description */}
                <p className="std-description">{data.description}</p>
            </div>

            {/* Cards container */}
            <div className="std-container">
                {/* Left big card */}
                <div className="std-card-big">
                    <div className="std-card-accent-left" aria-hidden="true" />
                    <div className="std-card-top">
                        <div className="std-card-icon">{bigCard.icon}</div>
                        <h3 className="std-card-title">{bigCard.title}</h3>
                    </div>
                    <p className="std-card-description">{bigCard.description}</p>
                    <div className="std-card-divider" />
                    <div className="std-card-features">
                        {bigCard.features?.map((feature, i) => (
                            <div key={i} className="std-card-feature">
                                <span>→</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="#" className="std-card-link">
                        {bigCard.linkLabel}
                    </Link>
                    <div className="std-card-number">{bigCard.number}</div>
                </div>

                {/* Right column */}
                <div className="std-right-column">
                    {/* Top card */}
                    <div className="std-card-small std-card-small-top">
                        <div className="std-card-accent-left" aria-hidden="true" />
                        <div className="std-card-icon">{rightTopCard.icon}</div>
                        <h3 className="std-card-title-small">{rightTopCard.title}</h3>
                        <p className="std-card-description-small">{rightTopCard.description}</p>
                        <Link href="#" className="std-card-link-small">
                            {rightTopCard.linkLabel}
                        </Link>
                        <div className="std-card-number-small">{rightTopCard.number}</div>
                    </div>

                    {/* Bottom card */}
                    <div className="std-card-small std-card-small-bottom">
                        <div className="std-card-accent-left" aria-hidden="true" />
                        <div className="std-card-icon">{rightBottomCard.icon}</div>
                        <h3 className="std-card-title-small">{rightBottomCard.title}</h3>
                        <p className="std-card-description-small">{rightBottomCard.description}</p>
                        <Link href="#" className="std-card-link-small">
                            {rightBottomCard.linkLabel}
                        </Link>
                        <div className="std-card-number-small">{rightBottomCard.number}</div>
                    </div>
                </div>
            </div>

            {/* Bottom full-width card */}
            <div className="std-card-full">
                <div className="std-full-glow" aria-hidden="true" />
                <div className="std-card-accent-left" aria-hidden="true" />
                <div className="std-card-number-full">{bottomCard.number}</div>

                {/* Icon */}
                <div className="std-full-icon-wrap">
                    <div className="std-full-icon-circle">
                        {bottomCard.icon}
                    </div>
                </div>

                {/* Content */}
                <div className="std-full-content">
                    <span className="std-full-badge">Compliance</span>
                    <h3 className="std-card-title-full">{bottomCard.title}</h3>
                    <p className="std-card-description-full">{bottomCard.description}</p>
                </div>

                {/* CTA */}
                <div className="std-full-cta">
                    <Link href="#" className="std-card-link-full">
                        {bottomCard.linkLabel}
                    </Link>
                    <p className="std-full-cta-note">Always audit-ready</p>
                </div>
            </div>
        </section>
    );
}
