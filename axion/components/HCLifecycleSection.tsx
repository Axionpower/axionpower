import { HCLifecycleData } from "@/lib/queries/healthcare";
import "./HCLifecycleSection.css";

export default function HCLifecycleSection({ data }: { data: HCLifecycleData }) {

  return (
    <section className="hc-life-section">
      <div className="hc-life-container">
        {/* Header */}
        <div className="hc-life-header">
          <span className="hc-life-label">{data.label}</span>
          <h2 className="hc-life-heading">
            <span className="hc-life-heading-line1">{data.headingLine1}</span>
            <span className="hc-life-heading-line2">{data.headingLine2}</span>
          </h2>
          <p className="hc-life-description">{data.description}</p>
        </div>

        {/* Lifecycle Phases */}
        <div className="hc-life-phases-container">
          {data.phases.map((phase) => (
            <div key={phase.number} className="hc-life-phase-card">
              <div className="hc-life-phase-icon">{phase.icon}</div>
              <div className="hc-life-phase-number">{phase.number}</div>
              <h3 className="hc-life-phase-title">{phase.title}</h3>
              <p className="hc-life-phase-description">{phase.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="hc-life-stats-container">
          {data.stats.map((stat) => (
            <div key={stat.label} className="hc-life-stat-tile">
              <div className="hc-life-stat-value">{stat.value}</div>
              <div className="hc-life-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
