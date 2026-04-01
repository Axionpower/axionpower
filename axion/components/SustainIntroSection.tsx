import React from "react";
import "./SustainIntroSection.css";
import type { SustainIntroData } from "@/lib/queries/sustainability";

interface Props {
    data: SustainIntroData;
}

export default function SustainIntroSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h2') as React.ElementType;
    const CardTag = (o.cardHeadingTag || 'h3') as React.ElementType;
    const headingLines = data.heading.split("\n");

    return (
        <section
            className="si-section"
            style={{
                ...(o.bgColor         && { background:    o.bgColor }),
                ...(o.marginTop       && { marginTop:      o.marginTop }),
                ...(o.borderRadiusTop && { borderRadius:  `${o.borderRadiusTop} ${o.borderRadiusTop} 0 0` }),
            }}
        >
            {/* Decorative ellipses */}
            <div className="si-ellipse-1" aria-hidden="true" />
            <div className="si-ellipse-2" aria-hidden="true" />

            <div
                className="si-inner"
                style={{
                    ...(o.minHeight     && { minHeight:    o.minHeight }),
                    ...(o.paddingTop    && { paddingTop:    o.paddingTop }),
                    ...(o.paddingBottom && { paddingBottom: o.paddingBottom }),
                    ...(o.paddingLeft   && { paddingLeft:   o.paddingLeft }),
                    ...(o.paddingRight  && { paddingRight:  o.paddingRight }),
                    ...(o.contentGap    && { gap:           o.contentGap }),
                }}
            >
                {/* ── Left: text content ── */}
                <div className="si-left">
                    {/* Label row */}
                    <div className="si-label-row">
                        <span className="si-label-bar" />
                        <span
                            className="si-label"
                            style={o.labelColor ? { color: o.labelColor } : undefined}
                        >
                            {data.label}
                        </span>
                    </div>

                    {/* Heading */}
                    <HeadingTag
                        className="si-heading"
                        style={{
                            ...(o.headingColor    && { color:    o.headingColor }),
                            ...(o.headingFontSize && { fontSize: o.headingFontSize }),
                        }}
                    >
                        {headingLines.map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < headingLines.length - 1 && <br />}
                            </span>
                        ))}
                    </HeadingTag>

                    {/* Body */}
                    <p
                        className="si-body"
                        style={{
                            ...(o.bodyColor    && { color:    o.bodyColor }),
                            ...(o.bodyFontSize && { fontSize: o.bodyFontSize }),
                        }}
                    >
                        {data.body1}
                    </p>
                    <p
                        className="si-body"
                        style={{
                            ...(o.bodyColor    && { color:    o.bodyColor }),
                            ...(o.bodyFontSize && { fontSize: o.bodyFontSize }),
                        }}
                    >
                        {data.body2}
                    </p>

                    {/* Lifecycle steps — numbered stepper */}
                    <div className="si-steps">
                        {data.steps.map((step, i) => (
                            <React.Fragment key={i}>
                                <div className="si-step">
                                    <div className="si-step-circle">
                                        <span className="si-step-num">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <span
                                        className="si-step-label"
                                        style={o.stepLabelColor ? { color: o.stepLabelColor } : undefined}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                                {i < data.steps.length - 1 && (
                                    <div className="si-step-connector" aria-hidden="true" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                </div>

                {/* ── Right: image ── */}
                <div
                    className="si-right"
                    style={{
                        ...(o.rightColWidth     && { width:     o.rightColWidth }),
                        ...(o.rightColMarginTop && { marginTop: o.rightColMarginTop }),
                    }}
                >
                    {data.imageUrl ? (
                        <img src={data.imageUrl} alt={data.imageAlt} className="si-image" />
                    ) : (
                        <div className="si-image-placeholder" aria-hidden="true" />
                    )}
                </div>
            </div>
        </section>
    );
}
