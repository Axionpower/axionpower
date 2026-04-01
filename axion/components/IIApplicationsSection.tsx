import { IIApplicationsData } from "@/lib/queries/industrial-infrastructure";
import "./IIApplicationsSection.css";

export default function IIApplicationsSection({ data }: { data: IIApplicationsData }) {
  return (
    <section className="ii-apps">
      <div className="ii-apps-inner">
        <div className="ii-apps-header">
          <div className="ii-apps-label-row">
            <span className="ii-apps-label-bar" />
            <span className="ii-apps-label">{data.label}</span>
          </div>
          <h2 className="ii-apps-heading">
            {data.headingLine1}{" "}
            <span className="ii-apps-heading-accent">{data.headingAccent}</span>
          </h2>
          <p className="ii-apps-desc">{data.description}</p>
        </div>
        <div className="ii-apps-grid">
          {data.apps.map((app, i) => (
            <div key={i} className="ii-apps-card">
              <div className="ii-apps-card-icon-wrap">
                <span className="ii-apps-card-icon">{app.icon}</span>
              </div>
              <h3 className="ii-apps-card-title">{app.title}</h3>
              <p className="ii-apps-card-desc">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
