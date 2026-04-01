import Link from "next/link";
import { IICtaData } from "@/lib/queries/industrial-infrastructure";
import "./IICtaSection.css";

export default function IICtaSection({ data }: { data: IICtaData }) {
  return (
    <section className="ii-cta">
      <div className="ii-cta-inner">
        <div className="ii-cta-label-row">
          <span className="ii-cta-label-bar" />
          <span className="ii-cta-label">{data.label}</span>
        </div>
        <h2 className="ii-cta-heading">
          {data.headingLine1}<br />
          <span className="ii-cta-heading-accent">{data.headingAccent}</span>
        </h2>
        <p className="ii-cta-desc">{data.description}</p>
        <div className="ii-cta-buttons">
          <Link href={data.btn1Url} className="ii-cta-btn-primary">
            {data.btn1Label}
          </Link>
          <Link href={data.btn2Url} className="ii-cta-btn-outline">
            {data.btn2Label}
          </Link>
          <Link href={data.btn3Url} className="ii-cta-btn-text">
            {data.btn3Label}
          </Link>
        </div>
        <div className="ii-cta-cards">
          {data.cards.map((card, i) => (
            <div key={i} className="ii-cta-card">
              <div className="ii-cta-card-top" style={{ background: card.badgeColor }} />
              <div className="ii-cta-card-body">
                <div className="ii-cta-card-header">
                  <span className="ii-cta-card-badge" style={{ background: card.badgeColor }}>
                    {card.badge}
                  </span>
                  <span className="ii-cta-card-icon">{card.icon}</span>
                </div>
                <h3 className="ii-cta-card-title">{card.title}</h3>
                <p className="ii-cta-card-desc">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
