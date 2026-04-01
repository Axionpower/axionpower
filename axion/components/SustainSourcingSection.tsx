import React from "react";
import "./SustainSourcingSection.css";
import type { SustainSourcingData } from "@/lib/queries/sustainability";

interface Props {
    data: SustainSourcingData;
}

export default function SustainSourcingSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h2') as React.ElementType;
    const CardTag = (o.cardHeadingTag || 'h3') as React.ElementType;
    const headingLines = data.heading.split("\n");

    return (
        <section
            className="ss-section"
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
            <div className="ss-ellipse" aria-hidden="true" />

            {/* ── Header ── */}
            <div className="ss-header">
                <div className="ss-label-row">
                    <span className="ss-label-bar" />
                    <span
                        className="ss-label"
                        style={o.labelColor ? { color: o.labelColor } : undefined}
                    >
                        {data.label}
                    </span>
                </div>
                <HeadingTag
                    className="ss-heading"
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
                    className="ss-body"
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
                className="ss-cards"
                style={o.cardsGap ? { gap: o.cardsGap } : undefined}
            >
                {data.cards.map((card, i) => (
                    <div
                        key={i}
                        className="ss-card"
                        style={{ background: card.cardColor }}
                    >
                        <span className="ss-card-number" style={{ color: card.numberColor }}>
                            {card.number}
                        </span>
                        <div className="ss-card-icon-wrap">
                            <span className="ss-card-icon">{card.icon}</span>
                        </div>
                        <CardTag className="ss-card-title">
                            {card.title.split("\n").map((line, j) => (
                                <span key={j}>
                                    {line}
                                    {j < card.title.split("\n").length - 1 && <br />}
                                </span>
                            ))}
                        </CardTag>
                        <div className="ss-card-divider" />
                        <p className="ss-card-desc">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
