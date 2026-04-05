import HeroBackground from "./HeroBackground";
import React from "react";
import Link from "next/link";
import { ERHeroData } from "@/lib/queries/engineering-resources";
import "./ERHeroSection.css";

export default function ERHeroSection({ data }: { data: ERHeroData }) {
  const lines = data.heading.split("\n");
  return (
    <HeroBackground
      imageUrl={data.bgImage}
      videoUrl={data.bgVideoUrl}
      className="er-hero"
      style={{ '--accent': data.accentColor } as React.CSSProperties}
    >
      <div className="er-hero__container">
        <div className="er-hero__grid">

          {/* LEFT */}
          <div className="er-hero__left">
            <div className="er-hero__breadcrumb">{data.breadcrumb}</div>
            <span className="er-hero__pill">{data.label}</span>
            <h1 className="er-hero__heading">
              {lines.map((line, i) => (
                <span key={i} className="er-hero__heading-line">{line}</span>
              ))}
            </h1>
            <p className="er-hero__subtitle">{data.subtitle}</p>

            <div className="er-hero__stats">
              {data.stats.map((s) => (
                <div key={s.label} className="er-hero__stat">
                  <span className="er-hero__stat-value">{s.value}</span>
                  <span className="er-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="er-hero__buttons">
              <Link href={data.btn1Url} className="er-hero__btn er-hero__btn--primary">
                {data.btn1Label}
              </Link>
              <Link href={data.btn2Url} className="er-hero__btn er-hero__btn--secondary">
                {data.btn2Label}
              </Link>
            </div>
          </div>

          {/* RIGHT — Resource library panel */}
          <div className="er-hero__right">
            <div className="er-hero__panel">
              <div className="er-hero__panel-header">
                <span className="er-hero__panel-dot" />
                <span className="er-hero__panel-dot" />
                <span className="er-hero__panel-dot" />
                <span className="er-hero__panel-title">{data.panelTitle}</span>
              </div>
              <div className="er-hero__panel-list">
                {data.panelRows.map((row, i) => (
                  <div key={i} className="er-hero__panel-row">
                    <span className="er-hero__panel-icon">{row.icon}</span>
                    <span className="er-hero__panel-type">{row.type}</span>
                    <span className="er-hero__panel-format">{row.format}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </HeroBackground>
  );
}
