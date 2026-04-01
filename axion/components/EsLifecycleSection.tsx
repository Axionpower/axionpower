import React from "react";
import "./EsLifecycleSection.css";
import type { EsLifecycleData } from "@/lib/queries/emergency-support";

interface Props {
    data: EsLifecycleData;
}

export default function EsLifecycleSection({ data }: Props) {
    const { label, heading, body, steps, activeStepIndex, overrides } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;

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

    return (
        <section className="esl-section" style={sectionStyle}>
            <div className="esl-inner" style={innerStyle}>
                <div className="esl-label-row">
                    <div className="esl-label-bar" style={overrides.labelColor ? { backgroundColor: overrides.labelColor } : undefined}></div>
                    <span className="esl-label" style={overrides.labelColor ? { color: overrides.labelColor } : undefined}>{label}</span>
                </div>
                <HeadingTag className="esl-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>
                <p className="esl-body" style={{
                    ...(overrides.bodyColor && { color: overrides.bodyColor }),
                    ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
                }}>{body}</p>

                <div className="esl-steps-container">
                    <div className="esl-connector-line"></div>
                    {steps.map((step, i) => {
                        const isActive = i === activeStepIndex;
                        const accent = overrides.accentColor;
                        return (
                            <div key={i} className={`esl-step ${isActive ? "active" : ""}`}>
                                <div
                                    className="esl-step-circle"
                                    style={isActive && accent ? { backgroundColor: accent } : undefined}
                                >
                                    <span className="esl-step-icon">{step.icon}</span>
                                </div>
                                <div className="esl-step-text">
                                    <span
                                        className="esl-step-title"
                                        style={isActive && accent ? { color: accent } : undefined}
                                    >{step.title}</span>
                                    {isActive && (
                                        <span
                                            className="esl-you-are-here"
                                            style={accent ? { backgroundColor: accent } : undefined}
                                        >
                                            {data.activeLabel || "You are here"}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
