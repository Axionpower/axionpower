"use client";
import React from "react";

import { QSStandardsData } from "@/lib/queries/quality-safety";
import "./QSStandardsSection.css";

interface QSStandardsSectionProps {
    data: QSStandardsData;
}

export default function QSStandardsSection({ data }: QSStandardsSectionProps) {
    const {
        label,
        heading,
        cards,
        notes,
        overrides = {},
    } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

    const sectionStyle: React.CSSProperties = {
        backgroundColor: overrides.bgColor || "#ffffff",
        ...(overrides.marginTop && { marginTop: overrides.marginTop }),
        ...(overrides.borderRadiusTop && { borderRadius: overrides.borderRadiusTop }),
        ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
        ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
        ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
        ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
        ...(overrides.minHeight && { minHeight: overrides.minHeight }),
    };

    const headingStyle: React.CSSProperties = {
        color: overrides.headingColor || "#1a1a2e",
        fontSize: overrides.headingFontSize || "46px",
    };

    const labelStyle: React.CSSProperties = {
        color: overrides.labelColor || "#1e88e5",
    };

    const cardsGap = overrides.cardsGap || "60px 28px";

    return (
        <section className="qss-section" style={sectionStyle}>
            {/* Label row */}
            <div className="qss-label-row">
                <div className="qss-label-bar" />
                <span className="qss-label" style={labelStyle}>
                    {label}
                </span>
            </div>

            {/* Heading */}
            <HeadingTag className="qss-heading" style={headingStyle}>
                {heading.split("\n").map((line, idx) => (
                    <span key={idx}>
                        {line}
                        {idx < heading.split("\n").length - 1 && <br />}
                    </span>
                ))}
            </HeadingTag>

            {/* Cards grid */}
            <div className="qss-cards" style={{ columnGap: cardsGap.split(" ")[0], rowGap: cardsGap.split(" ")[1] || "28px" }}>
                {cards.map((card, idx) => (
                    <div key={idx} className="qss-card">
                        <div
                            className="qss-card-badge"
                            style={{ backgroundColor: card.badgeColor }}
                        >
                            {card.badgeAbbr}
                        </div>
                        <div className="qss-card-content">
                            <CardTag className="qss-card-title">{card.title}</CardTag>
                            <p className="qss-card-description">
                                {card.description}
                            </p>
                            <div className="qss-progress-track">
                                <div
                                    className="qss-progress-fill"
                                    style={{
                                        width: `${card.percentage}%`,
                                        backgroundColor: card.percentageColor,
                                    }}
                                />
                                <span className="qss-progress-percentage">
                                    {card.percentage}%
                                </span>
                            </div>
                            <div className="qss-coverage-label">
                                Coverage
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Notes section */}
            {notes && notes.length > 0 && (
                <div className="qss-notes">
                    <ul className="qss-notes-list">
                        {notes.map((note, idx) => (
                            <li key={idx} className="qss-note-item">
                                {note}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}
