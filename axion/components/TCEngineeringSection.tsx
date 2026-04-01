import { TCEngineeringData } from "@/lib/queries/telecommunications";
import "./TCEngineeringSection.css";

export default function TCEngineeringSection({ data }: { data: TCEngineeringData }) {
    return (
        <section className="tc-eng">
            <div className="tc-eng-inner">
                {/* ── Left ── */}
                <div className="tc-eng-left">
                    <div className="tc-eng-label-row">
                        <div className="tc-eng-label-bar" />
                        <span className="tc-eng-label">{data.label}</span>
                    </div>
                    <h2 className="tc-eng-heading">
                        {data.headingLine1}<br />
                        <span className="tc-eng-heading-accent">{data.headingAccent}</span>
                    </h2>
                    <p className="tc-eng-desc">{data.description}</p>
                    <div className="tc-eng-steps">
                        {data.steps.map((step, i) => (
                            <div key={i} className="tc-eng-step">
                                <div className="tc-eng-step-num">{step.number}</div>
                                <div className="tc-eng-step-content">
                                    <p className="tc-eng-step-title">{step.title}</p>
                                    <p className="tc-eng-step-desc">{step.description}</p>
                                </div>
                                {i < data.steps.length - 1 && <div className="tc-eng-step-connector" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right — Sizing Worksheet ── */}
                <div className="tc-eng-right">
                    <div className="tc-eng-worksheet">
                        <div className="tc-eng-ws-header">
                            <div className="tc-eng-ws-dots">
                                <span className="tc-ws-dot tc-ws-dot-r" /><span className="tc-ws-dot tc-ws-dot-a" /><span className="tc-ws-dot tc-ws-dot-g" />
                            </div>
                            <div>
                                <p className="tc-eng-ws-title">{data.worksheetTitle}</p>
                                <p className="tc-eng-ws-subtitle">{data.worksheetSubtitle}</p>
                            </div>
                        </div>
                        <div className="tc-eng-ws-rows">
                            {data.worksheetRows.map((row, i) => (
                                <div key={i} className={`tc-eng-ws-row ${row.highlight ? "tc-ws-row-highlight" : ""}`}>
                                    <span className="tc-eng-ws-label">{row.label}</span>
                                    <div className="tc-eng-ws-right">
                                        <span className="tc-eng-ws-value" style={row.highlight ? { color: "rgba(99,222,247,1)" } : {}}>
                                            {row.value}
                                        </span>
                                        {row.tag && (
                                            <span className="tc-eng-ws-tag" style={{ background: row.highlight ? "rgba(99,222,247,1)" : "rgba(30,136,229,1)", color: row.highlight ? "#0a0e1a" : "rgba(99,222,247,1)" }}>
                                                {row.tag}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
