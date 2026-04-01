import { DCApplicationsData } from "@/lib/queries/data-centers";
import "./DCApplicationsSection.css";

export default function DCApplicationsSection({ data }: { data: DCApplicationsData }) {
  return (
    <section className="dc-apps">
      <div className="dc-apps-inner">
        <div className="dc-apps-header">
          <div className="dc-apps-label-row">
            <span className="dc-apps-label-bar" />
            <span className="dc-apps-label">{data.label}</span>
          </div>
          <h2 className="dc-apps-heading">{data.heading}</h2>
        </div>
        <div className="dc-apps-grid">
          {data.apps.map((app, i) => (
            <div key={i} className="dc-apps-card">
              <span className="dc-apps-card-tag">{app.tag}</span>
              <h3 className="dc-apps-card-title">{app.title}</h3>
              <p className="dc-apps-card-desc">{app.description}</p>
              <div className="dc-apps-card-stat">{app.stat}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
