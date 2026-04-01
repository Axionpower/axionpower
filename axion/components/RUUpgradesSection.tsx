import Link from "next/link";
import { RUUpgradesData } from "@/lib/queries/replacement-upgrades";
import "./RUUpgradesSection.css";

export default function RUUpgradesSection({ data }: { data: RUUpgradesData }) {
    return (
        <section className="ru-upgrades">
            <div className="ru-upgrades-inner">
                {/* ── Left ── */}
                <div className="ru-upgrades-left">
                    <div className="ru-upgrades-label-row">
                        <div className="ru-upgrades-label-bar" />
                        <span className="ru-upgrades-label">{data.label}</span>
                    </div>
                    <h2 className="ru-upgrades-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="ru-upgrades-desc">{data.description}</p>
                    <div className="ru-upgrades-buttons">
                        <Link href={data.btn1Url} className="ru-upgrades-btn-primary">{data.btn1Label}</Link>
                        <Link href={data.btn2Url} className="ru-upgrades-btn-ghost">{data.btn2Label}</Link>
                    </div>
                </div>

                {/* ── Right — Tech Cards ── */}
                <div className="ru-upgrades-right">
                    {data.cards.map((card, i) => (
                        <div key={i} className={`ru-upgrades-card ${card.recommended ? "ru-upgrades-card--recommended" : ""}`}>
                            {card.recommended && (
                                <div className="ru-upgrades-recommended-badge">Recommended</div>
                            )}
                            <div className="ru-upgrades-card-header">
                                <span className="ru-upgrades-card-icon">{card.icon}</span>
                                <div>
                                    <p className="ru-upgrades-card-title">{card.title}</p>
                                    <p className="ru-upgrades-card-subtitle">{card.subtitle}</p>
                                </div>
                                <span className="ru-upgrades-card-pct" style={{ color: card.barColor }}>{card.percentage}%</span>
                            </div>
                            <div className="ru-upgrades-bar-track">
                                <div className="ru-upgrades-bar-fill" style={{ width: `${card.percentage}%`, background: card.barColor }} />
                            </div>
                            <ul className="ru-upgrades-features">
                                {card.features.map((f, fi) => (
                                    <li key={fi} className="ru-upgrades-feature">
                                        <span className="ru-upgrades-feature-dot" style={{ background: card.barColor }} />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
