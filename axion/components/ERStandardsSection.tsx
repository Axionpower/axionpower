import { ERStandardsData } from "@/lib/queries/engineering-resources";
import "./ERStandardsSection.css";

export default function ERStandardsSection({ data }: { data: ERStandardsData }) {
  return (
    <section className="er-std" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="er-std__container">

        <div className="er-std__header">
          <span className="er-std__label">{data.label}</span>
          <h2 className="er-std__heading">{data.heading}</h2>
          <p className="er-std__subtitle">{data.subtitle}</p>
        </div>

        <div className="er-std__grid">
          {data.standards.map((s) => (
            <div key={s.code} className="er-std__card">
              <div className="er-std__card-head">
                <span className="er-std__card-code">{s.code}</span>
                <span className="er-std__card-body">{s.body}</span>
              </div>
              <h3 className="er-std__card-title">{s.title}</h3>
              <p className="er-std__card-scope">{s.scope}</p>
              <div className="er-std__card-applies">
                <span className="er-std__applies-label">{data.appliesToLabel}</span>
                <span className="er-std__applies-value">{s.appliesTo}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
