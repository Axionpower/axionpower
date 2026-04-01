import React from "react";
import Image from "next/image";
import "./WetCellApplicationsSection.css";

interface AppCard {
    title: string;
    description: string;
    image: string;
}

const DEFAULT_CARDS: AppCard[] = [
    {
        title: "Utility Substations",
        description: "Reliable switchgear and protection system backup power",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Power Generation Facilities",
        description: "Battery backup for turbine control and plant auxiliaries",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Industrial DC Systems",
        description: "Continuous power for process control and safety systems",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Long-Duration Backup Systems",
        description: "Extended runtime for critical infrastructure and data centres",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
];

function ArrowIcon() {
    return (
        <span className="wetcell-app-card-arrow">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
        </span>
    );
}

interface WetCellApplicationsProps {
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

export default function WetCellApplicationsSection({
    label = "Typical Applications",
    heading = "Wet cell batteries deliver proven performance in high-demand environments",
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
}: WetCellApplicationsProps) {
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    return (
        <section className="wetcell-apps" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="wetcell-apps-inner" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="wetcell-apps-label">
                    <span className="wetcell-apps-label-bar" />
                    <span className="wetcell-apps-label-text" style={{ ...(labelColor && { color: labelColor }) }}>{label}</span>
                </div>

                <HeadingTag className="wetcell-apps-heading" style={{
                    ...(headingColor && { color: headingColor }),
                    ...(headingFontSize && { fontSize: headingFontSize }),
                    ...(headingFontWeight && { fontWeight: headingFontWeight }),
                    ...(headingFontFamily && { fontFamily: headingFontFamily }),
                }}>
                    {heading}
                </HeadingTag>

                <div className="wetcell-apps-grid">
                    {cards.map((card, i) => (
                        <div key={i} className="wetcell-app-card">
                            <div className="wetcell-app-card-img">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="wetcell-app-card-overlay" />
                            <div className="wetcell-app-card-content">
                                <CardTag className="wetcell-app-card-title">{card.title}</CardTag>
                                <div className="wetcell-app-card-bottom">
                                    <p className="wetcell-app-card-desc">{card.description}</p>
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
