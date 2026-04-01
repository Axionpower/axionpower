import { USLifecycleData } from "@/lib/queries/utilities-substations";
import "./USLifecycleSection.css";

export default function USLifecycleSection({ data }: { data: USLifecycleData }) {
    return (
        <section className="us-lifecycle">
            <div className="us-lifecycle-inner">
                {/* ── Left heading ── */}
                <div className="us-lifecycle-left">
                    <div className="us-lifecycle-label-row">
                        <div className="us-lifecycle-label-bar" />
                        <span className="us-lifecycle-label">{data.label}</span>
                    </div>
                    <h2 className="us-lifecycle-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="us-lifecycle-desc">{data.description}</p>
                </div>

                {/* ── Right: phases ── */}
                <div className="us-lifecycle-right">
                    {data.phases.map((phase, i) => (
                        <div key={i} className="us-lifecycle-phase">
                            <div className="us-lifecycle-phase-circle" style={{ background: `${phase.accentColor}18`, border: `2px solid ${phase.accentColor}50` }}>
                                <span className="us-lifecycle-phase-icon">{phase.icon}</span>
                            </div>
                            {i < data.phases.length - 1 && (
                                <div className="us-lifecycle-connector" />
                            )}
                            <div className="us-lifecycle-phase-content">
                                <p className="us-lifecycle-phase-title" style={{ color: phase.accentColor }}>{phase.title}</p>
                                <p className="us-lifecycle-phase-desc">{phase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}