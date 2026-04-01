import Link from "next/link";
import { CECtaData } from "@/lib/queries/consulting-engineer-hub";
import "./CECtaSection.css";

export default function CECtaSection({ data }: { data: CECtaData }) {
  return (
    <section className="ce-cta">
      <div className="ce-cta__container">
        <span className="ce-cta__label">{data.label}</span>
        <h2 className="ce-cta__heading">
          <span className="ce-cta__heading-line">{data.headingLine1}</span>
          <span className="ce-cta__heading-line ce-cta__heading-accent">{data.headingLine2}</span>
        </h2>
        <p className="ce-cta__description">{data.description}</p>
        <div className="ce-cta__buttons">
          <Link href={data.btn1Url} className="ce-cta__btn ce-cta__btn--primary">{data.btn1Label}</Link>
          <Link href={data.btn2Url} className="ce-cta__btn ce-cta__btn--secondary">{data.btn2Label}</Link>
        </div>
        <p className="ce-cta__trust">{data.trustLine}</p>
      </div>
    </section>
  );
}
