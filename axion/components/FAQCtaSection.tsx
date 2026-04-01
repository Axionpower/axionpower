import Link from "next/link";
import { FAQCtaData } from "@/lib/queries/faqs";
import "./FAQCtaSection.css";

export default function FAQCtaSection({ data }: { data: FAQCtaData }) {
  return (
    <section className="faq-cta" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="faq-cta__container">

        <span className="faq-cta__label">{data.label}</span>

        <h2 className="faq-cta__heading">
          <span className="faq-cta__heading-line">{data.headingLine1}</span>
          <span className="faq-cta__heading-line faq-cta__heading-accent">{data.headingLine2}</span>
        </h2>

        <p className="faq-cta__description">{data.description}</p>

        <div className="faq-cta__buttons">
          <Link href={data.btn1Url} className="faq-cta__btn faq-cta__btn--primary">
            {data.btn1Label}
          </Link>
          <Link href={data.btn2Url} className="faq-cta__btn faq-cta__btn--secondary">
            {data.btn2Label}
          </Link>
        </div>

        <p className="faq-cta__trust">{data.trustLine}</p>

      </div>
    </section>
  );
}
