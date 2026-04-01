import React from "react";
import "./MtIntroSection.css";
import type { MtIntroData } from "@/lib/queries/maintenance";
import { SectionOverrides } from "@/lib/queries/sustainability";

interface MtIntroSectionProps {
    data: MtIntroData;
}

export default function MtIntroSection({ data }: MtIntroSectionProps) {
    const { label, heading, body, cards, overrides } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

    const sectionStyle: React.CSSProperties = {
        ...(overrides.bgColor && { backgroundColor: overrides.bgColor }),
        ...(overrides.marginTop && { marginTop: overrides.marginTop }),
        ...(overrides.borderRadiusTop && { borderRadius: `${overrides.borderRadiusTop} ${overrides.borderRadiusTop} 0 0` }),
    };

    const innerStyle: React.CSSProperties = {
        ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
        ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
        ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
        ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
    };

    return (
        <section className="mti-section" style={sectionStyle}>
            <div className="mti-inner" style={innerStyle}>
                <div className="mti-label-row">
                    <div className="mti-label-bar" style={overrides.labelColor ? { backgroundColor: overrides.labelColor } : undefined}></div>
                    <span className="mti-label" style={overrides.labelColor ? { color: overrides.labelColor } : undefined}>{label}</span>
                </div>
                <HeadingTag className="mti-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>
                <p className="mti-body" style={{
                    ...(overrides.bodyColor && { color: overrides.bodyColor }),
                    ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
                }}>{body}</p>

                <div className="mti-cards">
                    {cards.map((card, i) => (
                        <div key={i} className="mti-card" style={{ backgroundColor: card.cardColor }}>
                            <div>
                                <div className="mti-card-icon">{card.icon}</div>
                                <div className="mti-card-title">{card.title}</div>
                            </div>
                            <p className="mti-card-desc">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
