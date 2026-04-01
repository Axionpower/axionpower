import Link from "next/link";
import { USHeroData } from "@/lib/queries/utilities-substations";
import "./USHeroSection.css";

export default function USHeroSection({ data }: { data: USHeroData }) {
    return (
        <section className="us-hero">
            <div className="us-hero-overlay" />
            <div className="us-hero-inner">
                {/* ── Left ── */}
                <div className="us-hero-left">
                    <div className="us-hero-breadcrumb-row">
                        <span className="us-hero-breadcrumb">{data.breadcrumb}</span>
                    </div>
                    <div className="us-hero-pill">{data.pill}</div>
                    <h1 className="us-hero-heading">
                        {data.headingLine1.split("\n").map((l, i, arr) => (
                            <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                        ))}
                        <br />
                        <span className="us-hero-heading-accent">{data.headingAccent}</span>
                        <br />
                        {data.headingLine2}
                    </h1>
                    <div className="us-hero-accent-bar" style={{ width: data.accentBarWidth }} />
                    <p className="us-hero-subtitle">{data.subtitle}</p>
                    <div className="us-hero-buttons">
                        <Link href={data.btn1Url} className="us-hero-btn-primary">{data.btn1Label}</Link>
                        <Link href={data.btn2Url} className="us-hero-btn-ghost">{data.btn2Label}</Link>
                    </div>
                    <div className="us-hero-badges">
                        {data.badges.map((b, i) => (
                            <div key={i} className="us-hero-badge">
                                <div className="us-hero-badge-dot" />
                                <span>{b}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right — Substation visual ── */}
                <div className="us-hero-right">
                    <div className="us-hero-image-card">
                        <div className="us-hero-image-bg" />
                        <div className="us-hero-image-overlay" />
                        <div className="us-hero-circuit-lines">
                            {(data.circuitNodes.length > 0 ? data.circuitNodes : Array(6).fill({ color: "#63def7" })).map((_, i) => (
                                <div key={i} className="us-hero-circuit-line" style={{ top: `${14 + i * 14}%` }} />
                            ))}
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="us-hero-circuit-line-v" style={{ left: `${12 + i * 18}%` }} />
                            ))}
                            {(data.circuitNodes.length > 0 ? data.circuitNodes.slice(0, 4) : Array(4).fill({ color: "#63def7" })).map((node, i) => (
                                <div key={i} className="us-hero-circuit-node" style={{ top: `${28 + (i % 2) * 28}%`, left: `${20 + i * 18}%`, background: node.color, boxShadow: `0 0 8px ${node.color}80` }} />
                            ))}
                        </div>
                        <div className="us-hero-image-caption">{data.imageCaption}</div>
                        <div className="us-hero-image-badge">
                            <span className="us-hero-image-badge-dot" />
                            <span>{data.imageBadgeText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
