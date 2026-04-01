import { USApplicationsData } from "@/lib/queries/utilities-substations";
import "./USApplicationsSection.css";

export default function USApplicationsSection({ data }: { data: USApplicationsData }) {
    return (
        <section className="us-apps">
            <div className="us-apps-inner">
                <div className="us-apps-label-row">
                    <div className="us-apps-label-bar" />
                    <span className="us-apps-label">{data.label}</span>
                    <div className="us-apps-label-bar" />
                </div>
                {data.heading && (
                    <h2 className="us-apps-heading">{data.heading}</h2>
                )}
                {data.description && (
                    <p className="us-apps-description">{data.description}</p>
                )}
                <div className="us-apps-grid">
                    {data.apps.map((app, i) => (
                        <div key={i} className="us-apps-card">
                            <span className="us-apps-card-number">{app.number}</span>
                            <div className="us-apps-icon-circle">
                                <span className="us-apps-icon">{app.icon}</span>
                            </div>
                            <h3 className="us-apps-card-title">
                                {app.title.split("\n").map((l, li, arr) => (
                                    <span key={li}>{l}{li < arr.length - 1 && <br />}</span>
                                ))}
                            </h3>
                            {app.description && (
                                <p className="us-apps-card-desc">{app.description}</p>
                            )}
                            <span className="us-apps-arrow">→</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
