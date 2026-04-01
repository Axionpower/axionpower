import React from "react";
import "./AboutApproachSection.css";
import type { AboutApproachData } from "@/lib/queries/about-page";

interface Props {
    data: AboutApproachData;
}

export default function AboutApproachSection({ data }: Props) {
    const HeadingTag = (data.headingTag || 'h2') as React.ElementType;
    const CardTag = (data.cardHeadingTag || 'h3') as React.ElementType;
    return (
        <section className="aa-section">
            {/* Decorative background ellipses */}
            <div className="aa-ellipse-1" aria-hidden="true" />
            <div className="aa-ellipse-2" aria-hidden="true" />

            {/* Label */}
            <div className="aa-label-row">
                <span className="aa-label-bar" />
                <span className="aa-label">{data.label}</span>
            </div>

            {/* Heading */}
            <HeadingTag className="aa-heading" style={{ ...(data.headingColor && { color: data.headingColor }), ...(data.headingFontWeight && { fontWeight: data.headingFontWeight }) }}>{data.heading}</HeadingTag>

            {/* Subtext */}
            <p className="aa-subtext">{data.subtext}</p>

            {/* Divider */}
            <div className="aa-divider" />

            {/* Value cards */}
            <div className="aa-cards">
                {data.cards.map((card) => (
                    <div key={card.number} className="aa-card">
                        <div
                            className="aa-card-accent"
                            style={{ background: card.accentColor }}
                        />
                        <div
                            className="aa-card-dot"
                            style={{ background: card.accentColor }}
                        />
                        <span
                            className="aa-card-number"
                            style={{ color: card.accentColor }}
                        >
                            {card.number}
                        </span>
                        <CardTag className="aa-card-title" style={{ ...(data.cardTitleColor && { color: data.cardTitleColor }) }}>{card.title}</CardTag>
                        <div className="aa-card-divider" />
                        <p className="aa-card-desc">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
