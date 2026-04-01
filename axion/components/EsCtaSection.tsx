import React from "react";
import Link from "next/link";
import type { EsCtaData } from "@/lib/queries/emergency-support";
import "./EsCtaSection.css";

interface Props {
    data: EsCtaData;
}

export default function EsCtaSection({ data }: Props) {
    const {
        badgeText,
        heading, body,
        btnPrimaryLabel, btnPrimaryUrl,
        btnSecondaryLabel, btnSecondaryUrl,
        btnTertiaryLabel, btnTertiaryUrl,
        emergencyLineLabel, emergencyPhone, emergencyNote,
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

    const btnSecondaryStyle: React.CSSProperties = {
        ...(overrides.btnGhostColor && { color: overrides.btnGhostColor, borderColor: overrides.btnGhostColor }),
    };

    return (
        <section className="esct-section" style={sectionStyle}>
            <div className="esct-top-border"></div>
            <div className="esct-decorative-ellipse"></div>

            <div className="esct-content" style={contentStyle}>
                {badgeText && (
                    <div className="esct-badge">
                        <span className="esct-badge-dot"></span>
                        {badgeText}
                    </div>
                )}

                <div className="esct-label-row">
                    <div className="esct-label-bar"></div>
                    <span className="esct-label">Emergency Support</span>
                </div>
                <HeadingTag className="esct-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>
                <p className="esct-body" style={{
                    ...(overrides.bodyColor && { color: overrides.bodyColor }),
                    ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
                }}>{body}</p>

                <div className="esct-buttons">
                    <Link href={btnPrimaryUrl} className="esct-btn-primary" style={btnPrimaryStyle}>
                        {btnPrimaryLabel}
                    </Link>
                    <Link href={btnSecondaryUrl} className="esct-btn-secondary" style={btnSecondaryStyle}>
                        {btnSecondaryLabel}
                    </Link>
                    <Link href={btnTertiaryUrl} className="esct-btn-tertiary">
                        {btnTertiaryLabel}
                    </Link>
                </div>

                {emergencyPhone && (
                    <div className="esct-emergency-line">
                        <div className="esct-line-left">
                            <span className="esct-line-dot"></span>
                            <div className="esct-line-info">
                                <span className="esct-line-label">{emergencyLineLabel}</span>
                                <span className="esct-line-phone">{emergencyPhone}</span>
                            </div>
                        </div>
                        {emergencyNote && <span className="esct-line-note">{emergencyNote}</span>}
                    </div>
                )}
            </div>
        </section>
    );
}
