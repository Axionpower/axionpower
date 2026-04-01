import Link from "next/link";
import { IILifecycleData } from "@/lib/queries/industrial-infrastructure";
import "./IILifecycleSection.css";

export default function IILifecycleSection({ data }: { data: IILifecycleData }) {
  return (
    <section className="ii-lc">
      <div className="ii-lc-inner">
        <div className="ii-lc-body">
          <div className="ii-lc-left">
            <div className="ii-lc-label-row">
              <span className="ii-lc-label-bar" />
              <span className="ii-lc-label">{data.label}</span>
            </div>
            <h2 className="ii-lc-heading">
              {data.headingLine1}<br />
              <span className="ii-lc-heading-accent">{data.headingAccent}</span>
            </h2>
            <p className="ii-lc-desc">{data.description}</p>
            <Link href={data.lifecycleLink} className="ii-lc-link">
              {data.lifecycleLinkLabel}
            </Link>
            <div className="ii-lc-stats">
              {data.stats.map((stat, i) => (
                <div key={i} className="ii-lc-stat">
                  <div className="ii-lc-stat-top" style={{ borderTopColor: stat.accentColor }}>
                    <span className="ii-lc-stat-icon">{stat.icon}</span>
                    <span className="ii-lc-stat-value">{stat.value}</span>
                  </div>
                  <p className="ii-lc-stat-desc">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="ii-lc-right">
            <div className="ii-lc-services">
              {data.services.map((svc, i) => (
                <div key={i} className="ii-lc-service-card">
                  <div className="ii-lc-service-top" style={{ background: svc.accentColor }} />
                  <div className="ii-lc-service-body">
                    <div className="ii-lc-service-icon-wrap" style={{ background: `${svc.accentColor}26` }}>
                      <span>{svc.icon}</span>
                    </div>
                    <h3 className="ii-lc-service-title">{svc.title}</h3>
                    <p className="ii-lc-service-desc">{svc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="ii-lc-quote">
          <p className="ii-lc-quote-text">{data.quote}</p>
          <p className="ii-lc-quote-author">{data.quoteAuthor}</p>
        </div>
      </div>
    </section>
  );
}
