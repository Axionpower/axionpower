import React from "react";
import Image from "next/image";
import "./CabinetsApproachSection.css";

interface ApproachItem {
    title: string;
    image: string;
}

const DEFAULT_ITEMS: ApproachItem[] = [
    {
        title: "Cabinet selection and\nconfiguration guidance",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Coordination with\nbattery and UPS\nrequirements",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Layout and space\nplanning assistance",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
    {
        title: "Compliance and safety\nconsiderations",
        image: "https://violet-tarsier-674356.hostingersite.com/wp-content/uploads/2026/03/vrla-batteries.png",
    },
];

interface CabinetsApproachProps {
    label?: string;
    description?: string;
    items?: ApproachItem[];
    bgColor?: string;
    labelColor?: string;
    bodyColor?: string;
    stepBgColor?: string;
    stepTextColor?: string;
    labelFontSize?: string;
    bodyFontSize?: string;
    marginTopOverlap?: string;
    borderRadiusTop?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

export default function CabinetsApproachSection({
    label = "Axion's Approach",
    description = "Axion takes a system-level approach to battery cabinets, ensuring proper alignment between batteries, cabinets, UPS systems, and site conditions.\nSupport includes",
    items = DEFAULT_ITEMS,
    bgColor, labelColor, bodyColor, stepBgColor, stepTextColor, labelFontSize, bodyFontSize,
    marginTopOverlap, borderRadiusTop,
    paddingTop, paddingBottom, paddingLeft, paddingRight,
}: CabinetsApproachProps) {
    const steps = ["01", "02", "03", "04"];
    return (
        <section className="cab-approach" style={{
            ...(bgColor && { backgroundColor: bgColor }),
            ...(marginTopOverlap && { marginTop: `-${marginTopOverlap}` }),
            ...(borderRadiusTop && { borderRadius: `${borderRadiusTop} ${borderRadiusTop} 0 0` }),
        }}>
            <div className="cab-approach-inner" style={{
                ...(paddingTop && { paddingTop }),
                ...(paddingBottom && { paddingBottom }),
                ...(paddingLeft && { paddingLeft }),
                ...(paddingRight && { paddingRight }),
            }}>
                <div className="cab-approach-label" style={{
                    ...(labelColor && { color: labelColor }),
                    ...(labelFontSize && { fontSize: labelFontSize }),
                }}>{label}</div>
                <p className="cab-approach-desc" style={{
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

                {/* Desktop timeline */}
                <div className="cab-approach-timeline">
                    <div className="cab-approach-line" />
                    {items.map((item, i) => (
                        <div key={i} className="cab-approach-item">
                            <div className="cab-approach-img-wrap">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={160}
                                    height={120}
                                    className="cab-approach-img"
                                />
                            </div>
                            <p className="cab-approach-item-title" style={{ ...(bodyColor && { color: bodyColor }) }}>
                                {item.title.split("\n").map((line, j) => (
                                    <span key={j}>
                                        {line}
                                        {j < item.title.split("\n").length - 1 && <br />}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile cards */}
                <div className="cab-approach-mobile-cards">
                    {items.map((item, i) => (
                        <div key={i} className="cab-approach-mobile-card">
                            <div className="cab-approach-mobile-img-wrap">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={90}
                                    height={70}
                                    className="cab-approach-mobile-img"
                                />
                            </div>
                            <div className="cab-approach-mobile-text">
                                <span
                                    className="cab-approach-mobile-step"
                                    style={{
                                        ...(stepBgColor && { backgroundColor: stepBgColor }),
                                        ...(stepTextColor && { color: stepTextColor }),
                                    }}
                                >{steps[i] || `0${i + 1}`}</span>
                                <p className="cab-approach-mobile-title" style={{ ...(bodyColor && { color: bodyColor }) }}>
                                    {item.title.split("\n").join(" ")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
