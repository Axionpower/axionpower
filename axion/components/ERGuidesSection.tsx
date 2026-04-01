import Link from "next/link";
import { ERGuidesData } from "@/lib/queries/engineering-resources";
import "./ERGuidesSection.css";

export default function ERGuidesSection({ data }: { data: ERGuidesData }) {
  return (
    <section className="er-guides" style={data.bgColor ? { background: data.bgColor } : undefined}>
      <div className="er-guides__container">

        <div className="er-guides__header">
          <span className="er-guides__label">{data.label}</span>
          <h2 className="er-guides__heading">{data.heading}</h2>
          <p className="er-guides__subtitle">{data.subtitle}</p>
        </div>

        <div className="er-guides__grid">
          {data.guides.map((g) => (
            <div key={g.number} className="er-guides__card">
              <div className="er-guides__card-top">
                <span className="er-guides__card-num">{g.number}</span>
                <div className="er-guides__card-badges">
                  <span className="er-guides__card-tag">{g.tag}</span>
                  <span className="er-guides__card-format">{g.format}</span>
                </div>
              </div>
              <h3 className="er-guides__card-title">{g.title}</h3>
              <p className="er-guides__card-desc">{g.description}</p>
              <ul className="er-guides__card-topics">
                {g.topics.map((t, i) => (
                  <li key={i} className="er-guides__topic">
                    <span className="er-guides__topic-dot" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link href={data.requestUrl} className="er-guides__card-link">{data.requestLabel}</Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
