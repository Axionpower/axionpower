import React from "react";
import CmsMedia from "./CmsMedia";
import "./CabinetsEngineeredSection.css";

interface CabinetsEngineeredProps {
    label?: string;
    description?: string;
    image?: string;
    videoUrl?: string;
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    accentColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function CabinetsEngineeredSection({
    label = "Engineered Cabinet Solutions for Critical Power",
    description = "Axion provides factory-assembled battery cabinets that integrate seamlessly with leading UPS platforms. Selection is based on system requirements such as UPS model, runtime, room layout, ventilation, and seismic considerations.\nOur technical team works closely with engineers, contractors, and end users to ensure cabinet solutions meet operational, safety, and compliance standards.",
    image = "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    videoUrl,
    bgColor, labelColor, bodyColor, accentColor, labelFontSize, bodyFontSize,
    marginTopOverlap, borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: CabinetsEngineeredProps) {
    void accentColor; // available for future use
    return (
        <section className="cabinets-eng-section" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="cabinets-eng-container" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="cabinets-eng-text">
                    <div className="cabinets-eng-label" style={{
                        ...(labelColor && { color: labelColor }),
                        ...(labelFontSize && { fontSize: labelFontSize }),
                    }}>{label}</div>
                    <p className="cabinets-eng-desc" style={{
                        ...(bodyColor && { color: bodyColor }),
                        ...(bodyFontSize && { fontSize: bodyFontSize }),
                    }}>
                        {description.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < description.split("\n").length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                </div>
                <div className="cabinets-eng-image">
                    <div className="cabinets-eng-bolt top-left" />
                    <CmsMedia
                        imageUrl={image}
                        videoUrl={videoUrl}
                        alt="Engineer inspecting battery cabinet"
                        width={500}
                        height={400}
                        className="cabinets-eng-img"
                    />
                    <div className="cabinets-eng-bolt bottom-right" />
                </div>
            </div>
        </section>
    );
}
