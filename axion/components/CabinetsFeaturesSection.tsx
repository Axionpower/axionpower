import React from "react";
import CmsMedia from "./CmsMedia";
import "./CabinetsFeaturesSection.css";

interface CabinetsFeaturesProps {
    label?: string;
    features?: { text: string; bold?: boolean }[];
    image?: string;
    videoUrl?: string;
    headingTag?: string;
    cardHeadingTag?: string;
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    iconColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

const DEFAULT_FEATURES = [
    { text: "Seismic and non-seismic options", bold: true },
    { text: "Heavy-duty welded steel construction" },
    { text: "Hinged, lockable front doors for security" },
    { text: "Factory-applied, chip-resistant powder-coat finishes" },
    { text: "Integrated cooling and airflow management" },
    { text: "Mobility options such as heavy-duty casters (model dependent)" },
];

export default function CabinetsFeaturesSection({
    label = "Engineered Cabinet Solutions for Critical Power",
    features = DEFAULT_FEATURES,
    image = "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    videoUrl,
    headingTag,
    cardHeadingTag,
    bgColor, labelColor, bodyColor, iconColor, labelFontSize, bodyFontSize,
    marginTopOverlap, borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: CabinetsFeaturesProps) {
    const HeadingTag = (headingTag || 'h2') as React.ElementType;
    const CardTag = (cardHeadingTag || 'h3') as React.ElementType;
    void HeadingTag; void CardTag; void iconColor;
    return (
        <section className="cabinets-feat-section" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="cabinets-feat-container" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="cabinets-feat-text">
                    <div className="cabinets-feat-label" style={{
                        ...(labelColor && { color: labelColor }),
                        ...(labelFontSize && { fontSize: labelFontSize }),
                    }}>{label}</div>
                    <ul className="cabinets-feat-list" style={{ ...(bodyColor && { color: bodyColor }), ...(bodyFontSize && { fontSize: bodyFontSize }) }}>
                        {features.map((item, i) => (
                            <li key={i} className={item.bold ? "bold" : ""}>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cabinets-feat-image">
                    <CmsMedia
                        imageUrl={image}
                        videoUrl={videoUrl}
                        alt="Seismic map visualization"
                        width={420}
                        height={340}
                        className="cabinets-feat-img"
                    />
                    <div className="cabinets-feat-pad bottom-right" />
                </div>
            </div>
        </section>
    );
}
