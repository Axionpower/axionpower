import React from "react";
import { HCEngineeringData } from "@/lib/queries/healthcare";
import "./HCEngineeringSection.css";

interface Props {
  data: HCEngineeringData;
}

export default function HCEngineeringSection({ data }: Props) {
  return (
    <section className="hc-eng-section">
      <div className="hc-eng-wrapper">
        {/* ── Full-width Header ── */}
        <div className="hc-eng-header">
          <div className="hc-eng-label-row">
            <span className="hc-eng-label-bar" />
            <span className="hc-eng-label">{data.label}</span>
          </div>
          <div className="hc-eng-header-grid">
            <h2 className="hc-eng-heading">
              <span className="hc-eng-heading-line">{data.headingLine1}</span>
              <span className="hc-eng-heading-line">{data.headingLine2}</span>
            </h2>
            <p className="hc-eng-description">{data.description}</p>
          </div>
        </div>

        {/* ── 2-Column Grid: Step Cards + Support Card ── */}
        <div className="hc-eng-grid">
          {data.steps.map((step, idx) => (
            <div key={idx} className="hc-eng-step-card">
              <div className="hc-eng-step-accent" />
              <div className="hc-eng-step-badge">
                <span className="hc-eng-step-number">{step.number}</span>
              </div>
              <div className="hc-eng-step-body">
                <h3 className="hc-eng-step-title">{step.title}</h3>
                <p className="hc-eng-step-desc">{step.description}</p>
              </div>
              <div className="hc-eng-step-arrow">→</div>
            </div>
          ))}

          {/* Support Card fills remaining space */}
          <div className="hc-eng-support-card">
            <h3 className="hc-eng-support-title">AXION SUPPORT</h3>
            <ul className="hc-eng-features">
              {data.features.map((feature, idx) => (
                <li key={idx} className="hc-eng-feature-item">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
