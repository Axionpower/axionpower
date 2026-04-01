import { IIWhyData } from "@/lib/queries/industrial-infrastructure";
import "./IIWhySection.css";

export default function IIWhySection({ data }: { data: IIWhyData }) {
  return (
    <section className="ii-why">
      <div className="ii-why-inner">
        <div className="ii-why-left">
          <div className="ii-why-label-row">
            <span className="ii-why-label-bar" />
            <span className="ii-why-label">{data.label}</span>
          </div>
          <h2 className="ii-why-heading">
            {data.headingLine1}<br />
            <span className="ii-why-heading-accent">{data.headingAccent}</span>
          </h2>
          <p className="ii-why-desc">{data.description}</p>
          <div className="ii-why-reasons">
            {data.reasons.map((r, i) => (
              <div key={i} className="ii-why-reason">
                <span className="ii-why-reason-num">{r.num}</span>
                <div>
                  <h3 className="ii-why-reason-title">{r.title}</h3>
                  <p className="ii-why-reason-desc">{r.description}</p>
                </div>
                {i < data.reasons.length - 1 && <div className="ii-why-reason-divider" />}
              </div>
            ))}
          </div>
        </div>
        <div className="ii-why-right">
          <div className="ii-why-track-card">
            <p className="ii-why-track-tag">INDUSTRIAL TRACK RECORD</p>
            <div className="ii-why-track-stats">
              {data.stats.map((stat, i) => (
                <div key={i} className="ii-why-track-stat">
                  <span className="ii-why-track-value" style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                  <span className="ii-why-track-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
