import React from "react";
import CmsMedia from "./CmsMedia";
import "./CabinetsKeyBenefitsSection.css";

interface BenefitCard {
    title: string;
    description: string;
    image: string;
    videoUrl?: string;
}

const DEFAULT_CARDS: BenefitCard[] = [
    {
        title: "Seismic-Rated Construction",
        description: "Engineered to withstand Zone 4 seismic requirements",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Integrated Ventilation",
        description: "Built-in thermal management for optimal battery life",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Code-Compliant Designs",
        description: "Meets UL, NFPA, and IEEE standards out of the box",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Configurable Layouts",
        description: "Adaptable for VRLA, flooded, and lithium-ion systems",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
];

interface CabinetsKeyBenefitsProps {
    heading?: string;
    cards?: BenefitCard[];
    headingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    cardHeadingTag?: string;
    bgColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function CabinetsKeyBenefitsSection({
    heading = "Key Benefits",
    cards = DEFAULT_CARDS,
    headingTag,
    headingColor,
    headingFontSize,
    headingFontWeight,
    headingFontFamily,
    cardHeadingTag,
    bgColor,
    marginTopOverlap,
    borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: CabinetsKeyBenefitsProps) {
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    return (
        <section className="cabinets-benefits" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
            ...(paddingTop && { paddingTop }),
            ...(paddingBottom && { paddingBottom }),
            ...(paddingLeft && { paddingLeft }),
            ...(paddingRight && { paddingRight }),
        }}>
            <HeadingTag className="cabinets-benefits-heading" style={{
                ...(headingColor && { color: headingColor }),
                ...(headingFontSize && { fontSize: headingFontSize }),
                ...(headingFontWeight && { fontWeight: headingFontWeight }),
                ...(headingFontFamily && { fontFamily: headingFontFamily }),
            }}>
                {heading}
            </HeadingTag>

            <div className="cabinets-benefits-grid">
                {cards.map((card, i) => (
                    <div key={i} className="cabinets-benefit-card">
                        <div className="cabinets-benefit-card-img">
                            <CmsMedia
                                imageUrl={card.image}
                                videoUrl={card.videoUrl}
                                alt={card.title}
                                fill
                            />
                        </div>
                        <div className="cabinets-benefit-card-body">
                            <CardTag className="cabinets-benefit-card-title">{card.title}</CardTag>
                            <p className="cabinets-benefit-card-desc">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
