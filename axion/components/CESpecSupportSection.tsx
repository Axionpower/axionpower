import { CESpecSupportData } from "@/lib/queries/consulting-engineer-hub";
import "./CESpecSupportSection.css";

export default function CESpecSupportSection({ data }: { data: CESpecSupportData }) {
  return (
    <section className="ce-spec" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="ce-spec__container">

        <div className="ce-spec__header">
          <span className="ce-spec__label">{data.label}</span>
          <h2 className="ce-spec__heading">{data.heading}</h2>
          <p className="ce-spec__subtitle">{data.subtitle}</p>
        </div>

        <div className="ce-spec__grid">
          {data.steps.map((step) => (
            <div key={step.number} className="ce-spec__card">
              <div className="ce-spec__card-number">{step.number}</div>
              <h3 className="ce-spec__card-title">{step.title}</h3>
              <p className="ce-spec__card-subtitle">{step.subtitle}</p>
              <ul className="ce-spec__card-bullets">
                {step.bullets.map((b, i) => (
                  <li key={i} className="ce-spec__card-bullet">
                    <span className="ce-spec__bullet-dot" />
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
