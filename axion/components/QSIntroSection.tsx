"use client";

import React from "react";

import { QSIntroData } from "@/lib/queries/quality-safety";
import "./QSIntroSection.css";

interface QSIntroSectionProps {
    data: QSIntroData;
}

export default function QSIntroSection({ data }: QSIntroSectionProps) {
    const {
        label,
        heading,
        body,
        cards,
        overrides = {},
    } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

    const sectionStyle: React.CSSProperties = {
        backgroundColor: overrides.bgColor || "#1e88e5",
        ...(overrides.marginTop && { marginTop: overrides.marginTop }),
        ...(overrides.borderRadiusTop && { borderRadius: overrides.borderRadiusTop }),
    };

    const innerStyle: React.CSSProperties = {
        ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
        ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
        ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
        ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
        ...(overrides.minHeight && { minHeight: overrides.minHeight }),
    };

    const headingStyle: React.CSSProperties = {
        color: overrides.headingColor || "#ffffff",
        fontSize: overrides.headingFontSize || "50px",
    };

    const bodyStyle: React.CSSProperties = {
        color: overrides.bodyColor || "#e8f4ff",
        fontSize: overrides.bodyFontSize || "17px",
    };

    const labelStyle: React.CSSProperties = {
        color: overrides.labelColor || "#ffffff",
    };

    const cardsGap = overrides.cardsGap || "20px";

    return (
        <section className="qsi-section" style={sectionStyle}>
            <div className="qsi-inner" style={innerStyle}>
                {/* Label row */}
                <div className="qsi-label-row">
                    <div className="qsi-label-bar" />
                    <span className="qsi-label" style={labelStyle}>
                        {label}
                    </span>
                </div>

                {/* Heading */}
                <HeadingTag className="qsi-heading" style={headingStyle}>
                    {heading.split("\n").map((line, idx) => (
                        <span key={idx}>
                            {line}
                            {idx < heading.split("\n").length - 1 && <br />}
                        </span>
                    ))}
                </HeadingTag>

                {/* Divider */}
                <div className="qsi-divider" />

                {/* Body text */}
                <p className="qsi-body" style={bodyStyle}>
                    {body}
                </p>

                {/* Cards grid - asymmetric bento */}
                <div className="qsi-cards" style={{ gap: cardsGap }}>
                    {/* Row 1: Card 01 + Card 02 */}
                    <div className="qsi-cards-row" style={{ gap: cardsGap }}>
                        {cards[0] && (
                            <div
                                className="qsi-card"
                                style={{ backgroundColor: cards[0].cardColor }}
                            >
                                <div className="qsi-card-number">
                                    {cards[0].number}
                                </div>
                                <div className="qsi-card-content">
                                    <div className="qsi-card-icon">
                                        {cards[0].icon}
                                    </div>
                                    <CardTag className="qsi-card-title">
                                        {cards[0].title.split("\n").map((line, idx) => (
                                            <span key={idx}>
                                                {line}
                                                {idx < cards[0].title.split("\n").length - 1 && <br />}
                                            </span>
                                        ))}
                                    </CardTag>
                                    <div className="qsi-card-divider" />
                                    <p className="qsi-card-description">
                                        {cards[0].description}
                                    </p>
                                </div>
                                <div className="qsi-card-badge">
                                    {cards[0].badgeLabel}
                                </div>
                            </div>
                        )}
                        {cards[1] && (
                            <div
                                className="qsi-card"
                                style={{ backgroundColor: cards[1].cardColor }}
                            >
                                <div className="qsi-card-number">
                                    {cards[1].number}
                                </div>
                                <div className="qsi-card-content">
                                    <div className="qsi-card-icon">
                                        {cards[1].icon}
                                    </div>
                                    <CardTag className="qsi-card-title">
                                        {cards[1].title.split("\n").map((line, idx) => (
                                            <span key={idx}>
                                                {line}
                                                {idx < cards[1].title.split("\n").length - 1 && <br />}
                                            </span>
                                        ))}
                                    </CardTag>
                                    <div className="qsi-card-divider" />
                                    <p className="qsi-card-description">
                                        {cards[1].description}
                                    </p>
                                </div>
                                <div className="qsi-card-badge">
                                    {cards[1].badgeLabel}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Row 2: Card 03 + Card 04 */}
                    <div className="qsi-cards-row" style={{ gap: cardsGap }}>
                        {cards[2] && (
                            <div
                                className="qsi-card"
                                style={{ backgroundColor: cards[2].cardColor }}
                            >
                                <div className="qsi-card-number">
                                    {cards[2].number}
                                </div>
                                <div className="qsi-card-content">
                                    <div className="qsi-card-icon">
                                        {cards[2].icon}
                                    </div>
                                    <CardTag className="qsi-card-title">
                                        {cards[2].title.split("\n").map((line, idx) => (
                                            <span key={idx}>
                                                {line}
                                                {idx < cards[2].title.split("\n").length - 1 && <br />}
                                            </span>
                                        ))}
                                    </CardTag>
                                    <div className="qsi-card-divider" />
                                    <p className="qsi-card-description">
                                        {cards[2].description}
                                    </p>
                                </div>
                                <div className="qsi-card-badge">
                                    {cards[2].badgeLabel}
                                </div>
                            </div>
                        )}
                        {cards[3] && (
                            <div
                                className="qsi-card"
                                style={{ backgroundColor: cards[3].cardColor }}
                            >
                                <div className="qsi-card-number">
                                    {cards[3].number}
                                </div>
                                <div className="qsi-card-content">
                                    <div className="qsi-card-icon">
                                        {cards[3].icon}
                                    </div>
                                    <CardTag className="qsi-card-title">
                                        {cards[3].title.split("\n").map((line, idx) => (
                                            <span key={idx}>
                                                {line}
                                                {idx < cards[3].title.split("\n").length - 1 && <br />}
                                            </span>
                                        ))}
                                    </CardTag>
                                    <div className="qsi-card-divider" />
                                    <p className="qsi-card-description">
                                        {cards[3].description}
                                    </p>
                                </div>
                                <div className="qsi-card-badge">
                                    {cards[3].badgeLabel}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
