import { USBatteryTechData } from "@/lib/queries/utilities-substations";
import "./USBatteryTechSection.css";

export default function USBatteryTechSection({ data }: { data: USBatteryTechData }) {
    return (
        <section className="us-battech">
            <div className="us-battech-inner">
                {/* ── Top header ── */}
                <div className="us-battech-header">
                    {/* Row 1: section label (left) + quote (right) */}
                    <div className="us-battech-header-top">
                        <div className="us-battech-label-row">
                            <div className="us-battech-label-bar" />
                            <span className="us-battech-label">{data.label}</span>
                        </div>
                        <div className="us-battech-quote-row">
                            <div className="us-battech-quote-dots">
                                <div className="us-battech-dot" />
                                <div className="us-battech-dot" />
                            </div>
                            <p className="us-battech-quote">{data.quote}</p>
                        </div>
                    </div>

                    {/* Row 2: big title (left) + description (right) — same row */}
                    <div className="us-battech-header-bottom">
                        {data.heading && (
                            <h2 className="us-battech-heading">{data.heading}</h2>
                        )}
                        {data.description && (
                            <p className="us-battech-section-desc">{data.description}</p>
                        )}
                    </div>
                </div>

                {/* ── Two tech cards side by side ── */}
                <div className="us-battech-cards">
                    {data.techs.map((tech, i) => (
                        <div key={i} className="us-battech-card">
                            <div className="us-battech-card-top">
                                <div>
                                    <h3 className="us-battech-card-title">{tech.title}</h3>
                                    {tech.subtitle && (
                                        <p className="us-battech-card-subtitle">{tech.subtitle}</p>
                                    )}
                                </div>
                                <span className="us-battech-tag" style={{ color: tech.tagColor, borderColor: `${tech.tagColor}40`, background: `${tech.tagColor}12` }}>
                                    {tech.tag}
                                </span>
                            </div>
                            <div className="us-battech-card-divider" style={{ background: tech.tagColor }} />
                            <p className="us-battech-card-desc">{tech.description}</p>
                            <ul className="us-battech-features">
                                {tech.features.map((f, fi) => (
                                    <li key={fi} className="us-battech-feature">
                                        <span className="us-battech-feature-arrow" style={{ color: tech.tagColor }}>→</span>
                                        <span>{f.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* ── Image card ── */}
                    <div className="us-battech-image-card">
                        <div className="us-battech-image-bg" />
                        <div className="us-battech-image-overlay" />
                        <div className="us-battech-battery-visual">
                            <div className="us-battech-battery-rows">
                                {[...Array(5)].map((_, ri) => (
                                    <div key={ri} className="us-battech-battery-row">
                                        {[...Array(3)].map((_, ci) => (
                                            <div key={ci} className="us-battech-battery-cell" />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="us-battech-image-caption">{data.imageCaption}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
