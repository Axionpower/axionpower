import React from "react";
import "./SustainComplianceSection.css";
import type { SustainComplianceData } from "@/lib/queries/sustainability";

interface Props {
    data: SustainComplianceData;
}

export default function SustainComplianceSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h2') as React.ElementType;
    const CardTag = (o.cardHeadingTag || 'h3') as React.ElementType;
    const headingLines = data.heading.split("\n");

    return (
        <section
            className="sc-section"
            style={{
                ...(o.bgColor         && { background:    o.bgColor }),
                ...(o.marginTop       && { marginTop:      o.marginTop }),
                ...(o.borderRadiusTop && { borderRadius:  `${o.borderRadiusTop} ${o.borderRadiusTop} 0 0` }),
                ...(o.minHeight       && { minHeight:      o.minHeight }),
                ...(o.paddingTop      && { paddingTop:      o.paddingTop }),
                ...(o.paddingBottom   && { paddingBottom:   o.paddingBottom }),
                ...(o.paddingLeft     && { paddingLeft:     o.paddingLeft }),
                ...(o.paddingRight    && { paddingRight:    o.paddingRight }),
            }}
        >
            <div className="sc-glow" aria-hidden="true" />

            {/* ── Header ── */}
            <div className="sc-header">
                <div className="sc-label-row">
                    <span className="sc-label-bar" />
                    <span
                        className="sc-label"
                        style={o.labelColor ? { color: o.labelColor } : undefined}
                    >
                        {data.label}
                    </span>
                </div>
                <HeadingTag
                    className="sc-heading"
                    style={{
                        ...(o.headingColor    && { color:    o.headingColor }),
                        ...(o.headingFontSize && { fontSize: o.headingFontSize }),
                    }}
                >
                    {headingLines.map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < headingLines.length - 1 && <br />}
                        </span>
                    ))}
                </HeadingTag>
                <p
                    className="sc-body"
                    style={{
                        ...(o.bodyColor    && { color:    o.bodyColor }),
                        ...(o.bodyFontSize && { fontSize: o.bodyFontSize }),
                    }}
                >
                    {data.body}
                </p>
            </div>

            {/* ── Cards ── */}
            <div
                className="sc-cards"
                style={o.cardsGap ? { gap: o.cardsGap } : undefined}
            >
                {data.cards.map((card, i) => (
                    <div
                        key={i}
                        className="sc-card"
                        style={o.cardBgColor ? { background: o.cardBgColor } : undefined}
                    >
                        <div className="sc-card-accent" style={{ background: card.accentColor }} />
                        <div className="sc-card-top">
                            <div className="sc-card-icon-wrap" style={{ background: card.accentColor }}>
                                <span className="sc-card-icon">{card.icon}</span>
                            </div>
                            <CardTag className="sc-card-title">
                                {card.title.split("\n").map((line, j) => (
                                    <span key={j}>
                                        {line}
                                        {j < card.title.split("\n").length - 1 && <br />}
                                    </span>
                                ))}
                            </CardTag>
                        </div>
                        <div className="sc-card-divider" />
                        <p className="sc-card-desc">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
