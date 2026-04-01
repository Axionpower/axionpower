import Link from "next/link";
import { DCCtaData } from "@/lib/queries/data-centers";
import "./DCCtaSection.css";

export default function DCCtaSection({ data }: { data: DCCtaData }) {
  return (
    <section className="dc-cta">
      <div className="dc-cta-inner">
        <div className="dc-cta-left">
          <span className="dc-cta-label">{data.label}</span>
          <h2 className="dc-cta-heading">
            {data.headingLine1}
            <br />
            {data.headingLine2}
          </h2>
          <p className="dc-cta-desc">{data.description}</p>
          <div className="dc-cta-value-props">
            {data.valueProps.map((vp, i) => (
              <div key={i} className="dc-cta-vp">
                <span className="dc-cta-vp-title">{vp.title}</span>
                <span className="dc-cta-vp-caption">{vp.caption}</span>
              </div>
            ))}
          </div>
          <div className="dc-cta-buttons">
            <Link href={data.btn1Url} className="dc-cta-btn dc-cta-btn--primary">{data.btn1Label}</Link>
            <Link href={data.btn2Url} className="dc-cta-btn dc-cta-btn--outline">{data.btn2Label}</Link>
          </div>
        </div>

        <div className="dc-cta-right">
          <div className="dc-cta-form-card">
            <h3 className="dc-cta-form-heading">{data.formHeading}</h3>
            <p className="dc-cta-form-sub">{data.formSubheading}</p>
            <div className="dc-cta-fields">
              {data.fields.map((field, i) => (
                <div key={i} className="dc-cta-field">
                  <label className="dc-cta-field-label">{field.label}</label>
                  <input
                    type={field.label === "Contact Email" ? "email" : "text"}
                    className="dc-cta-field-input"
                    placeholder={field.placeholder}
                    readOnly
                  />
                </div>
              ))}
            </div>
            <button className="dc-cta-form-btn">{data.formBtnLabel}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
