import Link from "next/link";
import { RUHeroData } from "@/lib/queries/replacement-upgrades";
import "./RUHeroSection.css";

export default function RUHeroSection({ data }: { data: RUHeroData }) {
    return (
        <section className="ru-hero">
            <div className="ru-hero-overlay-v" />
            <div className="ru-hero-overlay-h" />
            <div className="ru-hero-inner">
                {/* ── Left Column ── */}
                <div className="ru-hero-left">
                    <div className="ru-hero-breadcrumb-row">
                        <span className="ru-hero-breadcrumb">{data.breadcrumb}</span>
                    </div>
                    <h1 className="ru-hero-heading">{data.heading.split("\n").map((line, i) => (
                        <span key={i}>{line}{i < data.heading.split("\n").length - 1 && <br />}</span>
                    ))}</h1>
                    <div className="ru-hero-accent-bar" />
                    <p className="ru-hero-subtitle">{data.subtitle}</p>
                    <div className="ru-hero-trust">{data.trustBadge}</div>
                    <div className="ru-hero-buttons">
                        <Link href={data.btn1Url} className="ru-hero-btn-primary">{data.btn1Label}</Link>
                        <Link href={data.btn2Url} className="ru-hero-btn-ghost">{data.btn2Label}</Link>
                    </div>
                    <div className="ru-hero-stats">
                        {data.stats.map((s, i) => (
                            <div key={i} className="ru-hero-stat">
                                <span className="ru-hero-stat-value">{s.value}</span>
                                <span className="ru-hero-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right Column — Dashboard Card ── */}
                <div className="ru-hero-right">
                    <div className="ru-hero-card">
                        <div className="ru-hero-card-header">
                            <div className="ru-hero-card-dot ru-dot-red" />
                            <div className="ru-hero-card-dot ru-dot-amber" />
                            <div className="ru-hero-card-dot ru-dot-green" />
                            <span className="ru-hero-card-title">{data.cardTitle}</span>
                        </div>
                        <p className="ru-hero-card-sub">{data.cardSubtitle}</p>
                        <div className="ru-hero-bars">
                            {data.dashboardBars.map((bar, i) => (
                                <div key={i} className="ru-hero-bar-item">
                                    <div className="ru-hero-bar-labels">
                                        <span className="ru-hero-bar-name">{bar.label}</span>
                                        <span className="ru-hero-bar-status" style={{ color: bar.color }}>{bar.status}</span>
                                    </div>
                                    <div className="ru-hero-bar-track">
                                        <div className="ru-hero-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ru-hero-card-divider" />
                        <p className="ru-hero-upcoming-label">{data.upcomingLabel}</p>
                        <div className="ru-hero-upcoming">
                            {data.upcoming.map((item, i) => (
                                <div key={i} className="ru-hero-upcoming-item">
                                    <span className="ru-hero-upcoming-sys">{item.sys}</span>
                                    <span className="ru-hero-upcoming-date">{item.date}</span>
                                    <span className={`ru-hero-upcoming-priority ${item.priority === "Critical" ? "priority-critical" : "priority-planned"}`}>{item.priority}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
