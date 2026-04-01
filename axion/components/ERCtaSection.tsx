import Link from "next/link";
import { ERCtaData } from "@/lib/queries/engineering-resources";
import "./ERCtaSection.css";

export default function ERCtaSection({ data }: { data: ERCtaData }) {
  return (
    <section className="er-cta">
      <div className="er-cta__container">
        <span className="er-cta__label">{data.label}</span>
        <h2 className="er-cta__heading">
          <span className="er-cta__heading-line">{data.headingLine1}</span>
          <span className="er-cta__heading-line er-cta__heading-accent">{data.headingLine2}</span>
        </h2>
        <p className="er-cta__description">{data.description}</p>
        <div className="er-cta__buttons">
          <Link href={data.btn1Url} className="er-cta__btn er-cta__btn--primary">{data.btn1Label}</Link>
          <Link href={data.btn2Url} className="er-cta__btn er-cta__btn--secondary">{data.btn2Label}</Link>
        </div>
        <p className="er-cta__trust">{data.trustLine}</p>
      </div>
    </section>
  );
}
