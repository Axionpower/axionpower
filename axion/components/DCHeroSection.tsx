import React from "react";
import Link from "next/link";
import { DCHeroData } from "@/lib/queries/data-centers";
import HeroBackground from "./HeroBackground";
import "./DCHeroSection.css";

export default function DCHeroSection({ data }: { data: DCHeroData }) {
  return (
    <HeroBackground
      imageUrl={data.bgImage}
      videoUrl={data.bgVideoUrl}
      className="dc-hero"
      style={{ '--accent': data.accentColor } as React.CSSProperties}
    >
      <div className="dc-hero-inner">
        <div className="dc-hero-left">
          <p className="dc-hero-breadcrumb">{data.breadcrumb}</p>
          <div className="dc-hero-pill">
            <span className="dc-hero-pill-dot" />
            <span>{data.pill}</span>
          </div>
          <h1 className="dc-hero-heading">{data.heading}</h1>
          <div className="dc-hero-accent-bar" />
          <p className="dc-hero-subtitle">{data.subtitle}</p>
          <ul className="dc-hero-features">
            {data.features.map((f, i) => (
              <li key={i} className="dc-hero-feature">
                <span className="dc-hero-feature-arrow">›</span>
                {f}
              </li>
            ))}
          </ul>
          <Link href={data.btn1Url} className="dc-hero-btn">
            {data.btn1Label} →
          </Link>
        </div>

        <div className="dc-hero-right">
          <div className="dc-hero-card">
            <div className="dc-hero-card-header">
              <div className="dc-hero-card-title-row">
                <span className="dc-hero-card-tag">{data.cardTag}</span>
                <span className="dc-hero-card-dot" />
              </div>
              <p className="dc-hero-card-subtitle">{data.cardSubtitle}</p>
            </div>

            <div className="dc-hero-status-rows">
              {data.statusRows.map((row, i) => (
                <div key={i} className="dc-hero-status-row">
                  <span className="dc-hero-status-label">{row.label}</span>
                  <span className="dc-hero-status-value" style={{ color: row.statusColor }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="dc-hero-stat-tile">
              <span className="dc-hero-stat-value">{data.statValue}</span>
              <span className="dc-hero-stat-label">{data.statLabel}</span>
              <span className="dc-hero-stat-caption">{data.statCaption}</span>
            </div>
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
