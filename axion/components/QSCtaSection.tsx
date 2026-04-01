import React from "react";
import Link from "next/link";
import { QSCtaData } from "@/lib/queries/quality-safety";
import { SectionOverrides } from "@/lib/queries/sustainability";
import "./QSCtaSection.css";

interface QSCtaSectionProps {
  data: QSCtaData;
}

export default function QSCtaSection({ data }: QSCtaSectionProps) {
  const {
    label,
    heading,
    body,
    btnPrimaryLabel,
    btnPrimaryUrl,
    btnGhostLabel,
    btnGhostUrl,
    overrides,
  } = data;
  const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
  const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

  // Build style overrides
  const sectionStyle: React.CSSProperties = {
    backgroundColor: overrides.bgColor || "#1e88e5",
    ...(overrides.marginTop && { marginTop: overrides.marginTop }),
    ...(overrides.borderRadiusTop && { borderRadius: overrides.borderRadiusTop }),
    minHeight: overrides.minHeight || "460px",
  };

  const contentStyle: React.CSSProperties = {
    ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
    ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
    ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
    ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
  };

  const btnPrimaryStyle: React.CSSProperties = {
    backgroundColor: overrides.btnPrimaryBg || "#ffffff",
    color: overrides.btnPrimaryFg || "#1e88e5",
  };

  const btnGhostStyle: React.CSSProperties = {
    color: overrides.btnGhostColor || "#ffffff",
    borderColor: overrides.btnGhostColor || "#ffffff",
  };

  return (
    <section className="qsc-section" style={sectionStyle}>
      <div className="qsc-top-border"></div>
      <div className="qsc-decorative-ellipse"></div>

      <div className="qsc-content" style={contentStyle}>
        {/* Header */}
        <div className="qsc-label-row">
          <div className="qsc-label-bar"></div>
          <span className="qsc-label">{label}</span>
        </div>
        <HeadingTag className="qsc-heading">{heading}</HeadingTag>
        <p className="qsc-body">{body}</p>

        {/* Buttons */}
        <div className="qsc-buttons">
          <Link href={btnPrimaryUrl} className="qsc-btn-primary" style={btnPrimaryStyle}>
            {btnPrimaryLabel}
          </Link>
          <Link href={btnGhostUrl} className="qsc-btn-ghost" style={btnGhostStyle}>
            {btnGhostLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
