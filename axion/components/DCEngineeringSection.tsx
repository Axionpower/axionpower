import { DCEngineeringData } from "@/lib/queries/data-centers";
import "./DCEngineeringSection.css";

export default function DCEngineeringSection({ data }: { data: DCEngineeringData }) {
  return (
    <section className="dc-eng">
      <div className="dc-eng-inner">
        <div className="dc-eng-header">
          <span className="dc-eng-label">{data.label}</span>
          <h2 className="dc-eng-heading">{data.heading}</h2>
        </div>
        <div className="dc-eng-grid">
          {data.solutions.map((sol, i) => (
            <div key={i} className="dc-eng-card">
              <span className="dc-eng-card-number">{sol.number}</span>
              <h3 className="dc-eng-card-title">{sol.title}</h3>
              <p className="dc-eng-card-subtitle">{sol.subtitle}</p>
              <ul className="dc-eng-card-bullets">
                {sol.bullets.map((b, j) => (
                  <li key={j} className="dc-eng-card-bullet">
                    <span className="dc-eng-bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
