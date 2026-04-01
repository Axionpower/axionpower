import { DCLifecycleData } from "@/lib/queries/data-centers";
import "./DCLifecycleSection.css";

export default function DCLifecycleSection({ data }: { data: DCLifecycleData }) {
  return (
    <section className="dc-life">
      <div className="dc-life-inner">
        <div className="dc-life-header">
          <span className="dc-life-label">{data.label}</span>
          <h2 className="dc-life-heading">{data.heading}</h2>
        </div>
        <div className="dc-life-steps">
          {data.steps.map((step, i) => (
            <div key={i} className="dc-life-step">
              <div className="dc-life-step-num">{step.number}</div>
              {i < data.steps.length - 1 && <div className="dc-life-connector" />}
              <div className="dc-life-step-body">
                <h3 className="dc-life-step-title">{step.title}</h3>
                <p className="dc-life-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="dc-life-stats">
          {data.stats.map((s, i) => (
            <div key={i} className="dc-life-stat">
              <span className="dc-life-stat-value">{s.value}</span>
              <span className="dc-life-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
