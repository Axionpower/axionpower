import { USEngineeringData } from "@/lib/queries/utilities-substations";
import "./USEngineeringSection.css";

export default function USEngineeringSection({ data }: { data: USEngineeringData }) {
    return (
        <section className="us-eng">
            <div className="us-eng-inner">
                {/* ── Left ── */}
                <div className="us-eng-left">
                    <div className="us-eng-label-row">
                        <div className="us-eng-label-bar" />
                        <span className="us-eng-label">{data.label}</span>
                    </div>
                    <h2 className="us-eng-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="us-eng-desc">{data.description}</p>

                    <div className="us-eng-services">
                        {data.services.map((svc, i) => (
                            <div key={i} className="us-eng-service">
                                <div className="us-eng-service-icon-wrap">
                                    <span className="us-eng-service-icon">{svc.icon}</span>
                                </div>
                                <div>
                                    <p className="us-eng-service-title">{svc.title}</p>
                                    <p className="us-eng-service-desc">{svc.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right — Premium IEEE Sizing Card ── */}
                <div className="us-eng-right">
                    <div className="us-eng-spec-card">
                        {/* Glow */}
                        <div className="us-eng-spec-glow" />

                        {/* Card header */}
                        <div className="us-eng-spec-header">
                            <div className="us-eng-spec-icon-wrap">
                                <span className="us-eng-spec-icon">📐</span>
                            </div>
                            <div className="us-eng-spec-header-text">
                                <span className="us-eng-spec-badge">IEEE 485 / 1188</span>
                                <p className="us-eng-spec-title">{data.worksheetTitle}</p>
                            </div>
                        </div>

                        {/* Parameter rows */}
                        <div className="us-eng-spec-rows">
                            {data.worksheetRows.map((row, i) => (
                                <div key={i} className={`us-eng-spec-row${i === data.worksheetRows.length - 1 ? " us-eng-spec-row--result" : ""}`}>
                                    <div className="us-eng-spec-row-accent" style={row.valueColor ? { background: row.valueColor } : {}} />
                                    <span className="us-eng-spec-param">{row.label}</span>
                                    <span className="us-eng-spec-value" style={row.valueColor ? { color: row.valueColor } : {}}>
                                        {row.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Footer note */}
                        <div className="us-eng-spec-footer">
                            <span className="us-eng-spec-footer-dot" />
                            <span className="us-eng-spec-footer-text">{data.worksheetNote}</span>
                        </div>

                        {/* Floating compliance chip */}
                        <div className="us-eng-spec-chip">✓ Audit Ready</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
