import Link from "next/link";
import { HCCtaData } from "@/lib/queries/healthcare";
import "./HCCtaSection.css";

export default function HCCtaSection({ data }: { data: HCCtaData }) {

  return (
    <section className="hc-cta-section">
      <div className="hc-cta-container">
        {/* Header */}
        <div className="hc-cta-header">
          <span className="hc-cta-label">{data.label}</span>
          <h2 className="hc-cta-heading">
            <span className="hc-cta-heading-line">{data.headingLine1}</span>
            <span className="hc-cta-heading-line">{data.headingLine2}</span>
          </h2>
          <p className="hc-cta-description">{data.description}</p>
        </div>

        {/* Button Row */}
        <div className="hc-cta-buttons">
          <Link href={data.btn1Url} className="hc-cta-btn hc-cta-btn-primary">
            {data.btn1Label}
          </Link>
          <Link href={data.btn2Url} className="hc-cta-btn hc-cta-btn-secondary">
            {data.btn2Label}
          </Link>
          <Link href={data.linkUrl} className="hc-cta-link">
            {data.linkLabel}
          </Link>
        </div>

        {/* Stats */}
        <div className="hc-cta-stats">
          {data.stats.map((stat) => (
            <div key={stat.label} className="hc-cta-stat-tile">
              <div className="hc-cta-stat-value">{stat.value}</div>
              <div className="hc-cta-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
