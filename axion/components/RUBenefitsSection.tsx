import Link from "next/link";
import { RUBenefitsData } from "@/lib/queries/replacement-upgrades";
import "./RUBenefitsSection.css";

export default function RUBenefitsSection({ data }: { data: RUBenefitsData }) {
    return (
        <section className="ru-benefits">
            <div className="ru-benefits-inner">
                {/* ── Left ── */}
                <div className="ru-benefits-left">
                    <div className="ru-benefits-label-row">
                        <div className="ru-benefits-label-bar" />
                        <span className="ru-benefits-label">{data.label}</span>
                    </div>
                    <h2 className="ru-benefits-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="ru-benefits-desc">{data.description}</p>
                    <div className="ru-benefits-stats">
                        {data.stats.map((s, i) => (
                            <div key={i} className="ru-benefits-stat">
                                <span className="ru-benefits-stat-value">{s.value}</span>
                                <span className="ru-benefits-stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="ru-benefits-cta">
                        <p className="ru-benefits-cta-title">{data.ctaTitle}</p>
                        <p className="ru-benefits-cta-desc">{data.ctaDesc.split("\n").map((l, i, arr) => (
                            <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                        ))}</p>
                        <Link href={data.ctaBtnUrl} className="ru-benefits-cta-btn">{data.ctaBtnLabel}</Link>
                    </div>
                </div>

                {/* ── Right — Benefit cards ── */}
                <div className="ru-benefits-right">
                    {data.benefits.map((b, i) => (
                        <div key={i} className="ru-benefits-card">
                            <div className="ru-benefits-card-bar" style={{ background: b.accentColor }} />
                            <div className="ru-benefits-card-num" style={{ color: b.accentColor }}>{b.number}</div>
                            <h3 className="ru-benefits-card-title">{b.title}</h3>
                            <p className="ru-benefits-card-desc">{b.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
