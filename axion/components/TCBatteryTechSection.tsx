import { TCBatteryTechData } from "@/lib/queries/telecommunications";
import "./TCBatteryTechSection.css";

export default function TCBatteryTechSection({ data }: { data: TCBatteryTechData }) {
    return (
        <section className="tc-battech">
            <div className="tc-battech-inner">
                {/* ── Left — Battery room visual ── */}
                <div className="tc-battech-visual">
                    <div className="tc-battech-visual-inner">
                        <div className="tc-battech-visual-header">
                            <span className="tc-battech-visual-label">BATTERY ROOM</span>
                        </div>
                        <div className="tc-battech-grid">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className={`tc-battech-cell ${i % 2 === 0 ? "tc-cell-blue" : "tc-cell-cyan"}`} />
                            ))}
                        </div>
                        <p className="tc-battech-visual-caption">{data.imageCaption}</p>
                    </div>
                </div>

                {/* ── Right ── */}
                <div className="tc-battech-right">
                    <div className="tc-battech-label-row">
                        <div className="tc-battech-label-bar" />
                        <span className="tc-battech-label">{data.label}</span>
                    </div>
                    <h2 className="tc-battech-heading">
                        {data.headingLine1}<br />
                        <span className="tc-battech-heading-accent">{data.headingAccent}</span>
                    </h2>
                    <p className="tc-battech-desc">{data.description}</p>
                    <div className="tc-battech-cards">
                        {data.techs.map((tech, i) => (
                            <div key={i} className="tc-battech-card">
                                <div className="tc-battech-card-stripe" style={{ background: tech.accentColor }} />
                                <div className="tc-battech-card-body">
                                    <div className="tc-battech-card-top">
                                        <h3 className="tc-battech-card-title">{tech.title}</h3>
                                        <span className="tc-battech-card-tag" style={{ color: tech.accentColor, borderColor: `${tech.accentColor}40`, background: `${tech.accentColor}12` }}>
                                            {tech.tag}
                                        </span>
                                    </div>
                                    <p className="tc-battech-card-desc">{tech.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
