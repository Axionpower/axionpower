import Link from "next/link";
import { USWhyData } from "@/lib/queries/utilities-substations";
import "./USWhySection.css";

export default function USWhySection({ data }: { data: USWhyData }) {
    return (
        <section className="us-why">
            {/* ── Main two-column row ── */}
            <div className="us-why-inner">
                {/* Left */}
                <div className="us-why-left">
                    <div className="us-why-accent-blocks">
                        <div className="us-why-accent-block" />
                        <div className="us-why-accent-block" />
                    </div>
                    <h2 className="us-why-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="us-why-sub">{data.subheading}</p>
                    <Link href={data.ctaUrl} className="us-why-cta">{data.ctaLabel}</Link>
                </div>

                {/* Right — Reasons */}
                <div className="us-why-right">
                    {data.reasons.map((r, i) => (
                        <div key={i} className="us-why-reason">
                            <div className="us-why-reason-left">
                                <span className="us-why-reason-num" style={{ color: r.accentColor }}>{r.number}</span>
                                <div className="us-why-reason-bar" style={{ background: r.accentColor }} />
                            </div>
                            <p className="us-why-reason-text">{r.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Full-width stats bar below ── */}
            {data.uptimeStats.length > 0 && (
                <div className="us-why-stats-bar">
                    {data.uptimeStats.map((s, i) => (
                        <div key={i} className="us-why-stat">
                            <span className="us-why-stat-value" style={{ color: s.color }}>{s.value}</span>
                            <span className="us-why-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
