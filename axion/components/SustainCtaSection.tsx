import React from "react";
import Link from "next/link";
import "./SustainCtaSection.css";
import type { SustainCtaData } from "@/lib/queries/sustainability";

interface Props {
    data: SustainCtaData;
}

export default function SustainCtaSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h2') as React.ElementType;
    const CardTag = (o.cardHeadingTag || 'h3') as React.ElementType;
    const headingLines = data.heading.split("\n");

    return (
        <section
            className="scta-section"
            style={{
                ...(o.bgColor         && { background:    o.bgColor }),
                ...(o.marginTop       && { marginTop:      o.marginTop }),
                ...(o.borderRadiusTop && { borderRadius:  `${o.borderRadiusTop} ${o.borderRadiusTop} 0 0` }),
                ...(o.minHeight       && { minHeight:      o.minHeight }),
            }}
        >
            <div className="scta-ellipse" aria-hidden="true" />
            <div className="scta-top-border" aria-hidden="true" />

            <div
                className="scta-content"
                style={{
                    ...(o.paddingTop    && { paddingTop:    o.paddingTop }),
                    ...(o.paddingBottom && { paddingBottom: o.paddingBottom }),
                    ...(o.paddingLeft   && { paddingLeft:   o.paddingLeft }),
                    ...(o.paddingRight  && { paddingRight:  o.paddingRight }),
                }}
            >
                {/* Label */}
                <div className="scta-label-row">
                    <span className="scta-label-bar" />
                    <span
                        className="scta-label"
                        style={o.labelColor ? { color: o.labelColor } : undefined}
                    >
                        {data.label}
                    </span>
                </div>

                {/* Heading */}
                <HeadingTag
                    className="scta-heading"
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
                    className="scta-body"
                    style={{
                        ...(o.bodyColor    && { color:    o.bodyColor }),
                        ...(o.bodyFontSize && { fontSize: o.bodyFontSize }),
                    }}
                >
                    {data.body}
                </p>

                {/* Buttons */}
                <div className="scta-buttons">
                    <Link
                        href={data.btnPrimaryUrl}
                        className="scta-btn-primary"
                        style={{
                            ...(o.btnPrimaryBg && { background: o.btnPrimaryBg }),
                            ...(o.btnPrimaryFg && { color:      o.btnPrimaryFg }),
                        }}
                    >
                        {data.btnPrimaryLabel}
                    </Link>
                    <Link
                        href={data.btnGhostUrl}
                        className="scta-btn-ghost"
                        style={o.btnGhostColor ? { color: o.btnGhostColor, borderColor: o.btnGhostColor } : undefined}
                    >
                        {data.btnGhostLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}
