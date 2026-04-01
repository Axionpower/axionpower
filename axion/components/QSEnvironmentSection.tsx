import React from "react";
import { QSEnvironmentData } from "@/lib/queries/quality-safety";
import { SectionOverrides } from "@/lib/queries/sustainability";
import "./QSEnvironmentSection.css";

interface QSEnvironmentSectionProps {
  data: QSEnvironmentData;
}

export default function QSEnvironmentSection({
  data,
}: QSEnvironmentSectionProps) {
  const {
    label,
    heading,
    body,
    cards,
    lifecycleSteps,
    overrides,
  } = data;
  const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
  const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

  // Build style overrides
  const sectionStyle: React.CSSProperties = {
    backgroundColor: overrides.bgColor || "#ffffff",
    ...(overrides.marginTop && { marginTop: overrides.marginTop }),
    ...(overrides.borderRadiusTop && { borderRadius: overrides.borderRadiusTop }),
  };

  const innerStyle: React.CSSProperties = {
    ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
    ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
    ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
    ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
  };

  const headingStyle: React.CSSProperties = {
    color: overrides.headingColor || "#1a1a2e",
  };

  const bodyStyle: React.CSSProperties = {
    color: overrides.bodyColor || "#555555",
  };

  const labelStyle: React.CSSProperties = {
    color: overrides.labelColor || "#1e88e5",
  };

  const labelBarStyle: React.CSSProperties = {
    backgroundColor: overrides.labelColor || "#1e88e5",
  };

  const cardBgStyle: React.CSSProperties = {
    backgroundColor: overrides.cardBgColor || "#f5f8ff",
  };

  return (
    <section className="qse-section" style={sectionStyle}>
      <div className="qse-inner" style={innerStyle}>
        {/* Header */}
        <div className="qse-label-row">
          <div className="qse-label-bar" style={labelBarStyle}></div>
          <span className="qse-label" style={labelStyle}>
            {label}
          </span>
        </div>
        <HeadingTag className="qse-heading" style={headingStyle}>
          {heading}
        </HeadingTag>
        <p className="qse-body" style={bodyStyle}>
          {body}
        </p>

        {/* Content flex layout */}
        <div className="qse-content">
          {/* Lifecycle diagram */}
          <div className="qse-lifecycle">
            <div className="qse-orbit-ring"></div>

            {/* Orbit circles */}
            {lifecycleSteps.map((step, i) => (
              <div
                key={i}
                className="qse-orbit-circle"
                style={{ backgroundColor: step.circleColor }}
              >
                <div className="qse-orbit-label">{step.iconLabel}</div>
              </div>
            ))}

            {/* Center circle */}
            <div className="qse-lifecycle-center">
              <div className="qse-lifecycle-center-text">
                Battery
                <br />
                Lifecycle
              </div>
            </div>
          </div>

          {/* Info cards grid */}
          <div className="qse-cards">
            {cards.map((card, i) => (
              <div key={i} className="qse-card" style={cardBgStyle}>
                <div className="qse-card-icon">{card.icon}</div>
                <CardTag className="qse-card-title">{card.title}</CardTag>
                <span className="qse-card-badge">{card.badgeLabel}</span>
                <p className="qse-card-description">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
