import React from "react";
import "./SustainRecyclingSection.css";
import type { SustainRecyclingData } from "@/lib/queries/sustainability";

interface Props {
    data: SustainRecyclingData;
}

export default function SustainRecyclingSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h2') as React.ElementType;
    const CardTag = (o.cardHeadingTag || 'h3') as React.ElementType;
    const headingLines = data.heading.split("\n");
    const quoteLines = data.quote.split("\n");

    return (
        <section
            className="sr-section"
            style={{
                ...(o.bgColor         && { background:   o.bgColor }),
                ...(o.marginTop       && { marginTop:     o.marginTop }),
                ...(o.borderRadiusTop && { borderRadius: `${o.borderRadiusTop} ${o.borderRadiusTop} 0 0` }),
            }}
        >
            <div
                className="sr-inner"
                style={{
                    ...(o.minHeight     && { minHeight:    o.minHeight }),
                    ...(o.paddingTop    && { paddingTop:    o.paddingTop }),
                    ...(o.paddingBottom && { paddingBottom: o.paddingBottom }),
                    ...(o.paddingLeft   && { paddingLeft:   o.paddingLeft }),
                    ...(o.paddingRight  && { paddingRight:  o.paddingRight }),
                    ...(o.contentGap    && { gap:           o.contentGap }),
                }}
            >
                {/* ── Left: dark image card ── */}
                <div
                    className="sr-left"
                    style={o.leftColWidth ? { width: o.leftColWidth, flexShrink: 0 } : undefined}
                >
                    {data.imageUrl ? (
                        <img src={data.imageUrl} alt={data.imageAlt} className="sr-image" />
                    ) : (
                        <div className="sr-image-placeholder" aria-hidden="true" />
                    )}
                    {/* Quote overlay at bottom */}
                    <div
                        className="sr-quote-bar"
                        style={o.quoteBarColor ? { background: o.quoteBarColor } : undefined}
                    >
                        <p
                            className="sr-quote-text"
                            style={o.quoteTextColor ? { color: o.quoteTextColor } : undefined}
                        >
                            {quoteLines.map((line, i) => (
                                <span key={i}>
                                    {line}
                                    {i < quoteLines.length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>

                {/* ── Right: content ── */}
                <div className="sr-right">
                    {/* Label row */}
                    <div className="sr-label-row">
                        <span className="sr-label-bar" />
                        <span
                            className="sr-label"
                            style={o.labelColor ? { color: o.labelColor } : undefined}
                        >
                            {data.label}
                        </span>
                    </div>

                    {/* Heading */}
                    <HeadingTag
                        className="sr-heading"
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
                        className="sr-body"
                        style={{
                            ...(o.bodyColor    && { color:    o.bodyColor }),
                            ...(o.bodyFontSize && { fontSize: o.bodyFontSize }),
                        }}
                    >
                        {data.body}
                    </p>

                    {/* Items list */}
                    <div className="sr-items">
                        {data.items.map((item, i) => (
                            <div
                                key={i}
                                className="sr-item"
                                style={o.itemBgColor ? { background: o.itemBgColor } : undefined}
                            >
                                <div
                                    className="sr-item-icon-wrap"
                                    style={o.itemIconColor ? { background: o.itemIconColor } : undefined}
                                >
                                    <span className="sr-item-icon">{item.icon}</span>
                                </div>
                                <div className="sr-item-text">
                                    <span className="sr-item-title">{item.title}</span>
                                    <span className="sr-item-desc">{item.description}</span>
                                </div>
                                <div className="sr-item-check">
                                    <span
                                        className="sr-check-mark"
                                        style={o.itemIconColor ? { color: o.itemIconColor } : undefined}
                                    >
                                        ✓
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
