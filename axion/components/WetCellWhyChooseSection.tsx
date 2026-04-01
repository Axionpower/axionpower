import React from "react";
import "./WetCellWhyChooseSection.css";

interface WhyCard {
    number: string;
    text: string;
    variant: "white" | "blue";
}

const DEFAULT_CARDS: WhyCard[] = [
    {
        number: "01",
        text: "Expert guidance on cell sizing, rack configuration, and system design for flooded battery installations",
        variant: "white",
    },
    {
        number: "02",
        text: "Solutions engineered to meet IEEE, NFPA, and seismic compliance requirements",
        variant: "blue",
    },
    {
        number: "03",
        text: "Seamless integration with utility switchgear, DC plants, and large-scale UPS infrastructure",
        variant: "white",
    },
    {
        number: "04",
        text: "Comprehensive lifecycle support including preventive maintenance, watering systems, and cell replacement programs",
        variant: "white",
    },
];

interface WetCellWhyChooseProps {
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

export default function WetCellWhyChooseSection({
    headingLine1 = "Why Choose",
    headingHighlight = "Axion",
    headingLine3 = "Wet Cell Batteries",
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
}: WetCellWhyChooseProps) {
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    return (
        <section className="wetcell-why" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="wetcell-why-inner" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <HeadingTag className="wetcell-why-heading" style={{
                    ...(headingColor && { color: headingColor }),
                    ...(headingFontSize && { fontSize: headingFontSize }),
                    ...(headingFontWeight && { fontWeight: headingFontWeight }),
                    ...(headingFontFamily && { fontFamily: headingFontFamily }),
                }}>
                    {headingLine1}
                    <span className="highlight" style={{ ...(highlightColor && { color: highlightColor }) }}>{headingHighlight}</span>
                    {headingLine3}
                </HeadingTag>

                <div className="wetcell-why-grid">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className={`wetcell-why-card wetcell-why-card--${card.variant}`}
                        >
                            <span className="wetcell-why-card-num">{card.number}</span>
                            <p className="wetcell-why-card-text">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
