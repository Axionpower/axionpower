import { RUPlanningData } from "@/lib/queries/replacement-upgrades";
import "./RUPlanningSection.css";

export default function RUPlanningSection({ data }: { data: RUPlanningData }) {
    return (
        <section className="ru-plan">
            <div className="ru-plan-inner">
                {/* ── Header ── */}
                <div className="ru-plan-header">
                    <div className="ru-plan-label-row">
                        <div className="ru-plan-label-bar" />
                        <span className="ru-plan-label">{data.label}</span>
                    </div>
                    <h2 className="ru-plan-heading">{data.heading.split("\n").map((l, i, arr) => (
                        <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
                    ))}</h2>
                    <p className="ru-plan-desc">{data.description}</p>
                    <div className="ru-plan-trust">{data.trustBadge}</div>
                </div>

                {/* ── Process Cards + Checklist ── */}
                <div className="ru-plan-body">
                    <div className="ru-plan-cards">
                        {data.cards.map((card, i) => (
                            <div key={i} className="ru-plan-card">
                                <div className="ru-plan-card-number">{String(i + 1).padStart(2, "0")}</div>
                                <div className="ru-plan-card-icon-wrap">
                                    <span className="ru-plan-card-icon">{card.icon}</span>
                                </div>
                                <h3 className="ru-plan-card-title">{card.title}</h3>
                                <p className="ru-plan-card-desc">{card.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="ru-plan-checklist">
                        <div className="ru-plan-checklist-top" />
                        <div className="ru-plan-checklist-body">
                            <h3 className="ru-plan-checklist-title">{data.checklistTitle}</h3>
                            <ul className="ru-plan-checklist-list">
                                {data.checklistItems.map((item, i) => (
                                    <li key={i} className="ru-plan-checklist-item">
                                        <span className="ru-plan-check-icon">✓</span>
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
