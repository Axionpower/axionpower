import { TCApplicationsData } from "@/lib/queries/telecommunications";
import "./TCApplicationsSection.css";

export default function TCApplicationsSection({ data }: { data: TCApplicationsData }) {
    return (
        <section className="tc-apps">
            <div className="tc-apps-inner">
                <div className="tc-apps-header">
                    <div className="tc-apps-label-row">
                        <div className="tc-apps-label-bar" />
                        <span className="tc-apps-label">{data.label}</span>
                    </div>
                    <h2 className="tc-apps-heading">
                        {data.headingLine1}<br />
                        <span className="tc-apps-heading-accent">{data.headingAccent}</span>
                    </h2>
                    <p className="tc-apps-desc">{data.description}</p>
                </div>
                <div className="tc-apps-grid">
                    {data.apps.map((app, i) => (
                        <div key={i} className="tc-apps-card">
                            <div className="tc-apps-card-icon-wrap">
                                <span className="tc-apps-card-icon">{app.icon}</span>
                            </div>
                            <h3 className="tc-apps-card-title">{app.title}</h3>
                            <p className="tc-apps-card-desc">{app.description}</p>
                            <div className="tc-apps-card-arrow">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
