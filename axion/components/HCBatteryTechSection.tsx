import React from "react";
import { HCBatteryTechData } from "@/lib/queries/healthcare";
import "./HCBatteryTechSection.css";

interface Props {
  data: HCBatteryTechData;
}

export default function HCBatteryTechSection({ data }: Props) {
  return (
    <section className="hc-batt-section">
      {/* ── Label + Heading ── */}
      <div className="hc-batt-header">
        <div className="hc-batt-label-row">
          <span className="hc-batt-label-bar" />
          <span className="hc-batt-label">{data.label}</span>
        </div>
        <div className="hc-batt-heading-wrapper">
          <h2 className="hc-batt-heading">
            <span className="hc-batt-heading-line">{data.headingLine1}</span>
            <span className="hc-batt-heading-line">{data.headingLine2}</span>
          </h2>
        </div>
      </div>

      {/* ── Tech Cards Grid ── */}
      <div className="hc-batt-cards">
        {data.techs.map((tech) => (
          <div key={tech.badge} className="hc-batt-card">
            {/* Top colored bar */}
            <div
              className="hc-batt-card-top-bar"
              style={{ background: tech.accentColor }}
            />

            {/* Badge pill */}
            <div
              className="hc-batt-badge"
              style={{ background: tech.accentColor }}
            >
              {tech.badge}
            </div>

            {/* Name + subtitle */}
            <h3 className="hc-batt-card-name">{tech.name}</h3>
            <p className="hc-batt-card-subtitle">{tech.subtitle}</p>

            {/* Features list */}
            <ul className="hc-batt-features">
              {tech.features.map((feature, idx) => (
                <li key={idx} className="hc-batt-feature-item">
                  <span className="hc-batt-feature-dot" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Best for footer */}
            <p className="hc-batt-best-for">{tech.bestFor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
