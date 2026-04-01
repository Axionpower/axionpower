import Link from "next/link";
import { RULifecycleData } from "@/lib/queries/replacement-upgrades";
import "./RULifecycleSection.css";

export default function RULifecycleSection({ data }: { data: RULifecycleData }) {
    return (
        <section className="ru-lifecycle">
            <div className="ru-lifecycle-inner">
                {/* ── Left ── */}
                <div className="ru-lifecycle-left">
                    <div className="ru-lifecycle-label-row">
                        <div className="ru-lifecycle-label-bar" />
                        <span className="ru-lifecycle-label">{data.label}</span>
                    </div>
                    <h2 className="ru-lifecycle-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="ru-lifecycle-desc">{data.description}</p>

                    {/* ── Feature cards ── */}
                    <div className="ru-lifecycle-features">
                        {data.features.map((f, i) => (
                            <div key={i} className="ru-lifecycle-feature" style={{ borderColor: `${f.accentColor}30` }}>
                                <div className="ru-lifecycle-feature-pill" style={{ background: `${f.pillColor}20`, color: f.pillColor }}>
                                    <span>{f.icon}</span>
                                    <span className="ru-lifecycle-feature-num">{f.number}</span>
                                </div>
                                <div className="ru-lifecycle-feature-body">
                                    <h4 className="ru-lifecycle-feature-title">{f.title}</h4>
                                    <p className="ru-lifecycle-feature-desc">{f.description}</p>
                                    <Link href="/contact" className="ru-lifecycle-feature-link" style={{ color: f.accentColor }}>{f.linkLabel}</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="ru-lifecycle-bottom-note">{data.bottomNote}</p>
                </div>

                {/* ── Right — Steps ── */}
                <div className="ru-lifecycle-right">
                    <div className="ru-lifecycle-steps">
                        {data.steps.map((step, i) => (
                            <div key={i} className={`ru-lifecycle-step ${step.active ? "ru-lifecycle-step--active" : ""}`}>
                                <div className="ru-lifecycle-step-num" style={step.active ? { background: "rgba(255,191,69,1)", color: "#0a0e1a" } : {}}>
                                    {step.number}
                                </div>
                                <div className="ru-lifecycle-step-content">
                                    <p className="ru-lifecycle-step-title" style={step.active ? { color: "rgba(255,191,69,1)" } : {}}>{step.title}</p>
                                    <p className="ru-lifecycle-step-desc">{step.description}</p>
                                </div>
                                {step.active && <div className="ru-lifecycle-step-active-dot" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}