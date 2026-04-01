import { IIEngineeringData } from "@/lib/queries/industrial-infrastructure";
import "./IIEngineeringSection.css";

export default function IIEngineeringSection({ data }: { data: IIEngineeringData }) {
  return (
    <section className="ii-eng">
      <div className="ii-eng-inner">
        <div className="ii-eng-top">
          <div className="ii-eng-label-row">
            <span className="ii-eng-label-bar" />
            <span className="ii-eng-label">{data.label}</span>
          </div>
          <h2 className="ii-eng-heading">
            {data.headingLine1} <span className="ii-eng-heading-accent">{data.headingAccent}</span>
          </h2>
          <p className="ii-eng-desc">{data.description}</p>
        </div>
        <div className="ii-eng-body">
          <div className="ii-eng-services">
            {data.services.map((svc, i) => (
              <div key={i} className="ii-eng-service-card">
                <span className="ii-eng-service-icon">{svc.icon}</span>
                <div>
                  <h3 className="ii-eng-service-title">{svc.title}</h3>
                  <p className="ii-eng-service-desc">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ii-eng-flow-card">
            <p className="ii-eng-flow-tag">PROJECT COORDINATION FLOW</p>
            <h3 className="ii-eng-flow-heading">From Specification to Commissioning</h3>
            <div className="ii-eng-steps">
              {data.steps.map((step, i) => (
                <div
                  key={i}
                  className="ii-eng-step"
                  style={{
                    borderLeft: `2px solid ${step.color}20`,
                    background: `${step.color}10`,
                  }}
                >
                  <span className="ii-eng-step-num" style={{ color: step.color }}>
                    {step.num}
                  </span>
                  <div className="ii-eng-step-content">
                    <p className="ii-eng-step-title">{step.title}</p>
                    <p className="ii-eng-step-actor">👤 {step.actor}</p>
                    <p className="ii-eng-step-output">→ {step.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
