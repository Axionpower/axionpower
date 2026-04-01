"use client";

import { useState } from "react";
import { HCWhyData } from "@/lib/queries/healthcare";
import "./HCWhySection.css";

export default function HCWhySection({ data }: { data: HCWhyData }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="hc-why-section">
      <div className="hc-why-container">
        {/* Header */}
        <div className="hc-why-header">
          <span className="hc-why-label">{data.label}</span>
          <div className="hc-why-header-grid">
            <h2 className="hc-why-heading">
              <span className="hc-why-heading-line">{data.headingLine1}</span>
              <span className="hc-why-heading-line">{data.headingLine2}</span>
              <span className="hc-why-heading-line">{data.headingLine3}</span>
            </h2>
            <div className="hc-why-header-right">
              <p className="hc-why-description">{data.description}</p>
              <div className="hc-why-stat-pill">
                <span className="hc-why-stat-value">{data.statValue}</span>
                <span className="hc-why-stat-label">{data.statLabel}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Accordion */}
        <div className="hc-why-accordion">
          {data.reasons.map((reason, index) => (
            <div
              key={index}
              className={`hc-why-panel hc-why-panel--color-${index} ${index === activeIdx ? "hc-why-panel--active" : "hc-why-panel--collapsed"}`}
              onMouseEnter={() => setActiveIdx(index)}
              onClick={() => setActiveIdx(index)}
            >
              {/* Collapsed state — vertical title */}
              <div className="hc-why-panel-tab">
                <span className="hc-why-panel-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="hc-why-panel-tab-title">{reason.title}</span>
              </div>

              {/* Expanded state — full content */}
              <div className="hc-why-panel-content">
                <div className="hc-why-panel-inner">
                  <div className="hc-why-panel-check">✓</div>
                  <div>
                    <h4 className="hc-why-panel-title">{reason.title}</h4>
                    <p className="hc-why-panel-desc">{reason.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
