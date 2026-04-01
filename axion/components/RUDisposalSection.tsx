import Link from "next/link";
import { RUDisposalData } from "@/lib/queries/replacement-upgrades";
import "./RUDisposalSection.css";

export default function RUDisposalSection({ data }: { data: RUDisposalData }) {
    const [wideCard, ...smallCards] = data.cards;
    return (
        <section className="ru-disposal">
            <div className="ru-disposal-inner">
                <div className="ru-disposal-header">
                    <div className="ru-disposal-label-row">
                        <div className="ru-disposal-label-bar" />
                        <span className="ru-disposal-label">{data.label}</span>
                    </div>
                    <h2 className="ru-disposal-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="ru-disposal-desc">{data.description}</p>
                </div>

                {/* ── Wide card ── */}
                <div className="ru-disposal-wide-card" style={{ borderTopColor: wideCard.accentColor }}>
                    <div className="ru-disposal-card-top">
                        <div className="ru-disposal-card-icon-wrap" style={{ background: `${wideCard.accentColor}20` }}>
                            <span className="ru-disposal-card-icon">{wideCard.icon}</span>
                        </div>
                        <div>
                            <span className="ru-disposal-card-number" style={{ color: wideCard.accentColor }}>{wideCard.number}</span>
                            <h3 className="ru-disposal-card-title">{wideCard.title}</h3>
                        </div>
                    </div>
                    <p className="ru-disposal-card-desc">{wideCard.description}</p>
                    {wideCard.features && (
                        <ul className="ru-disposal-features">
                            {wideCard.features.map((f, i) => (
                                <li key={i} className="ru-disposal-feature">
                                    <span className="ru-disposal-feature-check" style={{ color: wideCard.accentColor }}>✓</span>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <Link href="/contact" className="ru-disposal-link" style={{ color: wideCard.accentColor }}>{wideCard.linkLabel}</Link>
                </div>

                {/* ── Small cards row ── */}
                <div className="ru-disposal-small-row">
                    {smallCards.map((card, i) => (
                        <div key={i} className="ru-disposal-small-card" style={{ borderTopColor: card.accentColor }}>
                            <div className="ru-disposal-card-top">
                                <div className="ru-disposal-card-icon-wrap" style={{ background: `${card.accentColor}20` }}>
                                    <span className="ru-disposal-card-icon">{card.icon}</span>
                                </div>
                                <div>
                                    <span className="ru-disposal-card-number" style={{ color: card.accentColor }}>{card.number}</span>
                                    <h3 className="ru-disposal-card-title">{card.title}</h3>
                                </div>
                            </div>
                            <p className="ru-disposal-card-desc">{card.description}</p>
                            <Link href="/contact" className="ru-disposal-link" style={{ color: card.accentColor }}>{card.linkLabel}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
