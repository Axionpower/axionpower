import React from "react";
import Link from "next/link";
import { CEHeroData } from "@/lib/queries/consulting-engineer-hub";
import "./CEHeroSection.css";

export default function CEHeroSection({ data }: { data: CEHeroData }) {
  const lines = data.heading.split("\n");
  return (
    <section
      className="ce-hero"
      style={
        {
          '--accent': data.accentColor,
          ...(data.bgImage ? {
            backgroundImage: `url(${data.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : {}),
        } as React.CSSProperties
      }
    >
      <div className="ce-hero__container">
        <div className="ce-hero__grid">

          {/* LEFT */}
          <div className="ce-hero__left">
            <p className="ce-hero__breadcrumb">{data.breadcrumb}</p>
            <span className="ce-hero__pill">{data.label}</span>
            <h1 className="ce-hero__heading">
              {lines.map((line, i) => (
                <span key={i} className="ce-hero__heading-line">{line}</span>
              ))}
            </h1>
            <p className="ce-hero__subtitle">{data.subtitle}</p>

            <div className="ce-hero__stats">
              {data.stats.map((s) => (
                <div key={s.label} className="ce-hero__stat">
                  <span className="ce-hero__stat-value">{s.value}</span>
                  <span className="ce-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <Link href={data.btnUrl} className="ce-hero__btn">
              {data.btnLabel}
            </Link>
          </div>

          {/* RIGHT — Engineering Resources panel */}
          <div className="ce-hero__right">
            <div className="ce-hero__panel">
              <div className="ce-hero__panel-header">
                <span className="ce-hero__panel-dot" />
                <span className="ce-hero__panel-dot" />
                <span className="ce-hero__panel-dot" />
                <span className="ce-hero__panel-title">{data.panelTitle}</span>
              </div>
              <div className="ce-hero__panel-list">
                {data.panelResources.map((r, i) => (
                  <div key={i} className="ce-hero__panel-row">
                    <span className="ce-hero__panel-icon">{r.icon}</span>
                    <span className="ce-hero__panel-category">{r.category}</span>
                    <span className="ce-hero__panel-count">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
