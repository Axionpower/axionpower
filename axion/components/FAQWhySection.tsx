import { FAQWhyData } from "@/lib/queries/faqs";
import "./FAQWhySection.css";

export default function FAQWhySection({ data }: { data: FAQWhyData }) {
  const lines = data.heading.split("\n");
  return (
    <section className="faq-why" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="faq-why__container">

        <div className="faq-why__header">
          <span className="faq-why__label">{data.label}</span>
          <h2 className="faq-why__heading">
            {lines.map((line, i) => (
              <span key={i} className="faq-why__heading-line">{line}</span>
            ))}
          </h2>
        </div>

        <div className="faq-why__cards">
          {data.cards.map((card) => (
            <div key={card.title} className="faq-why__card">
              <div className="faq-why__card-icon">{card.icon}</div>
              <h3 className="faq-why__card-title">{card.title}</h3>
              <p className="faq-why__card-desc">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
