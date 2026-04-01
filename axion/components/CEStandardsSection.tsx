import { CEStandardsData } from "@/lib/queries/consulting-engineer-hub";
import "./CEStandardsSection.css";

export default function CEStandardsSection({ data }: { data: CEStandardsData }) {
  return (
    <section className="ce-std" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="ce-std__container">

        <div className="ce-std__header">
          <span className="ce-std__label">{data.label}</span>
          <h2 className="ce-std__heading">{data.heading}</h2>
          <p className="ce-std__subtitle">{data.subtitle}</p>
        </div>

        <div className="ce-std__grid">
          {data.standards.map((s) => (
            <div key={s.code} className="ce-std__card">
              <div className="ce-std__card-code">{s.code}</div>
              <h3 className="ce-std__card-title">{s.title}</h3>
              <p className="ce-std__card-desc">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="ce-std__compliance">
          {data.compliancePoints.map((pt, i) => (
            <div key={i} className="ce-std__compliance-row">
              <span className="ce-std__compliance-check">✓</span>
              <span className="ce-std__compliance-text">{pt}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
