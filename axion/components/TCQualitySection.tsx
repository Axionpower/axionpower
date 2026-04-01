import { TCQualityData } from "@/lib/queries/telecommunications";
import "./TCQualitySection.css";

export default function TCQualitySection({ data }: { data: TCQualityData }) {
    return (
        <section className="tc-quality">
            <div className="tc-quality-inner">
                <div className="tc-quality-header">
                    <div className="tc-quality-label-row">
                        <div className="tc-quality-label-bar" />
                        <span className="tc-quality-label">{data.label}</span>
                    </div>
                    <h2 className="tc-quality-heading">
                        {data.headingLine1}<br />
                        <span className="tc-quality-heading-accent">{data.headingAccent}</span>
                    </h2>
                    <p className="tc-quality-desc">{data.description}</p>
                </div>
                <div className="tc-quality-standards">
                    {data.standards.map((s, i) => (
                        <div key={i} className="tc-quality-standard">
                            <div className="tc-quality-standard-icon-wrap">
                                <span className="tc-quality-standard-icon">{s.icon}</span>
                            </div>
                            <div className="tc-quality-standard-divider" />
                            <h3 className="tc-quality-standard-title">{s.title}</h3>
                            <p className="tc-quality-standard-desc">{s.description}</p>
                        </div>
                    ))}
                </div>
                <div className="tc-quality-stats">
                    {data.stats.map((s, i) => (
                        <div key={i} className="tc-quality-stat">
                            <span className="tc-quality-stat-value">{s.value}</span>
                            <span className="tc-quality-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
