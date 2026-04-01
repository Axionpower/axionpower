import { IIBatteryTechData } from "@/lib/queries/industrial-infrastructure";
import "./IIBatteryTechSection.css";

export default function IIBatteryTechSection({ data }: { data: IIBatteryTechData }) {
  return (
    <section className="ii-batt">
      <div className="ii-batt-inner">
        <div className="ii-batt-header">
          <div className="ii-batt-label-row">
            <span className="ii-batt-label-bar" />
            <span className="ii-batt-label">{data.label}</span>
          </div>
          <h2 className="ii-batt-heading">
            {data.headingLine1} <span className="ii-batt-heading-accent">{data.headingAccent}</span>
          </h2>
          <p className="ii-batt-desc">{data.description}</p>
        </div>
        <div className="ii-batt-grid">
          {data.techs.map((tech, i) => (
            <div key={i} className="ii-batt-card">
              <div className="ii-batt-card-top" style={{ background: tech.accentColor }} />
              <div className="ii-batt-card-body">
                <div className="ii-batt-card-header">
                  <div className="ii-batt-card-icon-wrap" style={{ background: tech.accentColor }}>
                    <span>{tech.icon}</span>
                  </div>
                  <div>
                    <p className="ii-batt-card-name">{tech.name}</p>
                    <p className="ii-batt-card-subtitle">{tech.subtitle}</p>
                  </div>
                  <span className="ii-batt-card-badge" style={{ background: tech.badgeColor }}>{tech.badge}</span>
                </div>
                <ul className="ii-batt-features">
                  {tech.features.map((f, j) => (
                    <li key={j} className="ii-batt-feature">
                      <span className="ii-batt-feature-dot" style={{ background: tech.accentColor }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="ii-batt-best-for" style={{ background: `${tech.accentColor}1a` }}>
                  <span className="ii-batt-best-label">Best For:</span>
                  <span className="ii-batt-best-text">{tech.bestFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
