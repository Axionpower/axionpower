"use client";

import { useState } from "react";
import { HCApplicationsData } from "@/lib/queries/healthcare";
import "./HCApplicationsSection.css";

interface HCApplicationsSectionProps {
  data: HCApplicationsData;
}

const PANEL_COLORS = [
  { bg: "rgba(20, 184, 166, 0.12)", accent: "#14b8a6" },
  { bg: "rgba(239, 68, 68, 0.12)",  accent: "#ef4444" },
  { bg: "rgba(30, 136, 229, 0.12)", accent: "#1e88e5" },
  { bg: "rgba(16, 185, 129, 0.12)", accent: "#10b981" },
  { bg: "rgba(245, 158, 11, 0.12)", accent: "#f59e0b" },
  { bg: "rgba(139, 92, 246, 0.12)", accent: "#8b5cf6" },
];

export default function HCApplicationsSection({ data }: HCApplicationsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="hc-apps">
      <div className="hc-apps__container">
        {/* HEADER — Label, then Title + Description row */}
        <div className="hc-apps__header">
          <div className="hc-apps__label-bar">{data.label}</div>
          <div className="hc-apps__header-row">
            <h2 className="hc-apps__heading">{data.heading}</h2>
            <p className="hc-apps__description">
              Axion delivers purpose-built battery systems for every healthcare environment — from trauma centers to research labs.
            </p>
          </div>
        </div>

        {/* HORIZONTAL ACCORDION */}
        <div className="hc-apps__accordion">
          {data.apps.map((app, idx) => (
            <div
              key={idx}
              className={`hc-apps__panel hc-apps__panel--color-${idx} ${idx === activeIdx ? "hc-apps__panel--active" : "hc-apps__panel--collapsed"}`}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(idx)}
            >
              {/* Collapsed — vertical tab */}
              <div className="hc-apps__panel-tab">
                <span className="hc-apps__panel-num">{String(idx + 1).padStart(2, "0")}</span>
                <span className="hc-apps__panel-tab-title">{app.tag}</span>
              </div>

              {/* Expanded — full content */}
              <div className="hc-apps__panel-content">
                <div className="hc-apps__panel-inner">
                  <div className="hc-apps__panel-tag">{app.tag}</div>
                  <h3 className="hc-apps__panel-title">{app.title}</h3>
                  <p className="hc-apps__panel-desc">{app.description}</p>
                  <div className="hc-apps__panel-stat">
                    <span className="hc-apps__panel-stat-value">{app.statValue}</span>
                    <span className="hc-apps__panel-stat-label">{app.statLabel}</span>
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
