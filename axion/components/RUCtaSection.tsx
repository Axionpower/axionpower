import Link from "next/link";
import { RUCtaData } from "@/lib/queries/replacement-upgrades";
import "./RUCtaSection.css";

export default function RUCtaSection({ data }: { data: RUCtaData }) {
    return (
        <section className="ru-cta">
            <div className="ru-cta-inner">
                {/* ── Main card ── */}
                <div className="ru-cta-main">
                    <div className="ru-cta-main-top" />
                    <div className="ru-cta-main-body">
                        <div className="ru-cta-label-row">
                            <div className="ru-cta-label-bar" />
                            <span className="ru-cta-label">{data.label}</span>
                        </div>
                        <h2 className="ru-cta-heading">{data.heading.split("\n").map((l, i, arr) => (
                            <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                        ))}</h2>
                        <p className="ru-cta-desc">{data.description}</p>
                        <div className="ru-cta-buttons">
                            <Link href={data.btn1Url} className="ru-cta-btn-primary">{data.btn1Label}</Link>
                            <Link href={data.btn2Url} className="ru-cta-btn-ghost">{data.btn2Label}</Link>
                        </div>
                        <p className="ru-cta-phone">{data.phone}</p>
                    </div>
                </div>

                {/* ── Service mini-cards ── */}
                <div className="ru-cta-cards">
                    {data.cards.map((card, i) => (
                        <div key={i} className="ru-cta-card">
                            <div className="ru-cta-card-top" style={{ background: card.badgeColor }} />
                            <div className="ru-cta-card-body">
                                <span className="ru-cta-card-icon">{card.icon}</span>
                                <h3 className="ru-cta-card-title">{card.title}</h3>
                                <p className="ru-cta-card-desc">{card.description}</p>
                                <Link href={card.linkUrl} className="ru-cta-card-link" style={{ color: card.badgeColor }}>{card.linkLabel}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}