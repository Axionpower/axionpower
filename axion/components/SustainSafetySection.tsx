import React from "react";
import "./SustainSafetySection.css";
import type { SustainSafetyData } from "@/lib/queries/sustainability";

interface Props {
    data: SustainSafetyData;
}

export default function SustainSafetySection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h2') as React.ElementType;
    const CardTag = (o.cardHeadingTag || 'h3') as React.ElementType;
    const headingLines = data.heading.split("\n");

    return (
        <section
            className="saf-section"
            style={{
                ...(o.bgColor         && { background:    o.bgColor }),
                ...(o.marginTop       && { marginTop:      o.marginTop }),
                ...(o.borderRadiusTop && { borderRadius:  `${o.borderRadiusTop} ${o.borderRadiusTop} 0 0` }),
            }}
        >
            <div
                className="saf-inner"
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
                <div className="saf-left">
                    {/* Label row */}
                    <div className="saf-label-row">
                        <span className="saf-label-bar" />
                        <span
                            className="saf-label"
                            style={o.labelColor ? { color: o.labelColor } : undefined}
                        >
                            {data.label}
                        </span>
                    </div>

                    {/* Heading */}
                    <HeadingTag
                        className="saf-heading"
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
                        className="saf-body"
                        style={{
                            ...(o.bodyColor    && { color:    o.bodyColor }),
                            ...(o.bodyFontSize && { fontSize: o.bodyFontSize }),
                        }}
                    >
                        {data.body}
                    </p>

                    {/* Items */}
                    <div className="saf-items">
                        {data.items.map((item, i) => (
                            <div
                                key={i}
                                className={`saf-item ${i % 2 === 0 ? "saf-item--tinted" : ""}`}
                                style={
                                    i % 2 === 0 && o.itemTintColor
                                        ? { background: o.itemTintColor }
                                        : undefined
                                }
                            >
                                <div className="saf-item-icon-wrap">
                                    <span className="saf-item-icon">{item.icon}</span>
                                </div>
                                <div className="saf-item-text">
                                    <span className="saf-item-title">{item.title}</span>
                                    <span className="saf-item-desc">{item.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certification badges */}
                    <div className="saf-certs">
                        {data.certs.map((cert, i) => (
                            <div
                                key={i}
                                className="saf-cert"
                                style={{
                                    ...(o.certBgColor   && { background: o.certBgColor }),
                                    ...(o.certTextColor && { color:      o.certTextColor }),
                                }}
                            >
                                <span className="saf-cert-abbr">{cert.abbr}</span>
                                <span className="saf-cert-label">{cert.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: image card ── */}
                <div
                    className="saf-right"
                    style={{
                        ...(o.rightColWidth  && { width:  o.rightColWidth,  flexShrink: 0 }),
                        ...(o.rightColHeight && { height: o.rightColHeight }),
                    }}
                >
                    {data.imageUrl ? (
                        <img src={data.imageUrl} alt={data.imageAlt} className="saf-image" />
                    ) : (
                        <div className="saf-image-placeholder" aria-hidden="true" />
                    )}
                    <div className="saf-image-badge">
                        <span className="saf-image-badge-main">{data.imageBadge}</span>
                        <span className="saf-image-badge-sub">{data.imageBadgeSub}</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
