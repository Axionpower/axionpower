import React from "react";
import Link from "next/link";
import { HCHeroData } from "@/lib/queries/healthcare";
import HeroBackground from "./HeroBackground";
import "./HCHeroSection.css";

interface HCHeroSectionProps {
  data: HCHeroData;
}

export default function HCHeroSection({ data }: HCHeroSectionProps) {
  return (
    <HeroBackground
      imageUrl={data.bgImage}
      videoUrl={data.bgVideoUrl}
      className="hc-hero"
      style={{ '--accent': data.accentColor } as React.CSSProperties}
    >
      <div className="hc-hero__container">
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="hc-hero__content">
          {/* BREADCRUMB */}
          <div className="hc-hero__breadcrumb">{data.breadcrumb}</div>

          {/* PILL BADGE */}
          <div className="hc-hero__pill">
            <span className="hc-hero__pill-dot"></span>
            <span>{data.pill}</span>
          </div>

          {/* HEADING */}
          <h1 className="hc-hero__heading">
            <span className="hc-hero__heading-line">{data.headingLine1}</span>
            <span className="hc-hero__heading-line">{data.headingLine2}</span>
            <span className="hc-hero__heading-line hc-hero__heading-accent">
              {data.headingLine3}
            </span>
          </h1>

          {/* ACCENT BAR */}
          <div className="hc-hero__accent-bar"></div>

          {/* SUBTITLE */}
          <p className="hc-hero__subtitle">{data.subtitle}</p>

          {/* BUTTONS */}
          <div className="hc-hero__buttons">
            <Link href={data.btn1Url} className="hc-hero__btn hc-hero__btn--primary">
              {data.btn1Label}
            </Link>
            <Link href={data.btn2Url} className="hc-hero__btn hc-hero__btn--outline">
              {data.btn2Label}
            </Link>
          </div>


        </div>

        {/* RIGHT COLUMN: LIVE STATUS CARD */}
        <div className="hc-hero__status-card">
          {/* HEADER */}
          <div className="hc-hero__status-header">
            <span className="hc-hero__status-label">HEALTHCARE POWER STATUS</span>
            <span className="hc-hero__status-dot"></span>
            <span className="hc-hero__status-live">LIVE</span>
          </div>

          {/* STATS */}
          <div className="hc-hero__status-stats">
            {data.liveStats.map((stat, idx) => (
              <div key={idx} className="hc-hero__status-stat">
                <span className="hc-hero__status-stat-label">{stat.label}</span>
                <span className="hc-hero__status-stat-value">{stat.value}</span>
                {idx < data.liveStats.length - 1 && (
                  <div className="hc-hero__status-separator"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
