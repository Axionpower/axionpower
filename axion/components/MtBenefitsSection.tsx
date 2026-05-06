import React from "react";
import "./MtBenefitsSection.css";
import type { MtBenefitsData } from "@/lib/queries/maintenance";
import {
    MdSecurity, MdBatteryFull, MdSettings, MdVerified, MdSavings,
    MdBusiness, MdLocalHospital, MdCellTower, MdBolt, MdAccountBalance,
} from "react-icons/md";

interface Props {
    data: MtBenefitsData;
}

const BENEFIT_ICONS: Record<string, React.ReactElement> = {
    "🛡": <MdSecurity size={22} />,
    "🔋": <MdBatteryFull size={22} />,
    "⚙": <MdSettings size={22} />,
    "✓": <MdVerified size={22} />,
    "💰": <MdSavings size={22} />,
};

const INDUSTRY_ICONS: Record<string, React.ReactElement> = {
    "🏢": <MdBusiness size={20} />,
    "🏥": <MdLocalHospital size={20} />,
    "📡": <MdCellTower size={20} />,
    "⚡": <MdBolt size={20} />,
    "🏦": <MdAccountBalance size={20} />,
};

function BenefitIcon({ icon }: { icon: string }) {
    return BENEFIT_ICONS[icon] ?? <span style={{ fontSize: 20 }}>{icon}</span>;
}

function IndustryIcon({ icon }: { icon: string }) {
    return INDUSTRY_ICONS[icon] ?? <span style={{ fontSize: 18 }}>{icon}</span>;
}

export default function MtBenefitsSection({ data }: Props) {
    const { label, heading, benefits, industries, overrides } = data;
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
        <section className="mtb-section" style={sectionStyle}>
            <div className="mtb-inner" style={innerStyle}>
                <div className="mtb-label-row">
                    <div className="mtb-label-bar" style={overrides.labelColor ? { backgroundColor: overrides.labelColor } : undefined}></div>
                    <span className="mtb-label" style={overrides.labelColor ? { color: overrides.labelColor } : undefined}>{label}</span>
                </div>
                <HeadingTag className="mtb-heading" style={{
                    ...(overrides.headingColor && { color: overrides.headingColor }),
                    ...(overrides.headingFontSize && { fontSize: overrides.headingFontSize }),
                }}>{heading}</HeadingTag>

                <div className="mtb-content">
                    <div className="mtb-left">
                        <div className="mtb-benefits">
                            {benefits.map((b, i) => (
                                <div key={i} className="mtb-benefit" style={overrides.cardBgColor ? { backgroundColor: overrides.cardBgColor } : undefined}>
                                    <span className="mtb-benefit-icon">
                                        <BenefitIcon icon={b.icon} />
                                    </span>
                                    <div className="mtb-benefit-text">
                                        <CardTag className="mtb-benefit-title">{b.title}</CardTag>
                                        <span className="mtb-benefit-desc">{b.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mtb-right">
                        <div className="mtb-industries-panel">
                            <div className="mtb-industries-title">Industries We Serve</div>
                            <div className="mtb-industries">
                                {industries.map((ind, i) => (
                                    <div key={i} className="mtb-industry">
                                        <span className="mtb-industry-icon">
                                            <IndustryIcon icon={ind.icon} />
                                        </span>
                                        <div className="mtb-industry-text">
                                            <span className="mtb-industry-title">{ind.title}</span>
                                            <span className="mtb-industry-subtitle">{ind.subtitle}</span>
                                        </div>
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
