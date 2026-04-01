import { CEWhyData } from "@/lib/queries/consulting-engineer-hub";
import "./CEWhySection.css";

export default function CEWhySection({ data }: { data: CEWhyData }) {
  return (
    <section className="ce-why" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="ce-why__container">

        <div className="ce-why__header">
          <span className="ce-why__label">{data.label}</span>
          <h2 className="ce-why__heading">{data.heading}</h2>
        </div>

        {/* Stats strip */}
        <div className="ce-why__stats">
          {data.stats.map((s, i) => (
            <div key={i} className="ce-why__stat">
              <span className="ce-why__stat-value">{s.value}</span>
              <span className="ce-why__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Reason cards */}
        <div className="ce-why__cards">
          {data.reasons.map((r) => (
            <div key={r.title} className="ce-why__card">
              <div className="ce-why__card-icon">{r.icon}</div>
              <h3 className="ce-why__card-title">{r.title}</h3>
              <p className="ce-why__card-desc">{r.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
