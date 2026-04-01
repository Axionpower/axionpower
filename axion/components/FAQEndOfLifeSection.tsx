import { FAQEndOfLifeData } from "@/lib/queries/faqs";
import "./FAQEndOfLifeSection.css";

export default function FAQEndOfLifeSection({ data }: { data: FAQEndOfLifeData }) {
  return (
    <section className="faq-eol" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="faq-eol__container">

        <div className="faq-eol__header">
          <span className="faq-eol__label">{data.label}</span>
        </div>

        <div className="faq-eol__block">
          <h2 className="faq-eol__question">
            <span className="faq-eol__q-num">{data.q5Num}</span>
            {data.q5}
          </h2>
          <p className="faq-eol__intro">{data.q5Intro}</p>
        </div>

        {/* Recycling Steps */}
        <div className="faq-eol__steps">
          {data.recyclingSteps.map((step) => (
            <div key={step.number} className="faq-eol__step-card">
              <div className="faq-eol__step-number">{step.number}</div>
              <h3 className="faq-eol__step-title">{step.title}</h3>
              <p className="faq-eol__step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Compliance table */}
        <div className="faq-eol__compliance">
          <h4 className="faq-eol__compliance-title">{data.complianceTitle}</h4>
          <div className="faq-eol__compliance-rows">
            {data.complianceRows.map((row) => (
              <div key={row.standard} className="faq-eol__compliance-row">
                <span className="faq-eol__compliance-standard">{row.standard}</span>
                <span className="faq-eol__compliance-detail">{row.detail}</span>
                <span className="faq-eol__compliance-check">✓</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
