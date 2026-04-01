import Link from "next/link";
import { IIHeroData } from "@/lib/queries/industrial-infrastructure";
import "./IIHeroSection.css";

export default function IIHeroSection({ data }: { data: IIHeroData }) {
  return (
    <section className="ii-hero">
      <div className="ii-hero-inner">
        <div className="ii-hero-left">
          <p className="ii-hero-breadcrumb">{data.breadcrumb}</p>
          <div className="ii-hero-pill">
            <span className="ii-hero-pill-dot" />
            <span>{data.pill}</span>
          </div>
          <h1 className="ii-hero-heading">
            {data.headingLine1}
            <br />
            {data.headingLine2}
            <br />
            <span className="ii-hero-heading-accent">{data.headingAccent}</span>
          </h1>
          <div className="ii-hero-accent-bar" />
          <p className="ii-hero-subtitle">{data.subtitle}</p>
          <div className="ii-hero-buttons">
            <Link href={data.btn1Url} className="ii-hero-btn-primary">
              {data.btn1Label}
            </Link>
            <Link href={data.btn2Url} className="ii-hero-btn-outline">
              {data.btn2Label}
            </Link>
          </div>
        </div>
        <div className="ii-hero-right">
          <div className="ii-hero-card">
            <div className="ii-hero-card-header">
              <span className="ii-hero-card-tag">INDUSTRIAL POWER DASHBOARD</span>
              <div className="ii-hero-card-live">
                <span className="ii-hero-card-dot" />
                <span>Facility Power Status — Live</span>
              </div>
            </div>
            <div className="ii-hero-facilities">
              {data.facilities.map((f, i) => (
                <div key={i} className="ii-hero-facility">
                  <div className="ii-hero-facility-top">
                    <div className="ii-hero-facility-info">
                      <span
                        className="ii-hero-facility-dot"
                        style={{ background: f.statusColor }}
                      />
                      <span className="ii-hero-facility-label">{f.label}</span>
                    </div>
                    <div className="ii-hero-facility-right">
                      <span
                        className="ii-hero-facility-status"
                        style={{ color: f.statusColor }}
                      >
                        {f.status}
                      </span>
                      <span className="ii-hero-facility-pct">{f.pct}%</span>
                    </div>
                  </div>
                  <div className="ii-hero-bar-track">
                    <div
                      className="ii-hero-bar-fill"
                      style={{
                        width: `${f.pct}%`,
                        background: f.barColor,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="ii-hero-stats">
              {data.heroStats.map((s, i) => (
                <div key={i} className="ii-hero-stat">
                  <span className="ii-hero-stat-value">{s.value}</span>
                  <span className="ii-hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
