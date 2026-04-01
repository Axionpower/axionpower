import { USQualityData } from "@/lib/queries/utilities-substations";
import "./USQualitySection.css";

export default function USQualitySection({ data }: { data: USQualityData }) {
    return (
        <section className="us-quality">
            <div className="us-quality-inner">
                {/* ── Left: heading + description + stats + badges ── */}
                <div className="us-quality-left">
                    <div className="us-quality-accents">
                        <div className="us-quality-accent-block" />
                        <div className="us-quality-accent-block" />
                    </div>
                    <div className="us-quality-label-row">
                        <div className="us-quality-label-bar" />
                        <span className="us-quality-label">{data.label}</span>
                    </div>
                    <h2 className="us-quality-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="us-quality-desc">{data.description}</p>

                    {/* Stats */}
                    {data.stats.length > 0 && (
                        <div className="us-quality-stats">
                            {data.stats.map((s, i) => (
                                <div key={i} className="us-quality-stat">
                                    <span className="us-quality-stat-value">{s.value}</span>
                                    <span className="us-quality-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Compliance badges */}
                    {data.badges.length > 0 && (
                        <div className="us-quality-badges">
                            {data.badges.map((badge, i) => (
                                <div key={i} className="us-quality-badge">
                                    <div className="us-quality-badge-icon-wrap">
                                        <span className="us-quality-badge-icon">{badge.icon}</span>
                                    </div>
                                    <div>
                                        <p className="us-quality-badge-title">{badge.title}</p>
                                        <p className="us-quality-badge-sub">{badge.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── Right: Standards Reference card ── */}
                <div className="us-quality-right">
                    <div className="us-quality-standards-card">
                        <div className="us-quality-standards-glow" />
                        <div className="us-quality-standards-header">
                            <span className="us-quality-standards-icon">📋</span>
                            <span className="us-quality-standards-heading">{data.standardsHeading}</span>
                        </div>
                        <div className="us-quality-standards-list">
                            {data.standards.map((std, i) => (
                                <div key={i} className="us-quality-standard">
                                    <div className="us-quality-standard-code-wrap" style={{ borderColor: `${std.accentColor}40`, background: `${std.accentColor}10` }}>
                                        <span className="us-quality-standard-code" style={{ color: std.accentColor }}>{std.code}</span>
                                    </div>
                                    <div className="us-quality-standard-content">
                                        <p className="us-quality-standard-title">{std.title}</p>
                                        <p className="us-quality-standard-desc">{std.description}</p>
                                    </div>
                                    <div className="us-quality-standard-check" style={{ color: std.accentColor }}>✓</div>
                                </div>
                            ))}
                        </div>
                        <div className="us-quality-standards-footer">
                            <span className="us-quality-standards-footer-dot" />
                            <span>Full compliance documentation available on request</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
