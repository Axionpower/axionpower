import { IIQualityData } from "@/lib/queries/industrial-infrastructure";
import "./IIQualitySection.css";

export default function IIQualitySection({ data }: { data: IIQualityData }) {
  return (
    <section className="ii-qual">
      <div className="ii-qual-inner">
        <div className="ii-qual-header">
          <div className="ii-qual-label-row">
            <span className="ii-qual-label-bar" />
            <span className="ii-qual-label">{data.label}</span>
          </div>
          <h2 className="ii-qual-heading">
            {data.headingLine1}<br />
            <span className="ii-qual-heading-accent">{data.headingAccent}</span>
          </h2>
          <p className="ii-qual-desc">{data.description}</p>
        </div>
        <div className="ii-qual-cards">
          {data.cards.map((card, i) => (
            <div key={i} className="ii-qual-card">
              <div className="ii-qual-card-icon-wrap">
                <span>{card.icon}</span>
              </div>
              <div className="ii-qual-card-divider" />
              <h3 className="ii-qual-card-title">{card.title}</h3>
              <p className="ii-qual-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="ii-qual-stats">
          {data.stats.map((stat, i) => (
            <div key={i} className="ii-qual-stat">
              <span className="ii-qual-stat-value">{stat.value}</span>
              <span className="ii-qual-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
