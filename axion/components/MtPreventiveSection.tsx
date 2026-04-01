import React from "react";
import "./MtPreventiveSection.css";
import type { MtPreventiveData } from "@/lib/queries/maintenance";

interface Props {
    data: MtPreventiveData;
}

export default function MtPreventiveSection({ data }: Props) {
    const { label, heading, body, cards, imageUrl, imageAlt, statValue, statLabel, statSub, overrides } = data;
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

    const headingStyle: React.CSSProperties = {
        ...(overrides.headingColor && { color: overrides.headingColor }),
        ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
    };

    const bodyStyle: React.CSSProperties = {
        ...(overrides.bodyColor && { color: overrides.bodyColor }),
        ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
    };

    const labelStyle: React.CSSProperties = {
        ...(overrides.labelColor && { color: overrides.labelColor }),
    };

    const labelBarStyle: React.CSSProperties = {
        ...(overrides.labelColor && { backgroundColor: overrides.labelColor }),
    };

    return (
        <section className="mtp-section" style={sectionStyle}>
            <div className="mtp-inner" style={innerStyle}>
                <div className="mtp-label-row">
                    <div className="mtp-label-bar" style={Object.keys(labelBarStyle).length ? labelBarStyle : undefined}></div>
                    <span className="mtp-label" style={Object.keys(labelStyle).length ? labelStyle : undefined}>{label}</span>
                </div>
                <HeadingTag className="mtp-heading" style={Object.keys(headingStyle).length ? headingStyle : undefined}>{heading}</HeadingTag>
                <p className="mtp-body" style={Object.keys(bodyStyle).length ? bodyStyle : undefined}>{body}</p>

                <div className="mtp-content" style={overrides.contentGap ? { gap: overrides.contentGap } : undefined}>
                    <div className="mtp-left">
                        <div className="mtp-cards" style={overrides.cardsGap ? { gap: overrides.cardsGap } : undefined}>
                            {cards.map((card, i) => (
                                <div key={i} className="mtp-card" style={overrides.cardBgColor ? { backgroundColor: overrides.cardBgColor } : undefined}>
                                    <div className="mtp-card-header">
                                        <span className="mtp-card-number" style={{ color: card.numberColor }}>{card.number}</span>
                                        <span className="mtp-card-icon">{card.icon}</span>
                                    </div>
                                    <CardTag className="mtp-card-title">{card.title}</CardTag>
                                    <p className="mtp-card-desc">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mtp-right" style={overrides.rightColWidth ? { width: overrides.rightColWidth } : undefined}>
                        <div className="mtp-image-card">
                            {imageUrl && <img src={imageUrl} alt={imageAlt} />}
                            <div className="mtp-stat-badge">
                                <div className="mtp-stat-value">{statValue}</div>
                                <div className="mtp-stat-label">{statLabel}</div>
                                <div className="mtp-stat-sub">{statSub}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
