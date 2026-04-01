import React from "react";
import Image from "next/image";
import "./VrlaApplicationsSection.css";

interface AppCard {
    title: string;
    description: string;
    image: string;
}

const DEFAULT_CARDS: AppCard[] = [
    {
        title: "Data Center UPS Systems",
        description: "Supporting continuous IT operations and redundancy",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Telecommunications",
        description: "Ensuring network continuity and uptime",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Healthcare Facilities",
        description: "Powering life-safety and essential electrical systems",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Commercial & Industrial UPS Installations",
        description: "Reliable backup for critical operations",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
];

function ArrowIcon() {
    return (
        <span className="vrla-app-card-arrow">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
        </span>
    );
}

interface VrlaApplicationsProps {
    label?: string;
    heading?: string;
    cards?: AppCard[];
    headingTag?: string;
    cardHeadingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    labelColor?: string;
    bgColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function VrlaApplicationsSection({
    label = "Typical Applications",
    heading = "VRLA batteries are widely used in critical environments, including",
    cards = DEFAULT_CARDS,
    headingTag,
    cardHeadingTag,
    headingColor,
    headingFontSize,
    headingFontWeight,
    headingFontFamily,
    labelColor,
    bgColor,
    marginTopOverlap,
    borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: VrlaApplicationsProps) {
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    return (
        <section className="vrla-apps" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="vrla-apps-inner" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="vrla-apps-label">
                    <span className="vrla-apps-label-bar" />
                    <span className="vrla-apps-label-text" style={{ ...(labelColor && { color: labelColor }) }}>{label}</span>
                </div>

                <HeadingTag className="vrla-apps-heading" style={{
                    ...(headingColor && { color: headingColor }),
                    ...(headingFontSize && { fontSize: headingFontSize }),
                    ...(headingFontWeight && { fontWeight: headingFontWeight }),
                    ...(headingFontFamily && { fontFamily: headingFontFamily }),
                }}>
                    {heading}
                </HeadingTag>

                <div className="vrla-apps-grid">
                    {cards.map((card, i) => (
                        <div key={i} className="vrla-app-card">
                            <div className="vrla-app-card-img">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="vrla-app-card-overlay" />
                            <div className="vrla-app-card-content">
                                <CardTag className="vrla-app-card-title">{card.title}</CardTag>
                                <div className="vrla-app-card-bottom">
                                    <p className="vrla-app-card-desc">{card.description}</p>
                                    <ArrowIcon />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
