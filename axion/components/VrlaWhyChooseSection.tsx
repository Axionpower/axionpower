import React from "react";
import "./VrlaWhyChooseSection.css";

interface WhyCard {
    number: string;
    text: string;
    variant: "white" | "blue";
}

const DEFAULT_CARDS: WhyCard[] = [
    {
        number: "01",
        text: "Technical consultation for sizing, specification, and system integration",
        variant: "white",
    },
    {
        number: "02",
        text: "Solutions aligned with industry standards and compliance requirements",
        variant: "blue",
    },
    {
        number: "03",
        text: "Integration with UPS and DC systems for mission-critical operations",
        variant: "white",
    },
    {
        number: "04",
        text: "Full lifecycle support, including preventive maintenance and replacement planning",
        variant: "white",
    },
];

interface VrlaWhyChooseProps {
    headingLine1?: string;
    headingHighlight?: string;
    headingLine3?: string;
    cards?: WhyCard[];
    headingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    cardHeadingTag?: string;
    bgColor?: string;
    highlightColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function VrlaWhyChooseSection({
    headingLine1 = "Why Choose",
    headingHighlight = "Axion",
    headingLine3 = "VRLA Batteries",
    cards = DEFAULT_CARDS,
    headingTag,
    headingColor,
    headingFontSize,
    headingFontWeight,
    headingFontFamily,
    cardHeadingTag,
    bgColor,
    highlightColor,
    marginTopOverlap,
    borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: VrlaWhyChooseProps) {
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    return (
        <section className="vrla-why" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="vrla-why-inner" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <HeadingTag className="vrla-why-heading" style={{
                    ...(headingColor && { color: headingColor }),
                    ...(headingFontSize && { fontSize: headingFontSize }),
                    ...(headingFontWeight && { fontWeight: headingFontWeight }),
                    ...(headingFontFamily && { fontFamily: headingFontFamily }),
                }}>
                    {headingLine1}
                    <span className="highlight" style={{ ...(highlightColor && { color: highlightColor }) }}>{headingHighlight}</span>
                    {headingLine3}
                </HeadingTag>

                <div className="vrla-why-grid">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`vrla-why-card vrla-why-card--${card.variant}`}
                        >
                            <span className="vrla-why-card-num">{card.number}</span>
                            <p className="vrla-why-card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
