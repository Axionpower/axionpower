import React from "react";
import "./EsBenefitsSection.css";
import type { EsBenefitsData } from "@/lib/queries/emergency-support";

interface Props {
    data: EsBenefitsData;
}

export default function EsBenefitsSection({ data }: Props) {
    const { label, heading, benefits, industries, overrides } = data;
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

    return (
        <section className="esb-section" style={sectionStyle}>
            <div className="esb-inner" style={innerStyle}>
                <div className="esb-label-row">
                    <div className="esb-label-bar" style={overrides.labelColor ? { backgroundColor: overrides.labelColor } : undefined}></div>
                    <span className="esb-label" style={overrides.labelColor ? { color: overrides.labelColor } : undefined}>{label}</span>
                </div>
                <HeadingTag className="esb-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>

                <div className="esb-content">
                    <div className="esb-left">
                        <div className="esb-benefits">
                            {benefits.map((b, i) => {
                                const accentClasses = ["accent-red", "", "accent-green", "accent-orange", ""];
                                const accent = accentClasses[i % accentClasses.length];
                                return (
                                    <div key={i} className={`esb-benefit${accent ? ` ${accent}` : ""}`} style={overrides.cardBgColor ? { backgroundColor: overrides.cardBgColor } : undefined}>
                                        <div className="esb-benefit-icon-wrap">
                                            <span className="esb-benefit-icon">{b.icon}</span>
                                        </div>
                                        <div className="esb-benefit-text">
                                            <span className="esb-benefit-title">{b.title}</span>
                                            <span className="esb-benefit-desc">{b.description}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="esb-right">
                        <div className="esb-industries-panel">
                            <div className="esb-industries-title">Industries Supported</div>
                            <div className="esb-industries-subtitle">Emergency support available for:</div>
                            <div className="esb-industries">
                                {industries.map((ind, i) => (
                                    <div key={i} className="esb-industry">
                                        <span className="esb-industry-icon">{ind.icon}</span>
                                        <div className="esb-industry-text">
                                            <span className="esb-industry-title">{ind.title}</span>
                                            <span className="esb-industry-subtitle">{ind.subtitle}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
