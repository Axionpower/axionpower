import React from "react";
import "./MtRemoteSection.css";
import type { MtRemoteData } from "@/lib/queries/maintenance";

interface Props {
    data: MtRemoteData;
}

export default function MtRemoteSection({ data }: Props) {
    const { label, heading, body, metrics, dashboardStats, alerts, overrides } = data;
    const HeadingTag = (overrides.headingTag || 'h2') as React.ElementType;
    const CardTag = (overrides.cardHeadingTag || 'h3') as React.ElementType;

    const sectionStyle: React.CSSProperties = {
        ...(overrides.bgColor && { backgroundColor: overrides.bgColor }),
        ...(overrides.marginTop && { marginTop: overrides.marginTop }),
        ...(overrides.borderRadiusTop && { borderRadius: `${overrides.borderRadiusTop} ${overrides.borderRadiusTop} 0 0` }),
    };

    const innerStyle: React.CSSProperties = {
        ...(overrides.paddingTop && { paddingTop: overrides.paddingTop }),
        ...(overrides.paddingBottom && { paddingBottom: overrides.paddingBottom }),
        ...(overrides.paddingLeft && { paddingLeft: overrides.paddingLeft }),
        ...(overrides.paddingRight && { paddingRight: overrides.paddingRight }),
    };

    return (
        <section className="mtr-section" style={sectionStyle}>
            <div className="mtr-inner" style={innerStyle}>
                <div className="mtr-label-row">
                    <div className="mtr-label-bar" style={overrides.labelColor ? { backgroundColor: overrides.labelColor } : undefined}></div>
                    <span className="mtr-label" style={overrides.labelColor ? { color: overrides.labelColor } : undefined}>{label}</span>
                </div>
                <HeadingTag className="mtr-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>
                <p className="mtr-body" style={{
                    ...(overrides.bodyColor && { color: overrides.bodyColor }),
                    ...(overrides.bodyFontSize && { fontSize: overrides.bodyFontSize }),
                }}>{body}</p>

                <div className="mtr-content">
                    <div className="mtr-left">
                        <div className="mtr-metrics">
                            {metrics.map((m, i) => (
                                <div key={i} className="mtr-metric" style={{ backgroundColor: m.cardColor }}>
                                    <div className="mtr-metric-header">
                                        <div className="mtr-metric-icon">{m.icon}</div>
                                        <div className="mtr-metric-title">{m.title}</div>
                                    </div>
                                    <div className="mtr-metric-subtitle">{m.subtitle}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mtr-right">
                        <div className="mtr-dashboard">
                            <div className="mtr-dashboard-title">Live Monitoring Dashboard</div>
                            <div className="mtr-dashboard-stats">
                                {dashboardStats.map((stat, i) => (
                                    <div key={i} className="mtr-dash-stat">
                                        <div className="mtr-dash-stat-value">{stat.value}</div>
                                        <div className="mtr-dash-stat-label">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mtr-dashboard-alerts">
                                {alerts.map((alert, i) => (
                                    <div key={i} className="mtr-alert">
                                        <span className="mtr-alert-icon">{alert.icon}</span>
                                        <span>{alert.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
