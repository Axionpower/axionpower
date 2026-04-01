import React from "react";
import "./EsResponseSection.css";
import type { EsResponseData } from "@/lib/queries/emergency-support";

interface Props {
    data: EsResponseData;
}

export default function EsResponseSection({ data }: Props) {
    const o = data.overrides;
    const HeadingTag = (o.headingTag || 'h2') as React.ElementType;
    const CardTag = (o.cardHeadingTag || 'h3') as React.ElementType;
    void CardTag;

    return (
        <section className="es-response">
            <div className="es-response-inner">
                <div className="es-response-label-row">
                    <div className="es-response-label-bar" style={o.labelColor ? { backgroundColor: o.labelColor } : undefined} />
                    <span className="es-response-label-text" style={o.labelColor ? { color: o.labelColor } : undefined}>
                        {data.label}
                    </span>
                </div>

                <div className="es-response-content">
                    {/* Left Column: heading + body + cards */}
                    <div className="es-response-left">
                        <HeadingTag className="es-response-heading" style={o.headingColor ? { color: o.headingColor } : undefined}>
                            {data.heading}
                        </HeadingTag>

                        <p className="es-response-body" style={o.bodyColor ? { color: o.bodyColor } : undefined}>
                            {data.body}
                        </p>

                        <div className="es-response-cards">
                            {data.cards?.map((card, idx) => (
                                <div key={idx} className="es-response-card" style={o.cardBgColor ? { backgroundColor: o.cardBgColor } : undefined}>
                                    <div className="es-response-card-icon-wrap">
                                        <span className="es-response-card-icon">{card.icon}</span>
                                    </div>
                                    <div className="es-response-card-text">
                                        <div className="es-response-card-title">
                                            {card.title}
                                        </div>
                                        <div className="es-response-card-desc">
                                            {card.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Dashboard */}
                    <div className="es-response-right">
                        <div className="es-dashboard-header">
                            <span className="es-dashboard-title">
                                {data.dashboardTitle}
                            </span>
                            <div className="es-dashboard-badge">
                                <div className="es-dashboard-badge-dot" />
                                <span>ONLINE</span>
                            </div>
                        </div>

                        <div className="es-dashboard-stat">
                            <div className="es-dashboard-stat-label">
                                {data.avgResponseLabel}
                            </div>
                            <div className="es-dashboard-stat-value">
                                {data.avgResponseTime}
                            </div>
                            <div className="es-dashboard-stat-sub">
                                {data.avgResponseSub}
                            </div>
                        </div>

                        <div className="es-dashboard-items">
                            {data.statusItems?.map((item, idx) => (
                                <div key={idx} className="es-dashboard-item">
                                    <div className="es-dashboard-item-icon">
                                        {item.icon}
                                    </div>
                                    <span className="es-dashboard-item-text">
                                        {item.label}
                                    </span>
                                    <span
                                        className={`es-dashboard-item-badge ${
                                            item.status === "ACTIVE"
                                                ? "es-dashboard-item-badge-active"
                                                : "es-dashboard-item-badge-available"
                                        }`}
                                        style={{ backgroundColor: item.statusColor }}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="es-emergency-line">
                            <div className="es-emergency-line-label">
                                {data.emergencyLine}
                            </div>
                            <div className="es-emergency-line-phone">
                                {data.emergencyPhone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
