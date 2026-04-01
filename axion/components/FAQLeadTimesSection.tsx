import { FAQLeadTimesData } from "@/lib/queries/faqs";
import "./FAQLeadTimesSection.css";

export default function FAQLeadTimesSection({ data }: { data: FAQLeadTimesData }) {
  return (
    <section className="faq-lead" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="faq-lead__container">

        <div className="faq-lead__header">
          <span className="faq-lead__label">{data.label}</span>
        </div>

        {/* Q3 — Lead Times */}
        <div className="faq-lead__block">
          <h2 className="faq-lead__question">
            <span className="faq-lead__q-num">{data.q3Num}</span>
            {data.q3}
          </h2>

          <div className="faq-lead__grid">
            {/* Left: headline + steps */}
            <div className="faq-lead__left">
              <div className="faq-lead__headline">{data.leadTimeHeadline}</div>
              <p className="faq-lead__desc">{data.leadTimeDesc}</p>

              {/* Horizontal step bar */}
              <div className="faq-lead__steps">
                {data.leadSteps.map((step, i) => (
                  <div key={i} className="faq-lead__step">
                    <div className="faq-lead__step-circle">{i + 1}</div>
                    {i < data.leadSteps.length - 1 && (
                      <div className="faq-lead__step-line" />
                    )}
                    <span className="faq-lead__step-label">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: factors */}
            <div className="faq-lead__right">
              <h4 className="faq-lead__factors-title">{data.factorsTitle}</h4>
              <div className="faq-lead__factors">
                {data.factors.map((f) => (
                  <div key={f.label} className="faq-lead__factor-row">
                    <span className="faq-lead__factor-label">{f.label}</span>
                    <span className="faq-lead__factor-detail">{f.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="faq-lead__divider" />

        {/* Q4 — Warranty */}
        <div className="faq-lead__block">
          <h2 className="faq-lead__question">
            <span className="faq-lead__q-num">{data.q4Num}</span>
            {data.q4}
          </h2>

          <p className="faq-lead__warranty-intro">{data.warrantyIntro}</p>

          <div className="faq-lead__badges">
            {data.warrantyBadges.map((b) => (
              <span key={b} className="faq-lead__badge">{b}</span>
            ))}
          </div>

          <ul className="faq-lead__warranty-points">
            {data.warrantyPoints.map((p, i) => (
              <li key={i} className="faq-lead__warranty-point">
                <span className="faq-lead__point-check">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
