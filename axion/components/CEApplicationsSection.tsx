import { CEApplicationsData } from "@/lib/queries/consulting-engineer-hub";
import "./CEApplicationsSection.css";

export default function CEApplicationsSection({ data }: { data: CEApplicationsData }) {
  return (
    <section className="ce-apps" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="ce-apps__container">

        <div className="ce-apps__header">
          <span className="ce-apps__label">{data.label}</span>
          <h2 className="ce-apps__heading">{data.heading}</h2>
          <p className="ce-apps__subtitle">{data.subtitle}</p>
        </div>

        <div className="ce-apps__grid">
          {data.apps.map((app) => (
            <div key={app.title} className="ce-apps__card">
              <span className="ce-apps__card-tag">{app.tag}</span>
              <h3 className="ce-apps__card-title">{app.title}</h3>
              <p className="ce-apps__card-desc">{app.description}</p>
              <div className="ce-apps__card-spec">
                <span className="ce-apps__spec-label">{data.specRefLabel}</span>
                <span className="ce-apps__spec-value">{app.spec}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
