import { TCWhyData } from "@/lib/queries/telecommunications";
import "./TCWhySection.css";

export default function TCWhySection({ data }: { data: TCWhyData }) {
    return (
        <section className="tc-why">
            <div className="tc-why-inner">
                {/* ── Left ── */}
                <div className="tc-why-left">
                    <div className="tc-why-label-row">
                        <div className="tc-why-label-bar" />
                        <span className="tc-why-label">{data.label}</span>
                    </div>
                    <h2 className="tc-why-heading">
                        {data.headingLine1}<br />
                        <span className="tc-why-heading-accent">{data.headingAccent}</span>
                    </h2>
                    <p className="tc-why-desc">{data.description}</p>
                    <div className="tc-why-reasons">
                        {data.reasons.map((r, i) => (
                            <div key={i} className="tc-why-reason">
                                <span className="tc-why-reason-num">{r.number}</span>
                                <div>
                                    <p className="tc-why-reason-title">{r.title}</p>
                                    <p className="tc-why-reason-desc">{r.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right — Uptime Card ── */}
                <div className="tc-why-right">
                    <div className="tc-why-uptime-card">
                        <p className="tc-why-uptime-label">NETWORK UPTIME RECORD</p>
                        <p className="tc-why-uptime-value">{data.uptimeValue}</p>
                        <p className="tc-why-uptime-desc">{data.uptimeLabel}</p>
                        <div className="tc-why-uptime-divider" />
                        <div className="tc-why-uptime-stats">
                            {data.uptimeStats.map((s, i) => (
                                <div key={i} className="tc-why-uptime-stat">
                                    <span className="tc-why-uptime-stat-val">{s.value}</span>
                                    <span className="tc-why-uptime-stat-lbl">{s.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="tc-why-uptime-chart">
                            {["Jan","Feb","Mar","Apr","May","Jun"].map((m, i) => (
                                <div key={i} className="tc-why-chart-col">
                                    <div className="tc-why-chart-bar-wrap">
                                        <div className="tc-why-chart-bar-bg" />
                                        <div className="tc-why-chart-bar-fill" style={{ height: `${72 + i * 4}%` }} />
                                    </div>
                                    <span className="tc-why-chart-label">{m}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
