import Link from "next/link";
import { TCHeroData } from "@/lib/queries/telecommunications";
import "./TCHeroSection.css";

export default function TCHeroSection({ data }: { data: TCHeroData }) {
    return (
        <section className="tc-hero">
            <div className="tc-hero-overlay" />
            <div className="tc-hero-inner">
                {/* ── Left ── */}
                <div className="tc-hero-left">
                    <div className="tc-hero-breadcrumb-row">
                        <span className="tc-hero-breadcrumb">{data.breadcrumb}</span>
                    </div>
                    <div className="tc-hero-pill">{data.pill}</div>
                    <h1 className="tc-hero-heading">
                        {data.headingLine1.split("\n").map((l, i, a) => (
                            <span key={i}>{l}{i < a.length - 1 && <br />}</span>
                        ))}
                        <br />
                        <span className="tc-hero-heading-accent">{data.headingAccent}</span>
                        <br />
                        {data.headingLine2}
                    </h1>
                    <div className="tc-hero-accent-bar" />
                    <p className="tc-hero-subtitle">{data.subtitle}</p>
                    <div className="tc-hero-buttons">
                        <Link href={data.btn1Url} className="tc-hero-btn-primary">{data.btn1Label}</Link>
                        <Link href={data.btn2Url} className="tc-hero-btn-ghost">{data.btn2Label}</Link>
                    </div>
                    <div className="tc-hero-badges">
                        {data.badges.map((b, i) => (
                            <div key={i} className="tc-hero-badge">
                                <div className="tc-hero-badge-dot" />
                                <span>{b}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right — Network Status Card ── */}
                <div className="tc-hero-right">
                    <div className="tc-hero-card">
                        <div className="tc-hero-card-header">
                            <div className="tc-hero-card-dots">
                                <span className="tc-dot tc-dot-red" /><span className="tc-dot tc-dot-amber" /><span className="tc-dot tc-dot-green" />
                            </div>
                            <span className="tc-hero-card-title">Network Power Status — Live</span>
                            <span className="tc-hero-card-live"><span className="tc-live-dot" />LIVE</span>
                        </div>
                        <div className="tc-hero-nodes">
                            {data.networkNodes.map((node, i) => (
                                <div key={i} className="tc-hero-node">
                                    <div className="tc-hero-node-circle" style={{ background: `${node.color}20`, border: `2px solid ${node.color}60` }}>
                                        <div className="tc-hero-node-inner" style={{ background: node.color }} />
                                    </div>
                                    <span className="tc-hero-node-label">{node.label}</span>
                                    <div className="tc-hero-node-bar">
                                        <div className="tc-hero-node-bar-fill" style={{ background: node.color }} />
                                    </div>
                                    <span className="tc-hero-node-status" style={{ color: node.color }}>●</span>
                                </div>
                            ))}
                        </div>
                        <div className="tc-hero-card-divider" />
                        <div className="tc-hero-stats-row">
                            {data.heroStats.map((s, i) => (
                                <div key={i} className="tc-hero-stat">
                                    <span className="tc-hero-stat-value" style={{ color: s.color }}>{s.value}</span>
                                    <span className="tc-hero-stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
