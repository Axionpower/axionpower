import Link from "next/link";
import { TCCtaData } from "@/lib/queries/telecommunications";
import "./TCCtaSection.css";

export default function TCCtaSection({ data }: { data: TCCtaData }) {
    return (
        <section className="tc-cta">
            <div className="tc-cta-inner">
                <div className="tc-cta-label-row">
                    <div className="tc-cta-label-bar" />
                    <span className="tc-cta-label">{data.label}</span>
                </div>
                <h2 className="tc-cta-heading">
                    {data.headingLine1}<br />
                    <span className="tc-cta-heading-accent">{data.headingAccent}</span>
                </h2>
                <p className="tc-cta-desc">{data.description}</p>
                <div className="tc-cta-buttons">
                    <Link href={data.btn1Url} className="tc-cta-btn-primary">{data.btn1Label}</Link>
                    <Link href={data.btn2Url} className="tc-cta-btn-outline">{data.btn2Label}</Link>
                    <Link href={data.btn3Url} className="tc-cta-btn-text">{data.btn3Label}</Link>
                </div>
                <div className="tc-cta-cards">
                    <div className="tc-cta-card">
                        <div className="tc-cta-card-top" style={{ background: data.card1BadgeColor }} />
                        <div className="tc-cta-card-body">
                            <div className="tc-cta-card-header">
                                <span className="tc-cta-card-badge" style={{ background: "rgba(10,14,26,1)", color: data.card1BadgeColor }}>{data.card1Badge}</span>
                                <span className="tc-cta-card-icon">{data.card1Icon}</span>
                            </div>
                            <h3 className="tc-cta-card-title">{data.card1Title}</h3>
                            <p className="tc-cta-card-desc">{data.card1Desc}</p>
                        </div>
                    </div>
                    <div className="tc-cta-card">
                        <div className="tc-cta-card-top" style={{ background: data.card2BadgeColor }} />
                        <div className="tc-cta-card-body">
                            <div className="tc-cta-card-header">
                                <span className="tc-cta-card-badge" style={{ background: "rgba(10,14,26,1)", color: data.card2BadgeColor }}>{data.card2Badge}</span>
                                <span className="tc-cta-card-icon">{data.card2Icon}</span>
                            </div>
                            <h3 className="tc-cta-card-title">{data.card2Title}</h3>
                            <p className="tc-cta-card-desc">{data.card2Desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
