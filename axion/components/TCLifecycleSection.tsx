import Link from "next/link";
import { TCLifecycleData } from "@/lib/queries/telecommunications";
import "./TCLifecycleSection.css";

export default function TCLifecycleSection({ data }: { data: TCLifecycleData }) {
    return (
        <section className="tc-lifecycle">
            <div className="tc-lifecycle-inner">
                <div className="tc-lifecycle-header">
                    <div className="tc-lifecycle-label-row">
                        <div className="tc-lifecycle-label-bar" />
                        <span className="tc-lifecycle-label">{data.label}</span>
                    </div>
                    <h2 className="tc-lifecycle-heading">
                        {data.headingLine1}<br />
                        <span className="tc-lifecycle-heading-accent">{data.headingAccent}</span>
                    </h2>
                    <p className="tc-lifecycle-desc">{data.description}</p>
                    <Link href="/contact" className="tc-lifecycle-cta">{data.ctaLabel}</Link>
                </div>

                <div className="tc-lifecycle-services">
                    {data.services.map((svc, i) => (
                        <div key={i} className="tc-lifecycle-service">
                            <div className="tc-lifecycle-service-top" style={{ background: svc.accentColor }} />
                            <div className="tc-lifecycle-service-body">
                                <div className="tc-lifecycle-service-icon-wrap" style={{ background: `${svc.accentColor}18` }}>
                                    <span className="tc-lifecycle-service-icon">{svc.icon}</span>
                                </div>
                                <h3 className="tc-lifecycle-service-title">{svc.title}</h3>
                                <p className="tc-lifecycle-service-desc">{svc.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tc-lifecycle-bottom">
                    <div className="tc-lifecycle-stats">
                        {data.stats.map((s, i) => (
                            <div key={i} className="tc-lifecycle-stat" style={{ borderTopColor: s.accentColor }}>
                                <div className="tc-lifecycle-stat-icon-row">
                                    <span className="tc-lifecycle-stat-icon">{s.icon}</span>
                                    <span className="tc-lifecycle-stat-value">{s.value}</span>
                                </div>
                                <span className="tc-lifecycle-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="tc-lifecycle-quote-card">
                        <p className="tc-lifecycle-quote">{data.quote}</p>
                        <p className="tc-lifecycle-quote-author">{data.quoteAuthor}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
