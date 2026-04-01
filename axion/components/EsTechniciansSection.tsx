import React from "react";
import "./EsTechniciansSection.css";
import type { EsTechData } from "@/lib/queries/emergency-support";

interface Props {
    data: EsTechData;
}

export default function EsTechniciansSection({ data }: Props) {
    const { label, heading, body, steps, expertise, overrides } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

    const sectionStyle: React.CSSProperties = {
        ...(overrides.bgColor && { backgroundColor: overrides.bgColor }),
        ...(overrides.marginTop && { marginTop: overrides.marginTop }),
        ...(overrides.borderRadiusTop && { borderRadius: `${overrides.borderRadiusTop} ${overrides.borderRadiusTop} 0 0` }),
    };

    const innerStyle: React.CSSProperties = {
        ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
        ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
        ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
        ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
    };

    const headingStyle: React.CSSProperties = {
        ...(overrides.headingColor && { color: overrides.headingColor }),
        ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
    };

    const bodyStyle: React.CSSProperties = {
        ...(overrides.bodyColor && { color: overrides.bodyColor }),
        ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
    };

    const labelStyle: React.CSSProperties = {
        ...(overrides.labelColor && { color: overrides.labelColor }),
    };

    const labelBarStyle: React.CSSProperties = {
        ...(overrides.labelColor && { backgroundColor: overrides.labelColor }),
    };

    const contentStyle: React.CSSProperties = {
        ...(overrides.contentGap && { gap: overrides.contentGap }),
    };

    const leftStyle: React.CSSProperties = {
        ...(overrides.leftColWidth && { width: overrides.leftColWidth }),
    };

    const rightStyle: React.CSSProperties = {
        ...(overrides.rightColWidth && { width: overrides.rightColWidth }),
    };

    return (
        <section className="estc-section" style={sectionStyle}>
            <div className="estc-ellipse"></div>
            <div className="estc-inner" style={innerStyle}>
                <div className="estc-label-row">
                    <div className="estc-label-bar" style={Object.keys(labelBarStyle).length ? labelBarStyle : undefined}></div>
                    <span className="estc-label" style={Object.keys(labelStyle).length ? labelStyle : undefined}>{label}</span>
                </div>
                <HeadingTag className="estc-heading" style={Object.keys(headingStyle).length ? headingStyle : undefined}>{heading}</HeadingTag>
                <p className="estc-body" style={Object.keys(bodyStyle).length ? bodyStyle : undefined}>{body}</p>

                <div className="estc-content" style={contentStyle}>
                    <div className="estc-left" style={leftStyle}>
                        <div className="estc-timeline-track">
                            <div className="estc-timeline-progress"></div>
                        </div>
                        <div className="estc-steps">
                            {steps.map((step, i) => {
                            const variants = ["critical", "standard", "priority"];
                            const variant = variants[i % variants.length];
                            return (
                                <div key={i} className="estc-step">
                                    <div className={`estc-step-circle ${variant}`}>
                                        <div className="estc-step-dot"></div>
                                    </div>
                                    <div className={`estc-step-card ${variant}`}>
                                        <div className="estc-step-card-header">
                                            <span className="estc-step-card-icon">{step.icon}</span>
                                            <CardTag className="estc-step-card-title">{step.title}</CardTag>
                                            <div className={`estc-time-badge ${variant}`}>{step.timeLabel}</div>
                                        </div>
                                        <div className="estc-step-card-body">
                                            <div className="estc-step-card-number" style={{ color: step.numberColor }}>{step.number}</div>
                                            <p className="estc-step-card-desc">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    </div>

                    <div className="estc-right" style={rightStyle}>
                        {expertise.map((exp, i) => {
                            const expertiseVariants = ["green", "blue", "yellow"];
                            const expVariant = expertiseVariants[i % expertiseVariants.length];
                            return (
                                <div key={i} className="estc-expertise-card">
                                    <div className="estc-expertise-card-header">
                                        <div className={`estc-expertise-icon-wrap ${expVariant}`}>
                                            <span className="estc-expertise-icon">{exp.icon}</span>
                                        </div>
                                        <CardTag className="estc-expertise-title">{exp.title}</CardTag>
                                    </div>
                                    <p className="estc-expertise-desc">{exp.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
