import React from "react";
import Link from "next/link";
import type { MtCtaData } from "@/lib/queries/maintenance";
import "./MtCtaSection.css";

interface Props {
    data: MtCtaData;
}

export default function MtCtaSection({ data }: Props) {
    const {
        label, heading, body,
        btnPrimaryLabel, btnPrimaryUrl,
        btnSecondaryLabel, btnSecondaryUrl,
        btnTertiaryLabel, btnTertiaryUrl,
        overrides,
    } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

    const sectionStyle: React.CSSProperties = {
        ...(overrides.bgColor && { backgroundColor: overrides.bgColor }),
        ...(overrides.marginTop && { marginTop: overrides.marginTop }),
        ...(overrides.borderRadiusTop && { borderRadius: `${overrides.borderRadiusTop} ${overrides.borderRadiusTop} 0 0` }),
        ...(overrides.minHeight && { minHeight: overrides.minHeight }),
    };

    const contentStyle: React.CSSProperties = {
        ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
        ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
        ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
        ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
    };

    const btnPrimaryStyle: React.CSSProperties = {
        ...(overrides.btnPrimaryBg && { backgroundColor: overrides.btnPrimaryBg }),
        ...(overrides.btnPrimaryFg && { color: overrides.btnPrimaryFg }),
    };

    const btnGhostStyle: React.CSSProperties = {
        ...(overrides.btnGhostColor && { color: overrides.btnGhostColor, borderColor: overrides.btnGhostColor }),
    };

    return (
        <section className="mtc-section" style={sectionStyle}>
            <div className="mtc-top-border"></div>
            <div className="mtc-decorative-ellipse"></div>

            <div className="mtc-content" style={contentStyle}>
                <div className="mtc-label-row">
                    <div className="mtc-label-bar"></div>
                    <span className="mtc-label">{label}</span>
                </div>
                <HeadingTag className="mtc-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>
                <p className="mtc-body" style={{
                    ...(overrides.bodyColor && { color: overrides.bodyColor }),
                    ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
                }}>{body}</p>

                <div className="mtc-buttons">
                    <Link href={btnPrimaryUrl} className="mtc-btn-primary" style={btnPrimaryStyle}>
                        {btnPrimaryLabel}
                    </Link>
                    <Link href={btnSecondaryUrl} className="mtc-btn-ghost" style={btnGhostStyle}>
                        {btnSecondaryLabel}
                    </Link>
                    <Link href={btnTertiaryUrl} className="mtc-btn-tertiary">
                        {btnTertiaryLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}
