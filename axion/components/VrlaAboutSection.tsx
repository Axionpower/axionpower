import React from "react";
import "./VrlaAboutSection.css";

interface VrlaAboutProps {
    label?: string;
    description?: string;
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function VrlaAboutSection({
    label = "VRLA (Valve-Regulated Lead-Acid) Batteries",
    description = "VRLA batteries are sealed, maintenance-free solutions ideal for mission-critical power systems. Axion Critical Power Solutions offers VRLA batteries designed to deliver high performance, long service life, and reliable operation in UPS, DC power plants, and standby applications.",
    bgColor, labelColor, bodyColor, labelFontSize, bodyFontSize,
    marginTopOverlap, borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: VrlaAboutProps) {
    return (
        <section className="vrla-about-section" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="vrla-about-content" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="vrla-about-label" style={{
                    ...(labelColor && { color: labelColor }),
                    ...(labelFontSize && { fontSize: labelFontSize }),
                }}>{label}</div>
                <p className="vrla-about-desc" style={{
                    ...(bodyColor && { color: bodyColor }),
                    ...(bodyFontSize && { fontSize: bodyFontSize }),
                }}>{description}</p>
            </div>
        </section>
    );
}
