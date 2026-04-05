import React from "react";
import CmsMedia from "./CmsMedia";
import "./CabinetsApplicationsSection.css";

interface AppCard {
    title: string;
    description: string;
    image: string;
    videoUrl?: string;
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
        <span className="cab-app-card-arrow">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
        </span>
    );
}

interface CabinetsApplicationsProps {
    label?: string;
    heading?: string;
    cards?: AppCard[];
    headingTag?: string;
    headingColor?: string;
    headingFontSize?: string;
    headingFontWeight?: string;
    headingFontFamily?: string;
    cardHeadingTag?: string;
    labelColor?: string;
    bgColor?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function CabinetsApplicationsSection({
    label = "Typical Applications",
    heading = "Battery cabinets are deployed across critical infrastructure, including",
    cards = DEFAULT_CARDS,
    headingTag,
    headingColor,
    headingFontSize,
    headingFontWeight,
    headingFontFamily,
    cardHeadingTag,
    labelColor,
    bgColor,
    marginTopOverlap,
    borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: CabinetsApplicationsProps) {
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    return (
        <section className="cab-apps" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="cab-apps-inner" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="cab-apps-label">
                    <span className="cab-apps-label-bar" />
                    <span className="cab-apps-label-text" style={{ ...(labelColor && { color: labelColor }) }}>{label}</span>
                </div>

                <HeadingTag className="cab-apps-heading" style={{
                    ...(headingColor && { color: headingColor }),
                    ...(headingFontSize && { fontSize: headingFontSize }),
                    ...(headingFontWeight && { fontWeight: headingFontWeight }),
                    ...(headingFontFamily && { fontFamily: headingFontFamily }),
                }}>
                    {heading}
                </HeadingTag>

                <div className="cab-apps-grid">
                    {cards.map((card, i) => (
                        <div key={i} className="cab-app-card">
                            <div className="cab-app-card-img">
                                <CmsMedia
                                    imageUrl={card.image}
                                    videoUrl={card.videoUrl}
                                    alt={card.title}
                                    fill
                                />
                            </div>
                            <div className="cab-app-card-overlay" />
                            <div className="cab-app-card-content">
                                <CardTag className="cab-app-card-title">{card.title}</CardTag>
                                <div className="cab-app-card-bottom">
                                    <p className="cab-app-card-desc">{card.description}</p>
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
