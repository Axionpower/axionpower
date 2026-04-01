import Link from "next/link";
import { RUIntroData } from "@/lib/queries/replacement-upgrades";
import "./RUIntroSection.css";

export default function RUIntroSection({ data }: { data: RUIntroData }) {
    return (
        <section className="ru-intro">
            <div className="ru-intro-inner">
                {/* ── Left ── */}
                <div className="ru-intro-left">
                    <div className="ru-intro-label-row">
                        <div className="ru-intro-label-bar" />
                        <span className="ru-intro-label">{data.label}</span>
                    </div>
                    <h2 className="ru-intro-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <div className="ru-intro-stats">
                        {data.stats.map((s, i) => (
                            <div key={i} className="ru-intro-stat">
                                <span className="ru-intro-stat-value">{s.value}</span>
                                <span className="ru-intro-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                    <p className="ru-intro-desc">{data.description}</p>
                    <div className="ru-intro-buttons">
                        <Link href={data.btn1Url} className="ru-intro-btn-primary">{data.btn1Label}</Link>
                        <Link href={data.btn2Url} className="ru-intro-btn-ghost">{data.btn2Label}</Link>
                    </div>
                </div>

                {/* ── Right — Service Panels ── */}
                <div className="ru-intro-right">
                    {data.panels.map((p, i) => (
                        <div key={i} className="ru-intro-panel">
                            <div className="ru-intro-panel-bar" style={{ background: p.accentColor }} />
                            <div className="ru-intro-panel-content">
                                <span className="ru-intro-panel-icon">{p.icon}</span>
                                <div>
                                    <p className="ru-intro-panel-title">{p.title}</p>
                                    <p className="ru-intro-panel-desc">{p.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
