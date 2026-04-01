import React from "react";
import "./CabinetsWhyChooseSection.css";

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

interface CabinetsWhyChooseProps {
    headingLine1?: string;
    headingHighlight?: string;
    headingLine3?: string;
    cards?: WhyCard[];
    headingTag?: string;
    cardHeadingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    bgColor?: string;
    highlightColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function CabinetsWhyChooseSection({
    headingLine1 = "Why",
    headingHighlight = "Choose",
    headingLine3 = "Us?",
    cards = DEFAULT_CARDS,
    headingTag,
    cardHeadingTag,
    headingColor,
    headingFontSize,
    headingFontWeight,
    bgColor,
    highlightColor,
    marginTopOverlap,
    borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: CabinetsWhyChooseProps) {
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    return (
        <section className="cab-why" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="cab-why-inner" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <HeadingTag className="cab-why-heading" style={{
                    ...(headingColor && { color: headingColor }),
                    ...(headingFontSize && { fontSize: headingFontSize }),
                    ...(headingFontWeight && { fontWeight: headingFontWeight }),
                }}>
                    {headingLine1}
                    <span className="highlight" style={{ ...(highlightColor && { color: highlightColor }) }}>{headingHighlight}</span>
                    {headingLine3}
                </HeadingTag>

                <div className="cab-why-grid">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`cab-why-card cab-why-card--${card.variant}`}
                        >
                            <span className="cab-why-card-num">{card.number}</span>
                            <p className="cab-why-card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
