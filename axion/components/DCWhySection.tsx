import { DCWhyData } from "@/lib/queries/data-centers";
import "./DCWhySection.css";

export default function DCWhySection({ data }: { data: DCWhyData }) {
  return (
    <section className="dc-why">
      <div className="dc-why-inner">
        <div className="dc-why-header">
          <span className="dc-why-label">{data.label}</span>
          <h2 className="dc-why-heading">{data.heading}</h2>
        </div>
        <div className="dc-why-stats">
          {data.stats.map((s, i) => (
            <div key={i} className="dc-why-stat">
              <span className="dc-why-stat-value">{s.value}</span>
              <span className="dc-why-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="dc-why-reasons">
          {data.reasons.map((r, i) => (
            <div key={i} className="dc-why-reason">
              <span className="dc-why-reason-check">✓</span>
              <div>
                <h3 className="dc-why-reason-title">{r.title}</h3>
                <p className="dc-why-reason-desc">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
