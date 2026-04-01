import Link from "next/link";
import { HCQualityData } from "@/lib/queries/healthcare";
import "./HCQualitySection.css";

export default function HCQualitySection({ data }: { data: HCQualityData }) {

  return (
    <section className="hc-qual-section">
      <div className="hc-qual-container">
        {/* Header — Label on its own row, then Title + Description side-by-side */}
        <div className="hc-qual-header">
          <span className="hc-qual-label">{data.label}</span>

          <div className="hc-qual-header-row">
            <h2 className="hc-qual-heading">
              <span className="hc-qual-heading-line1">{data.headingLine1}</span>
              <span className="hc-qual-heading-line2">{data.headingLine2}</span>
            </h2>
            <div className="hc-qual-header-right">
              <p className="hc-qual-description">{data.description}</p>
              <Link href={data.downloadUrl} className="hc-qual-download-link">
                {data.downloadLabel}
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="hc-qual-cards-grid">
          {data.cards.map((card) => (
            <div key={card.number} className="hc-qual-card">
              <div className="hc-qual-card-number">{card.number}</div>
              <h3 className="hc-qual-card-title">{card.title}</h3>
              <p className="hc-qual-card-subtitle">{card.subtitle}</p>
              <p className="hc-qual-card-description">{card.description}</p>
              <span className={`hc-qual-card-badge hc-qual-badge-${card.badge.toLowerCase()}`}>
                {card.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
