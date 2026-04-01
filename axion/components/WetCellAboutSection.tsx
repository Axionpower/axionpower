import React from "react";
import "./WetCellAboutSection.css";

interface WetCellAboutProps {
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

export default function WetCellAboutSection({
    label = "Wet Cell (Flooded) Lead-Acid Batteries",
    description = "Wet Cell (Flooded) batteries provide reliable, long-lasting power for mission-critical DC systems. Axion Critical Power Solutions supplies flooded battery solutions for industrial, utility, and substation applications where longevity, durability, and deep-cycle performance are essential. We also support clients with technical consultation, system sizing, and lifecycle management.",
    bgColor, labelColor, bodyColor, labelFontSize, bodyFontSize,
    marginTopOverlap, borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: WetCellAboutProps) {
    return (
        <section className="wetcell-about-section" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="wetcell-about-content" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="wetcell-about-label" style={{
                    ...(labelColor && { color: labelColor }),
                    ...(labelFontSize && { fontSize: labelFontSize }),
                }}>{label}</div>
                <p className="wetcell-about-desc" style={{
                    ...(bodyColor && { color: bodyColor }),
                    ...(bodyFontSize && { fontSize: bodyFontSize }),
                }}>{description}</p>
            </div>
        </section>
    );
}
