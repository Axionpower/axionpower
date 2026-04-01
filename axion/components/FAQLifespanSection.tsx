import { FAQLifespanData } from "@/lib/queries/faqs";
import "./FAQLifespanSection.css";

export default function FAQLifespanSection({ data }: { data: FAQLifespanData }) {
  return (
    <section className="faq-life" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="faq-life__container">

        {/* Section label */}
        <div className="faq-life__header">
          <span className="faq-life__label">{data.label}</span>
        </div>

        {/* Q1 block */}
        <div className="faq-life__block">
          <h2 className="faq-life__question">
            <span className="faq-life__q-num">{data.q1Num}</span>
            {data.q1}
          </h2>

          <ul className="faq-life__bullets">
            {data.q1Bullets.map((b, i) => (
              <li key={i} className="faq-life__bullet">{b}</li>
            ))}
          </ul>

          {/* Lifespan bars */}
          <div className="faq-life__bars">
            {data.lifespanBars.map((bar) => (
              <div key={bar.type} className="faq-life__bar-row">
                <div className="faq-life__bar-meta">
                  <span className="faq-life__bar-type" style={{ color: bar.color }}>{bar.type}</span>
                  <span className="faq-life__bar-range">{bar.range}</span>
                </div>
                <div className="faq-life__bar-track">
                  <div
                    className="faq-life__bar-fill"
                    style={{
                      background: bar.color,
                      width: bar.width,
                    }}
                  />
                  <span className="faq-life__bar-min">{bar.minYr}</span>
                  <span className="faq-life__bar-max">{bar.maxYr}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="faq-life__divider" />

        {/* Q2 block */}
        <div className="faq-life__block">
          <h2 className="faq-life__question">
            <span className="faq-life__q-num">{data.q2Num}</span>
            {data.q2}
          </h2>

          <div className="faq-life__cards">
            {data.maintenanceCards.map((card) => (
              <div key={card.title} className="faq-life__card">
                <div className="faq-life__card-top">
                  <span
                    className="faq-life__card-badge"
                    style={{ background: card.badgeColor }}
                  >
                    {card.badge}
                  </span>
                  <h3 className="faq-life__card-title">{card.title}</h3>
                  <p className="faq-life__card-subtitle">{card.subtitle}</p>
                </div>
                <ul className="faq-life__card-items">
                  {card.items.map((item, i) => (
                    <li key={i} className="faq-life__card-item">
                      <span className="faq-life__card-check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
