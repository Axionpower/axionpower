import { DCQualityData } from "@/lib/queries/data-centers";
import "./DCQualitySection.css";

export default function DCQualitySection({ data }: { data: DCQualityData }) {
  return (
    <section className="dc-qual">
      <div className="dc-qual-inner">
        <div className="dc-qual-header">
          <span className="dc-qual-label">{data.label}</span>
          <h2 className="dc-qual-heading">{data.heading}</h2>
          <div className="dc-qual-stats">
            {data.stats.map((s, i) => (
              <div key={i} className="dc-qual-stat">
                <span className="dc-qual-stat-value">{s.value}</span>
                <span className="dc-qual-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="dc-qual-grid">
          {data.cards.map((card, i) => (
            <div key={i} className="dc-qual-card">
              <div className="dc-qual-card-top">
                <span className="dc-qual-card-standard">{card.standard}</span>
                <span className="dc-qual-card-badge">{card.badge}</span>
              </div>
              <h3 className="dc-qual-card-title">{card.title}</h3>
              <p className="dc-qual-card-subtitle">{card.subtitle}</p>
              <p className="dc-qual-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
